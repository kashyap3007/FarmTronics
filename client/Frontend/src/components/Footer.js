import React from 'react'
import './style1.css';


export default function Footer() {
  return (
    <div>
        <footer className="w3l-footer-29-main">
        <div className="footer-29-w3l py-5">
            <div className="container pt-md-5">
                <div className="w3l-footer-text-style">
                    <div className="footer-list-cont d-sm-flex align-items-center justify-content-between mb-5">

                        <h2 className="w3logo"><a className="navbar-brand" href="">
                                Farm<span className="sub-color">Tronix</span>
                            </a></h2>
                        <div className="main-social-footer-29">
                            <ul>
                                <li className="w3follow mt-sm-0 mt-4">Follows On : </li>
                                <li><a href="#facebook" className="facebook"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="#twitter" className="twitter"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="#instagram" className="instagram"><i className="fab fa-instagram"></i></a></li>
                                <li><a href="#linkedin" className="linkedin"><i className="fab fa-linkedin-in"></i></a></li>
                            </ul>

                        </div>
                    </div>
                </div>
                <div className="row footer-top-29 pt-lg-5 pt-sm-4">
                    <div className="col-lg-3 col-sm-6">
                        <div className="address-grid">
                            <h5>10009 FarmTronix st, 5th Avenue, 436  street left parking , <br/>Aizawl, India</h5>
                            <p className="mt-4"></p>
                            <div className="container">
                            <h4 className='custom-head'>Get Connected On:</h4>
                            <br/>
                                <a href=""><img src="https://cdn.branch.io/branch-assets/1659570137910-og_image.png"  className='img-custom'/></a>
                                
                                <a href=""><img src="https://cdn.branch.io/branch-assets/1659570097391-og_image.png"  className='img-custom'/></a>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 mt-sm-0 mt-4 ps-lg-5">
                        <div className="address-grid">
                            <h5>Phone</h5>
                            <h5 className="phone-number-text mt-2"><a href="tel:+1(21) 112 7368">+1(21) 112 7368</a></h5>
                        </div>
                        <div className="address-grid mt-sm-5 mt-4">
                            <h5>E-mail</h5>
                            <h5 className="email-cont-text mt-1"> <a href="mailto:photogenic@mail.com" className="mail">farmtronix@gmail.com</a></h5>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 col-sm-5 footer-list-menu ps-lg-5 mt-lg-0 mt-sm-5 mt-4">
                        <div className="address-grid">
                            <h5 className="mb-4 pb-lg-2">Support</h5>
                            <ul>
                                <li><a href="#privacy">Privacy Policy</a></li>
                                <li><a href="#terms"> Terms of Service</a></li>
                                <li><a href="contact.html">Contact us</a></li>
                                <li><a href="#faq">faQ</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="address-grid col-lg-4 col-md-6 col-sm-7 ps-lg-5 mt-lg-0 mt-sm-5 mt-4 w3l-footer-16-main">
                        <h5>Subscribe here</h5>
                        <form action="#" className="subscribe d-flex mt-4 pt-lg-2 mb-4" method="post">
                            <input type="email" name="email" placeholder="Email Address" required=""/>
                            <button><span className="fa fa-paper-plane" aria-hidden="true"></span></button>
                        </form>
                        <p>Subscribe to our mailing list and get updates to your email inbox.</p>
                    </div>
                </div>
                {/* <!-- copyright --> */}
                <div className="w3l-copyright text-center mt-lg-5 mt-sm-4 pt-md-4 pt-3">
                    <p className="copy-footer-29">© 2023 FarmTronix. All rights reserved. Design by <a href="/" target="_blank">
                            RolmaKings</a></p>
                </div>
            </div>
        </div>
    </footer>
    {/* <!-- //footer --> */}
    </div>
  )
}
