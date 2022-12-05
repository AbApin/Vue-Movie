<template>
  <div>
    <img :src="profilePath" alt="" />
    <h3>{{}}</h3>
    <p class="text-gray-400">{{}}</p>
  </div>
</template>

<script>
export default {
  props: {
    actor: {
      required: true,
    },
  },
  computed: {
    profilePath() {
      return 'https://image.tmdb.org/t/p/w500/' + this.movie.profile_path;
    },
  },
};
</script>
