import React, { useEffect } from 'react'
import { Book } from './Product'
import { useSelector } from 'react-redux'
import {Loading} from '../Loading/Loading';
import './styles.css';

export const Shelf = () => {
    const {productData, isLoading}= useSelector((state)=>state.products)
    console.log(productData);                                    
    if(!productData.length && !isLoading) {
       return (<>
        <div className='second-container mt-5 p-4'>
        <p className='text-center text-color'>No Products Found</p>
        </div>
        </>);
    };
  return (
    <>
      <div className="col-9">
      <div className="p-3 shelf Row">
        <div className="container">
            <div className="row gy-5">
                {productData?.length===0? (<>
                  <h3 className='text-center'>Wait a Moment</h3>
                  <Loading/>
                  </>):(<>
                    {productData?.map((product)=>{
                  return(
                    <>
                      <div className="col d-flex justify-content-center align-items-center">
                          <Book key={product.id} product={product}  />
                      </div>
                    </>
                  )
                })}
                </>)}
             </div>
            </div>
      </div>
    </div>
    </>
  )
}
