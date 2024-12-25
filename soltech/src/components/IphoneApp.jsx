import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const IphoneApp = () => {
  const mobileImages = [
    "img/mobileapps/1.png",
    "img/mobileapps/2.png",
    "img/mobileapps/3.png",
    "img/mobileapps/4.png",
    "img/mobileapps/5.png",
    "img/mobileapps/6.png",
    "img/mobileapps/7.png",
    "img/mobileapps/8.png",
  ];

  const containerRef = useRef(null);
  const rowsRef = useRef([]);

  useEffect(() => {
    const context = gsap.context(() => {
      rowsRef.current.forEach((row, index) => {
        const direction = index % 2 === 0 ? "-100%" : "100%"; // Alternate direction

        gsap.fromTo(
          row,
          { opacity: 0, x: direction, visibility: "hidden" }, // Initial state
          {
            opacity: 1,
            visibility: "visible",
            x: "0%",
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: row, // Trigger for each individual row
              start: "top bottom",
              toggleActions: "play none none reverse",
              markers: false,
            },
          }
        );
      });
    }, containerRef);

    return () => context.revert();
  }, []);

  return (
    <div id="web" ref={containerRef} className="min-h-screen w-full">
      <div className="flex justify-center">
        <div className="phone-gallery">
          <AnimatedTitle
            title="<b>M</b>obile Te<b>m</b>pl<b>a</b>tes"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
          />
          <div className="flex flex-col items-center justify-center my-10 gap-10">
            {[0, 1].map((rowIndex) => (
              <div
                key={rowIndex}
                className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full items-center justify-center"
                ref={(el) => (rowsRef.current[rowIndex] = el)} // Store ref for each row
              >
                {mobileImages
                  .slice(rowIndex * 4, rowIndex * 4 + 4)
                  .map((src, imgIndex) => (
                    <div key={imgIndex} className="w-full">
                      <img src={src} className="w-full h-auto" alt={`Mobile App ${imgIndex + 1}`} />
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IphoneApp;

