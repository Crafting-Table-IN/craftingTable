import React from 'react';
import { Link } from 'react-router-dom'
import Services from '../../../api/service'
import Bg from '../../../images/bg/footer_overly.png'
import icon1 from '../../../images/footer/social-link01.png'
import icon2 from '../../../images/footer/social-link02.png'
import icon3 from '../../../images/footer/social-link03.png'
import icon4 from '../../../images/footer/social-link04.png'
import icon5 from '../../../images/footer/social-link05.png'

const ClickHandler = () => {
  window.scrollTo(10, 0);
}

const SubmitHandler = (e) => {
  e.preventDefault()
}

const Footer = (props) => {

  return (
    <footer className="footer bg_img footer-style-two footer-style-three pt-120 pos-rel" style={{ backgroundColor: "#010315", backgroundImage: `url(${Bg})` }}>
      <div className="container">
        <div className="xb-footer">
          <div className="sec-title--two sec-title--three text-center mb-40">
            <span className="sub-title"><img src="assets/img/icon/airdrop01.svg" alt="" /><span>Join the  innomax community</span></span>
          </div>
          <div className="social-link ul_li_between">
            <div className="social-item">
              <Link onClick={ClickHandler} to="/home-4" className="xb-icon"><img src={icon1} alt="" /></Link>
            </div>
            <div className="social-item">
              <Link onClick={ClickHandler} to="/home-4" className="xb-icon"><img src={icon2} alt="" /></Link>
            </div>
            <div className="social-item">
              <Link onClick={ClickHandler} to="/home-4" className="xb-icon"><img src={icon3} alt="" /></Link>
            </div>
            <div className="social-item">
              <Link onClick={ClickHandler} to="/home-4" className="xb-icon"><img src={icon4} alt="" /></Link>
            </div>
            <div className="social-item">
              <Link onClick={ClickHandler} to="/home-4" className="xb-icon"><img src={icon5} alt="" /></Link>
            </div>
          </div>
          <div className="footer-inner mt-80 mb-70 ul_li_between align-items-start">
            <div className="footer-widget">
              <span className="xb-item--sub-title">Company</span>
              <ul className="xb-item--holder list-unstyled">
                <li className="xb-item--list"><Link onClick={ClickHandler} to="/about">About us</Link></li>
                <li className="xb-item--list"><Link onClick={ClickHandler} to="/career">careers</Link></li>
                <li className="xb-item--list"><Link onClick={ClickHandler} to="/home-4">Processes</Link></li>
                <li className="xb-item--list"><Link onClick={ClickHandler} to="/contact">Contact us</Link></li>
              </ul>
            </div>
            <div className="footer-widget">
              <span className="xb-item--sub-title">Our Services</span>
              <ul className="xb-item--holder list-unstyled">
                {Services.slice(14, 18).map((service, srv) => (
                  <li key={srv} className='xb-item--list'>
                    {service.title ?
                      <Link onClick={ClickHandler} to={`/service-single/${service.slug}`}>
                        {service.title}
                      </Link>
                      : ''}
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-widget">
              <span className="xb-item--sub-title">Resources</span>
              <ul className="xb-item--holder list-unstyled">
                <li className="xb-item--list"><Link onClick={ClickHandler} to="/blog">innomax Blog</Link></li>
                <li className="xb-item--list"><Link onClick={ClickHandler} to="/casestudy">Case Studies</Link></li>
                <li className="xb-item--list"><Link onClick={ClickHandler} to="/home-4">Achievements</Link></li>
                <li className="xb-item--list"><Link onClick={ClickHandler} to="/home-4">Our industries</Link></li>
              </ul>
            </div>
            <div className="sa-newslatter footer-widget">
              <span className="xb-item--sub-title">Newsletter</span>
              <p className="xb-item--content clr-white">Sign up innomax for weekly updates.</p>
              <div className="xb-item--input-box">
                <label htmlFor="text6">Email</label>
                <form className="xb-item--input_field pos-rel" onSubmit={SubmitHandler}>
                  <input type="email" name="gmail" id="text6" />
                  <button type="submit" className="xb-item--btn"><i className="fas fa-paper-plane"></i></button>
                </form>
              </div>
            </div>
          </div>
          <div className="footer-copyright mt-70 ul_li_between">
            <p className="copyright mt-20">Copyright © 2024 <Link onClick={ClickHandler} to="/home-4">innomax</Link>. All rights reserved.</p>
            <p className="mt-20">Designed by <Link onClick={ClickHandler} to="/home-4">XpressBuddy</Link></p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;