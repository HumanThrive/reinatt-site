import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  const posts = (await getCollection("writing", ({ data }) => !data.draft)).sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime()
  );

  return rss({
    title: "Rei — Writing",
    description:
      "Posts by Rei Nuttanon — building, operating, and surviving small businesses from a non-Western perspective. Tech, entertainment-industry ops, the rebuild story, and observations on craft, music, photography, and design.",
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.excerpt ?? "",
      link: `/writing/${post.id}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
