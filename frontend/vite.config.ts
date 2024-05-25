import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@components", replacement: "/src/components" },
      { find: "@api", replacement: "/src/api" },
      { find: "@utils", replacement: "/src/utils" },
    ],
  },
});
