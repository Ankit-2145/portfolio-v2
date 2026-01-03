import Image from "next/image";
import React from "react";

interface TechButton {
  name: string;
  icon: string;
}

interface TechSectionProps {
  title: string;
  technologies: TechButton[];
}

// Reusable TechSection Component
export const TechSection = ({ title, technologies }: TechSectionProps) => {
  return (
    <div className="my-6">
      <h3 className="font-jetBrainsMono text-sm mb-3 text-muted-foreground">
        <pre>{`<${title} />`}</pre>
      </h3>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <button
            key={index}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 text-foreground py-2 border border-border h-[22px] cursor-default gap-1.5 bg-muted/40 px-1.5 pr-2 text-xs"
          >
            <Image src={tech.icon} alt={tech.name} width={16} height={16} />
            {tech.name}
          </button>
        ))}
      </div>
    </div>
  );
};
