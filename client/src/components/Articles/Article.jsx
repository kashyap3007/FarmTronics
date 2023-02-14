import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { delete_article, like_article } from '../../actions/articles';

export const Article = ({article}) => {
  const user= useSelector((state)=> state.auth.authData) || JSON.parse(localStorage.getItem("user"));
  // console.log(user);
  const navigate= useNavigate();
  const dispatch = useDispatch();
  function deleteArtilce(id){
    dispatch(delete_article(id, navigate));
  }
  function likeArticle(id, userId){
    dispatch(like_article(id, userId));
  }
  return (
    <>
        <div className="card" style={{width: "18rem"}}>
                  <img src={article.src} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">{`${article.name.slice(0,20)}...`}</h5>
                    <p className="card-text text-dark">{`${article.details.slice(0,50)}...`}</p>
                    <div className='d-flex align-items-center justify-content-between '>
                    <Link to={`/article/${article.id}`} >
                    <button className="btn btn-primary" >Read more</button>
                    </Link>
                        <div>
                    <span>{article.likes.length|| 0}</span>
                    <i className="fa-solid fa-heart ms-2" onClick={()=>{
                        likeArticle(article.id, user?._id);                      
                    }} style={{cursor: "pointer"}} ></i>
                    {user && (<>
                      <i className="fa-sharp fa-solid fa-trash ms-3" onClick={()=>{
                        deleteArtilce(article.id);
                      }} style={{cursor: "pointer"}}></i>
                    </>)}
                    </div>
                    </div>
                    <p className='my-2 author'>{article.Author}</p>
                    <span>{article.year.slice(0,10)}</span>
                  </div>
                </div>
    </>
      )
}
