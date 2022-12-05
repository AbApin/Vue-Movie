import axios from 'axios';

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZGY2N2JhYzUwNGUzNTc1YTU5NGYxOTMyOTFmNmYzOSIsInN1YiI6IjYzODM1OGUzZmI4MzQ2MDA4NDQwODVhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VD-7Qw8ugiwRoXAygVUAKO1CBOoyxJM_Ddrq64_WMVw';

export default axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
