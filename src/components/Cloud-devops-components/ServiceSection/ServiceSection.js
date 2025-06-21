import React from 'react';
import { Fade } from "react-awesome-reveal";
import Services from '../../../api/service';
import { Link } from 'react-router-dom';
import simg from '../../../images/shape/ser-shape01.png'
import simg2 from '../../../images/shape/ser-shape02.png'

const ServiceSection = () => {

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section className="service pos-rel z-1 pt-160 pb-150">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="sec-title--five text-center mb-35">
              <Fade direction='up' triggerOnce={'false'} duration={1000} delay={9}>
                <div>
                  <h2 className="title  wow fadeInUp" data-wow-duration="600ms">cloud & devops <br /> Services</h2>
                </div>
              </Fade>
              <Fade direction='up' triggerOnce={'false'} duration={1200} delay={9}>
                <div>
                  <p className="content  wow fadeInUp" data-wow-delay="150ms" data-wow-duration="600ms">Use our cloud DevOps consulting services to get the most value out of your cloud infrastructure and DevOps initiatives.</p>
                </div>
              </Fade>
            </div>
          </div>
        </div>
        <div className="row">
          {Services.slice(19, 28).map((service, srv) => (
            <div className="col-lg-4 col-md-6" key={srv}>
              <div className="cd-service-item">
                <div className="xb-item--icon"><img src={service.sIcon} alt="" /></div>
                <h2 className="xb-item--title">{service.title}</h2>
                <div className={`xb-item--dot ${service.bgClass}`}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <Link onClick={ClickHandler} to={`/service-single/${service.slug}`} className="xb-overlay"></Link>
              </div>
            </div>
          ))}
        </div>
        <Fade direction='up' triggerOnce={'false'} duration={1200} delay={9}>
          <div>
            <div className="xb-btn mt-70 text-center wow fadeInUp" data-wow-duration="600ms">
              <Link onClick={ClickHandler} to="/service" className="thm-btn thm-btn--devops">View More Services</Link>
            </div>
          </div>
        </Fade>
      </div>
      <div className="cd-sec-shape">
        <div className="shape shape--one"><img src={simg} alt="" /></div>
        <div className="shape shape--four"><img src={simg2} alt="" /></div>
      </div>
    </section>
  );
};

export default ServiceSection;
