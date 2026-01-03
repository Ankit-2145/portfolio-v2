import { coreData, frameworksData } from "@/constants/TechSkills";
import { TechSection } from "./TechSection";

export const Skills = () => {
  return (
    <section>
      <p className="font-inconsolata text-base text-justify text-muted-foreground">
        I work with a focused set of technologies to design, build, and ship
        production-ready web applications. My emphasis is on clean UI,
        predictable behavior, and code that scales as the product grows.
      </p>

      {/* <div className="my-6">
        <h3 className="font-inconsolata text-sm mb-3 text-muted-foreground">
          <pre>{`<Core />`}</pre>
        </h3>
        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0 text-white hover:bg-cardColorForeground py-2 border border-border h-[22px] cursor-default gap-1.5 bg-muted/40 px-1.5 pr-2 text-xs hover:text-brand">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 48 48"
          >
            <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
            <path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
            <path
              fill="#FFF"
              d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"
            ></path>
            <path
              fill="#EEE"
              d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"
            ></path>
          </svg>
          HTML
        </button>
      </div> */}

      <TechSection title="CORE" technologies={coreData} />
      <TechSection title="FRAMEWORKS" technologies={frameworksData} />
    </section>
  );
};
