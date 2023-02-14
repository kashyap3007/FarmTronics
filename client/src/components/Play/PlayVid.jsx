import React, { useEffect } from 'react'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetch_video } from '../../actions/videos';
import Footer from '../Footer';
import { Loading } from '../Loading/Loading';
import Navbar from '../Navbar';
import './styles.css';
import Inner from '../Inner';

export const PlayVid = () => {
  const dispatch= useDispatch();
  const {videosData, isLoading}= useSelector((state)=> state.videos);
  const {id}= useParams();
  // console.log(videosData);
  // dispatch(fetch_video(id));
  useEffect(()=>{
    dispatch(fetch_video(id));
  },[id])
  if(!videosData) return null;
  return (
    <>
    <Navbar/>
      <Inner title="Articles" current="Articles"/>
    <div className="hero-container">
        {isLoading?(<>
          <h3 className='text-center text-color  '>Wait a Moment</h3>  
        <Loading/>
        </>):(
          <>
          <div className="second-container">
            <h2 className='heading text-center mt-3 text-color  ' > {videosData.name}</h2>
            <div className='video-container' >
            <ReactPlayer url={videosData.url} width={"80%"} height={"90%"}  controls="control"/>
            </div>
            <div className="container center">
              <h2  className='mt-4 details text-color text-center ' >Description: </h2>
            <p className='ms-5 text-color  p-2'> {videosData.details} </p>
            <p className='text-color ms-5' >Posted On: {videosData.posted}</p>
            </div>
        </div>
          </>
        )}
    </div>
    {/* <Footer/> */}
    <Footer/>
    </>
  )
}
