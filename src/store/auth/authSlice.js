import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'not-autenticate',
    uid: null,
    displayName: null,
    photoURL: null,
    errorMessage:null,
  },
  reducers: {
   login: (state, {payload}) =>{
    state.status= 'autenticated',
    state.uid= payload.uid;
    state.displayName= payload.email;
    state.photoURL= payload.displayName;
    state.errorMessage=null; 


   },
   logout: (state, {payload}) =>{
    state.status= 'not-authenticated',
    state.uid= null;
    state.displayName= null;
    state.photoURL= null;
    state.errorMessage=payload?.errorMessage; 

   },
   checkingCredentials: (state) =>{

    state.status = 'cheking'


   }

   
  },
})

// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions;

