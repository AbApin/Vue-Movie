<template>
  <div class="container mx-auto">
    

  </div>
</template>

<script>
import CastItem from '../CastItem.vue';
import MovieImagesItem from '../MovieImagesItem.vue';
export default {
  props: ['id'],
  components: {
    CastItem,
    MovieImagesItem,
  },
  data() {
    return {
      currentMovie: {},
      movieGenres: [],
    };
  },
  mounted() {
    this.fetchCurrentMovie(this.id);
  },
  methods: {
    async fetchCurrentMovie(id) {
      try {
        const response = await this.$http.get(
          `/movie/${id}?append_to_response=credits,videos,images`,
        );
        this.currentMovie = response.data;
        this.currentMovie.genres.map((genre) => {
          this.movieGenres.push(genre.name);
        });
        console.log(this.currentMovie);
      } catch (error) {
        console.log(error);
      }
    },
  },
  computed: {
    posterPath() {
      return 'https://image.tmdb.org/t/p/w500/' + this.currentMovie.poster_path;
    },
  },
};
</script>
