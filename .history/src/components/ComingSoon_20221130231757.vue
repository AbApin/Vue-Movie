<template>
  <div>
    <h2 class="mt-10 text-lg font-semibold uppercase text-yellow-500">UpComing Movies</h2>
    <carousel-3d :controls-visible="true" :clickable="false" :listData="comingMovies" :height="500">
      <slide v-for="(movie, i) in comingMovies" :index="i" :key="i">
        <router-link :to="`/movie/${movie.id}`">
          <figure>
            <img :src="posterPath(movie)" />
            <figcaption>
              <span class="text-lg">{{ movie.title }}</span>
            </figcaption>
          </figure>
        </router-link>
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
        this.comingMovies = response.data.results.slice(1, 10);
      } catch (error) {
        console.log(error);
      }
    },
    posterPath(movie) {
      console.log(movie);
      return 'https://image.tmdb.org/t/p/w500/' + movie.poster_path;
    },
  },
};
</script>

<style>
figure {
  margin: 0;
}
figcaption {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  bottom: 0;
  padding: 15px;
  font-size: 12px;
  min-width: 100%;
}
.next span,
.prev span {
  color: #fff;
}
</style>
