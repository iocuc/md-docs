<template>
  <a href="/">
    <img class="header-logo__img" :src="LogoImg"/>
    <span class="header-logo__text">kola</span>
  </a>
  <button class="header-search">
    <IconSearch class="header-search__icon" size="18" />
    <span class="header-search__text">搜索</span>
    <span class="header-search__key">Crtl+K</span>
  </button>
  <div class="header-nav">
    <HeaderNav />
  </div>
  <div class="header-toolbar">
    {{ isLoading }}
    <button class="header-link" @click="toggleTheme">
      <IconMoon v-if="lightColor" />
      <IconSun v-else />
    </button>
    <a class="header-link" target="_blank" href="https://github.com/iocuc/md-docs">
      <IconGithub />
    </a>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRouteLoading } from '@/composables/useGuard';
import HeaderNav from '@/components/layout/HeaderNav.vue';
import IconSearch from '@/components/icon/IconSearch.vue';
import IconGithub from '@/components/icon/IconGithub.vue';
import IconMoon from '@/components/icon/IconMoon.vue';
import IconSun from '@/components/icon/IconSun.vue';
import LogoImg from '@/assets/test.jpg';

const lightColor = ref(true);
const isLoading = useRouteLoading();  // 路由加载状态

function toggleTheme() {
  const oldValue = lightColor.value;
  lightColor.value = !oldValue;
}
</script>

<style>
.header-logo__img,
.header-logo__text {
  display: inline-block;
  vertical-align: middle;
}
.header-logo__img {
  width: 32px;
  height: 32px;
}
.header-logo__text {
  margin-left: 4px;
  color: #000;
  font-weight: bold;
  text-transform: uppercase;
}
.header-search {
  display: flex;
  align-items: center;
  margin: 4px 12px 0;
  padding: 4px 8px 4px 6px;
  color: #999;
  border-radius: 4px;
  font-size: 12px;
}
.header-search:hover {
  background-color: #f5f5f5;
}
.header-search__icon {
  margin-top: 3px;
}
.header-search__text {
  margin: 0 8px 0 4px;
}
.header-search__key {
  padding: 0 4px;
  border-radius: 3px;
  border: 1px solid #e1e1e1;
}
.header-nav {
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  align-self: stretch;
}
.header-toolbar {
  display: flex;
  align-items: end;
}
.header-link {
  margin-left: 10px;
  color: rgba(0, 0, 0, 0.6);
}
.header-link:hover {
  color: #000;
}
</style>