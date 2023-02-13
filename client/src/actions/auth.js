import * as api from '../api';
import { LOGIN, SIGNUP } from '../constants';

export const signup = (data, navigate)=>async(dispatch)=>{
    try {
        // console.log(data);
        const  authData= await api.signup(data);
        // console.log(authData);
        dispatch({type: SIGNUP, data: authData});
        navigate("/");
    } catch (error) {
        console.log(error);
    }
}
export const login = (data, navigate)=>async(dispatch)=>{
    try {
        const  authData=await api.login(data);
        // console.log(authData);
        dispatch({type: LOGIN, data: authData})
        navigate("/");
    } catch (error) {
        console.log(error);
    }
}