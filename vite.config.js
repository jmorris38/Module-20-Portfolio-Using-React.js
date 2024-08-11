// Import the vite configuration and plugin for react.
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set the server configuration to open the browser when the server starts.
  server: {
    port: 3000,
    open: true,
  },
});
