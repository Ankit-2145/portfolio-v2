interface ProjectItem {
  name: string;
  description: string;
  achievements: string[];
  image: string;
  link: string;
  stack: string[];
}

export const projectData: ProjectItem[] = [
  {
    name: "POD",
    description:
      "Built a modern Learning Management System (LMS) that enables instructors to create and manage courses while providing students with a seamless learning experience through structured content, progress tracking, and secure enrollments.",
    achievements: [
      "Designed and implemented a role-based system supporting students, instructors, admins, and super admins with centralized authorization.",
      "Built course creation and management features with support for chapters, attachments, rich text content, and video lessons.",
      "Implemented secure authentication, enrollment workflows, and protected access to course content based on user permissions.",
      "Integrated progress tracking and chapter completion functionality to provide students with a structured learning experience.",
      "Developed efficient APIs using tRPC and React Query with server-side prefetching and hydration for fast page loads and improved performance.",
      "Created reusable components and modular architecture to simplify feature expansion and maintainability.",
      // "Implemented search and filtering capabilities to help users quickly discover published courses.",
      // "Leveraged event-driven background jobs with Inngest to handle asynchronous tasks and improve system reliability.",
    ],
    image: "/lab/pod-lms.png",
    link: "https://pod-gamma-two.vercel.app",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS",
      "ShadcnUI",
      "PostgreSQL",
      "Prisma",
      "tRPC",
      "TanStack Query",
      "Better Auth",
      "UploadThing",
      "Mux",
    ],
  },
  {
    name: "Nodebase",
    description:
      "Built a workflow automation platform using n8n to automate repetitive tasks and integrate multiple services through event-driven workflows and APIs.",
    achievements: [
      "Designed and implemented automated workflows using n8n nodes to connect APIs, process data, and trigger actions across services.",
      "Integrated external APIs and webhooks to create event-driven automation pipelines.",
      "Implemented error handling, logging, and monitoring to ensure reliable workflow execution.",
      "Built reusable workflow modules to automate tasks such as notifications, data processing, and service integrations.",
      "Configured triggers and conditional logic to create flexible automation flows for different use cases.",
    ],
    image: "/lab/workflow-automation.png",
    link: "https://github.com/Ankit-2145/nodebase",
    stack: [
      "Nextjs",
      "React",
      "TailwindCSS",
      "ShadcnUI",
      "ReactFlow",
      "PostgreSQL",
      "tRPC",
      "React Query",
      "Inngest",
    ],
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
