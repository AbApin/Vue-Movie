import $http from '@/server/api';

const movies = {
  state: {
    popularMovies: [],
    genres: [],
    currentMovie: {},
  },
  mutations: {
    SET_POPULAR_MOVIES(state, payload) {
      state.popularMovies = payload;
    },
    SET_GENRES(state, payload) {
      state.genres = payload;
    },
    FETCH_CURRENT_MOVIE(
        
    ) {},
  },
  actions: {
    async FETCH_MOVIES({ commit }) {
      try {
        const response = await $http('/movie/popular');
        console.log(response);
        commit('SET_POPULAR_MOVIES', response.data.results);
      } catch (error) {
        console.log(error);
      }
    },
    async FETCH_GENRES({ commit }) {
      try {
        const response = await $http('/genre/movie/list');
        commit('SET_GENRES', response.data.genres);
      } catch (error) {
        console.log(error);
      }
    },
    async FETCH_CURRENT_MOVIE(id) {
      try {
        const response = await this.$http.get(
          `/movie/${id}?append_to_response=credits,videos,images`,
        );
        this.currentMovie = response.data;
        this.currentMovie.genres.map((genre) => {
          this.movieGenres.push(genre.name);
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {
    POPULAR_MOVIES(state) {
      return state.popularMovies;
    },
    GENRES(state) {
      return state.genres;
    },
  },
};

export default movies;
