import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteImagemin from 'vite-plugin-imagemin'

export default defineConfig({
  base: '/',

  plugins: [
    react(),

    viteImagemin({
      optipng: { optimizationLevel: 7 },
      pngquant: { quality: [0.6, 0.8], speed: 4 },
      mozjpeg: { quality: 75 },
      gifsicle: { optimizationLevel: 3 },
      svgo: {
        plugins: [{ name: 'removeViewBox', active: false }],
      },
    }),
  ],

  build: {
    outDir: 'dist',
    sourcemap: false,
    assetsInlineLimit: 0,
  },
})