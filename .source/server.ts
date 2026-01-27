// @ts-nocheck
import * as __fd_glob_1 from "../content/blog/hello.mdx?collection=blogPosts"
import * as __fd_glob_0 from "../content/blog/datanode.mdx?collection=blogPosts"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const blogPosts = await create.doc("blogPosts", "content/blog", {"datanode.mdx": __fd_glob_0, "hello.mdx": __fd_glob_1, });