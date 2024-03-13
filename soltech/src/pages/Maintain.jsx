import React, { useState } from 'react'
import Spline from '@splinetool/react-spline';
import { RiArrowRightCircleFill } from "react-icons/ri";
import { GrOptimize } from "react-icons/gr";
import { IoLayersSharp } from "react-icons/io5";
import { GrTest } from "react-icons/gr";
import { FaBugSlash, FaTeamspeak } from "react-icons/fa6";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Preloader from '../components/Preloader';

export default function Maintain() {
  const [activeSection, setActiveSection] = useState('bug');

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };
  return (
    // linear-gradient(to bottom, black, #595858) za root div
    <div className='flex flex-col'style={{gap:'8vw', background:'linear-gradient(to bottom, black, #595858)'}}>
      <Preloader/>
      <NavBar/>
      <div className='flex flex-col'>
            <div className='flex-col sm:flex-col md:flex-col lg:flex xl:flex 2xl:flex-row 3xl:flex lg:gap-0 items-center' style={{paddingInline:'2vw'}}>
                <div className='text-white flex flex-col gap-[2vw]'>
                    <h1 className='uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl'>Keep Your Digital <br/>World Running Smoothly</h1>
                    <p className='text-xs w-[80%] sm:text-sm md:text-md lg:text-lg lg:w-[60%] xl:text-lg'>
                    At WAREPIX, we specialize in providing maintenance and repair services for web and mobile application projects, as well as general application maintenance and consultations. Our team is dedicated to ensuring the smooth operation and longevity of your digital solutions.
                    </p> 
                    <div className='flex gap-5 text-xl'>
                      <Link to='https://www.warepix.com/#contact'>
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
        <div className='flex flex-col gap-10 relative' style={{ width: '55vw', borderTop:'none', borderBottom:'none', borderLeft:'none', borderRightWidth:'2px' }}>
          <div className='flex items-center justify-between pr-[5vw]'>
            <h1 className='text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl relative flex items-center gap-[2vw]' style={{zIndex:'10'}}>
              <span style={{background:'#595858', borderRadius:'50%', borderWidth:'2px', padding:'2vw', borderColor:'cyan'}}><FaBugSlash className='sm:text-4xl md:text-5xl xl:text-7xl'/></span>
                Bug Fixing
            </h1>
            <RiArrowRightCircleFill color='cyan' className='sm:text-3xl md:text-4xl xl:text-6xl' onClick={() => handleSectionClick('bug')}/>
          </div>
          <div className='flex items-center justify-between pr-[5vw]'>
            <h1 className='text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl relative flex items-center gap-[2vw]' style={{zIndex:'10'}}>
            <span style={{background:'#595858', borderRadius:'50%', borderWidth:'2px', padding:'2vw', borderColor:'cyan'}}><AiOutlineSafetyCertificate className='sm:text-4xl md:text-5xl xl:text-7xl'/></span>
              Security 
            </h1>
            <RiArrowRightCircleFill color='cyan' className=' sm:text-3xl md:text-4xl xl:text-6xl' onClick={() => handleSectionClick('security ')}/>
          </div>
          <div className='flex items-center justify-between pr-[5vw]'>
            <h1 className='text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl relative flex items-center gap-[2vw]' style={{zIndex:'10'}}>
            <span style={{background:'#595858', borderRadius:'50%', borderWidth:'2px', padding:'2vw', borderColor:'cyan'}}><GrOptimize className='sm:text-4xl md:text-5xl xl:text-7xl'/></span>
              Optimization
            </h1>
            <RiArrowRightCircleFill color='cyan' className='sm:text-3xl md:text-4xl xl:text-6xl' onClick={() => handleSectionClick('optimization')}/> 
          </div>
          <div className='flex items-center justify-between pr-[5vw]'>
            <h1 className='text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl relative flex items-center gap-[2vw]' style={{zIndex:'10'}}>
            <span style={{background:'#595858', borderRadius:'50%', borderWidth:'2px', padding:'2vw', borderColor:'cyan'}}><IoLayersSharp className='sm:text-4xl md:text-5xl xl:text-7xl'/></span>
              Upgrades
            </h1>
            <RiArrowRightCircleFill color='cyan' className='sm:text-3xl md:text-4xl xl:text-6xl' onClick={() => handleSectionClick('upgrades')}/>
          </div>
          <div className='flex items-center justify-between pr-[5vw]'>
            <h1 className='text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl relative flex items-center gap-[2vw]' style={{zIndex:'10'}}>
            <span style={{background:'#595858', borderRadius:'50%', borderWidth:'2px', padding:'2vw', borderColor:'cyan'}}><FaTeamspeak className='sm:text-4xl md:text-5xl xl:text-7xl'/></span>
            Technical Consultations
            </h1>
            <RiArrowRightCircleFill color='cyan' className='sm:text-3xl md:text-4xl xl:text-6xl' onClick={() => handleSectionClick('consultations')}/>
          </div>       
          <div className="absolute rounded-lg h-[90%] left-[5.5%] sm:left-[8%] lg:left-10 xl:left-14 top-5 w-2" style={{zIndex:'0', background:'linear-gradient(#5DE0E6, #038096)'}}></div>
        </div>
        <div style={{ width: '35vw', paddingLeft:'3vw' }}>
          {activeSection === 'bug' && (
            <p className='text-[2vw] md:text-[1.5vw]'>
            Our experienced team conducts rigorous bug diagnosis and resolution for both web and mobile applications. We meticulously track down and rectify any technical glitches or issues that may disrupt the functionality or user experience of your applications. By implementing thorough troubleshooting techniques, we ensure that your applications run smoothly and seamlessly, enhancing overall user satisfaction and retention rates.
            </p>
          )}
          {activeSection === 'security ' && (
            <p className='text-[2vw] md:text-[1.5vw]'>
            We prioritize the security of your digital assets by regularly implementing updates and patches. Our dedicated security team remains vigilant against emerging threats, swiftly addressing vulnerabilities and fortifying your applications against potential security breaches. Through meticulous patch management practices, we safeguard your applications and data integrity, maintaining user trust and confidence in your brand.
            </p>
          )}
          {activeSection === 'optimization' && (
            <p className='text-[2vw] md:text-[1.5vw]'>
            Our optimization efforts are aimed at maximizing the performance and efficiency of your applications. By conducting in-depth analyses of code structure, database queries, and server configurations, we identify areas for improvement and implement strategic optimizations. Through these measures, we enhance the speed, responsiveness, and scalability of your applications, ensuring a seamless and satisfying user experience across all platforms and devices.
            </p>
          )}
          {activeSection === 'upgrades' && (
            <p className='text-[2vw] md:text-[1.5vw]'>
            We collaborate closely with your team to identify opportunities for feature enhancements and upgrades. By conducting thorough market research and user feedback analysis, we pinpoint areas where additional functionalities or improvements can be made to enhance user engagement and satisfaction. Our goal is to keep your applications competitive and aligned with evolving industry standards and user expectations, driving continued growth and success for your business.
            </p>
          )}
          {activeSection === 'consultations' && (
            <p className='text-[2vw] md:text-[1.5vw]'>
            Our dedicated technical support team is committed to providing timely assistance and guidance to address your inquiries and maintenance needs effectively. Whether you require troubleshooting assistance, clarification on technical matters, or strategic consultations for future developments, our experts are here to support you every step of the way. We strive to empower you with the knowledge and resources needed to make informed decisions and optimize the performance and functionality of your digital assets.
            </p>
          )}

        </div>
        
      </div>
      <div className='text-white flex flex-col mt-[10vw]' style={{background: 'transparent', paddingInline:'3vw'}}>
        <h1 className='text-3xl md:text-4xl xl:text-5xl pb-10 text-pink-500 uppercase self-center'>Smooth And Safe</h1>
        <p className='text-xs sm:text-sm md:text-md lg:text-md xl:text-xl self-center text-center' style={{width:'90vw'}}>
        At WAREPIX, we offer comprehensive maintenance services to ensure the longevity and optimal performance of your digital assets. Our dedicated team specializes in maintaining and enhancing web and mobile applications, providing proactive support and strategic guidance to keep your digital presence ahead of the curve.
<br/><br/>
We start by meticulously diagnosing and resolving bugs and technical issues within your applications, ensuring smooth and seamless operation. Our proactive approach involves regular security updates and patches to protect your applications from potential vulnerabilities and cyber threats.

Performance optimization is key to delivering a seamless user experience. We conduct thorough assessments and implement strategic enhancements to boost speed, responsiveness, and scalability, ensuring that your applications perform optimally across all platforms and devices.

Staying competitive in the digital landscape requires continuous innovation. That's why we work closely with your team to identify opportunities for feature enhancements and upgrades. By integrating user feedback and industry insights, we enhance functionality, usability, and overall user satisfaction.
<br/><br/>
Data security is paramount. WAREPIX implements robust backup and disaster recovery solutions to safeguard your valuable data against unexpected events or system failures. Our comprehensive disaster recovery plans ensure minimal downtime and rapid data restoration in the event of a crisis.

Our dedicated technical support team is available to address your inquiries and maintenance needs promptly. Whether you require troubleshooting assistance, technical guidance, or strategic consultations, WAREPIX is here to provide expert support and empower you with the knowledge and resources needed to make informed decisions.

By partnering with WAREPIX for your maintenance needs, you can rest assured that your digital assets are in capable hands. We're committed to delivering exceptional service and ensuring the long-term success of your digital initiatives. Let WAREPIX be your trusted partner in maintaining and optimizing your digital presence.
        </p>
        <Link className='self-center' style={{marginTop:'15vw'}} to='https://www.warepix.com/#contact'>
          <button className='bg-cyan-500 p-3 text-lg sm:text-xl md:text-2xl lg:text-3xl rounded-lg'>Contact Us</button>
        </Link>
      </div>
      <Footer/>
    </div>
    
  )
}
