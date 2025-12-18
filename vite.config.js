import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteImagemin from 'vite-plugin-imagemin'

// 你的 GitHub 仓库名（必须和 FreyProcyon/Portfolio-2025 保持一致）
const repoName = 'Portfolio-2025'

export default defineConfig(({ command }) => {
  const isBuild = command === 'build'

  return {
    // ✅ 关键：GitHub Pages 是在 /<repoName>/ 子路径下服务的
    // 开发环境用 '/'，打包时用 '/Portfolio-2025/'
    base: isBuild ? `/${repoName}/` : '/',

    plugins: [
      react(),

      // ✅ 图片压缩：只在 build 时生效（dev 不压缩，提升开发速度）
      viteImagemin({
        // PNG（你的 PNG 1-2MB 会有明显收益）
        optipng: { optimizationLevel: 7 },
        pngquant: { quality: [0.6, 0.8], speed: 4 },

        // JPG（如果你有的话）
        mozjpeg: { quality: 75 },

        // GIF / SVG（如果你有的话）
        gifsicle: { optimizationLevel: 3 },
        svgo: {
          plugins: [{ name: 'removeViewBox', active: false }],
        },
      }),
    ],

    build: {
      outDir: 'dist',
      sourcemap: false,
      // 保持默认即可；不建议把大图 inline
      assetsInlineLimit: 0,
    },
  }
})
