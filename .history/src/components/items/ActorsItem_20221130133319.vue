<template>
  <div>
    <img :src="profilePath" alt="" />
    <h3>{{ actor.name }}</h3>
    <p class="text-gray-400">{{ knownFor }}</p>
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
  computed: {
    profilePath() {
      return 'https://image.tmdb.org/t/p/w500/' + this.actor.profile_path;
    },
    knownFor() {
        
    },
  },
};
</script>
