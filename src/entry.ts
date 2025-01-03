import { ViteSSG } from 'vite-ssg';
import { useRouteGuard } from '@/composables/useGuard';
import routes from '~pages';
import App from '@/App.vue';
import '@/styles/main.scss';

export const createApp = ViteSSG(App, {
  base: import.meta.env.BASE_URL,
  routes,
}, useRouteGuard);
