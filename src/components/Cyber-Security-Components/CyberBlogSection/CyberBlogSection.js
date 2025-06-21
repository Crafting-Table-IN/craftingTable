import React from 'react'
import blogs from '../../../api/blogs'
import { Fade } from "react-awesome-reveal";
import { Link } from 'react-router-dom'
import hicon from '../../../images/icon/blg-cap.svg'
import bicon1 from '../../../images/icon/arrow-white.png'
import bicon2 from '../../../images/shape/blg-line.png'
import bicon3 from '../../../images/icon/profile-circle.png'
import bicon4 from '../../../images/icon/menu-board.png'


const CyberBlogSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="blog pt-155">
            <div className="container">
                <div className="sec-title--two sec-title--three text-center mb-60">
                    <Fade direction='down' triggerOnce={'false'} duration={1000} delay={9}>
                        <div>
                            <span className="sub-title wow fadeInDown" data-wow-duration="600ms"><img src={hicon} alt="" /><span>Our blog post</span></span>
                        </div>
                    </Fade>
                    <Fade direction='down' triggerOnce={'false'} duration={1200} delay={9}>
                        <div>
                            <h2 className="title wow fadeInDown" data-wow-duration="600ms">Read our latest blog</h2>
                        </div>
                    </Fade>
                </div>
                <div className="row justify-content-center mt-none-30">
                    {blogs.slice(6, 9).map((blog, Bitem) => (
                        <div className="col-lg-4 col-md-6 mt-30" key={Bitem}>
                            <div className="xb-blog-item wow fadeInUp" data-wow-delay="0ms" data-wow-duration="600ms">
                                <div className="xb-item--holder">
                                    <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`} className="xb-item--img">
                                        <img src={blog.screens} alt="" />
                                        <div className="xb-item--circle-arrow"><img src={bicon1} alt="" /></div>
                                        <div className="xb-item--line"><img src={bicon2} alt="" /></div>
                                    </Link>
                                </div>
                                <h2 className="xb-item--title border-effect-2"> <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>How to Prevent Ransomware Attacks, Tips for Businesses..</Link></h2>
                                <ul className="xb-item--meta list-unstyled ul_li">
                                    <li><span><img src={bicon3} alt="" /></span>Posted By Johnson</li>
                                    <li><span><img src={bicon4} alt="" /></span>{blog.create_at}</li>
                                </ul>
                            </div>
                        </div>
                    ))}

                </div>
                <div className="xb-btn mt-60 text-center wow fadeInUp" data-wow-delay="300ms" data-wow-duration="600ms">
                    <Link onClick={ClickHandler} to="/blog" className="blc-btn blc-btn--gardiant">
                        <span>See more blog <i className="far fa-angle-right"></i></span>
                        <span className="btn-shape">
                            <svg width="271" height="60" viewBox="0 0 271 60" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.5 17.2308L20.1225 0.5H252.042L270.5 17.2217V43.7692L252.05 59.5H20.1225L0.5 42.7692V17.2308Z" fill="#010315" stroke="url(#paint0_linear_1742_66145)"></path>
                                <defs>
                                    <linearGradient id="paint0_linear_1742_66145" x1="271" y1="61.5556" x2="232.791" y2="-3.08978" gradientUnits="userSpaceOnUse">
                                        <stop offset="0" stopColor="#6780D2"></stop>
                                        <stop offset="1" stopColor="#2F3B8D"></stop>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </span>
                        <span className="btn-shape2">
                            <svg width="362" height="78" viewBox="0 0 362 78" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.5 22.7183L25.5093 1.39453H337.972L361.5 22.7092V56.5515L337.98 76.6051H25.5093L0.5 55.2813V22.7183Z" fill="url(#paint0_linear_1600_9966933)" stroke="#23263C"></path>
                                <defs>
                                    <linearGradient id="paint0_linear_1600_9966933" x1="1.29285" y1="38.9973" x2="362" y2="33.9973" gradientUnits="userSpaceOnUse">
                                        <stop offset="0" stopColor="#431DAB"></stop>
                                        <stop offset="1" stopColor="#AE6DFE"></stop>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default CyberBlogSection;