import React, { useState } from 'react'
import Spline from '@splinetool/react-spline';
import { FaPaintBrush, FaTools } from "react-icons/fa";
import { RiArrowRightCircleFill, RiLightbulbFlashLine } from "react-icons/ri";
import { PiImagesBold } from "react-icons/pi";
import { MdOutlineTextFields } from "react-icons/md";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Preloader from '../components/Preloader';

export default function Logo() {
  const [activeSection, setActiveSection] = useState('ideas');

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };
  return (
    // linear-gradient(to bottom, black, #595858) za root div
    <div className='flex flex-col'style={{gap:'10vw', background:'linear-gradient(to bottom, black, #595858)'}}>
      <Preloader/>
      <NavBar/>
      <div className='flex flex-col'>
            <div className='flex-col sm:flex-col md:flex-col lg:flex xl:flex 2xl:flex-row 3xl:flex lg:gap-0 items-center' style={{paddingInline:'2vw'}}>
                <div className='text-white flex flex-col gap-[2vw]' style={{width:'60vw'}}>
                    <h1 className='uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl'>Your Logo <br/>Your Signature</h1>
                    <p className='text-xs w-[150%] sm:text-sm md:text-md lg:text-lg lg:w-[60%] xl:text-lg'>
                      Elevate your brand identity with our bespoke logo design service. At the intersection of artistry and strategy, we craft logos that resonate with your audience and stand the test of time. Our team of visionary designers meticulously shapes each element, capturing the essence of your brand in every curve and color. Let your logo be more than just a symbol – let it be the emblem of your story, the cornerstone of your success.
                    </p> 
                    <div className='flex gap-5 text-xl'>
                      <Link to='http://localhost:5173/#contact'>
                        <button className='bg-cyan-500 p-3 rounded-lg text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl'>Contact Us</button>
                      </Link>
                    </div>
                    
                </div>
                <div className='h-[100vw] sm:h-[50vw] md:h-[50vw] lg:h-[50vw] xl:h-[50vw] 2xl:h-[50vw]'>
                    <Spline scene='https://prod.spline.design/boK9DZzm1GfKNPIj/scene.splinecode'/> 
                </div>
            </div>
        </div>
      <div className='flex justify-between items-center text-white px-[5vw]'>
        <div className='flex flex-col gap-10 relative' style={{ width: '60vw', borderTop:'none', borderBottom:'none', borderLeft:'none', borderRightWidth:'2px' }}>
          <div className='flex items-center justify-between pr-[5vw]'>
            <h1 className='text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl relative flex items-center gap-[2vw] uppercase' style={{zIndex:'10'}}>
              <span style={{background:'#595858', borderRadius:'50%', borderWidth:'2px', padding:'2vw', borderColor:'cyan'}}><RiLightbulbFlashLine className='sm:text-4xl md:text-5xl xl:text-7xl'/></span>
              IDEAS
            </h1>
            <RiArrowRightCircleFill color='cyan' className='sm:text-3xl md:text-4xl xl:text-6xl' onClick={() => handleSectionClick('ideas')}/>
          </div>
          <div className='flex items-center justify-between pr-[5vw]'>
            <h1 className='text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl relative flex items-center gap-[2vw] uppercase' style={{zIndex:'10'}}>
            <span style={{background:'#595858', borderRadius:'50%', borderWidth:'2px', padding:'2vw', borderColor:'cyan'}}><FaPaintBrush className='sm:text-4xl md:text-5xl xl:text-7xl'/></span>
              DESIGN
            </h1>
            <RiArrowRightCircleFill color='cyan' className='sm:text-3xl md:text-4xl xl:text-6xl' onClick={() => handleSectionClick('design')}/>
          </div>
          <div className='flex items-center justify-between pr-[5vw]'>
            <h1 className='text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl relative flex items-center gap-[2vw] uppercase' style={{zIndex:'10'}}>
            <span style={{background:'#595858', borderRadius:'50%', borderWidth:'2px', padding:'2vw', borderColor:'cyan'}}><MdOutlineTextFields className='sm:text-4xl md:text-5xl xl:text-7xl'/></span>
              TEXT BASED DESIGN
            </h1>
            <RiArrowRightCircleFill color='cyan' className='sm:text-3xl md:text-4xl xl:text-6xl' onClick={() => handleSectionClick('text')}/> 
          </div>
          <div className='flex items-center justify-between pr-[5vw]'>
            <h1 className='text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl relative flex items-center gap-[2vw] uppercase' style={{zIndex:'10'}}>
            <span style={{background:'#595858', borderRadius:'50%', borderWidth:'2px', padding:'2vw', borderColor:'cyan'}}><PiImagesBold className='sm:text-4xl md:text-5xl xl:text-7xl'/></span>
              IMAGE BASED DESIGN
            </h1>
            <RiArrowRightCircleFill color='cyan' className='sm:text-3xl md:text-4xl xl:text-6xl' onClick={() => handleSectionClick('image')}/>
          </div>
          
          <div className="absolute rounded-lg h-[90%] left-[5.5%] sm:left-[8%] lg:left-10 xl:left-14 top-5 w-2" style={{zIndex:'0', background:'linear-gradient(#5DE0E6, #038096)'}}></div>
        </div>
        <div style={{ width: '50vw', paddingLeft:'3vw' }}>
          {activeSection === 'ideas' && (
            <p className='text-[2vw] md:text-[1.5vw]'>
              We specialize in ideation and bringing our clients' visions to life as web projects. 
              Our focus lies in conceptualizing and implementing innovative ideas tailored specifically for web projects. 
              Whether it's crafting a static website or developing a dynamic web application, we excel in translating client ideas into digital realities. 
              Our expertise encompasses the entire process, from brainstorming and ideation to the realization of our clients' visions as fully functional web projects. 
              We are dedicated to transforming concepts into compelling online experiences that resonate with our clients and their audiences.
            </p>
          )}
          {activeSection === 'design' && (
            <p className='text-[2vw] md:text-[1.5vw]'>
              At our core, we thrive on crafting comprehensive UI designs tailored to our clients' needs. 
              We offer full-scale UI design solutions, from conceptualizing brand-new designs from scratch to bringing our clients' specific design visions to life. 
              We specialize in adapting to mixed scenarios, seamlessly blending our creativity with our clients' requirements. 
              Our expertise extends to redesigning existing web projects, ensuring they stay fresh, modern, and aligned with evolving trends. 
              With a keen eye for detail and a commitment to excellence, we deliver UI designs that captivate audiences and elevate user experiences. 
              Let us transform your ideas into visually stunning and user-friendly interfaces that leave a lasting impression.
            </p>
          )}
          {activeSection === 'text' && (
            <p className='text-[2vw] md:text-[1.5vw]'>
             We specialize in crafting text-based logos that leave a lasting impression. Our services encompass the complete design and layout of your logo from scratch, ensuring a unique and memorable identity for your brand. With meticulous attention to typography, color, and layout, we create logos that resonate with your target audience while reflecting your brand's essence. We work closely with clients to understand their vision and requirements, tailoring the design to perfectly align with their preferences and objectives. Let us bring your brand to life with a stunning text-based logo that stands out in the crowded marketplace.
            </p>
          )}
          {activeSection === 'image' && (
            <p className='text-[2vw] md:text-[1.5vw]'>
             We excel in creating image-based logos that speak volumes about your brand. Our team is dedicated to conceptualizing and designing visually striking logos that capture the essence of your brand identity. Whether it's illustrating your company's values or showcasing your unique offerings, we meticulously craft each element to evoke the desired emotions and perceptions. We collaborate closely with our clients, understanding their brand ethos and aspirations to create logos that resonate with their target audience. From ideation to execution, we ensure your image-based logo is a true reflection of your brand's personality and aspirations, leaving a lasting impression on your audience
            </p>
          )}
        </div>
        
      </div>
      <div className='flex flex-col items-center justify-center text-white pb-10' style={{background: 'transparent'}}>
        <h1 style={{marginBottom:'5vw', marginTop:'20vw', fontSize:'5vw'}}>Samples Of Design</h1>
          <div className='flex' style={{gap:'1vw'}}>
            <div className='flex flex-col' style={{gap:'1vw'}}>
                <img src='images/logoSample1.jpeg' style={{border:'none', borderRadius:'50%',width: '15vw' }} className='rounded-3xl'/>
                <img src='images/logoSample12.png' style={{border:'none', borderRadius:'50%',width: '15vw' }} className='rounded-3xl'/>
                
            </div>
            <div className='flex' style={{gap:'1vw'}}>
              <img src='images/logoSample10.png' style={{border:'none', borderRadius:'50%',width: '33vw' }} className='rounded-3xl'/>
              <div className='flex flex-col' style={{gap:'1vw'}}>
                  <div className='flex' style={{gap:'1vw'}}>
                    <img src='images/logoSample7.png' style={{border:'none', borderRadius:'50%',width: '11vw' }} className='rounded-3xl'/>
                    <img src='images/logoSample4.png' style={{border:'none', borderRadius:'50%',width: '11vw' }} className='rounded-3xl'/>
                    <img src="images/logoSample16.png" style={{border:'none', borderRadius:'50%',width: '11vw' }} className='rounded-3xl'/>
                  </div>
                  <div className='flex' style={{gap:'1vw'}}>
                    <img src='images/logoSample8.png' style={{border:'none', borderRadius:'50%',width: '11vw' }} className='rounded-3xl'/>
                    <img src='images/logoSample6.jpeg' style={{border:'none', borderRadius:'50%',width: '11vw' }} className='rounded-3xl'/>
                    <img src='images/logoSample13.png' style={{border:'none', borderRadius:'50%',width: '11vw' }} className='rounded-3xl'/>
                  </div>
                  <div className='flex' style={{gap:'1vw'}}>
                    <img src='images/logoSample14.png' style={{border:'none', borderRadius:'50%',width: '11vw' }} className='rounded-3xl'/>
                    <img src='images/logoSample11.png' style={{border:'none', borderRadius:'50%',width: '11vw' }} className='rounded-3xl'/>
                    <img src='images/logoSample5.png' style={{border:'none', borderRadius:'50%',width: '11vw' }} className='rounded-3xl'/>
                  </div>
              </div>
              
            </div>
            
        </div>
        
      </div>
      <Link className='self-center pt-20 pb-10' to='http://localhost:5173/#contact'>
          <button className='bg-cyan-500 p-3 text-lg sm:text-xl md:text-2xl lg:text-3xl rounded-lg'>Contact Us</button>
        </Link>
      <Footer/>
    </div>
    
  )
}
