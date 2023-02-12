import { FETCH_VIDEOS, FETCH_VIDEO_BY_ID, START_LOADING , END_LOADING } from "../constants";

export default ((state={videosData: [], isLoading: true}, action)=>{
    switch (action.type) {
        case START_LOADING:
            return {...state, isLoading: true};
        case END_LOADING:
            return {...state, isLoading: false};
        case FETCH_VIDEOS:
            return {...state, videosData: action?.data, isLoading: false};
        case FETCH_VIDEO_BY_ID:
            return {...state, videosData: action?.data, isLoading: false};
        default:
            return {...state};
    }
})