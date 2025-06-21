import { Link } from "react-router-dom";
// import tImg1 from "../../../images/team/img01.png";
// import tImg2 from "../../../images/team/img02.png";
// import tImg3 from "../../../images/team/img03.png";
// import tImg4 from "../../../images/team/img04.png";
// import tImg5 from "../../../images/team/img05.png";
// import tImg6 from "../../../images/team/img06.png";
// import tImg7 from "../../../images/team/img07.png";

const TeamSection = () => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section className="team pt-85 pb-80" id="team">
      <div className="container">
        <div className="team-heading text-center pos-rel">
          <h2 className="title">Our team</h2>
          {/* <ul className="team-member list-unstyled">
            <li
              className="member member--one wow zoomIn"
              data-wow-delay="0s"
              data-wow-duration="600ms"
            >
              <div>
                <img src={tImg1} alt="" />
              </div>
            </li>
            <li
              className="member member--two wow zoomIn"
              data-wow-delay="0.5s"
              data-wow-duration="600ms"
            >
              <div>
                <img src={tImg2} alt="" />
              </div>
            </li>
            <li
              className="member member--three wow zoomIn"
              data-wow-delay="1s"
              data-wow-duration="600ms"
            >
              <div>
                <img src={tImg3} alt="" />
              </div>
            </li>
            <li
              className="member member--four wow zoomIn"
              data-wow-delay="1.2s"
              data-wow-duration="600ms"
            >
              <div>
                <img src={tImg4} alt="" />
              </div>
            </li>
            <li
              className="member member--five wow zoomIn"
              data-wow-delay="1s"
              data-wow-duration="600ms"
            >
              <div>
                <img src={tImg5} alt="" />
              </div>
            </li>
            <li
              className="member member--six wow zoomIn"
              data-wow-delay="0.5s"
              data-wow-duration="600ms"
            >
              <div>
                <img src={tImg6} alt="" />
              </div>
            </li>
            <li
              className="member member--seven wow zoomIn"
              data-wow-delay="0s"
              data-wow-duration="600ms"
            >
              <div>
                <img src={tImg7} alt="" />
              </div>
            </li>
          </ul> */}
        </div>
        <div className="team-wrap ul_li_between">
          <ul className="xb-item--skill list-unstyled">
            <li>Skilled and Experienced Team.</li>
            <li>Comprehensive IT Support.</li>
            <li>Expertise Across Technologies.</li>
            {/* <li>24/7 Support and Monitoring.</li> */}
          </ul>
          <div className="team-btn">
            <article
              onClick={ClickHandler}
              href="#contact"
              className="thm-btn thm-btn--fill_icon"
            >
              <div className="xb-item--hidden-text">
                <span className="text">Start Crafting</span>
              </div>
              <div className="xb-item--holder">
                <span className="xb-item--text">Start Crafting</span>
                <div className="xb-item--icon">
                  <i className="far fa-long-arrow-right"></i>
                </div>
                <span className="xb-item--text">Start Crafting</span>
              </div>
            </article>
          </div>
          <div className="xb-item--holders">
            <h3 className="xb-item--title">
              Our dedicated IT experts team committed to your success
            </h3>
            <p className="xb-item--content">
              Our dedicated IT experts are committed to your success, delivering
              tailored, scalable solutions that drive growth and efficiency.
              Your success is our focus.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
