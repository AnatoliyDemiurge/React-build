import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token:localStorage.token || null,
    isAuth:localStorage.token? true : false
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setUser(state, action) {
            state.token = action.payload.token
            state.isAuth = true
        },
        removeUser(state){
            state.token = null
            state.isAuth = false
        },
    }
})

export const {setUser, removeUser} = userSlice.actions

export default userSlice.reducer