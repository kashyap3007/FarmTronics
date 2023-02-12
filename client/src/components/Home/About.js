import React from 'react'

export default function About() {
  return (
    <div>
        <section className="w3l-about-6 py-5" id="about">
        <div className="container py-lg-5 py-md-3">
            <div className="row align-items-center">
                <div className="col-lg-6 pe-lg-5">
                    <h6 className="title-subw3hny">Our Info</h6>
                    <h3 className="title-w3l">Agriculture & Organic Product Form</h3>
                    <p className="mt-md-4 mt-3">Organic agriculture aims to create a sustainable and self-sufficient farming system that maintains the health of the soil, protects the environment, and produces high-quality, nutritious food.</p>
                    <ul className="service-list pt-lg-2 mt-4">

                        <li className="service-link"><a href="#url"><span className="fa fa-check-circle"></span> Fresh Vegetables</a></li>
                        <li className="service-link"><a href="#url"><span className="fa fa-check-circle"></span> Dairy Products</a></li>
                        <li className="service-link"><a href="#url"><span className="fa fa-check-circle"></span> Professional Farmers</a></li>
                    </ul>
                </div>
                <div className="HomeAboutImages col-lg-6 mt-lg-0 mt-5">
                    <div className="row position-relative">
                        <div className="col-6">
                            <img src="images/a1.jpg" alt="" className="radius-image img-fluid"/>
                        </div>
                        <div className="col-6 mt-4">
                            <img src="images/a2.jpg" alt="" className="radius-image img-fluid mb-md-3 mb-2"/>
                            <img src="images/a3.jpg" alt="" className="radius-image img-fluid mt-md-3"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}
