import { Heading } from "@/components/common/Heading";
// import { ProjectSection } from "@/components/sections/ProjectSection";

const page = () => {
  return (
    <section className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <Heading
        title="Projects"
        subTitle="Projects built from learning and curiosity."
      />
      {/* <ProjectSection /> */}
      <div className="flex min-h-[60vh] items-center justify-center text-center">
        <p className="font-inconsolata text-muted-foreground text-sm opacity-70">
          Few Packages left for update...
        </p>
      </div>
    </section>
  );
};

export default page;
