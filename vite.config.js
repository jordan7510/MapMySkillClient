import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const publicIp = "16.171.62.122";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    host: publicIp,
    port: 80,
  },
});
