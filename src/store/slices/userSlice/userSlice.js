import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token:null,
    login:null
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setUser(state, action) {
            state.token = action.payload.token
        },
        removeUser(state){
            state.token = null
        },
        setLogin(state, action){
            state.login = action.payload.login
        }
    }
})

export const {setUser, removeUser, setLogin} = userSlice.actions

export default userSlice.reducer