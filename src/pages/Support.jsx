import React from 'react';
import './Support.css';

const Support = () => {
  return (
    <div>
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="container text-center">
          <span className="badge bg-info text-dark px-4 py-2 rounded-pill fs-6 mb-4">
            24/7 Customer Support
          </span>

          <h1 className="display-2 fw-bold">We're Here To Help</h1>

          <p className="text-light-emphasis fs-4 mt-4">
            Get quick solutions for your gaming products, orders, payments, and
            technical support.
          </p>
        </div>
      </section>

      {/* SUPPORT CARDS */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="support-card text-center">
                <i className="fas fa-truck-fast display-3 text-info mb-4"></i>
                <h4 className="fw-bold">Order Tracking</h4>
                <p className="text-secondary">
                  Track your orders and delivery updates easily.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="support-card text-center">
                <i className="fas fa-rotate-left display-3 text-info mb-4"></i>
                <h4 className="fw-bold">Returns</h4>
                <p className="text-secondary">
                  Easy returns and refund process for all products.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="support-card text-center">
                <i className="fas fa-headset display-3 text-info mb-4"></i>
                <h4 className="fw-bold">Tech Support</h4>
                <p className="text-secondary">
                  Solve gaming setup and technical issues instantly.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="support-card text-center">
                <i className="fas fa-credit-card display-3 text-info mb-4"></i>
                <h4 className="fw-bold">Payments</h4>
                <p className="text-secondary">
                  Payment help and secure checkout assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-5 bg-black">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-info">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="accordion accordion-flush" id="faqAccordion">
            <div className="accordion-item bg-dark text-light border-secondary">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed bg-dark text-light"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq1"
                >
                  How long does delivery take?
                </button>
              </h2>

              <div
                id="faq1"
                className="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body text-secondary">
                  Delivery usually takes 3-7 business days.
                </div>
              </div>
            </div>

            <div className="accordion-item bg-dark text-light border-secondary">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed bg-dark text-light"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq2"
                >
                  Can I return products?
                </button>
              </h2>

              <div
                id="faq2"
                className="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body text-secondary">
                  Yes, products can be returned within 7 days.
                </div>
              </div>
            </div>

            <div className="accordion-item bg-dark text-light border-secondary">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed bg-dark text-light"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq3"
                >
                  Do you provide warranty?
                </button>
              </h2>

              <div
                id="faq3"
                className="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body text-secondary">
                  Yes, all gaming products include warranty support.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SUPPORT */}
      <section className="py-5">
        <div className="container">
          <div className="support-contact-box text-center">
            <h2 className="fw-bold mb-4">Need More Help?</h2>

            <p className="text-secondary fs-5">
              Contact our support team anytime.
            </p>

            <div className="d-flex justify-content-center gap-4 flex-wrap mt-4">
              <div className="info-box">
                <i className="fas fa-phone text-info"></i>
                {" "}+91 9876543210
              </div>
    
              <div className="info-box">
                <i className="fas fa-envelope text-info"></i>
                {" "}support@nexagaming.com
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;