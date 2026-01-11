import {React, useEffect} from "react";

const AboutUs = () => {
    useEffect(() => {
        // Ensure jQuery is available and the DOM is fully rendered
        const $ = window.jQuery;
        if ($) {
            $(".project-carousel").owlCarousel({
                autoplay: true,
                smartSpeed: 1000,
                margin: 25,
                loop: true,
                center: true,
                dots: false,
                nav: true,
                navText : [
                    '<i class="bi bi-chevron-left"></i>',
                    '<i class="bi bi-chevron-right"></i>'
                ],
                responsive: {
                    0:{
                        items:1
                    },
                    576:{
                        items:1
                    },
                    768:{
                        items:1
                    }
                }
            });
        }
      }, []);
  return (
    <div className="aboutus">
        <div class="container-fluid page-header-aboutus py-5" style={{marginBottom: "6rem"}}>
            <div class="container py-5">
                <h1 class="display-3 text-white mb-3 animated slideInDown">About Us</h1>
            </div>
        </div>

        <div class="container-fluid about py-5" style={{backgroundColor:"#F8F8F8"}}>
            <div class="container py-5">
                <div class="row g-5">
                    <div class="col-lg-7 wow fadeInLeft" data-wow-delay="0.2s">
                        <div class="h-100">
                            <h4 class="text-primary">About Us</h4>
                            <h1 class="display-4 mb-4">Providing End-to-End Solutions</h1>
                            <div class="row g-4 mb-4">
                                <div class="col-md-6">
                                    <a href="#" class="d-flex">
                                        <span class="fas fa-truck fa-3x me-3"></span>
                                        <h4 class="mb-0">Logistics</h4>
                                    </a>
                                </div>
                                <div class="col-md-6">
                                    <a href="#" class="d-flex">
                                        <span class="fas fa-warehouse fa-3x me-3"></span>
                                        <h4 class="mb-0">Warehousing</h4>
                                    </a>
                                </div>
                            </div>
                            <p class="mb-4">CHS Group is a  well established and dynamic Canadian company based in the (GTA) Greater Toronto Area. With access to state of the art supply chain infrastructure, storage and warehousing facilities, transportation systems, modern equipments and trained manpower throughout Canada and the USA, CHS Group is able to provide customized, efficient, and yet economical Logistics services to our customers.
                            </p>
                            <div class="text-dark mb-4">
                                <p class="fs-5"><span class="fa fa-check text-primary me-2"></span>Logistics solutions for your business.</p>
                                <p class="fs-5"><span class="fa fa-check text-primary me-2"></span>Safe, reliable, on-time transportation.</p>
                                <p class="fs-5"><span class="fa fa-check text-primary me-2"></span>Secure storage with efficient inventory management.</p>
                                <p class="fs-5"><span class="fa fa-check text-primary me-2"></span>Optimized supply chain solutions.</p>
                            </div>
                            <a class="btn btn-primary py-3 px-4 px-md-5 ms-2" href="/contact">Contact us</a>
                        </div>
                    </div>
                    <div class="col-lg-5 wow fadeInRight" data-wow-delay="0.2s">
                        <div class="position-relative h-100">
                            <img src="img/warehouse-entrance.jpg" class="img-fluid w-100 h-100" style={{objectFit: "cover"}} alt="" />
                            <div class="bg-white">
                                <div class="position-absolute pt-3 bg-white" style={{width: "50%", left: "0", bottom: "0"}}>
                                    <div class="bg-primary p-4">
                                        <h4 class="text-white display-2 mb-0">25+</h4>
                                        <p class="text-white fs-5 mb-0">years of experience</p>
                                    </div>
                                </div>
                                <div class="position-absolute p-3 bg-white pb-0 pe-0" style={{width: "50%", right: "0", bottom: "0"}}>
                                    <img src="img/chs-distribution.jpg" class="img-fluid" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-xxl py-5">
        <div class="container">
            <div class="row g-4 align-items-end mb-4">
                <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <img class="img-fluid rounded-2" src="img/about-warehouse.jpg" />
                </div>
                <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                    <h1 class="display-5 mb-4">We help our clients optimize distribution operations through smart, reliable solutions.</h1>
                    <p class="mb-4">We operate under the CHG Group, delivering fully integrated, end-to-end solutions tailored to business needs. Through our two specialized companies <strong>CHS Logistics</strong> and <strong>CHS Warehousing </strong> , we manage transportation, storage, and supply chain operations seamlessly. Together, we provide a unified approach that improves efficiency, reliability, and operational performance. Some of the biggest companies in North America trust CHS group for their mission critical, time sensitive logistics and warehousing needs.</p>
                    <div class="border rounded-2 p-4">
                        <nav>
                            <div class="nav nav-tabs mb-3" id="nav-tab" role="tablist">
                                <button class="nav-link fw-semi-bold active" id="nav-story-tab" data-bs-toggle="tab" data-bs-target="#nav-story" type="button" role="tab" aria-controls="nav-story" aria-selected="true">CHS Logistics</button>
                                <button class="nav-link fw-semi-bold" id="nav-mission-tab" data-bs-toggle="tab" data-bs-target="#nav-mission" type="button" role="tab" aria-controls="nav-mission" aria-selected="false">CHS Warehouse</button>
                            </div>
                        </nav>
                        <div class="tab-content" id="nav-tabContent">
                            <div class="tab-pane fade show active" id="nav-story" role="tabpanel" aria-labelledby="nav-story-tab">
                                <p>CHS Logistics delivers dependable logistics and transportation solutions that help businesses move goods efficiently and with confidence.We specialize in coordinating freight movement across regional and cross-border networks, ensuring reliability, visibility, and timely delivery.Our experienced team manages complex logistics requirements while focusing on cost efficiency, risk reduction, and operational continuity.By taking a strategic approach, we help clients streamline workflows and maintain control over their logistics processes.</p>
                                <p class="mb-0"><strong>What we do :</strong>
                                    <br/>
                                    <div style={{marginLeft:"10px"}}>
                                        <li>Freight transportation and coordination</li>
                                        <li>Cross-border and regional logistics support</li>
                                        <li>Full truckload (FTL) and less-than-truckload (LTL) services</li>
                                        <li>Customized logistics solutions</li>
                                        <li>End-to-end delivery management</li>
                                        <li>Route planning and delivery optimization</li>
                                        <li>Dedicated support for complex logistics requirements</li>
                                    </div>
                                </p>
                            </div>
                            <div class="tab-pane fade" id="nav-mission" role="tabpanel" aria-labelledby="nav-mission-tab">
                                <p>CHS Warehousing provides secure, scalable warehousing solutions designed to support efficient inventory and distribution operations. Our facilities enable organized storage, accurate inventory handling, and smooth order processing. We work closely with clients to align warehousing services with their operational goals, improving efficiency and turnaround times. Whether supporting short-term storage or long-term distribution needs, we offer flexibility that grows with your business.</p>
                                <p class="mb-0"><strong>What we do :</strong>
                                    <br/>
                                    <div style={{marginLeft:"10px"}}>
                                        <li>Short- and long-term storage solutions</li>
                                        <li>Inventory management and control</li>
                                        <li>Pick, pack, and fulfillment services</li>
                                        <li>Cross-docking and distribution support</li>
                                        <li>Customized warehousing solutions</li>
                                        <li>Secure handling and organized storage processes</li>
                                        <li>Flexible space and operational support as your needs grow</li>
                                    </div>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border rounded p-4 wow fadeInUp" data-wow-delay="0.1s">
                <div class="row g-4">
                    <div class="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                        <div class="h-100">
                            <div class="d-flex">
                                <div class="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                                    <i class="fa fa-times text-white"></i>
                                </div>
                                <div class="ps-3">
                                    <h4>No Hidden Cost</h4>
                                    <span>Transparent pricing with no surprises, ensuring clear and predictable costs</span>
                                </div>
                                <div class="border-end d-none d-lg-block"></div>
                            </div>
                            <div class="border-bottom mt-4 d-block d-lg-none"></div>
                        </div>
                    </div>
                    <div class="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                        <div class="h-100">
                            <div class="d-flex">
                                <div class="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                                    <i class="fa fa-users text-white"></i>
                                </div>
                                <div class="ps-3">
                                    <h4>Dedicated Team</h4>
                                    <span>Experienced professionals managing your logistics and warehousing.</span>
                                </div>
                                <div class="border-end d-none d-lg-block"></div>
                            </div>
                            <div class="border-bottom mt-4 d-block d-lg-none"></div>
                        </div>
                    </div>
                    <div class="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                        <div class="h-100">
                            <div class="d-flex">
                                <div class="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                                    <i class="fa fa-phone text-white"></i>
                                </div>
                                <div class="ps-3">
                                    <h4>24/7 Available</h4>
                                    <span>Reliable support available around the clock to keep your operations running smoothly.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container-fluid team py-5">
            <div class="container py-5">
                <div class="d-flex flex-column mx-auto text-center mb-5 wow fadeInUp" data-wow-delay="0.2s" style={{maxWidth: "800px"}}>
                    <h4 class="text-primary">Our Team</h4>
                    <h1 class="display-4 mb-4">CHS Group Team</h1>
                    <p class="mb-0">Our team consists of experienced professionals dedicated to delivering reliable logistics and warehousing solutions. With industry expertise and a client-focused approach, we work closely with you to manage operations efficiently, solve challenges, and support your business goals from start to finish
                    </p>
                </div>
                <div class="owl-carousel project-carousel wow fadeInUp" data-wow-delay="0.3s">
                <div class="project-item pe-5 pb-5">
                    <div class="project-img mb-3">
                        <img class="img-fluid rounded" src="img/team1.jpeg" alt="" />
                        <a href=""><i class="fa fa-link fa-3x text-primary"></i></a>
                    </div>
                </div>
                <div class="project-item pe-5 pb-5">
                    <div class="project-img mb-3">
                        <img class="img-fluid rounded" src="img/team2.jpeg" alt="" />
                        <a href=""><i class="fa fa-link fa-3x text-primary"></i></a>
                    </div>
                </div>
                <div class="project-item pe-5 pb-5">
                    <div class="project-img mb-3">
                        <img class="img-fluid rounded" src="img/team3.jpeg" alt="" />
                        <a href=""><i class="fa fa-link fa-3x text-primary"></i></a>
                    </div>
                </div>
            </div>
            </div>
         </div>
        </div>
    </div>


    </div>
  )}

export default AboutUs;