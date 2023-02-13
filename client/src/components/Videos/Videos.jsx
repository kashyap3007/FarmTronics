import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { fetch_all_videos, fetch_videos_by_search } from '../../actions/videos';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Inner from '../Inner';
import { Playlist } from './Playlist';

export const Videos = () => {
  const dispatch= useDispatch();
  const [inputText, setInputText] = useState("");
  function changeHandler(event){
    setInputText(event.target.value);
  }
  function search (event){
    event.preventDefault();
    dispatch(fetch_videos_by_search(inputText));
    setInputText("");
  }
  // dispatch(fetch_all_videos());
  useEffect(()=>{
    dispatch(fetch_all_videos());
  }, [])

  return (
    <>
        <Navbar/>
    <Inner title="Our Vidoes" current="Vidoes"/>
        <div className="main-container overflow-hidden ">
        <h3 className=' heading text-center pt-2 '>Follow this tutorial for get more yields.</h3>
        <p className='quote text-center pb-2'>"Agriculture is our wisest pursuit, because it will in the end contribute most to real wealth, good morals & happiness."</p>
        <form action="#" onSubmit={search} className='d-flex  justify-content-center my-3'>
          <input type="search" value={inputText} onChange={changeHandler} name="search" id="search" placeholder="Search for books"/>
          <button type='submit' className='btn btn-primary' >Search</button>
        </form>
      <div className="row gy-5 justify-content-center">
        <Playlist/>
      </div>
    </div>
    <Footer/>
    </>
  )
}
