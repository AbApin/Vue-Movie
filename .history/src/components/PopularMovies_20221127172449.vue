<template>
  <div class="container mx-auto">
    <h2 class="mt-5 text-lg font-semibold uppercase text-yellow-500">Popular Movies</h2>
    <div class="grid grid-cols-1 gap-8 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
      <MovieItem v-for="movie in popularMovies" :key="movie.id" :movie="movie" />
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
      genras: [],
    };
  },
  async mounted() {
    try {
      const response = await this.$http.get('/movie/popular');
      this.popularMovies = response.data.results;
      console.log(this.popularMovies[0]);
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    fetchGenres() {
      try {
      const response = await this.$http.get('/genre/movie/list');
      this.popularMovies = response.data.results;
      console.log(this.popularMovies[0]);
    } catch (error) {
      console.log(error);
    }
    }
  }
};
</script>
