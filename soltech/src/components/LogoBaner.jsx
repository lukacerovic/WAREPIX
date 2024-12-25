import React, { useRef } from "react";
import AnimatedTitle from './AnimatedTitle'
import gsap from "gsap";

const LogoBaner = () => {
  const logoImages = [
    "img/logos/1.jpeg",
    "img/logos/2.jpeg",
    "img/logos/3.png",
    "img/logos/4.png",
    "img/logos/5.png",
    "img/logos/6.png",
    "img/logos/7.png",
    "img/logos/8.png",
    "img/logos/9.png",
  ];

  const handleMouseLeave = (element) => {
    gsap.to(element, {
      duration: 0.3,
      rotateX: 0,
      rotateY: 0,
      ease: "power1.inOut",
    });
  };

  const handleMouseMove = (e, element) => {
    const { clientX, clientY } = e;

    const rect = element.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -60;
    const rotateY = ((x - centerX) / centerX) * 60;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };

  return (
    <div className="relative h-dvh bg-black">
        <AnimatedTitle
            title="L<b>o</b>go Te<b>m</b>pl<b>a</b>tes"
            sectionId="#web"
            containerClass="pointer-events-none mix-blend-difference relative z-10"
        />
        <div className="absolute w-screen left-0 logo-banner h-[70vw] md:h-[100vh] flex overflow-hidden">
            <div className="logo-banner-track gap-10">
                {logoImages.map((src, index) => (
                <img
                    key={index}
                    src={src}
                    alt={`Logo ${index + 1}`}
                    className="logo w-[40vw] md:w-[20vw] rounded-full border-[1px] border-gray-700"
                    onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
                    onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
                />
                ))}
                {logoImages.map((src, index) => (
                <img
                    key={`duplicate-${index}`}
                    src={src}
                    alt={`Logo ${index + 1}`}
                    className="logo  w-[40vw] md:w-[20vw] rounded-full border-[1px] border-gray-700"
                    onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
                    onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
                />
                ))}
            </div>
        </div>
    </div>
  );
};

export default LogoBaner;


