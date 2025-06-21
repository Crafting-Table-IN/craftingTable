import React from 'react'
import ContactForm from '../ContactFrom/ContactForm'
import Bg from '../../../images/bg/cont_bg-shape.png'
import Bg2 from '../../../images/bg/cont-bg02.png'
import icon1 from '../../../images/icon/edit.svg'
import icon2 from '../../../images/icon/call-balck.png'
import icon3 from '../../../images/icon/sms-black.png'
import icon4 from '../../../images/icon/loc-black.png'
import icon5 from '../../../images/icon/bill.svg'
import cImg from '../../../images/contact/cont-shape.png'
import cImg2 from '../../../images/shape/con-shape.png'


const ContactSection = (props) => {
    return (
        <section className="contact contact-bg pt-140 pb-100 pos-rel bg_img" style={{ backgroundImage: `url(${Bg})` }}>
            <div className="container">
                <div className="contact-two pos-rel bg_img" style={{ backgroundImage: `url(${Bg2})` }}>
                    <div className="row mt-none-30">
                        <div className="col-lg-5 mt-30">
                            <div className="cs-contact-wrap">
                                <div className="xb-item--inner">
                                    <div className="sec-title--two sec-title--three mb-25">
                                        <span className="sub-title"><img src={icon1} alt=""/><span>You are here</span></span>
                                        <h2 className="title">Let's start</h2>
                                    </div>
                                    <p className="xb-item--content">Initiating Your Journey to Success and Growth.</p>
                                    <ul className="xb-item--cont_info list-unstyled">
                                        <li><span><img src={icon2} alt=""/></span>+(1) 1230 452 8597</li>
                                        <li><span className="clr-sky"><img src={icon3} alt=""/></span>innomax@gmail.com</li>
                                        <li><span className="clr-orange"><img src={icon4} alt=""/></span>Sunshine example road</li>
                                    </ul>
                                    <div className="xb-item--img">
                                        <img src={cImg} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 mt-30">
                            <div className="cs-contact-wrap cs-contact-form">
                                <div className="sec-title--two sec-title--three">
                                    <span className="sub-title"><img src={icon5} alt=""/><span>Let’s connect!</span></span>
                                    <h2 className="title">Send us a message, and we'll promptly <br/> discuss your project with you.</h2>
                                </div>
                                <ContactForm/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="xb-shape"><img src={cImg2} alt=""/></div>
         </section>
    )
}

export default ContactSection;