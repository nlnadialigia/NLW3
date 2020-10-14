import axios from 'axios'

const api = axios.create({
    baseURL: 'hattp//localhosta:3333'
})

export default api