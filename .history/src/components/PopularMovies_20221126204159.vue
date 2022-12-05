<template>
  <div class="container mx-auto">
    <h2 class="mt-5 text-lg font-semibold uppercase text-yellow-500">Popular Movies</h2>
    <div class="grid grid-cols-1 ">
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
};
</script>
