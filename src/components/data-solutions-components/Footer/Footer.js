import React from 'react';
import { Link } from 'react-router-dom'
import Marquee from "react-fast-marquee";
import Bg from '../../../images/bg/da-footer.jpg'
import logo from '../../../images/logo/logo07.svg'

const ClickHandler = () => {
  window.scrollTo(10, 0);
}

const Footer = (props) => {
  return (
    <footer className="footer footer-style-six pb-80 bg_img pos-rel bg_img" style={{ backgroundImage: `url(${Bg})` }}>
      <div className="da-footer-title">
        <h2 className="title marquee-left">
          <Link onClick={ClickHandler} to="/">
            <div className="marquee">
              <div className="marquee-content">
                <Marquee speed={50} gradient={false}>
                  Book a Discover Call Now <span>Take advantage of our expert knowledge.</span>
                  Book a Discover Call Now <span>Take advantage of our expert knowledge.</span>
                </Marquee>
              </div>
            </div>
          </Link>
        </h2>
      </div>
      <div className="container">
        <div className="xb-footer">
          <div className="da-footer-inner ul_li_between mt-none-30">
            <div className="xb-item--left mt-10">
              <div className="xb-item--logo mt-20">
                <Link onClick={ClickHandler} to="/home-3"><img src={logo} alt="" /></Link>
              </div>
              <span className="xb-item--content mt-20">AI and Data Analytics solutions</span>
            </div>
            <ul className="xb-item--nav_item mt-30 list-unstyled ul_li">
              <li><Link onClick={ClickHandler} to="/about">About</Link></li>
              <li><Link onClick={ClickHandler} to="/service">Services</Link></li>
              <li><Link onClick={ClickHandler} to="/service">Case Study</Link></li>
              <li><Link onClick={ClickHandler} to="/blog">Blog</Link></li>
              <li><Link onClick={ClickHandler} to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-copyright mt-40 ul_li_between">
            <p className="copyright">©Copyright 2024 <Link onClick={ClickHandler} to="/home-3">innomax</Link>. All rights reserved.</p>
            <ul className="footer-links ul_li">
              <li><Link onClick={ClickHandler} to="/terms-conditions">Terms of Up</Link></li>
              <li><Link onClick={ClickHandler} to="/privacy-policy">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;