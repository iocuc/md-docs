import type { UserConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import Pages from 'vite-plugin-pages';
import Markdown from 'unplugin-vue-markdown/vite';
import MarkdownItPrism from 'markdown-it-prism';
import Components from 'unplugin-vue-components/vite';

// 代码块复制按钮的渲染逻辑
function renderCodeWithCopyBtn(md: any) {
  const escapeHtml = md.utils.escapeHtml;

  md.renderer.rules.fence = (tokens: any[], idx: number) => {
    const token = tokens[idx];
    const language = token.info ? `language-${escapeHtml(token.info.trim())}` : '';
    const code = escapeHtml(token.content.trim());

    return `
      <div class="code-block">
        <button class="code-block-copy" data-clipboard-text="${code}">Copy</button>
        <pre class="${language}"><code>${code}</code></pre>
      </div>
    `;
  };
}

const config: UserConfig = {
  plugins: [
    // 支持 .vue 和 .md 文件
    Vue({ include: [/\.vue$/, /\.md$/] }),

    // 处理 .vue 和 .md 文件作为页面
    Pages({ extensions: ['vue', 'md'] }),


    Markdown({
      headEnabled: true,            // 启用头部元信息
      markdownItSetup(md) {
        md.use(MarkdownItPrism);    // 启用代码高亮
        renderCodeWithCopyBtn(md);  // 自定义渲染代码块并添加复制按钮
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
}

export default config;
