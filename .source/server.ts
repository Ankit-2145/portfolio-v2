// @ts-nocheck
import * as __fd_glob_1 from "../content/blog/why-frontend-authentication-does-not-protect-your-database-nextjs-trpc.mdx?collection=blogPosts"
import * as __fd_glob_0 from "../content/blog/nuqs-type-safe-search-params-for-react.mdx?collection=blogPosts"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const blogPosts = await create.doc("blogPosts", "content/blog", {"nuqs-type-safe-search-params-for-react.mdx": __fd_glob_0, "why-frontend-authentication-does-not-protect-your-database-nextjs-trpc.mdx": __fd_glob_1, });