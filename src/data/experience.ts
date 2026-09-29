export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "2023—Present",
    title: "Industrial PhD Student",
    company: "Roche",
    description:
      "Combining automation and machine learning to accelerate chemical synthesis across medicinal, preclinical, and process chemistry.",
    advisor: "Dr. Raphael Bigler, Dr. Kurt Püntener",
    companyUrl: "https://www.roche.com/about",
  },
  {
    date: "Summer 2022",
    title: "Research Scholar",
    company: "Agency for Science, Technology and Research (A*STAR)",
    description:
      "Molecular representation learning to predict the activity of reverse micelle systems for renewable biocatalysis.",
    manager: "Dr. Yee Hwee Lim, Dr. Dillon Tay",
    companyUrl: "https://www.a-star.edu.sg/",
  },
];
