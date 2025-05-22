import { defineCollection, z } from "astro:content";
import { file } from "astro/loaders"; // Not available with legacy API

const blog = defineCollection({
	loader: file("src/data/posts.json"),
	schema: z.object({
		title: z.string(),
		slug: z.string(),
		publishedAt: z.coerce.date(),
		description: z.string(),
		content: z.string(),
	}),
});

export const collections = { blog };
