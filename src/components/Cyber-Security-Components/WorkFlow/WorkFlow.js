import React from 'react'
import { Fade } from "react-awesome-reveal";
import Bg from '../../../images/bg/work-bg.png'
import icon from '../../../images/icon/work.svg'
import wImg1 from '../../../images/work/img01.png'
import wImg2 from '../../../images/work/img02.png'
import wImg3 from '../../../images/work/img03.png'
import icon1 from '../../../images/icon/work-icon01.png'
import icon2 from '../../../images/icon/work-icon02.png'
import icon3 from '../../../images/icon/work-icon03.png'
import dash from '../../../images/icon/das-linee01.png'
import arrow from '../../../images/icon/right-arrow.png'

const WorkFlow = (props) => {

    return (
        <section className="work">
            <div className="container">
                <div className="xb-work-wrap pos-rel bg_img pt-100 pb-155" style={{ backgroundImage: `url(${Bg})` }}>
                    <div className="sec-title--two sec-title--three text-center mb-60">
                        <Fade direction='down' triggerOnce={'false'} duration={1000} delay={9}>
                            <div>
                                <span className="sub-title wow fadeInDown" data-wow-duration="600ms"><img src={icon} alt="" /><span>How we works</span></span>
                            </div>
                        </Fade>
                        <Fade direction='down' triggerOnce={'false'} duration={800} delay={9}>
                            <div>
                                <h2 className="title wow fadeInDown" data-wow-duration="600ms">Our Security Workflow</h2>
                            </div>
                        </Fade>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-4 mt-30 d-inline-flex justify-content-center">
                            <div className="xb-work-item pos-rel wow fadeInLeft" data-wow-delay="150ms" data-wow-duration="600ms">
                                <div className="xb-item--ineer">
                                    <div className="xb-item--icon">
                                        <img src={icon1} alt=""/>
                                    </div>
                                    <h4 className="xb-item--title">Risk Assessment & Consultation</h4>
                                </div>
                                <div className="xb-img">
                                    <img src={wImg1} alt=""/>
                                </div>
                                <div className="xb-item--content">
                                    <div className="xb-item--line"><img src={dash} alt=""/></div>
                                    <span className="xb-item--number">01</span>
                                </div>
                                <div className="xb-item--arrow"><img src={arrow} alt=""/></div>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-30 d-inline-flex justify-content-center">
                            <div className="xb-work-item xb-work-item--middle pos-rel">
                                <div className="xb-item--ineer">
                                    <div className="xb-item--icon">
                                        <img src={icon2} alt=""/>
                                    </div>
                                    <h4 className="xb-item--title">Solution Design and Implementation</h4>
                                </div>
                                <div className="xb-img">
                                    <img src={wImg2} alt=""/>
                                </div>
                                <div className="xb-item--content">
                                    <div className="xb-item--line"><img src={dash} alt=""/></div>
                                    <span className="xb-item--number">02</span>
                                </div>
                                <div className="xb-item--arrow"><img src={arrow} alt=""/></div>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-30 d-inline-flex justify-content-center">
                            <div className="xb-work-item pos-rel wow fadeInRight" data-wow-delay="150ms" data-wow-duration="600ms">
                                <div className="xb-item--ineer">
                                    <div className="xb-item--icon">
                                        <img src={icon3} alt=""/>
                                    </div>
                                    <h4 className="xb-item--title">Monitoring and Support</h4>
                                </div>
                                <div className="xb-img">
                                    <img src={wImg3} alt=""/>
                                </div>
                                <div className="xb-item--content">
                                    <div className="xb-item--line"><img src={dash} alt=""/></div>
                                    <span className="xb-item--number">03</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WorkFlow;