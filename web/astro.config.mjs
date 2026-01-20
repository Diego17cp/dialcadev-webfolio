// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  site: "https://dialcadev.vercel.app",
  integrations: [icon({
    include: {
      tabler: ["*"],
      lucide: ["*"],
      "devicon-plain": ["*"],
      "simple-icons": ["*"]
    }
  }), robotsTxt()]
});