import type { AxiosResponse, AxiosRequestConfig, AxiosError } from 'axios'
export interface QLRequestInterceptors {
    requestInterceptor<T = any, R = AxiosResponse<T>>(
        config: AxiosRequestConfig,
    ): AxiosRequestConfig<R>
    requestInterceptorCatch<T = any>(error: T): T
    responseInterceptor<T = any, R = AxiosResponse<T>>(response: R): R
    responseInterceptorCatch<T = any, R = AxiosError<T>>(error: R): Promise<R>
}

export interface QLRequestConfig extends AxiosRequestConfig {
    interceptors?: QLRequestInterceptors
}
