// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import icon from "astro-icon";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
	site: "https://example.com",
	markdown: {
		shikiConfig: {
			theme: "dracula",
			themes: {
				light: "material-theme-lighter",
				dark: "material-theme-palenight",
			},
		},
	},
	vite: {
		plugins: [tailwindcss()],
	},

	integrations: [
		react(),
		icon({
			svgoOptions: {
				plugins: [
					{
						name: "convertColors",
						params: { currentColor: true },
					},
				],
			},
		}),
		mdx(),
	],
});
