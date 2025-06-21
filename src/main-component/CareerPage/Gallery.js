import React from "react";
import icon from '../../images/icon/eye-icon.svg'
import gImg1 from '../../images/gallery/img01.jpg'
import gImg2 from '../../images/gallery/img02.jpg'
import gImg3 from '../../images/gallery/img03.jpg'
import gImg4 from '../../images/gallery/img04.jpg'
import gImg5 from '../../images/gallery/img05.jpg'
import gImg6 from '../../images/gallery/img06.jpg'
import gImg7 from '../../images/gallery/img07.jpg'
import gImg8 from '../../images/gallery/img08.jpg'
import gImg9 from '../../images/gallery/img09.jpg'
import gImg10 from '../../images/gallery/img10.jpg'
import gImg11 from '../../images/gallery/img11.jpg'

const GallerySection = (props) => {
  return (
    <section className={`gallery pb-130 ${props.pClass}`}>
      <div className="container">
        <div className="sec-title--two text-center mb-60">
          <div className="sub-title">
            <img src={icon} alt="Eye Icon" />
            Our gallery
          </div>
          <h2 className="title">Explore stunning moments</h2>
        </div>
        <div className="gallery-wrap ul_li">
          <div className="gallery-item gallery-item--one">
            <div className="img img--1">
              <img src={gImg1} alt="Gallery 1" />
            </div>
            <div className="img img--2">
              <img src={gImg2} alt="Gallery 2" />
            </div>
            <div className="img img--1">
              <img src={gImg3} alt="Gallery 3" />
            </div>
          </div>
          <div className="gallery-item gallery-item--two">
            <div className="img img--2">
              <img src={gImg4} alt="Gallery 4" />
            </div>
            <div className="img img--1">
              <img src={gImg5} alt="Gallery 5" />
            </div>
          </div>
          <div className="gallery-item gallery-item--three">
            <div className="ul_li_between">
              <div className="img img--3">
                <img src={gImg6} alt="Gallery 6" />
              </div>
              <div className="img img--4">
                <img src={gImg7} alt="Gallery 7" />
              </div>
            </div>
            <div className="img img--4">
              <img src={gImg8} alt="Gallery 8" />
            </div>
          </div>
          <div className="gallery-item gallery-item--four">
            <div className="img img--1">
              <img src={gImg9} alt="Gallery 9" />
            </div>
            <div className="img img--2">
              <img src={gImg10} alt="Gallery 10" />
            </div>
            <div className="img img--5">
              <img src={gImg11} alt="Gallery 11" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
