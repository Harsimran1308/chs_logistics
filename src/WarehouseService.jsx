import { React, useEffect, useRef } from "react";
import axios from "axios";
import "./Contact.css";

const WarehouseService = () => {
  return (
    <div className="warehouse-page">
      <div
        class="container-fluid page-header-warehouse py-5"
        style={{ marginBottom: "6rem" }}
      >
        <div class="container py-5">
          <h1 class="display-3 text-white mb-3 animated slideInDown">
            Warehousing
          </h1>
        </div>
      </div>

      <div class="container-xxl py-5">
        <div class="container py-5">
            <div class="row g-5">
                <div class="col-lg-8 wow fadeInUp" data-wow-delay="0.1s">
                    <h1 class="display-6 mb-4">CHS Brampton Warehousing and  Distribution Facility</h1>

                    <p>​CHS warehouse located in Brampton, Ontario, west of Toronto is a full service 90000 Sq. Ft facility with close proximity to the airports, the Port of Toronto, major rail lines, the Trans-Canada Highway and  approximately 90 minutes drive from the US border.</p>
                    <p class="mb-5">Our facilities are equipped to handle a wide range of inventory requirements while maintaining accuracy, organization, and visibility.We work closely with businesses to align warehousing services with operational goals, helping reduce overhead and improve turnaround times.Whether you need short-term storage or long-term distribution support, our solutions are built to grow with your business.</p>

                    <h3 class="mb-4">Warehousing Services</h3>
                    <div class="row g-4 mb-5">
                        <div class="col-sm-6">
                            <div class="service-item d-flex p-4">
                                <div class="ms-3">
                                    <h5>Long Term, short term storage</h5>
                                    <p class="mb-0">Secure and flexible storage solutions designed for both short-term overflow and long-term inventory management, with easy access and real-time tracking.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="service-item d-flex p-4">
                                <div class="ms-3">
                                    <h5>Retail, Wholesale distribution</h5>
                                    <p class="mb-0">End-to-end distribution services for retail and wholesale businesses, ensuring accurate order fulfillment and timely delivery across regions.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="service-item d-flex p-4">
                                <div class="ms-3">
                                    <h5>Pick, pack and shipment services</h5>
                                    <p class="mb-0">Efficient pick, pack, and ship operations that reduce handling time, minimize errors, and ensure your products reach customers safely.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="service-item d-flex p-4">
                                <div class="ms-3">
                                    <h5>Transportation</h5>
                                    <p class="mb-0">Reliable transportation services with optimized routes to ensure cost-effective, on-time delivery for local and long-haul shipments.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="service-item d-flex p-4">
                                <div class="ms-3">
                                    <h5>Retail support services</h5>
                                    <p class="mb-0">Value-added retail support including labeling, kitting, inventory management, and compliance handling to support store-ready deliveries.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="service-item d-flex p-4">
                                <div class="ms-3">
                                    <h5>Custom Packaging</h5>
                                    <p class="mb-0">Tailored packaging solutions designed to protect your products, enhance branding, and meet specific customer or regulatory requirements.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="service-item d-flex p-4">
                                <div class="ms-3">
                                    <h5>Spare parts logistics</h5>
                                    <p class="mb-0">Specialized storage and fast distribution of spare parts to ensure minimal downtime and uninterrupted business operations.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="service-item d-flex p-4">
                                <div class="ms-3">
                                    <h5>Exhibition equipment, materials storage and transportations</h5>
                                    <p class="mb-0">Safe storage and timely transportation of exhibition materials and equipment, ensuring smooth setup and breakdown for events and trade shows.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="service-item d-flex p-4">
                                <div class="ms-3">
                                    <h5>Consumer products storage and distribution services</h5>
                                    <p class="mb-0">Scalable warehousing and distribution solutions for consumer goods, supporting high-volume movement and seasonal demand.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="service-item d-flex p-4">
                                <div class="ms-3">
                                    <h5>Cross docking service available</h5>
                                    <p class="mb-0">Fast cross-docking services that reduce storage time, speed up deliveries, and improve overall supply chain efficiency.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{marginBottom:"50px"}}> 
                        <h1 class="display-6 mb-4">TRADE SHOW, CONFERENCE & EXHIBITION WAREHOUSING</h1>
                        <p><strong>Storage and warehousing services for your Trade Show, Conference and Exhibition in GTA Toronto and surrounding areas</strong></p>
                        <p><strong>Are you tired of having to carry back and forth your exhibition assets to and from Toronto area? Why not choose CHS Logistics for safe storage, handling and warehousing of yoru Exhibition assets?</strong></p>
                        <p class="mb-5">CHS Logistics has handled the storage requirements of various business assets including those for the Exhibitor and Show Management companies. We also offer warehousing and storage services for companies offering workshops, conventions, conferences and trade shows. Your business can take advantage of storage of booth materials packed in cases and crates, giveaways materials packed in cartons, sinage, posters, display materials as well as flooring and special equipments specific to your industry stored in our warehouse.</p>
                        <h3>Capabilites:</h3>
                        <li>Exhibit Inventory preparation, storage and distribution.</li>
                        <li>Businesses who choose to warehouse their exhibit materials at our facility can now book space online.</li>
                        <li>Racked & Floor Storage</li>
                        <li>We have the ability to keep your shipment in a racked location or stored on the floor if the properties are crated or over-sized.</li>
                        <p class="mb-5" style={{paddingTop:"20px"}}>We have the manpower, experience and facility to take care of any special requirements your business trade show or exhibitors may need. We can store all exhibit assets from the exhibit itself to intro, giveaways, graphics, banner stands, etc. We can also provide logistics services for your exhibition materials to and fro exhibition venue and our warehouse.</p>
                    </div>
                    <h3 class="mb-4">Frequently Asked Questions?</h3>
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item wow fadeInUp" data-wow-delay="0.1s">
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    What types of warehousing services do you offer?
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                We offer short-term and long-term storage, inventory management, pick and pack services, fulfillment, and cross-docking solutions tailored to business needs.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item wow fadeInUp" data-wow-delay="0.2s">
                            <h2 class="accordion-header" id="headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Can your warehousing solutions scale as my business grows?
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                Yes, our warehousing solutions are flexible and scalable, allowing us to adjust storage space and services as your inventory and operational requirements change.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item wow fadeInUp" data-wow-delay="0.3s">
                            <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    How do you ensure inventory accuracy and security?
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                We use organized storage systems, controlled processes, and regular inventory checks to maintain accuracy, visibility, and secure handling of all stored goods.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item wow fadeInUp" data-wow-delay="0.4s">
                            <h2 class="accordion-header" id="headingFour">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    Do you handle hazmat products? 
                                </button>
                            </h2>
                            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    We do not deal with hazardous material at the moment.
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

export default WarehouseService;
