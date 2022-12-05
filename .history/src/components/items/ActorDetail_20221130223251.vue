<template>
  <div class="container mx-auto mt-5">
    <div class="flex justify-between">
      <div class="w-full max-w-[30%]">
        <img :src="profilePath" alt="" />
        <div class="mt-2 flex items-center gap-3">
          <a href="">
            <i class="fa-brands fa-square-facebook opacity-50 hover:opacity-100"></i>
          </a>
          <a href="">
            <i class="fa-brands fa-instagram opacity-50 hover:opacity-100"></i>
          </a>
          <a href="">
            <i class="fa-brands fa-twitter opacity-50 hover:opacity-100"></i>
          </a>
          <a href="">
            <i class="fa-solid fa-globe opacity-50 hover:opacity-100"></i>
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

    <!-- credits -->
    <div class="credits border-b border-gray-800">
      <div>
        <h2 class="text-4xl font-semibold">Credits</h2>
        <ul class="mt-8 list-disc pl-5 leading-loose">
          <li :key="cast.id" v-for="cast in castMovies">
            <strong>{{ castDetails(cast) }} </strong>
            <router-link :to="`/movie/${cast.id}`" class="hover:underline">
              {{ cast.title }}
            </router-link>
            as {{ cast.character }}
          </li>
        </ul>
      </div>
    </div>
    <!--  -->
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      currentActor: {},
      knownFor: [],
      castMovies: {},
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
    async fetchCredits(actorId) {
      const response = await this.$http.get(
        `/person/${actorId}` +  + '/combined_credits',
      );
      this.castMovies = response.data.cast;
      this.knownFor = response.data.cast.slice(Math.max(response.data.cast.length - 5, 1));
    },
    movieProfilePath(movie) {
      return movie.poster_path
        ? 'https://image.tmdb.org/t/p/w185/' + movie.poster_path
        : 'https://via.placeholder.com/185x278';
    },
    castDetails(cast) {
      return parseInt(cast.release_date) + ' .';
    },
  },
  computed: {
    profilePath() {
      return 'https://image.tmdb.org/t/p/w500/' + this.currentActor.profile_path;
    },
  },
};
</script>
