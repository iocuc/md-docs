<template>
  <ul class="app-side-nav">
    <li v-for="item in items":class="activeClass(item.to)">
      <router-link :to="item.to">{{ item.title }}</router-link>
    </li>
  </ul>
</template>

<script lang="ts" setup>
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
  return { 'app-side-nav--active': isActive };
}
</script>

<style>
.app-side-nav {
  margin-top: 16px;
  list-style: none;
}
.app-side-nav li {
  padding: 4px 8px;
  cursor: pointer;
}
.app-side-nav li a {
  display: block;
  line-height: 24px;
  color: #676767;
  text-decoration: none;
  text-overflow: ellipsis;
  overflow: hidden;
}
.app-side-nav li a:hover {
  color: #3451b2;
}
.app-side-nav--active a {
  color: #3451b2;
  background-color: #f1f1f1;
}
</style>