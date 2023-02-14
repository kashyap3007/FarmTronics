import * as api from '../api';
import { LOGIN, LOGOUT, SIGNUP } from '../constants';

export const signup = (data, navigate)=>async(dispatch)=>{
    try {
        // console.log(data);
        const  authData= await api.signup(data);
        // console.log(authData);
        localStorage.setItem("user", JSON.stringify(authData.data));
        dispatch({type: SIGNUP, data: authData.data});
        navigate("/");
    } catch (error) {
        console.log(error);
    }
}
export const login = (data, navigate)=>async(dispatch)=>{
    try {
        const  authData=await api.login(data);
        // console.log(authData.data);
        localStorage.setItem("user", JSON.stringify(authData.data));
        dispatch({type: LOGIN, data: authData.data})
        navigate("/");
    } catch (error) {
        console.log(error);
    }
}
export const logout = (navigate)=>async(dispatch)=>{
    try {
        localStorage.removeItem("user");
        dispatch({type: LOGOUT});
        navigate("/");
    } catch (error) {
        console.log(error);
    }
}