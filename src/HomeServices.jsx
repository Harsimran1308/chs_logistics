import React, { useEffect } from "react";

const HomeServices = () => {
  // Service data in the same file
  const servicesData = {
    logistics: [
      {
        title: "Full Truckload (FTL) & Less-Than-Truckload (LTL)",
        description:
          "Flexible shipping solutions designed to move both large and small freight volumes efficiently, offering cost-effective and reliable transportation options.",
        image: "img/truck-load.jpg",
      },
      {
        title: "Freight coordination and route optimization",
        description:
          "Comprehensive planning and coordination to optimize routes, improve transit times, and maintain consistent, on-time deliveries.",
        image: "img/truck-route.jpg",
      },
      {
        title: "Cross-border and regional transportation",
        description:
          "Seamless transportation services supporting the efficient movement of goods across regional and cross-border networks with full compliance and reliability.",
        image: "img/cross-border.jpg",
      },
      {
        title: "Time-sensitive and customized shipping solutions",
        description:
          "Customized logistics solutions built to meet strict timelines and specialized delivery requirements without compromising reliability.",
        image: "img/shipping.jpg",
      },
    ],
    warehousing: [
      {
        title: "Short-term and long-term storage",
        description:
          "Secure and flexible storage solutions designed to accommodate both short-term and long-term inventory needs while maintaining organized and accessible facilities.",
        image: "img/warehouse.jpg",
      },
      {
        title: "Inventory management and control",
        description:
          "Accurate inventory tracking and control processes that improve visibility, reduce errors, and support efficient stock management.",
        image: "img/inventory.jpg",
      },
      {
        title: "Pick, pack, and fulfillment services",
        description:
          "Efficient order processing services that ensure accurate picking, careful packing, and timely fulfillment to meet customer expectations.",
        image: "img/pick-pack.jpg",
      },
      {
        title: "Cross-docking and distribution support",
        description:
          "Streamlined cross-docking and distribution services that minimize storage time and accelerate the movement of goods through the supply chain.",
        image: "img/support.jpg",
      },
    ],
  };

  // Initialize OwlCarousel
  useEffect(() => {
    const $ = window.jQuery;
    if ($) {
      $(".service-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 2000,
        center: false,
        dots: false,
        loop: true,
        margin: 25,
        nav: true,
        navText: [
          '<i class="bi bi-arrow-left"></i>',
          '<i class="bi bi-arrow-right"></i>',
        ],
        responsiveClass: true,
        responsive: {
          0: { items: 1 },
          576: { items: 1 },
          768: { items: 2 },
          992: { items: 2 },
          1200: { items: 2 },
        },
      });
    }
  }, []);

  // Component to render carousel dynamically
  const ServiceCarousel = ({ items }) => (
    <div className="service-carousel owl-carousel">
      {items.map((service, index) => (
        <div className="service-item" key={index}>
          <div className="service-img-wrapper">
            <img
              src={service.image}
              className="img-fluid service-img"
              alt={service.title}
            />
          </div>
          <div className="border border-top-0 p-4">
            <h4 className="mb-3">{service.title}</h4>
            <p className="mb-4">{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="container-fluid service py-5">
      <div className="container py-5">
        <div
          className="d-flex flex-column mx-auto text-center mb-5 wow fadeInUp"
          data-wow-delay="0.2s"
          style={{ maxWidth: "800px" }}
        >
          <h4 className="text-primary">Our Services</h4>
          <h1 className="display-4 mb-4">
            Reliable Solutions for Logistics and Warehousing
          </h1>
          <p className="mb-0">
            We provide dependable logistics and warehousing services designed
            to support efficient operations and business growth. Through CHS
            Logistics and CHS Warehousing, we deliver integrated solutions that
            move, store, and manage goods with precision and reliability.
          </p>
        </div>

        <div className="row g-5 align-items-center">
          <div className="col-lg-3 wow fadeInLeft" data-wow-delay="0.2s">
            <ul className="nav">
              <li className="nav-item me-lg-0 mb-4">
                <a
                  className="py-3 px-5 active"
                  data-bs-toggle="pill"
                  href="#ServiceTab-1"
                >
                  <span>Logistics</span>
                </a>
              </li>
              <li className="nav-item me-lg-0 mb-4">
                <a className="py-3 px-5" data-bs-toggle="pill" href="#ServiceTab-2">
                  <span>Warehousing</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-9 wow fadeInRight" data-wow-delay="0.3s">
            <div className="tab-content">
              <div id="ServiceTab-1" className="tab-pane fade show p-0 active">
                <ServiceCarousel items={servicesData.logistics} />
              </div>

              <div id="ServiceTab-2" className="tab-pane fade show p-0">
                <ServiceCarousel items={servicesData.warehousing} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Inline CSS to fix image height */}
      <style jsx>{`
        .service-img-wrapper {
          height: 220px;
          overflow: hidden;
        }
        .service-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>
    </div>
  );
};

export default HomeServices;
