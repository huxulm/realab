// tailwind config is required for editor support
import type { Config } from "tailwindcss";
import sharedConfig from "@vizdev/tailwind-config";
import colors from "tailwindcss/colors"

const config: Config = {
  darkMode: ['class'],
  content: [".storybook/preview.ts", "src/**/*.{tsx,ts,mdx}"],
  theme: {
    colors: {
      ...colors,
    },
    extend: {},
  },  
  presets: [sharedConfig],
};

export default config;
