import React from "react";
import { Link } from "react-router-dom";
import flower from "../../../images/icon/flower-icon.svg";
import brand1 from "../../../images/brand/logo01.png";
import brand2 from "../../../images/brand/logo02.png";
import brand3 from "../../../images/brand/logo03.png";
import brand4 from "../../../images/brand/logo04.png";
import brand5 from "../../../images/brand/logo05.png";
import brand6 from "../../../images/brand/logo06.png";
import brand7 from "../../../images/brand/logo07.png";
import brand8 from "../../../images/brand/logo08.png";

const BrandSection = () => {
  return (
    <section
      className="brand pt-135 pb-140"
      style={{ backgroundColor: "#111112" }}
      id="services"
    >
      <div className="container">
        <div className="xb-brand-title mb-65">
          <img src={flower} alt="" />
          <span>Tech Stack's We Work With</span>
          <img src={flower} alt="" />
        </div>
        <div className="xb-brand-wrap">
          <div className="xb-brand-item">
            <div className="xb-brand-single xb-brand-hover">
              <Link to="/home-2">
                <img src={brand1} alt="Shopify" />
              </Link>
              <Link to="/home-2" className="xb-overlay"></Link>
            </div>
            <div className="xb-brand-single xb-brand-hover">
              <Link to="/home-2">
                <img src={brand2} alt="Shopify" />
              </Link>
              <Link to="/home-2" className="xb-overlay"></Link>
            </div>
          </div>
          <div className="xb-brand-item xb-brand-item--big xb-brand-hover">
            <Link to="/home-2">
              <img src={brand3} alt="Shopify" />
            </Link>
            <Link to="/home-2" className="xb-overlay"></Link>
          </div>
          <div className="xb-brand-item">
            <div className="xb-brand-single xb-brand-hover">
              <Link to="/home-2">
                <img src={brand4} alt="Shopify" />
              </Link>
              <Link to="/home-2" className="xb-overlay"></Link>
            </div>
            <div className="xb-brand-single xb-brand-hover">
              <Link to="/home-2">
                <img src={brand5} alt="Shopify" />
              </Link>
              <Link to="/home-2" className="xb-overlay"></Link>
            </div>
          </div>
          <div className="xb-brand-item xb-brand-item--big xb-brand-hover">
            <Link to="/home-2">
              <img src={brand6} alt="Shopify" />
            </Link>
            <Link to="/home-2" className="xb-overlay"></Link>
          </div>
          <div className="xb-brand-item">
            <div className="xb-brand-single xb-brand-hover">
              <Link to="/home-2">
                <img src={brand7} alt="Shopify" />
              </Link>
              <Link to="/home-2" className="xb-overlay"></Link>
            </div>
            <div className="xb-brand-single xb-brand-hover">
              <Link to="/home-2">
                <img src={brand8} alt="Shopify" />
              </Link>
              <Link to="/home-2" className="xb-overlay"></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
