import type { Config } from "tailwindcss";
import sharedConfig from "@vizdev/tailwind-config";

const config: Pick<Config, "prefix" | "presets" | "content"> = {
  content: ["./src/**/*.{tsx,ts}"],
  prefix: "",
  presets: [sharedConfig],
};

export default config;
