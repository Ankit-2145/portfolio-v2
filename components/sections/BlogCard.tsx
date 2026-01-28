import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface BlogCardProps {
  slug: string;
  title: string;
  description: string;
  author: string;
  date: string;
}

export const BlogCard = ({
  slug,
  title,
  description,
  author,
  date,
}: BlogCardProps) => {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Link
      href={slug}
      className="group flex flex-col h-full overflow-hidden transition-all duration-300 hover:scale-105"
    >
      <div className="flex flex-col flex-1 p-5 sm:p-6 border border-t-0 border-border bg-card rounded-b-lg">
        <h3 className="text-lg sm:text-xl font-semibold mb-2 line-clamp-2 text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>

        <p className="text-sm sm:text-base text-muted-foreground mb-4 line-clamp-3 grow">
          {description}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <div className="flex flex-col gap-1">
            <p className="text-xs sm:text-sm font-medium text-foreground">
              {author}
            </p>
            <time className="text-xs text-muted-foreground">
              {formattedDate}
            </time>
          </div>
          <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors group-hover:translate-x-1 duration-300" />
        </div>
      </div>
    </Link>
  );
};
