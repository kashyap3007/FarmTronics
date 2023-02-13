import React from 'react';
import { Link } from 'react-router-dom';

export const Book = ({product}) => {
  return (
    <>
        <div className="card" style={{width: "18rem"}}>
            <img src={product.src} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{`${product.name.slice(0,24)}...`}</h5>
              <p className="card-text">{`${product.details.slice(0,70)}...`}</p>
              <Link to={`/product/${product.id}`}>
              <button className="btn btn-primary  w-50 my-3 mx-5">Buy Now</button>
              </Link>
              <p className='w-50 m-auto'>Owner: {product.owner}</p>
          </div>
        </div>
    </>
  )
}
