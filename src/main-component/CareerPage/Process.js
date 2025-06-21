
import React, { useState } from 'react';
import hicon from '../../images/icon/magic.svg'
import rImg from '../../images/process/cp-img.png'
import { Fade } from "react-awesome-reveal";
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from 'reactstrap';

const Process = (props) => {

    const [open, setOpen] = useState('1');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };

    return (
        <section className="process process-bg pt-115 pb-130">
            <div className="container">
                <div className="row align-items-center mt-none-30">
                    <div className="col-lg-6 mt-30">
                        <div className="faq">
                            <div className="container">
                                <div className="sec-title--two mb-50">
                                    <Fade direction='down' triggerOnce={'false'} duration={1000} delay={9}>
                                        <div>
                                            <div className="sub-title wow fadeInDown" data-wow-duration="600ms"><img
                                                src={hicon} alt="" />Hiring process</div>
                                        </div>
                                    </Fade>
                                    <Fade direction='up' triggerOnce={'false'} duration={1200} delay={9}>
                                        <div>
                                            <h2 className="title wow fadeInDown" data-wow-delay="150ms" data-wow-duration="600ms">Have a
                                            Our hiring process</h2>
                                        </div>
                                    </Fade>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="xb-faq cp-faq wow fadeInUp" data-wow-delay="200ms" data-wow-duration="600ms">
                                            <Accordion open={open} toggle={toggle} className='accordion_box clearfix list-unstyled'>
                                                <AccordionItem className='block'>
                                                    <AccordionHeader targetId="1" className='acc-btn'><span className="number">01</span> _Send your CV
                                                        <span className="arrow"></span>
                                                    </AccordionHeader>
                                                    <AccordionBody accordionId="1" className='acc_body'>
                                                        <div className="content">
                                                            <p>Apply for a position by sending us your CV or providing a link to your LinkedIn profile, and take the first step toward joining our team.</p>
                                                        </div>
                                                    </AccordionBody>
                                                </AccordionItem>
                                                <AccordionItem className='block'>
                                                    <AccordionHeader targetId="2" className='acc-btn'><span className="number">02</span> _Initial screening results?
                                                        <span className="arrow"></span>
                                                    </AccordionHeader>
                                                    <AccordionBody accordionId="2" className='acc_body'>
                                                        <div className="content">
                                                            <p>Our recruiter will get back to you if your resume meets our requirements in order to introduce you to the role.</p>
                                                        </div>
                                                    </AccordionBody>
                                                </AccordionItem>
                                                <AccordionItem className='block'>
                                                    <AccordionHeader targetId="3" className='acc-btn'><span className="number">03</span> _Job interview
                                                        <span className="arrow"></span>
                                                    </AccordionHeader>
                                                    <AccordionBody accordionId="3" className='acc_body'>
                                                        <div className="content">
                                                            <p>You will meet a few of your potential colleagues to talk about your skills, background, and expectations in detail.</p>
                                                        </div>
                                                    </AccordionBody>
                                                </AccordionItem>
                                                <AccordionItem className='block'>
                                                    <AccordionHeader targetId="4" className='acc-btn'><span className="number">04</span> _Test task
                                                        <span className="arrow"></span>
                                                    </AccordionHeader>
                                                    <AccordionBody accordionId="4" className='acc_body'>
                                                        <div className="content">
                                                            <p>If needed, we’ll arrange a small test task. Depending on the project and role, this may be followed by a client interview.</p>
                                                        </div>
                                                    </AccordionBody>
                                                </AccordionItem>
                                                <AccordionItem className='block'>
                                                    <AccordionHeader targetId="5" className='acc-btn'><span className="number">05</span> _You’re hired!
                                                        <span className="arrow"></span>
                                                    </AccordionHeader>
                                                    <AccordionBody accordionId="5" className='acc_body'>
                                                        <div className="content">
                                                            <p>By deciding we are a good match for each other, we’ll agree the terms of you starting your career at innomax..</p>
                                                        </div>
                                                    </AccordionBody>
                                                </AccordionItem>
                                            </Accordion>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mt-30">
                        <div className="cp-process-right">
                            <div className="xb-img">
                                <img src={rImg} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};
export default Process;
