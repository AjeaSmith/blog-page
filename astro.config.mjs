// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import mdx from "@astrojs/mdx";

import vercel from "@astrojs/vercel";

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

  integrations: [react(), mdx()],
  adapter: vercel(),
});