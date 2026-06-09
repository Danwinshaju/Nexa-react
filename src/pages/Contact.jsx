import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center min-vh-100 g-5">
            {/* LEFT */}
            <div className="col-lg-6">
              <span className="badge bg-info text-dark px-4 py-2 rounded-pill mb-4 fs-6">
                Contact NEXA GAMING
              </span>

              <h1 className="display-2 fw-bold">
                Let’s Build Your <span className="text-info">Gaming</span> Setup
              </h1>

              <p className="text-light-emphasis fs-5 my-4">
                Need gaming accessories or support? Contact our team anytime
                and level up your setup.
              </p>

              <div className="d-flex gap-3 flex-wrap">
                <div className="info-card">
                  <span>📞 +91 8270386569</span>
                </div>

                <div className="info-card">
                  <span>✉️ danwin212@gmail.com</span>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="col-lg-6">
              <div className="contact-box p-4 rounded-4">
                <h3 className="fw-bold mb-4 text-info">Send Message</h3>

                <form>
                  <div className="mb-4">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Your Name"
                    />
                  </div>

                  <div className="mb-4">
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      placeholder="Your Email"
                    />
                  </div>

                  <div className="mb-4">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Subject"
                    />
                  </div>

                  <div className="mb-4">
                    <textarea
                      className="form-control form-control-lg"
                      rows="5"
                      placeholder="Your Message"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-info btn-lg fw-bold rounded-pill px-5 w-100"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="pb-5">
        <div className="container">
          <div className="map-box">
            <iframe
              title="location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.219338243993!2d76.95583287480797!3d11.023775789139944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859b8d0f7f3f7%3A0x3f0f6d8b8d7d4f2f!2sCoimbatore!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;