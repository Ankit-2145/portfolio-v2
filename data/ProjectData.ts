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
  // {
  //   name: "School Management System",
  //   description:
  //     "Designed and developed a comprehensive school management system with features for student records, attendance tracking, and grade management.",
  //   achievements: [
  //     "Implemented a robust backend using Node.js and Express.",
  //     "Designed and implemented a responsive frontend with React and TypeScript.",
  //     "Integrated database management with PostgreSQL for efficient data handling.",
  //     "Implemented user authentication and role-based access control for secure data management.",
  //   ],
  //   image: "/projects/image.png",
  //   link: "https://mentra.gg",
  // },
];
