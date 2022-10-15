import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		tsconfigPaths(),
		VitePWA({
			registerType: "autoUpdate",
			includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
			manifest : {
				name: "Lopesan Costa Meloneras",
				short_name: "Lopesan",
				theme_color: "#D4A373",
				icons: [
					{
						src: "pwa-192x192.jpeg",
						sizes: "192x192",
						type: "image/jpeg",
					},
					{
						src: "pwa-512x512.jpeg",
						sizes: "512x512",
						type: "image/jpeg",
					},
					{
						src: "pwa-512x512.jpeg",
						sizes: "512x512",
						type: "image/jpeg",
						purpose: "any maskable",
					},
				]
			},
		})
	]
});
