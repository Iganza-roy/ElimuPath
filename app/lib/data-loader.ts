import fs from 'fs/promises';
import path from 'path';

const CUTOFFS_PATH = path.join(process.cwd(), 'app/lib/cutoffs.json');

export interface CutoffEntry {
  "#": string;
  "PROG CODE": string;
  "INSTITUTION NAME": string;
  "PROGRAMME NAME": string;
  "2018 CUTOFF": string;
  "2019 CUTOFF": string;
  "2020 CUTOFF": string;
  "2021 CUTOFF": string;
  "2022 CUTOFF": string;
  "2023 CUTOFF": string;
  "2024 CUTOFF": string;
}

export type CourseData = {
  name: string;
  entries: CutoffEntry[];
};

let cachedData: Record<string, CutoffEntry[]> | null = null;

export async function loadCutoffsData(): Promise<Record<string, CutoffEntry[]>> {
  if (cachedData) {
    return cachedData;
  }

  try {
    const data = await fs.readFile(CUTOFFS_PATH, 'utf-8');
    // Handle BOM if present (though we fixed it in the script, fs.readFile doesn't strip BOM automatically unless encoded right, but JSON.parse might fail if not careful. utf-8 usually handles it if clean, but let's be safe).
    // Actually JSON.parse handles BOM in some node versions, but better safe.
    const cleanData = data.replace(/^\uFEFF/, '');
    cachedData = JSON.parse(cleanData);
    return cachedData!;
  } catch (error) {
    console.error("Failed to load cutoffs data:", error);
    return {};
  }
}

// Simple heuristic mapping for clusters
// ideally this should be replaced by an AI classifier or official mapping
export function inferCluster(courseName: string): number | null {
  const upper = courseName.toUpperCase();
  
  if (upper.includes("LAW")) return 1; // Law
  if (upper.includes("BUSINESS") || upper.includes("COMMERCE") || upper.includes("ECONOMICS") || upper.includes("ACCOUNTING")) return 2; // Business
  if (upper.includes("ARTS") || upper.includes("SOCIAL")) return 3; // Arts
  if (upper.includes("GEOSCIENCE") || upper.includes("METEOROLOGY")) return 4; // Geo
  if (upper.includes("ENGINEERING") || upper.includes("TECHNOLOGY")) return 5; // Engineering (Specific engineering often overrides general tech)
  if (upper.includes("ARCHITECT")) return 6; // Architecture (Check cluster list)
  if (upper.includes("COMPUTER") || upper.includes("INFORMATION TECH") || upper.includes("SOFTWARE")) return 7; // Computing
  if (upper.includes("MEDICINE") || upper.includes("NURSING") || upper.includes("SURGERY") || upper.includes("PHARMACY")) return 13; // Health
  if (upper.includes("EDUCATION")) return 20; // Education (Usually cluster 20 or distributed)
  
  // ... Add more mappings as needed based on the 20 clusters
  return null;
}
