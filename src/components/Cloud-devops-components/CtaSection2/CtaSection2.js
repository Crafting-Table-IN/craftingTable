import React from 'react'
import { Fade } from "react-awesome-reveal";
import { Link } from 'react-router-dom';
import cta1 from '../../../images/cta/cta_icon_01.png'
import cta2 from '../../../images/cta/cta_icon_02.png'
import cta3 from '../../../images/cta/cta_icon_03.png'
import cta4 from '../../../images/cta/cta_icon_04.png'
import cta5 from '../../../images/cta/cta_icon_05.png'
import cta6 from '../../../images/cta/cta_icon_06.png'
import cta7 from '../../../images/cta/cta_icon_07.png'
import ctShape from '../../../images/cta/cta_shape.png'

const CtaSection2 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="cta cta-height pos-rel z-1 pt-165" style={{ backgroundColor: "#212877" }}>
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-12">
                        <div className="cta-icons">
                            <div className="icon icon--1">
                                <img data-parallax='{"x":-20,"y":-30}' src={cta1} alt="" />
                            </div>
                            <div className="icon icon--2">
                                <img data-parallax='{"x":-30,"y":-20}' src={cta2} alt="" />
                            </div>
                            <div className="icon icon--3">
                                <img data-parallax='{"x":-10,"y":-30}' src={cta3} alt="" />
                            </div>
                            <div className="icon icon--4">
                                <img data-parallax='{"y":-40}' src={cta4} alt="" />
                            </div>
                            <div className="icon icon--5">
                                <img data-parallax='{"x":10,"y":-30}' src={cta5} alt="" />
                            </div>
                            <div className="icon icon--6">
                                <img data-parallax='{"x":30,"y":-20}' src={cta6} alt="" />
                            </div>
                            <div className="icon icon--7">
                                <img data-parallax='{"x":20,"y":-30}' src={cta7} alt="" />
                            </div>
                        </div>
                        <div className="cta-image">
                            <img src={ctShape} alt="" />
                        </div>
                        <div className="cd-cta">
                            <div className="sec-title--five text-center">
                                <Fade direction='up' triggerOnce={'false'} duration={1000} delay={9}>
                                    <div>
                                        <h2 className="title wow fadeInUp">CLOUD & DEVOPS <br /> Tech Stack</h2>
                                    </div>
                                </Fade>
                            </div>
                            <div className="xb-btn mt-20 text-center wow fadeInUp" data-wow-delay="150ms">
                                <Fade direction='up' triggerOnce={'false'} duration={1000} delay={9}>
                                    <div>
                                        <Link onClick={ClickHandler} to="/contact" className="thm-btn thm-btn--devops thm-btn--devops_yellow">Book a free consultation</Link>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cd-sec-shape">
                <div className="shape shape--two"><img src="assets/img/shape/cta_shape2.png" alt="" /></div>
                <div className="shape shape--three"><img src="assets/img/shape/cta_shape1.png" alt="" /></div>
            </div>
        </section>
    )
}

export default CtaSection2;