import React from 'react'
import { Link } from 'react-router-dom';

export default function Inner(props) {
  return (
    <div>
       {/* <!--/inner-page--> */}
    <div className="inner-banner py-5">
        <section className="w3l-breadcrumb text-left py-sm-5 ">
            <div className="container">
                <div className="w3breadcrumb-gids">
                    <div className="w3breadcrumb-left text-left">
                        <h2 className="inner-w3-title">
                            {props.title} </h2>
                        <p className="inner-page-para mt-2">
                            Better Agriculture
                            for Better Future</p>
                    </div>
                    <div className="w3breadcrumb-right">
                        <ul className="breadcrumbs-custom-path">
                            <li><Link to="/">Home</Link></li>
                            <li className="active"><span className="fas fa-angle-double-right mx-2"></span>{props.current}</li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    </div>
    {/* <!--//inner-page--> */}
    </div>
  )
}
