export interface ResearchProject {
  id: string;
  title: string;
  institution?: string;
  advisor?: string;
  startDate: string;
  endDate?: string;
  description: string;
  publications?: Publication[];
  technologies?: string[];
  images?: string[];
}

export interface Publication {
  title: string;
  authors: string[];
  venue: string;
  year: string;
  link?: string;
}

export const researchProjects: ResearchProject[] = [
  // Add research projects from resume - structure ready
  // Example structure:
  // {
  //   id: "research-1",
  //   title: "Research Project Title",
  //   institution: "Harvard University",
  //   advisor: "Professor Name",
  //   startDate: "2024",
  //   description: "Research description...",
  //   publications: [],
  //   technologies: [],
  // },
];

export const publications: Publication[] = [
  // Add publications from resume - structure ready
];

