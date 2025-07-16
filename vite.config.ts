import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  base: "/github-repositories-explorer/",
  plugins: [
    svgr(),
    react({
      babel: {
        plugins: [
          [
            "babel-plugin-styled-components",
            {
              displayName: true,
              fileName: true, // This helps in debugging; can be set to false if you want shorter classes
              minify: true,
              pure: true,
              ssr: false, // Omit or set to true only if you do server-side rendering
            },
          ],
        ],
      },
    }),
  ],
});
