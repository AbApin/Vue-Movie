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

    <div>
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
  },
};
</script>

<style scoped>
.spinner {
  position: relative;
  color: transparent !important;
  pointer-events: none;
}

.spinner::after {
  content: '';
  position: absolute !important;
  top: calc(50% - (1em / 2));
  left: calc(50% - (1em / 2));
  display: block;
  width: 1em;
  height: 1em;
  border: 2px solid currentColor;
  border-radius: 9999px;
  border-right-color: transparent;
  border-top-color: transparent;
  animation: spinAround 500ms infinite linear;
}

@keyframes spinAround {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
