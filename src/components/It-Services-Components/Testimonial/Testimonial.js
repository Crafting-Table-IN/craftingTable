import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Fade } from "react-awesome-reveal";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Bg from "../../../images/bg/tes-glassisom.jpg";

import ticon1 from "../../../images/testimonial/rating-star.png";
import ticon2 from "../../../images/testimonial/rating-star.png";
import icon1 from "../../../images/icon/tes-icon.png";
import icon2 from "../../../images/icon/tes-icon02.png";
import icon3 from "../../../images/icon/tes-icon03.png";
import tImg1 from "../../../images/testimonial/tes-img01.png";
import tImg2 from "../../../images/testimonial/tes-img02.png";
import tImg3 from "../../../images/testimonial/tes-img03.png";

const testimonial = [
    {
        id: "01",
        tImg: tImg1,
        tIcon: icon1,
        Title: "Amazing software services",
        Des: "The solutions they're providing is helping our business run more smoothly. We've been able to make quick developments with them, meeting our product vision within the timeline we set up. Listen to them because they can give strong advice about how to build good products.",
        Name: "Maverick Phoenix",
        sub: "Board Member, UNIQA",
        country: "Seattle, Ukraine",
    },
    {
        id: "02",
        tImg: tImg2,
        tIcon: icon2,
        Title: "Amazing software services",
        Des: "The solutions they're providing is helping our business run more smoothly. We've been able to make quick developments with them, meeting our product vision within the timeline we set up. Listen to them because they can give strong advice about how to build good products.",
        Name: "Maverick Phoenix",
        sub: "Board Member, UNIQA",
        country: "Seattle, Ukraine",
    },
    {
        id: "03",
        tImg: tImg3,
        tIcon: icon3,
        Title: "Amazing software services",
        Des: "The solutions they're providing is helping our business run more smoothly. We've been able to make quick developments with them, meeting our product vision within the timeline we set up. Listen to them because they can give strong advice about how to build good products.",
        Name: "Maverick Phoenix",
        sub: "Board Member, UNIQA",
        country: "Seattle, Ukraine",
    },
    {
        id: "04",
        tImg: tImg2,
        tIcon: icon2,
        Title: "Amazing software services",
        Des: "The solutions they're providing is helping our business run more smoothly. We've been able to make quick developments with them, meeting our product vision within the timeline we set up. Listen to them because they can give strong advice about how to build good products.",
        Name: "Maverick Phoenix",
        sub: "Board Member, UNIQA",
        country: "Seattle, Ukraine",
    },
];

const Testimonial = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);
    const paginationRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current && prevRef.current && nextRef.current) {
            swiperRef.current.params.navigation.prevEl = prevRef.current;
            swiperRef.current.params.navigation.nextEl = nextRef.current;
            swiperRef.current.navigation.init();
            swiperRef.current.navigation.update();
        }

        const updatePagination = () => {
            const current = swiperRef.current.realIndex + 1;
            const total = swiperRef.current.slides.length;

            const currentElem = paginationRef.current.querySelector(".swiper-pagination-current");
            const totalElem = paginationRef.current.querySelector(".swiper-pagination-total");

            if (currentElem && totalElem) {
                currentElem.textContent = current;
                totalElem.textContent = total;
            }
        };

        if (swiperRef.current) {
            swiperRef.current.on("slideChange", updatePagination);
        }

        return () => {
            if (swiperRef.current) {
                swiperRef.current.off("slideChange", updatePagination);
            }
        };
    }, []);

    return (
        <section
            className="testimonial o-hidden pos-rel pt-125 pb-200 bg_img"
            style={{
                backgroundImage: `url(${Bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="tes-heading text-center mb-60">
                <Fade direction='up' triggerOnce={'false'} duration={1000} delay={9}>
                    <div>
                        <h2 className="title wow fadeInDown" data-wow-delay="100ms" data-wow-duration="600ms">
                            Thousands of customers can't be wrong
                        </h2>
                    </div>
                </Fade>
            </div>
            <div className="testimonial-slider pb-40">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={3}
                    loop={true}
                    speed={400}
                    autoplay={{
                        delay: 6000,
                        disableOnInteraction: false,
                    }}
                    navigation={{
                        nextEl: nextRef.current,
                        prevEl: prevRef.current,
                    }}
                    pagination={{
                        el: ".swiper-pagination",
                        type: "fraction",
                        clickable: true,
                    }}
                    breakpoints={{
                        1600: { slidesPerView: 3 },
                        768: { slidesPerView: 2 },
                        576: { slidesPerView: 1 },
                        0: { slidesPerView: 1 },
                    }}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                >
                    {testimonial.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="testimonial-item">
                                <div className="xb-item--holder">
                                    <div className="xb-item--author">
                                        <div className="img img--one">
                                            <img src={item.tIcon} alt="" />
                                        </div>
                                        <div className="img img--two">
                                            <img src={item.tImg} alt="" />
                                        </div>
                                        <div className="xb-item--avatar mt-20">
                                            <h3 className="xb-item--name">{item.Name}</h3>
                                            <span className="xb-item--desig">{item.sub}</span>
                                        </div>
                                    </div>
                                    <p className="xb-item--content">{item.Des}</p>
                                </div>
                                <div className="xb-item--bottom ul_li_between">
                                    <div className="xb-item--rating">
                                        <span>
                                            <img src={ticon1} alt="" /> 5.0
                                        </span>
                                    </div>
                                    <span className="xb-item--quat">
                                        <img src={ticon2} alt="" />
                                    </span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="testimonial-pagination" ref={paginationRef}>
                    <div className="swiper-buttons swiper-button-next" ref={nextRef}>
                        <i className="far fa-angle-right"></i>
                    </div>
                    <div className="swiper-buttons swiper-button-prev" ref={prevRef}>
                        <i className="far fa-angle-left"></i>
                    </div>
                    <div className="swiper-pagination swiper-pagination-fraction">
                        <span className="swiper-pagination-current">1</span> /{" "}
                        <span className="swiper-pagination-total">4</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
