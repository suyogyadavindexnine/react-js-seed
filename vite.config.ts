import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [react()],
  resolve: {
    alias: [{ find: "src", replacement: resolve(__dirname, "./src") }],
  },
  optimizeDeps: {
    include: ["@mui/x-date-pickers"],
  },

  publicDir: resolve(__dirname, "public"),
});
