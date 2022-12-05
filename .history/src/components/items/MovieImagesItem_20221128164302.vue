<template>
  <div class="">
    <img
      :src="filePath"
      alt=""
      class="cursor-pointer transition duration-150 ease-in-out hover:opacity-75"
      @click="openModal(image)"
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
  methods: {
    openModal(image) {
      let imageFullPath = '';
      if (image.file_path) {
        imageFullPath = 'https://image.tmdb.org/t/p/original' + image.file_path;
      } else {
        imageFullPath = 'https://via.placeholder.com/300x450';
      }
      this.$emit('onImageClick', imageFullPath);
    },
    getImage(image) {
      if (image.file_path) {
        imageFullPath = 'https://image.tmdb.org/t/p/original' + image.file_path;
      } else {
        imageFullPath = 'https://via.placeholder.com/300x450';
      }
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
