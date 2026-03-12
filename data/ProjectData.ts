interface ProjectItem {
  name: string;
  description: string;
  achievements: string[];
  image: string;
  link: string;
  stack: string[];
}

export const projectData: ProjectItem[] = [
  // {
  //   name: "Nodebase",
  //   description:
  //     "Built a workflow automation platform using n8n to automate repetitive tasks and integrate multiple services through event-driven workflows and APIs.",
  //   achievements: [
  //     "Designed and implemented automated workflows using n8n nodes to connect APIs, process data, and trigger actions across services.",
  //     "Integrated external APIs and webhooks to create event-driven automation pipelines.",
  //     "Implemented error handling, logging, and monitoring to ensure reliable workflow execution.",
  //     "Built reusable workflow modules to automate tasks such as notifications, data processing, and service integrations.",
  //     "Configured triggers and conditional logic to create flexible automation flows for different use cases.",
  //   ],
  //   image: "/lab/workflow-automation.png",
  //   link: "https://github.com/yourusername/workflow-automation-project",
  //   stack: [
  //     "Nextjs",
  //     "React",
  //     "TailwindCSS",
  //     "ShadcnUI",
  //     "ReactFlow",
  //     "PostgreSQL",
  //     "tRPC",
  //     "React Query",
  //     "Inngest",
  //   ],
  // },
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
