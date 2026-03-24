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
      <div className="flex flex-col items-start justify-between rounded-lg border border-dashed p-4 font-inconsolata lg:flex-row lg:items-center">
        <div className="flex flex-col items-start gap-4 lg:flex-row lg:items-center">
          <h2 className="line-clamp-2 text-lg font-normal text-foreground transition-all group-hover:translate-x-0.5">
            {title}
          </h2>
          {isDraft && <Badge>Draft</Badge>}
        </div>

        <div>
          <p className="mt-2 text-sm font-medium text-muted-foreground lg:mt-0">
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
