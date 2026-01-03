import { Highlighter } from "@/components/ui/highlighter";
import { Skills } from "@/components/sections/Skills";

const page = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="my-12">
        <Highlighter action="underline" color="#fb5607">
          <h2 className="font-doto text-2xl font-semibold">Skills </h2>
        </Highlighter>
        <span className="font-inconsolata text-sm text-muted-foreground/80 font-medium ml-4">
          Things I&apos;m good at (and enjoy doing)
        </span>
      </div>
      <Skills />
    </main>
  );
};

export default page;
