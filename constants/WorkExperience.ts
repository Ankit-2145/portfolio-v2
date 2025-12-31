interface WorkItem {
  company: string;
  role: string;
  type?: string | null;
  period: string;
  location: string;
  description: string;
  achievements?: string[];
  link: string;
}

export const workData: WorkItem[] = [
  {
    company: "Research Goal",
    role: "Fullstack Developer",
    type: "Freelance",
    period: "Apr - Aug 2025",
    location: "India, Remote",
    description:
      "Took full ownership of developing a production-ready LMS from scratch, delivering a clean, responsive UI with smooth animations.",
    achievements: [
      "Built core product surfaces including Dashboard, Checkout, Storefront, and Admin Panel with a focus on usability and performance.",
      "Developed Dashboard, Checkout, Storefront, and Admin Panel.",
      "Implemented custom domain handling using Next.js middleware and advanced routing strategies.",
    ],
    link: "https://mentra.gg",
  },
  {
    company: "Pinnacle",
    role: "Fullstack Developer",
    type: "Co - Founder",
    period: "Nov 2023 - Now",
    location: "India, Remote",
    description:
      "Took full ownership of developing a production-ready LMS from scratch, delivering a clean, responsive UI with smooth animations.",
    achievements: [
      "Built core product surfaces including Dashboard, Checkout, Storefront, and Admin Panel with a focus on usability and performance.",
      "Developed Dashboard, Checkout, Storefront, and Admin Panel.",
      "Implemented custom domain handling using Next.js middleware and advanced routing strategies.",
    ],
    link: "https://mentra.gg",
  },
];
