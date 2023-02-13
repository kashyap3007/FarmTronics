import React, { useEffect, useState } from 'react'
import { Shelf } from './Shelf';
import { useDispatch } from 'react-redux';
import './styles.css';
import { fetch_all_products, fetch_products_by_search } from '../../actions/products';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Inner from '../Inner';

export const Products = () => {
  const dispatch= useDispatch();
  const [inputText, setInputText] = useState("");
  function changeHandler(event){
    setInputText(event.target.value);
  }
  function search (event){
    event.preventDefault();
    dispatch(fetch_products_by_search(inputText));
    setInputText("");
  }
  // dispatch(fetch_all_products());
  useEffect(()=>{
    dispatch(fetch_all_products());
  },[])
  return (
    <>
        <Navbar/>
    <Inner title=" Our Products" current="Products"/>
      <div className="main-container  overflow-hidden ">
        <h3 className='heading  text-center py-3'>Purchase products from here</h3>
        <p className='quote text-center desc'>"The farmer is the only man in our economy who buys everything at retail, sells everything at wholesale, and pays the freight both ways.".</p>
        <form action="#" onSubmit={search} className='d-flex  justify-content-center my-3'>
          <input type="search" className="inp-border" onChange={changeHandler} value={inputText} name="search" id="search"  placeholder="Search for books"/>
          <button type='submit' className='btn btn-primary' >Search</button>
        </form>
      <div className="row  gy-5 justify-content-center">
        <Shelf/>
        <Footer/>
  </div>
</div>
    </>
  )
}
