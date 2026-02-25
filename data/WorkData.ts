interface WorkItem {
  company: string;
  role: string;
  type?: string | null;
  period: string;
  location: string;
  description?: string;
  achievements?: string[];
  link?: string | undefined;
}

export const workData: WorkItem[] = [
  {
    company: "Shivalik Bimetal Controls Ltd.",
    role: "ERP Operations Trainee",
    type: "Apprenticeship",
    period: "Jan 2026 - Present",
    location: "India, In Office",
    description:
      "ERP Operations Trainee supporting daily operations and maintenance of the company's enterprise resource planning (ERP) system across procurement and supply chain functions.",
    achievements: [
      "Managed end-to-end ERP workflows including item master creation, vendor onboarding, purchase order processing, and requisition management.",
      "Maintained high data accuracy across procurement and inventory modules to ensure smooth operational processes.",
      "Collaborated with cross-functional teams to resolve ERP-related issues and streamline system workflows.",
      "Assisted in generating operational reports and supporting business decision-making through system data analysis.",
    ],
  },
  {
    company: "Pinnacle",
    role: "Fullstack Developer",
    type: "Co-Founder",
    period: "Nov 2023 - Present",
    location: "India, Remote",
    description:
      "Co-founded Pinnacle, a freelance web development agency focused on delivering high-quality, user-friendly websites for clients across various industries.",
    achievements: [
      "Designed and developed responsive websites from scratch.",
      "Ensuring clean UI/UX and smooth animations.",
      "Managed end-to-end project execution, from wireframing, prototyping and development to deployment and maintenance.",
      "Deployed and maintained websites using Vercel, Hostinger, and Netlify.",
    ],
    link: "https://sspinnacle.com",
  },
];
