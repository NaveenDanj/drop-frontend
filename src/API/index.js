import axios from 'axios'

// Create a new axios instance
const api = axios.create({
    baseURL: 'http://127.0.0.1:8000'
});

export default api