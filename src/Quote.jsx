import {React, useRef} from "react";
import axios from "axios";
import {NotificationContainer, NotificationManager} from 'react-notifications';

const Quote = () => {
    const emailRef = useRef(null);
    const fullNameRef = useRef(null);
    const phonelRef = useRef(null);
    const messageNoteRef = useRef(null);
    const serviceRef = useRef(null);

    const submitContactDetails = async (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const fullName= fullNameRef.current.value;
        const phone = phonelRef.current.value;
        const message = messageNoteRef.current.value;
        const service = serviceRef.current.value;

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
    
        // try {
        //     // Make an Axios POST request with JSON data
        //     const response = await axios.post("https://88y718whni.execute-api.ca-central-1.amazonaws.com/prod/send-email", {
        //         name:firstName+" "+lastName,
        //         email:email,
        //         phone:phone,
        //         subject:`Contact Form - ${subject}`,
        //         message:message+`\n Contact Form Submitted at ${currentTimeEdmonton}`
        //     }, {
        //       headers: {
        //         'Content-Type': 'application/json',  // Set content type to JSON
        //       }
        //     });
        //     NotificationManager.success('Success', 'Thank you for reaching out! We will be in touch with you shortly.');
        //     // Clear the input field after success
        //     emailRef.current.value = "";
        //     firstNameRef.current.value = "";
        //     lastNameRef.current.value = "";
        //     phonelRef.current.value = "";
        //     subjectRef.current.value = "";
        //     messageRef.current.value = "";
        //   } catch (error) {
        //     // Handle error
        //     NotificationManager.error('Error', 'Please try after some time.');
        //   }
      };
  return (
    <div className="container-xxl py-5">
        <div className="container py-5">
            <div className="row g-5 align-items-center">
                <div className="col-lg-5 wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="text-secondary text-uppercase mb-3">Get A Quote</h6>
                    <h1 className="mb-5">Request A Free Qoute!</h1>
                    <p className="mb-5">Tell us about your logistics or warehousing requirements, and our experienced team will assess your needs and provide a customized, no-obligation quote tailored to your operations and business goals.</p>
                    <div className="d-flex align-items-center">
                        <i className="fa fa-headphones fa-2x flex-shrink-0 bg-primary p-3 text-white"></i>
                        <div className="ps-4">
                            <h6>Call for any query!</h6>
                            <h3 className="text-primary m-0">+1 (905) 789 9875</h3>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="bg-light text-center p-5 wow fadeIn" data-wow-delay="0.5s">
                        <form onSubmit={submitContactDetails}>
                            <div className="row g-3">
                                <div className="col-12 col-sm-6">
                                    <input type="text" className="form-control border-0" placeholder="Your Name" style={{height: "55px"}} required ref={fullNameRef}/>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <input type="email" className="form-control border-0" placeholder="Your Email" style={{height: "55px"}} required ref={emailRef}/>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <input type="text" className="form-control border-0" placeholder="Your Mobile" style={{height: "55px"}} required ref={phonelRef}/>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <select className="form-select border-0" style={{height: "55px"}} required ref={serviceRef} >
                                        <option selected>Select sercice</option>
                                        <option value="1">Logistic needs</option>
                                        <option value="2">Warehousing needs</option>
                                    </select>
                                </div>
                                <div className="col-12">
                                    <textarea className="form-control border-0" placeholder="Special Note" required ref={messageNoteRef}></textarea>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary w-100 py-3" type="submit">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )}

export default Quote;