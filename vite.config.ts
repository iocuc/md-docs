import type { UserConfig } from 'vite'
import Pages from 'vite-plugin-pages'
import Markdown from 'unplugin-vue-markdown/vite'
import Components from 'unplugin-vue-components/vite'
import MarkdownItPrism from 'markdown-it-prism';
import Vue from '@vitejs/plugin-vue'

const config: UserConfig = {
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Pages({
      extensions: ['vue', 'md'],
    }),
    Markdown({
      headEnabled: true,
      markdownItSetup(md) {
        md.use(MarkdownItPrism);  // 代码高亮
      },
    }),
    Components({
      extensions: ['vue', 'md'],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    }),
  ],
  ssgOptions: {
    script: 'async',
    formatting: 'prettify',
  },
}

export default config;
