import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import Bg from "../../../images/bg/footer-glassisom.png";
import icon1 from "../../../images/icon/email.png";
import icon2 from "../../../images/icon/sms.svg";

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const Footer = (props) => {
  const year = new Date().getFullYear();
  const [submitStatus, setSubmitStatus] = useState(null);

  const SubmitHandler = async (e) => {
    e.preventDefault();

    // Get the email value from the input field
    const emailInput = document.getElementById("text6");
    const email = emailInput.value;

    try {
      const form = new FormData();
      form.append("entry.1193243136", email); // Assuming this is the entry ID for email

      await fetch(
        "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdlDPBmP_nIafAzsiTGlneiW9Nmm9g_rN4VuFza0oBphttEcg/formResponse",
        {
          method: "POST",
          mode: "no-cors",
          body: form,
        }
      );
      setSubmitStatus("success");

      // Clear the input field after successful submission
      emailInput.value = "";
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <footer
      className="footer pos-rel mt-80"
      style={{ backgroundColor: "#111112" }}
    >
      <div className="container">
        <div className="row pb-95">
          <div className="col-lg-4">
            <div className="xb-newslatter">
              <div className="xb-item--icon">
                <img src={icon1} alt="" />
              </div>
              <h2 className="xb-item--title">Subscribe us</h2>
              <span className="xb-item--content">
                Want to stay up to date? Sign up for innomax it services update.
              </span>
              <form className="xb-item--contact mt-35" onSubmit={SubmitHandler}>
                {submitStatus === "success" && (
                  <div className="alert alert-success mb-4">
                    Thank you for subscribing the newsletter.
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="alert alert-danger mb-4">
                    Something went wrong. Please try again later.
                  </div>
                )}
                <div className="xb-item--input_field pos-rel">
                  <input
                    type="email"
                    name="gmail"
                    id="text6"
                    placeholder="enter your email"
                    required
                  />
                  <div className="img">
                    <img src={icon2} alt="" />
                  </div>
                </div>
                <button className="xb-item--button btn-effect_2">
                  Subscribe us
                </button>
                <span className="xb-item--text">
                  Don't worry about spam. We hate it too!
                </span>
              </form>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="xb-footer is-footer ml-75">
              <ul className="footer-nav list-unstyled ul_li">
                <li>
                  <a onClick={ClickHandler} href="/">
                    Home
                  </a>
                </li>
                <li>
                  <a onClick={ClickHandler} href="#company">
                    Company
                  </a>
                </li>
                <li>
                  <a onClick={ClickHandler} href="#services">
                    Services
                  </a>
                </li>
                <li>
                  <a onClick={ClickHandler} href="#casestudy">
                    Casestudy
                  </a>
                </li>
                {/* <li><Link onClick={ClickHandler} to="/career">Career</Link><span>we’re hiring</span></li> */}
                <li>
                  <a onClick={ClickHandler} href="#process">
                    Workflow
                  </a>
                </li>
                <li>
                  <a onClick={ClickHandler} href="#team">
                    Team
                  </a>
                </li>
                <li>
                  <a onClick={ClickHandler} href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
              <div className="footer-inner mt-50 ul_li_between align-items-start">
                {/* <div className="footer-widget">
                  <span className="xb-item--sub-title">Information</span>
                  <ul className="xb-item--holder list-unstyled">
                    <li className="xb-item--list"><Link onClick={ClickHandler} to="/service">Our services</Link></li>
                    <li className="xb-item--list"><Link onClick={ClickHandler} to="/casestudy">Case studies</Link></li>
                    <li className="xb-item--list"><Link onClick={ClickHandler} to="/pricing">Our pricing</Link></li>
                    <li className="xb-item--list"><Link onClick={ClickHandler} to="/">our partners</Link></li>
                  </ul>
                </div>
                <div className="footer-widget">
                  <span className="xb-item--sub-title">Office address</span>
                  <ul className="xb-item--holder list-unstyled">
                    <li className="xb-item--list"><Link onClick={ClickHandler} to="/">Texpo gmbH</Link></li>
                    <li className="xb-item--list"><Link onClick={ClickHandler} to="/">stefan-george-ring 23</Link></li>
                    <li className="xb-item--list"><Link onClick={ClickHandler} to="/">81929 münchen</Link></li>
                    <li className="xb-item--list"><Link onClick={ClickHandler} to="/">germany</Link></li>
                  </ul>
                </div> */}
                <div className="footer-info footer-widget">
                  <span className="xb-item--sub-title">Email us</span>
                  <h4 className="xb-item--email">
                    craftingtable.dev@gmail.com
                  </h4>
                  <span className="xb-item--sub-title">call us</span>
                  <h4 className="xb-item--number">+(91) 9025496316</h4>
                </div>
              </div>
              <div className="footer-copyright mt-50 ul_li_between">
                <p className="copyright mt-20">
                  Copyright © {year}{" "}
                  <Link onClick={ClickHandler} to="/">
                    Crafting Table
                  </Link>
                  . All rights reserved.
                </p>
                {/* <ul className="footer-links ul_li mt-20">
                  <li><Link onClick={ClickHandler} to="/terms-conditions">Terms of Up</Link></li>
                  <li><Link onClick={ClickHandler} to="/privacy-policy">Privacy Policy</Link></li>
                </ul> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="footer-bottom pos-rel bg_img o-hidden"
        style={{ backgroundImage: `url(${Bg})` }}
      >
        <Link
          onClick={ClickHandler}
          to="/contact"
          className="title marquee-left"
          data-cursor-text="say hi!"
        >
          <div className="marquee">
            <div className="marquee-content">
              <Marquee speed={50} gradient={false}>
                Let’s discuss today. Are you interested? Let’s discuss today.
                Are you interested? Let’s discuss today. Are you interested?
                Let’s discuss today. Are you interested?
              </Marquee>
            </div>
          </div>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
