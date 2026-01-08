interface LabData {
  id: number;
  title: string;
  description: string;
  demoUrl: string;
  image: string;
  tags: string[];
}

export const labData: LabData[] = [
  {
    id: 1,
    title: "Process Pillars",
    description:
      "Process Pillars is a visually intuitive component that represents a typical product development lifecycle.",
    demoUrl:
      "https://21st.dev/community/components/Ankit-2145/process-pillars/default",
    image: "/lab/process-pillars.png",
    tags: ["React", "framer motion"],
  },
];
