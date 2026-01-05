export interface Education {
  institution: string;
  degree: string;
  graduationYear: string;
  additionalInfo?: string;
}

export interface WorkExperience {
  company: string;
  position: string;
  location?: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies?: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Award {
  title: string;
  organization?: string;
  year: string;
  description?: string;
}

export const personalInfo = {
  name: "Anthony Bynum",
  title: "Mechanical Engineering & Computer Science Student",
  location: "Harvard College",
  classYear: "2028",
  email: "acbynum@college.harvard.edu", // Placeholder - update with actual email
  bio: "Harvard College Class of 2028 | Mechanical Engineering S.B. and Computer Science. Interested in Aerospace, Sustainability, AI, ML, Arabic, Basketball, and Mentorship.",
  interests: ["Aerospace", "Sustainability", "AI", "ML", "Arabic", "Basketball", "Mentorship"],
};

export const education: Education[] = [
  {
    institution: "Harvard College",
    degree: "S.B. Mechanical Engineering & Computer Science",
    graduationYear: "2028",
  },
];

export const workExperience: WorkExperience[] = [
  // Add work experience from resume - structure ready
];

export const skills: Skill[] = [
  {
    category: "Engineering",
    items: ["CAD (SolidWorks)", "3D Printing", "CNC Milling", "Laser Cutting", "Prototyping"],
  },
  {
    category: "Programming",
    items: ["Python", "JavaScript", "TypeScript", "Embedded Systems", "Signal Processing"],
  },
  {
    category: "Other",
    items: ["Project Management", "Team Leadership", "Technical Writing"],
  },
];

export const awards: Award[] = [
  // Add awards from resume - structure ready
];

