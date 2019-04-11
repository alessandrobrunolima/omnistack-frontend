import axios from 'axios';

const api = axios.create({
    baseURL: "https://rocketseatomnistack-backend.herokuapp.com/"
});

export default api;