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
    <div class="mt-5 flex justify-center gap-8">
      <a href="" @click.prevent="previous()">Previous</a>
      <a href="" @click.prevent="next()">Next</a>
    </div>
    <!-- <div class="flex justify-center">
      <div class="spinner"></div>
    </div> -->
  </div>
</template>

<script>
import { mapActions } from 'vuex';
let currentPage = 1;
import ActorsItem from '../items/ActorsItem.vue';
export default {
  components: { ActorsItem },
  mounted() {
    this.fetchActors(currentPage);
  },
  methods: {
    ...mapActions
    next() {
      this.fetchActors(++currentPage);
    },
    previous() {
      this.fetchActors(--currentPage);
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
