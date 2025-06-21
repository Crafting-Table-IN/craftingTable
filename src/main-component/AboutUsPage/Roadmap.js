import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import shape1 from '../../images/shape/line-shape03.png'
import shape2 from '../../images/shape/line-shape04.png'
import shape3 from '../../images/shape/pattern02.png'
import shape4 from '../../images/shape/monitor-shape.png'
import shape5 from '../../images/shape/blur-shape.png'

const RoadmapSlider = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const roadmapData = [
        {
            quarter: "Q-1",
            year: "2012",
            title: "Innomax was founded",
            content:
                "Innomax started in USA with only five employees. All working from the cheapest office we could find (with hideous green walls, fluorescent lighting, and no windows).",
        },
        {
            quarter: "Q-2",
            year: "2014",
            title: "We grew to 40 full-time employees",
            content:
                "In 2014, Innomax completed over 100 SEO audits, helping clients recover from Google Penguin penalties. It was also the year they upgraded their office—now with windows—marking a new phase of growth for the company.",
        },
        {
            quarter: "Q-3",
            year: "2016",
            title: "Ranked one of the top 3 SEO Company",
            content:
                "By 2016, our hard work was starting to be recognized – as we were rated one of the top 3 SEO companies in Ukraine. At this point, we had about 60 employees working full-time on client projects.",
        },
        {
            quarter: "Q-4",
            year: "2018",
            title: "Sharing Our SEO Expertise Globally",
            content:
                "By 2018, InnoMax attracted a primarily international clientele from countries like the US, UK, Australia, Norway, and Japan. They also began sharing their SEO expertise globally, speaking at conferences like the Chiang Mai SEO Conference and LRT Conference.",
        },
        {
            quarter: "Q-5",
            year: "2024",
            title: "Present",
            content:
                "Today, InnoMax has over 200 employees, mostly based in Ukraine, who continue working full-time despite the war. The company supports its staff from afar while donating proceeds to the army.",
        },
        {
            quarter: "Q-2",
            year: "2014",
            title: "We grew to 40 full-time employees",
            content:
                "In 2014, Innomax completed over 100 SEO audits, helping clients recover from Google Penguin penalties. It was also the year they upgraded their office—now with windows—marking a new phase of growth for the company.",
        },
        {
            quarter: "Q-3",
            year: "2016",
            title: "Ranked one of the top 3 SEO Company",
            content:
                "By 2016, our hard work was starting to be recognized – as we were rated one of the top 3 SEO companies in Ukraine. At this point, we had about 60 employees working full-time on client projects.",
        },
    ];

    return (
        <section className="roadmap roadmap-pb pt-130 pb-200 pos-rel" style={{ backgroundColor: "#0F55DC" }}>
            <div className="container">
                <div className="sa-tes_top roadmap-top pos-rel mb-85">
                    <div className="sec-title--two">
                        <div className="sub-title sub-title--strock wow fadeInDown" data-wow-duration="600ms"><img src="assets/img/icon/process-icon.svg" alt="" />Our Journey</div>
                        <h2 className="title clr-white wow fadeInDown" data-wow-delay="150ms" data-wow-duration="600ms">Our Journey 0 to 200 Clients</h2>
                    </div>
                    <div className="sa-tes_button roadmap-button">
                        <div className="sa-swiper-btn swiper-button-prev" ref={prevRef}><i className="fal fa-angle-left"></i></div>
                        <div className="sa-swiper-btn active swiper-button-next" ref={nextRef}><i className="fal fa-angle-right"></i></div>
                    </div>
                </div>
            </div>
            <div className="roadmap-slider-container">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    loop={true}
                    spaceBetween={50}
                    speed={400}
                    slidesPerView={3}
                    centeredSlides={true}
                    autoplay={{
                        delay: 6000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        el: ".swiper-pagination",
                        clickable: true,
                    }}
                    navigation={{
                        nextEl: nextRef.current,
                        prevEl: prevRef.current,
                    }}
                    breakpoints={{
                        1600: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        576: {
                            slidesPerView: 1,
                        },
                        0: {
                            slidesPerView: 1,
                        },
                    }}
                    className="raodmap-slider"
                >
                    {roadmapData.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="roadmap-item">
                                <div className="xb-item--top">
                                    <img src={shape1} alt="" />
                                    <span className="xb-item--ques">{item.quarter}</span>
                                    <img src={shape2} alt="" />
                                </div>
                                <div className="xb-item--holder">
                                    <span className="xb-item--year">{item.year}</span>
                                    <h3 className="xb-item--title">{item.title}</h3>
                                    <p className="xb-item--content">{item.content}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Pagination */}
                <div className="swiper-pagination"></div>
            </div>
            <div className="roadmap-shape">
                <div className="shape shape--one"><img src={shape3} alt=""/></div>
                <div className="shape shape--two"><img src={shape4} alt=""/></div>
                <div className="shape shape--three"><img src={shape5} alt=""/></div>
            </div>
        </section>
    );
};

export default RoadmapSlider;
