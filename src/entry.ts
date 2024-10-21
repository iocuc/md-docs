import { ViteSSG } from 'vite-ssg';
import ClipboardJS from 'clipboard';
import App from './App.vue';
import routes from '~pages';
import './assets/style.css';

// 初始化 ClipboardJS，用于处理代码复制按钮
// 按钮是在 vite.config.ts 里附加到页面的
new ClipboardJS('.code-block-copy');

export const createApp = ViteSSG(App, {
  base: import.meta.env.BASE_URL,
  routes,
});
