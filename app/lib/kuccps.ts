// Grade to Points Mapping
export const GRADE_POINTS: Record<string, number> = {
  "A": 12, "A-": 11,
  "B+": 10, "B": 9, "B-": 8,
  "C+": 7, "C": 6, "C-": 5,
  "D+": 4, "D": 3, "D-": 2,
  "E": 1,
};

// Calculate Weighted Cluster Points
// Formula: WCP = ( sqrt( (r/48) * (t/84) ) ) * 48
// r = Sum of 4 cluster subjects points
// t = Aggregate points (Estimated as Mean Grade Points * 7)
export function calculateClusterPoints(
  meanGrade: string,
  subjectGrades: string[]
): number {
  const meanPoints = GRADE_POINTS[meanGrade] || 0;
  const aggregatePoints = meanPoints * 7; // Estimate

  const r = subjectGrades.reduce((sum, grade) => sum + (GRADE_POINTS[grade] || 0), 0);
  const t = aggregatePoints;

  // Avoid division by zero
  if (t === 0) return 0;

  const rawClusterRatio = r / 48;
  const aggregateRatio = t / 84;

  const wcp = Math.sqrt(rawClusterRatio * aggregateRatio) * 48;
  
  return parseFloat(wcp.toFixed(3));
}

export type Course = {
  id: string;
  name: string;
  university: string;
  clusterId: number; // Matches the 20 clusters
  cutoff: number;
  type: "Degree" | "Diploma";
  category: "Public" | "Private";
};


