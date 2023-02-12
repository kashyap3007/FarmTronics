import * as api from '../api/index';
import { END_LOADING, FETCH_CROP_REPORT, START_LOADING } from '../constants';

export const  fetch_crop_report= (search)=>async(dispatch)=>{
    try {
        console.log("i m here");
        dispatch({type: START_LOADING});
        const data= {city: search};
        const productData=await api.getreport(data);
        console.log(productData);
        dispatch({type: FETCH_CROP_REPORT, data: productData.data});
        dispatch({type: END_LOADING});
    } catch (error) {
        console.log(error);
    }
}