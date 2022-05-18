import axios from 'axios'

// Create a new axios instance
const api = axios.create({
    baseURL: 'https://dropback.wondersoftinno.com/'
});

export default api