import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Experiance from '../components/Experiance';
import { designServices } from '../components/constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function Design() {
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
    <div className='flex flex-col'style={{gap:'10vw', background:'linear-gradient(to bottom, black, #595858)'}}>
      <NavBar/>
      <div className='flex flex-col'>
            <div className='flex-col sm:flex-col md:flex-col lg:flex xl:flex 2xl:flex-row 3xl:flex lg:gap-0 items-center' style={{paddingInline:'2vw'}}>
                <div className='text-white flex flex-col gap-[2vw]' style={{width:'75vw'}}>
                    <h1 className='uppercase text-4xl w-[120%] md:w-[90%] sm:text-6xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-7xl'>Design Your Experience <br/>Define Your Brand</h1>
                    <p className='text-md w-[125%] sm:text-lg md:text-xl lg:text-lg lg:w-[100%] xl:text-2xl'>
                    Elevate your digital presence with our comprehensive UI/UX & digital design services. Whether it's a seamless user journey or a logo that defines your brand, we bring together creativity and precision to design experiences that captivate and inspire. <br/><br/>
                    From intuitive web and mobile interfaces to timeless logos, we tailor every element to reflect the core of your brand, ensuring every detail contributes to a cohesive and engaging user experience. Let us shape your digital identity with designs that speak to your audience and amplify your success.
                    </p> 
                    <div className='flex gap-5 text-xl pb-[5vh]'>
                      <Link to='https://www.warepix.com/#contact'>
                        <button className='bg-cyan-500 p-3 rounded-lg text-md sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl'>Contact Us</button>
                      </Link>
                    </div>
                    
                </div>
                <div>
                  <img src="images/designMain.PNG" />
                </div>
            </div>
        </div>
        <Experiance experiences={designServices}/>
        <div className="flex flex-col items-center justify-center text-white py-[5vw]" style={{ paddingInline: '1vw' }}>
      <h1 className="text-2xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-8xl" style={{ marginBottom: '6vw' }}>Samples Of Design</h1>

      {/* Slider for small screens */}
      <div className="block md:hidden w-full">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1.5}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
        >
          {[
            'images/logoSample1.jpeg',
            'images/logoSample7.png',
            'images/logoSample10.png',
            'images/logoSample12.png',
            'images/logoSample8.png',
            'images/logoSample4.png',
            'images/logoSample14.png',
            'images/logoSample16.png',
            'images/logoSample6.jpeg',
            'images/logoSample11.png',
            'images/logoSample5.png',
            'images/logoSample13.png',
          ].map((src, index) => (
            <SwiperSlide key={index} style={{ width: '60%', height: '60%', borderRadius: '50%', overflow: 'hidden' }}>
              <img
                src={src}
                onClick={() => handleImageClick(src)}
                style={{ borderRadius: '1vw' }}
                className="rounded-3xl w-full"
                alt={`Sample ${index}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Grid for medium and larger screens */}
      <div className="hidden md:flex" style={{ gap: '1vw' }}>
        <div className="flex flex-col" style={{ gap: '1vw' }}>
          <img src='images/logoSample1.jpeg' onClick={() => handleImageClick('images/logoSample1.jpeg')} style={{ borderRadius: '50%', width: '15vw' }} className='rounded-3xl' />
          <img src='images/logoSample12.png' onClick={() => handleImageClick('images/logoSample12.png')} style={{ borderRadius: '50%', width: '15vw' }} className='rounded-3xl' />
        </div>
        <div className="flex" style={{ gap: '1vw' }}>
          <img src='images/logoSample10.png' onClick={() => handleImageClick('images/logoSample10.png')} style={{ borderRadius: '50%', width: '33vw' }} className='rounded-3xl' />
          <div className="flex flex-col" style={{ gap: '1vw' }}>
            <div className="flex" style={{ gap: '1vw' }}>
              <img src='images/logoSample7.png' onClick={() => handleImageClick('images/logoSample7.png')} style={{ borderRadius: '50%', width: '11vw' }} className='rounded-3xl' />
              <img src='images/logoSample4.png' onClick={() => handleImageClick('images/logoSample4.png')} style={{ borderRadius: '50%', width: '11vw' }} className='rounded-3xl' />
              <img src="images/logoSample16.png" onClick={() => handleImageClick('images/logoSample16.png')} style={{ borderRadius: '50%', width: '11vw' }} className='rounded-3xl' />
            </div>
            <div className="flex" style={{ gap: '1vw' }}>
              <img src='images/logoSample8.png' onClick={() => handleImageClick('images/logoSample8.png')} style={{ borderRadius: '50%', width: '11vw' }} className='rounded-3xl' />
              <img src='images/logoSample6.jpeg' onClick={() => handleImageClick('images/logoSample6.jpeg')} style={{ borderRadius: '50%', width: '11vw' }} className='rounded-3xl' />
              <img src='images/logoSample13.png' onClick={() => handleImageClick('images/logoSample13.png')} style={{ borderRadius: '50%', width: '11vw' }} className='rounded-3xl' />
            </div>
            <div className="flex" style={{ gap: '1vw' }}>
              <img src='images/logoSample14.png' onClick={() => handleImageClick('images/logoSample14.png')} style={{ borderRadius: '50%', width: '11vw' }} className='rounded-3xl' />
              <img src='images/logoSample11.png' onClick={() => handleImageClick('images/logoSample11.png')} style={{ borderRadius: '50%', width: '11vw' }} className='rounded-3xl' />
              <img src='images/logoSample5.png' onClick={() => handleImageClick('images/logoSample5.png')} style={{ borderRadius: '50%', width: '11vw' }} className='rounded-3xl' />
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

