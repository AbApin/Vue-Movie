<template>
  <div class="">
    <img :src="posterPath" alt="" class="transition duration-150 ease-in-out hover:opacity-75" />
    <span class="text-gray-300"> {{ cast.name }}</span>
  </div>
</template>

<script>
export default {
  props: {
    cast: {
      required: true,
      profile_path: {
        type: String,
      },
    },
  },
  computed: {
    posterPath() {
      return this.cast.profile_path
        ? 'https://image.tmdb.org/t/p/w300/' + this.cast.profile_path
        : 'https://via.placeholder.com/300';
    },
  },
};
</script>
