import React from 'react'
import { Link } from 'react-router-dom'
import { Fade } from "react-awesome-reveal";
import icon from '../../../images/icon/magic02.svg'
import about1 from '../../../images/about/img04.png'
import about2 from '../../../images/bg/abt-cnt_bg.png'
import about3 from '../../../images/bg/content_bg.png'
import abicon1 from '../../../images/icon/frature-icon01.png'
import abicon2 from '../../../images/icon/frature-icon02.png'
import abicon3 from '../../../images/icon/frature-icon03.png'
import abicon4 from '../../../images/icon/frature-icon04.png'

const About = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="about pt-60 pb-100 overflow-hidden">
            <div className="container">
                <div className="cs-about-wrap pos-rel">
                    <div className="row mt-none-60">
                        <div className="col-lg-6 mt-60">
                            <div className="cs-about_left">
                                <div className="sec-title--two sec-title--three">
                                    <Fade direction='up' triggerOnce={'false'} duration={1000} delay={9}>
                                        <div>
                                            <span className="sub-title wow fadeInUp" data-wow-duration="600ms"><img src={icon} alt="" /><span>About us</span></span>
                                        </div>
                                    </Fade>
                                    <Fade direction='up' triggerOnce={'false'} duration={1200} delay={9}>
                                        <div>
                                            <h2 className="title wow skewIn" data-wow-delay="150ms" data-wow-duration="600ms">Trusted Cybersecurity Solutions Over 35 years</h2>
                                        </div>
                                    </Fade>
                                    <Fade direction='up' triggerOnce={'false'} duration={1400} delay={9}>
                                        <div>
                                            <p className="content wow fadeInUp" data-wow-delay="300ms" data-wow-duration="600ms">With over 35 years of experience, innomax is a trusted leader in cybersecurity solutions, providing customized strategies to protect sensitive data. Our commitment to innovation and customer satisfaction makes us a reliable in safeguarding your digital assets.</p>
                                        </div>
                                    </Fade>
                                </div>
                                <div className="xb-btn mt-85 wow fadeInUp" data-wow-delay="450ms" data-wow-duration="600ms">
                                    <Fade direction='up' triggerOnce={'false'} duration={1400} delay={9}>
                                        <div>
                                            <Link onClick={ClickHandler} to="/about" className="blc-btn">
                                                <span>Get started now <i className="far fa-angle-right"></i></span>
                                                <span className="btn-shape">
                                                    <svg width="271" height="60" viewBox="0 0 271 60" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0.5 17.2308L20.1225 0.5H252.042L270.5 17.2217V43.7692L252.05 59.5H20.1225L0.5 42.7692V17.2308Z" fill="#010315" stroke="url(#paint0_linear_1742_66189)" />
                                                        <defs>
                                                            <linearGradient id="paint0_linear_1742_66189" x1="271" y1="61.5556" x2="232.791" y2="-3.08978" gradientUnits="userSpaceOnUse">
                                                                <stop offset="0" stopColor="#6780D2" />
                                                                <stop offset="1" stopColor="#2F3B8D" />
                                                            </linearGradient>
                                                        </defs>
                                                    </svg>
                                                </span>
                                                <span className="btn-shape2">
                                                    <svg width="362" height="78" viewBox="0 0 362 78" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0.5 22.7183L25.5093 1.39453H337.972L361.5 22.7092V56.5515L337.98 76.6051H25.5093L0.5 55.2813V22.7183Z" fill="url(#paint0_linear_1600_9966989)" stroke="#23263C" />
                                                        <defs>
                                                            <linearGradient id="paint0_linear_1600_9966989" x1="1.29285" y1="38.9973" x2="362" y2="33.9973" gradientUnits="userSpaceOnUse">
                                                                <stop offset="0" stopColor="#431DAB" />
                                                                <stop offset="1" stopColor="#AE6DFE" />
                                                            </linearGradient>
                                                        </defs>
                                                    </svg>
                                                </span>
                                            </Link>
                                        </div>
                                    </Fade>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-60">
                            <Fade direction='right' triggerOnce={'false'} duration={1400} delay={9}>
                                <div>
                                    <div className="cs-about_right wow fadeInRight" data-wow-duration="600ms">
                                        <div className="xb-img">
                                            <img src={about1} alt="" />
                                        </div>
                                        <div className="xb-content">
                                            <div className="xb-item--img">
                                                <img src={about2} alt="" />
                                            </div>
                                            <div className="xb-item--inner">
                                                <h3 className="xb-item--number">120+</h3>
                                                <span className="xb-item--content">Our honest specialist team member</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                    <div className="xb-shape">
                        <img src={about3} alt="" />
                    </div>
                </div>
                <div className="cs-feature pos-rel pt-140 z-1">
                    <div className="row mt-none-30">
                        <div className="col-lg-3 col-md-6 cs-feature-col mt-30">
                            <div className="cs-feature-item">
                                <div className="xb-item--icons">
                                    <img src={abicon1} alt="" />
                                </div>
                                <h3 className="xb-item--title">Proactive detection</h3>
                                <span className="xb-item--content">We catch threats early to keep <br /> your systems safe.</span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 cs-feature-col mt-30">
                            <div className="cs-feature-item">
                                <div className="xb-item--icons">
                                    <img src={abicon2} alt="" />
                                </div>
                                <h3 className="xb-item--title">Real-time response</h3>
                                <span className="xb-item--content">We respond instantly minimizing <br /> to protect your systems.</span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 cs-feature-col mt-30">
                            <div className="cs-feature-item">
                                <div className="xb-item--icons">
                                    <img src={abicon3} alt="" />
                                </div>
                                <h3 className="xb-item--title">AI-powered security</h3>
                                <span className="xb-item--content">We use AI to enhance and ensuring detection and automate protection.</span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 cs-feature-col mt-30">
                            <div className="cs-feature-item">
                                <div className="xb-item--icons">
                                    <img src={abicon4} alt="" />
                                </div>
                                <h3 className="xb-item--title">Risk & compliance</h3>
                                <span className="xb-item--content">We help you meet regulations and manage security risks effectively.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;