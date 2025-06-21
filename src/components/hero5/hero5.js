import React from 'react';
import Marquee from "react-fast-marquee";
import { Fade } from "react-awesome-reveal";
import hImg1 from '../../images/hero/cd-hero_img.png';
import hImg2 from '../../images/shape/arrow_shape.png';
import brand1 from '../../images/brand/cd-clutch01.png';
import brand2 from '../../images/brand/cd-aws.png';
import brand3 from '../../images/brand/cd-goodfirms.png';
import shape from '../../images/shape/cd-circle-shape.png';

import { Link } from 'react-router-dom';

const ClickHandler = () => {
    window.scrollTo(10, 0);
};

const Hero5 = () => {
    return (
        <section className="hero hero-style-five pos-rel z-1 pt-120 pb-100 overflow-hidden">
            <div className="container">
                <div className="hero_wrap pt-100">
                    <div className="row align-items-center mt-none-30">
                        <div className="col-lg-7 mt-30">
                            <div className="xb-hero">
                                <Fade direction='up' triggerOnce={'false'} duration={1000} delay={9}>
                                    <div>
                                        <h1 className="xb-item--title wow skewIn" data-wow-duration="600ms">Cloud & Devops <span>services</span></h1>
                                    </div>
                                </Fade>
                                <Fade direction='up' triggerOnce={'false'} duration={1200} delay={9}>
                                    <div>
                                        <p className="xb-item--content wow fadeInUp" data-wow-delay="150ms" data-wow-duration="600ms">seamlessly develop and deploy applications in the cloud</p>
                                    </div>
                                </Fade>
                                <Fade direction='up' triggerOnce={'false'} duration={1400} delay={9}>
                                    <div>
                                        <div className="xb-btn mt-50 wow fadeInUp" data-wow-delay="300ms" data-wow-duration="600ms">
                                            <Link to="/contact" onClick={ClickHandler} className="thm-btn thm-btn--devops">Book a free consultation</Link>
                                        </div>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                        <div className="col-lg-5 mt-30">
                            <Fade direction='right' triggerOnce={'false'} duration={1400} delay={9}>
                                <div>
                                    <div className="hero-right_img  wow fadeInRight" data-wow-delay="100ms" data-wow-duration="600ms">
                                        <img src={hImg1} alt="" />
                                        <div className="cd-hero-shape">
                                            <img className="xbzoominzoomup" src={hImg2} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
                <div className="cd-brand cd-marquee-left">
                    <Marquee speed={50} gradient={false}>
                        <div className="cd-brand-item">
                            <div className="xb-item--img">
                                <img src={brand1} alt="" />
                            </div>
                            <h3 className="xb-item--title">
                                Top Rated Cloud & DevOps Service Provider <span>(5.0 Rating)</span>
                            </h3>
                        </div>
                        <div className="cd-brand-item">
                            <div className="xb-item--img">
                                <img src={brand2} alt="" />
                            </div>
                            <h3 className="xb-item--title">
                                <span>Partner -</span> "Certified AWS Partner for Cloud Solutions<span>(5.0 Rating)</span>
                            </h3>
                        </div>
                        <div className="cd-brand-item">
                            <div className="xb-item--img">
                                <img src={brand3} alt="" />
                            </div>
                            <h3 className="xb-item--title">
                                Highly Recommended Cloud Solutions with Excellent Reviews <span>(4.89 Rating)</span>
                            </h3>
                        </div>
                    </Marquee>
                </div>
                <div className="xb-shape">
                    <div className="shape shape--one">
                        <img src={shape} alt="" />
                    </div>
                    <div className="shape shape--two"></div>
                    <div className="shape shape--three"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero5;
