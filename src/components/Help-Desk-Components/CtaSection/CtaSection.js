import React from 'react'
import { Link } from 'react-router-dom'
import { Fade } from "react-awesome-reveal";
import icon from '../../../images/icon/cross-x.svg'
import icon1 from '../../../images/icon/arrow-black.png'
import cImg from '../../../images/cta/massage-text01.png'
import cImg2 from '../../../images/cta/massage-text02.png'
import line from '../../../images/cta/color-line.jpg'

const CtaSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <section className="cta pos-rel pt-130 pb-135" style={{ backgroundColor: '#f6f0e6' }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7">
                        <div className="hd-cta text-center">
                            <div className="sec-title--two sec-title--four">
                                <Fade direction='up' triggerOnce={'false'} duration={1000} delay={9}>
                                    <div>
                                        <div className="sub-title wow fadeInUp" data-wow-duration="600ms"><img src={icon} alt="" />Join the best</div>
                                    </div>
                                </Fade>
                                <Fade direction='up' triggerOnce={'false'} duration={1000} delay={9}>
                                    <div>
                                        <h2 className="title wow fadeInUp" data-wow-delay="150ms" data-wow-duration="600ms">Powering 90,000+ of the best customer experiences</h2>
                                    </div>
                                </Fade>
                            </div>
                            <Fade direction='up' triggerOnce={'false'} duration={1000} delay={9}>
                                <div>
                                    <div className="xb-btn text-center mt-45 wow fadeInUp" data-wow-delay="300ms" data-wow-duration="600ms">
                                        <Link onClick={ClickHandler} to="/pricing" className="thm-btn thm-btn--three">Start your free trial
                                            <span>
                                                <img className="img--one" src={icon1} alt="" />
                                                <img className="img--two" src={icon1} alt="" />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hd-cta_shape">
                <div>
                    <div className="shape shape--one wow fadeInLeft" data-wow-delay="000ms" data-wow-duration="600ms"><img src={cImg} alt="" /></div>
                </div>
                <div>
                    <div className="shape shape--two wow fadeInRight" data-wow-delay="100ms" data-wow-duration="600ms"><img src={cImg2} alt="" /></div>
                </div>
                <div>
                    <div className="shape shape--three"><img src={line} alt="" /></div>
                </div>
            </div>
        </section>
    )
}

export default CtaSection;