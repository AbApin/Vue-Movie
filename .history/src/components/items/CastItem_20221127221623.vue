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
        : 'data:image/png;base64,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';
    },
  },
};
</script>
