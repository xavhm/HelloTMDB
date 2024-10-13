<template>
  <main v-if="status === 'pending'" class="w-full h-full grid place-items-center">Loading...</main>
  <main v-else class="mt-10">
    <section aria-label="Nouveautés">
      <h3 class="text-primary mb-4">Upcoming movies</h3>
      <TheCarrousel v-if="!error" :movies="movies?.results" />
    </section>
    <section class="mt-10" aria-label="Movie Catalog">
      <h3 class="text-primary mb-4">TMDB Catalog</h3>
      <TheGrid>
        <TheMovieCard v-for="movie in movies?.results" :key="movie.id" :movie="movie" />
      </TheGrid>
    </section>
  </main>
</template>

<script setup lang="ts">
  const { getUpcomingMovies } = useMovies();
  const {
    data: movies,
    status,
    error,
  } = await useFetch<MovieResponse>(getUpcomingMovies(), {
    server: false,
  });
</script>
