import React, { useState } from 'react'
import Spline from '@splinetool/react-spline';
import { FaRobot } from "react-icons/fa";
import { RiArrowRightCircleFill, RiLightbulbFlashLine } from "react-icons/ri";
import { IoIosFlash } from "react-icons/io";
import { IoLayersSharp } from "react-icons/io5";
import { GrTest } from "react-icons/gr";
import { MdRocketLaunch } from "react-icons/md";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function MVP() {
  const [activeSection, setActiveSection] = useState('ideation');

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };
  return (
    // linear-gradient(to bottom, black, #595858) za root div
    <div className='flex flex-col'style={{gap:'8vw', background:'linear-gradient(to bottom, black, #595858)'}}>
      <NavBar/>
      <div className='flex flex-col'>
            <div className='flex sm:flex-col md:flex-col gap-10 lg:flex-row lg:gap-0 items-center' style={{paddingInline:'2vw'}}>
                <div className='text-white flex flex-col gap-10' style={{width:'60vw'}}>
                    <h1 className='uppercase' style={{fontSize:'4vw'}}>Skyrocket Your <br/> MVP</h1>
                    <p style={{fontSize:'1.3vw'}}>
                    WAREPIX offers premier MVP (Minimum Viable Product) development service to swiftly transform your business ideas from concepts to reality. Our dedicated team of technology and design experts is committed to providing efficient solutions that enable rapid market entry and crucial feedback gathering.
                    </p> 
                    <div className='flex gap-5 text-xl'>
                      <Link to='http://localhost:5173/#contact'>
                        <button className='bg-cyan-500 p-3 rounded-lg'>Contact Us</button>
                      </Link>
                        
                    </div>
                    
                </div>
                <div >
                    <Spline scene='https://prod.spline.design/boK9DZzm1GfKNPIj/scene.splinecode'/> 
                </div>
            </div>
        </div>
      <div className='flex justify-between items-center text-white' style={{paddingInline:'10vw'}}>
        <div className='flex flex-col gap-10 relative' style={{ width: '55vw', borderTop:'none', borderBottom:'none', borderLeft:'none', borderRightWidth:'2px' }}>
          <div className='flex items-center justify-between pr-20'>
            <h1 className='md:text-2xl lg:text-3xl xl:text-4xl relative flex items-center gap-5 uppercase' style={{zIndex:'10'}}>
              <span style={{background:'#595858', borderRadius:'50%', borderWidth:'5px', padding:'15px', borderColor:'cyan'}}><RiLightbulbFlashLine className='sm:text-4xl md:text-5xl xl:text-7xl'/></span>
                Planning
            </h1>
            <RiArrowRightCircleFill color='cyan' className='sm:text-3xl md:text-4xl xl:text-6xl' onClick={() => handleSectionClick('ideation')}/>
          </div>
          <div className='flex items-center justify-between pr-20'>
            <h1 className='uppercase md:text-xl lg:text-3xl xl:text-4xl relative flex items-center gap-5' style={{zIndex:'10'}}>
            <span style={{background:'#595858', borderRadius:'50%', borderWidth:'5px', padding:'15px', borderColor:'cyan'}}><FaRobot className='sm:text-4xl md:text-5xl xl:text-7xl'/></span>
                Prototyping
            </h1>
            <RiArrowRightCircleFill color='cyan' className=' sm:text-3xl md:text-4xl xl:text-6xl' onClick={() => handleSectionClick('prototyping')}/>
          </div>
          <div className='flex items-center justify-between pr-20'>
            <h1 className='uppercase md:text-xl lg:text-3xl xl:text-4xl relative flex items-center gap-5' style={{zIndex:'10'}}>
            <span style={{background:'#595858', borderRadius:'50%', borderWidth:'5px', padding:'15px', borderColor:'cyan'}}><IoIosFlash className='sm:text-4xl md:text-5xl xl:text-7xl'/></span>
                Agile Development
            </h1>
            <RiArrowRightCircleFill color='cyan' className='sm:text-3xl md:text-4xl xl:text-6xl' onClick={() => handleSectionClick('agile')}/> 
          </div>
          <div className='flex items-center justify-between pr-20'>
            <h1 className='md:text-xl lg:text-3xl xl:text-4xl relative flex items-center gap-5' style={{zIndex:'10'}}>
            <span style={{background:'#595858', borderRadius:'50%', borderWidth:'5px', padding:'15px', borderColor:'cyan',}}><IoLayersSharp className='sm:text-4xl md:text-5xl xl:text-7xl'/></span>
                Architecture
            </h1>
            <RiArrowRightCircleFill color='cyan' className='sm:text-3xl md:text-4xl xl:text-6xl' onClick={() => handleSectionClick('architecture')}/>
          </div>
          <div className='flex items-center justify-between pr-20'>
            <h1 className='md:text-xl lg:text-3xl xl:text-4xl relative flex items-center gap-5' style={{zIndex:'10'}}>
            <span style={{background:'#595858', borderRadius:'50%', borderWidth:'5px', padding:'15px', borderColor:'cyan'}}><GrTest className='sm:text-4xl md:text-5xl xl:text-7xl'/></span>
                Testing
            </h1>
            <RiArrowRightCircleFill color='cyan' className='sm:text-3xl md:text-4xl xl:text-6xl' onClick={() => handleSectionClick('testing')}/>
          </div>
          <div className='flex items-center justify-between pr-20'>
            <h1 className='md:text-xl lg:text-3xl xl:text-4xl relative flex items-center gap-5' style={{zIndex:'10'}}>
            <span style={{background:'#595858', borderRadius:'50%', borderWidth:'5px', padding:'15px', borderColor:'cyan'}}><MdRocketLaunch className='sm:text-4xl md:text-5xl xl:text-7xl'/></span>
                Deployment 
            </h1>
            <RiArrowRightCircleFill color='cyan' className='sm:text-3xl md:text-4xl xl:text-6xl' onClick={() => handleSectionClick('deployment')}/>
          </div>
          
          <div className="absolute rounded-lg sm:left-8 lg:left-10 xl:left-14 top-10 bottom-20 w-2" style={{zIndex:'0', background:'linear-gradient(#5DE0E6, #038096)'}}></div>
        </div>
        <div style={{ width: '35vw', paddingLeft:'3vw' }}>
          {activeSection === 'ideation' && (
            <p style={{fontSize:'1.4vw'}}>
                WAREPIX's product ideation and planning process are collaborative and strategic. We delve into brainstorming sessions and requirements gathering to define your MVP's scope and objectives. By prioritizing features based on business value and user impact, we ensure your MVP resonates with your audience. Our detailed project roadmap guides execution, fostering transparent communication and proactive risk management.
            </p>
          )}
          {activeSection === 'prototyping' && (
            <p style={{fontSize:'1.4vw'}}>
                At WAREPIX, we excel in prototyping and wireframing, translating creativity into functionality. Through rapid prototyping, we visualize key features for early feedback. Our wireframes and mockups, crafted with user-centric principles, ensure intuitive user experiences. Iterating based on feedback, we refine designs to elevate your brand identity and resonate with your audience. Our approach fosters innovation and collaboration, delivering exceptional MVPs.
            </p>
          )}
          {activeSection === 'agile' && (
            <p style={{fontSize:'1.4vw'}}>
                WAREPIX embraces Agile methodologies for adaptable development cycles. We break projects into sprints, ensuring flexibility and transparency. Regular reviews and retrospectives facilitate progress evaluation and improvement planning. Continuous integration and deployment streamline our workflow, enabling efficient development.
            </p>
          )}
          {activeSection === 'architecture' && (
            <p style={{fontSize:'1.4vw'}}>
                WAREPIX designs scalable architectures and selects suitable technology stacks. We assess technical requirements and implement best practices for security and performance. Integration of third-party APIs extends MVP functionality. Our solutions evolve with your business needs, ensuring long-term viability.
            </p>
          )}
          {activeSection === 'testing' && (
            <p style={{fontSize:'1.4vw'}}>
                WAREPIX conducts comprehensive user testing sessions to gather actionable feedback. We integrate feedback loops throughout development to validate assumptions and refine designs. Utilizing analytics tools, we monitor user behavior and prioritize enhancements. Collaboration with stakeholders drives user-centric improvements.
            </p>
          )}
          {activeSection === 'deployment' && (
            <p style={{fontSize:'1.4vw'}}>
                WAREPIX oversees seamless deployment and provides ongoing support. Monitoring tools track key performance indicators and user engagement metrics. Regular reviews inform iterative improvements based on feedback and market trends. Our strategic approach ensures sustained product success and growth.
            </p>
          )}
        </div>
        
      </div>
      <div className='text-white flex flex-col' style={{background: 'transparent', paddingInline:'4vw'}}>
        <h1 className='text-pink-500' style={{fontSize:'3vw', paddingBottom:'2vw'}}>MVP (Minimum Viable Product)</h1>
        <p style={{fontSize:'1.2vw'}}>
            Is a development strategy where a basic version of a product is released to gather maximum validated learning about customers with the least effort. It typically includes only core features, enough to deploy the product and test its concept in the market. MVP allows for early user feedback and validation, which informs further development and iterations.
            <br/><br/>
            At WAREPIX, we offer comprehensive understanding and assistance in developing MVP projects. We recognize that MVPs are the foundation of successful product launches, enabling businesses to validate their ideas and iterate based on user feedback. Our approach involves:
            <br/><br/>
            Thorough Analysis: We work closely with clients to understand their vision and goals for the MVP. Through detailed analysis, we identify core features essential for the initial release.The MVP is the smallest version of a product that can provide value to customers. It contains just
        </p>
        <div className='flex flex-col self-center' style={{gap:'1.5vw', paddingTop:'2vw', width:'80vw'}}>
            <ol className='flex items-center' style={{gap:'1vw', fontSize:'1.3vw'}}>
                <h1 style={{fontSize:'3.5vw'}}>1</h1>
                Strategic Planning: Our team helps in planning and prioritizing features to ensure the MVP effectively addresses user needs while staying within budget and time constraints.
            </ol>
            <ol className='flex items-center' style={{gap:'1vw', fontSize:'1.3vw'}}>
               <h1 style={{fontSize:'3.5vw'}}>2</h1>
                Rapid Prototyping: We specialize in creating rapid prototypes and wireframes to visualize MVP functionalities and gather early feedback from stakeholders and potential users.
            </ol>
            <ol className='flex items-center ' style={{gap:'1vw', fontSize:'1.3vw'}}>
                <h1 style={{fontSize:'3.5vw'}}>3</h1>
                Agile Development: WAREPIX follows Agile methodologies to facilitate adaptive and iterative development cycles. This approach allows for flexibility and responsiveness to changes and feedback throughout the development process.
            </ol>
            <ol className='flex items-center ' style={{gap:'1vw', fontSize:'1.3vw'}}>
                <h1 style={{fontSize:'3.5vw'}}>4</h1>
                User-Centric Approach: We emphasize user testing and feedback integration throughout MVP development. By involving users early and often, we ensure that the MVP meets their expectations and addresses pain points effectively. 
            </ol>
            <ol className='flex items-center ' style={{gap:'1vw', fontSize:'1.3vw'}}>
                <h1 style={{fontSize:'3.5vw'}}>5</h1>
                Continuous Improvement: After deployment, we continue to support the MVP, monitor its performance, and analyze user behavior. This data-driven approach helps in identifying areas for improvement and guiding future iterations.
            </ol>
        </div>
        <p className='text-center self-center' style={{width:'60vw', fontSize:'2vw', marginTop:'5vw'}}>
            Overall, WAREPIX's expertise and support in MVP development empower businesses to minimize risk, maximize learning, and accelerate their path to market success.  
        </p>
        <Link className='self-center' style={{marginTop:'5vw'}} to='http://localhost:5173/#contact'>
          <button className='bg-cyan-500 p-3 text-lg lg:text-xl xl:text-2xl rounded-lg'>Contact Us</button>
        </Link>
      </div>
      <Footer/>
    </div>
    
  )
}
