import React, { useEffect } from 'react';
import Button from './Button';
import { TiLocationArrow } from 'react-icons/ti';

const ContactUs = () => {
  return (
    <div id="contact" className="relative h-dvh w-screen overflow-x-hidden lg:flex">
      <div className="contact-us-section bg-transparent lg:bg-black p-8 absolute z-50 lg:relative flex bg-black justify-center w-full lg:w-[40vw] items-center">
        <div className="lg:ml-20 w-full">
          <h2 className="text-8xl font-bold text-white mb-6 text-center special-font uppercase font-zentry">
            Co<b>n</b>ta<b>ct Us</b>
          </h2>
          <p className="font-circular-web text-[#dfdff0] text-center text-sm md:text-2xl">warepixsolutions@gmail.com</p>
          <h1></h1>
        </div>
      </div>
      <div className="relative h-dvh w-screen lg:w-[60vw] overflow-hidden">
        <div>
          <video
            id="contactVideo"
            src="videos/cube2.mp4"
            autoPlay
            loop
            muted
            className="absolute left-0 top-0 size-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
