import React, { useState } from 'react'
import Spline from '@splinetool/react-spline';
import { FaPaintBrush, FaTools } from "react-icons/fa";
import { RiArrowRightCircleFill, RiLightbulbFlashLine } from "react-icons/ri";
import { IoCloudDone } from "react-icons/io5";
import { DiAndroid, DiApple, DiAptana } from "react-icons/di";
import { MdOutlineReadMore } from "react-icons/md";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function Web() {
  const [activeSection, setActiveSection] = useState('ideas');

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };
  return (
    // linear-gradient(to bottom, black, #595858) za root div
    <div className='flex flex-col'style={{gap:'8vw', background:'linear-gradient(to bottom, black, #595858)'}}>
      <NavBar/>
      <div className='flex flex-col'>
            <div className='flex-col sm:flex-col md:flex-col lg:flex xl:flex 2xl:flex-row 3xl:flex lg:gap-0 items-center' style={{paddingInline:'2vw'}}>
                <div className='text-white flex flex-col gap-[2vw]' style={{width:'60vw'}}>
                    <h1 className='uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl'>Gain Your <br/> Web Identity</h1>
                    <p className='text-xs w-[150%] sm:text-sm md:text-md lg:text-lg lg:w-[60%] xl:text-lg'>
                      Welcome to our realm of web services where innovation meets expertise. 
                      From conceptualizing sleek UI designs to crafting dynamic static websites, and refining existing platforms, we cover it all. Our commitment extends beyond just building websites, we strive to enhance your online presence and propel your digital success. 
                      Let's collaborate to bring your vision to life in the vast landscape of the web.
                    </p> 
                    <div className='flex gap-5 text-xl'>
                      <Link to='http://localhost:5173/#contact'>
                        <button className='bg-cyan-500 p-3 rounded-lg text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl'>Contact Us</button>
                      </Link>
                    </div>
                    
                </div>
                <div className='h-[100vw] sm:h-[50vw] md:h-[50vw] lg:h-[50vw] xl:h-[50vw] 2xl:h-[50vw]' >
                    <Spline scene='https://prod.spline.design/boK9DZzm1GfKNPIj/scene.splinecode'/> 
                </div>
            </div>
        </div>
      <div className='flex justify-between items-center text-white px-[5vw]'>
        <div className='flex flex-col gap-10 relative' style={{ width: '55vw', borderTop:'none', borderBottom:'none', borderLeft:'none', borderRightWidth:'2px' }}>
          <div className='flex items-center justify-between pr-[5vw]'>
            <h1 className='text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl relative flex items-center gap-[2vw]' style={{zIndex:'10'}}>
              <span style={{background:'#595858', borderRadius:'50%', borderWidth:'2px', padding:'2vw', borderColor:'cyan'}}><RiLightbulbFlashLine className='sm:text-4xl md:text-5xl xl:text-7xl'/></span>
              IDEAS
            </h1>
            <RiArrowRightCircleFill color='cyan' className='sm:text-3xl md:text-4xl xl:text-6xl' onClick={() => handleSectionClick('ideas')}/>
          </div>
          <div className='flex items-center justify-between pr-[5vw]'>
            <h1 className='text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl relative flex items-center gap-[2vw]' style={{zIndex:'10'}}>
            <span style={{background:'#595858', borderRadius:'50%', borderWidth:'2px', padding:'2vw', borderColor:'cyan'}}><FaPaintBrush className='sm:text-4xl md:text-5xl xl:text-7xl'/></span>
              DESIGN
            </h1>
            <RiArrowRightCircleFill color='cyan' className='sm:text-3xl md:text-4xl xl:text-6xl' onClick={() => handleSectionClick('design')}/>
          </div>
          <div className='flex items-center justify-between pr-[5vw]'>
            <h1 className='text-xs sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl relative flex items-center gap-[2vw]' style={{zIndex:'10'}}>
            <span style={{background:'#595858', borderRadius:'50%', borderWidth:'2px', padding:'2vw', borderColor:'cyan'}}><DiAptana className='sm:text-4xl md:text-5xl xl:text-7xl'/></span>
              FUNCTIONALITY
            </h1>
            <RiArrowRightCircleFill color='cyan' className='sm:text-3xl md:text-4xl xl:text-6xl' onClick={() => handleSectionClick('functionality')}/> 
          </div>
          <div className='flex items-center justify-between pr-[5vw]'>
            <h1 className='text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl relative flex items-center gap-[2vw]' style={{zIndex:'10'}}>
            <span style={{background:'#595858', borderRadius:'50%', borderWidth:'2px', padding:'2vw', borderColor:'cyan'}}><IoCloudDone className='sm:text-4xl md:text-5xl xl:text-7xl'/></span>
              HOST
            </h1>
            <RiArrowRightCircleFill color='cyan' className='sm:text-3xl md:text-4xl xl:text-6xl' onClick={() => handleSectionClick('host')}/>
          </div>
          <div className='flex items-center justify-between pr-[5vw]'>
            <h1 className='text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl relative flex items-center gap-[2vw]' style={{zIndex:'10'}}>
            <span style={{background:'#595858', borderRadius:'50%', borderWidth:'2px', padding:'2vw', borderColor:'cyan'}}><FaTools className='sm:text-4xl md:text-5xl xl:text-7xl'/></span>
              MAINTENANCE
            </h1>
            <RiArrowRightCircleFill color='cyan' className='sm:text-3xl md:text-4xl xl:text-6xl' onClick={() => handleSectionClick('maintenance')}/>
          </div>
          
          <div className="absolute rounded-lg h-[90%] left-[5.5%] sm:left-[8%] lg:left-10 xl:left-14 top-5 w-2" style={{zIndex:'0', background:'linear-gradient(#5DE0E6, #038096)'}}></div>
        </div>
        <div style={{ width: '35vw', paddingLeft:'3vw'}}>
          {activeSection === 'ideas' && (
            <p className='text-[2vw] md:text-[1.5vw]'>
              We specialize in ideation and bringing our clients' visions to life as web projects. 
              <br/><br/>
              Our focus lies in conceptualizing and implementing innovative ideas tailored specifically for web projects. 
              Whether it's crafting a static website or developing a dynamic web application, we excel in translating client ideas into digital realities. 
              <br/><br/>
              Our expertise encompasses the entire process, from brainstorming and ideation to the realization of our clients' visions as fully functional web projects. 
              We are dedicated to transforming concepts into compelling online experiences that resonate with our clients and their audiences.
            </p>
          )}
          {activeSection === 'design' && (
            <p className='text-[2vw] md:text-[1.5vw]'>
              At our core, we thrive on crafting comprehensive UI designs tailored to our clients' needs. 
              <br/><br/>
              We offer full-scale UI design solutions, from conceptualizing brand-new designs from scratch to bringing our clients' specific design visions to life. 
              We specialize in adapting to mixed scenarios, seamlessly blending our creativity with our clients' requirements. 
              <br/><br/>
              Our expertise extends to redesigning existing web projects, ensuring they stay fresh, modern, and aligned with evolving trends. 
              With a keen eye for detail and a commitment to excellence, we deliver UI designs that captivate audiences and elevate user experiences. 
              Let us transform your ideas into visually stunning and user-friendly interfaces that leave a lasting impression.
            </p>
          )}
          {activeSection === 'functionality' && (
            <p className='text-[2vw] md:text-[1.5vw]'>
             At the heart of our services lies the creation of functional elements for web projects. 
             <br/><br/>
             We pride ourselves on delivering comprehensive functionalities that precisely align with our clients' project requirements. 
             Our offerings encompass the development of all necessary features for a seamless web experience. 
             <br/><br/>
             Whether it's building from the ground up or integrating specific functionalities, we excel in tailoring solutions to meet diverse project needs. 
             Our commitment to excellence ensures that every feature we develop enhances user interactions and enriches the overall web experience. 
             Let us empower your web project with robust functionalities that elevate its performance and user satisfaction.
            </p>
          )}
          {activeSection === 'host' && (
            <p className='text-[2vw] md:text-[1.5vw]'>
             We specialize in bringing your projects to life on the internet, making them accessible to all. 
             <br/><br/>
             Our expertise lies in completing and launching projects that resonate with your audience. 
             <br/><br/>
             From concept to execution, we ensure your project is seamlessly integrated into the digital landscape, ready to be discovered by users worldwide. 
             Let us turn your vision into a reality that thrives online.
             </p>
          )}
          {activeSection === 'maintenance' && (
            <p className='text-[2vw] md:text-[1.5vw]'>
             Our maintenance services cater to the upkeep of your web presence, ensuring smooth operation and optimal performance. 
             <br/><br/>
             We handle bug fixes, implement desired changes, and maintain databases when required, ensuring your website remains responsive and functional. 
             <br/><br/>
             With our dedicated support, your website stays updated, secure, and primed for success. Trust us to keep your online platform running smoothly while you focus on your core business goals.
             </p>
          )}
        </div>
        
      </div>
      <div className='flex flex-col text-white gap-[5vw] px-[3vw]'>
        <div style={{width:'55vw'}}>
          <p className='text-[2vw] md:text-[1.5vw]'>
          Are you looking to establish your online presence? We're here to make it happen. Our web development services cover a broad spectrum of website types, each tailored to meet your specific needs and aspirations. Whether you're venturing into e-commerce, seeking to showcase your personal portfolio, or aiming to establish a professional business identity, we have the expertise to bring your vision to life.
          </p>
        </div>
        <div style={{width:'65vw'}} className='self-end text-end'>
          <p className='text-[2vw] md:text-[1.5vw]'>
          Design isn't just about visuals – it's about creating experiences that resonate deeply with your audience. We understand the pivotal role design plays in shaping your online presence and the lasting impression it leaves on your visitors.
          <br/><br/>
          But what sets us apart is our commitment to design excellence. 
          <br/>
          We believe that design is more than just aesthetics; it's the silent storyteller that guides your visitors' journey through your digital space.
          <br/>
          Consider for a moment the impact of a well-designed website. It's like stepping into a sanctuary of trust, focus, and simplicity, where every element is carefully curated to evoke a sense of security and reliability. These are the sites that inspire confidence and drive action.
          <br/><br/>
          Yet, we also understand the power of innovation. That's why we're not afraid to push the boundaries of design with bold animations and interactive elements. These are the sites that captivate and astound, leaving visitors breathless with anticipation and wonder.
          </p>
        </div>
        <div style={{width:'90vw', paddingTop:'8vh'}} className='self-center text-center self-center text-center text-xs md:text-[1.5vw]'>
          <p >
            Our commitment is to craft websites that not only reflect your vision but also engage and delight your visitors. With attention to detail and a keen eye for design trends, we create websites that stand out in today's digital landscape. Let us help you make your mark online with a website that speaks volumes and sets you apart from the competition.
          </p>
        </div>
        
      </div>
      <div className='flex flex-col items-center justify-center text-white pb-[2vw] mt-[10vw]' style={{background: 'transparent', paddingInline:'2vw'}}>
        <h1 style={{marginBottom:'10vw', fontSize:'6vw'}}>Samples Of Design</h1>
          <div className='flex ' style={{gap:'1vw'}}>
            <div className='flex flex-col ' style={{gap:'1vw'}}>
              <div className='flex ' style={{gap:'1vw'}}>
                <div>
                  <img src='images/webSample3.png' style={{borderRadius:'1vw',width: '45vw' }} className='rounded-3xl'/>
                </div>
              <div className='flex flex-col ' style={{gap:'1vw'}}>
                <img src='images/webSample1.jpeg' style={{borderRadius:'1vw',width: '20vw' }} className='rounded-3xl'/>
                <img src='images/webSample2.jpeg' style={{borderRadius:'1vw',width: '20vw' }} className='rounded-3xl'/>
              </div>
            </div>
            <div className='flex ' style={{gap:'1vw'}}>
              <img src='images/webSample7.jpeg' style={{borderRadius:'1vw',width: '20.3vw' }} className='rounded-3xl'/>
              <img src='images/webSample8.jpeg' style={{borderRadius:'1vw',width: '20.3vw' }} className='rounded-3xl'/>
              <img src='images/webSample9.png' style={{borderRadius:'1vw',width: '20.3vw' }} className='rounded-3xl'/>
            </div>
          </div>
          <div className='flex flex-col ' style={{gap:'1vw'}}>
            <img src='images/webSample6.png' style={{width: '32vw', borderRadius:'1vw' }} className='rounded-3xl'/>
            <div className='flex ' style={{gap:'1vw'}}>
              <img src='images/webSample4.png' style={{borderRadius:'1vw',width: '15vw' }} className='rounded-3xl'/>
              <img src='images/webSample5.jpeg' style={{borderRadius:'1vw',width: '15vw' }} className='rounded-3xl'/>
            </div>
            <div className='flex ' style={{gap:'1vw'}}>
              <img src='images/webSample11.jpeg' style={{borderRadius:'1vw',width: '15vw' }} className='rounded-3xl'/>
              <img src='images/webSample10.jpeg' style={{borderRadius:'1vw',width: '15vw' }} className='rounded-3xl'/>
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
