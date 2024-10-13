<template>
  <main arial-label="Find a movie">
    <UInput v-model="search" placeholder="Avengers Endgame..." variant="outline" />
    <h3 v-if="!movies.length" class="text-primary mt-10">No results...</h3>
    <h3 v-else class="text-primary mt-10">Your results</h3>
    <TheGrid v-if="movies.length" class="mt-10">
      <TheMovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
      <div ref="intersection" class="w-[210px] aspect-[2/3]"></div>
    </TheGrid>
  </main>
</template>

<script setup lang="ts">
  import { refDebounced, useIntersectionObserver } from '@vueuse/core';
  const { getSearchedMovie } = useMovies();

  const intersection = ref<HTMLElement | null>(null);
  const search = ref<string>('');
  const debouncedSearch = refDebounced(search, 500);
  const page = ref<number>(1);
  const movies = ref<Array<Movie>>([]);

  await useFetch<MovieResponse>(getSearchedMovie(), {
    server: false,
    query: {
      page,
      query: debouncedSearch,
    },
    onResponse: ({ response }) => movies.value.push(...response._data.results),
    immediate: false,
    watch: [debouncedSearch, page],
  });

  useIntersectionObserver(intersection, ([{ isIntersecting }], _) => {
    if (isIntersecting) page.value++;
  });
</script>
