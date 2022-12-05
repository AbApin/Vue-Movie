import axios from 'axios';

const token = '1df67bac504e3575a594f193291f6f39';

export default axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
