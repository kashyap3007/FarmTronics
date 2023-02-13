import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import "./styles.css";
import { useParams } from 'react-router-dom';
import { Loading } from '../Loading/Loading';
import { fetch_product } from '../../actions/products';
import Navbar from '../Navbar';
import Inner from '../Inner';
import Footer from '../Footer';

export const PlayProduct = () => {
  const dispatch= useDispatch();
  const {productData, isLoading}= useSelector((state)=> state.products);
  const {id}= useParams();
  // dispatch(fetch_product(id));
  useEffect(()=>{
        dispatch(fetch_product(id));
      }, [id])
  // console.log(productData);
  return (
    <>
    <Navbar/>
    <Inner title="Articles" current="Articles"/>
    <div className="hero-container">
      {isLoading? (<>
        <h3 className='text-center text-color '>Wait a Moment</h3>
      <Loading/>
      </>):(<>
      <div className="second-container">
        <h2 className='heading text-color text-center mt-3 mb-5' > {productData.name}</h2>
        <img src={productData.src} className="mx-auto set-img-dim d-block"   alt="..."/>
        <div className="container center">
          <h2  className='mt-4 details desc text-color text-center' >Details:</h2>
          <form>
          <script
            src="https://checkout.razorpay.com/v1/payment-button.js"
            data-payment_button_id="pl_LFEMFXTkIKeY8O"
            async
            ></script>
        </form>
        <p className='details text-color  p-2'> {productData.details} </p>
        </div>
        <p className='text-color m-auto w-75'>Author:- {productData.owner} </p>
        </div>
      </>)}
    </div>
    <Footer/>
    </>
  )
}
