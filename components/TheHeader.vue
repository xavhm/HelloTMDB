<template>
  <header class="flex items-center justify-between">
    <div class="flex flex-col justify-center">
      <h1
        class="text-lg lg:text-2xl text-transparent bg-clip-text bg-gradient-to-b from-primary to-cyan-800"
      >
        HelloTMDB
      </h1>
      <h2
        class="text-sm lg:text-lg text-transparent bg-clip-text bg-gradient-to-b from-slate-100 to-slate-400"
      >
        Powered by TMDB
      </h2>
    </div>
    <nav>
      <ul class="flex items-center gap-4">
        <li>
          <nuxt-link v-slot="{ isActive }" to="/" title="Home">
            <p
              :class="isActive ? 'text-primary' : 'text-white'"
              class="transition-all duration-500 ease-out cursor-pointer"
            >
              Home
            </p>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            v-slot="{ isActive }"
            to="/search"
            title="Find a movie"
            prefetch-on="interaction"
          >
            <p
              :class="isActive ? 'text-primary' : 'text-white'"
              class="transition-all duration-300 ease-out cursor-pointer"
            >
              Search
            </p>
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts"></script>

<style></style>
