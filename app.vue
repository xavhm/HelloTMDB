<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script lang="ts">
  useSeoMeta({
    ogTitle: 'HelloTMDB - A Movie Catalog',
    description: 'HelloTMDB - A Movie Catalog',
    ogDescription: 'HelloTMDB - A Movie Catalog',
    ogImage:
      'https://images.unsplash.com/photo-1608170825938-a8ea0305d46c?q=80&w=4932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    twitterCard: 'summary_large_image',
  });
</script>
