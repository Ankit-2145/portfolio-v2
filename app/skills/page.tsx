import { Skills } from "@/components/sections/Skills";
import { Heading } from "@/components/common/Heading";

const page = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <Heading
        title="Skills"
        subTitle="Things I'm good at (and enjoy doing)."
        paragraph="I work with a focused set of technologies to design, build, and ship
      production-ready web applications. My emphasis is on clean UI, predictable
      behavior, and code that scales as the product grows."
      />
      <Skills />
    </main>
  );
};

export default page;
