import React from 'react'
import { Link } from 'react-router-dom'

export const Article = ({article}) => {
  return (
    <>
        <div className="card" style={{width: "18rem"}}>
                  <img src={article.src} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">{`${article.name.slice(0,20)}...`}</h5>
                    <p className="card-text text-dark">{`${article.details.slice(0,50)}...`}</p>
                    <Link to={`/article/${article.id}`} >
                    <button className="btn btn-primary" >Read more</button>
                    </Link>
                    <p className='my-2 author'>{article.Author}</p>
                    <span>{article.year.slice(0,10)}</span>
                  </div>
                </div>
    </>
      )
}
