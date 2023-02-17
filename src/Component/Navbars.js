import React from "react";
import Logo from "../Assets/logo-bookmark.svg";
import Hamburger from "../Assets/icon-hamburger.svg";

const Navbars = () => {
  return (
    <div className="pageCont">
      <nav className="navbar navbar-expand-lg navBck">
        <div className="container-fluid d-flex justify-content-between">
          <a className="navbar-brand navAnchor" href="#">
            <img src={Logo} alt="" />
          </a>
          <button
            className="navbar-toggler"
            id="hamburgerr"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
            {/* <img src={Hamburger} alt="" /> */}
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbarrr">
              <li className="nav-item">
                <a className="nav-link active navItems" aria-current="page" href="#">
                  FEATURES
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link navItems" href="#">
                  PRICING
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link navItems" href="#">
                  CONTACT
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link navItems logginn" href="#">
                  LOGIN
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbars;
