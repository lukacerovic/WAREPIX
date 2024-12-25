import { useState, useRef, useEffect } from 'react'
import Button from './Button';
import { TiLocationArrow } from 'react-icons/ti';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {

    useGSAP(() => {
        gsap.set("#video-frame", {
            // "polygon(85% 0%, 88% 0%, 86% 86%, 0% 10%)"
            // "polygon(45% 40%, 88% 0%, 86% 86%, 0% 100%)"
            clipPath: "polygon(45% 40%, 88% 0%, 86% 86%, 0% 100%)",
            borderRadius: "0 20% 40% 4%"
        })

        gsap.from("#video-frame", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            borderRadius: "0 0 0 0",
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: "#video-frame",
                start: "center center",
                end: "bottom center",
                scrub: true
            }
        })
    })

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
        <div id="video-frame" className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75">
            <div>
                <video
                    src="videos/videoBg4.mp4"
                    autoPlay
                    loop
                    muted
                    className="absolute left-0 top-0 size-full object-cover object-center"
                />
            </div>
            <p className="special-font uppercase font-zentry font-black text-3xl sm:right-10 sm:text-7xl md:text-9xl lg:text-[5rem] absolute bottom-0 right-0 z-40 text-blue-75">
                SOFT<b>W</b>ARE AGENC<b>Y</b>
            </p>
            <div className="absolute left-0 top-0 z-40 size-full">
                <div className="mt-24 px-5 sm:px-10">
                    <h1 className="special-font hero-heading text-blue-100">
                        W<b>a</b>repi<b>x</b> <br/> Solutio<b>n</b>s
                    </h1>
                    <p className="mb-10 max-w-64 font-general text-xl uppercase text-blue-100">
                        Give your ideas <br/> Digital breath
                    </p>
                    <Button id="watch-trailer" title="Contact Us" rightIcon={<TiLocationArrow/>} containerClass="flex-center gap-1 text-black"/>
                </div>
            </div>
        </div>
        <p className="special-font uppercase font-zentry font-black text-3xl sm:right-10 sm:text-7xl md:text-9xl lg:text-[5rem] absolute bottom-0 right-0 text-black">
            SOFTW<b>A</b>RE AGENC<b>Y</b>
        </p>
        <div className="absolute left-0 top-0 size-full">
            <div className="mt-24 px-5 sm:px-10">
                <h1 className="special-font hero-heading text-black">
                    W<b>a</b>repi<b>x</b> <br/> Solutio<b>n</b>s
                </h1>
                <p className="mb-10 max-w-64 font-robert-regular text-xl text-black">
                    Give your ideas <br/> Digital breath
                </p>
                <Button id="watch-trailer" title="Contact Us" rightIcon={<TiLocationArrow/>} containerClass="flex-center gap-1 text-black"/>
            </div>
        </div>
    </div>
  )
}

export default Hero