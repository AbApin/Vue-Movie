<template>
  <div class="">
    <img :src="posterPath" alt="" class="transition duration-150 ease-in-out hover:opacity-75" />
    <span class="text-gray-300"> {{cast.name}}</span>
  </div>
</template>

<script>
export default {
  props: {
    cast: {
      required: true,
      
    },
  },
  computed: {
    posterPath() {
      return 'https://image.tmdb.org/t/p/w500/' + this.cast.profile_path;
    },
  },
};
</script>
