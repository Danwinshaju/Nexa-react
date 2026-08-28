import React from "react";
import "./Contact.css";

const PhoneIcon = () => <svg aria-hidden="true" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.33 1.84.56 2.8.69A2 2 0 0 1 22 16.92z" /></svg>;
const MailIcon = () => <svg aria-hidden="true" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>;

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
                  <span><PhoneIcon /> +91 8270386569</span>
                </div>

                <div className="info-card">
                  <span><MailIcon /> danwin212@gmail.com</span>
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
