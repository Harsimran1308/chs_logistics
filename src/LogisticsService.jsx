import { React, useEffect, useRef } from "react";
import axios from "axios";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "./Contact.css";

const LogisticsService = () => {
  return (
    <div className="logistics-page">
      <div
        class="container-fluid page-header-logistics py-5"
        style={{ marginBottom: "6rem" }}
      >
        <div class="container py-5">
          <h1 class="display-3 text-white mb-3 animated slideInDown">
            Logistics
          </h1>
        </div>
      </div>

      <div class="container-xxl py-5">
        <div class="container py-5">
            <div class="row g-5">
                <div class="col-lg-8 wow fadeInUp" data-wow-delay="0.1s">
                    <h1 class="display-6 mb-4">CHS Logistics has the experience, expertise and equipments to fulfill your company’s logistics requirements in a timely manner and within your budget.</h1>

                    <p>From the most basic to the most complex logistics services, we provide creative ideas and the smart ways to realize them. For cost effective logistics solutions where: transportation- including cross-dock may need be required, access to safe and secure storage for short or long term options is a norm and a distribution facility that can handle- local, provincial or cross border movement of goods at any time on demand – Look no further. Give us a call to discuss your company’s needs. We are committed meet or exceed your expectations.</p>

                    <h3 class="mb-4">Freight forwarding</h3>
                    <p>Freight forwarding services help businesses move goods efficiently by managing the planning, coordination, and documentation involved in transportation. We handle the movement of freight across regional and cross-border routes, ensuring shipments are routed effectively, comply with regulations, and arrive on time. By coordinating carriers, schedules, and logistics requirements, freight forwarding simplifies complex shipping processes and supports smooth, reliable delivery operations.</p>
                    <div class="row g-4 mb-5">
                        <div class="col-sm-6">
                            <div class="service-item d-flex p-4">
                                <div class="ms-3">
                                    <h5>Truckload</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="service-item d-flex p-4">
                                <div class="ms-3">
                                    <h5>Less than a load</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="service-item d-flex p-4">
                                <div class="ms-3">
                                    <h5>Canada USA</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="service-item d-flex p-4">
                                <div class="ms-3">
                                    <h5>USA to USA</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="service-item d-flex p-4">
                                <div class="ms-3">
                                    <h5>Canada to Canada</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="service-item d-flex p-4">
                                <div class="ms-3">
                                    <h5>Intermodal</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="service-item d-flex p-4">
                                <div class="ms-3">
                                    <h5>Over sized</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="service-item d-flex p-4">
                                <div class="ms-3">
                                    <h5>Hazardous material</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="service-item d-flex p-4">
                                <div class="ms-3">
                                    <h5>Expedited</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h3 class="mb-4">Frequently Asked Questions?</h3>
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item wow fadeInUp" data-wow-delay="0.1s">
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    What logistics services do you provide?
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                We offer a full range of logistics services including transportation management, freight coordination, route optimization, and time-sensitive shipping solutions.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item wow fadeInUp" data-wow-delay="0.2s">
                            <h2 class="accordion-header" id="headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Do you handle both regional and cross-border shipments?
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                Yes, we support both regional and cross-border transportation, ensuring efficient routing, compliance, and reliable delivery across North America.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item wow fadeInUp" data-wow-delay="0.3s">
                            <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    How do you ensure on-time and reliable deliveries?
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                We focus on careful planning, experienced coordination, and optimized routes to maintain consistent, on-time performance for every shipment.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div class="col-lg-4">
                    <div class="service-item p-4 mb-5 wow fadeInUp" data-wow-delay="0.1s">
                        <h3 class="mb-4">Our Services</h3>
                        <div class="d-flex flex-column">
                            <a class="btn btn-outline-light text-start text-body px-3 mb-2" href="#"><i class="fa fa-arrow-right me-2"></i>Comprehensive logistics services</a>
                            <a class="btn btn-outline-light text-start text-body px-3 mb-2" href="#"><i class="fa fa-arrow-right me-2"></i>Single item heavy freight</a>
                            <a class="btn btn-outline-light text-start text-body px-3 mb-2" href="#"><i class="fa fa-arrow-right me-2"></i>Pallet freight</a>
                            <a class="btn btn-outline-light text-start text-body px-3 mb-2" href="#"><i class="fa fa-arrow-right me-2"></i>Less than a truck load</a>
                            <a class="btn btn-outline-light text-start text-body px-3 mb-2" href="#"><i class="fa fa-arrow-right me-2"></i>Partial truck load</a>
                            <a class="btn btn-outline-light text-start text-body px-3 mb-2" href="#"><i class="fa fa-arrow-right me-2"></i>Rail freight</a>
                            <a class="btn btn-outline-light text-start text-body px-3 mb-2" href="#"><i class="fa fa-arrow-right me-2"></i>Expedite freight</a>
                            <a class="btn btn-outline-light text-start text-body px-3 mb-2" href="#"><i class="fa fa-arrow-right me-2"></i>Furniture shipping</a>
                            <a class="btn btn-outline-light text-start text-body px-3 mb-2" href="#"><i class="fa fa-arrow-right me-2"></i>Heavy freight services</a>
                            <a class="btn btn-outline-light text-start text-body px-3 mb-2" href="#"><i class="fa fa-arrow-right me-2"></i>Oversized freight</a>
                            <a class="btn btn-outline-light text-start text-body px-3 mb-2" href="#"><i class="fa fa-arrow-right me-2"></i>Full truck load</a>
                            <a class="btn btn-outline-light text-start text-body px-3 mb-2" href="#"><i class="fa fa-arrow-right me-2"></i>Refrigerated</a>
                        </div>
                    </div>

                    <div class="service-item p-4 mb-5 wow fadeInUp" data-wow-delay="0.1s">
                        <h3 class="mb-4">Brochures</h3>
                        <div class="bg-light p-4 mb-2">
                            <a href="#" class="d-flex align-items-center bg-white">
                                <div class="btn-lg-square flex-shrink-0 bg-primary text-white fs-5">
                                    <i class="fa fa-file-pdf"></i>
                                </div>
                                <p class="text-uppercase text-body mb-0 ps-3">Download.pdf</p>
                            </a>
                        </div>
                        <div class="bg-light p-4 mb-0">
                            <a href="#" class="d-flex align-items-center bg-white">
                                <div class="btn-lg-square flex-shrink-0 bg-primary text-white fs-5">
                                    <i class="fa fa-file-alt"></i>
                                </div>
                                <p class="text-uppercase text-body mb-0 ps-3">Download.txt</p>
                            </a>
                        </div>
                    </div>

                    <div class="service-item p-4 wow fadeInUp" data-wow-delay="0.1s">
                        <h3 class="mb-4">Need Any Help?</h3>
                        <div class="bg-light d-flex p-4 mb-2">
                            <div class="btn-lg-square flex-shrink-0 bg-white text-primary fs-5">
                                <i class="fa fa-envelope"></i>
                            </div>
                            <div class="ms-3">
                                <h6>Email Address</h6>
                                <p class="mb-0">admin@chslogistics.ca</p>
                            </div>
                        </div>
                        <div class="bg-light d-flex p-4 mb-2">
                            <div class="btn-lg-square flex-shrink-0 bg-white text-primary fs-5">
                                <i class="fa fa-phone-alt"></i>
                            </div>
                            <div class="ms-3">
                                <h6>Phone Number</h6>
                                <p class="mb-0">+1 (416) 804-6539</p>
                            </div>
                        </div>
                        <div class="bg-light d-flex p-4 mb-0">
                            <div class="btn-lg-square flex-shrink-0 bg-white text-primary fs-5">
                                <i class="fa fa-map-marker-alt"></i>
                            </div>
                            <div class="ms-3">
                                <h6>Location</h6>
                                <p class="mb-0">30 Driver Rd Unit 2 Brampton, ON L6T 5V2</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </div>
  );
};

export default LogisticsService;
