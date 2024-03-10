import React, { useState } from 'react'
import Spline from '@splinetool/react-spline';
import { FaOptinMonster } from "react-icons/fa";
import { TfiThought } from "react-icons/tfi";
import { RiArrowRightCircleFill } from "react-icons/ri";
import { GrTest } from "react-icons/gr";
import { MdDraw, MdOutlineFormatShapes } from "react-icons/md";
import { VscGitPullRequestCreate } from "react-icons/vsc";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function MVP() {
  const [activeSection, setActiveSection] = useState('story');

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
                    <h1 className='uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl'>Animate Your <br/>Imagination</h1>
                    <p className='text-xs w-[130%] sm:text-sm md:text-md lg:text-lg lg:w-[60%] xl:text-lg'>
                    Welcome to our animation services! At WAREPIX, we specialize in creating captivating animations that bring your ideas to life. Whether you need 2D or 3D animation for entertainment, education, marketing, or any other purpose, we've got you covered. Our team of skilled animators is dedicated to delivering top-notch animations tailored to your specific needs and requirements.
                    </p> 
                    <div className='flex gap-5'>
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
        <div className='flex flex-col gap-10 relative' style={{ width: '55vw', borderTop:'none', borderBottom:'none', borderLeft:'none', borderRightWidth:'2px' }}>
          <div className='flex items-center justify-between pr-[5vw]'>
            <h1 className='text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl relative flex items-center gap-[2vw]' style={{zIndex:'10'}}>
              <span style={{background:'#595858', borderRadius:'50%', borderWidth:'2px', padding:'2vw', borderColor:'cyan'}}><TfiThought className='sm:text-4xl md:text-5xl xl:text-7xl'/></span>
              Storyboarding
            </h1>
            <RiArrowRightCircleFill color='cyan' className='sm:text-3xl md:text-4xl xl:text-6xl' onClick={() => handleSectionClick('story')}/>
          </div>
          <div className='flex items-center justify-between pr-[5vw]'>
            <h1 className='text-xs sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl relative flex items-center gap-[2vw]' style={{zIndex:'10'}}>
            <span style={{background:'#595858', borderRadius:'50%', borderWidth:'2px', padding:'2vw', borderColor:'cyan'}}><FaOptinMonster className='sm:text-4xl md:text-5xl xl:text-7xl'/></span>
              Character Design
            </h1>
            <RiArrowRightCircleFill color='cyan' className=' sm:text-3xl md:text-4xl xl:text-6xl' onClick={() => handleSectionClick('character')}/>
          </div>
          <div className='flex items-center justify-between pr-[5vw]'>
            <h1 className='text-xs sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl relative flex items-center gap-[2vw]' style={{zIndex:'10'}}>
            <span style={{background:'#595858', borderRadius:'50%', borderWidth:'2px', padding:'2vw', borderColor:'cyan'}}><MdDraw className='sm:text-4xl md:text-5xl xl:text-7xl'/></span>
              Animation Techniques
            </h1>
            <RiArrowRightCircleFill color='cyan' className='sm:text-3xl md:text-4xl xl:text-6xl' onClick={() => handleSectionClick('techniques')}/> 
          </div>
          <div className='flex items-center justify-between pr-[5vw]'>
            <h1 className='text-xs sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl relative flex items-center gap-[2vw]' style={{zIndex:'10'}}>
            <span style={{background:'#595858', borderRadius:'50%', borderWidth:'2px', padding:'2vw', borderColor:'cyan'}}><VscGitPullRequestCreate className='sm:text-4xl md:text-5xl xl:text-7xl'/></span>
              Editing and Production
            </h1>
            <RiArrowRightCircleFill color='cyan' className='sm:text-3xl md:text-4xl xl:text-6xl' onClick={() => handleSectionClick('editing')}/>
          </div>
          <div className='flex items-center justify-between pr-[5vw]'>
            <h1 className='text-xs sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl relative flex items-center gap-[2vw]' style={{zIndex:'10'}}>
            <span style={{background:'#595858', borderRadius:'50%', borderWidth:'2px', padding:'2vw', borderColor:'cyan'}}><MdOutlineFormatShapes className='sm:text-4xl md:text-5xl xl:text-7xl'/></span>
              Multiple Formats
            </h1>
            <RiArrowRightCircleFill color='cyan' className='sm:text-3xl md:text-4xl xl:text-6xl' onClick={() => handleSectionClick('formats')}/>
          </div>   
          <div className="absolute rounded-lg h-[90%] left-[5.5%] sm:left-[8%] lg:left-10 xl:left-14 top-5 w-2" style={{zIndex:'0', background:'linear-gradient(#5DE0E6, #038096)'}}></div>
        </div>
        <div style={{ width: '35vw', paddingLeft:'3vw' }}>
          {activeSection === 'story' && (
            <p className='text-[2vw] md:text-[1.5vw]'>
              Our process begins with crafting detailed storyboards that outline the sequence of events and key elements of your animation. Storyboarding serves as the blueprint for your animation, helping to visualize the flow of the story, camera angles, and key actions. Our storyboard artists work closely with you to ensure that the narrative and visuals align with your vision and objectives. Through this collaborative process, we refine the storyboard until it accurately represents the essence of your animation.
            </p>
          )}
          {activeSection === 'character' && (
            <p className='text-[2vw] md:text-[1.5vw]'>
            Our team of talented artists specializes in creating unique and memorable characters that resonate with your audience. Character design involves brainstorming, sketching, and refining ideas to develop characters that embody personality and charm. We understand the importance of creating characters that are visually appealing and relatable, and our artists invest time and effort to bring your characters to life. From initial concept sketches to final designs, we work closely with you to ensure that the characters align with your vision and the overall tone of the animation.
            </p>
          )}
          {activeSection === 'techniques' && (
            <p className='text-[2vw] md:text-[1.5vw]'>
            We employ a diverse range of animation techniques to bring your ideas to life. From traditional hand-drawn animation to computer-generated imagery (CGI) and motion graphics, we leverage the latest tools and technologies to achieve the desired look and feel for your project. Each animation technique offers its unique advantages, and our experienced animators select the most suitable approach based on your requirements and objectives. Whether you're aiming for a classic, handcrafted aesthetic or a sleek, modern style, we have the expertise to execute your vision with precision and skill.
            </p>
          )}
          {activeSection === 'editing' && (
            <p className='text-[2vw] md:text-[1.5vw]'>
                WAREPIX designs scalable architectures and selects suitable technology stacks. We assess technical requirements and implement best practices for security and performance. Integration of third-party APIs extends MVP functionality. Our solutions evolve with your business needs, ensuring long-term viability.
            </p>
          )}
          {activeSection === 'formats' && (
            <p className='text-[2vw] md:text-[1.5vw]'>
            We understand that each project has unique requirements and distribution channels. Whether you need animations for web content, social media, presentations, or broadcast, we provide deliverables in multiple formats to suit your needs. Our team ensures compatibility and optimization for seamless integration into your chosen platforms, whether it's streaming video, interactive applications, or traditional broadcast channels. We work closely with you to understand your delivery requirements and ensure that the final animations are delivered in the formats that best serve your goals and objectives.
            </p>
          )}
         
        </div>
        
      </div>
      <div className='text-white flex flex-col' style={{background: 'transparent'}}>
        <Spline scene='https://prod.spline.design/vcti8sPD7V7VCjiS/scene.splinecode'/>
        <Link className='self-center pt-10' to='http://localhost:5173/#contact'>
          <button className='bg-cyan-500 p-3 text-lg sm:text-xl md:text-2xl lg:text-3xl rounded-lg mt-[10vw]'>Contact Us</button>
        </Link>
      </div>
      <Footer/>
    </div>
    
  )
}
