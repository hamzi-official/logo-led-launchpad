import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { tanStackRouterCodeSplitter } from "@tanstack/router-plugin/vite";
import { fileURLToPath } from "node:url";
export default defineConfig({
  root: "static",
  base: "./",
  publicDir: "../public",
  plugins: [tanStackRouterCodeSplitter({ target: "react", autoCodeSplitting: true }), react(), tailwindcss()],
  resolve: { alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) } },
  define: { "import.meta.env.VITE_STATIC_PAGES": JSON.stringify("true") },
  build: { outDir: "../dist", emptyOutDir: true },
});