// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  blogPosts: create.doc("blogPosts", {"datanode.mdx": () => import("../content/blog/datanode.mdx?collection=blogPosts"), "hello.mdx": () => import("../content/blog/hello.mdx?collection=blogPosts"), }),
};
export default browserCollections;