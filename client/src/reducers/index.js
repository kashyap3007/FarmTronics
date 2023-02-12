import { combineReducers } from "redux";
import auth from './auth';
import articles from './articles';
import videos from './videos';
import products from './products';
import cropreport from './cropsuggestion';

export default combineReducers({
    auth,
    articles,
    videos,
    products,
    cropreport
})
