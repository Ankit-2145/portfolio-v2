import { Heading } from "@/components/common/Heading";
import { WorkSection } from "@/components/sections/WorkSection";

const page = () => {
  return (
    <section className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <Heading title="Work" subTitle="My experience so far." />
      <WorkSection />
    </section>
  );
};

export default page;
