import {$authHost} from "../api/index";

export const fetchOrganizations = async () => {
    const {data} = await $authHost.get('api/company/list?page_id=1&page_size=10')
    console.log(data)
    // localStorage.setItem('token', data.token)
    // return jwt_decode(data.token)
    // return data
}