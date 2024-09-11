// tailwind config is required for editor support
import type { Config } from "tailwindcss";
import sharedConfig from "@vizdev/tailwind-config";

const config: Config = {
  darkMode: ["selector"],
  content: [".storybook/preview.ts", "src/**/*.{tsx,ts,mdx}"],
  theme: {
    colors: {
    },
    extend: {},
  },
  presets: [sharedConfig],
};

export default config;
