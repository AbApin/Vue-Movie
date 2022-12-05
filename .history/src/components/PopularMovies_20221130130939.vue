<template>
  
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
      genres: [],
    };
  },
  async mounted() {
    this.fetchGenres();
    try {
      const response = await this.$http.get('/movie/popular');
      this.popularMovies = response.data.results;
    } catch (error) {
      console.log(error);
    }
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
