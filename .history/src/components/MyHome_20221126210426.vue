<template>
  <div>
    
    <PopularMovies />
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
    PopularMovies,
  },
};
</script>

<style scoped></style>
