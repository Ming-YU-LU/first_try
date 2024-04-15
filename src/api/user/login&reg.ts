import request from '@/request/simple/request'
import { RegisterUser, LoginUser } from '@/api/user/type'
import qlRequest from '@/request'

enum UserApi {
    USER_LOGIN = '/user/login',
    USER_REGISTER = '/user/register',
    USER_INFO = '/user/info'
}

//  之前封装的axios
// export const reqUserRegister = (data: RegisterUser) => {
//     return request<any, any>({
//         method: 'post',
//         url: UserApi.USER_REGISTER,
//         data,
//     })
// }

export const reqUserRegister = (data: RegisterUser) => {
    return qlRequest.instance.request({
        method: 'post',
        url: UserApi.USER_REGISTER,
        data
    })
}

// 实例调用request方法也可以一样的效果
export const reqSearch = () => {
    return request.request({
        method: 'get',
        url: `${UserApi.USER_INFO}/?store=userInfo`,
    })
}

export const reqSearchOther = () => {
    return qlRequest.instance.request<any, any>({
        method: 'get',
        url: `${UserApi.USER_INFO}/?store=userInfo`,
    })
}

export const reqLogin = (data: any) => {
    return qlRequest.instance.request<any, LoginUser>({
        method: 'post',
        url: UserApi.USER_LOGIN,
        data
    })
}