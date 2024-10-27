<template>
  <a href="/">
    <img class="header-logo__img" :src="LogoImg"/>
    <span class="header-logo__text">kola</span>
  </a>
  <div class="header-search">
    <IconSearch class="header-search__icon" size="18" />
    <span class="header-search__text">搜索</span>
    <span class="header-search__key">Crtl+K</span>
  </div>
  <div class="header-nav">
    <HeaderNav />
  </div>
  <div class="header-toolbar">
    <button class="header-link" @click="toggleTheme">
      <IconSun v-if="isLight" title="浅色主题" />
      <IconMoon v-else title="暗色主题" />
    </button>
    <a class="header-link" target="_blank" href="https://github.com/iocuc/md-docs">
      <IconGithub />
    </a>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, watch, onMounted, nextTick } from 'vue';
import HeaderNav from '@/components/layout/HeaderNav.vue';
import IconSearch from '@/components/icon/IconSearch.vue';
import IconGithub from '@/components/icon/IconGithub.vue';
import IconMoon from '@/components/icon/IconMoon.vue';
import IconSun from '@/components/icon/IconSun.vue';
import LogoImg from '@/assets/img/test.jpg';

const theme = ref('light');
let appEl: HTMLElement | null = null;

const isLight = computed(() => theme.value === 'light');

onMounted(() => {
  appEl = document.getElementById('app');
})

watch(theme, async (newTheme) => {
  await nextTick();
  appEl?.setAttribute('theme', newTheme);
})

function toggleTheme() {
  theme.value = theme.value === 'light' ? 'dark' : 'light';
}
</script>

<style>
.header-logo__img,
.header-logo__text {
  display: inline-block;
  vertical-align: middle;
}
.header-logo__img {
  width: 24px;
  height: 24px;
}
.header-logo__text {
  margin-left: 8px;
  color: #000;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
}
.header-search {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  color: #999;
  font-size: 12px;
  border-radius: 4px;
  cursor: pointer;
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
  padding: 0 6px;
  line-height: 22px;
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
  margin-left: 12px;
  color: rgba(0, 0, 0, 0.6);
}
.header-link:hover {
  color: #000;
}
</style>