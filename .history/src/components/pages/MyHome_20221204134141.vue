<template>
  <div class="container mx-auto">
    <h2 class="mt-5 text-lg font-semibold uppercase text-yellow-500">Popular Movies</h2>
    <div class="mt-5 grid grid-cols-1 gap-8 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
      <MovieItem v-for="movie in popularMovies" :key="movie.id" :movie="movie" :genres="genres" />
    </div>
    <ComingSoon />
  </div>
</template>

<script>
import ComingSoon from '../ComingSoon.vue';
import MovieItem from '../items/MovieItem.vue';
export default {
  components: {
    MovieItem,
    ComingSoon,
  },
  data() {
    return {};
  },
  async mounted() {
    this.fetchGenres();
    
  },
  methods: {
    async fetchGenres() {
      try {
        const response = await this.$http.get('/genre/movie/list');
        this.genres = response.data.genres;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
