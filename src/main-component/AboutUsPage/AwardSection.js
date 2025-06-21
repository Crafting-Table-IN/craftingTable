import React from 'react';
import { Fade } from "react-awesome-reveal";
import { Link } from 'react-router-dom'
import sIcon1 from '../../images/icon/ser-01.svg'
import brand1 from '../../images/award/ap-brand01.jpg'
import brand2 from '../../images/award/ap-brand02.jpg'
import brand3 from '../../images/award/ap-brand03.jpg'
import brand4 from '../../images/award/ap-brand04.jpg'
import brand5 from '../../images/award/ap-brand05.jpg'
import brand6 from '../../images/award/ap-brand06.jpg'
import brand7 from '../../images/award/ap-brand07.jpg'
import brand8 from '../../images/award/ap-brand08.jpg'
import brand9 from '../../images/award/ap-brand09.jpg'
import brand10 from '../../images/award/ap-brand10.jpg'


const AwardSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };
    return (
        <section className="award" style={{ backgroundColor: "#f6f6f8" }}>
            <div className="container">
                <div className="row mt-none-30 align-items-center">
                    <div className="col-xl-6 col-lg-5 mt-30">
                        <div className="service-info ab-award-content pt-100">
                            <div className="sec-title--two">
                                <Fade direction='down' triggerOnce={'false'} duration={1000} delay={9}>
                                    <div>
                                        <span className="sub-title wow fadeInDown" data-wow-duration="600ms"><img src={sIcon1} alt="" />Our awards</span>
                                    </div>
                                </Fade>
                                <Fade direction='up' triggerOnce={'false'} duration={1200} delay={9}>
                                    <div>
                                        <h2 className="title wow skewIn" data-wow-delay="100ms" data-wow-duration="600ms">We've got prestigious awards for our work</h2>
                                    </div>
                                </Fade>
                                <Fade direction='up' triggerOnce={'false'} duration={1200} delay={9}>
                                    <div>
                                        <p className="content wow fadeInUp" data-wow-delay="300ms" data-wow-duration="600ms">We've receiving prestigious awards for our work is a testament to our  unwavering dedication and commitment to excellence. These accolades  reflect the tireless efforts and passion .</p>
                                    </div>
                                </Fade>
                            </div>
                            <Fade direction='up' triggerOnce={'false'} duration={1200} delay={9}>
                                <div>
                                    <div className="xb-btn mt-50 wow fadeInUp" data-wow-delay="450ms" data-wow-duration="600ms">
                                        <Link to="/contact" onClick={ClickHandler} className="thm-btn thm-btn--aso thm-btn--aso_yellow">Book a free consultation</Link>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-7 mt-30">
                        <div className="ap-award-wrap ul_li">
                            <div className="ap-award-inner marquee-first">
                                <div className="ap-award-item">
                                    <div className="xb-img"><img src={brand1} alt="" /></div>
                                </div>
                                <div className="ap-award-item">
                                    <div className="xb-img"><img src={brand2} alt="" /></div>
                                </div>
                                <div className="ap-award-item">
                                    <div className="xb-img"><img src={brand3} alt="" /></div>
                                </div>
                                <div className="ap-award-item">
                                    <div className="xb-img"><img src={brand1} alt="" /></div>
                                </div>
                                <div className="ap-award-item">
                                    <div className="xb-img"><img src={brand2} alt="" /></div>
                                </div>
                                <div className="ap-award-item">
                                    <div className="xb-img"><img src={brand3} alt="" /></div>
                                </div>
                            </div>
                            <div className="ap-award-inner marquee-2">
                                <div className="ap-award-item">
                                    <div className="xb-img"><img src={brand4} alt="" /></div>
                                </div>
                                <div className="ap-award-item">
                                    <div className="xb-img"><img src={brand5} alt="" /></div>
                                </div>
                                <div className="ap-award-item">
                                    <div className="xb-img"><img src={brand6} alt="" /></div>
                                </div>
                                <div className="ap-award-item">
                                    <div className="xb-img"><img src={brand7} alt="" /></div>
                                </div>
                                <div className="ap-award-item">
                                    <div className="xb-img"><img src={brand4} alt="" /></div>
                                </div>
                                <div className="ap-award-item">
                                    <div className="xb-img"><img src={brand5} alt="" /></div>
                                </div>
                            </div>
                            <div className="ap-award-inner marquee-first">
                                <div className="ap-award-item">
                                    <div className="xb-img"><img src={brand8} alt="" /></div>
                                </div>
                                <div className="ap-award-item">
                                    <div className="xb-img"><img src={brand9} alt="" /></div>
                                </div>
                                <div className="ap-award-item">
                                    <div className="xb-img"><img src={brand10} alt="" /></div>
                                </div>
                                <div className="ap-award-item">
                                    <div className="xb-img"><img src={brand8} alt="" /></div>
                                </div>
                                <div className="ap-award-item">
                                    <div className="xb-img"><img src={brand9} alt="" /></div>
                                </div>
                                <div className="ap-award-item">
                                    <div className="xb-img"><img src={brand10} alt="" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AwardSection;