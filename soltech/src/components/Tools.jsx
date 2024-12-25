import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const Tools = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

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

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top", 
          end: "bottom top", 
          scrub: 1, 
          pin: true, 
        },
      })
        .fromTo(
          videoRef.current,
          {
            width: "100vw", 
            height: "100vh", 
          },
          {
            width: isMobile ? "90vw" : "60vw",
            height: isMobile ? "30vh" : "60vh",
            borderRadius: "1.5rem", 
            ease: "power2.out",
          }
        );
    });

    return () => context.revert();
  }, []);

  return (
    <section id="tools" className="bg-black text-blue-50">
      <div className="flex flex-col items-center justify-between py-10">
        <p className="font-general text-sm uppercase md:text-md">
          Technology Stacks That Fit Your Solutions
        </p>
        <AnimatedTitle
          title="<b>W</b>ide v<b>a</b>ri<b>e</b>ty o<b>f</b> to<b>o<b/>ls an<b>d</b> te<b>ch</b>nolog<b>y</b>"
          sectionId="#tools"
          containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
        />
      </div>
      <div ref={containerRef} className="relative w-full h-screen">
        <div className="flex items-center justify-center w-full h-full fixed top-0 left-0">
          <video
            ref={videoRef}
            src="videos/tools.mp4"
            autoPlay
            loop
            muted
            className="object-cover"
          />
        </div>
      </div>

      <div className="flex self-center w-[100vw] pb-10 md:w-[90vw] justify-end">
        <div className="flex h-full md:w-fit flex-col items-center md:items-start">
          <p className="mt-3 max-w-small md:w-[60%] text-center md:text-end md:self-end font-general text-lg uppercase text-violet-50">
            With a broad spectrum of modern technologies, we ensure that every
            project is built with precision, scalability, and adaptability,
            meeting the unique demands of each client.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Tools;
