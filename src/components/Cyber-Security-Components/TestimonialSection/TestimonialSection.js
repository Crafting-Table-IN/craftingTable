import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'swiper/css';
import 'swiper/css/pagination';
import { Fade } from "react-awesome-reveal";
import brand1 from '../../../images/brand/brd-logo01.png'
import brand2 from '../../../images/brand/brd-logo02.png'
import brand3 from '../../../images/brand/brd-logo03.png'
import brand4 from '../../../images/brand/brd-logo04.png'
import brand5 from '../../../images/brand/brd-logo05.png'
import icon from '../../../images/icon/like-tag.svg'

import tsImg1 from '../../../images/testimonial/cs-tes01.png'
import tsImg2 from '../../../images/testimonial/cs-tes02.png'
import tsImg3 from '../../../images/testimonial/cs-tes03.png'
import tsImg4 from '../../../images/testimonial/cs-tes04.png'
import tsImg5 from '../../../images/testimonial/cs-tes05.png'

import shape1 from '../../../images/shape/linea-bg-shape.png'
import shape2 from '../../../images/shape/world.png'
import shape3 from '../../../images/shape/linear-shape.png'

const customerStories = [
    {
        left: {
            img: tsImg1,
            subTitle: "customer story",
            logo: "assets/img/brand/brd-logo01.png",
            title: "Luminous enhances data security.",
        },
        right: {
            content: "“With Innomax's real-time threat detection, our sensitive data is more secure than ever. Their team implemented advanced security measures, ensuring we meet all compliance requirements.”",
            author: {
                name: "Mike Davis",
                designation: "CTO at Luminous",
            },
            stats: [
                {
                    number: "30 min",
                    text: "to detect and neutralize threats, from 3+ hours.",
                },
                {
                    number: "99.8%",
                    text: "Enhanced data protection with real-time monitoring.",
                },
            ],
        },
    },
    {
        left: {
            img: tsImg2,
            subTitle: "customer story",
            logo: "assets/img/brand/brd-logo02.png",
            title: "Bitstamp secures customer.",
        },
        right: {
            content: "“Innomax transformed our security approach, giving us the confidence to protect our customers' data. Their solutions strengthen our defenses while ensuring full compliance with industry regulations.”",
            author: {
                name: "John Lee",
                designation: "CEO at Bitstamp",
            },
            stats: [
                {
                    number: "20 min",
                    text: "response time, down from over an hour.",
                },
                {
                    number: "100%",
                    text: "compliance achieved with industry security standards.",
                },
            ],
        },
    },
    {
        left: {
            img: tsImg3,
            subTitle: "customer story",
            logo: "assets/img/brand/brd-logo03.png",
            title: "Santander boosts cybersecurity.",
        },
        right: {
            content: "“Thanks to innomax, we have a strong security framework that protects our data and ensures compliance with industry regulations. Their solutions provide real-time threat detection, with confidence.”",
            author: {
                name: "Sophia Turner",
                designation: "Founder at Santander",
            },
            stats: [
                {
                    number: "45 min",
                    text: "To detect and respond, down from 2+ hours.",
                },
                {
                    number: "99.9%",
                    text: "Protection Near-total visibility against cyber threats.",
                },
            ],
        },
    },
    {
        left: {
            img: tsImg4,
            subTitle: "customer story",
            logo: "assets/img/brand/brd-logo04.png",
            title: "FirstQuadrant mitigates risk.",
        },
        right: {
            content: "“Innomax’s proactive solutions have greatly reduced our risk exposure. Their expert team implemented strong defenses, helping us stay ahead of evolving cyber threats and keep our business secure.”",
            author: {
                name: "Laura Chen",
                designation: "Founder at FirstQuadrant",
            },
            stats: [
                {
                    number: "15 min",
                    text: "average detection time, a 70% improvement.",
                },
                {
                    number: "98.9%",
                    text: "threat mitigation security success rate.",
                },
            ],
        },
    },
    {
        left: {
            img: tsImg5,
            subTitle: "customer story",
            logo: "assets/img/brand/brd-logo05.png",
            title: "Madrid Safeguards Against Cyber.",
        },
        right: {
            content: "“Thanks to Innomax, we’ve greatly reduced our vulnerability to cyberattacks. Their advanced solutions give us confidence in our security strategy, ensuring robust protection against threats.”",
            author: {
                name: "Sophia Turner",
                designation: "Founder at Madrid",
            },
            stats: [
                {
                    number: "27 min",
                    text: "to detect and prevent threats, down from 90 minutes.",
                },
                {
                    number: "97.7%",
                    text: "uptime ensured through secure systems integration.",
                },
            ],
        },
    },
];


