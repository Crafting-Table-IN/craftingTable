import React from 'react';
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
import hicon from '../../../images/icon/magic02.svg'
import sIcon1 from '../../../images/icon/ftd_01.svg'
import sIcon2 from '../../../images/icon/ftd_02.svg'
import sIcon3 from '../../../images/icon/ftd_03.svg'
import sIcon4 from '../../../images/icon/ftd_04.svg'
import sIcon5 from '../../../images/icon/ftd_05.svg'
import sIcon6 from '../../../images/icon/ftd_06.svg'
import sIcon7 from '../../../images/icon/ftd_07.svg'
import sIcon8 from '../../../images/icon/ftd_08.svg'
import sIcon9 from '../../../images/icon/ftd_09.svg'
import sIcon10 from '../../../images/icon/ftd_10.svg'

import hIcon1 from '../../../images/icon/ft_01.svg'
import hIcon2 from '../../../images/icon/ft_02.svg'
import hIcon3 from '../../../images/icon/ft_03.svg'
import hIcon4 from '../../../images/icon/ft_04.svg'
import hIcon5 from '../../../images/icon/ft_05.svg'
import hIcon6 from '../../../images/icon/ft_06.svg'
import hIcon7 from '../../../images/icon/ft_07.svg'
import hIcon8 from '../../../images/icon/ft_08.svg'
import hIcon9 from '../../../images/icon/ft_09.svg'
import hIcon10 from '../../../images/icon/ft_10.svg'

const Industrie = [
    {
        icon: sIcon1,
        hicon: hIcon1,
        title: 'Finance',
    },
    {
        icon: sIcon2,
        hicon: hIcon2,
        title: 'Healthcare',
    },
    {
        icon: sIcon3,
        hicon: hIcon3,
        title: 'Government',
    },
    {
        icon: sIcon4,
        hicon: hIcon4,
        title: 'E-commerce',
    },
    {
        icon: sIcon5,
        hicon: hIcon5,
        title: 'Energy',
    },
    {
        icon: sIcon6,
        hicon: hIcon6,
        title: 'Education',
    },
    {
        icon: sIcon7,
        hicon: hIcon7,
        title: 'Manufacturing',
    },
    {
        icon: sIcon8,
        hicon: hIcon8,
        title: 'Crypto',
    },
    {
        icon: sIcon9,
        hicon: hIcon9,
        title: 'Logistics',
    },
    {
        icon: sIcon10,
        hicon: hIcon10,
        title: 'Technology',
    },

    {
        icon: sIcon1,
        hicon: hIcon1,
        title: 'Finance',
    },
    {
        icon: sIcon2,
        hicon: hIcon2,
        title: 'Healthcare',
    },
    {
        icon: sIcon3,
        hicon: hIcon3,
        title: 'Government',
    },
    {
        icon: sIcon4,
        hicon: hIcon4,
        title: 'E-commerce',
    },
    {
        icon: sIcon5,
        hicon: hIcon5,
        title: 'Energy',
    },
    {
        icon: sIcon6,
        hicon: hIcon6,
        title: 'Education',
    },
    {
        icon: sIcon7,
        hicon: hIcon7,
        title: 'Manufacturing',
    },
    {
        icon: sIcon8,
        hicon: hIcon8,
        title: 'Crypto',
    },
    {
        icon: sIcon9,
        hicon: hIcon9,
        title: 'Logistics',
    },
    {
        icon: sIcon10,
        hicon: hIcon10,
        title: 'Technology',
    },



]

const IndustrieSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="industries pt-120 overflow-hidden">
            <div className="container">
                <div className="sec-title--two sec-title--three text-center mb-60">
                    <Fade direction='down' triggerOnce={'false'} duration={1000} delay={9}>
                        <div>
                            <span className="sub-title wow fadeInDown" data-wow-duration="600ms"><img src={hicon} alt="" /><span>Industries we work</span></span>
                        </div>
                    </Fade>
                    <Fade direction='up' triggerOnce={'false'} duration={1200} delay={9}>
                        <div>
                            <h2 className="title wow fadeInDown" data-wow-duration="600ms">Serving diverse industries</h2>
                        </div>
                    </Fade>
                </div>
            </div>
            <div className="industries-slider">
                <div className="swiper-wrapper">
                    <Swiper
                        className="industries-slider"
                        loop={true}
                        spaceBetween={40}
                        speed={400}
                        slidesPerView={8}
                        centeredSlides={true}
                        autoplay={{
                            delay: 6000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            el: ".swiper-pagination",
                            clickable: true,
                        }}
                        breakpoints={{
                            1600: {
                                slidesPerView: 8,
                            },
                            768: {
                                slidesPerView: 4,
                            },
                            576: {
                                slidesPerView: 4,
                            },
                            0: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                                centeredSlides: false,
                            },
                        }}
                        modules={[Pagination, Autoplay]}
                    >
                        {Industrie.map((insdustry, i) => (
                            <SwiperSlide key={i}>
                                <div className="cs-industries-item">
                                    <div className="xb-item--inner">
                                        <div className="xb-item--icon">
                                            <img className="default" src={insdustry.icon} alt="" />
                                            <img className="hover" src={insdustry.hicon} alt="" />
                                        </div>
                                        <h3 className="xb-item--title">{insdustry.title}</h3>
                                    </div>
                                    <div className="bg-shape1">
                                        <svg width="242" height="219" viewBox="0 0 242 219" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="0.000976562" y="0.000976562" width="241.997" height="219" rx="15" fill="url(#paint0_linear_1742_6131)" />
                                            <rect x="0.500977" y="0.500977" width="240.997" height="218" rx="14.5" stroke="white" strokeOpacity="0.1" />
                                            <rect width="241.997" height="219" rx="15" fill="url(#paint1_radial_1742_6131)" />
                                            <rect x="0.5" y="0.5" width="240.997" height="218" rx="14.5" stroke="white" strokeOpacity="0.1" />
                                            <defs>
                                                <linearGradient id="paint0_linear_1742_6131" x1="127.049" y1="-29.199" x2="127.049" y2="178.851" gradientUnits="userSpaceOnUse">
                                                    <stop offset="0" stopColor="#3A3645" />
                                                    <stop offset="1" stopColor="#010315" />
                                                </linearGradient>
                                                <radialGradient id="paint1_radial_1742_6131" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(120.999) scale(170.124 186.369)">
                                                    <stop offset="0" stopColor="white" stopOpacity="0.05" />
                                                    <stop offset="1" stopColor="#050014" stopOpacity="0" />
                                                </radialGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div className="bg-shape2">
                                        <svg width="242" height="219" viewBox="0 0 242 219" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.00195312 15C0.00195312 6.71572 6.71768 0 15.002 0H227.002C235.286 0 242.002 6.71573 242.002 15V204C242.002 212.284 235.286 219 227.002 219H15.002C6.71768 219 0.00195312 212.284 0.00195312 204V15Z" fill="url(#paint0_linear_1742_583)" />
                                            <path d="M0.501953 15C0.501953 6.99187 6.99382 0.5 15.002 0.5H227.002C235.01 0.5 241.502 6.99187 241.502 15V204C241.502 212.008 235.01 218.5 227.002 218.5H15.002C6.99382 218.5 0.501953 212.008 0.501953 204V15Z" stroke="url(#paint1_linear_1742_583)" strokeOpacity="0.7" />
                                            <defs>
                                                <linearGradient id="paint0_linear_1742_583" x1="229.002" y1="55.653" x2="216.981" y2="306.586" gradientUnits="userSpaceOnUse">
                                                    <stop offset="0" stopColor="#010315" />
                                                    <stop offset="0.29614" stopColor="#090536" />
                                                    <stop offset="0.833198" stopColor="#431DAB" stopOpacity="0.59" />
                                                    <stop offset="1" stopColor="#431DAB" />
                                                </linearGradient>
                                                <linearGradient id="paint1_linear_1742_583" x1="242.002" y1="222.626" x2="129.794" y2="175.752" gradientUnits="userSpaceOnUse">
                                                    <stop offset="0" stopColor="#6780D2" />
                                                    <stop offset="1" stopColor="#2F3B8D" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            <div className="xb-btn text-center mt-60">
                <Link onClick={ClickHandler} to="/contact" className="blc-btn">
                    <span>Get started now <i className="far fa-angle-right"></i></span>
                    <span className="btn-shape">
                        <svg width="362" height="78" viewBox="0 0 362 78" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.5 22.7183L25.5093 1.39453H337.972L361.5 22.7092V56.5515L337.98 76.6051H25.5093L0.5 55.2813V22.7183Z" fill="url(#paint0_linear_1600_996691467)" stroke="#23263C"></path>
                            <defs>
                                <linearGradient id="paint0_linear_1600_996691467" x1="1.29285" y1="38.9973" x2="362" y2="33.9973" gradientUnits="userSpaceOnUse">
                                    <stop offset="0" stopColor="#431DAB"></stop>
                                    <stop offset="1" stopColor="#AE6DFE"></stop>
                                </linearGradient>
                            </defs>
                        </svg>
                    </span>
                    <span className="btn-shape2">
                        <svg width="271" height="60" viewBox="0 0 271 60" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.5 17.2308L20.1225 0.5H252.042L270.5 17.2217V43.7692L252.05 59.5H20.1225L0.5 42.7692V17.2308Z" fill="#010315" stroke="url(#paint0_linear_1742_6611589)"></path>
                            <defs>
                                <linearGradient id="paint0_linear_1742_6611589" x1="271" y1="61.5556" x2="232.791" y2="-3.08978" gradientUnits="userSpaceOnUse">
                                    <stop offset="0" stopColor="#6780D2"></stop>
                                    <stop offset="1" stopColor="#2F3B8D"></stop>
                                </linearGradient>
                            </defs>
                        </svg>
                    </span>
                </Link>
            </div>
        </section >
    );
}

export default IndustrieSection;