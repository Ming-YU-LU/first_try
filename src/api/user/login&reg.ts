import request from '@/request/simple/request'
import { RegisterUser } from '@/api/user/type'
import qlRequest from '@/request'

enum UserApi {
    USER_LOGIN = '/user/login',
    USER_REGISTER = '/user/register',
    USER_INFO = '/user/info'
}

export const reqUserRegister = (data: RegisterUser) => {
    return request<any, any>({
        method: 'post',
        url: UserApi.USER_REGISTER,
        data
    })
}

// 实例调用request方法也可以一样的效果
export const reqSearch = () => {
    return request.request({
        method: 'get',
        url: `${UserApi.USER_INFO}/?store=userInfo`
    })
}

export const reqSearchOther = () => {
    return qlRequest.request({
        method: 'get',
        url: `${UserApi.USER_INFO}/?store=userInfo`
    })
}