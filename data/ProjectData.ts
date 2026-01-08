interface ProjectItem {
  name: string;
  description: string;
  achievements?: string[];
  image: string;
  link: string;
}

export const projectData: ProjectItem[] = [
  {
    name: "Research Goal",
    description:
      "Took full ownership of developing a production-ready LMS from scratch, delivering a clean, responsive UI with smooth animations.",
    achievements: [
      "Built core product surfaces including Dashboard, Checkout, Storefront, and Admin Panel with a focus on usability and performance.",
      "Developed Dashboard, Checkout, Storefront, and Admin Panel.",
      "Implemented custom domain handling using Next.js middleware and advanced routing strategies.",
    ],
    image: "/lab/process-pillars.png",
    link: "https://mentra.gg",
  },
  {
    name: "Pinnacle",
    description:
      "Took full ownership of developing a production-ready LMS from scratch, delivering a clean, responsive UI with smooth animations.",
    achievements: [
      "Built core product surfaces including Dashboard, Checkout, Storefront, and Admin Panel with a focus on usability and performance.",
      "Developed Dashboard, Checkout, Storefront, and Admin Panel.",
      "Implemented custom domain handling using Next.js middleware and advanced routing strategies.",
    ],
    image: "/lab/process-pillars.png",
    link: "https://mentra.gg",
  },
];
