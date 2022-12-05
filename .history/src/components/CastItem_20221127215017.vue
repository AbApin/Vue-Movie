<template>
  <div class="">
    <img
      :src="
        posterPath ||
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fkpopmap5.rssing.com%2Fchan-61166981%2Fall_p8.html&psig=AOvVaw0Th6nVJMtv--zm5C0F1fta&ust=1669657674017000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJD1_NX1zvsCFQAAAAAdAAAAABAF'
      "
      alt=""
      class="transition duration-150 ease-in-out hover:opacity-75"
    />
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
        .google.com/url?sa=i&url=https%3A%2F%2Fkpopmap5.rssing.com%2Fchan-61166981%2Fall_p8.html&psig=AOvVaw0Th6nVJMtv--zm5C0F1fta&ust=1669657674017000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJD1_NX1zvsCFQAAAAAdAAAAABAF',
      },
    },
  },
  computed: {
    posterPath() {
      return 'https://image.tmdb.org/t/p/w500/' + this.cast.profile_path;
    },
  },
};
</script>
