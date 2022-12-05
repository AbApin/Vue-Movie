<template>
  <div>
    <carousel-3d :controls-visible="true" :clickable="false">
      <slide v-for="movie in comingMovies" :key="movie.id">
        <figure>
          <img :src="this.posterPath(movie)" />
          <figcaption>
            The sky is the limit only for those who aren't afraid to fly! The sky is the limit only
            for those who aren't afraid to fly!
          </figcaption>
        </figure>
      </slide>
    </carousel-3d>
  </div>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';
export default {
  components: {
    Carousel3d,
    Slide,
  },
  data() {
    return {
      comingMovies: [],
    };
  },
  mounted() {
    this.fetchComingMovies();
  },
  methods: {
    async fetchComingMovies() {
      try {
        const response = await this.$http.get('/movie/upcoming');
        console.log(response);
        this.comingMovies = response.data.results;
      } catch (error) {
        console.log(error);
      }
    },
    posterPath(movie) {
      return 'https://image.tmdb.org/t/p/original/' + movie.poster_path;
    },
  },
};
</script>

<style scoped>
.carousel-3d-container figure {
  margin: 0;
}
.carousel-3d-container figcaption {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  bottom: 0;
  padding: 15px;
  font-size: 12px;
  min-width: 100%;
}
</style>
