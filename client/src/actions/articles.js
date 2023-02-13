import * as api from '../api';
import { FETCH_ARTICLES, FETCH_ARTICLE_BY_ID, FETCH_ARTICLE_BY_SEARCH , START_LOADING, END_LOADING} from '../constants';


export const  fetch_all_articles= ()=>async(dispatch)=>{
    try {
        dispatch({type: START_LOADING});
        // console.log("Fetch all");
        let articleData=await api.getarticles();
        // articleData= articleData.data;
        // console.log(articleData);
        dispatch({type: FETCH_ARTICLES, data: articleData.data});
        dispatch({type: END_LOADING});
    } catch (error) {
        console.log(error);
    }
}
export const  fetch_articles_by_search= (search)=>async(dispatch)=>{
    try {
        dispatch({type: START_LOADING});
        // console.log(search);
        let articleData=await api.getarticles();
        articleData= articleData.data;
        let updatedData= articleData.filter((article)=>{
            let name= article.name.toLowerCase();
            search= search.toLowerCase();
            return name.includes(search);
        })
        // console.log(updatedData);
        dispatch({type: FETCH_ARTICLE_BY_SEARCH, data: updatedData});
        dispatch({type: END_LOADING});
    } catch (error) {
        console.log(error);
    }
}

export const  fetch_article= (id)=>async(dispatch)=>{
    try {
        const articleData=await api.getarticle(id);
        dispatch({type: FETCH_ARTICLE_BY_ID, data: articleData.data});
    } catch (error) {
        console.log(error);
    }
}

export const post_article= (data)=>async(dispatch)=>{
    try {
        const articleData= await api.postarticle(data);
        dispatch({type: FETCH_ARTICLES, data: articleData});
    } catch (error) {
        console.log(error);
    }
}