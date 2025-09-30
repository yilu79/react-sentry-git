import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "mybcsolutions",
    project: "react-sentry-git"
  })],
  build: {
    sourcemap: true,
    sourcemapFile: "/static",
    emptyOutDir: true,
  }
})