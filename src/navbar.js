import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
//import navBackground from "./images/BG-Pic.jpg"
import C1 from "./images/download.png";
const Navbar = () => {
  return (
    <>
    <div className="header_main">
      <span className='header'>
        Call us today?
      </span>
      <span className='header'>
        +42 (0) 1234 543 345,
      </span>
      <span className='header'>
        +44 (0) 1234 543 345
      </span>
      <span className='header'>
        info@kenyaexports.co.uk
      </span>
    </div>
      <div className=" main">
        <nav className="navbar navbar-expand-lg navbar-light main_nav">
          <div>
            <img className="navImage" src={C1} alt="NavBar Image" />
          </div>
          <div className="container-fluid nav_bar">
            <u>
              {" "}
              <Link className="navbar-brand" to="/">
                HOME
              </Link>
            </u>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item list">
                  <Link
                    className="nav-link active list"
                    aria-current="page"
                    to="/About"
                  >
                    ABOUT
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/services"
                  >
                    SERVICES
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/marketPlace"
                  >
                    MARKETPLACE
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/testimonials"
                  >
                    TESTIMONIALS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active list"
          
                    aria-current="page"
                    to="/faqs"
                  >
                    FAQS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/contactUs"
                  >
                    CONTACT
                  </Link>
                </li>
              </ul>
              <form class="d-flex">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-success bg-danger" type="submit">
                  Search
                </button>
                <button class="btn btn-outline-success bg-light" type="submit">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/form"
                  >
                    Login
                  </Link>
                </button>
              </form>
            </div>
          </div>
        </nav>
        <div className="headerText">
          <div>
            <h1>Excellent Rates when sending<br/><span>parcels from UK to Kenya</span></h1>
          </div>
          <div>
            <p>From only $2.95vper kilo + $20 handling fee</p>
          </div>
          <div>
            <button className="textBtn"><a href="#">GET A QUOTE</a></button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
