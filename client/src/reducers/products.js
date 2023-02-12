import { FETCH_PRODUCTS, FETCH_PRODUCT_BY_ID,  START_LOADING, END_LOADING } from "../constants";

export default ((state={productData: [], isLoading: true}, action)=>{
    switch (action.type) {
        case START_LOADING:
            return {...state, isLoading: true};
        case END_LOADING:
            return {...state, isLoading: false};
        case FETCH_PRODUCTS:
            return {...state, productData: action.data, isLoading: false};
        case FETCH_PRODUCT_BY_ID:
            return {...state, productData: action.data, isLoading: false};
        default:
            return {...state};
    }
})