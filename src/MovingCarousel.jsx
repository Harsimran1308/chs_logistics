import {React, useEffect} from "react";

const MovingCarousel = () => {
    useEffect(() => {
        // Ensure jQuery is available and the DOM is fully rendered
        const $ = window.jQuery;
        if ($) {
           // Header carousel
            $(".header-carousel").owlCarousel({
                autoplay: false,
                smartSpeed: 1500,
                items: 1,
                dots: false,
                loop: true,
                nav : true,
                navText : [
                    '<i class="bi bi-chevron-left"></i>',
                    '<i class="bi bi-chevron-right"></i>'
                ]
            });
        }
      }, []);
  return (
    <div className="container-fluid p-0 pb-5">
        <div className="owl-carousel header-carousel position-relative mb-5">
            <div className="owl-carousel-item position-relative">
                <img className="img-fluid" src="img/carousel-1.jpg" alt="" />
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{background:"rgba(6, 3, 21, .5)"}}>
                    <div className="container">
                        <div className="row justify-content-start">
                            <div className="col-10 col-lg-8">
                                <h5 className="text-white text-uppercase mb-3 animated slideInDown">Warehousing & Logistics Solution</h5>
                                <h1 className="display-3 text-white animated slideInDown mb-4">#1 Place For Your <span className="text-primary">Logistics</span> Solution</h1>
                                <p className="fs-5 fw-medium text-white mb-4 pb-2">We provide reliable logistics solutions, ensuring efficient transportation and seamless supply chain operations across North America.</p>
                                <a href="" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                                <a href="" className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Free Quote</a>
                            </div>
                        </div>
                        </div>
                </div>
            </div>
                <div className="owl-carousel-item position-relative">
                    <img className="img-fluid" src="img/carousel-2.jpg" alt="" />
                    <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{background:"rgba(6, 3, 21, .5)"}}>
                    <div className="container">
                        <div className="row justify-content-start">
                            <div className="col-10 col-lg-8">
                                <h5 className="text-white text-uppercase mb-3 animated slideInDown">Warehousing & Logistics Solution</h5>
                                <h1 className="display-3 text-white animated slideInDown mb-4">#1 Place For Your <span className="text-primary">Warehousing</span> Solution</h1>
                                <p className="fs-5 fw-medium text-white mb-4 pb-2">Providing reliable warehousing solutions to support secure storage, inventory control, and distribution operations.</p>
                                <a href="" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                                <a href="" className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Free Quote</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )}

export default MovingCarousel;