import React, {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux';
import { CropRow } from './CropRow';
import {fetch_crop_report} from '../../actions/cropSuggetion';
// import Navbar from '../Navbar/Navbar';
// import Footer from '../Footer/Footer';
import './styles.css';

export const CropSuggetion = () => {
  const dispatch= useDispatch();
  const [inputText, setInputText] = useState("");
  function changeHandler(event){
    setInputText(event.target.value);
  }
  function search (event){
    event.preventDefault();
    dispatch(fetch_crop_report(inputText));
    setInputText("");
  }
  return (
    <>
    {/* <Navbar/> */}
    <div className="main-container overflow-hidden ">
        <h3 className=' heading  text-center pt-2 text-light '>Here are the articles that will help you.</h3>
        <p className='quote text-center text-light  pb-2'>"I have always imagined that Paradise will be a kind of a Library."</p>
        <form action="#" onSubmit={search} className='d-flex  justify-content-center my-3'>
          <input className='inputSearch'  type="search" name="city" onChange={changeHandler} value={inputText} id="search"  placeholder="Enter your city name"/>
          <button type='submit' className='btn btn-primary' >Check crops</button>
        </form>
      <div className="row gy-5 justify-content-center">
        <CropRow/>
        <CropRow/>
        <CropRow/>
      </div>
    </div>
    {/* <Footer/> */}
    </>
  )
}
