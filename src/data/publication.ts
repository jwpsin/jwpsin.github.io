export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
}

export const publicationData: Publication[] = [
  // If you don't want to show publications, just make the array empty.
  {
    year: "2026",
    conference: "arXiv",
    title: "Dynamic language model representations for multi-objective reaction optimisation",
    authors: "J. W. Sin†, D. M. Segura†, B. Ranković†, S. L. Chau, M. D. R. Lutz, A. Anelli, R. P. Burwood, K. Püntener, M. J. Notheis, R. Bigler, P. Schwaller*",
    paperUrl: "https://arxiv.org/abs/2609.11790",
    codeUrl: "https://github.com/schwallergroup/alice",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    tldr: "Trainable language model representations provide a general framework for reaction optimisation across reaction systems, objectives, and experimental regimes.",
    //imageUrl:
    //  "https://images.unsplash.com/photo-1561622539-dffbfc2008fd?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // award: "🏆 Best Paper Award",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
  {
    year: "2026",
    conference: "arXiv",
    title: "Bi-semantic Chemical Embedder for Joint Representation Learning of SMILES and Natural Language",
    authors: "D. M. Segura, J. Goumaz, J. W. Sin, B. Ranković, P. Schwaller",
    paperUrl: "https://arxiv.org/abs/2608.03855",
    codeUrl: "https://github.com/schwallergroup/CheMatE",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    tldr: "Pretraining on scientific text with inline SMILES yields a single encoder that works across both molecular and natural-language chemistry tasks.",
    //imageUrl:
    //  "https://images.unsplash.com/photo-1561622539-dffbfc2008fd?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // award: "🏆 Best Paper Award",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
  {
    year: "2026",
    conference: "Chem (Cell Press)",
    title: "Swarm intelligence for chemical reaction optimization",
    authors: "R. Schlama†, J. W. Sin†*, R. P. Burwood, K. Püntener, R. Bigler, P. Schwaller*",
    paperUrl: "https://doi.org/10.1016/j.chempr.2026.103035",
    codeUrl: "https://github.com/schwallergroup/alphaswarm",
    tldr: "ML-augmented metaheuristic algorithms enable interpretable, highly parallel, multi-objective reaction optimisation."
  },
  {
    year: "2025",
    conference: "Nature Communications",
    title: "Highly parallel optimisation of chemical reactions through automation and machine intelligence",
    authors: "J. W. Sin*, S. L. Chau, R. P. Burwood, K. Püntener, R. Bigler, P. Schwaller*",
    paperUrl: "https://www.nature.com/articles/s41467-025-61803-0",
    codeUrl: "https://github.com/schwallergroup/minerva",
    tldr: "Active learning with automated high-throughput experimentation accelerates reaction optimisation in pharmaceutical process development."
  },
  {
    year: "2025",
    conference: "Journal of Chemical Information and Modeling",
    title: "Transfer Learning for Heterocycle Retrosynthesis",
    authors: "E. Wieczorek, J. W. Sin, S. Tanovic, M. T. O. Holland, L. Wilbraham, V. Sebastián-Pérez, A. Bradley, D. Miketa, P. E. Brennan, F. Duarte",
    paperUrl: "https://doi.org/10.1021/acs.jcim.4c02041",
    codeUrl: "https://github.com/duartegroup/Het-retro",
    tldr: "Transfer learning from general reaction data improves transformer-based single-step and multi-step retrosynthesis prediction for heterocycles in low-data regimes."
  },
];
