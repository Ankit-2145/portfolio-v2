import { Heading } from "@/components/common/Heading";
import { LabCard } from "@/components/sections/LabCard";

const page = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <Heading
        title="Lab"
        subTitle="Animations and components built with code."
      />
      <LabCard />
    </main>
  );
};

export default page;
