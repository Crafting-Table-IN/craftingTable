import React, { Fragment } from 'react';
import Bg from '../../images/bg/page_bg01.jpg'
import icon from '../../images/icon/cap.svg'
import Image1 from '../../images/hero/cd-img02.png'
import Image2 from '../../images/shape/brd_shape.png'
import Header from '../../components/header/Header';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import CtaSection from '../../components/CtaSection/CtaSection';
import BlogList from '../../components/BlogList';


const BlogPage = (props) => {

    return (
        <Fragment>
            <Header />
            <main className="page_content blog-page">
                <section className="page-title  pt-200 pos-rel bg_img" style={{ backgroundImage: `url(${Bg})` }}>
                    <div className="container">
                        <div className="page-title-wrap sd-title-wrap">
                            <div className="row mt-none-30 align-items-end">
                                <div className="col-lg-9 mt-30">
                                    <div className="page-title-box">
                                        <span className="sub-title"><img src={icon} alt="" /> Blog</span>
                                        <h2 className="title">Expert insights from our SEO <br /> & IT solutions blog your <br /> source for success</h2>
                                    </div>
                                </div>
                                <div className="col-lg-3 mt-30">
                                    <div className="sd-right-img pos-rel">
                                        <img src={Image1} alt="" />
                                        <div className="sd-arrow-shape style-2">
                                            <img className="xbzoominzoomup" src={Image2} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <BlogList />
            </main>
            <CtaSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default BlogPage;
