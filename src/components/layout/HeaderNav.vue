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
  return { 'app-header-nav--active': isActive };
}
</script>

<style>
.app-header-nav {
  display: flex;
  margin-right: 16px;
  height: 100%;
  list-style: none;
}
.app-header-nav li,
.app-header-nav li a {
  display: flex;
  align-items: center;
  justify-content: center;
}
.app-header-nav li a {
  padding: 0 12px;
  height: 100%;
  color: var(--app-text-color);
  text-decoration: none;
}
.app-header-nav li a:hover {
  color: var(--app-link-color);
}
li.app-header-nav--active a {
  font-weight: bold;
  color: var(--app-link-color);
}
</style>