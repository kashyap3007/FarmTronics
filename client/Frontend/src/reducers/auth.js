import { LOGIN, LOGOUT, SIGNUP , START_LOADING, END_LOADING} from "../constants";

export default ((state={authData: null, isMentor: false, isLogin: false}, action)=>{
    switch(action.type){
        case START_LOADING:
            return {...state, isLoading: true};
        case END_LOADING:
            return {...state, isLoading: false};
        case SIGNUP:
            return {...state, authData: action.data, isLogin: true };
        case LOGIN:
            return {...state, authData: action.data, isLogin: true};
        case LOGOUT:
            return {...state, authData: action.data, isLogin: false};
        default:
            return {...state};
    }
})