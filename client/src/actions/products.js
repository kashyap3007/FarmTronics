import * as api from '../api';
import { END_LOADING, FETCH_PRODUCTS, FETCH_PRODUCT_BY_ID, FETCH_PRODUCT_BY_SEARCH, START_LOADING } from '../constants';


export const  fetch_all_products= ()=>async(dispatch)=>{
    try {
        const productData=await api.getproducts();
        // console.log(productData);
        dispatch({type: FETCH_PRODUCTS, data: productData.data});
    } catch (error) {
        console.log(error);
    }
}

export const  fetch_products_by_search= (search)=>async(dispatch)=>{
    try {
        dispatch({type: START_LOADING});
        let  productData=await api.getproducts();
        productData= productData.data;
        const updatedData= productData.filter((product)=>{
            const name= product.name.toLowerCase();
            search= search.toLowerCase();
            return name.includes(search);
        })
        // console.log(updatedData);
        dispatch({type: FETCH_PRODUCT_BY_SEARCH, data: updatedData});
        dispatch({type: END_LOADING});
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