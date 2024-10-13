<template>
  <article
    class="aspect-[2/3] rounded-md overflow-hidden transition-transform ease-out motion-safe:hover:scale-110 cursor-pointer"
    @click="tryViewTransition(movie.id)"
  >
    <NuxtImg
      format="webp"
      width="300"
      :src="getImageWithSize('w300', movie.poster_path)"
      :alt="movie.title"
      class="w-full h-full object-cover"
      :class="{ view_transition: activeTransition }"
    />
  </article>
</template>

<script setup lang="ts">
  const { getImageWithSize } = useTmdbImages();
  defineProps<{ movie: Movie }>();

  const activeTransition = ref<boolean>(false);

  function tryViewTransition(id: number) {
    activeTransition.value = true;
    if (!document.startViewTransition) {
      navigateTo({
        path: `/movie/${id}`,
      });
    } else {
      document.startViewTransition(() =>
        navigateTo({
          path: `/movie/${id}`,
        })
      );
    }
  }
</script>

<style>
  .view_transition {
    view-transition-name: poster;
    contain: layout;
  }
</style>
