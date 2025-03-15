import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss()
  ],
  server: {
    proxy: {
      '/api': {
        target: 'testappthptscore-production.up.railway.app',
        changeOrigin: true,
        secure: false, // Nếu API không dùng HTTPS, đổi thành false
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
