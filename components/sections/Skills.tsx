import {
  coreData,
  databasesData,
  devopsData,
  frameworksData,
  platformData,
  softwareData,
  toolsData,
} from "@/data/TechSkills";
import { TechSection } from "./TechSection";

export const Skills = () => {
  return (
    <section>
      <TechSection title="CORE" technologies={coreData} />
      <TechSection
        title="LIBRARIES && FRAMEWORKS"
        technologies={frameworksData}
      />
      <TechSection title="DATABASES && ORMs" technologies={databasesData} />
      <TechSection title="TOOLS" technologies={toolsData} />
      <TechSection title="PLATFORMS" technologies={platformData} />
      <TechSection title="SOFTWARES" technologies={softwareData} />
      <TechSection title="DEV OPS" technologies={devopsData} />
    </section>
  );
};
