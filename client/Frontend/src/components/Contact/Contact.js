import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import Inner from '../Inner';
import Navbar from '../Navbar';
export default function Contact() {
  return (
    <>
    <Navbar/>
    <div>
        <Inner title="Contact Us" current="Contact Us"/>
    {/* <!--//inner-page--> */}
    {/* <!-- contact-form --> */}
    <section className="w3l-contact-main" id="contact">
        <div className="contact-infhny py-5">
            <div className="container py-md-5">
                <div className="title-content text-center mb-md-5 mb-4">
                    <h6 className="title-subw3hny">Send us a message</h6>
                    <h3 className="title-w3l mx-lg-5">Keep In Touch With Us.</h3>
                    <p className="text-para mt-2">Keep in touch with us for exclusive promotions and offers by signing up for our loyalty program.</p>
                </div>
                <div className="top-map">
                    <div className="map-content-9">
                        <form action="#" method="post">
                            <div className="form-top1">

                                <div className="form-top">
                                    <div className="form-top-righ">
                                        <textarea name="Message" id="Message" placeholder="Message*" required=""></textarea>
                                    </div>
                                    <div className="form-top-left">
                                        <input type="text" name="Name" id="Name" placeholder="Name" required=""/>
                                        <input type="number" name="Phone" placeholder="Your phone number" required=""/>
                                        <input type="email" name="Sender" id="Sender" placeholder="Email*" required=""/>

                                    </div>

                                </div>
                                <div className="text-center mt-5">
                                    <button type="submit" className="btn btn-style btn-primary">Submit Now <i className="far fa-paper-plane ml-lg-3"></i></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- //contact-form --> */}
    {/* <!-- contact map --> */}
    <section className="w3l-contact-main" id="contact">
        <div className="container">
            <div className="map pt-lg-3">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059445135!2d78.6895506!3d10.8153809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8588ccfa2ddcb%3A0xd8db4d0b2a88d250!2sNational%20Institute%20of%20Technology%2C%20Tiruchirappalli!5e0!3m2!1sen!2sin!4v1622964044389!5m2!1sen!2sin" width="600" height="450"></iframe>

            </div>
        </div>
    </section>
    {/* <!-- //contact map --> */}

    {/* <!--/contact--> */}
    <section className="w3l-contact-main w3l-contact-info py-5" id="contact">
        <div className="midd-w3 py-md-5">
            <div className="container">
                <div className="row contact-infos pt-lg-4">
                    <div className="col-lg-4 col-md-6 pe-lg-5">
                        <div className="single-contact-infos">
                            <div className="icon-box"> <span className="fas fa-map-marked-alt"></span></div>
                            <div className="text-box">
                                <h3 className="mb-2">Location</h3>
                                <p>FarmTronix, 343, #21 Honey 1st street, Mizoram - 502049.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-md-0 mt-4">
                        <div className="single-contact-infos">
                            <div className="icon-box"> <span className="fas fa-envelope-open-text"></span></div>
                            <div className="text-box">
                                <h3 className="mb-2">Phone Numbers</h3>
                                <p><a href="tel:+12 403-11-22-69">+12 403-11-22-69</a></p>
                                <p><a href="tel:+12 304-11-22-79">+12 304-11-22-79</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-lg-0 mt-4">
                        <div className="single-contact-infos">
                            <div className="icon-box"> <span className="fas fa-blender-phone"></span></div>
                            <div className="text-box">
                                <h3 className="mb-2">Emails</h3>
                                <p> <a href="mailto:company@gmail.com">farmtronix@gmail.com</a></p>
                                <p> <a href="mailto:support@gmail.com">support@gmail.com</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!--//contact--> */}

    </div>
    <Footer/>
    </>
  )
}
