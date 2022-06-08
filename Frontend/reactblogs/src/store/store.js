import { configureStore, createSlice } from '@reduxjs/toolkit';

const authSlice=createSlice({
    name:'auth',
    initialState:{isLoggedIn:false,userView:false},
    reducers:{
        login(state){
        state.isLoggedIn=true
    },
        logout(state){
        state.isLoggedIn=false
    },
    userclicked(state){
        state.userView=true
    },
    userunclicked(state){
        state.userView=false
    }
},
});
export const authActions=authSlice.actions
export const store=configureStore({
    reducer:authSlice.reducer
})