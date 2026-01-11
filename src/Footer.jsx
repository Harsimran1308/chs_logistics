import {React} from "react";

const Footer = () => {
  return (
    <div className="container-fluid bg-dark text-light footer pt-5 wow fadeIn" data-wow-delay="0.1s" style={{marginTop: "6rem"}}>
    <div className="container py-5">
        <div className="row g-5">
            <div className="col-lg-3 col-md-6">
                <h4 className="text-light mb-4">Address</h4>
                <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>30 Driver Rd Unit 2 Brampton, ON L6T 5V2</p>
                <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+1 (905) 789 9875</p>
                <p className="mb-2"><i className="fa fa-envelope me-3"></i>admin@chslogistics.ca</p>
            </div>
            <div className="col-lg-3 col-md-6">
                <h4 className="text-light mb-4">Services</h4>
                <a className="btn btn-link" href="">Transportation Services (FTL & LTL)</a>
                <a className="btn btn-link" href="">Warehousing & Storage Solutions</a>
                <a className="btn btn-link" href="">Inventory Management & Control</a>
                <a className="btn btn-link" href="">Cross-Border & Regional Logistics</a>
                <a className="btn btn-link" href="">Pick, Pack & Fulfillment Services</a>
            </div>
            <div className="col-lg-3 col-md-6">
                <h4 className="text-light mb-4">Quick Links</h4>
                <a className="btn btn-link" href="/about">About Us</a>
                <a className="btn btn-link" href="/contact">Contact Us</a>
                <a className="btn btn-link" href="/warehousing">Warehousing</a>
                <a className="btn btn-link" href="logistics">Logistics</a>
            </div>
            <div className="col-lg-3 col-md-6">
                <h4 className="text-light mb-4">Newsletter</h4>
                <p>Subscribe to latest update about CHS Group</p>
                <div className="position-relative mx-auto" style={{maxWidth: "400px"}}>
                    <input className="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                    <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                </div>
            </div>
        </div>
    </div>
    <div className="container">
        <div className="copyright">
            <div className="row">
                <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                    &copy; <a className="border-bottom" href="/">CHS Group</a>, All Right Reserved.
                </div>
                <div className="col-md-6 text-center text-md-end">
                <span className="text-white" style={{display:"inline-flex", marginLeft:"5px"}}>Developed By<a className="article-navigation-link" href="https://www.singhharsimran.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:"underline",marginLeft:"5px"}}>Harsimran Singh</a></span>
                </div>
            </div>
        </div>
    </div>
</div>
  )}

export default Footer;