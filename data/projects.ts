export interface Project {
  id: string;
  title: string;
  course?: string;
  semester: string;
  year: string;
  description: string;
  technologies?: string[];
  images?: string[];
  videoUrl?: string;
  achievements?: string[];
}

export const projects: Project[] = [
  {
    id: "turf-wars-robot",
    title: "Turf-Wars Robot",
    course: "ES51: Computer-Aided Machine Design",
    semester: "Fall",
    year: "2024",
    description:
      "This project was for ES51: Computer-Aided Machine Design, Harvard's gateway mechanical engineering course. In our class competition, Turf Wars, teams designed and built robots to collect ping pong balls and hockey pucks, climb ramps, and navigate under obstacles. My team's design featured a very low center of gravity and claw arm to contain the objects. I led our design process from initial prototyping to CAD in SolidWorks and helped machine key components in the shop. Our final build included 3D printed parts, laser cuts, CNC-milled silicone molds, and screwdriver motors — all while staying within strict size and weight limits. We made it to the podium and also took home the award for best video!",
    technologies: ["SolidWorks", "3D Printing", "CNC Milling", "Laser Cutting", "Prototyping"],
    images: ["IMG_2892_f9ae9348db94.jpeg", "Image_7-15-25_at_11.41_AM_27db27802d60.jpeg"],
    videoUrl: "https://youtu.be/5nQ980gfG80",
    achievements: ["Podium finish", "Best video award"],
  },
  {
    id: "myoelectric-bionic-hand",
    title: "Myoelectric Bionic Hand",
    course: "ES50: Introduction to Electrical Engineering",
    semester: "Spring",
    year: "2025",
    description:
      "For my final project in ES50: Introduction to Electrical Engineering, I built a bionic hand that responds to muscle signals from the forearm with a small team. Using surface EMG sensors, the hand could detect and interpret electrical activity from different muscle groups to control finger movement in real time. We edited an open source bionic hand project by Will Cogley, wired and programmed the signal processing system, and integrated the entire setup using a microcontroller. The project combined everything we learned in the class, from circuitry and signal filtering to embedded programming and physical prototyping, and gave me a hands-on intro to biomedical applications in engineering.",
    technologies: ["EMG Sensors", "Microcontrollers", "Signal Processing", "Embedded Programming", "Circuitry"],
    images: ["IMG_2231_2_467ca3b96559.JPEG", "IMG_2235_dd5c3e60562c.JPEG"],
    videoUrl: "https://www.youtube.com/embed/ILK5vl8Apew",
  },
];

