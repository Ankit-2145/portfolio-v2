import { Work } from "@/components/sections/Work";
import { Highlighter } from "@/components/ui/highlighter";

const page = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="my-12">
        <Highlighter action="underline" color="#8338ec">
          <h2 className="font-doto text-2xl font-semibold">Work </h2>
        </Highlighter>
        <span className="font-inconsolata text-sm text-muted-foreground/80 font-medium ml-4">
          Here is my work experience!
        </span>
      </div>
      <Work />
    </main>
  );
};

export default page;
