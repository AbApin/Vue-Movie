<template>
  <div class="container mx-auto mt-5">
    <div class="flex justify-between">
      <div class="w-full max-w-[30%]">
        <img :src="profilePath" alt="" />
        <div class="flex items-center gap-3 mt-2">
          <a href="">
            <i class="fa-brands fa-square-facebook" class="opac"></i>
          </a>
          <a href="">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="">
            <i class="fa-brands fa-twitter"></i>
          </a>
          <a href="">
            <i class="fa-solid fa-globe"></i>
          </a>
        </div>
      </div>
      <div class="w-full max-w-[65%]">
        <h2 class="text-4xl font-semibold">{{ this.currentActor.name }}</h2>
        <div class="mt-3 flex items-center gap-3">
          <img src="@/assets/images/birthday.png" alt="" class="w-5" />
          <p class="text-sm text-gray-400">{{ this.currentActor.birthday }}</p>
        </div>
        <p class="mt-5 text-gray-300">
          {{ this.currentActor.biography }}
        </p>
        <h4 class="mt-12 font-semibold">Known For</h4>
        <div class="mt-3 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          <div v-for="movie in this.knownFor" :key="movie.id">
            <router-link :to="`/movie/${movie.id}`">
              <img
                :src="movieProfilePath(movie)"
                alt="poster"
                class="transition duration-150 ease-in-out hover:opacity-75"
              />
              <p class="text-sm leading-normal text-gray-400 hover:text-white">{{ movie.name }}</p>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      currentActor: {},
      knownFor: [],
    };
  },
  mounted() {
    this.fetchActor();
    this.fetchKnownMovie();
  },
  methods: {
    async fetchActor() {
      try {
        const response = await this.$http.get(`person/${this.id}}`);
        this.currentActor = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async fetchKnownMovie() {
      try {
        const response = await this.$http.get(`person/${this.id}}/combined_credits`);
        console.log(response);
        this.knownFor = response.data.cast.slice(Math.max(response.data.cast.length - 5, 1));
      } catch (error) {
        console.log(error);
      }
    },
    movieProfilePath(movie) {
      return movie.poster_path
        ? 'https://image.tmdb.org/t/p/w185/' + movie.poster_path
        : 'https://via.placeholder.com/185x278';
    },
  },
  computed: {
    profilePath() {
      return 'https://image.tmdb.org/t/p/w500/' + this.currentActor.profile_path;
    },
  },
};
</script>
