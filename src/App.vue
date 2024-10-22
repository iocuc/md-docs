<template>
  <Layout>
    <template #sidebar>
      <div style="height: 1500px;"></div>
    </template>
    <template #main>
      <RouterView />
      <pre>VITE_ENV_MODE:{{ envMode }}</pre>
    </template>
  </Layout>
</template>

<script setup lang="ts">
import Layout from '@/components/Layout.vue';

const envMode = import.meta.env.VITE_ENV_MODE;
</script>
