<template>
  <div class="app-layout">
    <!-- 进度条 -->
    <Progress class="app-progress" />

    <!-- 头部 -->
    <header class="app-header">
      <div class="app-header__content">
        <slot name="header"></slot>
      </div>
    </header>

    <!-- 左边栏 -->
    <aside class="app-sidebar">
      <div class="app-sidebar__content">
        <slot name="sidebar"></slot>
      </div>
    </aside>

    <!-- 内容 -->
    <main class="app-main">
      <div class="app-main__content">
        <slot name="main"></slot>
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>
import Progress from '@/components/layout/Progress.vue';
</script>

<style>
.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--app-backgroud-color);
}
.app-progress {
  height: var(--app-header-top);
}
.app-header {
  position: fixed;
  top: var(--app-header-top);
  left: 0;
  z-index: 20;
  width: 100%;
}
.app-header__content {
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 24px;
  height: var(--app-header-height);
  white-space: nowrap;
  border-bottom: 1px solid #ccc;
  background-color: var(--app-backgroud-color);
}
.app-sidebar {
  position: fixed;
  top: var(--app-header-height);
  bottom: 0;
  left: 0;
  z-index: 1;
  width: var(--app-sidebar-width);
  max-width: 100%;
  border-right: 1px solid #ccc;
  transform: translate(0);
  overflow-x: hidden;
  overflow-y: auto;
  transition: border-color .5s,background-color .5s;
}
.app-sidebar__content {
  padding: 0 16px var(--app-padding-bottom) 16px;
  background-color: var(--app-backgroud-color);
}
.app-main {
  padding-top: var(--app-header-height);
  padding-left: var(--app-sidebar-width);
}
.app-main__content {
  padding: 32px 32px var(--app-padding-bottom);
}
.app-main__content img {
  max-width: 100%;
}
</style>
