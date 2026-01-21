import { ViewTransitions } from "next-view-transitions";
import { Layout } from "nextra-theme-blog";
import "nextra-theme-blog/style.css";

export const metadata = {
  title: "Blog Example",
};

export default async function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout>
      <ViewTransitions>{children}</ViewTransitions>
    </Layout>
  );
}
