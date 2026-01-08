import { Heading } from "@/components/common/Heading";
import { WorkSection } from "@/components/sections/WorkSection";

const page = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <Heading
        title="Work"
        subTitle="Real-world products, built and shipped for real users."
      />
      <WorkSection />
    </main>
  );
};

export default page;
