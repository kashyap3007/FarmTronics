import React from 'react'
import { useSelector } from 'react-redux'
import { Article } from './Article'
import {Loading} from  '../Loading/Loading';
import './styles.css';

export const ArticleRow = () => {
  let {articleData, isLoading}= useSelector((state)=> state.articles);
  console.log(articleData);
  if(!articleData.length && !isLoading){
    // console.log("No Post");
    return (<>
    <div className='second-container mt-5 p-4'>
    <p className='text-center text-color'>No Articles Found</p>
    </div>
    </>);
  }
  return (
    <>
      <div className="col-9">
      <div className="p-3 articleRow Row">
        <div className="container">
            <div className="row gy-5">
                {isLoading ? (<>
                    <h3 className='text-center'>Wait a Moment</h3>
                  <Loading/>
                </>) :(
                  <>
                  {articleData?.map((article, index)=>{
                  return(
                    <> 
                      <div className="col d-flex justify-content-center align-items-center">
                        <Article key={index} article={article} />
                    </div>
                    </>
                  )
                })}
                </>
                )}
             </div>
            </div>
      </div>
    </div>
    </>
  )
}
