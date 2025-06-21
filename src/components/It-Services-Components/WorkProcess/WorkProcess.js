import React from "react";
import { Fade } from "react-awesome-reveal";
import pImg from "../../../images/shape/process-shape01.png";
import pImg2 from "../../../images/shape/process-shape01.png";
import sIcon1 from "../../../images/process/image01.png";
import sIcon2 from "../../../images/process/image02.png";
import sIcon3 from "../../../images/process/image03.png";
import sIcon4 from "../../../images/process/image04.png";
import sIcon5 from "../../../images/process/image05.png";
import { Link } from "react-router-dom";

const Process = [
  {
    id: "01",
    title: "Consultation & needs analysis",
    subTitle:
      "We first understand your challenges to tailor a solution that fits your needs.",
    icon: sIcon1,
    direction: "one",
  },
  {
    id: "02",
    title: "Planning & strategy development",
    subTitle:
      "Our team crafts a strategic plan, defining the project roadmap and setting timelines.",
    icon: sIcon2,
    direction: "two",
  },
  {
    id: "03",
    title: "Design & development",
    subTitle:
      "Our designers create intuitive interfaces, while developers build scalable, robust systems.",
    icon: sIcon3,
    direction: "three",
  },
  {
    id: "04",
    title: "Testing & quality assurance",
    subTitle:
      "We rigorously test for security, performance resolving any issues before deployment.",
    icon: sIcon4,
    direction: "four",
  },
  {
    id: "05",
    title: "Deployment & ongoing support",
    subTitle:
      "We first understand your challenges to tailor a solution that fits your needs.",
    icon: sIcon5,
    direction: "four",
  },
];

const WorkProcess = (props) => {
  return (
    <section
      className="process pt-140 pb-40 pos-rel"
      style={{ backgroundColor: "#fff" }}
      id="process"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-8">
            <div className="process-left pt-70">
              <div className="sec-title">
                <Fade
                  direction="down"
                  triggerOnce={"false"}
                  duration={1000}
                  delay={9}
                >
                  <div>
                    <h2
                      className="title mb-40 wow fadeInUp"
                      data-wow-duration="600ms"
                    >
                      Our 5-step workflow
                    </h2>
                  </div>
                </Fade>
                <Fade
                  direction="up"
                  triggerOnce={"false"}
                  duration={1200}
                  delay={9}
                >
                  <div>
                    <span
                      className="content wow fadeInUp"
                      data-wow-delay="200ms"
                      data-wow-duration="600ms"
                    >
                      Our innomax Efficient Workflow in 5 Steps ensures
                      streamlined IT solutions. We start by understanding your
                      needs, then plan the project, design intuitive interfaces,
                      build robust systems, and thoroughly test.
                    </span>
                  </div>
                </Fade>
              </div>
              <Fade
                direction="up"
                triggerOnce={"false"}
                duration={1200}
                delay={9}
              >
                <div>
                  <div
                    className="xb-btn mt-55 wow fadeInUp"
                    data-wow-delay="400ms"
                    data-wow-duration="600ms"
                  >
                    <a href="#contact" className="thm-btn thm-btn--fill_icon">
                      <div className="xb-item--hidden-text">
                        <span className="text">Learn more about us</span>
                      </div>
                      <div className="xb-item--holder">
                        <span className="xb-item--text">
                          Learn more about us
                        </span>
                        <div className="xb-item--icon">
                          <i className="far fa-long-arrow-right"></i>
                        </div>
                        <span className="xb-item--text">
                          Learn more about us
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
          <div className="col-lg-7 col-md-8">
            <div className="process-right f-right">
              {Process.map((process, pitem) => (
                <div className="process-item" key={pitem}>
                  <span className="xb-item--number">{process.id}</span>
                  <div className="xb-item--img">
                    <img src={process.icon} alt="" />
                  </div>
                  <div className="xb-item--holder">
                    <h3 className="xb-item--title">{process.title}</h3>
                    <span className="xb-item--content">{process.subTitle}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="peocess-shape">
        <div className="shape shape--one">
          <img src={pImg} alt="" />
        </div>
        <div className="shape shape--two">
          <img src={pImg2} alt="" />
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
