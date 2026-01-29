import Link from "next/link";

interface BlogCardProps {
  slug: string;
  title: string;
}

export const BlogCard = ({ slug, title }: BlogCardProps) => {
  return (
    <Link href={slug} className="group">
      <div className="font-inconsolata flex items-center p-4 rounded-lg border border-dashed">
        <h2 className="text-foreground line-clamp-2 text-lg font-normal transition-all group-hover:translate-x-0.5">
          {title}
        </h2>
      </div>
    </Link>
  );
};
