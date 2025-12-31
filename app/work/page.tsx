import { Highlighter } from "@/components/ui/highlighter";
import { WorkExperience } from "@/components/sections/Work";

const page = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="my-12">
        <Highlighter action="box" color="#00b4d8">
          <h2 className="font-doto text-2xl font-semibold p-2">
            Work{" "}
            <span className="font-inconsolata text-base text-muted-foreground/80 font-medium">
              Here is my work experience!
            </span>
          </h2>
        </Highlighter>
      </div>
      <WorkExperience />
    </main>
  );
};

export default page;
