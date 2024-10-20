import ClipboardJS from 'clipboard';

import { createApp } from 'vue';
import App from './App.vue';

// 代码高亮基础库
import 'prismjs';
import 'prismjs/components/prism-css';        
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';

import 'github-markdown-css/github-markdown.css';
import '@/assets/style.css';

// 初始化 ClipboardJS，用于处理复制按钮
new ClipboardJS('.copy-btn');

const app = createApp(App);
app.mount('#app');
