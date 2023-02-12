import * as api from '../api';
import { FETCH_VIDEOS, FETCH_VIDEO_BY_ID, FETCH_VIDEO_BY_SEARCH } from '../constants';


export const  fetch_all_videos= ()=>async(dispatch)=>{
    try {
        const videoData=await api.getvideos();
        console.log(videoData);
        dispatch({type: FETCH_VIDEOS, data: videoData.data});
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