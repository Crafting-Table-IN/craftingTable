import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pimg1 from '../../../images/brand/brand-logo01.png'
import pimg2 from '../../../images/brand/brand-logo02.png'
import pimg3 from '../../../images/brand/brand-logo03.png'
import pimg4 from '../../../images/brand/brand-logo04.png'
import pimg5 from '../../../images/brand/brand-logo05.png'
import pimg6 from '../../../images/brand/brand-logo06.png'
import pimg7 from '../../../images/brand/brand-logo05.png'

const partners = [
    {
        pImg: pimg1,
    },
    {
        pImg: pimg2,
    },
    {
        pImg: pimg3,
    },
    {
        pImg: pimg4,
    },
    {
        pImg: pimg5,
    },
    {
        pImg: pimg6,
    },
    {
        pImg: pimg7,
    },
    {
        pImg: pimg2,
    },
]

var settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,

    responsive: [
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 450,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 340,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
    ]
};



const PartnerSection = (props) => {

    return (
        <section className="brand pt-110 pb-130">
            <div className="container">
                <div className="o-hidden">
                    <div className="brand-sub_title">
                        <span>Trusted by <b>500+</b> teams to empower <b>2,00,000+</b> people</span>
                    </div>
                    <div className="brand-wrap brand-marquee">
                        <Slider {...settings}>
                            {partners.map((partner, pitem) => (
                                <div className="brand-logo" key={pitem}>
                                    <img src={partner.pImg} alt="Client Logo" />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PartnerSection;