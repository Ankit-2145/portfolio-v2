import { SkillSection } from "@/components/sections/SkillSection";
import { Heading } from "@/components/common/Heading";

const page = () => {
  return (
    <section className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <Heading
        title="Skills"
        subTitle="Things I'm good at (and enjoy doing)."
        paragraph="I design and build production-ready web applications using a focused set of technologies. My work centers on clean interfaces, predictable systems, and scalable code — creating products that stay reliable as they evolve."
      />
      <SkillSection />
    </section>
  );
};

export default page;
