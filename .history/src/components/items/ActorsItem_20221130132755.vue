<template>
  <div>
    <img src="@/assets/images/Joker.webp" alt="" />
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
    posterPath() {
      return 'https://image.tmdb.org/t/p/w500/' + this.movie.poster_path;
    },
  },
};
</script>
