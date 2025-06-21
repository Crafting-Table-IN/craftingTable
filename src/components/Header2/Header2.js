import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo/logo-white.svg";
import logo2 from "../../images/logo/logo-black02.svg";
import MobileMenu from "../MobileMenu/MobileMenu";

const Header2 = (props) => {
  const [mobailActive, setMobailState] = useState(false);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div
      id="xb-header-area"
      className="header-area header-style-one header-transparent"
    >
      <div
        className={`xb-header stricky  ${
          isSticky ? "stricked-menu stricky-fixed" : ""
        }`}
      >
        <div className="container-fluid">
          <div className="header__wrap pd-70 ul_li_between">
            <div className="header-logo">
              <Link onClick={ClickHandler} to="/" className="logo01">
                <img src={logo} alt="" />
              </Link>
              <Link onClick={ClickHandler} to="/" className="logo02">
                <img src={logo2} alt="" />
              </Link>
            </div>
            <div className="main-menu__wrap ul_li navbar navbar-expand-xl">
              <nav className="main-menu collapse navbar-collapse">
                <ul>
                  <li>
                    <Link onClick={ClickHandler} to="/">
                      <span>Home</span>
                    </Link>
                  </li>
                  <li>
                    <a onClick={ClickHandler} href="#company">
                      <span>company</span>
                    </a>
                  </li>
                  <li>
                    <a onClick={ClickHandler} href="#services">
                      <span>Services</span>
                    </a>
                  </li>
                  <li>
                    <a onClick={ClickHandler} href="#casestudy">
                      <span>Casestudy</span>
                    </a>
                  </li>
                  <li>
                    <a onClick={ClickHandler} href="#process">
                      <span>Workflow</span>
                    </a>
                  </li>
                  <li>
                    <a onClick={ClickHandler} href="#team">
                      <span>Team</span>
                    </a>
                  </li>
                  <li>
                    <a onClick={ClickHandler} href="#contact">
                      <span>Contact</span>
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="xb-header-wrap">
                <div
                  className={`xb-header-menu ${mobailActive ? "active" : ""}`}
                >
                  <div className="xb-header-menu-scroll lenis lenis-smooth">
                    <div
                      className="xb-menu-close xb-hide-xl xb-close"
                      onClick={() => setMobailState(!mobailActive)}
                    ></div>
                    <div className="xb-logo-mobile xb-hide-xl">
                      <Link onClick={ClickHandler} to="/" rel="home">
                        <img src="assets/img/logo/logo-black.svg" alt="" />
                      </Link>
                    </div>
                    <div className="xb-header-mobile-search xb-hide-xl">
                      <form role="search" onSubmit={SubmitHandler}>
                        <input
                          type="text"
                          placeholder="Search..."
                          name="s"
                          className="search-field"
                        />
                        <button className="search-submit" type="submit">
                          <i className="far fa-search"></i>
                        </button>
                      </form>
                    </div>
                    <nav className="xb-header-nav">
                      <MobileMenu />
                    </nav>
                  </div>
                </div>
                <div className="xb-header-menu-backdrop"></div>
              </div>
            </div>
            <div className="header-bar-mobile side-menu d-xl-none">
              <button
                className="xb-nav-mobile"
                onClick={() => setMobailState(!mobailActive)}
              >
                <i className="far fa-bars"></i>
              </button>
            </div>
            <div className="header-contact d-none d-md-block">
              <a
                onClick={ClickHandler}
                href="#contact"
                className="thm-btn thm-btn--header btn-effect_1"
              >
                Let’s talk
                <span>
                  <svg
                    width="27"
                    height="23"
                    viewBox="0 0 27 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.9036 0H8.09835C3.6325 0 0 3.63251 0 8.09835V10.2235C0 14.6883 3.6325 18.3208 8.09738 18.3208H8.41206L7.88759 21.1734C7.806 21.6202 8.0022 22.065 8.38876 22.3059C8.56844 22.4176 8.76852 22.473 8.96957 22.473C9.20073 22.473 9.43091 22.3992 9.62614 22.2535L14.8884 18.3218H18.9026C23.3675 18.3218 27 14.6893 27 10.2244V8.09835C27.001 3.63251 23.3685 0 18.9036 0ZM25.2527 10.2225C25.2527 13.7239 22.404 16.5726 18.9026 16.5726H14.598C14.4096 16.5726 14.226 16.6338 14.0745 16.7464L9.90683 19.8603L10.3216 17.6041C10.3682 17.3486 10.2992 17.0864 10.1331 16.8863C9.96705 16.6872 9.72132 16.5716 9.462 16.5716H8.09738C4.59599 16.5716 1.74729 13.7229 1.74729 10.2215V8.09835C1.74729 4.59696 4.59599 1.74826 8.09738 1.74826H18.9026C22.404 1.74826 25.2527 4.59696 25.2527 8.09835V10.2225Z"
                      fill="#D44A00"
                    />
                    <path
                      d="M8.39173 7.75342C7.61473 7.75342 6.98535 8.38279 6.98535 9.1598C6.98535 9.93681 7.61473 10.5662 8.39173 10.5662C9.16874 10.5662 9.79811 9.93681 9.79811 9.1598C9.79714 8.38279 9.16777 7.75342 8.39173 7.75342Z"
                      fill="#D44A00"
                    />
                    <path
                      d="M13.5006 7.75342C12.7236 7.75342 12.0942 8.38279 12.0942 9.1598C12.0942 9.93681 12.7236 10.5662 13.5006 10.5662C14.2776 10.5662 14.907 9.93681 14.907 9.1598C14.907 8.38279 14.2776 7.75342 13.5006 7.75342Z"
                      fill="#D44A00"
                    />
                    <path
                      d="M18.6095 7.75342C17.8325 7.75342 17.2031 8.38279 17.2031 9.1598C17.2031 9.93681 17.8325 10.5662 18.6095 10.5662C19.3865 10.5662 20.0159 9.93681 20.0159 9.1598C20.0159 8.38279 19.3865 7.75342 18.6095 7.75342Z"
                      fill="#D44A00"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header2;
