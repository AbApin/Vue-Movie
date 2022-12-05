<template>
  <div class="">
    <img :src="" alt="" class="transition duration-150 ease-in-out hover:opacity-75" />
  </div>
</template>

<script>
export default {
  props: {
    image: {
      required: true,
    },
  },
  computed: {
    posterPath() {
      return 'https://image.tmdb.org/t/p/w500/' + this.image.file_path;
    },
  },
};
</script>
