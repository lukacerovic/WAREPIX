import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const AboutCardsText = () => {
  const rootRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const context = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 100, visibility: "hidden" }, // Initial state
          {
            opacity: 1,
            y: 0,
            visibility: "visible",
            duration: 1.2,
            ease: "power2.out",
            delay: index * 0.3, // Add delay based on index
            scrollTrigger: {
              trigger: card, // Each card triggers its own animation
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, rootRef);

    return () => context.revert();
  }, []);

  return (
    <div ref={rootRef} className="flex flex-wrap gap-10 py-[35vh] justify-center">
      {[{
        title: "Team",
        content: "We are a passionate group of professionals who specialize in creating innovative web and mobile solutions.\n\nOur diverse skills and experience allow us to deliver high-quality products that exceed client expectations.",
        image: "/img/card-1.svg",
      }, {
        title: "Expertise",
        content: "We blend exceptional design with cutting-edge technology to craft digital solutions that are not only functional but also user-friendly and visually appealing.\n\nOur focus is on delivering experiences that make an impact.",
        image: "/img/card-2.svg",
      }, {
        title: "Mission",
        content: "We aim to empower businesses by turning ideas into seamless digital experiences.\n\nWhether for startups or established brands, we prioritize innovation and excellence in every project we undertake.",
        image: "/img/card-3.svg",
      }].map((cardData, index) => (
        <div
          key={index}
          className="about-card block relative p-0.5 font-circular-web bg-no-repeat bg-[length:100%_100%] max-w-80 bg-black"
          style={{ backgroundImage: `url(${cardData.image})` }}
          ref={(el) => (cardsRef.current[index] = el)} // Store ref for each card
        >
          <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
            <h1 className="mb-5 text-white font-general text-3xl">{cardData.title}</h1>
            <p className="mb-5 text-white">{cardData.content}</p>
          </div>
          <div className="absolute inset-0.5">
            <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
              <img
                src="/img/whiteLogo.png"
                width={300}
                height={358}
                className="w-full h-full object-cover"
                alt="Overlay Logo"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutCardsText;


