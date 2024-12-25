import React, { useEffect } from 'react';
import Button from './Button';
import { TiLocationArrow } from 'react-icons/ti';

const ContactUs = () => {
  return (
    <div className="relative h-dvh w-screen overflow-x-hidden lg:flex">
      <div className="contact-us-section bg-transparent lg:bg-black p-8 absolute z-50 lg:relative flex bg-black justify-center w-full lg:w-[40vw] items-center">
        <div className="lg:ml-20 w-full">
          <h2 className="text-8xl font-bold text-white mb-6 text-center special-font uppercase font-zentry">
            Co<b>n</b>ta<b>ct Us</b>
          </h2>
          <form className="font-general flex flex-col gap-3">
            <div className="mb-4">
              <input
                type="text"
                className="w-full px-4 py-2 bg-transparent focus:outline-none text-white border-b border-gray-600"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                className="w-full px-4 py-2 bg-transparent focus:outline-none text-white border-b border-gray-600"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                className="w-full px-4 py-2 bg-transparent focus:outline-none text-white border-b border-gray-600"
                placeholder="Your Service"
              />
            </div>
            <div className="mb-4">
              <textarea
                style={{resize: "none"}}
                className="w-full focus:outline-none px-4 py-2 h-32 bg-transparent text-white border-b border-gray-600"
                placeholder="Your Message"
              />
            </div>
            <Button id="watch-trailer" title="Contact Us" rightIcon={<TiLocationArrow />} containerClass="flex-center gap-1 self-end text-black" />
          </form>
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
