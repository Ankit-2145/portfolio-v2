import { Heading } from "@/components/common/Heading";
import { LabSection } from "@/components/sections/LabSection";

const page = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <Heading
        title="Lab"
        subTitle="Animations and components built with code."
      />
      <LabSection />
    </main>
  );
};

export default page;
