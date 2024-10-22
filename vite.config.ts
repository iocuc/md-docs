import type { UserConfig } from 'vite';
import path from 'path';
import Vue from '@vitejs/plugin-vue';
import Pages from 'vite-plugin-pages';
import Markdown from 'unplugin-vue-markdown/vite';
import Components from 'unplugin-vue-components/vite';
import MarkdownItPrism from 'markdown-it-prism';
import MarkdownItCopy from 'markdown-it-copy';

const copyOptions = {
  btnText: '复制代码',
  failText: '复制失败',
  successText: '已复制', 
  successTextDelay: 500, // 复制成功文本延迟消失时间
  extraHtmlBeforeBtn: '', 
  extraHtmlAfterBtn: '',
  showCodeLanguage: false, 
  attachText: '',  // 附加到复制的内容后的文字，比如版权信息
};

const config: UserConfig = {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    // 支持 .vue 和 .md 文件
    Vue({ include: [/\.vue$/, /\.md$/] }),

    // 处理 .vue 和 .md 文件作为页面
    Pages({ extensions: ['vue', 'md'] }),

    Markdown({
      headEnabled: true,  // 启用头部元信息
      markdownItSetup(md) {
        md.use(MarkdownItPrism);  
        md.use(MarkdownItCopy, copyOptions);  
      },
    }),

    Components({
      extensions: ['vue', 'md'],                  // 自动导入组件
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/], // 处理 Vue 和 Markdown 文件中的组件
    }),
  ],

  ssgOptions: {
    script: 'async',        // 异步加载脚本
    formatting: 'prettify', // 美化 HTML 输出
  },
};

export default config;
