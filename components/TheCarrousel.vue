<template>
  <UCarousel
    v-slot="{ item }"
    :items="movies"
    :ui="{ item: 'basis-full' }"
    class="mx-auto rounded-lg overflow-hidden"
    indicators
  >
    <div class="relative w-full" :aria-label="item?.title">
      <img
        :src="getImageWithSize('original', item?.backdrop_path)"
        class="w-full"
        draggable="false"
      />
      <h3 class="absolute top-5 left-5 text-3xl drop-shadow-md">{{ item.title }}</h3>
    </div>
  </UCarousel>
</template>

<script setup lang="ts">
  const { getImageWithSize } = useTmdbImages();
  defineProps<{ movies: Array<Movie> | undefined }>();
</script>
