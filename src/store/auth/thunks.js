import { signInWithCredential } from "firebase/auth"
import { Navigate } from "react-router-dom"
import { loginWithEmailPassword, logoutFirebase, signInWithGoogle } from "../../firebase/providers"
import { checkingCredentials, login, logout } from "./authSlice"


export const checkingAutenticacion = (email, password) =>{
    return async(dispatch) =>{
        dispatch(checkingCredentials())
    }

}


export const startGoogleSignIn = () =>{
    return async (dispatch) =>{
        dispatch(checkingCredentials());
        const result= await signInWithGoogle();
        if(!result.ok)dispatch(logout(result.errorMessage));
        dispatch(login(result))
        
    }
}


export const startLoginWithEmailPassword = ({email, password}) =>{
    return async(dispatch) =>{
        dispatch(checkingCredentials());

        const result = await loginWithEmailPassword({email, password});
        console.log(result);
        if(!result.ok) return dispatch (logout(result.errorMessage ));
        dispatch(login(result))


    }

}

export const startLogout = () =>{
   
    return async(dispatch) =>{
        await logoutFirebase();

        dispatch(logout({}));
    }
}