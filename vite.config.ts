import { Plugin, defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import tsconfigPaths from "vite-tsconfig-paths";
import dts from "vite-plugin-dts";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) =>
  mode === "library"
    ? {
        plugins: [
          tsconfigPaths(),
          react(),
          dts({
            insertTypesEntry: true,
            include: ["src"],
          }),
        ],
        resolve: {
          alias: {
            "@": resolve(__dirname, "./src"),
          },
        },
        build: {
          minify: false,
          sourcemap: true,
          copyPublicDir: false,
          lib: {
            entry: resolve("src", "index.ts"),
            name: "telviz",
            fileName: "index",
          },
          rollupOptions: {
            plugins: [
              peerDepsExternal({ includeDependencies: true }) as Plugin,
            ],
          },
        },
      }
    : {
        plugins: [react()],
        resolve: {
          alias: {
            "@": resolve(__dirname, "./src"),
          },
        },
      }
);
