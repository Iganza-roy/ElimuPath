export type Cluster = {
  id: number;
  name: string;
  subjects: string[]; // Listing the 4 core subjects required for calculation
};

export const CLUSTERS: Cluster[] = [
  {
    id: 1,
    name: "Law",
    subjects: ["English", "History", "Kiswahili", "Mathematics"], // Usually English + Any Group 2 + Any Group 3 + Any Group 4/5
  },
  {
    id: 2,
    name: "Business, Hospitality & Related",
    subjects: ["Mathematics", "English", "Business Studies", "Kiswahili"],
  },
  {
    id: 3,
    name: "Social Sciences, Media Studies, Fine Arts, Film, Animation, Graphics & Related",
    subjects: ["English", "Kiswahili", "Mathematics", "History"],
  },
  {
    id: 4,
    name: "Geosciences & Related",
    subjects: ["Mathematics", "Physics", "Chemistry", "Geography"],
  },
  {
    id: 5,
    name: "Engineering, Engineering Technology & Related",
    subjects: ["Mathematics", "Physics", "Chemistry", "English"],
  },
  {
    id: 6,
    name: "Architecture, Building Construction & Related",
    subjects: ["Mathematics", "Physics", "History", "English"], // History or Art often key
  },
  {
    id: 7,
    name: "Computing, IT & Related",
    subjects: ["Mathematics", "Physics", "English", "Kiswahili"],
  },
  {
    id: 8,
    name: "Agribusiness & Related",
    subjects: ["Biology", "Agriculture", "Mathematics", "Chemistry"],
  },
  {
    id: 9,
    name: "General Science, Biological Sciences, Physics, Chemistry & Related",
    subjects: ["Biology", "Chemistry", "Physics", "Mathematics"],
  },
  {
    id: 10,
    name: "Actuarial Science, Accountancy, Mathematics, Economics, Statistics & Related",
    subjects: ["Mathematics", "English", "Economics", "Business Studies"], // Economics not typically a KCSE subject, maybe replace with Any G3
  },
  {
    id: 11,
    name: "Interior Design, Fashion Design, Textiles & Related",
    subjects: ["Home Science", "English", "Mathematics", "Kiswahili"],
  },
  {
    id: 12,
    name: "Sport Science & Related",
    subjects: ["Biology", "Mathematics", "English", "Physics"], // PE not a subject, Biology key
  },
  {
    id: 13,
    name: "Medicine, Health, Veterinary Medicine & Related",
    subjects: ["Biology", "Chemistry", "Mathematics", "English"],
  },
  {
    id: 14,
    name: "History, Archaeology & Related",
    subjects: ["History", "English", "Kiswahili", "Mathematics"],
  },
  {
    id: 15,
    name: "Agriculture, Animal Health, Food Science, Nutrition, Dietetics, Environmental Sciences, Natural Resources & Related",
    subjects: ["Biology", "Chemistry", "Agriculture", "Mathematics"],
  },
  {
    id: 16,
    name: "Geography & Related",
    subjects: ["Geography", "Mathematics", "English", "Physics"],
  },
  {
    id: 17,
    name: "French & German",
    subjects: ["French", "German", "English", "Kiswahili"], // Assuming French/German taken
  },
  {
    id: 18,
    name: "Music & Related",
    subjects: ["Music", "English", "Kiswahili", "Mathematics"],
  },
  {
    id: 19,
    name: "Education & Related",
    subjects: ["English", "Mathematics", "Kiswahili", "History"], // Varies widely by teaching subject
  },
  {
    id: 20,
    name: "Religious Studies, Theology, Islamic Studies & Related",
    subjects: ["CRE", "IRE", "English", "History"], // CRE/IRE/HRE
  },
];
