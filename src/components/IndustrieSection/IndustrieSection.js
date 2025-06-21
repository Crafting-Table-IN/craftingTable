import React from 'react';
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import hicon from '../../images/icon/building.svg'
import sIcon1 from '../../images/industrie/img01.png'
import sIcon2 from '../../images/industrie/img02.png'
import sIcon3 from '../../images/industrie/img03.png'
import sIcon4 from '../../images/industrie/img04.png'
import sIcon5 from '../../images/industrie/img05.png'
import sIcon6 from '../../images/industrie/img06.png'
import sIcon7 from '../../images/industrie/img07.png'
import sIcon8 from '../../images/industrie/img08.png'
import sIcon9 from '../../images/industrie/img09.png'
import sIcon10 from '../../images/industrie/img10.png'

const Industrie = [
    {
        icon: sIcon1,
        title: 'SaaS',
    },
    {
        icon: sIcon2,
        title: 'Lawyers',
    },
    {
        icon: sIcon3,
        title: 'Real estate',
    },
    {
        icon: sIcon4,
        title: 'Insurance',
    },
    {
        icon: sIcon5,
        title: 'Crypto',
    },
    {
        icon: sIcon6,
        title: 'Private equity',
    },
    {
        icon: sIcon7,
        title: 'Education',
    },
    {
        icon: sIcon8,
        title: 'Finance',
    },
    {
        icon: sIcon9,
        title: 'Healthcare',
    },
    {
        icon: sIcon10,
        title: 'Automotive',
    },


]

const IndustrieSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="industrie m-lr pt-140 pb-140">
            <div className="industrie-wrap sec-bg pos-rel pt-130 pb-130">
                <div className="container">
                    <div className="sec-title--two text-center mb-30">
                        <Fade direction='down' triggerOnce={'false'} duration={1000} delay={9}>
                            <div>
                                <div className="sub-title wow fadeInDown" data-wow-duration="600ms"><img
                                    src={hicon} alt="" />Industries we work</div>
                            </div>
                        </Fade>
                        <Fade direction='up' triggerOnce={'false'} duration={1200} delay={9}>
                            <div>
                                <h2 className="title wow fadeInDown" data-wow-delay="150ms" data-wow-duration="600ms">Serving
                                    diverse industries</h2>
                            </div>
                        </Fade>
                    </div>
                    <div className="row row-cols-xl-5 row-cols-md-3 row-cols-sm-2 row-cols-2">
                        {Industrie.map((insdustry, i) => (
                            <div className="col" key={i}>
                                <div className="indus-item">
                                    <div className="xb-img">
                                        <img src={insdustry.icon} alt=""/>
                                    </div>
                                    <h3 className="xb-title">{insdustry.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="xb-btn text-center mt-60">
                        <Link onClick={ClickHandler} to="/contact" className="thm-btn thm-btn--aso">Book a free consultation</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default IndustrieSection;