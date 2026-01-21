import type { NextConfig } from "next";
import nextra from "nextra";

const nextConfig: NextConfig = {
  turbopack: {
    resolveAlias: {
      // Path to your `mdx-components` file with extension
      "next-mdx-import-source-file": "./mdx-components.tsx",
    },
  },
};

// Set up Nextra with its configuration
const withNextra = nextra({
  contentDirBasePath: "/blog",
});

export default withNextra(nextConfig);
