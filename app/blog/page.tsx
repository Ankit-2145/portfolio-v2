import { blog } from "@/lib/source";
import { Heading } from "@/components/common/Heading";
import { BlogCard } from "@/components/sections/BlogCard";

const Page = () => {
  const posts = blog.getPages();

  return (
    <section className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Heading
        title="Blog"
        subTitle="I love to read and learn, and here I share what I discover."
      />

      {posts.length > 0 ? (
        <div className="flex flex-col gap-6 min-w-full">
          {posts.map((post) => (
            <BlogCard key={post.url} slug={post.url} title={post.data.title} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg italic">
            Still thinking of what to write first...
          </p>
        </div>
      )}
    </section>
  );
};

export default Page;
