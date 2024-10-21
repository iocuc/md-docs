<template>
  <main class="app-main">
    <RouterView />
    <pre>VITE_ENV_MODE:{{ envMode }}</pre>
  </main>
</template>

<script setup lang="ts">
const envMode = import.meta.env.VITE_ENV_MODE;
</script>
