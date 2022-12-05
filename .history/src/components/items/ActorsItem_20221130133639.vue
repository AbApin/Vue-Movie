<template>
  <div>
    <img :src="profilePath" alt="" />
    <h3>{{ actor.name }}</h3>
    <p class="text-gray-400">{{ actorKnowns }}</p>
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
  methods: {
    knownFor() {
      for (let actor in actor.known_for) {
        if (actor.title) {
          this.actorKnowns.push(actor.title);
        }
      }
    },
  },
  computed: {
    profilePath() {
      return 'https://image.tmdb.org/t/p/w500/' + this.actor.profile_path;
    },
  },
};
</script>
