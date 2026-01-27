// source.config.ts
import { z } from "zod";
import { defineCollections, frontmatterSchema } from "fumadocs-mdx/config";
var blogPosts = defineCollections({
  type: "doc",
  dir: "content/blog",
  schema: frontmatterSchema.extend({
    author: z.string(),
    date: z.date()
  })
});
export {
  blogPosts
};
