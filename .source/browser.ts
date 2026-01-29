// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  blogPosts: create.doc("blogPosts", {"better-auth.mdx": () => import("../content/blog/better-auth.mdx?collection=blogPosts"), "datanode.mdx": () => import("../content/blog/datanode.mdx?collection=blogPosts"), "new-blog.mdx": () => import("../content/blog/new-blog.mdx?collection=blogPosts"), }),
};
export default browserCollections;