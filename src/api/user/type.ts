export interface RegisterUser {
    name: string
    password: string | number
    repassword: string | number
}

export interface LoginUser {
    code: string | number
    message?: string
    success?: string
    [propertyName: string]: any
}
