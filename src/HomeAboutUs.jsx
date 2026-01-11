import {React, useEffect} from "react";

const HomeAboutUs = () => {
  return (
    <div class="container-fluid overflow-hidden py-5 px-lg-0">
    <div class="container about py-5 px-lg-0">
        <div class="row g-5 mx-lg-0">
            <div class="col-lg-6 ps-lg-0 wow fadeInLeft" data-wow-delay="0.1s" style={{minHeight:"400px"}}>
                <div class="position-relative h-100">
                    <img class="position-absolute img-fluid w-100 home-about-us-logo" src="img/CHS_LOGO.png" style={{objectFit: "cover"}} alt=""/>
                </div>
            </div>
            <div class="col-lg-6 about-text wow fadeInUp" data-wow-delay="0.3s">
                <h6 class="text-secondary text-uppercase mb-3">About Us</h6>
                <h1 class="mb-5">Integrated Logistics & Warehousing Solutions</h1>
                <p>CHS Group delivers reliable, end-to-end operational solutions through its specialized divisions—CHS Logistics and CHS Warehousing.We help businesses move, store, and manage goods efficiently while maintaining visibility, control, and reliability across every stage of operations.</p>
                <div class="row g-4 mb-5">
                    <div class="col-sm-6 wow fadeIn" data-wow-delay="0.5s">
                        <i class="fa fa-shipping-fast fa-3x text-primary mb-3"></i>
                        <h5>CHS Logistics</h5>
                        <p class="m-0">Efficient transportation and logistics solutions designed to ensure timely, secure, and cost-effective movement of goods.</p>
                    </div>
                    <div class="col-sm-6 wow fadeIn" data-wow-delay="0.7s">
                        <i class="fa fa-warehouse fa-3x text-primary mb-3"></i>
                        <h5>CHS Warehousing</h5>
                        <p class="m-0">Secure, scalable warehousing solutions that support organized storage, inventory control, and smooth distribution.</p>
                    </div>
                </div>
                <a href="/about" class="btn btn-primary py-3 px-5">Explore More</a>
            </div>
        </div>
    </div>
</div>
  )}

export default HomeAboutUs;