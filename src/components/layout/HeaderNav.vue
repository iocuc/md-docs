<template>
  <div class="header-nav">
    <ul class="header-nav-list">
      <li v-for="item in items" :class="activeClass(item.to)">
        <RouterLink :to="item.to">{{ item.text }}</RouterLink>
      </li>
    </ul>
  </div>
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
.header-nav {
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  align-self: stretch;
  justify-content: end;
}
.header-nav-list {
  display: flex;
  margin-right: 16px;
  height: 100%;
  list-style: none;
}
.header-nav-list li {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--app-text-color);
}
.header-nav-list li:hover,
.header-nav-list li.active {
  color: var(--app-link-color);
}
.header-nav-list li.active {
  font-weight: bold;
}
.header-nav-list li::after {
  position: absolute;
  bottom: -1px;
  width: 100%;
  height: 1px;
  content: '';
  background-color: transparent;
  transform: scaleX(0); 
  transform-origin: left;  /* 设置动画从左开始 */
  transition: transform 0.3s ease, background-color 0.3s ease;
}
.header-nav-list li.active::after {
  background-color: var(--app-link-color);
  transform: scaleX(1);
}
.header-nav-list li a {
  display: flex;
  align-items: center;
  padding: 0 12px;
  height: 100%;
  color: currentColor;
  text-decoration: none;
}
</style>