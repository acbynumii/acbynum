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
  bio: "Harvard College Class of 2028 junior | Mechanical Engineering S.B. Mechanical engineering intern at General Dynamics Mission Systems. Interested in Aerospace, Sustainability, AI, ML, Arabic, Basketball, and Mentorship.",
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
  {
    company: "General Dynamics Mission Systems",
    position: "Engineering Intern",
    location: "Greensboro, NC",
    startDate: "May 2026",
    endDate: "Present",
    description: [
      "Designed mechanical assemblies in SolidWorks and architected a Python-Blender automation pipeline via Claude MCP for mission scenario visualization.",
      "Executed trade studies and integration for an undersea demonstration, compiling COTS vehicle options and a bill of materials.",
    ],
    technologies: ["SolidWorks", "Python", "Blender"],
  },
  {
    company: "The Takeoff Institute",
    position: "Takeoff Fellow",
    startDate: "May 2026",
    endDate: "Aug 2026",
    description: [
      "Selected for the 2026 Summer Fellowship, an eight-week cohort of 50 fellows chosen from more than 600 applicants.",
      "Mentored by Dr. Monica Moody Moore.",
    ],
  },
  {
    company: "Curious Cardinals",
    position: "Mentor and Harvard Ambassador",
    startDate: "Apr 2025",
    endDate: "Present",
    description: [
      "Mentored a student through the design and launch of a 3D-printed model rocket, from Onshape CAD and OpenRocket simulation through a successful recovery.",
      "Support students in math tutoring, college application coaching, and executive functioning, and refer new mentors as Harvard's ambassador.",
    ],
    technologies: ["Onshape", "OpenRocket", "3D Printing"],
  },
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

