import { blog } from "@/lib/source";
import { Heading } from "@/components/common/Heading";
import { BlogCard } from "@/components/sections/BlogCard";

const Page = () => {
  const posts = blog.getPages();

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Heading
        title="Blog"
        subTitle="I love to read and learn, and here I share what I discover."
      />

      {posts.length > 0 ? (
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          {posts.map((post) => (
            <BlogCard
              key={post.url}
              slug={post.url}
              title={post.data.title}
              description={post.data.description || ""}
              author={post.data.author}
              date={post.data.date.toISOString()}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">No blog posts yet.</p>
        </div>
      )}
    </main>
  );
};

export default Page;
