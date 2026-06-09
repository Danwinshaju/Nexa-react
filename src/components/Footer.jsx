import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer bg-black text-light pt-5 pb-3 border-top border-secondary">
      <div className="container">
        <div className="row g-5">

          {/* ABOUT */}
          <div className="col-lg-4">
            <h2 className="text-info fw-bold mb-3">
              NEXA GAMING
            </h2>

            <p className="text-secondary">
              Your ultimate gaming accessories store for premium RGB setups,
              gaming keyboards, gaming chairs, and pro esports gear.
            </p>

            {/* SOCIAL ICONS */}
            <div className="d-flex gap-3 mt-4">
              <a
                href="https://www.linkedin.com/in/danwin-shaju"
                className="btn btn-outline-info rounded-circle"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>

              <a
                href="https://www.instagram.com/danwin.shaju"
                className="btn btn-outline-info rounded-circle"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>

              <a
                href="https://www.youtube.com/@danwinshaju"
                className="btn btn-outline-info rounded-circle"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-youtube"></i>
              </a>

              <a
                href="https://discord.gg/jjj"
                className="btn btn-outline-info rounded-circle"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-discord"></i>
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="col-6 col-lg-2">
            <h5 className="fw-bold text-info mb-4">
              Quick Links
            </h5>

            <ul className="list-unstyled">
              <li className="mb-3">
                <Link
                  to="/"
                  className="text-secondary text-decoration-none"
                >
                  Home
                </Link>
              </li>

              <li className="mb-3">
                <Link
                  to="/products"
                  className="text-secondary text-decoration-none"
                >
                  Products
                </Link>
              </li>

              <li className="mb-3">
                <Link
                  to="/contact"
                  className="text-secondary text-decoration-none"
                >
                  Contact
                </Link>
              </li>

              <li className="mb-3">
                <Link
                  to="/support"
                  className="text-secondary text-decoration-none"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* CATEGORIES */}
          <div className="col-6 col-lg-3">
            <h5 className="fw-bold text-info mb-4">
              Categories
            </h5>

            <ul className="list-unstyled">
              <li className="mb-3">
                <Link
                  to="/gaming-keyboard"
                  className="text-secondary text-decoration-none"
                >
                  Gaming Keyboard
                </Link>
              </li>

              <li className="mb-3">
                <Link
                  to="/gaming-mouse"
                  className="text-secondary text-decoration-none"
                >
                  Gaming Mouse
                </Link>
              </li>

              <li className="mb-3">
                <Link
                  to="/headphones"
                  className="text-secondary text-decoration-none"
                >
                  Gaming Headset
                </Link>
              </li>

              <li className="mb-3">
                <Link
                  to="/gaming-chair"
                  className="text-secondary text-decoration-none"
                >
                  Gaming Chair
                </Link>
              </li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div className="col-lg-3">
            <h5 className="fw-bold text-info mb-4">
              Newsletter
            </h5>

            <p className="text-secondary">
              Subscribe to get the latest gaming deals and updates.
            </p>

            <form>
              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                />

                <button
                  type="submit"
                  className="btn btn-info fw-bold"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>

        </div>

        {/* FOOTER BOTTOM */}
        <hr className="border-secondary my-4" />

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <p className="text-secondary mb-2 mb-md-0">
            © 2026 NEXA GAMING | All Rights Reserved
          </p>

          <div className="d-flex gap-4">
            <a
              href=" https://github.com/nexa-gaming"
              className="text-secondary text-decoration-none"
            >
              Privacy Policy
            </a>

            <a
              href=" https://github.com/nexa-gaming"
              className="text-secondary text-decoration-none"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;