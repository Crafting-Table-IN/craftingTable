import React, { useState, useEffect, useRef } from 'react';
import Services from '../../../api/service';
import { Link } from 'react-router-dom';

const ServiceSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeBgRef = useRef(null);
  const serviceListRef = useRef(null);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const updateActiveBg = (index) => {
    const serviceListItems = serviceListRef.current.querySelectorAll('.service-list-item');
    const activeBg = activeBgRef.current;
    const item = serviceListItems[index];
  
    const menuTop = serviceListRef.current.getBoundingClientRect().top;
    const itemTop = item.getBoundingClientRect().top;
    const topOff = itemTop - menuTop;
    const height = item.offsetHeight;

    activeBg.style.top = `${topOff}px`;
    activeBg.style.height = `${height}px`;
  };
  

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
    updateActiveBg(index);
  };

  const handleMouseLeave = () => {
    updateActiveBg(activeIndex);
  };

  const handleClick = (index) => {
    setActiveIndex(index);
    updateActiveBg(index);
  };

  useEffect(() => {
    updateActiveBg(activeIndex);
  }, [activeIndex]);

  return (
    <section className="services z-1 service-height pos-rel">
      <div className="service-images">
        {Services.slice(6, 10).map((service, srv) => (
          <div
            className={`service-image-item ${activeIndex === srv ? 'active' : ''}`}
            key={srv}
            style={{ backgroundImage: `url(${service.sImg})` }}
          ></div>
        ))}
      </div>
      <div className="service-content-box ul_li pos-rel">
        <div className="service-content-list">
          <h3 className="title">Core expertise</h3>
          <div
            className="service-list"
            ref={serviceListRef}
            onMouseLeave={handleMouseLeave}
          >
            {Services.slice(6, 10).map((service, srv) => (
              <div
                onClick={() => handleClick(srv)}
                onMouseEnter={() => handleMouseEnter(srv)}
                className={`service-list-item ul_li_between ${activeIndex === srv ? 'current' : ''}`}
                key={srv}
              >
                <div className="xb-item--icon">
                  <img src={service.sIcon} alt="" />
                </div>
                <h3 className="xb-item--title">{service.title}</h3>
                <Link onClick={ClickHandler} to={`/service-single/${service.slug}`} className="xb-item--arrow">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 1C12 0.447714 11.5523 -7.61451e-07 11 -3.39982e-07L2 -2.13542e-07C1.44772 -5.50717e-07 1 0.447715 1 0.999999C1 1.55228 1.44772 2 2 2L10 2L10 10C10 10.5523 10.4477 11 11 11C11.5523 11 12 10.5523 12 10L12 1ZM1.70711 11.7071L11.7071 1.70711L10.2929 0.292893L0.292893 10.2929L1.70711 11.7071Z"
                      fill="#111112"
                    />
                  </svg>
                </Link>
              </div>
            ))}
            <div className="active-bg" ref={activeBgRef}></div>
          </div>
        </div>
        <div className="service-content-image">
          {Services.slice(6, 10).map((service, srv) => (
            <div
              className={`xb-item--img ${activeIndex === srv ? 'active' : ''}`}
              key={srv}
              style={{ backgroundImage: `url(${service.sImg})` }}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
