import React, { useEffect, useState } from 'react'
import { Video } from './Video'
import { useSelector } from 'react-redux'
import { Loading } from '../Loading/Loading'
import './styles.css';

export const Playlist = () => {
    const {videosData, isLoading}= useSelector((state)=> state.videos);
    // console.log(videosData);
    if(!videosData.length && !isLoading) {
      return (<>
        <div className='second-container mt-5 p-4'>
        <p className='text-center text-color'>No Videos Found</p>
        </div>
        </>);
    }
  return (
    <>
      <div className="col-9">
      <div className="p-3 playlist">
        <div className="container">
            <div className="row gy-5">
                {isLoading ? (<>
                  <h3 className='text-center'>Wait a Moment</h3>
                  <Loading/>
                </>):(<>
                  {videosData?.map((video)=>{
                  return(
                    <>
                      <div className="col d-flex justify-content-center align-items-center">
                        <Video key={video.id} video={video} />
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
