import React from "react";
import Project from "../../../api/project";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
import { Fade } from "react-awesome-reveal";

const ProjectSection = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section className="project pb-140 o-hidden" id="casestudy">
      <div className="container">
        <div className="pro-top ul_li_between mb-65">
          <div className="sec-title">
            <Fade
              direction="up"
              triggerOnce={"false"}
              duration={1000}
              delay={9}
            >
              <div>
                <h2
                  className="title mb-15 wow fadeInLeft"
                  data-wow-duration="600ms"
                >
                  Recent works
                </h2>
              </div>
            </Fade>
            <Fade
              direction="up"
              triggerOnce={"false"}
              duration={1000}
              delay={9}
            >
              <div>
                <span
                  className="content wow fadeInLeft"
                  data-wow-duration="600ms"
                >
                  Recent Works showcases our latest projects.
                </span>
              </div>
            </Fade>
          </div>
          {/* <div className="xb-btn text-center wow fadeInRight mb-30" data-wow-duration="600ms">
                        <Fade direction='right' triggerOnce={'false'} duration={1000} delay={9}>
                            <div>
                                <div className="xb-btn wow fadeInRight" data-wow-duration="600ms">
                                    <Link onClick={ClickHandler} to={'/casestudy'} className="thm-btn thm-btn--fill_icon thm-btn--strock">
                                        <div className="xb-item--hidden"><span className="xb-item--hidden-text">Get started now</span></div>
                                        <div className="xb-item--holder">
                                            <span className="xb-item--text">View all case study</span>
                                            <div className="xb-item--icon"><i className="far fa-long-arrow-right"></i></div>
                                            <span className="xb-item--text">View all case study</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </Fade>
                    </div> */}
        </div>
      </div>
      <div className="project-wrapper pos-rel">
        <div className="project-slider">
          <Swiper
            modules={[Pagination, Autoplay]}
            loop={true}
            spaceBetween={60}
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
            breakpoints={{
              1600: { slidesPerView: 3 },
              1024: { slidesPerView: 1 },
              768: { slidesPerView: 1 },
              576: { slidesPerView: 1 },
              0: { slidesPerView: 1 },
            }}
          >
            {Project.slice(4, 9).map((project, prj) => (
              <SwiperSlide key={prj}>
                <div className="project-item">
                  <div
                    className="xb-item--inner ul_li align-items-start"
                    key={prj}
                  >
                    <div className="xb-item--left_item">
                      <div className="xb-item--icon">
                        <img src={project.icon} alt="" />
                      </div>
                      <h3 className="xb-item--title">
                        <Link
                          onClick={ClickHandler}
                          to={`/portfolio_details/${project.slug}`}
                        >
                          {project.title}
                        </Link>
                      </h3>
                      <p className="xb-item--content">{project.description}</p>
                      <ul className="category list-unstyled ul_li">
                        <li>
                          <Link
                            onClick={ClickHandler}
                            to={`/portfolio_details/${project.slug}`}
                          >
                            {project.rtext1}
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={ClickHandler}
                            to={`/portfolio_details/${project.slug}`}
                          >
                            {project.rtext2}
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={ClickHandler}
                            to={`/portfolio_details/${project.slug}`}
                          >
                            {project.rtext3}
                          </Link>
                        </li>
                      </ul>
                      {/* <div className="work-btn">
                                                <Link onClick={ClickHandler} to={`/portfolio_details/${project.slug}`} className="thm-btn thm-btn--fill_icon thm-btn--strock">
                                                    <div className="xb-item--hidden"><span className="xb-item--hidden-text">View</span></div>
                                                    <div className="xb-item--holder">
                                                        <span className="xb-item--text">View</span>
                                                        <div className="xb-item--icon"><i className="far fa-long-arrow-right"></i></div>
                                                        <span className="xb-item--text">View</span>
                                                    </div>
                                                </Link>
                                            </div> */}
                    </div>
                    <div className="xb-item--right_img">
                      <Link
                        onClick={ClickHandler}
                        to={`/portfolio_details/${project.slug}`}
                      >
                        <img src={project.pImg} alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="swiper-pagination"></div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
