import React from 'react';
import './Navbar.css';
import logo from '../images/logo/nexalogo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black sticky-top shadow-lg">
      <div className="container">

        {/* LOGO */}
        <Link
          className="navbar-brand d-flex align-items-center gap-2"
          to="/"
        >
          <img
            src={logo}
            alt="NEXA GAMING Logo"
            className="logo-img"
            width="40"
          />
          <span className="textlogo">
            NEXA GAMING
          </span>
        </Link>

        {/* TOGGLER */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* NAVBAR CONTENT */}
        <div className="collapse navbar-collapse" id="navbarNav">

          {/* LINKS */}
          <ul className="navbar-nav me-auto">

            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>

            {/* DROPDOWN */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#!"
                role="button"
                data-bs-toggle="dropdown"
              >
                Categories
              </a>

              <ul className="dropdown-menu dropdown-menu-dark">

                <li>
                  <Link
                    className="dropdown-item"
                    to="/gaming-keyboard"
                  >
                    Gaming Keyboard
                  </Link>
                </li>

                <li>
                  <Link
                    className="dropdown-item"
                    to="/gaming-mouse"
                  >
                    Gaming Mouse
                  </Link>
                </li>

                <li>
                  <Link
                    className="dropdown-item"
                    to="/headphones"
                  >
                    Gaming Headset
                  </Link>
                </li>

                <li>
                  <Link
                    className="dropdown-item"
                    to="/gaming-chair"
                  >
                    Gaming Chair
                  </Link>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <Link
                    className="dropdown-item text-info"
                    to="/products"
                  >
                    View All Products
                  </Link>
                </li>

              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/support">
                Support
              </Link>
            </li>

          </ul>

          {/* SEARCH */}
          <form className="d-flex">
            <input
              className="form-control me-2 rounded-pill"
              type="search"
              placeholder="Search Products"
            />
            <button
              className="btn btn-info rounded-pill fw-bold"
              type="submit"
            >
              Search
            </button>
          </form>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;