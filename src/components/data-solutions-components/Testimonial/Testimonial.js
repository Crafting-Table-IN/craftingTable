import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Link } from 'react-router-dom'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ticon1 from "../../../images/icon/flower-icon-blue.svg";
import tImg1 from "../../../images/testimonial/da-tes-img.png";
import tImg2 from "../../../images/testimonial/ixico-logo.png";



const Testimonial = () => {

    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current && prevRef.current && nextRef.current) {
            swiperRef.current.params.navigation.prevEl = prevRef.current;
            swiperRef.current.params.navigation.nextEl = nextRef.current;
            swiperRef.current.navigation.init();
            swiperRef.current.navigation.update();
        }
    }, []);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="testimonial pt-150 pb-140">
            <div className="container">
                <div className="da-sec-titlte text-center mb-60">
                    <span className="sub_title"><span><img src={ticon1} alt="" /></span>Case studies</span>
                    <h2 className="title">Who we've helped</h2>
                </div>
                <div className="da-testimonial-wrap pos-rel">
                    <div className="da-testimonial-slider swiper-container">
                        <div className="swiper-wrapper">
                            <Swiper
                                // install Swiper modules
                                modules={[Navigation]}
                                spaceBetween={50}
                                slidesPerView={1}
                                loop={true}
                                speed={1800}
                                parallax={true}
                                ref={swiperRef}
                                onBeforeInit={(swiper) => {
                                    swiperRef.current = swiper;
                                }}
                            >
                                <SwiperSlide className="da-testimonial">
                                    <div className="row align-items-center mt-none-30">
                                        <div className="col-lg-6 mt-30">
                                            <div className="da-tes-left">
                                                <h2 className="xb-item--title">Transforming a leading medical imaging service provider with Microsoft Cloud</h2>
                                                <p className="xb-item--content content--one">With the ambition to scale and further develop its AI-imaging  biomarker service offering to the global clinical trial market, IXICO  came to us for a secure and seamless cloud transformation.</p>
                                                <div className="xb-item--holder ul_li align-items-start">
                                                    <div className="xb-item--meta">
                                                        <h3 className="xb-item--number">$3 Million</h3>
                                                        <span className="xb-item--text">Annual cost savings achieved through optimized trial operations.</span>
                                                    </div>
                                                    <div className="xb-item--meta">
                                                        <h3 className="xb-item--number">200+ Clinical Trials</h3>
                                                        <span className="xb-item--text">Supported globally with IXICO's AI-enhanced imaging biomarkers.</span>
                                                    </div>
                                                </div>
                                                <p className="xb-item--content content--two">IXICO is a premium, specialist neuroimaging services provider to the global biopharmaceutical industry.</p>
                                                <p className="xb-item--content content--three">The company develops and deploys therapeutic specific AI <br /> (Artificial  Intelligence) algorithms designed to reduce clinical trial <br /> size and  costs whilst simultaneously improving insights to increase the  likelihood of approval in neurological clinical trials.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mt-30">
                                            <div className="da-tes-right">
                                                <div className="xb-item--author">
                                                    <img src={tImg1} alt="" />
                                                </div>
                                                <div className="xb-item--avatar">
                                                    <img src={tImg2} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="da-testimonial">
                                    <div className="row align-items-center mt-none-30">
                                        <div className="col-lg-6 mt-30">
                                            <div className="da-tes-left">
                                                <h2 className="xb-item--title">Transforming a leading medical imaging service provider with Microsoft Cloud</h2>
                                                <p className="xb-item--content content--one">With the ambition to scale and further develop its AI-imaging  biomarker service offering to the global clinical trial market, IXICO  came to us for a secure and seamless cloud transformation.</p>
                                                <div className="xb-item--holder ul_li align-items-start">
                                                    <div className="xb-item--meta">
                                                        <h3 className="xb-item--number">$3 Million</h3>
                                                        <span className="xb-item--text">Annual cost savings achieved through optimized trial operations.</span>
                                                    </div>
                                                    <div className="xb-item--meta">
                                                        <h3 className="xb-item--number">200+ Clinical Trials</h3>
                                                        <span className="xb-item--text">Supported globally with IXICO's AI-enhanced imaging biomarkers.</span>
                                                    </div>
                                                </div>
                                                <p className="xb-item--content content--two">IXICO is a premium, specialist neuroimaging services provider to the global biopharmaceutical industry.</p>
                                                <p className="xb-item--content content--three">The company develops and deploys therapeutic specific AI <br /> (Artificial  Intelligence) algorithms designed to reduce clinical trial <br /> size and  costs whilst simultaneously improving insights to increase the  likelihood of approval in neurological clinical trials.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mt-30">
                                            <div className="da-tes-right">
                                                <div className="xb-item--author">
                                                    <img src={tImg1} alt="" />
                                                </div>
                                                <div className="xb-item--avatar">
                                                    <img src={tImg2} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                    <div className="da-swiper-btn swiper-button-prev" ref={prevRef}><i className="fal fa-long-arrow-left"></i></div>
                    <div className="da-swiper-btn swiper-button-next" ref={nextRef}><i className="fal fa-long-arrow-right"></i></div>
                </div>
                <div className="xb-btn text-center mt-55">
                    <Link onClick={ClickHandler} to="/contact" className="thm-btn thm-btn--fill_icon thm-btn--data thm-btn--data-strock">
                        <div className="xb-item--hidden"><span className="xb-item--hidden-text">View More Case Studies</span></div>
                        <div className="xb-item--holder">
                            <span className="xb-item--text xb-item--text1">View More Case Studies</span>
                            <div className="xb-item--icon"><i className="fal fa-plus"></i></div>
                            <span className="xb-item--text xb-item--text2">View More Case Studies</span>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
