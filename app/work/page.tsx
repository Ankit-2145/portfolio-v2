import { Highlighter } from "@/components/ui/highlighter";
import { WorkExperience } from "@/components/sections/Work";

const page = () => {
  return (
    <main className="screen-width">
      <div className="my-12">
        <Highlighter action="box" color="#00b4d8">
          <h2 className="font-doto text-2xl font-semibold">
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
