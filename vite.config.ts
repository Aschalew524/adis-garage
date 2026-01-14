/// <reference types="vitest/config" />
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const root = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  root,
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: fileURLToPath(new URL("./src/test/setup.ts", import.meta.url)),
    globals: true,
    css: true,
  },
});
