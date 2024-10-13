<template>
  <main class="mt-10">
    <div class="flex items-start">
      <NuxtImg
        :src="getImageWithSize('w780', movie!.poster_path)"
        :alt="movie?.title"
        format="webp"
        class="object-contain object-top rounded-md view_transition"
      />
      <div class="flex flex-col items-start pl-2">
        <section class="space-y-2" aria-label="Movie details">
          <p class="text-lg text-primary">{{ movie?.title }}</p>
          <p>{{ movie?.overview }}</p>
          <p><span class="text-primary">Rating: </span>{{ movie?.vote_average }} / 10</p>
          <p><span class="text-primary">Total ratings: </span>{{ movie?.vote_count }}</p>
        </section>

        <section class="mt-10" aria-label="Leave a comment">
          <TheForm :movie-id="movieId" />
        </section>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
  const { currentRoute } = useRouter();
  const { getMovieDetail } = useMovies();
  const { getImageWithSize } = useTmdbImages();
  const movieId = +currentRoute.value.params.id;

  const { data: movie } = await useFetch<Movie>(getMovieDetail(movieId), {
    server: false,
  });
</script>
