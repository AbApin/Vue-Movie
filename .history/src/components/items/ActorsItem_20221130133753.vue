<template>
  <div>
    <img :src="profilePath" alt="" />
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
      for (let item in actor.known_for) {
        if (item.title) {
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
