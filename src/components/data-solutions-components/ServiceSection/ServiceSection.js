import React, { useState } from 'react';
import Services from '../../../api/service'
import { Link } from "react-router-dom";
import sIcon from '../../../images/icon/flower-icon-blue.svg'
import Bg from '../../../images/bg/da-service_bg.jpg'

const ServiceSection = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  }

  const [activeIndex, setActiveIndex] = useState(2);

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };



  return (
    <section className="service pb-150 bg_img" style={{ backgroundImage: `url(${Bg})` }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="da-sec-titlte text-center mb-30">
              <span className="sub_title"><span><img src={sIcon} alt="" /></span>OUr Services</span>
              <h2 className="title">AI and data analytics services to help you become greater</h2>
              <p className="content">Turn your disparate data into a major asset – and realise the true potential of your business.</p>
            </div>
          </div>
        </div>
        <div className="da-service-wrapper">
          {Services.slice(10, 14).map((service, index) => (
            <div
              key={index}
              className={`da-service-item xb-mouseenter ${activeIndex === index ? 'active' : ''}`}
              data-wow-delay={`${index * 150}ms`}
              data-wow-duration="600ms"
              onMouseEnter={() => handleMouseEnter(index)}
            >
              <div className="xb-item--holder">
                <div className="xb-item--icon"><img src={service.sIcon} alt="" /></div>
                <h3 className="xb-item--title">{service.title}</h3>
                <span className="xb-item--arrow"><i className="fal fa-long-arrow-right"></i></span>
                <p className="xb-item--content">{service.description}</p>
              </div>
              <Link onClick={ClickHandler} to={`/service-single/${service.slug}`} className="xb-overlay"></Link>
            </div>
          ))}

        </div>
        <div className="xb-btn text-center mt-55">
          <Link onClick={ClickHandler} to="/service" className="thm-btn thm-btn--fill_icon thm-btn--data">
            <div className="xb-item--hidden"><span className="xb-item--hidden-text">Book a Discover Call</span></div>
            <div className="xb-item--holder">
              <span className="xb-item--text xb-item--text1">Book a Discover Call</span>
              <div className="xb-item--icon"><i className="fal fa-plus"></i></div>
              <span className="xb-item--text xb-item--text2">Book a Discover Call</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;