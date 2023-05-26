export interface User {
    username: string
    email: string
    password: string
}

export interface UserRequest {
    username: string
    password: string
}

export interface UserResponse {
    token: string
    user: {
        username: string
        email: string
    }
}