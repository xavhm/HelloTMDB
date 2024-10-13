<template>
  <main arial-label="Find a movie">
    <UInput v-model="search" placeholder="Avengers Endgame..." variant="outline" />
    <TheGrid>
      <TheMovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
    </TheGrid>
  </main>
</template>

<script lang="ts">
  const { getSearchedMovie } = useMovies();

  const search = ref<string>('');
  const page = ref<number>(1);
  // const movies = ref<Array<Movie>>([]);

  const { execute } = await useFetch<MovieResponse>(getSearchedMovie(search.value, page.value), {
    server: false,
    onResponse: ({ response }) => console.log(response),
  });

  watch(
    () => search,
    () => execute()
  );
  watch(
    () => page,
    () => execute()
  );
</script>
