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
    role: "ERP Operations Associate",
    type: "Internship",
    period: "Jan 2026 - Now",
    location: "India, In Office",
    description:
      "Worked as an ERP Operations Associate, responsible for managing and maintaining the company's enterprise resource planning system to support various business functions.",
    achievements: [
      "Managed daily ERP operations including item creation, vendor onboarding, purchase orders, and requisition workflows.",
      "Ensured data accuracy across business-critical modules supporting procurement and supply chain processes.",
      "Gained hands-on exposure to enterprise resource planning environments and real-world business workflows.",
      "Developed a strong understanding of how software systems support organizational decision-making.",
    ],
  },
  {
    company: "Pinnacle",
    role: "Co-Founder & Fullstack Developer",
    period: "Nov 2023 - Now",
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
