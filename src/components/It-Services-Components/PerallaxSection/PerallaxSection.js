import React, { useEffect, useRef } from "react";

const ParallaxSection = ({ imageUrl, speed = 0.8, offset = 0 }) => {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = parallaxRef.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const offsetTop = rect.top + scrollTop;

      // Adjust calculation for parallax effect
      const yOffset =
        ((scrollTop - offsetTop) * speed + window.innerHeight * offset) / 2;

      element.style.transform = `translateY(${yOffset}px)`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [speed, offset]);

  return (
    <section
      className="parallax-section"
      style={{
        margin: 0,
        padding: 0,
        position: "relative",
        overflow: "hidden",
        height: "850px",
      }}
    >
      <div
        ref={parallaxRef}
        className="parallax-img"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      ></div>
    </section>
  );
};

export default ParallaxSection;
