<template>
  <div class="container mx-auto">
    <h2 class="mt-5 text-lg font-semibold uppercase text-yellow-500">Popular Actors</h2>
    <div class="mt-5 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
      <ActorsItem
        v-for="actor in actors"
        :key="actor.id"
        :actor="actor"
        class="transition ease-in-out hover:scale-110"
      />
    </div>

    <div class="flex justify-center">
      <div class="spinner"></div>
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
  mounted() {
    this.fetchActors(1);
  },
  methods: {
    async fetchActors(page) {
      try {
        const response = await this.$http.get(`/person/popular?page=${page}`);
        this.actors = response.data.results;
      } catch (error) {
        console.log(error);
      }
    },
    scroll() {
      window.onscroll = () => {
        let bottomOfWindow = document.documentElement.scrollTop + window.i
      }
    },
  },
};
</script>

<style scoped>
.spinner {
  position: absolute;
  color: #fff !important;
}
</style>
