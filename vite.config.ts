import react from "@vitejs/plugin-react";
import { defineConfig, type Plugin } from "vite";

// Load the bundle as a classic script, as the webpack setup did.
// A module script (`type="module"`) is blocked when index.html is opened from file://.
const classicScript = (): Plugin => ({
  name: "classic-script",
  apply: "build",
  transformIndexHtml: (html) =>
    html
      .replace(/<script type="module" crossorigin src=/g, "<script defer src=")
      .replace(/<link rel="stylesheet" crossorigin href=/g, '<link rel="stylesheet" href='),
});

export default defineConfig({
  plugins: [react(), classicScript()],
  // Keep the same build output as the webpack setup (public/index.html, public/index.js and public/style.css)
  base: "./",
  publicDir: false,
  server: {
    open: true,
  },
  build: {
    outDir: "public",
    emptyOutDir: true,
    cssCodeSplit: false,
    modulePreload: false,
    rolldownOptions: {
      output: {
        format: "iife",
        entryFileNames: "index.js",
        assetFileNames: (asset) =>
          asset.names.some((name) => name.endsWith(".css")) ? "style.css" : "[name][extname]",
      },
    },
  },
});
