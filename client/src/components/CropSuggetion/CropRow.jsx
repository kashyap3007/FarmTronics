import React from 'react'
import  {Crop}  from './Crop'
import './styles.css';
import { useSelector } from 'react-redux';
import { Loading } from '../Loading/Loading';

export const CropRow = () => {
  let {cropsData, isLoading, city}= useSelector((state)=> state.cropreport);
  // console.log(cropsData);
  if(!cropsData.length && !isLoading){
    console.log("No Data");
    return (
      <>
        <div className="second-container">
          <p className='text-color'>Enter your City name and get data</p>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="col-9">
      <div className="p-4 articleRow">
        <div>
            <div className="row gy-3 gx-3">
                {isLoading? (<>
                  <h3 className='text-center text-color'>Enter Your City Name to get Data</h3>
                  <Loading/>
                  </>):(<>
                    <h2>Here are the result for {city}:- </h2>
                    {cropsData.map((crop, index)=>{
                      return (<>
                        <Crop key={index} crop={crop} />
                      </>)
                    })}
                  </>)}
             </div>
            </div>
      </div>
    </div>
    </>
  )
}
