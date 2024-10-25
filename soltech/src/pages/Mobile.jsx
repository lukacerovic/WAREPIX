import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Experiance from '../components/Experiance';
import { mobileServices } from "../components/constants";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function Mobile() {
  const [activeSection, setActiveSection] = useState('ideas');
  const [selectedImage, setSelectedImage] = useState(null);
  
  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };
  return (
    <div className='flex flex-col'style={{gap:'8vw', background:'linear-gradient(to bottom, black, #595858)'}}>
      <NavBar/>
      <div className='flex flex-col'>
            <div className='flex-col sm:flex-col md:flex-col lg:flex xl:flex 2xl:flex-row 3xl:flex lg:gap-0 items-center' style={{paddingInline:'2vw'}}>
                <div className='text-white flex flex-col gap-10' style={{width:'75vw'}}>
                    <h1 className='uppercase text-2xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl 2xl:text-9xl'>Mobile<br/> Excellence</h1>
                    <p className='text-xs w-[110%] sm:text-lg md:text-xl lg:text-2xl lg:w-[100%] xl:text-2xl'>
                      Discover the Future - We specialize in crafting cutting-edge mobile applications tailored to your needs. <br/><br/>
                      From Android and iOS to cross-platform solutions, we bring your ideas to life on every device. Our team combines innovation and expertise to deliver seamless experiences that captivate and engage users. <br/><br/>
                      Whether you're launching a startup or expanding your enterprise, let us propel your mobile presence into the modern, digital age.
                    </p> 
                    <div className='flex gap-5 text-xl pb-[5vh]'>
                      <Link to='https://www.warepix.com/#contact'>
                        <button className='bg-cyan-500 p-3 rounded-lg text-md sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl'>Contact Us</button>
                      </Link>
                    </div>
                    
                </div>
                <div>
                  <img src="images/mobileMain4.png" style={{}}/>
                </div>
            </div>
        </div>
        <Experiance experiences={mobileServices}/>
        <div className="flex flex-col items-center justify-center text-white py-[5vw]" style={{ paddingInline: '1vw' }}>
          <h1 className="text-2xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-8xl" style={{ marginBottom: '6vw' }}>Samples Of Design</h1>

          {/* Slider for small screens */}
          <div className="block md:hidden w-full">
            <Swiper 
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={2}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
              className="py-[1vh]"
            >
              {[
                'images/mobileSample5.jpeg',
                'images/mobileSample1.jpeg',
                'images/mobileSample7.png',
                'images/mobileSample12.png',
                'images/mobileSample4.png',
                'images/mobileSample8.png',
                'images/mobileSample6.png',
                'images/mobileSample13.jpeg',
                'images/mobileSample3.png',
                'images/mobileSample11.png',
                'images/mobileSample9.jpeg'
              ].map((src, index) => (
                <SwiperSlide key={index} className="flex items-center justify-center">
                  <img 
                    src={src} 
                    onClick={() => handleImageClick(src)} 
                    style={{ borderRadius: '1vw',}}
                    className="rounded-3xl w-full h-[50vh] object-cover" 
                    alt={`Sample ${index}`} 
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Grid for medium and larger screens */}
          <div className="hidden md:flex" style={{ gap: '1vw' }}>
            <div className="flex flex-col" style={{ gap: '1.5vw' }}>
              <div className="flex" style={{ gap: '1.2vw' }}>
                <img src='images/mobileSample12.png' onClick={() => handleImageClick('images/mobileSample12.png')} style={{ borderRadius: '1vw', width: '16vw' }} className='rounded-3xl'/>
                <div className='flex flex-col' style={{ gap: '1.5vw' }}>
                  <img src='images/mobileSample4.png' onClick={() => handleImageClick('images/mobileSample4.png')} style={{ borderRadius: '1vw', width: '9vw' }} className='rounded-3xl'/>
                  <img src='images/mobileSample8.png' onClick={() => handleImageClick('images/mobileSample8.png')} style={{ borderRadius: '1vw', width: '9vw' }} className='rounded-3xl'/>
                </div>
              </div>
              <div className="flex" style={{ gap: '0.5vw' }}>
                <img src='images/mobileSample6.png' onClick={() => handleImageClick('images/mobileSample6.png')} style={{ borderRadius: '1vw', width: '8.2vw' }} className='rounded-3xl'/>
                <img src='images/mobileSample13.jpeg' onClick={() => handleImageClick('images/mobileSample13.jpeg')} style={{ borderRadius: '1vw', width: '8.2vw' }} className='rounded-3xl'/>
                <img src='images/mobileSample1.jpeg' onClick={() => handleImageClick('images/mobileSample1.jpeg')} style={{ borderRadius: '1vw', width: '8.2vw' }} className='rounded-3xl'/>
              </div>
            </div>
            <div className="flex" style={{ gap: '1.5vw' }}>
              <img src='images/mobileSample5.jpeg' onClick={() => handleImageClick('images/mobileSample5.jpeg')} style={{ borderRadius: '1vw', width: '24vw' }} className='rounded-3xl'/>
              <div className="flex flex-col" style={{ gap: '1.5vw' }}>
                <div className="flex" style={{ gap: '1.5vw' }}>
                  <img src='images/mobileSample7.png' onClick={() => handleImageClick('images/mobileSample7.png')} style={{ borderRadius: '1vw', width: '13vw' }} className='rounded-3xl'/>
                  <img src='images/mobileSample3.png' onClick={() => handleImageClick('images/mobileSample3.png')} style={{ borderRadius: '1vw', width: '13vw' }} className='rounded-3xl'/>
                </div>
                <div className="flex" style={{ gap: '1.5vw' }}>
                  <img src='images/mobileSample11.png' onClick={() => handleImageClick('images/mobileSample11.png')} style={{ borderRadius: '1vw', width: '13vw' }} className='rounded-3xl'/>
                  <img src='images/mobileSample9.jpeg' onClick={() => handleImageClick('images/mobileSample9.jpeg')} style={{ borderRadius: '1vw', width: '13vw' }} className='rounded-3xl'/>
                </div>
              </div>
            </div>
          </div>

          {selectedImage && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80" onClick={() => setSelectedImage(null)}>
              <div className="flex items-center justify-center mx-auto p-6 rounded-lg" onClick={(e) => e.stopPropagation()}>
                <img src={selectedImage} alt="Selected Image" className="self-center h-[60vh] sm:h-[80vh]" />
              </div>
            </div>
          )}
        </div>

        <Link className='self-center pt-20 pb-10' to='https://www.warepix.com/#contact'>
          <button className='bg-cyan-500 p-3 text-lg sm:text-xl md:text-2xl lg:text-3xl rounded-lg'>Contact Us</button>
        </Link>
      <Footer/>
    </div>
    
  )
}
