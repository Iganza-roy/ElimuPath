
export type Cluster = {
  id: number;
  name: string;
  subjects: string[];
};

export const CLUSTERS: Cluster[] = [
  {
    id: 1,
    name: "Law",
    subjects: ["ENG/KIS", "MATH/ANY GROUP II", "Any GROUP III", "Any GROUP II/2nd GROUP III/ANY GROUP IV/ANY GROUP V"]
  },
  {
    id: 2,
    name: "Business, Hospitality & Related",
    subjects: ["ENG/KIS", "MATH", "Any GROUP II or any GROUP III", "A GROUP II or a GROUP III or any GROUP IV or any GROUP V"]
  },
  {
    id: 3,
    name: "Social Sciences, Media Studies, Fine Arts, Film, Animation, Graphics & Related",
    subjects: ["ENG/KIS", "MATH or any GROUP II", "Any GROUP III", "A GROUP II or 2nd GROUP III or any GROUP IV or any GROUP V"]
  },
  {
    id: 4,
    name: "Geosciences & Related",
    subjects: ["MATH", "PHY", "BIO/CHE/GEO", "A GROUP II or any GROUP III or any GROUP IV or any GROUP V"]
  },
  {
    id: 5,
    name: "Engineering, Engineering Technology & Related",
    subjects: ["MATH", "PHY", "CHE", "BIO or any GROUP III or any GROUP IV or any GROUP V"]
  },
  {
    id: 6,
    name: "Architecture, Building Construction & Related",
    subjects: ["MATH", "PHY", "Any GROUP III", "2nd GROUP II or 2nd GROUP III or any GROUP IV or any GROUP V"]
  },
  {
    id: 7,
    name: "Computing, IT & Related",
    subjects: ["MATH", "PHY", "2nd GROUP II or any GROUP III", "A GROUP II or a GROUP III or any GROUP IV or any GROUP V"]
  },
  {
    id: 8,
    name: "Agribusiness & Related",
    subjects: ["MATH", "BIO", "PHY or CHE", "3rd GROUP II or any GROUP III or any GROUP IV or any GROUP V"]
  },
  {
    id: 9,
    name: "General Science, Biological Sciences, Physics, Chemistry & Related",
    subjects: ["MATH", "ANY GROUP II", "2nd  GROUP II", "3rd GROUP II or any GROUP III or any GROUP IV or any GROUP V"]
  },
  {
    id: 10,
    name: "Actuarial Science, Accountancy, Mathematics, Economics, Statistics & Related",
    subjects: ["MATH", "ANY GROUP II", "any GROUP III", "2nd GROUP II or 2nd GROUP III or any GROUP IV or any GROUP V"]
  },
  {
    id: 11,
    name: "Interior Design, Fashion Design, Textiles & Related",
    subjects: ["CHE", "MATH or PHY", "BIO/HSC", "ENG/KIS or any GROUP III or a GROUP IV or any GROUP V"]
  },
  {
    id: 12,
    name: "Sport Science & Related",
    subjects: ["BIO/GSC", "MATH", "Any GROUP II or any GROUP III", "ENG/KIS or a GROUP II or a GROUP III or any GROUP IV or any GROUP V"]
  },
  {
    id: 13,
    name: "Medicine, Health, Veterinary Medicine & Related",
    subjects: ["BIO", "CHE", "MATH/PHY", "ENG/KIS or 3rd GROUP II or any GROUP III or any GROUP IV or any GROUP V"]
  },
  {
    id: 14,
    name: "History, Archaeology & Related",
    subjects: ["HAG", "ENG/KIS", "MATH or any GROUP II", "A GROUP II or a 2nd GROUP III  or any GROUP IV or any GROUP V"]
  },
  {
    id: 15,
    name: "Agriculture, Animal Health, Food Science, Nutrition, Dietetics, Environmental Sciences, Natural Resources & Related",
    subjects: ["BIO", "CHE", "MATH/PHY/GEO", "ENG/KIS or 3rd GROUP II or any GROUP III or any GROUP IV or any GROUP V"]
  },
  {
    id: 16,
    name: "Geography & Related",
    subjects: ["GEO", "MATH", "Any GROUP II", "2nd GROUP II or 2nd GROUP III or any GROUP IV or any GROUP V"]
  },
  {
    id: 17,
    name: "French & German",
    subjects: ["FRE/GER", "ENG/KIS", "MATH or any GROUP II or any GROUP III", "A GROUP II or a GROUP III or any GROUP IV or any GROUP V"]
  },
  {
    id: 18,
    name: "Music & Related",
    subjects: ["MUS", "ENG/KIS", "MATH or any GROUP II or any GROUP III", "A GROUP II or a GROUP III or any GROUP IV or 2nd GROUP V"]
  },
  {
    id: 19,
    name: "Education & Related",
    subjects: ["ENG", "MATH or any GROUP II", "2nd GROUP II", "KIS or 3rd GROUP II or 2nd GROUP III or any GROUP IV or any GROUP V"]
  },
  {
    id: 20,
    name: "Religious Studies, Theology, Islamic Studies & Related",
    subjects: ["CRE/IRE/HRE", "ENG/KIS", "2nd GROUP III", "A GROUP II or a GROUP IV or any GROUP V"]
  }
];
