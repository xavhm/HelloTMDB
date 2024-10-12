<template>
  <pre>{{ key }}</pre>
</template>

<script setup lang="ts">
  const key = useRuntimeConfig().public.TMDB_KEY;
</script>

<style></style>
