import React from 'react'
import { Link } from 'react-router-dom'

export const Crop = ({crop}) => {
  return (
    <>
      <div className="card my-3" style={{width: "18rem"}}>
        <img src={crop.url} className="card-img-top mt-2" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{crop.name}</h5>
          <Link to="/" className="btn btn-primary mt-3" onClick={()=>{window.alert("Go and do Farming")}}>Send More info to email</Link>
        </div>
</div>
    </>
      )
}
