import React from 'react'
import blogs from '../../../api/blogs'
import { Fade } from "react-awesome-reveal";
import { Link } from 'react-router-dom'
import shape from '../../../images/shape/blog-shape01.png'


const CloudBlogSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="blog pos-rel z-1 pt-150 pb-150" style={{ backgroundColor: "#212877" }}>
            <div className="container">
                <div className="cd-blog-wrap">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-9">
                            <div className="sec-title--five text-center white-sec-title mb-40">
                                <Fade direction='up' triggerOnce={'false'} duration={1000} delay={9}>
                                    <div>
                                        <h2 className="title wow fadeInUp" data-wow-duration="600ms">Latest News FROM OUR EXPERTS</h2>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-none-30 justify-content-center">
                        {blogs.slice(6, 9).map((blog, Bitem) => (
                            <div className="col-lg-4 col-md-6 mt-30" key={Bitem}>
                                <div className="cd-blog-item wow fadeInUp" data-wow-delay="0ms" data-wow-duration="600ms">
                                    <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`} className="xb-item--img"><img src={blog.screens} alt="" /></Link>
                                    <div className="xb-item--holder pt-40">
                                        <span className="xb-item--sub_title">{blog.author}</span>
                                        <h2 className="xb-item--title border-effect"><Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>{blog.title}</Link></h2>
                                        <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`} className="xb-item--arrow"><i className="far fa-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="xb-btn mt-70 text-center wow fadeInUp" data-wow-duration="600ms">
                        <Link onClick={ClickHandler} to="/blog" className="thm-btn thm-btn--devops thm-btn--devops_yellow">Read all Blog</Link>
                    </div>
                </div>
            </div>
            <div className="cd-sec-shape">
                <div className="shape shape--three"><img src={shape} alt="" /></div>
            </div>
        </section>
    )
}

export default CloudBlogSection;