import axios from 'axios'
import type { AxiosInstance, AxiosResponse, AxiosRequest } from 'axios'
import { handleStatus } from '@/request/simple/resCode'
import { TIMEOUT } from '@/request/simple/available'

console.log(import.meta.env.VITE_APP_BASE_API)
const request: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API,
    timeout: TIMEOUT
})

request.interceptors.request.use((config) => {
    return config
})

request.interceptors.response.use((response) => {
    if (response.status === 200) {
        return response.data
    }
},
    (error) => {
        return Promise.reject(handleStatus(error.response.status))
    }
)

export default request