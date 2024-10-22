import type { ViteSSGContext } from 'vite-ssg';
import { getCurrentInstance, computed, ref } from 'vue';

// 路由守卫
export function useRouteGuard(ctx: ViteSSGContext) {
  const { router, app } = ctx;
  const globalProp = app.config.globalProperties;

  globalProp.$isLoading = ref(false);

  router.beforeEach((to, from, next) => {
    globalProp.$isLoading.value = true; // 设置路由加载状态
    next();
  });

  router.afterEach(() => {
    globalProp.$isLoading.value = false;  // 关闭路由加载状态
  });
}

// 获取路由加载状态
export function useRouteLoading() {
  const { appContext } = getCurrentInstance()!; // 获取当前组件实例
  return computed(() => appContext.config.globalProperties.$isLoading?.value);
}