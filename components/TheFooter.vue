<template>
  <footer class="flex items-center justify-between">
    <p>HelloTMDB &copy; {{ year }}</p>
    <p>Build with Nuxt 3 💚</p>
  </footer>
</template>

<script setup lang="ts">
  const year = new Date().getFullYear();
</script>
