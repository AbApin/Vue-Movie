<template>
  <div class="">
    <img
      :src="filePath"
      alt=""
      class="transition duration-150 ease-in-out hover:opacity-75"
      @click="this.$emit"
    />
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
      return this.image.file_path
        ? 'https://image.tmdb.org/t/p/w300/' + this.image.file_path
        : 'https://via.placeholder.com/300x450';
    },
  },
};
</script>
