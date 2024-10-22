<template>
  <i class="icon" :style="style">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon__svg" aria-hidden="true">
      <slot></slot>
    </svg>
  </i>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

interface Props {
  size?: number | string;
  color?: string;
}

const { size, color } = defineProps<Props>();

const style = computed(() => {
  let result: Record<string, string> = {};
  if (color) {
    result['--icon-color'] = color;
  }
  if (size) {
    const num = parseInt(`${size}`, 10);
    result['--icon-size'] = `${num}px`;
  }
  return result;
})
</script>