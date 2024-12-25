import React from "react";
import AnimatedTitle from './AnimatedTitle'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

gsap.registerPlugin(ScrollTrigger);

const MacWeb = () => {
  const webImages = [
    "img/websites/1.jpeg",
    "img/websites/2.png",
    "img/websites/5.png",
    "img/websites/6.jpeg",
    "img/websites/4.jpeg",
    "img/websites/3.png",
  ];

  const mm = gsap.matchMedia();
  let isMobile = false; 

  mm.add(
    {
      isMobile: "(max-width: 767px)", 
    },
    (context) => {
      isMobile = context.conditions.isMobile; 
    }
  );

  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#img",
        start: "top center",
        end: "-=100 bottom center",
        scrub: 7.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".web-gallery", {
      width: isMobile ? "100vw" : "50vw",
      height: isMobile ? "100vw" : "50vh",  // Visina za mobilne uređaje je 100vw, za veće ekrane 50vh
      borderRadius: 0,
    });
    clipAnimation.to(
      ".gallery-swiper",
      {
        opacity: 1,
        duration: 1,
      },
    );
  });

  return (
    <div id="web" className="min-h-screen w-100">
      <AnimatedTitle
        title="<b>W</b>eb Te<b>m</b>pl<b>a</b>tes"
        sectionId="#web"
        containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
      />
      <div className="h-dvh w-100 flex items-center justify-center" id="img">
        <div className="web-gallery h-[100vh] w-[100vw]">
          <div className="relative w-full md:h-full flex">
            <img
              src="img/macPro.png"
              className="relative object-cover object-center w-full h-full"
              style={{
                margin: 0,
                padding: 0, 
                maxWidth: "100%", 
                height: "auto",
              }}
            />
            <div
              className="gallery-swiper opacity-0 absolute transform -translate-x-1/2 -translate-y-1/2"
              style={{
                top: isMobile ? "25.5vw" : "47%", 
                left: isMobile ? "45.5vw" : "24.2vw", 
                transform: "translate(-50%, -50%)",  
                width: isMobile ? "65%" : "34vw", 
                height: isMobile ? "80%" : "22vw",
              }}
            >
              <Swiper
                className="h-full"
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto-play settings
              >
                {webImages.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={image}
                      className="w-full h-full rounded-md"
                      alt={`Slide ${index + 1}`}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MacWeb;
