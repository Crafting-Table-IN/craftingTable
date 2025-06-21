import React from 'react';
import { Link } from 'react-router-dom'
import Marquee from "react-fast-marquee";
import shape1 from '../../../images/shape/cd-newslatter01.png'
import shape2 from '../../../images/shape/cd-newslatter02.png'
import logo from '../../../images/logo/logo05.svg'

const ClickHandler = () => {
  window.scrollTo(10, 0);
}

const SubmitHandler = (e) => {
  e.preventDefault()
}

const Footer = (props) => {

  return (
    <footer className="footer footer-style-five pt-140 pos-rel">
      <div className="container">
        <div className="xb-footer">
          <div className="cd-newslatter-wrap pos-rel">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="cd-newslatter text-center">
                  <h2 className="xb-item--title">Subscribe our newsletter</h2>
                  <p className="xb-item--content">Subscribe our newsletter for the future updates and insights</p>
                  <form className="xb-item--input_field" onSubmit={SubmitHandler}>
                    <input type="email" name="gmail" id="gmail" placeholder="infomail@gmail.com" />
                    <button type="submit" className="xb-item--button">Subscribe</button>
                  </form>
                  <div className="xb-item--privacy">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                      <label className="form-check-label" htmlFor="flexCheckChecked">
                        I agree with <Link onClick={ClickHandler} to="/home-5">Privacy Policy</Link> and <Link onClick={ClickHandler} to="/home-5">Terms</Link>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cb-shape">
              <div className="shape shape--one"><img src={shape1} alt="" /></div>
              <div className="shape shape--two"><img src={shape2} alt="" /></div>
            </div>
          </div>
          <div className="footer-inner mt-120 ul_li_between mt-none-30">
            <div className="footer-widget mt-30">
              <div className="xb-logo"><img src={logo} alt="" /></div>
              <p className="xb-content">We create award-winning  products for startups and help enterprises with digital transformation.  Our team has advanced skills and experience in developing large-scale  solutions.</p>
            </div>
            <ul className="footer-link ul_li mt-30">
              <li><span>Follow us </span></li>
              <li><Link onClick={ClickHandler} to="/home-5"><i className="fab fa-twitter"></i></Link></li>
              <li><Link onClick={ClickHandler} to="/home-5"><i className="fab fa-medium-m"></i></Link></li>
              <li><Link onClick={ClickHandler} to="/home-5"><i className="fab fa-instagram"></i></Link></li>
              <li><Link onClick={ClickHandler} to="/home-5"><i className="fab fa-linkedin-in"></i></Link></li>
            </ul>
          </div>
          <div className="footer-copyright mb-60 ul_li_between">
            <p className="copyright mb-30">Copyright © 2024 <Link onClick={ClickHandler} to="index.html">innomax</Link>. All rights reserved.</p>
            <ul className="footer-links ul_li mb-30">
              <li><Link onClick={ClickHandler} to="/terms-conditions">Terms of Up</Link></li>
              <li><Link onClick={ClickHandler} to="/privacy-policy">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom pos-rel o-hidden">
        <Link onClick={ClickHandler} to="/contact" className="title marquee-left">
          <Marquee speed={50} gradient={false}>
            Book a free consultation Book a free consultation Book a free consultation Book a free consultation
          </Marquee>
        </Link>
        <Link onClick={ClickHandler} to="/contact" className="footer-btn"><i className="far fa-long-arrow-right"></i><span>Let’s Discuss <br /> about that</span></Link>
      </div>
    </footer>
  )
}

export default Footer;