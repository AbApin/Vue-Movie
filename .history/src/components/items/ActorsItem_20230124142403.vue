<template>
  <div>
    <router-link :to="`/actors/${actor.id}`">
      <img :src="IMAGE" alt="" />
    </router-link>
    <h3>{{ actor.name }}</h3>
    <p class="text-gray-400">{{ actorKnowns.join(',') }}</p>
  </div>
</template>

<script>
export default {
  props: {
    actor: {
      required: true,
    },
  },
  data() {
    return {
      actorKnowns: [],
    };
  },
  mounted() {
    this.knownFor();
    this.SET_IMAGE({
      path: this.actor.profile_path,
      baseURL: 'https://image.tmdb.org/t/p/w500/',
      default: 'https://via.placeholder.com/300x450',
    });
  },
  methods: {
    knownFor() {
      for (let item in this.actor.known_for) {
        if (this.actor.known_for[item].title) {
          this.actorKnowns.push(this.actor.known_for[item].title);
        }
      }
    },
  },
  computed: {
    posterPath() {
      return this.CURRENT_MOVIE.poster_path
        ? 'https://image.tmdb.org/t/p/original/' + this.CURRENT_MOVIE.poster_path
        : 'https://via.placeholder.com/300x450';
    },
  },
  watch: {
    CURRENT_MOVIE: {
      handler(newValue) {
        this.SET_IMAGE({
          path: newValue.poster_path,
          baseURL: 'https://image.tmdb.org/t/p/original/',
          default: 'https://via.placeholder.com/300x450',
        });
      },
    },
  },
};
</script>
