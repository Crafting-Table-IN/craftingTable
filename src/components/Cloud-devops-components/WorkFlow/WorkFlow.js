import React from 'react'
import { Fade } from "react-awesome-reveal";
import wImg1 from '../../../images/work/cd-work_img01.jpg'
import wImg2 from '../../../images/work/cd-work_img02.jpg'
import wImg3 from '../../../images/work/cd-work_img03.jpg'
import wImg4 from '../../../images/work/cd-work_img04.jpg'

import shape1 from '../../../images/shape/work-shape01.png'
import shape2 from '../../../images/shape/work-shape02.png'

const WorkFlow = (props) => {

    return (
        <section className="work pos-rel z-1 pt-150 pb-165">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="cd-work-left">
                            <div className="sec-title--five">
                                <Fade direction='down' triggerOnce={'false'} duration={1000} delay={9}>
                                    <div>
                                        <h2 className="title wow skewIn" data-wow-duration="600ms">How we get it done quick.</h2>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="cd-work-wrap">
                            <div className="cd-work-item">
                                <div className="xb-item--inner">
                                    <div className="xb-item--holder">
                                        <h3 className="xb-item--title">Discovery & Design</h3>
                                        <p className="xb-item--content">We gather requirements and design a system that optimizes resources, ensures reliability, and meets your project’s needs.</p>
                                    </div>
                                    <div className="xb-item--img"><img src={wImg1} alt=""/></div>
                                </div>
                                <span className="xb-number">1</span>
                            </div>
                            <div className="cd-work-item">
                                <div className="xb-item--inner">
                                    <div className="xb-item--holder">
                                        <h3 className="xb-item--title">Cost & Approval</h3>
                                        <p className="xb-item--content">We offer a transparent cost estimate based on the project’s scope, complexity, and timeline for approval.</p>
                                    </div>
                                    <div className="xb-item--img"><img src={wImg2} alt=""/></div>
                                </div>
                                <span className="xb-number">2</span>
                            </div>
                            <div className="cd-work-item">
                                <div className="xb-item--inner">
                                    <div className="xb-item--holder">
                                        <h3 className="xb-item--title">Deployment & CI/CD</h3>
                                        <p className="xb-item--content">We automate cloud resource setup and configure CI/CD pipelines for fast, error-free deployments.</p>
                                    </div>
                                    <div className="xb-item--img"><img src={wImg3} alt=""/></div>
                                </div>
                                <span className="xb-number">3</span>
                            </div>
                            <div className="cd-work-item">
                                <div className="xb-item--inner">
                                    <div className="xb-item--holder">
                                        <h3 className="xb-item--title">Support & Maintenance</h3>
                                        <p className="xb-item--content">Post-launch, we handle bug fixes, optimizations, and updates to keep your cloud environment running smoothly.</p>
                                    </div>
                                    <div className="xb-item--img"><img src={wImg4} alt=""/></div>
                                </div>
                                <span className="xb-number">4</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cd-sec-shape">
                <div className="shape shape--one"><img src={shape1} alt=""/></div>
                <div className="shape shape--four"><img src={shape2} alt=""/></div>
            </div>
        </section>
    )
}

export default WorkFlow;