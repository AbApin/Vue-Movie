<template>
  <div class="container mx-auto">
    <h2 class="mt-5 text-lg font-semibold uppercase text-yellow-500">Popular Movies</h2>
    <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <MovieItem />
        <MovieItem />
        <MovieItem />
        <MovieItem />
        <MovieItem />
        <MovieItem />
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
  mounted() {
    const response = await this.$http.get("/movie/popular")
  }
};
</script>
