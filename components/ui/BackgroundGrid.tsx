import { cn } from "@/lib/utils";

const BackgroundGrid = () => (
  <div className="absolute inset-0 top-15 left-5 right-5 lg:left-16 lg:right-16 xl:left-16 xl:right-16 -z-10">
    <div className="relative flex h-200 w-full items-center justify-center bg-background">
      <div
        className={cn(
          "absolute inset-0",
          "bg-size-[25px_25px]",
          "bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />

      {/* <div className="pointer-events-none absolute inset-0 flex items-center justify-center mask-[linear-gradient(to_top,transparent,black)] bg-background"></div> */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center mask-[linear-gradient(to_bottom,transparent,black)] bg-background"></div>
    </div>
  </div>
);

export default BackgroundGrid;
