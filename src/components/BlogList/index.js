import { useRef, useEffect } from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom'
import blogs from '../../api/blogs'
import BlogSidebar from '../BlogSidebar';
import icon1 from '../../images/icon/prev-icon.png'
import icon2 from '../../images/icon/next-icon.png'
import bImg from '../../images/blog/b-img01.jpg'

const BlogList = (props) => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current && prevRef.current && nextRef.current) {
            swiperRef.current.params.navigation.prevEl = prevRef.current;
            swiperRef.current.params.navigation.nextEl = nextRef.current;
            swiperRef.current.navigation.init();
            swiperRef.current.navigation.update();
        }
    }, []);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div>
            <div className="blog pt-70">
                <div className="container">
                    <div className="blog-slider swiper-container pos-rel">
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={50}
                            slidesPerView={1}
                            loop={true}
                            speed={1800}
                            parallax={true}
                            ref={swiperRef}
                            onBeforeInit={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                        >
                            {blogs.slice(0, 3).map((blog, Bitem) => (
                                <SwiperSlide key={Bitem}>
                                    <div className="blog-slide-item">
                                        <div className="xb-item--img"><Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}> <img src={bImg} alt="Blog Post" /></Link></div>
                                        <div className="xb-item--holder">
                                            <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`} className="xb-item--tag">software</Link>
                                            <h2 className="xb-item--title border-effect"><Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>{blog.title}</Link></h2>
                                            <p className="xb-item--content">Embark on an enlightening journey through the realm of IT solutions as we delve into the <br /> latest technological advancements shaping the digital landscape.</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="swiper-pagination"></div>
                        <div className="blog-item_button">
                            <div className="blog-swiper-btn swiper-button-prev" ref={prevRef}><img src={icon1} alt="" /></div>
                            <div className="blog-swiper-btn swiper-button-next" ref={nextRef}><img src={icon2} alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="blog_details_section pb-130 mt-120">
                <div className="container">
                    <div className="row mt-none-30 g-0 align-items-start">
                        <div className="col-lg-8 mt-30">
                            <div className="blog_details_content">
                                {blogs.slice(0, 6).map((blog, Bitem) => (
                                    <div className="blog_details_item ul_li" key={Bitem}>
                                        <div className="xb-item--img"><Link onClick={ClickHandler} to="/blog"><img src={blog.screens} alt="" /></Link></div>
                                        <div className="xb-item--holder">
                                            <span className="xb-item--text">{blog.thumb}</span>
                                            <h3 className="xb-item--title border-effect"><Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>{blog.title}</Link></h3>
                                            <span className="xb-item--content">{blog.description}</span>
                                            <div className="xb-item--button mt-50">
                                                <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>Read more <i className="far fa-arrow-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <ul className="blog-pagination ul_li">
                                    <li><Link onClick={ClickHandler} to="/blog"><i className="fas fa-chevron-double-left"></i></Link></li>
                                    <li><Link onClick={ClickHandler} to="/blog">1</Link></li>
                                    <li className="active"><Link onClick={ClickHandler} to="/blog">2</Link></li>
                                    <li><Link onClick={ClickHandler} to="/blog">3</Link></li>
                                    <li><Link onClick={ClickHandler} to="/blog"><i className="fas fa-chevron-double-right"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                        <BlogSidebar />
                    </div>
                </div>
            </section>
        </div>

    )

}

export default BlogList;
