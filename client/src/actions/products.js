import * as api from '../api';
import { FETCH_PRODUCTS, FETCH_PRODUCT_BY_ID, FETCH_PRODUCT_BY_SEARCH } from '../constants';


export const  fetch_all_products= ()=>async(dispatch)=>{
    try {
        const productData=await api.getproducts();
        console.log(productData);
        dispatch({type: FETCH_PRODUCTS, data: productData.data});
    } catch (error) {
        console.log(error);
    }
}

export const  fetch_products_by_search= (search)=>async(dispatch)=>{
    try {
        const productData=await api.getproducts();
        console.log(productData);
        dispatch({type: FETCH_PRODUCT_BY_SEARCH, data: productData});
    } catch (error) {
        console.log(error);
    }
}

export const  fetch_product= (id)=>async(dispatch)=>{
    try {
        const productData=await api.getproduct(id);
        dispatch({type: FETCH_PRODUCT_BY_ID, data: productData.data});
    } catch (error) {
        console.log(error);
    }
}