import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Experiance from '../components/Experiance'
import { animationsServices } from "../components/constants";

export default function MVP() {
  const [activeSection, setActiveSection] = useState('story');

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
                <div className='text-white flex flex-col gap-[2vw]' style={{width:'80vw'}}>
                    <h1 className='uppercase w-[120%] md:w-[80%] text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-7xl'>Animate Your <br/>Imagination</h1>
                    <p className='text-md w-[110%] sm:text-xl md:text-xl lg:text-lg lg:w-[100%] xl:text-2xl'>
                    Welcome to our animation services! At WAREPIX, we specialize in creating captivating animations that bring your ideas to life. <br/><br/>
                    Whether you need 2D or 3D animation for entertainment, education, marketing, or any other purpose, we've got you covered. Our team of skilled animators is dedicated to delivering top-notch animations tailored to your specific needs and requirements.
                    </p> 
                    <div className='flex gap-5 pb-[5vh]'>
                      <Link to='https://www.warepix.com/#contact'>
                        <button className='bg-cyan-500 p-3 rounded-lg text-md sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl'>Contact Us</button>
                      </Link>
                    </div>
                </div>
                <div>
                  <img src="images/3dModelAnimations.jpeg" style={{boxShadow: "0 10px 20px rgba(200, 200, 200, 0.9)",}} className='w-[90%] mx-auto'/>
                </div>
            </div>
        </div>
        <Experiance experiences={animationsServices}/>
      <div className='text-white flex flex-col' style={{background: 'transparent'}}>
        <Link className='self-center pt-10' to='https://www.warepix.com/#contact'>
          <button className='bg-cyan-500 p-3 text-lg sm:text-xl md:text-2xl lg:text-3xl rounded-lg mt-[10vw]'>Contact Us</button>
        </Link>
      </div>
      <Footer/>
    </div>
    
  )
}

