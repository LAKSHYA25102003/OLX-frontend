import { createSlice } from "@reduxjs/toolkit";


const userSlice=createSlice({
    name:"user",
    initialState:{
        login:false,
        userProfile:{}
    },
    reducers:{
        plugUser:(state,action)=>{
            state.userProfile=action.payload;       
        },
        setLogin:(state,action)=>{
            state.login=action.payload;
        }
    }
})

export const {plugUser,setLogin}=userSlice.actions

export default userSlice.reducer