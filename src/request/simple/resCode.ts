import { ReqCode, HttpMessage } from "@/request/simple/reqType";
export function handleStatus(status: ReqCode) {
    const errorMessage = httpCode.find((item) => item.code === status)
    if (!errorMessage) {
        return '未知错误'
    }
    return errorMessage
}

export const httpCode: HttpMessage[] = [
    {
        code: 401,
        message: '授权未通过'
    },
    {
        code: 403,
        message: '用户没有权限'
    },
    {
        code: 404,
        message: '请求的资源不存在'
    },
    {
        code: 500,
        message: '服务器出现问题'
    },
    {
        code: 301,
        message: '资源永久重定向到了新的url'
    },
    {
        code: 302,
        message: '资源暂时重定向了新的url'
    }
]