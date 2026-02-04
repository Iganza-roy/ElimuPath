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
  
  // 1: Law
  if (upper.includes("LAW")) return 1;
  
  // 2: Business
  if (upper.includes("BUSINESS") || upper.includes("COMMERCE") || upper.includes("ECONOMICS") || upper.includes("ACCOUNTING") || upper.includes("HOSPITALITY") || upper.includes("HOTEL")) return 2;
  
  // 3: Social Sciences & Arts
  if (upper.includes("ARTS") || upper.includes("SOCIAL") || upper.includes("MEDIA") || upper.includes("FILM") || upper.includes("GRAPHICS") || upper.includes("DEVELOPMENT") || upper.includes("SOCIOLOGY")) return 3;
  
  // 4: Geosciences
  if (upper.includes("GEOLOGY") || upper.includes("METEOROLOGY") || upper.includes("GEOSPATIAL") || upper.includes("GEOGRAPHY")) return 4;
  
  // 5: Engineering
  if (upper.includes("ENGINEERING") || (upper.includes("TECHNOLOGY") && !upper.includes("INFORMATION") && !upper.includes("DESIGN"))) return 5;
  
  // 6: Architecture
  if (upper.includes("ARCHITECT") || upper.includes("BUILDING") || upper.includes("CONSTRUCTION") || upper.includes("REAL ESTATE")) return 6;
  
  // 7: Computing
  if (upper.includes("COMPUTER") || upper.includes("INFORMATION TECH") || upper.includes("SOFTWARE") || upper.includes("IT")) return 7;
  
  // 8: Agribusiness
  if (upper.includes("AGRIBUSINESS")) return 8; // Prioritize over general agri
  
  // 9: General Science
  if (upper.includes("BACHELOR OF SCIENCE") && !upper.includes("ENG") && !upper.includes("MED") && !upper.includes("ACTUARIAL")) return 9;
  
  // 10: Actuarial & Math
  if (upper.includes("ACTUARIAL") || upper.includes("STATISTICS")) return 10;
  
  // 11: Design & Fashion
  if (upper.includes("INTERIOR") || upper.includes("FASHION") || upper.includes("TEXTILE")) return 11;
  
  // 12: Sport Science
  if (upper.includes("SPORT")) return 12;
  
  // 13: Health
  if (upper.includes("MEDICINE") || upper.includes("NURSING") || upper.includes("SURGERY") || upper.includes("PHARMACY") || upper.includes("HEALTH") || upper.includes("DENTAL")) return 13;
  
  // 14: History
  if (upper.includes("HISTORY") || upper.includes("ARCHAEOLOGY")) return 14;
  
  // 15: Agriculture (General)
  if (upper.includes("AGRICULTURE") || upper.includes("FOOD") || upper.includes("NUTRITION")) return 15;
  
  // 16: Geography (Actually overlaps with 4, need context. Usually 'Bachelor of Science (Geography)' is GeoSciences (4), 'Bachelor of Geography' maybe 16? Let's assume general Geo is 16 now unless Geoscience specific)
  if (upper === "BACHELOR OF GEOGRAPHY" || upper.includes("GEOGRAPHY")) return 16;
  
  // 17: French/German
  if (upper.includes("FRENCH") || upper.includes("GERMAN")) return 17;
  
  // 18: Music
  if (upper.includes("MUSIC")) return 18;
  
  // 19: Education
  if (upper.includes("EDUCATION")) return 19;
  
  // 20: Religious Studies
  if (upper.includes("THEOLOGY") || upper.includes("ISLAMIC") || upper.includes("RELIGIOUS")) return 20;

  return null;
}
