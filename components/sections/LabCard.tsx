import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface LabCardProps {
  title: string;
  description: string;
  demoUrl: string;
  tags?: string[];
}

export const LabCard = ({
  title,
  description,
  demoUrl,
  tags,
}: LabCardProps) => {
  return (
    <Link href={demoUrl} className="group">
      <div className="font-inconsolata flex flex-col items-start p-4 rounded-lg border border-dashed space-y-2">
        <h2 className="flex items-center gap-2 text-foreground line-clamp-2 text-lg font-normal">
          {title}
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
        </h2>
        <p className="text-sm text-muted-foreground font-medium">
          {description}
        </p>
        <div className="mt-4">
          {tags?.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-foreground text-background font-medium mr-2 p-2 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};
