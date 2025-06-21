import React from 'react';
import Services from '../../api/service'
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import sIcon from '../../images/icon/arrow-black.svg'
import hIcon from '../../images/icon/ser-01.svg'

const ServiceSection = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="service pt-140 pb-140">
            <div className="container">
                <div className="row mt-none-30">
                    <div className="col-lg-4 mt-30">
                        <div className="service-info">
                            <div className="sec-title--two">
                                <Fade direction='down' triggerOnce={'false'} duration={1000} delay={9}>
                                    <div>
                                        <span className='sub-title'><img src={hIcon} alt="" />Feature-services</span>
                                    </div>
                                </Fade>
                                <Fade direction='up' triggerOnce={'false'} duration={1200} delay={9}>
                                    <div>
                                        <h2 className="title"> Growth with <br /> SEO services</h2>
                                    </div>
                                </Fade>
                                <Fade direction='up' triggerOnce={'false'} duration={1400} delay={9}>
                                    <div>
                                        <p className="content">SEO services boost visibility and organic traffic, driving leads and growth.</p>
                                    </div>
                                </Fade>
                            </div>
                            <div className="xb-btn mt-50">
                                <Fade direction='up' triggerOnce={'false'} duration={1600} delay={9}>
                                    <div>
                                        <Link onClick={ClickHandler} to="/service" className="thm-btn thm-btn--aso thm-btn--aso_yellow">View more services</Link>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-30">
                        <div className="service-all_item">
                            {Services.slice(0, 3).map((service, srv) => (
                                <div className="service-box" key={srv}>
                                    {service.title ?
                                        <div className="service-item">
                                            <div className="xb-item--holder mb-85">
                                                <h3 className="xb-item--title">{service.title}</h3>
                                                <span className="xb-item--contact">{service.description}</span>
                                            </div>
                                            <div className="xb-item--icon ul_li_between">
                                                <div className="xb-item--img"><img src={service.sImg} alt="" />
                                                </div>
                                                <Link onClick={ClickHandler} to={`/service-single/${service.slug}`} className="xb-item--arrow"><img
                                                    src={sIcon} alt="" /></Link>
                                            </div>
                                            <Link onClick={ClickHandler} to={`/service-single/${service.slug}`} className="xb-overlay"></Link>
                                        </div>
                                        : ''}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-30">
                        <div className="service-all_item">
                            {Services.slice(3, 6).map((service, srv) => (
                                <div className="service-box" key={srv}>
                                    {service.title ?
                                        <div className="service-item">
                                            <div className="xb-item--holder mb-85">
                                                <h3 className="xb-item--title">{service.title}</h3>
                                                <span className="xb-item--contact">{service.description}</span>
                                            </div>
                                            <div className="xb-item--icon ul_li_between">
                                                <div className="xb-item--img"><img src={service.sImg} alt="" />
                                                </div>
                                                <Link onClick={ClickHandler} to={`/service-single/${service.slug}`} className="xb-item--arrow"><img
                                                    src={sIcon} alt="" /></Link>
                                            </div>
                                            <Link onClick={ClickHandler} to={`/service-single/${service.slug}`} className="xb-overlay"></Link>
                                        </div>
                                        : ''}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServiceSection;