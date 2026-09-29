export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Joshua W. Sin",
  title: "Industrial PhD Student",
  institution: "Roche & EPFL",
  // Note that links work in the description
  description:
    "I'm a final-year PhD student combining machine learning and automation to tackle challenges in chemical synthesis. My current interests include language model approaches that move beyond tabular representations of chemistry, and applying synthesizability models to drug discovery.",
  email: "jwpsin@gmail.com",
  imageUrl:"/portrait.jpg",
  googleScholarUrl: "https://scholar.google.com/citations?user=blXz-BQAAAAJ&hl=en",
  githubUsername: "jwpsin",
  linkedinUsername: "joshuawsin",
  cvUrl: "/joshuawsin_cv.pdf",
  // institutionUrl: "https://www.stanford.edu",
  // altName: "",
  // secretDescription: "I like dogs.",
};
