import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entry: {
    "styles": "src/styles.css",
    "card/index": "src/card/index.tsx",
    "chart/cartesian/line/index": "src/chart/cartesian/line/index.tsx",
    "chart/index": "src/chart/index.tsx",
    "line/index": "src/line/index.tsx",
  },
  dts: true,
  format: ["esm"],
  external: ["react"],
  splitting: true,
  sourcemap: true,
  minify: !options.watch,
  clean: true,
}));
