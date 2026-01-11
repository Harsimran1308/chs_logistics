import {React, useEffect} from "react";

const HomeFeatures = () => {
  return (
    <div classNameName="container-fluid overflow-hidden py-5 px-lg-0">
        <div className="container feature py-5 px-lg-0">
            <div className="row g-5 mx-lg-0">
                <div className="col-lg-6 feature-text wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="text-secondary text-uppercase mb-3">Our Features</h6>
                    <h1 className="mb-5">A Trusted Logistics & Warehousing Partner Since 1990</h1>
                    <div className="d-flex mb-5 wow fadeInUp" data-wow-delay="0.3s">
                        <i className="fa fa-globe text-primary fa-3x flex-shrink-0"></i>
                        <div className="ms-4">
                            <h5>North America Coverage</h5>
                            <p className="mb-0">Reliable logistics and warehousing services supporting businesses across Canada and the United States</p>
                        </div>
                    </div>
                    <div className="d-flex mb-5 wow fadeIn" data-wow-delay="0.5s">
                        <i className="fa fa-shipping-fast text-primary fa-3x flex-shrink-0"></i>
                        <div className="ms-4">
                            <h5>On-Time & Secure Delivery</h5>
                            <p className="mb-0">Efficient transportation and handling processes focused on timely and safe movement of goods</p>
                        </div>
                    </div>
                    <div className="d-flex mb-0 wow fadeInUp" data-wow-delay="0.7s">
                        <i className="fa fa-headphones text-primary fa-3x flex-shrink-0"></i>
                        <div className="ms-4">
                            <h5>24/7 Customer Support</h5>
                            <p className="mb-0">Round-the-clock support to assist with shipments, storage, and operational coordination</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 pe-lg-0 wow fadeInRight" data-wow-delay="0.1s" style={{minHeight:"400px"}}>
                    <div className="position-relative h-100">
                        <img className="position-absolute img-fluid w-100 h-100" src="img/logistics-feature.jpg" style={{objectFit: "cover"}} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )}

export default HomeFeatures;