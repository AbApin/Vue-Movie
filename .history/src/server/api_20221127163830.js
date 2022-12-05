import axios from "axios";


co

export default axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        Authorization: ''
    }
})