import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/all';
import AnimatedTitle from './AnimatedTitle';
import AnimatedCard from './AnimatedCard';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
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
      trigger: "#clip",
      start: "center center",
      end: "+=800 center",
      scrub: 0.5,
      pin: true,
      pinSpacing: true,
    },
  });

  clipAnimation
    .to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    })
    .to(
      ".animated-card-description",
      {
        opacity: 1,
        height: "100vh",
        width: isMobile ? "92vw" : "35vw",
        duration: 1,
        ease: "power2.out",
      },
      "0.4"
    );
});


  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <h2 className="font-general text-md uppercase md:text-lg">
          Welcome to Warepix
        </h2>
        <AnimatedTitle
          title={"Di<b>s</b>cover <b>Y</b>our Digital Pote<b>n</b>tial"}
          containerClass="mt-5 !text-black text-center"
        />
        <div className="about-subtext">
          <p>Excellence and Perfection in Web and Mobile Engineering</p>
        </div>
      </div>
      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <AnimatedCard
            src="videos/videoBg8.mp4"
            title={<><b>Servic</b>es</>}
            description={
                `Neki sadrzaj`
            }
            position="top-left"
            textContainerStyle="animated-card-description opacity-0 font-circular-web text-2xl"
            textStyle="!text-xl max-w-full px-3 "
          />
        </div>
      </div>
    </div>
  );
};

export default About;
