import * as api from '../api';
import { END_LOADING, FETCH_VIDEOS, FETCH_VIDEO_BY_ID, FETCH_VIDEO_BY_SEARCH, START_LOADING } from '../constants';


export const  fetch_all_videos= ()=>async(dispatch)=>{
    try {
        dispatch({type: START_LOADING});
        const videoData=await api.getvideos();
        console.log(videoData);
        dispatch({type: FETCH_VIDEOS, data: videoData.data});
        dispatch({type: END_LOADING});
    } catch (error) {
        console.log(error);
    }
}
export const  fetch_videos_by_search= (search)=>async(dispatch)=>{
    try {
        const videoData=await api.getvideos();
        console.log(videoData);
        dispatch({type: FETCH_VIDEO_BY_SEARCH, data: videoData});
    } catch (error) {
        console.log(error);
    }
}

export const  fetch_video= (id)=>async(dispatch)=>{
    try {
        const videoData=await api.getvideo(id);
        dispatch({type: FETCH_VIDEO_BY_ID, data: videoData});
    } catch (error) {
        console.log(error);
    }
}