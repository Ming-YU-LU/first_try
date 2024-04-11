import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { QLRequestInterceptors, QLRequestConfig } from '@/request/service/type'

export class QLRequest {
    public instance: AxiosInstance
    public interceptors?: QLRequestInterceptors
    constructor(config: QLRequestConfig) {
        this.instance = axios.create(config)
        this.interceptors = config.interceptors

        // 从config 中取出的拦截器是对应的实例的拦截器
        this.instance.interceptors.request.use(
            this.interceptors?.requestInterceptor,
            this.interceptors?.requestInterceptorCatch
        )
        this.instance.interceptors.response.use(
            this.interceptors?.responseInterceptor,
            this.interceptors?.responseInterceptorCatch
        )
    }
    public async request(config: AxiosRequestConfig) {
        return await this.instance.request(config)
    }
}
