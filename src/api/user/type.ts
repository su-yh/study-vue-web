
// 登录接口需要 携带参数ts 类型
export interface loginForm {
    username: string,
    password: string,
    code: number
}

// 登录接口返回数据类型
export interface loginResponse {
    code: number,
    message: string,
    data: string
}

