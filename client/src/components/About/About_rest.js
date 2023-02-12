import React from 'react'
import Inner from '../Inner'
import { Link } from 'react-router-dom';
import './styles.css';
import Footer from '../Footer';
import Navbar from '../Navbar';
export default function About_rest() {
    return (
        <>
        <Navbar/>
        {/* <Inner/> */}
        <div>
            <Inner title="About Us" current="About Us" />
            {/* <!--/ab--> */}
            <section className="w3l-banner-agency py-5" id="work">
                <div className="midd-w3 py-md-4">
                    <div className="container">
                        <div className="about-img-top mb-lg-5 mb-4">
                            <img src="images/banner2.jpg" alt="" className="img-fluid radius-image" />
                        </div>
                        <div className="row">
                            <div className="col-lg-6 banner-content align-self">
                                <h6 className="title-subw3hny">About Us</h6>
                                <h3 className="title-w3l">Agriculture & Organic<br /> Product Form</h3>
                                <div className="w3banner-content-btns">
                                    <Link to="/about" className="btn btn-style btn-primary mt-lg-5 mt-4 me-2">Read More <i className="fas fa-arrow-right ms-2"></i></Link>
                                    <Link to="/cont" className="btn btn-style btn-outline-dark mt-lg-5 mt-4">Contact Us <i className="fas fa-arrow-right ms-2"></i></Link>
                                </div>
                            </div>
                            <div className="col-lg-6 text-left ps-lg-5 mt-lg-0 mt-md-5 mt-4">
                                <p>Agriculture and organic products are becoming increasingly popular in today's world as people are looking for healthier and more sustainable food options. Organic agriculture emphasizes the use of natural processes and non-toxic products, such as  to grow crops and raise livestock. This results in healthier and tastier food that is free from harmful chemicals and pesticides.
                                    <br/>
                                Consumers can easily identify organic products by looking for the certified organic label on the packaging. This label ensures that the product has been grown and processed according to strict standards set by organic certification agencies.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--//ab--> */}
            <section className="w3l-blog-se-3 py-5" id="ab-grids">
                <div className="container">
                    <div className="inner-sec-w3ls py-lg-5 py-md-4 py-2">
                        {/* <!--/services-grids--> */}
                        <div className="row blog-sec">
                            <div className="col-lg-4 manager-img mb-lg-0 mb-md-5 mb-4 pe-lg-5">
                                <h6 className="title-subw3hny">Why Choose Us</h6>
                                <h3 className="title-w3l">Growing Healthy Food</h3>
                                <p className="card-text mt-3">
                                Access to expert advice and resources: Our website provides access to a wealth of information and resources,  to help farmers grow their own healthy food.
                                <br/>Supportive community: Our community is made up of people who share a passion for growing healthy food, and who are eager to share their experiences</p>
                                <a href="tel:+44-123-456-78" className="btn btn-style btn-primary mt-lg-5 mt-4"><span className="fas fa-phone-alt" aria-hidden="true"></span> +00-123-456-78</a>


                            </div>
                            <div className="col-lg-4 col-md-6 about-in blog-grid-info text-left">
                                <div className="card img">
                                    <div className="card-body img">
                                        <a href="#" className="d-block zoom radius-image"><img src="images/a2.jpg" alt="" className="img-fluid radius-image" /></a>
                                        <div className="blog-des mt-4">
                                            <h5 className="card-title mt-4">Our Mission</h5>
                                            <p className="card-text">Through our platform, we aim to educate and inform about the importance of sustainable agriculture and the benefits of choosing locally sourced, organic products.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 about-in blog-grid-info text-left mt-md-0 mt-5">
                                <div className="card img">
                                    <div className="card-body img">
                                        <a href="#" className="d-block zoom radius-image"><img src="images/a3.jpg" alt="" className="img-fluid radius-image" /></a>
                                        <div className="blog-des mt-3">
                                            <h5 className="card-title mt-4">Our Vision</h5>
                                            <p className="card-text">Our mission is to connect farmers, producers, and consumers by providing a platform that promotes sustainable agriculture and empowers local communities.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- team --> */}
            <section className="w3l-team py-5" id="w3l-team">
                <div className="container py-md-5">
                    <div className="row text-left">
                        <div className="col-md-6 mt-md-5 pe-lg-5">
                            <div className="title-content text-left">
                                <h6 className="title-subw3hny">Our Team</h6>
                                <h3 className="title-w3l mb-3">Expert Farmers</h3>
                                <p>Our mission is to support and connect the next generation of expert farmers and agricultural professionals. We strive to provide a platform that showcases their knowledge, skills, and expertise, and offers a range of resources and opportunities to help them grow and succeed. </p>
                                <a className="btn btn-style btn-primary mt-md-5 mt-4" href="/"> Join Our Team <span className="fas fa-arrow-right ms-2"></span></a>
                            </div>
                        </div>
                        <div className="col-md-3 col-6 mt-5">
                            <div className="team-grids text-center">
                                <img src="images/team5.jpg" className="img-fluid" alt="" />
                                <div className="team-info">
                                    <div className="caption">
                                        <div className="social-icons-section text-center">
                                            <a className="fac" href="#url">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                            <a className="twitter" href="#url">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h4>Jefry Harris</h4>
                            <h6>Agricultural Scientist</h6>
                        </div>
                        <div className="col-md-3 col-6 mt-5">
                            <div className="team-grids text-center">
                                <img src="images/img11.jpeg"  className="img-fluid img-custom-dim" alt="" />
                                <div className="team-info">
                                    <div className="caption">
                                        <div className="social-icons-section text-center">
                                            <a className="fac" href="#url">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                            <a className="twitter" href="#url">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h4>Ayush Kashyap</h4>
                            <h6>Agronomist</h6>
                        </div>
                        <div className="col-md-3 col-6 mt-5">
                            <div className="team-grids text-center">
                                <img src="images/team1.jpg" className="img-fluid" alt="" />
                                <div className="team-info">
                                    <div className="caption">
                                        <div className="social-icons-section text-center">
                                            <a className="fac" href="#url">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                            <a className="twitter" href="#url">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h4>John Doe</h4>
                            <h6>Agricultural Engineer</h6>
                        </div>
                        <div className="col-md-3 col-6 mt-5">
                            <div className="team-grids text-center">
                                <img src="images/img3.jpg" className="img-fluid img-custom-dim" alt="" />
                                <div className="team-info">
                                    <div className="caption">
                                        <div className="social-icons-section text-center">
                                            <a className="fac" href="#url">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                            <a className="twitter" href="#url">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h4>Nilesh Chauhan</h4>
                            <h6>Agricultural Consultant</h6>
                        </div>
                        <div className="col-md-3 col-6 mt-5">
                            <div className="team-grids text-center">
                                <img src="images/team3.jpg" className="img-fluid" alt="" />
                                <div className="team-info">
                                    <div className="caption">
                                        <div className="social-icons-section text-center">
                                            <a className="fac" href="#url">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                            <a className="twitter" href="#url">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h4>Martin ker </h4>
                            <h6>Sustainable Agriculture Specialist</h6>
                        </div>
                        <div className="col-md-3 col-6 mt-5">
                            <div className="team-grids text-center">
                                <img src="images/img55.jpg" className="img-fluid img-custom-dim" alt="" />
                                <div className="team-info">
                                    <div className="caption">
                                        <div className="social-icons-section text-center">
                                            <a className="fac" href="#url">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                            <a className="twitter" href="#url">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h4>Gupta Rupesh </h4>
                            <h6>Agricultural Extension Agent</h6>
                        </div>
                    </div>

                </div>
            </section>
            {/* <!-- team --> */}
        </div>
        <Footer/>
        </>
    )
}
