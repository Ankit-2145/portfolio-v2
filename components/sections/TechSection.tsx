import Image from "next/image";
import { Button } from "../ui/button";

interface TechButton {
  name: string;
  icon: string;
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
        {technologies.map((tech, index) => (
          <Button
            key={index}
            size="sm"
            className="font-inconsolata text-foreground py-2 border border-border cursor-default gap-1.5 bg-muted/40 px-1.5 pr-2 text-xs"
          >
            <Image src={tech.icon} alt={tech.name} width={16} height={16} />
            {tech.name}
          </Button>
        ))}
      </div>
      <h3 className="font-jetBrainsMono text-sm mb-3 text-muted-foreground">
        <pre>{`<${title} />`}</pre>
      </h3>
    </div>
  );
};