const TestimonialSection = (props) => {


    const sliderRef = useRef(null);
    const navSliderRef = useRef(null);

    const mainSliderSettings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        adaptiveHeight: true,
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
            const slides = document.querySelectorAll(".cs-testimonial-slider-nav .slick-slide");
            slides.forEach((slide) => slide.classList.remove("is-active"));
            slides[next]?.classList.add("is-active");
        },
    };

    const handleNavClick = (index) => {
        sliderRef.current.slickGoTo(index);
    };

    return (
        <section className="testimonial pt-160 pos-rel z-1">
            <div className="container">
                <div className="cs-tes_wrap">
                    <div className="sec-title--two sec-title--three text-center mb-175">
                        <Fade direction='down' triggerOnce={'false'} duration={1000} delay={9}>
                            <div>
                                <span className="sub-title wow fadeInDown" data-wow-duration="600ms"><img src={icon} alt="" /><span>Customer stories</span></span>
                            </div>
                        </Fade>
                        <Fade direction='up' triggerOnce={'false'} duration={1200} delay={9}>
                            <div>
                                <h2 className="title wow fadeInDown" data-wow-duration="600ms">Our amazing customers.</h2>
                            </div>
                        </Fade>
                    </div>
                    <div className="cs-tes-content">
                        <Slider ref={sliderRef} {...mainSliderSettings} className="cs-testimonial-slider">
                            {customerStories.map((story, index) => (
                                <div className="cs-tes-item" key={index}>
                                    <div className="xb-left-item">
                                        <div className="xb-item--img">
                                            <img src={story.left.img} alt="" />
                                        </div>
                                        <div className="xb-item--header">
                                            <span className="xb-item--sub-title">{story.left.subTitle}</span>
                                            <div className="xb-item--logo">
                                                <img src={story.left.logo} alt="" />
                                            </div>
                                            <h2 className="xb-item--title">{story.left.title}</h2>
                                        </div>
                                    </div>
                                    <div className="xb-right-item">
                                        <p className="xb-item--content">{story.right.content}</p>
                                        <div className="xb-item--author">
                                            <span className="xb-item--name">{story.right.author.name}</span>
                                            <span className="xb-item--desig">{story.right.author.designation}</span>
                                        </div>
                                        <div className="xb-item--holder ul_li">
                                            {story.right.stats.map((stat, statIndex) => (
                                                <div className="xb-item--time" key={statIndex}>
                                                    <span className="xb-item--number">{stat.number}</span>
                                                    <span className="xb-item--text">{stat.text}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </Slider>
                    </div>
                    <div className="cs-bran-nav">
                        <div className="barnd-logo cs-brand-logo">
                            <Slider
                                ref={navSliderRef}
                                {...navSliderSettings}
                                className="cs-testimonial-slider-nav"
                                beforeChange={(current, next) => {
                                    const slides = document.querySelectorAll(".cs-testimonial-slider-nav .slick-slide");
                                    slides.forEach((slide) => slide.classList.remove("is-active"));
                                    slides[next]?.classList.add("is-active");
                                }}
                            >
                                <div className="brand-items" onClick={() => handleNavClick(0)}>
                                    <div className="xb-img">
                                        <img src={brand1} alt="" />
                                    </div>
                                    <div className="xb-line"></div>
                                </div>
                                <div className="brand-items" onClick={() => handleNavClick(1)}>
                                    <div className="xb-img">
                                        <img src={brand2} alt="" />
                                    </div>
                                    <div className="xb-line"></div>
                                </div>
                                <div className="brand-items" onClick={() => handleNavClick(2)}>
                                    <div className="xb-img">
                                        <img src={brand5} alt="" />
                                    </div>
                                    <div className="xb-line"></div>
                                </div>
                                <div className="brand-items" onClick={() => handleNavClick(3)}>
                                    <div className="xb-img">
                                        <img src={brand3} alt="" />
                                    </div>
                                    <div className="xb-line"></div>
                                </div>
                                <div className="brand-items" onClick={() => handleNavClick(4)}>
                                    <div className="xb-img">
                                        <img src={brand4} alt="" />
                                    </div>
                                    <div className="xb-line"></div>
                                </div>
                                <div className="brand-items" onClick={() => handleNavClick(5)}>
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
            <div className="cs-tes-shape">
                <div className="shape shape--one"><img src={shape1} alt="" /></div>
                <div className="shape shape--two"><img className="world" src={shape2} alt="" /></div>
                <div className="shape shape--three"><img src={shape3} alt="" /></div>
            </div>
        </section>
    );
}

export default TestimonialSection;