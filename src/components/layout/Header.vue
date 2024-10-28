<template>
  <RouterLink to="/">
    <img class="header-logo__img" :src="LogoImg"/>
    <span class="header-logo__text">kola</span>
  </RouterLink>
  <HeaderSearch />
  <HeaderNav />
  <div class="header-toolbar">
    <div class="header-toolbar__divider"></div>
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
import HeaderSearch from '@/components/layout/HeaderSearch.vue';
import HeaderNav from '@/components/layout/HeaderNav.vue';
import IconGithub from '@/components/icon/IconGithub.vue';
import IconMoon from '@/components/icon/IconMoon.vue';
import IconSun from '@/components/icon/IconSun.vue';
import LogoImg from '@/assets/imgs/test.jpg';

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
  color: var(--app-text-color);
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
}
.header-toolbar {
  display: flex;
  align-items: end;
  height: 24px;
}
.header-toolbar__divider {
  display: flex;
  align-self: center;
  margin-right: 8px;
  width: 1px;
  height: 90%;
  background-color: var(--app-border-color);
}
.header-link {
  display: flex;
  margin-left: 12px;
  color: var(--header-link-color);
}
.header-link:hover {
  color: var(--header-link-color-hover);
}
</style>