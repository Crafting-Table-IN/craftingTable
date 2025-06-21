import React from 'react'
import { Fade } from "react-awesome-reveal";
import CountUp, { useCountUp } from 'react-countup';
import shape1 from '../../../images/shape/fan-shape01.png'
import shape2 from '../../../images/shape/fan-shape02.png'
import { Link } from 'react-router-dom'


const FunFactSection = (props) => {

    useCountUp({
        end: '56656',
        ref: 'counter',
        enableScrollSpy: true,
        scrollSpyDelay: 1000,
    });

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (

        <section className="fanfact pos-rel z-1 pt-155 pb-175 overflow-hidden" style={{ backgroundColor: "#212877" }}>
            <div className="container">
                <div className="cd-fanfact-wrapper">
                    <div className="sec-title--five white-sec-title text-center mb-80">
                        <Fade direction='up' triggerOnce={'false'} duration={1000} delay={9}>
                            <div>
                                <h2 className="title  wow fadeInUp" data-wow-duration="600ms">seamlessly develop and deploy applications in the cloud</h2>
                            </div>
                        </Fade>
                        <Fade direction='up' triggerOnce={'false'} duration={1200} delay={9}>
                            <div>
                                <p className="content  wow fadeInUp" data-wow-delay="150ms" data-wow-duration="600ms">Use our cloud DevOps consulting services to get the most value out of your cloud infrastructure and DevOps initiatives.</p>
                            </div>
                        </Fade>
                    </div>
                    <div className="cd-fanfact-inner ul_li_between mt-none-30">
                        <div className="xb-item--item_box mt-30">
                            <h3 className="xb-item--number xb-odm"><span className="xbo" data-count="90"><CountUp end={90} enableScrollSpy /></span><span className="suffix">%</span></h3>
                            <span className="xb-item--content">of businesses that <br /> adopt cloud reduced <br /> computing costs</span>
                        </div>
                        <div className="xb-item--item_box mt-30">
                            <h3 className="xb-item--number xb-odm"><span className="xbo" data-count="58"><CountUp end={58} enableScrollSpy /></span><span className="suffix">%</span></h3>
                            <span className="xb-item--content">increase in team productivity noted among organizations adopting DevOps</span>
                        </div>
                        <div className="xb-item--item_box mt-30">
                            <h3 className="xb-item--number xb-odm"><span className="xbo" data-count="30"><CountUp end={30} enableScrollSpy /></span><span className="suffix">%</span></h3>
                            <span className="xb-item--content">faster recovery from failures reported by companies implementing DevOps practices</span>
                        </div>
                    </div>
                    <div className="xb-btn mt-95 text-center wow fadeInUp" data-wow-delay="000ms" data-wow-duration="600ms">
                        <Link onClick={ClickHandler} to="/contact" className="thm-btn thm-btn--devops thm-btn--devops_yellow">Book a free consultation</Link>
                    </div>
                </div>
            </div>
            <div className="cd-sec-shape">
                <div className="shape shape--two"><img src={shape1} alt="" /></div>
                <div className="shape shape--three"><img src={shape2} alt="" /></div>
            </div>
            <span id="counter" className='d-none' />
        </section>
    )
}

export default FunFactSection;