import axios from "axios";

export const api_key = "712c7b4ef8acb4be82fa8a92e87e1c75"

export default  axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});

