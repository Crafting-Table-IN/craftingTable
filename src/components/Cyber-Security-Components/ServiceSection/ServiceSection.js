import React from 'react';
import { Fade } from "react-awesome-reveal";
import Services from '../../../api/service'
import { Link } from "react-router-dom";
import sIcon from '../../../images/icon/ser_layer.svg'
import spIcon from '../../../images/icon/plus.svg'
import shape from '../../../images/shape/service01.png'

const ServiceSection = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  }

  return (
    <section className="service pt-170 pb-100">
      <div className="container">
        <div className="cd-service_wrap pos-rel">
          <div className="sec-title--two sec-title--three text-center mb-30">
            <Fade direction='down' triggerOnce={'false'} duration={1000} delay={9}>
              <div>
                <span className="sub-title wow fadeInDown" data-wow-duration="600ms"><img src={sIcon} alt="" /><span>Services</span></span>
              </div>
            </Fade>
            <Fade direction='down' triggerOnce={'false'} duration={1200} delay={9}>
              <div>
                <h2 className="title wow fadeInDown" data-wow-duration="600ms">Our resent SEO work</h2>
              </div>
            </Fade>
          </div>
          <div className="row">
            <div className="col-lg-4">
              {Services.slice(14, 16).map((service, index) => (
                <div className="cs-service-item mt-30" key={index}>
                  <div className="xb-item--inner">
                    <div className="xb-item--icon">
                      <img src={service.sIcon} alt="" />
                    </div>
                    <h3 className="xb-item--title">{service.title}</h3>
                    <ul className="xb-item--item list-unstyled">
                      {service.features.map((feature, featureitem) => (
                        <li key={featureitem}>
                          <img src={spIcon} alt="" /> {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="border-bg1">
                    <svg width="410" height="360" viewBox="0 0 410 360" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="410" height="360" rx="15" fill="#010315" />
                      <rect x="0.5" y="0.5" width="409" height="359" rx="14.5" fill="url(#paint0_radial_1685_8961)" stroke="#23263C" />
                      <rect opacity="0.5" x="63" width="190" height="1" fill="url(#paint1_radial_1685_896345)" />
                      <defs>
                        <radialGradient id="paint0_radial_1685_8961" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(205) scale(288.23 306.36)">
                          <stop offset="0" stopColor="white" stopOpacity="0.05" />
                          <stop offset="1" stopColor="#050014" stopOpacity="0" />
                        </radialGradient>
                        <radialGradient id="paint1_radial_1685_896345" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(158 0.5) scale(95 0.5)">
                          <stop offset="0" stopColor="white" />
                          <stop offset="1" stopColor="white" stopOpacity="0" />
                        </radialGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="border-bg2">
                    <svg width="410" height="360" viewBox="0 0 410 360" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="410" height="360" rx="15" fill="#010315" />
                      <rect x="0.5" y="0.5" width="409" height="359" rx="14.5" fill="url(#paint0_radial_1685_8951)" stroke="url(#paint1_linear_1685_895)" />
                      <rect opacity="0.5" x="63" width="190" height="1" fill="url(#paint2_radial_1685_8951)" />
                      <defs>
                        <radialGradient id="paint0_radial_1685_8952" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(205) scale(288.23 306.36)">
                          <stop offset="0" stopColor="white" stopOpacity="0.05" />
                          <stop offset="1" stopColor="#050014" stopOpacity="0" />
                        </radialGradient>
                        <linearGradient id="paint1_linear_1685_895" x1="410" y1="369.333" x2="221.101" y2="288.747" gradientUnits="userSpaceOnUse">
                          <stop offset="0" stopColor="#6780D2" />
                          <stop offset="1" stopColor="#2F3B8D" />
                        </linearGradient>
                        <radialGradient id="paint2_radial_1685_8951" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(158 0.5) scale(95 0.5)">
                          <stop offset="0" stopColor="white" />
                          <stop offset="1" stopColor="white" stopOpacity="0" />
                        </radialGradient>
                      </defs>
                    </svg>
                  </div>
                  <Link onClick={ClickHandler} to={`/service-single/${service.slug}`} className="xb-overlay xb-overlay-link"></Link>
                </div>
              ))}

            </div>
            <div className="col-lg-4">
              {Services.slice(16, 17).map((service, index) => (
                <div className="cs-service-item mt-30" key={index}>
                  <div className="xb-item--inner">
                    <div className="xb-item--icon">
                      <img src={service.sIcon} alt="" />
                    </div>
                    <h3 className="xb-item--title">{service.title}</h3>
                    <ul className="xb-item--item list-unstyled">
                      {service.features.map((feature, featureitem) => (
                        <li key={featureitem}>
                          <img src={spIcon} alt="" /> {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="border-bg1">
                    <svg width="410" height="360" viewBox="0 0 410 360" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="410" height="360" rx="15" fill="#010315" />
                      <rect x="0.5" y="0.5" width="409" height="359" rx="14.5" fill="url(#paint0_radial_1685_8961)" stroke="#23263C" />
                      <rect opacity="0.5" x="63" width="190" height="1" fill="url(#paint1_radial_1685_896345)" />
                      <defs>
                        <radialGradient id="paint0_radial_1685_8961" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(205) scale(288.23 306.36)">
                          <stop offset="0" stopColor="white" stopOpacity="0.05" />
                          <stop offset="1" stopColor="#050014" stopOpacity="0" />
                        </radialGradient>
                        <radialGradient id="paint1_radial_1685_896345" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(158 0.5) scale(95 0.5)">
                          <stop offset="0" stopColor="white" />
                          <stop offset="1" stopColor="white" stopOpacity="0" />
                        </radialGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="border-bg2">
                    <svg width="410" height="360" viewBox="0 0 410 360" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="410" height="360" rx="15" fill="#010315" />
                      <rect x="0.5" y="0.5" width="409" height="359" rx="14.5" fill="url(#paint0_radial_1685_8951)" stroke="url(#paint1_linear_1685_895)" />
                      <rect opacity="0.5" x="63" width="190" height="1" fill="url(#paint2_radial_1685_8951)" />
                      <defs>
                        <radialGradient id="paint0_radial_1685_8952" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(205) scale(288.23 306.36)">
                          <stop offset="0" stopColor="white" stopOpacity="0.05" />
                          <stop offset="1" stopColor="#050014" stopOpacity="0" />
                        </radialGradient>
                        <linearGradient id="paint1_linear_1685_895" x1="410" y1="369.333" x2="221.101" y2="288.747" gradientUnits="userSpaceOnUse">
                          <stop offset="0" stopColor="#6780D2" />
                          <stop offset="1" stopColor="#2F3B8D" />
                        </linearGradient>
                        <radialGradient id="paint2_radial_1685_8951" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(158 0.5) scale(95 0.5)">
                          <stop offset="0" stopColor="white" />
                          <stop offset="1" stopColor="white" stopOpacity="0" />
                        </radialGradient>
                      </defs>
                    </svg>
                  </div>
                  <Link onClick={ClickHandler} to={`/service-single/${service.slug}`} className="xb-overlay xb-overlay-link"></Link>
                </div>
              ))}
            </div>
            <div className="col-lg-4">
              {Services.slice(17, 19).map((service, index) => (
                <div className="cs-service-item mt-30" key={index}>
                  <div className="xb-item--inner">
                    <div className="xb-item--icon">
                      <img src={service.sIcon} alt="" />
                    </div>
                    <h3 className="xb-item--title">{service.title}</h3>
                    <ul className="xb-item--item list-unstyled">
                      {service.features.map((feature, featureitem) => (
                        <li key={featureitem}>
                          <img src={spIcon} alt="" /> {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="border-bg1">
                    <svg width="410" height="360" viewBox="0 0 410 360" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="410" height="360" rx="15" fill="#010315" />
                      <rect x="0.5" y="0.5" width="409" height="359" rx="14.5" fill="url(#paint0_radial_1685_8961)" stroke="#23263C" />
                      <rect opacity="0.5" x="63" width="190" height="1" fill="url(#paint1_radial_1685_896345)" />
                      <defs>
                        <radialGradient id="paint0_radial_1685_8961" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(205) scale(288.23 306.36)">
                          <stop offset="0" stopColor="white" stopOpacity="0.05" />
                          <stop offset="1" stopColor="#050014" stopOpacity="0" />
                        </radialGradient>
                        <radialGradient id="paint1_radial_1685_896345" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(158 0.5) scale(95 0.5)">
                          <stop offset="0" stopColor="white" />
                          <stop offset="1" stopColor="white" stopOpacity="0" />
                        </radialGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="border-bg2">
                    <svg width="410" height="360" viewBox="0 0 410 360" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="410" height="360" rx="15" fill="#010315" />
                      <rect x="0.5" y="0.5" width="409" height="359" rx="14.5" fill="url(#paint0_radial_1685_8951)" stroke="url(#paint1_linear_1685_895)" />
                      <rect opacity="0.5" x="63" width="190" height="1" fill="url(#paint2_radial_1685_8951)" />
                      <defs>
                        <radialGradient id="paint0_radial_1685_8952" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(205) scale(288.23 306.36)">
                          <stop offset="0" stopColor="white" stopOpacity="0.05" />
                          <stop offset="1" stopColor="#050014" stopOpacity="0" />
                        </radialGradient>
                        <linearGradient id="paint1_linear_1685_895" x1="410" y1="369.333" x2="221.101" y2="288.747" gradientUnits="userSpaceOnUse">
                          <stop offset="0" stopColor="#6780D2" />
                          <stop offset="1" stopColor="#2F3B8D" />
                        </linearGradient>
                        <radialGradient id="paint2_radial_1685_8951" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(158 0.5) scale(95 0.5)">
                          <stop offset="0" stopColor="white" />
                          <stop offset="1" stopColor="white" stopOpacity="0" />
                        </radialGradient>
                      </defs>
                    </svg>
                  </div>
                  <Link onClick={ClickHandler} to={`/service-single/${service.slug}`} className="xb-overlay xb-overlay-link"></Link>
                </div>
              ))}
            </div>
          </div>
          <div className="cs-ser_shape">
            <img src={shape} alt="" />
          </div>
        </div>
        <div className="xb-btn z-2 pos-rel text-center mt-55 wow fadeInUp" data-wow-duration="600ms">
          <Link onClick={ClickHandler} to="/service" className="blc-btn">
            <span>Get started now <i className="far fa-angle-right"></i></span>
            <span className="btn-shape">
              <svg width="362" height="78" viewBox="0 0 362 78" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.5 22.7183L25.5093 1.39453H337.972L361.5 22.7092V56.5515L337.98 76.6051H25.5093L0.5 55.2813V22.7183Z" fill="url(#paint0_linear_1600_9966914)" stroke="#23263C" />
                <defs>
                  <linearGradient id="paint0_linear_1600_9966914" x1="1.29285" y1="38.9973" x2="362" y2="33.9973" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#431DAB" />
                    <stop offset="1" stopColor="#AE6DFE" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <span className="btn-shape2">
              <svg width="271" height="60" viewBox="0 0 271 60" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.5 17.2308L20.1225 0.5H252.042L270.5 17.2217V43.7692L252.05 59.5H20.1225L0.5 42.7692V17.2308Z" fill="#010315" stroke="url(#paint0_linear_1742_66115)" />
                <defs>
                  <linearGradient id="paint0_linear_1742_66115" x1="271" y1="61.5556" x2="232.791" y2="-3.08978" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#6780D2" />
                    <stop offset="1" stopColor="#2F3B8D" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;