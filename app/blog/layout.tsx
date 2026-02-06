import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    types: {
      "application/rss+xml": [
        {
          title: "Ankit Sharma's Blog",
          url: "https://ankitsharma.codes/rss.xml",
        },
      ],
    },
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
