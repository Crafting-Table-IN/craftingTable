import React, { useRef } from "react";
import Project from '../../api/project'
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'swiper/css';
import 'swiper/css/pagination';
import { Fade } from "react-awesome-reveal";
import brand1 from '../../images/brand/brand-logo03.png'
import brand2 from '../../images/brand/brand-logo02.png'
import brand3 from '../../images/brand/brand-logo01.png'
import brand4 from '../../images/brand/brand-logo04.png'
import icon from '../../images/icon/eye-icon.svg'

const ProjectSection = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const sliderRef = useRef(null);
    const navSliderRef = useRef(null);

    const mainSliderSettings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        adaptiveHeight: true,
        centerMode: true,
        useTransform: true,
        centerPadding: "300px",
        cssEase: "cubic-bezier(0.77, 0, 0.18, 1)",
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    centerPadding: "150px",
                },
            },
            {
                breakpoint: 640,
                settings: {
                    centerPadding: "100px",
                },
            },
            {
                breakpoint: 420,
                settings: {
                    centerPadding: "20px",
                },
            },
        ],
        afterChange: (currentSlide) => {
            navSliderRef.current.slickGoTo(currentSlide);
        },
    };

    const navSliderSettings = {
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: false,
        arrows: false,
        focusOnSelect: true,
        infinite: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 420,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
        ],
        beforeChange: (_, next) => {
            const slides = document.querySelectorAll(".seo-project-slider-nav .slick-slide");
            slides.forEach((slide) => slide.classList.remove("is-active"));
            slides[next]?.classList.add("is-active");
        },
    };

    const handleNavClick = (index) => {
        sliderRef.current.slickGoTo(index);
    };

    return (
        <section className="project o-hidden pb-140">
            <div className="container">
                <div className="sa-project-top ul_li_between mb-25">
                    <div className="sec-title--two mb-30">
                        <Fade direction='up' triggerOnce={'false'} duration={1000} delay={9}>
                            <div>
                                <span className="sub-title wow fadeInDown" data-wow-duration="600ms"><img src={icon} alt="" />Case study</span>
                            </div>
                        </Fade>
                        <Fade direction='up' triggerOnce={'false'} duration={1000} delay={9}>
                            <div>
                                <h2 className="title wow skewIn" data-wow-duration="600ms">Our resent SEO work</h2>
                            </div>
                        </Fade>
                    </div>
                    <div className="xb-btn text-center wow fadeInRight mb-30" data-wow-duration="600ms">
                        <Fade direction='right' triggerOnce={'false'} duration={1000} delay={9}>
                            <div>
                                <Link onClick={ClickHandler} to={'/casestudy'} className="thm-btn thm-btn--aso">View more casestudy</Link>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
            <div className="sa-project_wrapper">
                <div className="seo-project-slider-inner">
                    <div className="seo-project-slider">
                        <Slider ref={sliderRef} {...mainSliderSettings} className="seo-project-slider">
                            {Project.slice(0, 4).map((project, prj) => (
                                <div className="sa-project-item-wrap" key={prj}>
                                    <div className="sa-project-item bg_img" style={{ backgroundImage: `url(${project.pImg})` }}>
                                        <div className="xb-item--inner ul_li_between pos-rel z-1">
                                            <div className="xb-item--project_title">
                                                <h2 className="xb-item--title">{project.title}</h2>
                                                <p className="xb-item--content">{project.description}</p>
                                                <div className="xb-btn mt-50">
                                                    <Link onClick={ClickHandler} to={`/portfolio_details/${project.slug}`} className="thm-btn thm-btn--border">Read case study<span><svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10.7354 3.14709C10.8167 2.74092 10.5533 2.3458 10.1471 2.26456L3.52817 0.94078C3.122 0.859546 2.72688 1.12296 2.64565 1.52913C2.56441 1.9353 2.82782 2.33042 3.23399 2.41165L9.11748 3.58835L7.94078 9.47183C7.85955 9.878 8.12296 10.2731 8.52913 10.3544C8.9353 10.4356 9.33042 10.1722 9.41165 9.76601L10.7354 3.14709ZM1.41603 9.62404L10.416 3.62404L9.58398 2.37596L0.583975 8.37596L1.41603 9.62404Z" fill="#0C111D" />
                                                    </svg></span></Link>
                                                </div>
                                            </div>
                                            <div className="xb-item--item-box mt-none-50">
                                                <div className="xb-item--item">
                                                    <span className="xb-item--number">{project.rnumber}%</span>
                                                    <span className="xb-item--text">{project.rtext}</span>
                                                </div>
                                                <div className="xb-item--item border-blue">
                                                    <span className="xb-item--number">${project.tnumber}k</span>
                                                    <span className="xb-item--text">{project.ttext}</span>
                                                </div>
                                                <div className="xb-item--item border-sky">
                                                    <span className="xb-item--number">{project.snumber}%</span>
                                                    <span className="xb-item--text">{project.stext}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
                <div className="sa-projecr_brand pt-70">
                    <div className="container">
                        <div className="seo-project-slider-nav">
                            <Slider
                                ref={navSliderRef}
                                {...navSliderSettings}
                                className="seo-project-slider-nav"
                                beforeChange={(current, next) => {
                                    const slides = document.querySelectorAll(".seo-project-slider-nav .slick-slide");
                                    slides.forEach((slide) => slide.classList.remove("is-active"));
                                    slides[next]?.classList.add("is-active");
                                }}
                            >
                                <div className="sa-brand-item" onClick={() => handleNavClick(0)}>
                                    <div className="xb-img">
                                        <img src={brand1} alt="" />
                                    </div>
                                    <div className="xb-line"></div>
                                </div>
                                <div className="sa-brand-item" onClick={() => handleNavClick(1)}>
                                    <div className="xb-img">
                                        <img src={brand4} alt="" />
                                    </div>
                                    <div className="xb-line"></div>
                                </div>
                                <div className="sa-brand-item" onClick={() => handleNavClick(2)}>
                                    <div className="xb-img">
                                        <img src={brand2} alt="" />
                                    </div>
                                    <div className="xb-line"></div>
                                </div>
                                <div className="sa-brand-item" onClick={() => handleNavClick(3)}>
                                    <div className="xb-img">
                                        <img src={brand3} alt="" />
                                    </div>
                                    <div className="xb-line"></div>
                                </div>
                                <div className="sa-brand-item" onClick={() => handleNavClick(4)}>
                                    <div className="xb-img">
                                        <img src={brand4} alt="" />
                                    </div>
                                    <div className="xb-line"></div>
                                </div>
                                <div className="sa-brand-item" onClick={() => handleNavClick(5)}>
                                    <div className="xb-img">
                                        <img src={brand1} alt="" />
                                    </div>
                                    <div className="xb-line"></div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProjectSection;