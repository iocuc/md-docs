<template>
  <Layout>
    <template #header>
      <Header />
    </template>
    <template #sidebar>
      <Sidebar />
    </template>
    <template #main>
      <RouterView />
    </template>
  </Layout>
</template>

<script setup lang="ts">
import Layout from '@/components/layout/Layout.vue';
import Header from '@/components/layout/Header.vue';
import Sidebar from '@/components/layout/Sidebar.vue';

const envMode = import.meta.env.VITE_ENV_MODE;
</script>
