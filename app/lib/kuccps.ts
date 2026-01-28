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

// Mock Data - To be replaced by User's JSON
export const MOCK_COURSES: Course[] = [
  // Cluster 1: Law
  { id: "law-uon", name: "Bachelor of Laws (LL.B)", university: "University of Nairobi", clusterId: 1, cutoff: 42.5, type: "Degree", category: "Public" },
  { id: "law-ku", name: "Bachelor of Laws (LL.B)", university: "Kenyatta University", clusterId: 1, cutoff: 41.8, type: "Degree", category: "Public" },
  { id: "law-sub", name: "Bachelor of Laws (LL.B)", university: "Strathmore University", clusterId: 1, cutoff: 38.0, type: "Degree", category: "Private" },
  
  // Cluster 2: Business
  { id: "comm-uon", name: "Bachelor of Commerce", university: "University of Nairobi", clusterId: 2, cutoff: 38.5, type: "Degree", category: "Public" },
  { id: "bba-jkuat", name: "Bachelor of Business IT", university: "JKUAT", clusterId: 2, cutoff: 39.2, type: "Degree", category: "Public" },
  
  // Cluster 7: Computing
  { id: "cs-uon", name: "BSc. Computer Science", university: "University of Nairobi", clusterId: 7, cutoff: 43.1, type: "Degree", category: "Public" },
  { id: "cs-jkuat", name: "BSc. Computer Science", university: "JKUAT", clusterId: 7, cutoff: 42.8, type: "Degree", category: "Public" },
  { id: "it-ku", name: "BSc. Information Technology", university: "Kenyatta University", clusterId: 7, cutoff: 36.5, type: "Degree", category: "Public" },
  { id: "cs-usiu", name: "BSc. Applied Computer Technology", university: "USIU-Africa", clusterId: 7, cutoff: 30.0, type: "Degree", category: "Private" },

  // Cluster 13: Medicine
  { id: "med-uon", name: "Bachelor of Medicine & Surgery", university: "University of Nairobi", clusterId: 13, cutoff: 45.2, type: "Degree", category: "Public" },
  { id: "med-ku", name: "Bachelor of Medicine & Surgery", university: "Kenyatta University", clusterId: 13, cutoff: 44.8, type: "Degree", category: "Public" },
  { id: "nurs-jkuat", name: "BSc. Nursing", university: "JKUAT", clusterId: 13, cutoff: 41.5, type: "Degree", category: "Public" },

  // Cluster 5: Engineering
  { id: "civil-uon", name: "BSc. Civil Engineering", university: "University of Nairobi", clusterId: 5, cutoff: 43.0, type: "Degree", category: "Public" },
  { id: "elec-tu", name: "BSc. Electrical Engineering", university: "Technical University of Kenya", clusterId: 5, cutoff: 40.5, type: "Degree", category: "Public" },
];
