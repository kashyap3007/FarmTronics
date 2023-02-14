import { FETCH_CROP_REPORT } from "../constants";

export default ((state={cropsData:[], isLoading: true, city: ""}, action)=>{
    switch (action.type) {
        case FETCH_CROP_REPORT:
            return {...state, isLoading: false, cropsData: action?.data.data, city: action?.data.city };
        default:
            return {...state};
    }
})