import React from 'react'

export default function HomeStats() {
  return (
    <div>
      {/* <!---stats--> */}
    <section className="w3l-stats-main py-5" id="stats">
        <div className="container py-lg-4">
            <div className="row stats-con">
                <div className="col-lg-6 stats-content-left pe-lg-5">
                    <div className="stats_info counter_grid1 text-left">
                        <div className="icon stat-icon">
                            <span className="fas fa-users"></span>
                            <p className="counter">5233</p>
                        </div>
                        <div className="stat-icon-des text-left">

                            <h3 className="title-w3l">
                                Professional Farmers
                            </h3>
                            <p className="para-stat"> Be a 
                                Experienced, Resourceful, Ag-Savvy, Technical Farmer with Us.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 stats-content-left ps-lg-5 mt-lg-0 mt-md-5 mt-4">
                    <div className="stats_info counter_grid1 text-left">
                        <div className="icon stat-icon">
                            <span className="fas fa-tractor"></span>
                            <p className="counter">2233</p>
                        </div>
                        <div className="stat-icon-des text-left">
                            <h3 className="title-w3l">
                                Best Quality Products</h3>
                            <p className="para-stat">We have best Quality Products for our Hardworking Farmers.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!--/-stats--> */}
    </div>
  )
}
