import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import VitePluginMarkdown from './plugins/markdown';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // 确保使用正确的基础路径
  plugins: [
    vue({ include: [/\.vue$/, /\.md$/] }),
    VitePluginMarkdown(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})