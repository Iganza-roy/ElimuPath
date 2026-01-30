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
  
  // Cluster 1: Law
  if (upper.includes("LAW")) return 1;
  
  // Cluster 2: Business
  if (upper.includes("BUSINESS") || upper.includes("COMMERCE") || upper.includes("ECONOMICS") || upper.includes("ACCOUNTING") || upper.includes("HOSPITALITY") || upper.includes("HOTEL")) return 2;
  
  // Cluster 3: Social Sciences, Arts
  if (upper.includes("ARTS") || upper.includes("SOCIAL") || upper.includes("MEDIA") || upper.includes("DEVELOPMENT") || upper.includes("SOCIOLOGY")) return 3;
  
  // Cluster 4: Geosciences
  if (upper.includes("GEOLOGY") || upper.includes("METEOROLOGY") || upper.includes("GEOSPATIAL")) return 4;
  
  // Cluster 5: Engineering (Explicit)
  if (upper.includes("ENGINEERING") || (upper.includes("TECHNOLOGY") && !upper.includes("INFORMATION"))) return 5;
  
  // Cluster 7: Computing
  if (upper.includes("COMPUTER") || upper.includes("INFORMATION TECH") || upper.includes("SOFTWARE") || upper.includes("IT")) return 7;
  
  // Cluster 9: General Science
  if (upper.includes("BACHELOR OF SCIENCE") && !upper.includes("ENG") && !upper.includes("MED")) return 9; // Fallback for simple BSc?
  
  // Cluster 10: Actuarial
  if (upper.includes("ACTUARIAL") || upper.includes("STATISTICS")) return 10;
  
  // Cluster 13: Health
  if (upper.includes("MEDICINE") || upper.includes("NURSING") || upper.includes("SURGERY") || upper.includes("PHARMACY") || upper.includes("HEALTH") || upper.includes("DENTAL")) return 13;
  
  // Cluster 15: Agri
  if (upper.includes("AGRICULTURE") || upper.includes("FOOD") || upper.includes("NUTRITION") || upper.includes("AGRIBUSINESS")) return 15;
  
  // Cluster 19: Education
  if (upper.includes("EDUCATION")) return 19;
  
  return null;
}
