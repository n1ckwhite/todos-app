import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

const vitePWA = VitePWA({
  registerType: "autoUpdate",
  includeAssets: [
    "favicon.ico",
    "android-chrome-192x192.png",
    "android-chrome-512x512.png",
  ],
  workbox: {
    clientsClaim: true,
    skipWaiting: true,
  },
  manifest: {
    name: "Задание для стажировки",
    short_name: "Задание для стажировки",
    description: "Лучший проект",
    background_color: "#fff",
    theme_color: "#fff",
    orientation: "natural",
    display: "standalone",
    display_override: ["window-controls-overlay"],
    lang: "ru-RU",
    start_url: "/",
    dir: "ltr",
    categories: ["Стажировка", "Todo"],
    handle_links: "preferred",
    shortcuts: [
      {
        description: "Главная",
        name: "Главная",
        url: "/",
      },
    ],
    icons: [
      {
        src: "/manifest-icons/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/manifest-icons/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
});

export default defineConfig({
  base: "/",
  plugins: [react(), vitePWA],
  server: {
    port: 3000,
  },
  preview: {
    port: 80,
  },
});
