'use server';

import { loadCutoffsData, inferCluster } from '../lib/data-loader';
import { calculateClusterPoints, Course } from '../lib/kuccps';

export async function getRecommendations(
  clusterId: number,
  meanGrade: string,
  subjectGrades: string[]
): Promise<{ points: number; matches: Course[] }> {
  
  // 1. Calculate Points
  const points = calculateClusterPoints(meanGrade, subjectGrades);

  // 2. Load Data
  const data = await loadCutoffsData();
  
  const matches: Course[] = [];

  // 3. Iterate and Filter
  for (const [courseGroup, entries] of Object.entries(data)) {
    // Check if this course group belongs to the selected cluster
    // Using strict text matching or the infer function
    const inferredId = inferCluster(courseGroup);
    
    // If inferredId matches OR if we want to show everything (not efficient), let's stick to matching.
    // If inferredId is null, we might miss it.
    // For now, let's include if inferredId matches.
    // NOTE: The cluster map in `data-loader.ts` is very basic. 
    // This might return 0 results if the mapping isn't good.
    // Alternatively, we can return ALL courses where points >= cutoff, 
    // and let the user filter? No, there are thousands.
    
    // Let's rely on the inferred ID for now.
    // If clusterId is not passed (-1), maybe return top matches from any cluster?
    // User selects a cluster in the UI.
    
    // Fallback: If inferCluster returns null, maybe check individual program names? Usually they are the same.
    
    if (inferredId === clusterId || (clusterId === 0)) { // 0 for 'All'
       for (const entry of entries) {
          const cutoffStr = entry["2024 CUTOFF"];
          const university = entry["INSTITUTION NAME"];
          const progName = entry["PROGRAMME NAME"];
          
          if (cutoffStr && cutoffStr !== "-") {
            const cutoff = parseFloat(cutoffStr);
            if (!isNaN(cutoff)) {
              if (points >= cutoff) {
                matches.push({
                   id: entry["PROG CODE"] || Math.random().toString(), // Use PROG CODE if unique
                   name: progName,
                   university: university,
                   clusterId: inferredId || 0,
                   cutoff: cutoff,
                   type: progName.includes("DIPLOMA") ? "Diploma" : "Degree",
                   category: "Public" // Assumption, as most in KUCCPS are public unies, but private ones are there too.
                });
              }
            }
          }
       }
    }
  }

  // 4. Sort by Cutoff (Descending - best matches)
  matches.sort((a, b) => b.cutoff - a.cutoff);

  return {
    points,
    matches: matches.slice(0, 4) // Limit to top 4
  };
}
