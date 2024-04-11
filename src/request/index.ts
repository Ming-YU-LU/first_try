import { QLRequest } from '@/request/service/index'

import { TIME_OUT } from '@/request/service/config'
import { handleStatus } from '@/request/simple/resCode'
// import { AxiosResponse } from 'node_modules/axios/index.d.cts'
import type { AxiosResponse, AxiosError } from 'axios'

const qlRequest = new QLRequest({
    baseURL: import.meta.env.VITE_APP_BASE_API,
    timeout: TIME_OUT,
    interceptors: {
        requestInterceptor: (config) => {
            return config
        },
        requestInterceptorCatch: (error) => {
            return error
        },
        responseInterceptor: (response) => {
            const { status, data } = (response as AxiosResponse)
            if (status === 200) {
                return data
            }
        },
        responseInterceptorCatch: (error) => {
            const response = (error as AxiosError).response
            const { status } = response as AxiosResponse
            return Promise.reject(handleStatus(status))
        }
    }
})

export default qlRequest