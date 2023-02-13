import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import "./styles.css";
import { useParams } from 'react-router-dom';
import { fetch_article } from '../../actions/articles';
import { Loading } from '../Loading/Loading';
import Navbar from '../Navbar';
import Inner from '../Inner';
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom';

export const PlayArticle = () => {
  const navigate= useNavigate();
  const dispatch= useDispatch();
  const {id}= useParams();
  // dispatch(fetch_article(id));
  useEffect(()=>{
    dispatch(fetch_article(id));
  }, [id])
  // console.log(articleData);
  const {articleData, isLoading}= useSelector((state)=> state.articles);
  return (
    <>
      <Navbar/>
      <Inner title="Articles" current="Articles"/>
    <div className="hero-container">
      {isLoading? (<>
        <h3 className='text-center  '>Wait a Moment</h3>
      <Loading/>
      </>):(<>
      <div className="second-container">
        <h2 className='heading text-center mt-3 mb-5  ' > {articleData.name}</h2>
        <img src={articleData.src} className="mx-auto d-block"   alt="..."/>
        <div className="container center">
          <h2  className='mt-4 details  ' >Details:</h2>
        <p className='desc   p-2'> {articleData.details} </p>
        </div>
        <p className='  w-50 m-auto my-5' >Author: {articleData.Author}</p>
        {/* <p className='  w-50 m-auto my-3'>Published Data:- {articleData.year.slice(0,10)} </p> */}
      </div>
      </>)}
    </div>
    <Footer/>
    </>
  )
}
