import axios from "axios";


const 

export default axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        Authorization: ''
    }
})