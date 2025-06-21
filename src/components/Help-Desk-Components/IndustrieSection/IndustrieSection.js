import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
import hicon from '../../../images/icon/medal-star-black.svg'
import sIcon1 from '../../../images/award/hd-img01.png'
import sIcon2 from '../../../images/award/hd-img02.png'
import sIcon3 from '../../../images/award/hd-img03.png'
import sIcon4 from '../../../images/award/hd-img04.png'
import sIcon5 from '../../../images/award/hd-img05.png'
import sIcon6 from '../../../images/award/hd-img06.png'

const Industrie = [
    {
        icon: sIcon1,
    },
    {
        icon: sIcon2,
    },
    {
        icon: sIcon3,
    },
    {
        icon: sIcon4,
    },
    {
        icon: sIcon5,
    },
    {
        icon: sIcon6,
    },
    {
        icon: sIcon1,
    },
    {
        icon: sIcon2,
    },
    {
        icon: sIcon3,
    },
    {
        icon: sIcon4,
    },
    {
        icon: sIcon5,
    },
    {
        icon: sIcon6,
    },
    {
        icon: sIcon1,
    },
    {
        icon: sIcon2,
    },
    {
        icon: sIcon3,
    },
    {
        icon: sIcon4,
    },
    {
        icon: sIcon5,
    },
    {
        icon: sIcon6,
    }


]

const IndustrieSection = (props) => {

    return (
        <section className="award pt-130 pb-120">
            <div className="sec-title--two sec-title--four text-center mb-25">
                <div className="sub-title"><img src={hicon} alt="" />Our awards</div>
            </div>
            <div className="hd-award-slider">
                <Swiper
                    className="hd-award-slider"
                    loop={true}
                    spaceBetween={40}
                    speed={400}
                    slidesPerView={9}
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
                            <div className="hd-award-item" key={i}>
                                <div className="xb-img">
                                    <img src={insdustry.icon} alt="" />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

export default IndustrieSection;