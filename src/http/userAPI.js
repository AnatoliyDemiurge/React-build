import {$host} from "./index";
import jwt_decode from "jwt-decode";
import axios from "axios";

export const login = async (login, password) => {
    const {data} = await axios.post('http://platon.dev1.trex-studio.host/api/user/signin', {login, password})
    console.log(data)
}

export const test = async (title, body, userId) =>{
    const {data} = await axios.post('https://jsonplaceholder.typicode.com/posts', {title, body, userId})
    console.log(data)
}

// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));