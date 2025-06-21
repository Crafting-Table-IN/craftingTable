import React from 'react'
import { Fade, Zoom } from "react-awesome-reveal";
import { Link } from 'react-router-dom';
import icon1 from '../../../images/icon/cd-fea-icon01.svg'
import icon2 from '../../../images/icon/cd-fea-icon02.svg'
import shape1 from '../../../images/shape/feature_shape1.png'
import shape2 from '../../../images/shape/feature_shape2.png'

const FeaturesSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="feature pos-rel z-1 pt-150 pb-185">
            <div className="container">
                <div className="cd-feature text-center pos-rel">
                    <Fade direction='up' triggerOnce={'false'} duration={1000} delay={9}>
                        <div>
                            <h2 className="title wow skewIn" data-wow-duration="600ms">Easily deploy your app in the cloud using modern and efficient tech stack</h2>
                        </div>
                    </Fade>
                    <Fade direction='up' triggerOnce={'false'} duration={1000} delay={9}>
                        <div>
                            <div className="xb-btn-wrapper text-center mt-50 wow fadeInUp" data-wow-duration="600ms">
                                <Link onClick={ClickHandler} to="/contact" className="xb-hover-btn xb-btn-item xb-btn-circle xb-element-parallax">
                                    <span className="xb-btn-circle-arrow">
                                        <i className="far fa-long-arrow-right"></i>
                                    </span>
                                    <span className="xb-btn-circle-text">
                                        Let’s Discuss <br /> about that
                                    </span>
                                    <i className="xb-btn-circle-dot"></i>
                                </Link>
                            </div>
                        </div>
                    </Fade>
                    <div className="xb-shape">
                        <div className="shape shape--one wow zoomIn" data-wow-duration="600ms">
                            <Zoom triggerOnce={'false'} duration={1000} delay={9}>
                                <img data-parallax='{"y":40}' src={icon1} alt="" />
                            </Zoom>
                        </div>
                        <div className="shape shape--two wow zoomIn" data-wow-delay="150ms" data-wow-duration="600ms">
                            <Zoom triggerOnce={'false'} duration={1000} delay={9}>
                                <img data-parallax='{"y":-40}' src={icon2} alt="" />
                            </Zoom>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cd-sec-shape">
                <div className="shape shape--one"><img src={shape1} alt="" /></div>
                <div className="shape shape--four"><img src={shape2} alt="" /></div>
            </div>
        </section>
    )
}

export default FeaturesSection;