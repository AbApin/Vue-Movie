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
      actors: [],
    };
  },
  mounted: {},
  methods: {
    async fetchActors() {
      try {
        const response = await this.$http.get('/person/popular?page=');
        console.log(response);
      } catch (error) {}
    },
  },
};
</script>
