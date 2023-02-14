import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Article } from './Article'
import {Loading} from  '../Loading/Loading';
import './styles.css';
import { post_article } from '../../actions/articles';
import { useNavigate } from 'react-router-dom';

export const ArticleRow = () => {
  let user= useSelector((state)=> state.auth.authData) || JSON.parse(localStorage.getItem("user"));
  // user= user?.data;
  // console.log(user);
  const navigate= useNavigate();
  const dispatch= useDispatch();
  const [file , setFile]= useState();
  const [data, setData]= useState({
    title: "",
    details: "",
    author: ""
  })
  let {articleData, isLoading}= useSelector((state)=> state.articles);
  // console.log(articleData);
  if(!articleData.length && !isLoading){
    // console.log("No Post");
    return (<>
    <div className='second-container mt-5 p-4'>
    <p className='text-center text-color'>No Articles Found</p>
    </div>
    </>);
  }
  function changeHandler(e){
    const prop= e.target.name;
    const val= e.target.value;
    setData((prevValue)=>{return {...prevValue, [prop]: val}});
  }
  function fileChangeHandler(e){
    setFile(e.target.files[0]);
  }
  function createPost(event){
    event.preventDefault();
    const postData= new FormData();
    postData.append("file", file);
    postData.append("title", data.title);
    postData.append("details", data.details);
    postData.append("author", data.author);
    postData.append("category", ["farming", "tech"]);
    // console.log(postData);
    dispatch(post_article(postData));
    window.location.reload();
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
                   {user?.category==="Mentor" && (<>
                    <form action="#" method='post' encType='multipart/form-data' className='d-inline-block' onSubmit={createPost}>
                    <div className="col d-flex justify-content-center align-items-center">
                    <div className="card p-2" style={{width: "18rem"}}>
                      <h3 className='text-center text-color'>Creating Post:</h3>
                    <input type="text" name="title"  className='my-2 inp-border' onChange={changeHandler}  value={data.title}  placeholder='Title' required/>
                    <textarea type="text" name="details" className='my-2 inp-border'  onChange={changeHandler} value={data.details}  placeholder='Details' required/>
                    <input type="text" name="author" className='my-2 inp-border' onChange={changeHandler} value={data.author}  placeholder='Author' required/>
                    <input type="file" name="image" className=' my-2 mx-auto w-75 inp-border' onChange={fileChangeHandler} placeholder='Image' required/>
                    <button type='submit' className="btn w-50 my-3 mx-auto btn-primary" onClick={createPost} >Create Post</button>
                    </div>
                  </div>
                      </form>
                   </>)}
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
