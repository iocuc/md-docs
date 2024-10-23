<template>
  <div class="app-progress">
    <div class="app-progress__bar" :style="style"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, watch } from 'vue';
import { useRouteLoading } from '@/composables/useGuard';

let interval = null;
const delay = 300;      // 延迟重置时间
const maxPercent = 75;  // 模拟的最大进度

// 加载状态
const isLoading = useRouteLoading();  
watch(isLoading, value => value ? start() : complete());

// 进度样式
const percent = ref(0);
const style = computed(() => {
  const display = percent.value === 101 ? 'none' : 'block';
  return { display, width: `${percent.value}%` };
});

// 开始进度
function start() {
  percent.value = 0;
  interval = setInterval(() => {
    if (percent.value < maxPercent) {
      percent.value += Math.random() * 5; // 随机增加进度
    }
  }, 300);
}

// 完成进度
function complete() {
  clearInterval(interval);
  percent.value = 100;
  setTimeout(() => { percent.value = 101 }, delay); // 延迟重置，给用户一点反馈时间
}
</script>

<style>
.app-progress {
  overflow: hidden;
  width: 100%;
  background-color: transparent;
}
.app-progress__bar {
  height: 100%;
  background-color: #6aa6eb;;
  transition: width 0.3s ease;
}
.app-progress--disabled {
  transition: none;
}
</style>