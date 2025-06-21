import React from 'react';
import { Fade } from "react-awesome-reveal";
import icon1 from '../../images/icon/check-mark.png';
import icon2 from '../../images/icon/arrow-black.png';
import icon3 from '../../images/hero/mobile-sms.png';
import hImg1 from '../../images/hero/hero-img06.png';
import hImg2 from '../../images/hero/hero-img05.png';

import { Link } from 'react-router-dom';

const ClickHandler = () => {
    window.scrollTo(10, 0);
};

const Hero6 = () => {
    return (
        <section className="hero hero-style-four pos-rel pt-120">
            <div className="container">
                <div className="hero_wrap pt-90">
                    <div className="row align-items-center mt-none-30">
                        <div className="col-xl-7 col-lg-6 mt-30">
                            <div className="xb-hero">
                                <Fade direction='up' triggerOnce={'false'} duration={1000} delay={9}>
                                    <div>
                                        <h1 className="xb-item--title wow fadeInUp" data-wow-duration="600ms">AI - Powered <br /> help desk for <br /> fast support</h1>
                                    </div>
                                </Fade>
                                <Fade direction='up' triggerOnce={'false'} duration={1200} delay={9}>
                                    <div>
                                        <p className="xb-item--content wow fadeInUp" data-wow-delay="150ms" data-wow-duration="600ms">90K+ Businesses with AI-powered Innomax for Fast Support</p>
                                    </div>
                                </Fade>
                                <Fade direction='up' triggerOnce={'false'} duration={1400} delay={9}>
                                    <div>
                                        <ul className="xb-item--item list-unstyled wow fadeInUp" data-wow-delay="300ms" data-wow-duration="600ms">
                                            <li><span><img src={icon1} alt="" /></span> Human-like conversations via voice, chat & email</li>
                                            <li><span><img src={icon1} alt="" /></span> Speed and accuracy through in-house LLMs</li>
                                        </ul>
                                    </div>
                                </Fade>
                                <Fade direction='up' triggerOnce={'false'} duration={1400} delay={9}>
                                    <div>
                                        <div className="xb-btn mt-50 wow fadeInUp" data-wow-delay="450ms" data-wow-duration="600ms">
                                            <Link to="/pricing" onClick={ClickHandler} className="thm-btn thm-btn--three">Start your free trial<span><img className="img--one" src={icon2} alt="" /><img className="img--two" src={icon2} alt="" /></span></Link>
                                        </div>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 mt-30">
                            <div className="hero-right_img pos-rel">
                                <div className="hero-right-image">
                                    <div>
                                        <img className="wow fadeInLeft" data-duration=".7s" src={hImg1} alt="" />
                                    </div>
                                </div>
                                <div className="xb-img">
                                    <div>
                                        <div className="img img--one wow fadeInRight" data-duration=".7s" data-delay="1s"><img className="updown-3" src={hImg2} alt="" /></div>
                                    </div>
                                    <Fade direction='up' triggerOnce={'false'} duration={1400} delay={9}>
                                        <div>
                                            <div className="img img--two wow fadeInUp" data-duration=".7s" data-delay="2s"><img src={icon3} alt="" /></div>
                                        </div>
                                    </Fade>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero6;
