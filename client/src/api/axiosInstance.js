import axios from 'axios'

const URL_BACKEND = "http://localhost:8080/"

const axiosBase = axios.create({
    baseURL: URL_BACKEND
})

export default { axiosBase }