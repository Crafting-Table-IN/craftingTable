import React from 'react';
import blogs from '../../api/blogs';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom'
import BlogSidebar from '../BlogSidebar';
import blog1 from '../../images/service/cd-image.jpg'
import blog2 from '../../images/blog/blog_details-img01.jpg'
import blog3 from '../../images/blog/blog_details-img02.jpg'
import blog4 from '../../images/blog/blog_details-img03.jpg'
import blog5 from '../../images/blog/blog_details-img04.jpg'

import icon1 from '../../images/icon/icon_calendar.svg'
import icon2 from '../../images/icon/user-black.svg'
import icon3 from '../../images/icon/icon_comment.svg'
import icon4 from '../../images/icon/icon_eye.svg'
import icon5 from '../../images/icon/icon_link.svg'
import icon6 from '../../images/icon/icon_bookmark.svg'
import icon7 from '../../images/icon/icon-left.png'
import icon8 from '../../images/icon/profile-circle.svg'
import icon9 from '../../images/icon/icon-right.png'


const BlogSingle = (props) => {

    const { slug } = useParams()

    const BlogDetails = blogs.find(item => item.slug === slug)

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="blog_details_section pt-70">
            <div className="container">
                <div className="item-details_image pos-rel mb-80">
                    <img src={blog1} alt="" />
                </div>
                <div className="item_details_content pb-80">
                    <ul className="post_meta ul_li list-unstyled">
                        <li>
                            <Link onClick={ClickHandler} to={'/blog'}>
                                <span className="meta_label1">{BlogDetails.thumb}</span>
                            </Link>
                        </li>
                        <li>
                            <Link onClick={ClickHandler} to={'/blog'}>
                                <span className="meta_icon">
                                    <img src={icon1} alt="Icon Calendar" />
                                </span>
                                <span className="meta_label">Last Update: {BlogDetails.create_at}</span>
                            </Link>
                        </li>
                    </ul>
                    <h2 className="item_details_heading">{BlogDetails.title}</h2>
                    <p className="mb-40">Embark on an enlightening journey through the realm of IT solutions as we delve into the latest technological advancements shaping the digital landscape.Embark <br /> on an enlightening journey through the realm of IT solutions as we delve into the latest technological advancements shaping the digital landscape.</p>
                    <div className="row">
                        <div className="col-md-6">
                            <ul className="post_meta list-unstyled ul_li">
                                <li>
                                    <Link onClick={ClickHandler} to={'/blog'}>
                                        <span className="meta_icon">
                                            <img src={icon2} alt="Icon User" />
                                        </span>
                                        <span className="meta_label">by Madura</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={ClickHandler} to={'/blog'}>
                                        <span className="meta_icon">
                                            <img src={icon3} alt="Icon Comment" />
                                        </span>
                                        <span className="meta_label">50 Comments</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={ClickHandler} to={'/blog'}>
                                        <span className="meta_icon">
                                            <img src={icon4} alt="Icon Eye" />
                                        </span>
                                        <span className="meta_label">20k Views</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <ul className="post_meta list-unstyled ul_li justify-content-md-end">
                                <li>
                                    <Link onClick={ClickHandler} to={'/blog'}>
                                        <span className="meta_icon">
                                            <img src={icon5} alt="Icon Link" />
                                        </span>
                                        <span className="meta_label">Copy Link</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={ClickHandler} to={'/blog'}>
                                        <span className="meta_icon">
                                            <img src={icon6} alt="Icon Bookmark" />
                                        </span>
                                        <span className="meta_label">Bookmark</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr className="mt-5" />
                </div>
                <div className="row mt-none-30 g-0 align-items-start">
                    <div className="col-lg-8 mt-30">
                        <div className="blog_details_content">
                            <div className="post_audio">
                                <button className="audio_play_btn" type="button">
                                    <i className="fas fa-play"></i>
                                    <span>6:24</span>
                                    <span>Listen to this article!</span>
                                </button>
                            </div>
                            <h3 className="item_details_info_heading">
                                Revolutionizing business efficiency navigating growth <br /> with optimal IT infrastructure enhancement
                            </h3>
                            <div className="row mb-4">
                                <div className="col-md-6 col-sm-6">
                                    <div className="image_block">
                                        <img src={blog2} alt="Blog" />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6">
                                    <div className="image_block">
                                        <img src={blog3} alt="Blog" />
                                    </div>
                                </div>
                            </div>
                            <p>Gain exclusive insights into the world of IT solutions with innomax distinguished thought leaders. With years of experience and a deep understanding of industry trends, our thought leaders offer invaluable perspectives that illuminate the path to technological excellence. From emerging technologies to innovative strategies, they provide unique insights that inform and inspire. Join us as we delve into the inner workings of IT solutions, exploring the challenges.</p>
                            <p>Embark on an illuminating journey into the world of IT solutions with innomax esteemed thought leaders. Delve deep into the inner workings of technology as our seasoned experts share their wealth of knowledge and experience. With a finger on the pulse of industry trends and a keen eye for innovation, our thought leaders offer unparalleled insights that illuminate the path</p>
                            <div className="blog-details-video mt-70">
                                <iframe width="880" height="440" src="https://www.youtube.com/embed/brvfBk97KyI?si=Q7zy3j4WYFoCYpsQ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            </div>
                            <h3 className="item_details_info_heading">Optimizing growth with IT infrastructure</h3>
                            <p>They provide a comprehensive and in-depth analysis that goes beyond surface-level . Join us as we uncover the secrets of IT solutions, guided by the wisdom and expertise of innomax thought leaders. Prepare to be inspired, informed, and empowered to navigate the ever- landscape of technology with confidence and clarity. you'll gain access to unparalleled expertise and discover new possibilities for success in the ever-evolving world of technology success in the ever-evolving world of technology.y.</p>
                            <div className="row mb-90 align-items-center mt-none-30">
                                <div className="col-md-6 mt-30">
                                    <div className="image_block">
                                        <img src={blog4} alt="Blog" />
                                    </div>
                                </div>
                                <div className="col-md-6 mt-30">
                                    <ul className="iconlist_block">
                                        <li>
                                            <span className="iconlist_text">
                                                Unveiling Emerging Technologies.
                                            </span>
                                        </li>
                                        <li>
                                            <span className="iconlist_text">
                                                Navigating Complex Challenges.
                                            </span>
                                        </li>
                                        <li>
                                            <span className="iconlist_text">
                                                Forecasting Future Trends.
                                            </span>
                                        </li>
                                        <li>
                                            <span className="iconlist_text">
                                                Driving Innovation Strategies.
                                            </span>
                                        </li>
                                        <li>
                                            <span className="iconlist_text">
                                                Exploring Industry Practices.
                                            </span>
                                        </li>
                                        <li>
                                            <span className="iconlist_text">
                                                Empowering Transformation.
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <h3 className="item_details_info_heading">3 Reasons to investing at this moment</h3>
                            <p>
                                Here are three key reasons emphasizing the importance of optimizing ICO infrastructure <br /> for efficiency and growth:
                            </p>
                            <ul className="iconlist_block numlist_block list-unstyled">
                                <li>
                                    <span className="iconlist_text">
                                        1. Enhanced Operational Agility.
                                    </span>
                                </li>
                                <li>
                                    <span className="iconlist_text">
                                        2. Resource Optimization & Cost Efficiency.
                                    </span>
                                </li>
                                <li>
                                    <span className="iconlist_text">
                                        3. Scalability and Innovation.
                                    </span>
                                </li>
                            </ul>
                            <div className="postabmin_block ul_li">
                                <div className="admin_image">
                                    <img src={blog5} alt="Avatar" />
                                </div>
                                <div className="admin_content">
                                    <h4 className="admin_name">About  anderson</h4>
                                    <span className="admin_designation">Content Editor</span>
                                    <p>
                                        A content editor plays a pivotal role in shaping and refining the narrative and quality of digital content. This role involves.
                                    </p>
                                    <ul className="social_icons_blocks list-unstyled ul_li">
                                        <li><Link aria-label="Facebook" to="/blog"><i className="fab fa-facebook-f"></i></Link></li>
                                        <li><Link aria-label="Instagram" to="/blog"><i className="fab fa-instagram"></i></Link></li>
                                        <li><Link aria-label="Linkedin" to="/blog"><i className="fab fa-linkedin-in"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <hr className="mb-50" />
                            <div className="row">
                                <div className="col-md-6">
                                    <ul className="tags_block list-unstyled">
                                        <li><Link onClick={ClickHandler} to={'/blog'}>Cybersecurity</Link></li>
                                        <li><Link onClick={ClickHandler} to={'/blog'}>AppDev</Link></li>
                                        <li><Link onClick={ClickHandler} to={'/blog'}>SEO</Link></li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <ul className="social_icons_block list-unstyled ul_li justify-content-md-end">
                                        <li><Link aria-label="Facebook" to="/blog"><i className="fab fa-facebook-f"></i></Link></li>
                                        <li><Link aria-label="Twitter" to="/blog"><i className="fab fa-twitter"></i></Link></li>
                                        <li><Link aria-label="Linkedin" to="/blog"><i className="fab fa-linkedin-in"></i></Link></li>
                                        <li><Link aria-label="Instagram" to="/blog"><i className="fab fa-instagram"></i></Link></li>
                                        <li><Link aria-label="Social Share" to="/blog"><i className="fas fa-share-alt"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="other_post_nav ul_li_between">
                                <Link onClick={ClickHandler} to={'/blog'} className="post-nav-item">
                                    <div className="xb-item--arrow pos-rel">
                                        <img src={icon7} alt="" />
                                        <span></span>
                                    </div>
                                    <div className="xb-item--holder">
                                        <h3 className="xb-item--title">Exploring IT solutions <br /> ..with innomax</h3>
                                        <span className="xb-item--text"><img src={icon8} alt="" />Christopher</span>
                                    </div>
                                </Link>
                                <Link onClick={ClickHandler} to={'/blog'} className="xb-bar">
                                    <i className="fas fa-th-large"></i>
                                </Link>
                                <Link onClick={ClickHandler} to={'/blog'} className="post-nav-item">
                                    <div className="xb-item--holder">
                                        <h3 className="xb-item--title">Measuring SEO success <br /> key metrics tools..</h3>
                                        <span className="xb-item--text"><img src={icon8} alt="" />Michael</span>
                                    </div>
                                    <div className="xb-item--arrow pos-rel">
                                        <img src={icon9} alt="" />
                                        <span></span>
                                    </div>
                                </Link>
                            </div>
                            <div className="item_details-newslatter">
                                <div className="xb-item--holder ul_li_between align-items-start">
                                    <div className="xb-item-heading_info">
                                        <h3 className="item_details_info_heading">Subscribe to our updates</h3>
                                        <p>Stay up to date! Get all of our resources and news <br /> delivered straight to your inbox.</p>
                                    </div>
                                    <span className="xb-item--bell-icon"><i className="fas fa-bell"></i></span>
                                </div>
                                <div className="xb-item--item-input_field pos-rel">
                                    <input type="email" placeholder="innomax@example .com" />
                                    <button type="submit">Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <BlogSidebar />
                </div>
                <div className="related-blog pt-130 pb-130">
                    <h2 className="related-blog-title">Browse related blog</h2>
                    <div className="row mt-none-30">
                        {blogs.slice(0, 3).map((blog, Bitem) => (
                            <div className="col-lg-4 col-md-6 mt-30" key={Bitem}>
                                <div className="blog-details_wrap">
                                    <div className="blog-details_item">
                                        <div className="xb-item--img">
                                            <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}><img src={blog.screens} alt="" /></Link>
                                        </div>
                                        <div className="xb-item--holder">
                                            <div className="xb-item--meta ul_li">
                                                <span className="xb-item--meta_label1">{blog.thumb}</span>
                                                <span className="xb-item--meta_label">By {blog.author}</span>
                                            </div>
                                            <h3 className="item_details_info_heading border-effect">
                                                <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>{blog.title}</Link></h3>
                                            <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`} className="xb-item--det-btn">Read more <i className="far fa-long-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )

}

export default BlogSingle;
