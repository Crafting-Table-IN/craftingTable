import React from 'react'
import { Link } from 'react-router-dom'
import { Fade } from "react-awesome-reveal";
import Bg from '../../../images/bg/cta_bg.jpg'
import cta1 from '../../../images/team/cd-team.png'
import cta2 from '../../../images/shape/line_shape02.svg'

const CtaSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="cta cta-bg pos-rel z-1 pt-160 o-hidden" style={{ backgroundColor: "#212877", backgroundImage: `url(${Bg})` }}>
            <div className="container">
                <div className="sec-title--five cta-sec-title text-center white-sec-title">
                    <Fade direction='up' triggerOnce={'false'} duration={1000} delay={9}>
                        <div>
                            <h2 className="title wow fadeInUp" data-wow-duration="600ms">Improve your development efficiency with managed Cloud and DevOps services</h2>
                        </div>
                    </Fade>
                </div>
            </div>
            <div className="cd-team-member pos-rel">
                <Fade direction='up' triggerOnce={'false'} duration={1000} delay={9}>
                    <div>
                        <div className="xb-img wow fadeInUp" data-wow-delay="200ms" data-wow-duration="600ms">
                            <img src={cta1} alt="" />
                        </div>
                    </div>
                </Fade>
                <div className="xb-shape">
                    <img className="xbzoominzoomup" src={cta2} alt="" />
                </div>
                <div className="xb-btn">
                    <Link onClick={ClickHandler} to="/contact" className="thm-btn thm-btn--devops thm-btn--devops_yellow">Book a free consultation</Link>
                </div>
            </div>
        </section>
    )
}

export default CtaSection;