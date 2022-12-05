<template>
  <div class="container mx-auto">
    <h2 class="mt-5 text-lg font-semibold uppercase text-yellow-500">Popular Actors</h2>
    <div class="mt-5 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
      <ActorsItem />
    </div>
  </div>
</template>

<script>
import ActorsItem from '../items/ActorsItem.vue';
export default {
  components: { ActorsItem },
  data() {
    return {
      Actors: [],
      genres: [],
    };
  },
  mounted: {
    
  },
  methods: {
    fetchActors() {
        const response = this.$http.get("/person/popular?page=");

    }
  }
};
</script>
