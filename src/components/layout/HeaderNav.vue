<template>
  <ul class="app-header-nav">
    <li v-for="item in items" :class="activeClass(item.to)">
      <RouterLink :to="item.to">{{ item.text }}</RouterLink>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';

const route = useRoute();

const items = [
  { text: '首页', to: '/' },
  { text: '分类', to: '/categories' },
  { text: '标签', to: '/tags' },
  { text: '文档', to: '/docs' },
  { text: '关于', to: '/about' },
];

function activeClass(to: string) {
  const isActive = route.fullPath === to;
  return { 'active': isActive };
}
</script>

<style>
.app-header-nav {
  display: flex;
  margin-right: 16px;
  height: 100%;
  list-style: none;
}
.app-header-nav li {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.app-header-nav li:hover,
.app-header-nav li.active {
  color: var(--app-link-color);
}
.app-header-nav li.active {
  font-weight: bold;
}
.app-header-nav li::after {
  position: absolute;
  bottom: -1px;
  width: 100%;
  height: 1px;
  content: '';
  background-color: transparent;
  transform: scaleX(0); 
  transition: transform 0.3s ease, background-color 0.3s ease;
}
.app-header-nav li.active::after {
  background-color: var(--app-link-color);
  transform: scaleX(1);
}
.app-header-nav li a {
  display: flex;
  align-items: center;
  padding: 0 12px;
  height: 100%;
  color: currentColor;
  text-decoration: none;
}
</style>