import { UserResponse } from "../models/user.model";

const LOCAL_STORAGE_KEY = {
    token: 'token',
    user: 'user'
};


export module LocalStorageUtils {
    export const writeToken = (token: string) => {
        localStorage.setItem(LOCAL_STORAGE_KEY.token, token)
    }

    export const readToken = () => {
        localStorage.getItem(LOCAL_STORAGE_KEY.token)
    }

    export const deleteToken = () => {
        localStorage.removeItem(LOCAL_STORAGE_KEY.token)
    }
}