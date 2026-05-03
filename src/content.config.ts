import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const writing = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/writing" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    excerpt: z.string().optional(),
    draft: z.boolean().default(false),
    updatedDate: z.coerce.date().optional(),
  }),
});

const work = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/work" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      role: z.string(),
      period: z.string(),
      summary: z.string(),
      liveUrl: z.string().url().optional(),
      repoUrl: z.string().url().optional(),
      caseStudyUrl: z.string().url().optional(),
      cover: image().optional(),
      order: z.number().default(999),
      draft: z.boolean().default(false),
    }),
});

export const collections = { writing, work };
