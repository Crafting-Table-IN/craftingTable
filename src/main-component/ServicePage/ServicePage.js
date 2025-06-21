import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import Services from '../../api/service'
import WorkProcess from '../../components/WorkProcess/WorkProcess';
import Testimonial from '../../components/Testimonial/Testimonial';
import Header from '../../components/header/Header';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import Bg from '../../images/bg/page_bg01.jpg'
import CtaSection from '../../components/CtaSection/CtaSection';
import icon from '../../images/icon/ser-01.svg'
import sIcon from '../../images/icon/arrow-black.svg'

const ServicePage = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <Fragment>
            <div className='body_wrap sco_agency'>
                <Header />
                <section className="page-title pt-200 pos-rel bg_img" style={{ backgroundImage: `url(${Bg})` }}>
                    <div className="container">
                        <div className="page-title-wrap">
                            <div className="row mt-none-30 align-items-end">
                                <div className="col-lg-9 mt-30">
                                    <div className="page-title-box">
                                        <span className="sub-title"><img src={icon} alt="" /> Main Services</span>
                                        <h2 className="title">Discover our comprehensive <br /> SEO services to boost your <br /> online presence</h2>
                                    </div>
                                </div>
                                <div className="col-lg-3 mt-30">
                                    <div className="count-box">
                                        <h2 className="number">09</h2>
                                        <span className="text">Professional top <br /> services</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="service pt-65 pb-130">
                    <div className="container">
                        <div className="row mt-none-30">
                            {Services.slice(0, 6).map((service, srv) => (
                                <div className="col-lg-4 col-md-6 mt-30" key={srv}>
                                    <div className="service-box">
                                        {service.title ?
                                            <div className="service-item">
                                                <div className="xb-item--holder mb-85">
                                                    <h3 className="xb-item--title">{service.title}</h3>
                                                    <span className="xb-item--contact">{service.description}</span>
                                                </div>
                                                <div className="xb-item--icon ul_li_between">
                                                    <div className="xb-item--img"><img src={service.sImg} alt="" />
                                                    </div>
                                                    <Link onClick={ClickHandler} to={`/service-single/${service.slug}`} className="xb-item--arrow"><img
                                                        src={sIcon} alt="" /></Link>
                                                </div>
                                                <Link onClick={ClickHandler} to={`/service-single/${service.slug}`} className="xb-overlay"></Link>
                                            </div>
                                            : ''}
                                    </div>
                                </div>
                            ))}

                        </div>
                        <div className="xb-btn text-center mt-60 wow fadeInUp" data-wow-delay="450ms" data-wow-duration="600ms">
                            <Link onClick={ClickHandler} to="/contact" className="thm-btn thm-btn--aso thm-btn--aso_yellow">Book a free consultation</Link>
                        </div>
                    </div>
                </section>
                <WorkProcess />
                <Testimonial tClass={'pt-130'}/>
                <CtaSection />
            </div>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default ServicePage;
