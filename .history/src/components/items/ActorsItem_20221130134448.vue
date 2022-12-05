<template>
  <div>
    <router-link :to="`">
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
        console.log(item);
        if (this.actor.known_for[item].title) {
          this.actorKnowns.push(this.actor.known_for[item].title);
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
