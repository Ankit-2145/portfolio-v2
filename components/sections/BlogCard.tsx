import Link from "next/link";

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
        <h2 className="text-foreground line-clamp-2 text-lg font-normal transition-all group-hover:translate-x-0.5">
          {title}
        </h2>
        {isDraft && (
          <span className="text-xs font-medium px-2 py-1 rounded bg-yellow-100 text-yellow-800">
            Draft
          </span>
        )}

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
