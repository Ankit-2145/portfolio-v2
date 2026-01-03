import { coreData, frameworksData } from "@/constants/TechSkills";
import { TechSection } from "./TechSection";

export const Skills = () => {
  return (
    <section>
      <p className="font-inconsolata text-base text-justify text-muted-foreground">
        I work with a focused set of technologies to design, build, and ship
        production-ready web applications. My emphasis is on clean UI,
        predictable behavior, and code that scales as the product grows.
      </p>

      <TechSection title="CORE" technologies={coreData} />
      <TechSection title="FRAMEWORKS" technologies={frameworksData} />
      <TechSection title="TOOLS" technologies={frameworksData} />
      <TechSection title="PLATFORMS" technologies={frameworksData} />
      <TechSection title="SOFTWARE" technologies={frameworksData} />
      <TechSection title="DEV OPS" technologies={frameworksData} />
    </section>
  );
};
