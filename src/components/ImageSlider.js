import React from "react";
import "./ImageSlider.css";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, A11y } from "swiper";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
// install Swiper modules
SwiperCore.use([Navigation, A11y]);

const ImageSlider = ({ images, slidesToShow = 3 }) => {
  const settings = {
    centeredSlides: true,
    loop: true,
    slidesToShow: 1,
    breakpoints: {
      820: {
        slidesPerView: slidesToShow,
      },
    },
  };

  const templateImages = images.map((image) => {
    if (image !== null) {
      return (
        <>
          <SwiperSlide style={{}}>
            <div className="slideWrapper1" style={{ position: "relative" }}>
              <img src="/Images/Nisha.png" alt="Nisha" />
            </div>
          </SwiperSlide>
          <SwiperSlide
            style={{
              position: "relative",
              right: "10px",
            }}
          >
            <div className="slideWrapper2">
              <img src="/Images/Tarja.png" alt="Nisha" />
            </div>
          </SwiperSlide>
          <SwiperSlide
            style={{
              position: "relative",
              left: "10px",
            }}
          >
            <div className="slideWrapper3">
              <img src="/Images/Lando.png" alt="Nisha" />
            </div>
          </SwiperSlide>
        </>
      );
    }
    return null;
  });

  return (
    <Swiper
      {...settings}
      navigation
      style={{ "--swiper-navigation-color": "black" }}
    >
      {templateImages}
    </Swiper>
  );
};

export default ImageSlider;
