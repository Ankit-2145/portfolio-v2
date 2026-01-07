import { Skills } from "@/components/sections/Skills";
import { Heading } from "@/components/common/Heading";

const page = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <Heading
        title="Skills"
        subTitle="Things I'm good at (and enjoy doing)."
      />
      <Skills />
    </main>
  );
};

export default page;
