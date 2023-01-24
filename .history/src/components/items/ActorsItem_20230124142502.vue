<template>
  <div>
    <router-link :to="`/actors/${actor.id}`">
      <img :src="posterPath" alt="" />
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
      return this.actor.profile_path
        ? 'https://image.tmdb.org/t/p/w500/' + this.actor.profile_path
        : 'https://via.placeholder.com/300x450';
    },
  },
};
</script>
