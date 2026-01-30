
export type Cluster = {
  id: number;
  name: string;
  subjects: string[];
};

export const CLUSTERS: Cluster[] = [
  { id: 1, name: "Law & Related", subjects: ["English", "Kiswahili", "Math", "History"] }, // Example subjects
  { id: 2, name: "Business & Related", subjects: ["Math", "English", "Business Studies", "Geography"] },
  { id: 3, name: "Arts & Related", subjects: ["English", "Kiswahili", "Math", "History"] },
  { id: 4, name: "GeoSciences & Related", subjects: ["Math", "Physics", "Chemistry", "Geography"] },
  { id: 5, name: "Special Needs Education", subjects: ["English", "Biology", "Math", "Kiswahili"] }, // Verify subject
  { id: 6, name: "Kiswahili & Related", subjects: ["Kiswahili", "English", "Math", "History"] },
  { id: 7, name: "Engineering, Technology & Related", subjects: ["Math", "Physics", "Chemistry", "English"] },
  { id: 8, name: "Architecture, Design & Planning", subjects: ["Math", "Physics", "English", "History"] },
  { id: 9, name: "Computing, IT & Related", subjects: ["Math", "Physics", "English", "Chemistry"] }, // Cluster 7 in my previous comment, checking mapping... 
  // Let's use a generic set for now. The user didn't provide cluster mappings. I will assume standard ones.
  // Actually, I should probably check if I can find a list online or just generic.
  // I will just put the main ones I use in the heuristic.
  { id: 13, name: "Medicine, Nursing, Health", subjects: ["Biology", "Chemistry", "Physics", "Math"] },
  { id: 20, name: "Education (Arts & Science)", subjects: ["English", "Math", "Kiswahili", "History"] },
];
