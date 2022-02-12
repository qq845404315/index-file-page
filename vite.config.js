import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path');


// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    host: 'localhost',
    port: '8099',
    strictPort: false,
    https: false,
  },
  build: {
    outDir: 'explames'
  },
  plugins: [vue()]
})
