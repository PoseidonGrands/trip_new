import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    // 配置跨域请求
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000/',
        changeOrigin: true,
        // ！！！！巨坑，不能用原来的pathRewrite，现在要用rewrite，否则无法识别该参数导致无法重写url
        rewrite: (path) => path.replace('/api', '')
      }
    }
  }
})
