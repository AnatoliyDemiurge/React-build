import {$host} from "./index";
import jwt_decode from "jwt-decode";

export const login = async (login, password) => {
    const {data} = await $host.post('api/user/signin', {login, password})
    console.log(data)
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}


