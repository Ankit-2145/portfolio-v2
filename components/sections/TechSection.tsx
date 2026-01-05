import Image from "next/image";
import { ComponentType, SVGProps } from "react";
import { Button } from "@/components/ui/button";

type TechIcon = string | ComponentType<SVGProps<SVGSVGElement>>;

export interface TechButton {
  name: string;
  icon: TechIcon;
}

interface TechSectionProps {
  title: string;
  technologies: TechButton[];
}

export const TechSection = ({ title, technologies }: TechSectionProps) => {
  return (
    <div className="my-4">
      <h3 className="font-jetBrainsMono text-sm text-muted-foreground">
        <pre>{`<${title}>`}</pre>
      </h3>

      <div className="flex flex-wrap gap-2 py-3">
        {technologies.map((tech, index) => {
          const Icon = tech.icon;

          return (
            <Button
              key={index}
              size="sm"
              className="font-inconsolata text-foreground py-2 border border-border gap-1.5 bg-muted/40 hover:bg-muted/40 px-1.5 pr-2 text-[13px]"
            >
              {typeof Icon === "string" ? (
                <Image src={Icon} alt={tech.name} width={20} height={20} />
              ) : (
                <Icon className="w-5 h-5 text-foreground" />
              )}

              {tech.name}
            </Button>
          );
        })}
      </div>
    </div>
  );
};
