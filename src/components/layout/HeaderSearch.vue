<template>
  <div class="header-search" @click="showSearch">
    <div v-if="loading" class="header-search__loading">
      加载中...
    </div>
    <template v-else>
      <IconSearch class="header-search__icon" size="18" />
      <span class="header-search__text">搜索</span>
      <span class="header-search__key">Crtl+K</span>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import IconSearch from '@/components/icon/IconSearch.vue';

const loading = ref(false);

function showSearch() {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 1000);
}
</script>

<style>
.header-search {
  display: flex;
  align-items: center;
  margin-left: 16px;
  padding: 6px 12px;
  color: #999;
  font-size: 12px;
  cursor: pointer;
  border-radius: 6px;
  border: 1px solid transparent;
  background-color: var(--header-search-bg);
  transition: border-color 0.3s ease;
  user-select: none;
}
.header-search:hover {
  border-color: var(--app-link-color);
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
  border: 1px solid var(--app-border-color);
}
.header-search__loading {
  width: 105px;
  height: 24px;
  line-height: 24px;
  text-align: center;
}
</style>