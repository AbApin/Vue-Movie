<template>
  <div class="container mx-auto">
    <h2 class="mt-5 text-lg font-semibold uppercase text-yellow-500">Popular Movies</h2>
    <div class="grid grid-cols-1 gap-8 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
      <MovieItem />
    </div>
  </div>
</template>

<script>
import MovieItem from './items/MovieItem.vue';
export default {
  components: {
    MovieItem,
  },
  data() {
    return {
      popularMovies: [],
    };
  },
  async mounted() {
    const response = await this.$http.get('/movie/popular');
    this.popularMovies = re;
  },
};
</script>
