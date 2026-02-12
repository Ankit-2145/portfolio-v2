import Link from "next/link";
import { Badge } from "@/components/ui/badge";

interface BlogCardProps {
  slug: string;
  title: string;
  createdAt: Date;
  isDraft: boolean;
}

export const BlogCard = ({
  slug,
  title,
  createdAt,
  isDraft,
}: BlogCardProps) => {
  return (
    <Link href={slug} className="group">
      <div className="font-inconsolata flex flex-col lg:flex-row items-start lg:items-center justify-between p-4 rounded-lg border border-dashed">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
          <h2 className="text-foreground line-clamp-2 text-lg font-normal transition-all group-hover:translate-x-0.5">
            {title}
          </h2>
          {isDraft && <Badge>Draft</Badge>}
        </div>

        <div>
          <p className="text-sm text-muted-foreground font-medium mt-2 lg:mt-0">
            <time>
              {new Date(createdAt)
                .toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                })
                .replace(",", "")}
            </time>
          </p>
        </div>
      </div>
    </Link>
  );
};
