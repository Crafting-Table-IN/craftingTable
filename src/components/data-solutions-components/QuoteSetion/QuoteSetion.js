import React from 'react'
import { Link } from 'react-router-dom'
import qImg1 from '../../../images/icon/quote02.png'
import qImg2 from '../../../images/testimonial/da-img.png'
import qImg3 from '../../../images/brand/da-img.png'

const QuoteSetion = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <section className="quote&cta">
            <div className="container-fluid p-0">
                <div className="quote-wrapper ul_li">
                    <div className="da-quote">
                        <div className="xb-item--inner">
                            <span className="xb-item--quote"><img src={qImg1} alt=""/></span>
                            <p className="xb-item--content">“Data and AI is not only about finding answers faster – but creating transparency around issues that have always been murky”</p>
                            <div className="xb-item--holder ul_li">
                                
                                <div className="xb-item--author">
                                    <img src={qImg2} alt=""/>
                                </div>
                                <div className="xb-item--avatar">
                                    <h3 className="xb-item--name">Robert Miller <span className="xb-item--desig">Founder & CEO. at BUSD</span></h3>
                                    <div className="xb-item--brand"><img src={qImg3} alt=""/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="da-cta">
                        <div className="xb-item--inner">
                            <h2 className="xb-item--title">Take advantage of our expert knowledge.</h2>
                            <div className="xb-btn mt-50">
                                <Link onClick={ClickHandler} to="/contact" className="thm-btn thm-btn--fill_icon thm-btn--data">
                                    <div className="xb-item--hidden"><span className="xb-item--hidden-text">Book a Discover Call</span></div>
                                    <div className="xb-item--holder">
                                        <span className="xb-item--text xb-item--text1">Book a Discover Call</span>
                                        <div className="xb-item--icon"><i className="fal fa-plus"></i></div>
                                        <span className="xb-item--text xb-item--text2">Book a Discover Call</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default QuoteSetion;