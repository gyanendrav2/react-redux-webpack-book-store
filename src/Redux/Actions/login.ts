import { LOGIN } from "../Types/login"

export const login = (data) =>{
    return {
        type: LOGIN,
        payload: data
    }
}