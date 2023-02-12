import { FETCH_CROP_REPORT } from "../constants";

export default ((state={cropData:[], isLoading: true}, action)=>{
    switch (action.type) {
        case FETCH_CROP_REPORT:
            return {...state, isLoading: false, cropData: action.data};
        default:
            return {...state};
    }
})