import { FETCH_ARTICLES, FETCH_ARTICLE_BY_ID, START_LOADING,FETCH_ARTICLE_BY_SEARCH , END_LOADING } from "../constants";

export default ((state={articleData: [], isLoading: true}, action)=>{
    switch (action.type) {
        case START_LOADING:
            return {...state, isLoading: true};
        case END_LOADING:
            return {...state, isLoading: false};
        case FETCH_ARTICLES:
            return {...state, articleData: action?.data, isLoading:false};
        case FETCH_ARTICLE_BY_SEARCH:
            return {...state, articleData: action?.data, isLoading:false};
        case FETCH_ARTICLE_BY_ID:
            return {...state, articleData: action?.data, isLoading: false};
        default:
            return {...state};
    }
})