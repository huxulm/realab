// tailwind config is required for editor support

import type { Config } from "tailwindcss";
import sharedConfig from "@vizdev/tailwind-config";

const config: Pick<Config, "content" | "presets"> = {
  content: [".storybook/preview.ts", "src/**/*.{tsx,ts}"],
  presets: [sharedConfig],
};

export default config;
