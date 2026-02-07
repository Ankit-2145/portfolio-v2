import { Heading } from "@/components/common/Heading";
import { LabCard } from "@/components/sections/LabCard";
import { labData } from "@/data/LabData";

const page = () => {
  return (
    <section className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <Heading
        title="Lab"
        subTitle="Animations and components built with code."
      />
      <div className="flex flex-col gap-6 min-w-full">
        {labData.map((item) => (
          <LabCard
            key={item.title}
            title={item.title}
            demoUrl={item.demoUrl}
            description={item.description}
            tags={item.tags}
          />
        ))}
      </div>
    </section>
  );
};

export default page;
