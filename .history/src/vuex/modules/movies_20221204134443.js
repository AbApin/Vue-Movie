const movies = {
  state: {
    popularMovies: [],
    genres: [],
  },
  mutations: {
    GET_POPULAR_MOVIES(state,payload){
        state.popularMovies = payload
    }
  },
  actions: {
    SET_POPULAR_MOVIES({co})
  },
  getters: {},
};

export default movies;
