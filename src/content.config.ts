import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  // Use glob loader for markdown files (Recommended for Astro 5+)
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.union([image(), z.string()]).optional(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog };
