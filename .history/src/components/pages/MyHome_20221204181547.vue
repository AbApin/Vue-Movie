<template>
  <div class="container mx-auto">
    <h2 class="mt-5 text-lg font-semibold uppercase text-yellow-500">Popular Movies</h2>
    <div class="mt-5 grid grid-cols-1 gap-8 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
      <MovieItem v-for="movie in POPULAR_MOVIES" :key="movie.id" :genres="GENRES" />
    </div>
    <ComingSoon />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
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
  mounted() {
    this.FETCH_MOVIES();
    this.FETCH_GENRES();
  },
  methods: {
    ...mapActions(['FETCH_MOVIES', 'FETCH_GENRES']),
  },
  computed: {
    ...mapGetters(['POPULAR_MOVIES', 'GENRES']),
  },
};
</script>
