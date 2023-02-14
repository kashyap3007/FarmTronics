import React, {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux';
import { CropRow } from './CropRow';
import {fetch_crop_report} from '../../actions/cropSuggetion';
// import Navbar from '../Navbar/Navbar';
// import Footer from '../Footer/Footer';
import './styles.css';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Inner from '../Inner';

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
  function getCity(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } 
    let lat = 0;
    let long = 0;
  function showPosition(position) {
    lat = position.coords.latitude;
    long = position.coords.longitude;
    const url =
      "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=" +
      lat +
      "&longitude=" +
      long +
      "&localityLanguage=en";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.city);
        dispatch(fetch_crop_report(data.city));
      })
      // .catch((err) => console.log(err));
    }
  }
  return (
    <>
    {/* <Navbar/> */}
    <Navbar/>
    <Inner title="Articles" current="Articles"/>
    <div className="main-container overflow-hidden ">
        <h3 className=' heading  text-center pt-2 text-color '>Here are the articles that will help you.</h3>
        <p className='quote text-center text-color mt-3 pb-2'>"I have always imagined that Paradise will be a kind of a Library."</p>
        <form action="#" onSubmit={search} className='d-flex  justify-content-center my-3'>
          <input className='inputSearch inp-border'  type="search" name="city" onChange={changeHandler} value={inputText} id="search"  placeholder="Enter your city name"/>
          <button type='submit' className='btn btn-primary' >Check crops</button>
          <button  className='btn btn-primary' onClick={getCity}  >Check crops by location</button>
        </form>
      <div className="row gy-5 justify-content-center">
        <CropRow key={1}/>
      </div>
    </div>
    <Footer/>
    </>
  )
}
