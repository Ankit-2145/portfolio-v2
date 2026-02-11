import { blog } from "@/lib/source";

export const getSortedBlogPosts = () => {
  const posts = blog.getPages();

  const publishedPosts =
    process.env.NODE_ENV === "production"
      ? posts.filter((post) => !post.data.draft)
      : posts;

  return publishedPosts.sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime(),
  );
};
