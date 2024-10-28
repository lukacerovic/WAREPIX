import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { mvpServices } from '../components/constants';
import Experiance from '../components/Experiance';

export default function MVP() {
  const [activeSection, setActiveSection] = useState('ideation');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };
  return (
    <div className='flex flex-col px-[2vw]'style={{gap:'8vw', background:'linear-gradient(to bottom, black, #595858)'}}>
      <NavBar/>
      <div className='flex flex-col'>
            <div className='flex-col sm:flex-col md:flex-col lg:flex xl:flex 2xl:flex-row 3xl:flex lg:gap-0 items-center' style={{paddingInline:'2vw'}}>
                <div className='text-white flex flex-col gap-[2vw]' style={{width:'75vw'}}>
                    <h1 className='uppercase text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl 2xl:text-9xl'>Skyrocket <br/>Your MVP</h1>
                    <p className='text-md w-[120%] sm:text-xl md:text-xl lg:text-2xl lg:w-[90%] xl:text-2xl'>
                    WAREPIX offers premier MVP (Minimum Viable Product) development service to swiftly transform your business ideas from concepts to reality. <br/><br/>
                    Our dedicated team of technology and design experts is committed to providing efficient solutions that enable rapid market entry and crucial feedback gathering.
                    </p> 
                    <div className='flex gap-5 text-xl pb-[5vh]'>
                      <Link to='https://www.warepix.com/#contact'>
                        <button className='bg-cyan-500 p-3 rounded-lg text-md sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl'>Contact Us</button>
                      </Link>
                        
                    </div>
                    
                </div>
                <img src="images/mvpMain.PNG" className='w-[80%] mx-auto lg:w-[50%]'/>
            </div>
        </div>
        <Experiance experiences={mvpServices}/>
      <div className='text-white flex flex-col' style={{background: 'transparent', paddingInline:'4vw'}}>
        <h1 className='text-pink-500 text-[2.5rem] sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl' style={{paddingBottom:'2vw'}}>MVP (Minimum Viable Product)</h1>
        <p className='text-[1.3rem] sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-3xl'>
    A development approach where a basic product version is launched to quickly learn about customers with minimal effort. It includes only essential features to test the concept and gather feedback.
    <br/><br/>
    At WAREPIX, we specialize in building MVPs that validate ideas through user feedback. Our method focuses on:
    <br/><br/>
    Thorough Analysis: We work with clients to identify core features, creating an MVP that delivers value and sets a strong foundation for future iterations.
</p>

        <div className='flex flex-col self-center gap-[10vw] sm:gap-[1.5vw] w-[100%] sm:w-[80vw] pt-[10vw] sm:pt-[5vw]'>
            <ol className='flex text-[1.2rem] sm:text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl items-center gap-[5vw] sm:gap-[1vw]'>
                <h1 className='text-[2rem] sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl'>1</h1>
                Strategic Planning: Our team helps in planning and prioritizing features to ensure the MVP effectively addresses user needs while staying within budget and time constraints.
            </ol>
            <ol className='flex text-[1.2rem] sm:text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl items-center gap-[5vw] sm:gap-[1vw]'>
               <h1 className='text-[2rem] sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl'>2</h1>
                Rapid Prototyping: We specialize in creating rapid prototypes and wireframes to visualize MVP functionalities and gather early feedback from stakeholders and potential users.
            </ol>
            <ol className='flex text-[1.2rem] sm:text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl items-center gap-[5vw] sm:gap-[1vw]'>
                <h1 className='text-[2rem] sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl'>3</h1>
                Agile Development: WAREPIX follows Agile methodologies to facilitate adaptive and iterative development cycles. This approach allows for flexibility and responsiveness to changes and feedback throughout the development process.
            </ol>
            <ol className='flex text-[1.2rem] sm:text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl items-center gap-[5vw] sm:gap-[1vw]'>
                <h1 className='text-[2rem] sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl'>4</h1>
                User-Centric Approach: We emphasize user testing and feedback integration throughout MVP development. By involving users early and often, we ensure that the MVP meets their expectations and addresses pain points effectively. 
            </ol>
            <ol className='flex text-[1.2rem] sm:text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl items-center gap-[5vw] sm:gap-[1vw]'>
                <h1 className='text-[2rem] sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl'>5</h1>
                Continuous Improvement: After deployment, we continue to support the MVP, monitor its performance, and analyze user behavior. This data-driven approach helps in identifying areas for improvement and guiding future iterations.
            </ol>
        </div>
        <p className='text-center text-xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl self-center my-[10vw] sm:my-[5vw] w-[100%] sm:w-[90vw]'>
            Overall, WAREPIX's expertise and support in MVP development empower businesses to minimize risk, maximize learning, and accelerate their path to market success.  
        </p>
        <Link className='self-center' style={{marginTop:'5vw'}} to='https://www.warepix.com/#contact'>
          <button className='bg-cyan-500 p-3 text-lg sm:text-xl md:text-2xl lg:text-3xl rounded-lg'>Contact Us</button>
        </Link>
      </div>
      <Footer/>
    </div>
    
  )
}

