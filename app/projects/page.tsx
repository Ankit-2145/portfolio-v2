import { Heading } from "@/components/common/Heading";
import { ProjectSection } from "@/components/sections/ProjectSection";

const page = () => {
  return (
    <section className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <Heading
        title="Projects"
        subTitle="Side projects built from learning and curiosity."
      />
      <ProjectSection />
    </section>
  );
};

export default page;
