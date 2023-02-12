import React from 'react'    
import $ from 'jquery';    
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    const navigate= useNavigate();
 // When the user scrolls down 20px from the top of the document, show the button
 setTimeout(()=>{
    themeChanger();
 }, 1000);
 const themeChanger=
 ()=>{
     const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
     console.log(toggleSwitch);
     const currentTheme = localStorage.getItem('theme');
     if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        if (currentTheme === 'dark') {
            toggleSwitch.checked = true;
        }
    }
    function myswitchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
        else { document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }    
}
toggleSwitch.addEventListener("click", myswitchTheme, false);
}

window.addEventListener('load', themeChanger );
window.onscroll = function() {
    scrollFunction()
};


function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("movetop").style.display = "block";
    } else {
        document.getElementById("movetop").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

    $(window).on("scroll", function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 80) {
            $("#site-header").addClass("nav-fixed");
        } else {
            $("#site-header").removeClass("nav-fixed");
        }
    });

    //Main navigation Active Class Add Remove
    $(".navbar-toggler").on("Click", function() {
        $("header").toggleClass("active");
    });
    $(document).on("ready", function() {
        if ($(window).width() > 991) {
            $("header").removeClass("active");
        }
        $(window).on("resize", function() {
            if ($(window).width() > 991) {
                $("header").removeClass("active");
            }
        });
    });

    $(function() {
        //  $('.navbar-toggler').addEventListener('click', ()=>{
        //      $('body').toggleClass('noscroll');
        //  })
         $('.navbar-toggler').click(function() {
            $('body').toggleClass('noscroll');
         })
    });

  return (
    <div>
       <header id="site-header" className="fixed-top">
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light stroke">
                <h1><a className="navbar-brand" href="" style={{color:"black"}}>
                        Farm<span className="sub-color">Tronix</span>
                    </a></h1>
                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon fa icon-expand fa-bars"></span>
                    <span className="navbar-toggler-icon fa icon-close fa-times"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav mx-lg-auto my-2 my-lg-0 navbar-nav-scroll">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/serv">Services</Link>
                        </li>
                       
                        <li className="nav-item">
                            <Link className="nav-link" to="/cont">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/article">Article</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/video">Videos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/product">Products</Link>
                        </li>
                    </ul>
                    <button className="btn btn-primary" onClick={()=>{
                        navigate("/register");
                    }} >Sign Up</button>
                    <button className="btn btn-primary" onClick={()=>{
                        navigate("/login")
                    }}>Log In</button>
                </div>
                {/* <!-- toggle switch for light and dark theme --> */}
                <div className="mobile-position">
                    <nav className="navigation">
                        <div className="theme-switch-wrapper">
                            <label className="theme-switch" htmlFor="checkbox">
                                <input type="checkbox" id="checkbox"/>
                                <div className="mode-container">
                                    <i className="gg-sun"></i>
                                    <i className="gg-moon"></i>
                                </div>
                            </label>
                        </div>
                    </nav>
                </div>
                {/* <!-- //toggle switch for light and dark theme --> */}
            </nav>
        </div>
    </header>
    <button onClick={topFunction} id="movetop" title="Go to top">
        <span className="fas fa-long-arrow-alt-up" aria-hidden="true"></span>
    </button>    
    </div>
  )
}
