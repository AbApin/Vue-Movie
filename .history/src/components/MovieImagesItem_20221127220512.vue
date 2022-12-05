<template>
  <div class="">
    <div class=""></div>
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
    filePath() {
      return 'https://image.tmdb.org/t/p/w500/' + this.image.file_path;
    },
  },
};
</script>
