import { z } from "zod";
import { defineCollections, frontmatterSchema } from "fumadocs-mdx/config";

export const blogPosts = defineCollections({
  type: "doc",
  dir: "content/blog",
  schema: frontmatterSchema.extend({
    author: z.string(),
    date: z.date(),
  }),
});
