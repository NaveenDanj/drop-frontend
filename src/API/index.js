import axios from 'axios'

let back = process.env.VUE_APP_BACKEND
// Create a new axios instance
const api = axios.create({
    baseURL: `${back}/`,
    headers: {
        'Access-Control-Allow-Origin' : '*',
        "Access-Control-Allow-Credentials" : true,
    },

});

export default api