import Link from "next/link";
import { blog } from "@/lib/source";
import { ChevronLeft } from "lucide-react";
import { notFound } from "next/navigation";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { InlineTOC } from "fumadocs-ui/components/inline-toc";

export default async function Page(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const page = blog.getPage([params.slug]);

  if (!page) notFound();
  const Mdx = page.data.body;

  return (
    <div className="w-full min-h-screen bg-background font-inconsolata">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="my-1.5">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
        {/* Title and Meta */}
        <div className="mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-balance">
            {page.data.title}
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            {page.data.description}
          </p>
          <div className="flex flex-row gap-4 text-sm mb-8">
            <div>
              <p className="mb-1 text-muted-foreground">Written by</p>
              <p className="font-medium">{page.data.author}</p>
            </div>
            <div>
              <p className="mb-1 text-sm text-muted-foreground">At</p>
              <p className="font-medium">
                <time>
                  {new Date(page.data.date)
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
        </div>

        {/* Article */}
        <article className="prose prose-sm sm:prose max-w-none">
          <InlineTOC items={page.data.toc} />
          <Mdx components={defaultMdxComponents} />
        </article>

        {/* Footer Navigation */}
        <div className="mt-16 pt-8 border-t border-border">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </div>
    </div>
  );
}

export function generateStaticParams(): { slug: string }[] {
  return blog.getPages().map((page) => ({
    slug: page.slugs[0],
  }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const page = blog.getPage([params.slug]);
  if (!page) notFound();
  return {
    title: page.data.title,
    description: page.data.description,
  };
}
