import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import Inner from '../Inner';
import Navbar from '../Navbar';

export default function Services() {
  return (
    <>
    <Navbar/>
    <div>
        <Inner title="Our Services" current=" Our Services"/>
      {/* <!--/w3l-servicesblock--> */}
    <section className="w3l-circles py-5" id="services">
        <div className="container py-md-5 py-2">
            {/* <!--/row-2--> */}
            <div className="row w3l-circles">
                <div className="col-lg-6 circles-left">
                    <img src="images/a6.jpg" alt="" className="radius-image img-fluid"/>
                </div>
                <div className="col-lg-6 circles-right mt-lg-0 mt-5 align-self  position-relative">
                    <h6 className="title-subw3hny">what We Offer</h6>
                    <h3 className="title-w3l mb-4">Providing High
                        Quality <br/>Products</h3>
                    <p className="">Experience excellence with our premium quality products. <br/>
                    Our products are crafted with care and precision to deliver the highest level of satisfaction.</p>
                    <div className="w3banner-content-btns">
                        <Link to="/about" className="btn btn-style btn-primary mt-lg-5 mt-4 me-2">Read More <i className="fas fa-arrow-right ms-2"></i></Link>
                        <Link to="/cont" className="btn btn-style btn-outline-dark mt-lg-5 mt-4">Contact Us <i className="fas fa-arrow-right ms-2"></i></Link>
                    </div>
                </div>
            </div>
            {/* <!--//row-2--> */}
        </div>
    </section>
    {/* <!--//w3l-servicesblock--> */}
    {/* <!-- /content-4--> */}

    <section className="w3l-content-4 py-5" id="features">
        <div className="content-4-main py-lg-5 py-md-4 py-2">
            <div className="container">
                <div className="content-info-in row align-items-center">
                    <div className="content-left col-lg-6 pe-lg-5">
                        <div className="row content4-right-grids mb-sm-5 mb-4 pb-3">
                            <div className="col-2 content4-right-icon">
                                <div className="content4-icon">
                                    <span className="fas fa-tractor"></span>
                                </div>
                            </div>
                            <div className="col-10 content4-right-info ps-lg-5">
                                <h6><Link to="#url">Agriculture Products</Link></h6>
                                <p>From seed to harvest, we have the products- Seeds, Fertilizers.... you need to succeed.</p>
                            </div>
                        </div>
                        <div className="row content4-right-grids mb-sm-5 mb-4 pb-3">
                            <div className="col-2 content4-right-icon">
                                <div className="content4-icon">
                                    <span className="fas fa-carrot"></span>
                                </div>
                            </div>
                            <div className="col-10 content4-right-info ps-lg-5">
                                <h6><Link to="#url">Fresh Vegetables</Link></h6>
                                <p>From our farm to your fork, our vegetables are the freshest and tastiest around.</p>
                            </div>
                        </div>
                        <div className="row content4-right-grids">
                            <div className="col-2 content4-right-icon">
                                <div className="content4-icon">
                                    <span className="fas fa-wine-bottle"></span>
                                </div>
                            </div>
                            <div className="col-10 content4-right-info ps-lg-5">
                                <h6><Link to="#url">Dairy Products</Link></h6>
                                <p>From milk to cheese and beyond, our dairy products are the cornerstone of healthy eating.</p>
                            </div>
                        </div>
                    </div>
                    <div className="HomeAboutImages col-lg-6 mt-lg-0 mt-md-5 mt-4">
                        <div className="row position-relative">
                            <div className="col-6">
                                <img src="images/a1.jpg" alt="" className="radius-image img-fluid"/>
                            </div>
                            <div className="col-6 mt-4">
                                <img src="images/a7.jpg" alt="" className="radius-image img-fluid mb-md-3 mb-2"/>
                                <img src="images/a8.jpg" alt="" className="radius-image img-fluid mt-md-3"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- -page-video-popup--> */}
    <section className="w3l-index5 py-5" id="about">
        <div className="new-block py-md-5 py-3">
            <div className="container">

                <div className="row middle-section align-self">
                    <div className="col-lg-6 video-info pe-lg-5">
                        <div className="title-content text-left">
                            <h6 className="title-subw3hny">Root With Nature</h6>
                            <h3 className="title-w3l two pe-lg-5">For Strong economy, develop agriculture </h3>
                            <Link to="contact.html" className="btn btn-style btn-outline-light mt-sm-5 mt-4">Contact Now </Link>
                        </div>
                    </div>
                    <div className="col-lg-6 history-info mt-5 ps-lg-5 align-self">
                        <p className="vhny-para mt-3 pe-lg-5">Invest in agriculture for a strong and sustainable economy.<br/>
                        A strong agricultural sector is the foundation of a robust economy.<br/>
                        Boost your economy with a thriving agriculture industry.<br/>
                        Agriculture drives growth, creates jobs, and strengthens economies.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    </section>
    {/* <!-- /-page-video-popup--> */}
    {/* <!-- card section --> */}
    <section className="w3l-features-4">
        <div className="features4-block py-5">
            <div className="container py-md-5">
                <div className="we-header text-center">
                    <h6 className="title-subw3hny">Our Services</h6>
                    <h3 className="title-w3l mb-5">What We're Doing</h3>
                </div>
                <div className="row features4-grids">
                    <div className="col-lg-3 col-md-6">
                        <div className="features4-grid active">
                            <div className="feature-images">
                                <span className="fas fa-carrot"></span>
                            </div>
                            <h5><Link to="#url">Fresh Vegetables</Link></h5>
                            <Link to="#readmore" className="grid-link">Read More <span className="fa fa-arrow-right"></span></Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mt-lg-0 mt-4">
                        <div className="features4-grid">
                            <div className="feature-images">
                                <span className="fas fa-tractor"></span>
                            </div>
                            <h5><Link to="#url">Farm Products</Link></h5>
                            <Link to="#readmore" className="grid-link">Read More <span className="fa fa-arrow-right"></span></Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mt-lg-0 mt-4">
                        <div className="features4-grid">
                            <div className="feature-images">
                                <span className="fas fa-seedling"></span>
                            </div>
                            <h5><Link to="#url">Organic Products</Link></h5>
                            <Link to="#readmore" className="grid-link">Read More <span className="fa fa-arrow-right"></span></Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mt-lg-0 mt-4">
                        <div className="features4-grid">
                            <div className="feature-images">
                                <span className="fas fa-bong"></span>
                            </div>
                            <h5><Link to="#url">Awesome Wheats</Link></h5>
                            <Link to="#readmore" className="grid-link">Read More <span className="fa fa-arrow-right"></span></Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mt-4">
                        <div className="features4-grid">
                            <div className="feature-images">
                                <span className="fas fa-apple-alt"></span>
                            </div>
                            <h5><Link to="#url">Fresh Fruits</Link></h5>
                            <Link to="#readmore" className="grid-link">Read More <span className="fa fa-arrow-right"></span></Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mt-4">
                        <div className="features4-grid">
                            <div className="feature-images">
                                <span className="fas fa-headphones-alt"></span>
                            </div>
                            <h5><Link to="#url">
                                    Excellent Service</Link></h5>
                            <Link to="#readmore" className="grid-link">Read More <span className="fa fa-arrow-right"></span></Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mt-4">
                        <div className="features4-grid">
                            <div className="feature-images">
                                <span className="fas fa-users"></span>
                            </div>
                            <h5><Link to="#url">Qualified Staff</Link></h5>
                            <Link to="#readmore" className="grid-link">Read More <span className="fa fa-arrow-right"></span></Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mt-4">
                        <div className="features4-grid">
                            <div className="feature-images">
                                <span className="fas fa-thumbs-up"></span>
                            </div>
                            <h5><Link to="#url">Organic Solution</Link></h5>
                            <Link to="#readmore" className="grid-link">Read More <span className="fa fa-arrow-right"></span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- //card section --> */}

    </div>
    <Footer/>
    </>
  )
}
