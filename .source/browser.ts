// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  blogPosts: create.doc("blogPosts", {"nuqs-type-safe-search-params-for-react.mdx": () => import("../content/blog/nuqs-type-safe-search-params-for-react.mdx?collection=blogPosts"), "why-frontend-authentication-does-not-protect-your-database-nextjs-trpc.mdx": () => import("../content/blog/why-frontend-authentication-does-not-protect-your-database-nextjs-trpc.mdx?collection=blogPosts"), }),
};
export default browserCollections;