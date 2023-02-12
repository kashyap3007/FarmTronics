import React from 'react'


export default function Banner() {
  return (
    <div>
      <section className="banner-19">
        <div className="banner-layer">
            <div className="main-content-top">
                <div className="container">
                    <div className="main-content">
                        <div className="w3lbanner-left">
                            {/* <!-- if logo is image enable this   
                        <a className="logo" href="index.html">
                            <img src="image-path" alt="Your logo" title="Your logo" style="height:35px;" />
                        </a> --> */}
                            <h6>Welcome to FarmTronix</h6>
                            <h4>Farm, Grow, Nourish !!!</h4>

                            <a href="about.html" className="btn btn-style btn-secondary mt-md-5 mt-4">Read More</a>
                        </div>
                        <div className="w3lbanner-right">
                            <p>!!! Farming is a work of hope. You plant a seed, you nurture it, you watch it grow and then you harvest the rewards. !!!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <About/>
    <HomeStats/>
    <Testinomials/> */}
    </div>
  )
}
