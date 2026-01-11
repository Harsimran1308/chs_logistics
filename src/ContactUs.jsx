import {React, useEffect, useRef} from "react";
import axios from "axios";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import './Contact.css';

const ContactUs = () => {
    const emailRef = useRef(null);
    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const phonelRef = useRef(null);
    const messageRef = useRef(null);
    const subjectRef = useRef(null);

    const submitContactDetails = async (e) => {
        e.preventDefault();
        console.log(subjectRef)
        const email = emailRef.current.value;
        const firstName = firstNameRef.current.value;
        const lastName = lastNameRef.current.value;
        const phone = phonelRef.current.value;
        const message = messageRef.current.value;
        const subject = subjectRef.current.value;

        const currentTimeEdmonton = new Intl.DateTimeFormat("en-US", {
            timeZone: "America/Edmonton",
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true
          }).format(new Date());
    
        try {
            // Make an Axios POST request with JSON data
            const response = await axios.post("https://88y718whni.execute-api.ca-central-1.amazonaws.com/prod/send-email", {
                name:firstName+" "+lastName,
                email:email,
                phone:phone,
                subject:`Contact Form - ${subject}`,
                message:message+`\n Contact Form Submitted at ${currentTimeEdmonton}`
            }, {
              headers: {
                'Content-Type': 'application/json',  // Set content type to JSON
              }
            });
            NotificationManager.success('Success', 'Thank you for reaching out! We will be in touch with you shortly.');
            // Clear the input field after success
            emailRef.current.value = "";
            firstNameRef.current.value = "";
            lastNameRef.current.value = "";
            phonelRef.current.value = "";
            subjectRef.current.value = "";
            messageRef.current.value = "";
          } catch (error) {
            // Handle error
            NotificationManager.error('Error', 'Please try after some time.');
          }
      };
    useEffect(() => {
         // Ensure jQuery is available and the DOM is fully rendered
         const $ = window.jQuery;
         if ($) {
            $(".testimonial-carousel").owlCarousel({
                autoplay: true,
                smartSpeed: 1500,
                center: false,
                dots: true,
                loop: true,
                margin: 25,
                nav : false,
                navText : [
                    '<i class="fa fa-angle-right"></i>',
                    '<i class="fa fa-angle-left"></i>'
                ],
                responsiveClass: true,
                responsive: {
                    0:{
                        items:1
                    },
                    576:{
                        items:1
                    },
                    768:{
                        items:1
                    },
                    992:{
                        items:1
                    },
                    1200:{
                        items:2
                    }
                }
            });
        }
      }, []);
  return (
    <div className="ContactUs">
        <div class="container-fluid page-header-contactus py-5" style={{marginBottom: "6rem"}}>
            <div class="container py-5">
                <h1 class="display-3 text-white mb-3 animated slideInDown">Contact Us</h1>
            </div>
        </div>

        <div className="container-fluid contact overflow-hidden py-5">
                <div className="container py-5">
                    <div className="row g-5 mb-5">
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
                            <div className="sub-style">
                                <h5 className="sub-title text-primary pe-3">Quick Contact</h5>
                            </div>
                            <h1 className="display-5 mb-4">Have Questions? Don't Hesitate to Contact Us</h1>
                            <p className="mb-5">Get in touch with CHS Logistics Solutions & Warehousing to discuss your logistics and warehousing needs. Our team is ready to provide reliable, customized solutions for your business.</p>
                            <div className="d-flex border-bottom mb-4 pb-4">
                                <i className="fas fa-map-marked-alt fa-4x text-primary bg-light p-3 rounded"></i>
                                <div className="ps-3">
                                    <h5>Location</h5>
                                    <p className="text-primary">30 Driver Rd Unit 2 Brampton, ON L6T 5V2</p>
                                </div>
                            </div>
                            <div className="row g-3">
                                <div className="col-xl-6">
                                    <div className="d-flex">
                                        <i className="fas fa-tty fa-3x text-primary"></i>
                                        <div className="ps-3">
                                            <h5 className="mb-3">Quick Contact</h5>
                                            <div className="mb-3">
                                                <h6 className="mb-0">Phone:</h6>
                                                <a className="fs-5 text-primary">+1 (905) 789 9875</a>
                                            </div>
                                            <div className="mb-3">
                                                <h6 className="mb-0">Email:</h6>
                                                <a className="fs-5 text-primary">admin@chslogistics.ca</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="d-flex">
                                        <i className="fas fa-clone fa-3x text-primary"></i>
                                        <div className="ps-3">
                                            <h5 className="mb-3">Opening Hrs</h5>
                                            <div className="mb-3">
                                                <h6 className="mb-0">Mon - Friday:</h6>
                                                <a className="fs-5 text-primary">07.00 AM to 05.00 PM</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.3">
                            <div className="sub-style">
                                <h5 className="sub-title text-primary pe-3">Let’s Connect</h5>
                            </div>
                            <h1 className="display-5 mb-4">Send Your Message</h1>
                            <p className="mb-3">Send us a message, and our dedicated team will deliver reliable logistics and warehousing solutions tailored to your operations. Our logistics experts will help you find the right transportation and warehousing solutions for your business.</p>
                            <form onSubmit={submitContactDetails}>
                                <div className="row g-4">
                                    <div className="col-lg-12 col-xl-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control input-field" id="first_name" placeholder="First Name" required ref={firstNameRef}/>
                                            <label for="first_name">First Name</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-xl-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control input-field" id="last_name" placeholder="Last Name" required ref={lastNameRef}/>
                                            <label for="last_name">Last Name</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-xl-6">
                                        <div className="form-floating">
                                            <input type="phone" className="form-control input-field" id="phone" placeholder="Phone" required ref={phonelRef}/>
                                            <label for="phone">Your Phone</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-xl-6">
                                        <div className="form-floating">
                                            <input type="email" className="form-control input-field" id="email" placeholder="Email" required ref={emailRef}/>
                                            <label for="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text" className="form-control input-field" id="subject" placeholder="Subject" required ref={subjectRef}/>
                                            <label for="subject">Subject</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea className="form-control input-field" placeholder="Leave a message here" id="message" style={{height: "160px"}} required ref={messageRef}></textarea>
                                            <label for="message">Message</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3 submit-button">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div class="container-fluid overflow-hidden py-5 px-lg-0">
                        <div class="container contact-page py-5 px-lg-0">
                            <div class="row g-5 mx-lg-0">
                                <div class="col-md-6 contact-form wow fadeIn" data-wow-delay="0.1s">
                                    <h6 class="text-secondary text-uppercase">Our Office</h6>
                                    <h1 class="mb-4">Office Location</h1>
                                    <div className="office-item p-4">
                                        <div className="office-img mb-4">
                                            <img src="img/chs_office.jpg" className="img-fluid w-100 rounded" alt="" />
                                        </div>
                                        <div className="office-content d-flex flex-column">
                                            <h4 className="mb-2">Brampton</h4>
                                            <a className="text-secondary fs-5 mb-2">+1 (905) 789 9875</a>
                                            <a className="text-muted fs-5 mb-2">admin@chslogistics.ca</a>
                                            <p className="mb-0">30 Driver Rd Unit 2 Brampton, ON L6T 5V2</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 pe-lg-0 wow fadeInRight" data-wow-delay="0.1s">
                                    <div class="position-relative h-100">
                                        <iframe class="position-absolute w-100 h-100" style={{objectFit: "cover"}}
                                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d23066.989261717896!2d-79.662003!3d43.723564!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3c6d5d7589f1%3A0x5fea564fee966ebb!2sDriver%20Rd%20at%2030%20Driver%20Rd!5e0!3m2!1sen!2sus!4v1766960646003!5m2!1sen!2sus"
                                        frameborder="0" allowfullscreen="" aria-hidden="false"
                                        tabindex="0"></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="container-fluid testimonial bg-dark border-bottom border-primary py-5">
            <div class="container py-5">
                <div class="row g-5">
                    <div class="col-lg-6 col-xl-5 wow fadeInUp" data-wow-delay="0.2s">
                        <h4 class="text-primary">Testimonial</h4>
                        <h1 class="display-4 text-white mb-4">Powerfull Praise Heard From Our Customers</h1>
                        <p class="mb-4">Hear from our satisfied clients who trust us to deliver excellence every time.Their experiences speak for the quality and reliability of our services.
                        </p>
                    </div>
                    <div class="col-lg-6 col-xl-7 wow fadeInUp" data-wow-delay="0.4s">
                        <div class="owl-carousel testimonial-carousel">
                            <div class="testimonial-item">
                                <div class="testimonial-quote"><i class="fa fa-quote-right fa-2x"></i>
                                </div>
                                <div class="testimonial-inner p-4">
                                    <img src="img/testimonial_1.jpg" class="img-fluid" alt="" />
                                    <div class="ms-4">
                                        <h4>Nish Sahni</h4>
                                        <p>Spolymer Inc</p>
                                        <div class="d-flex text-primary">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="customer-text p-4">
                                    <p class="mb-0">CHS Warehousing – Brampton provides excellent service with strong attention to detail and highly competitive pricing. Their team is reliable and easy to work with, and Resham, our main point of contact, ensures smooth communication and efficient coordination. We highly recommend CHS Warehousing as a trusted and cost-effective warehousing and logistics partner.</p>
                                </div>
                            </div>
                            <div class="testimonial-item">
                                <div class="testimonial-quote"><i class="fa fa-quote-right fa-2x"></i>
                                </div>
                                <div class="testimonial-inner p-4">
                                    <img src="img/testimonial_2.jpg" class="img-fluid" alt="" />
                                    <div class="ms-4">
                                        <h4>Adrian</h4>
                                        <p>XRP Express</p>
                                        <div class="d-flex text-primary">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="customer-text p-4">
                                    <p class="mb-0">It's always a pleasure working with CHS Warehousing! The consistent performance and high productivity levels are a significant asset to the operations. The team is efficient, effective and always available to communicate.</p>
                                </div>
                            </div>
                            <div class="testimonial-item">
                                <div class="testimonial-quote"><i class="fa fa-quote-right fa-2x"></i>
                                </div>
                                <div class="testimonial-inner p-4">
                                    <img src="img/testimonial_3.jpg" class="img-fluid" alt="" />
                                    <div class="ms-4">
                                        <h4>Prabh Sandhu</h4>
                                        <p>Road Cruiser Logistics</p>
                                        <div class="d-flex text-primary">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="customer-text p-4">
                                    <p class="mb-0">CHS Warehouse and Logistics has been an exceptional partner for our storage and transportation needs. Their secure, well-maintained warehouse facilities and efficient operations give us complete confidence that our goods are handled with care and precision. The team’s professionalism, clear communication, and reliable logistics support consistently stand out. We highly recommend CHS Warehouse and Logistics as a trusted and dependable business logistics partner.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </div>
                </div>
            </div>

    </div>
  )}

export default ContactUs;