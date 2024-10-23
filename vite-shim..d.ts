/// <reference types="vite/client" />

declare module 'markdown-it-copy';

interface ImportMeta {
  readonly env: ImportMetaEnv
}

interface ImportMetaEnv {
  readonly VITE_ENV_MODE: string
  // 更多环境变量...
}

