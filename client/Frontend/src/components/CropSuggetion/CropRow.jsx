import React from 'react'
import  {Crop}  from './Crop'
import './styles.css';
import { useSelector } from 'react-redux';

export const CropRow = () => {
  let {cropsData, isLoading}= useSelector((state)=> state.cropreport);
  // const isLoading= false;
  console.log(cropsData);
  if(!cropsData && !isLoading){
    console.log("No Post");
    return "No Post";
  }
  return (
    <>
      <div className="col-9">
      <div className="p-4 articleRow">
        <div className="container">
            <div className="row ">
                <Crop/>
                <Crop/>
                <Crop/>
             </div>
            </div>
      </div>
    </div>
    </>
  )
}
