
import React, { useState } from 'react';
import hicon from '../../images/icon/magic.svg'
import { Fade } from "react-awesome-reveal";
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from 'reactstrap';

const FaqSection = (props) => {

    const [open, setOpen] = useState('1');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };

    return (
        <section className="faq pb-140">
            <div className="container">
                <div className="sec-title--two text-center mb-60">
                    <Fade direction='down' triggerOnce={'false'} duration={1000} delay={9}>
                        <div>
                            <div className="sub-title wow fadeInDown" data-wow-duration="600ms"><img
                                src={hicon} alt="" />FAQ’s</div>
                        </div>
                    </Fade>
                    <Fade direction='up' triggerOnce={'false'} duration={1200} delay={9}>
                        <div>
                            <h2 className="title wow fadeInDown" data-wow-delay="150ms" data-wow-duration="600ms">Have a
                                question look here</h2>
                        </div>
                    </Fade>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="xb-faq wow fadeInUp" data-wow-delay="200ms" data-wow-duration="600ms">
                            <Accordion open={open} toggle={toggle} className='accordion_box clearfix list-unstyled'>
                                <AccordionItem className='block'>
                                    <AccordionHeader targetId="1" className='acc-btn'><span className="number">01</span> _ How long does it take to get results from
                                        SEO?
                                        <span className="arrow"></span>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="1" className='acc_body'>
                                        <div className="content">
                                            <p>On average, our clients start to see initial results from SEO in 4-6
                                                months. But heads up: If the niche is very competitive, it can take
                                                up to 1-2 years. Every website and strategy is different so the
                                                timeline will depend on a number of factors. Like:</p>
                                            <ul className="list-unstyled">
                                                <li><i className="far fa-check"></i>The age and authority of your site.
                                                </li>
                                                <li><i className="far fa-check"></i>Your on-page and off-page
                                                    optimization.</li>
                                                <li><i className="far fa-check"></i>Any penalties pulling your ranking
                                                    down.</li>
                                            </ul>
                                        </div>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem className='block'>
                                    <AccordionHeader targetId="2" className='acc-btn'><span className="number">02</span> _ What SEO strategies do you implement for
                                        optimal results?
                                        <span className="arrow"></span>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="2" className='acc_body'>
                                        <div className="content">
                                            <p>On average, our clients start to see initial results from SEO in 4-6
                                                months. But heads up: If the niche is very competitive, it can take
                                                up to 1-2 years. Every website and strategy is different so the
                                                timeline will depend on a number of factors. Like:</p>
                                            <ul className="list-unstyled">
                                                <li><i className="far fa-check"></i>The age and authority of your site.
                                                </li>
                                                <li><i className="far fa-check"></i>Your on-page and off-page
                                                    optimization.</li>
                                                <li><i className="far fa-check"></i>Any penalties pulling your ranking
                                                    down.</li>
                                            </ul>
                                        </div>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem className='block'>
                                    <AccordionHeader targetId="3" className='acc-btn'><span className="number">03</span> _ What part of the SEO process do you
                                        outsource?
                                        <span className="arrow"></span>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="3" className='acc_body'>
                                        <div className="content">
                                            <p>On average, our clients start to see initial results from SEO in 4-6
                                                months. But heads up: If the niche is very competitive, it can take
                                                up to 1-2 years. Every website and strategy is different so the
                                                timeline will depend on a number of factors. Like:</p>
                                            <ul className="list-unstyled">
                                                <li><i className="far fa-check"></i>The age and authority of your site.
                                                </li>
                                                <li><i className="far fa-check"></i>Your on-page and off-page
                                                    optimization.</li>
                                                <li><i className="far fa-check"></i>Any penalties pulling your ranking
                                                    down.</li>
                                            </ul>
                                        </div>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem className='block'>
                                    <AccordionHeader targetId="4" className='acc-btn'><span className="number">04</span> _ Can you handle SEO for an enterprise-size
                                        company?
                                        <span className="arrow"></span>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="4" className='acc_body'>
                                        <div className="content">
                                            <p>On average, our clients start to see initial results from SEO in 4-6
                                                months. But heads up: If the niche is very competitive, it can take
                                                up to 1-2 years. Every website and strategy is different so the
                                                timeline will depend on a number of factors. Like:</p>
                                            <ul className="list-unstyled">
                                                <li><i className="far fa-check"></i>The age and authority of your site.
                                                </li>
                                                <li><i className="far fa-check"></i>Your on-page and off-page
                                                    optimization.</li>
                                                <li><i className="far fa-check"></i>Any penalties pulling your ranking
                                                    down.</li>
                                            </ul>
                                        </div>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem className='block'>
                                    <AccordionHeader targetId="5" className='acc-btn'><span className="number">05</span> _ Do you offer professional link-building
                                        services?
                                        <span className="arrow"></span>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="5" className='acc_body'>
                                        <div className="content">
                                            <p>On average, our clients start to see initial results from SEO in 4-6
                                                months. But heads up: If the niche is very competitive, it can take
                                                up to 1-2 years. Every website and strategy is different so the
                                                timeline will depend on a number of factors. Like:</p>
                                            <ul className="list-unstyled">
                                                <li><i className="far fa-check"></i>The age and authority of your site.
                                                </li>
                                                <li><i className="far fa-check"></i>Your on-page and off-page
                                                    optimization.</li>
                                                <li><i className="far fa-check"></i>Any penalties pulling your ranking
                                                    down.</li>
                                            </ul>
                                        </div>
                                    </AccordionBody>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};
export default FaqSection;
