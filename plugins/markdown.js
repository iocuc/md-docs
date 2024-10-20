import Markdown from 'vite-plugin-md';
import markdownItPrism from 'markdown-it-prism';
import markdownItAnchor from 'markdown-it-anchor';

// 自定义的代码块渲染函数，添加复制按钮
function renderCodeWithCopyBtn(tokens, idx, escapeHtml) {
  const token = tokens[idx];
  const language = token.info ? `language-${escapeHtml(token.info.trim())}` : '';
  const code = escapeHtml(token.content.trim());

  return `
    <div class="code-block">
      <button class="copy-btn" data-clipboard-text="${code}">Copy</button>
      <pre class="${language}"><code>${code}</code></pre>
    </div>
  `;
}

// 定义锚链接样式和位置
function permalinkHeader() {
  return markdownItAnchor.permalink.linkInsideHeader({ 
    symbol: '#',
    placement: 'before', // 锚链接放在标题之前
    class: 'anchor-link' // 自定义锚链接的类名
  });
}

export default function VitePluginMarkdown() {
  return Markdown({
    markdownItSetup(md) {
      // 代码高亮
      md.use(markdownItPrism);  

      // 锚链接
      const permalink = permalinkHeader();
      const slugify = s => s.trim().toLowerCase().replace(/[\s]+/g, '-');
      md.use(markdownItAnchor, { permalink, slugify });
      
      // 添加代码复制功能
      const escapeHtml = md.utils.escapeHtml;
      md.renderer.rules.fence = (tokens, idx) => renderCodeWithCopyBtn(tokens, idx, escapeHtml);
    },
  });
}
