import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation(); // Get current URL path
  const currentPath = location.pathname;

  return (
    <div className="container-fluid nav-bar p-0">
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow border-top border-5 border-primary sticky-top p-0">
        <Link
          to="/"
          className="navbar-brand bg-primary d-flex align-items-center px-4 px-lg-5"
        >
          <h2 className="mb-2 text-white">CHS GROUP</h2>
        </Link>
        <button
          type="button"
          className="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <Link
              to="/"
              className={`nav-item nav-link ${currentPath === "/" ? "active" : ""}`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`nav-item nav-link ${currentPath === "/about" ? "active" : ""}`}
            >
              About
            </Link>
            <Link
              to="/warehousing"
              className={`nav-item nav-link ${
                currentPath === "/warehousing" ? "active" : ""
              }`}
            >
              Warehousing
            </Link>
            <Link
              to="/logistics"
              className={`nav-item nav-link ${
                currentPath === "/logistics" ? "active" : ""
              }`}
            >
              Logistics
            </Link>
            <Link
              to="/contact"
              className={`nav-item nav-link ${
                currentPath === "/contact" ? "active" : ""
              }`}
            >
              Contact
            </Link>
          </div>
          <h4 className="m-0 pe-lg-5 d-none d-lg-block">
            <i className="fa fa-phone-square text-primary me-3"></i> +1 (416)
            804-6539
          </h4>
        </div>
      </nav>
    </div>
  );
};

export default Header;
