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
      <div className="flex flex-col items-start space-y-2 rounded-lg border border-dashed p-4 font-inconsolata">
        <h2 className="line-clamp-2 flex items-center gap-2 text-lg font-normal text-foreground">
          {title}
          <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </h2>
        <p className="text-sm font-medium text-muted-foreground">
          {description}
        </p>
        <div className="mt-4">
          {tags?.map((tag) => (
            <span
              key={tag}
              className="mr-2 rounded-full bg-foreground p-2 text-xs font-medium text-background"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};
