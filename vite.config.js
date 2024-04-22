import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@assets": "/src/assets",
      "@components": "/src/components",
      "@hooks": "/src/hooks",
      "@icons": "/src/icons",
      "@sections": "/src/sections",
      "@layouts": "/src/layouts",
      "@pages": "/src/pages",
      "@theme": "/src/theme",
      "@utilities": "/src/utilities",
    },
  },
});
