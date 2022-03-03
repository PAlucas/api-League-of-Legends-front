import axios from 'axios';

const api = axios.create({
    baseURL: 'https://react-lol-api.herokuapp.com/'
});

export default api;