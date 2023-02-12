import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import "./styles.css";
import { useParams } from 'react-router-dom';
import { Loading } from '../Loading/Loading';
import { fetch_product } from '../../actions/products';
// import Navbar from '../Navbar/Navbar';
// import Footer from '../Footer/Footer';

export const PlayProduct = () => {
  const dispatch= useDispatch();
  const {productData, isLoading}= useSelector((state)=> state.products);
  const {id}= useParams();
  useEffect(()=>{
        dispatch(fetch_product(id));
  }, [id])
  console.log(productData);
  return (
    <>
      {/* <Navbar/> */}
    <div className="hero-container">
      {isLoading? (<>
        <h3 className='text-center text-light'>Wait a Moment</h3>
      <Loading/>
      </>):(<>
        <h2 className='heading text-center mt-3 mb-5 text-light' > {productData.name}</h2>
        <img src={productData.src} className="mx-auto set-img-dim d-block"   alt="..."/>
        <div className="container center">
          <h2  className='mt-4 details text-light' >Details:</h2>
          <form>
          <script
            src="https://checkout.razorpay.com/v1/payment-button.js"
            data-payment_button_id="pl_LFEMFXTkIKeY8O"
            async
          ></script>
        </form>
        <p className='desc text-light p-2'> {productData.details} </p>
        </div>
        <p className='text-light m-auto w-75'>Author:- {productData.owner} </p>
      </>)}
    </div>
      {/* <Footer/> */}
    </>
  )
}
