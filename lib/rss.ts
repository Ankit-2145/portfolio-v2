import { Feed } from "feed";
import { blog } from "@/lib/source";

const baseUrl = "https://ankitsharma.codes";

export function getRSS() {
  const feed = new Feed({
    title: "Ankit Sharma's Blog",
    id: `${baseUrl}/blog`,
    link: `${baseUrl}/blog`,
    language: "en",

    image: `${baseUrl}/banner.png`,
    favicon: `${baseUrl}/icon.png`,
    copyright: "All rights reserved 2026, Ankit Sharma",
  });

  for (const page of blog.getPages()) {
    feed.addItem({
      id: page.url,
      title: page.data.title,
      description: page.data.description,
      link: `${baseUrl}${page.url}`,
      date: new Date(page.data.date),

      author: [
        {
          name: "Ankit Sharma",
        },
      ],
    });
  }

  return feed.rss2();
}
