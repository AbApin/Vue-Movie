<template>
  <div>
    <header class="border-b border-gray-500 py-5">
      <div class="header-inner container mx-auto flex items-center justify-between">
        <NavBar />
        <SearchBar />
      </div>
    </header>
  </div>
</template>

<script>
import NavBar from './header/NavBar.vue';
import SearchBar from './header/SearchBar.vue';
import PopularMovies from './PopularMovies.vue';
export default {
  components: {
    NavBar,
    SearchBar,
  },
};
</script>

<style scoped></style>
