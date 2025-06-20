import {  glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
	loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
	schema: () =>
		z.object({
			title: z.string(),
			slug: z.string(),
			publishedAt: z.coerce.date(),
			description: z.string(),
		}),
});

export const collections = { blog };
