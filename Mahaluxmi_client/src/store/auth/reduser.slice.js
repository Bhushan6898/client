import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    role: null,
    isAuthenticated: false,
    id:null,
   
}

const authReducer = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, actions) => {
            const { role ,id} = actions.payload
            console.log(role ,id);
            
            state.role = role
            state.isAuthenticated = true
            state.id=id
        },
        logOut: (state) => {
            state.isAuthenticated = false
            state.role = null
        },
       
        
    }
   
})
console.log(initialState);
export const { login, logOut } = authReducer.actions
export default authReducer.reducer