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
import { mapGetters, mapMutations } from 'vuex';

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
    ...mapMutations(['SET_IMAGE']),
    knownFor() {
      for (let item in this.actor.known_for) {
        if (this.actor.known_for[item].title) {
          this.actorKnowns.push(this.actor.known_for[item].title);
        }
      }
    },
  },
  computed: {
    ...mapGetters([]),
    profilePath() {
      return this.actor.profile_path
        ? 'https://image.tmdb.org/t/p/w500/' + this.actor.profile_path
        : 'https://via.placeholder.com/300x450';
    },
  },
};
</script>
