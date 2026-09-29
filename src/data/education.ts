export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "2023—Present",
    institution: "EPFL",
    degree: "PhD in AI for Chemistry",
    advisor: "Prof. Philippe Schwaller",
  },
  {
    year: "2018—2023",
    institution: "University of Oxford",
    degree: "MChem (Double First Class), Physical and Theoretical Chemistry",
    thesis: "Directing Heterocycle Synthesis with Machine Learning",
    advisor: "Prof. Fernanda Duarte"
    // Optional links to thesis
    // thesisUrl: "https://dspace.mit.edu/handle/1721.1/149111"
  },
];
