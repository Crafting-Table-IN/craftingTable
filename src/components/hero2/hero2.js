import React from 'react';
import { Link } from 'react-router-dom'
import { Fade } from "react-awesome-reveal";
import Bg from '../../images/bg/hero-bg01.jpg'
import Bg2 from '../../images/shape/hero-glassisom.png'
import hImg from '../../images/hero/hero-img01.png'
import shape1 from '../../images/shape/hero-shape01.png'
import shape2 from '../../images/shape/hero-shape04.png'

const Hero2 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="hero hero-style-one pos-rel bg_img" style={{ backgroundImage: `url(${Bg})` }}>
            <div className="hero-shape">
                <div className="shape shape--one bg_img" style={{ backgroundImage: `url(${Bg2})` }}></div>
                <div className="shape shape--two"><img src={shape1} alt="" /></div>
                <div className="shape shape--three"><img src={shape2} alt="" /></div>
            </div>
            <div className="container">
                <div className="hero_wrap">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="xb-hero">
                                <Fade direction='up' triggerOnce={'false'} duration={800} delay={6}>
                                    <div>
                                        <h1 className="xb-item--title wow fadeInUp" data-wow-duration="600ms">Craft Your Digital World with Crafting Table</h1>
                                    </div>
                                </Fade>
                                <Fade direction='up' triggerOnce={'false'} duration={1500} delay={9}>
                                    <div>
                                        <p className="xb-item--content wow fadeInUp" data-wow-delay="150ms" data-wow-duration="600ms">From custom software to scalable cloud solutions, we bring your vision to life with precision and reliability—no gimmicks, just results.</p>
                                    </div>
                                </Fade>
                                <Fade direction='up' triggerOnce={'false'} duration={1800} delay={9}>
                                    <div>
                                        <div className="xb-btn wow mt-60 fadeInUp" data-wow-delay="300ms" data-wow-duration="600ms">
                                            <Link onClick={ClickHandler} to="/contact" className="thm-btn thm-btn--fill_icon thm-btn--white_icon">
                                                <div className="xb-item--hidden"><span className="xb-item--hidden-text">Start Crafting</span></div>
                                                <div className="xb-item--holder">
                                                    <span className="xb-item--text">Start Crafting</span>
                                                    <div className="xb-item--icon"><i className="far fa-long-arrow-right"></i></div>
                                                    <span className="xb-item--text">Start Crafting</span>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="hero-right_img">
                                <img className="wow skewIn" data-wow-duration="800ms" src={hImg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero2;