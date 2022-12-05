<template>
  <div>
    <router-link :to="`/actors/${actor.id}`">
      <img :src="profilePath" alt="" />
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
    profilePath() {
      return this.actor.profile_path ? 'https://image.tmdb.org/t/p/w500/' + this.actor.profile_path;
    },
  },
};
</script>
