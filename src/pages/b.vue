<template>
  <p>Hello I am B</p>
  <img src="../assets/img/test.jpg" alt="">
</template>

<script lang="ts">
import { useHead } from '@unhead/vue'

export default {
  setup() {
    useHead({
      title: 'Page B',
      meta: [
        {
          name: 'description',
          content: 'Website description',
        },
      ],
      style: [
        {
          children: 'body {color: #567839}',
        },
      ],
    })
  },
  async serverPrefetch() {
    // eslint-disable-next-line no-console
    console.log('prefetch')
  },
}
</script>
