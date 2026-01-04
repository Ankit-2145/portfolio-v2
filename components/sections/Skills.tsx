import { coreData, frameworksData } from "@/constants/TechSkills";
import { TechSection } from "./TechSection";

export const Skills = () => {
  return (
    <section>
      <TechSection title="CORE" technologies={coreData} />
      <TechSection title="FRAMEWORKS" technologies={frameworksData} />
      <TechSection title="TOOLS" technologies={frameworksData} />
      <TechSection title="PLATFORMS" technologies={frameworksData} />
      <TechSection title="SOFTWARE" technologies={frameworksData} />
      <TechSection title="DEV OPS" technologies={frameworksData} />
    </section>
  );
};
