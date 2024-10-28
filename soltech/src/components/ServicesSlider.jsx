import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectCoverflow } from "swiper/modules";
import { Link } from "react-router-dom";
import { services } from "./constants";
import "../../node_modules/swiper/swiper-bundle.css";
import "../../node_modules/swiper/swiper.min.css";

const ServicesSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div style={{ margin: "auto" }} className="w-[98%] md:w-[80%] h-[20vh] sm:h-[30vh] md:h-[40vh] lg:h-[60vh] xl:h-[70vh]">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        breakpoints={{
          320: {
            slidesPerView: 1.5, 
          },
          768: {
            slidesPerView: 2.5, 
          },
          1024: {
            slidesPerView: 3, 
          },
        }}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        navigation={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper h-[200vw] mt-[-40vw] md:h-[70vw] md:mt-[-10vw]"
      >
        {services.map((service, index) => (
          <SwiperSlide
            key={index}
            style={{
              alignSelf: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              color: "white",
            }}
            className="swiperCard h-[115vw] md:h-[55vw]" 
          >
            <img src={`images/ServicesCards/service${index + 1}.png`} />
            {activeIndex === index && (
              <Link
                to={`${service.link}`}
                style={{
                  alignSelf:"center",
                  width: "80%"
                }}
              >
                <button
                  className="rounded-md mt-[5vw] md:mt-[2vw] text-lg sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-3xl"
                  style={{
                    width: "100%",
                    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.8)",
                    background: "#100f0f",
                    padding: "1vw",
                  }}
                >
                  Explore Service
                </button>
              </Link>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ServicesSlider;

