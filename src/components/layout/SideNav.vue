<template>
  <ul class="app-side-nav">
    <li v-for="item in items" class="app-side-nav-item" :class="activeClass(item.to)">
      <router-link :to="item.to">{{ item.title }}</router-link>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const items = [
  { title: 'a', to: '/a' },
  { title: 'b', to: '/b' },
  { title: 'deep-a', to: '/nested/deep/a' },
  { title: 'deep-b', to: '/nested/deep/b' },
];

function activeClass(to: string) {
  const isActive = route.fullPath === to;
  return { 'app-side-nav-item--active': isActive };
}
</script>

<style>
.app-side-nav {
  list-style: none;
}
.app-side-nav-item {
  padding: 4px 8px;
  cursor: pointer;
}
.app-side-nav-item--active,
.app-side-nav-item:hover {
  background-color: #f1f1f1;
}
.app-side-nav-item a {
  display: block;
  line-height: 24px;
  color: #676767;
  text-decoration: none;
}
</style>