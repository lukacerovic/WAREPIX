import React, { useState } from 'react'
import Spline from '@splinetool/react-spline';
import { FaPaintBrush, FaTools } from "react-icons/fa";
import { RiArrowRightCircleFill, RiLightbulbFlashLine } from "react-icons/ri";
import { IoCloudDone } from "react-icons/io5";
import { DiAndroid, DiApple, DiAptana } from "react-icons/di";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Preloader from '../components/Preloader';

export default function Mobile() {
  const [activeSection, setActiveSection] = useState('ideas');

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
                <div className='text-white flex flex-col gap-10' style={{width:'60vw'}}>
                    <h1 className='uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl'>Mobile<br/> Excellence</h1>
                    <p className='text-xs w-[150%] sm:text-sm md:text-md lg:text-lg lg:w-[60%] xl:text-lg'>
                      Discover the Future - We specialize in crafting cutting-edge mobile applications tailored to your needs. From Android and iOS to cross-platform solutions, we bring your ideas to life on every device. Our team combines innovation and expertise to deliver seamless experiences that captivate and engage users. Whether you're launching a startup or expanding your enterprise, let us propel your mobile presence into the modern, digital age.
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
      <div className='flex justify-between items-center text-white px-[5vw] '>
        <div className='flex flex-col gap-10 relative' style={{ width: '55vw', borderTop:'none', borderBottom:'none', borderLeft:'none', borderRightWidth:'2px' }}>
          <div className='flex items-center justify-between pr-[5vw]'>
            <h1 className='text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl relative flex items-center gap-[2vw]' style={{zIndex:'10'}}>
              <span style={{background:'#595858', borderRadius:'50%', borderWidth:'2px', padding:'2vw', borderColor:'cyan'}}><RiLightbulbFlashLine className='text-xl sm:text-4xl md:text-5xl xl:text-7xl'/></span>
              IDEAS
            </h1>
            <RiArrowRightCircleFill color='cyan' className='sm:text-3xl md:text-4xl xl:text-6xl' onClick={() => handleSectionClick('ideas')}/>
          </div>
          <div className='flex items-center justify-between pr-[5vw]'>
            <h1 className='text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl relative flex items-center gap-[2vw]' style={{zIndex:'10'}}>
            <span style={{background:'#595858', borderRadius:'50%', borderWidth:'2px', padding:'2vw', borderColor:'cyan'}}><FaPaintBrush className='sm:text-4xl md:text-5xl xl:text-7xl'/></span>
              DESIGN
            </h1>
            <RiArrowRightCircleFill color='cyan' className=' sm:text-3xl md:text-4xl xl:text-6xl' onClick={() => handleSectionClick('design')}/>
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
            <span style={{background:'#595858', borderRadius:'50%', borderWidth:'2px', padding:'2vw', borderColor:'cyan',}}><DiAndroid className='sm:text-4xl md:text-5xl xl:text-7xl'/></span>
              ANDROID
            </h1>
            <RiArrowRightCircleFill color='cyan' className='sm:text-3xl md:text-4xl xl:text-6xl' onClick={() => handleSectionClick('android')}/>
          </div>
          <div className='flex items-center justify-between pr-[5vw]'>
            <h1 className='text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl relative flex items-center gap-[2vw]' style={{zIndex:'10'}}>
            <span style={{background:'#595858', borderRadius:'50%', borderWidth:'2px', padding:'2vw', borderColor:'cyan'}}><DiApple className='sm:text-4xl md:text-5xl xl:text-7xl'/></span>
              IOS
            </h1>
            <RiArrowRightCircleFill color='cyan' className='sm:text-3xl md:text-4xl xl:text-6xl' onClick={() => handleSectionClick('apple')}/>
          </div>
          
          <div className="absolute rounded-lg h-[90%] left-[5.5%] sm:left-[8%] lg:left-10 xl:left-14 top-5 w-2" style={{zIndex:'0', background:'linear-gradient(#5DE0E6, #038096)'}}></div>
        </div>
        <div style={{ width: '35vw', paddingLeft:'3vw' }}>
          {activeSection === 'ideas' && (
            <p className='text-[2vw] md:text-[1.5vw]'>
              We specialize in ideation and bringing our clients' visions to life as mobile applications. 
              Our focus lies in conceptualizing and implementing innovative ideas tailored specifically for mobile platforms. 
              <br/><br/>
              Whether it's crafting a user-friendly mobile app or developing a feature-rich, interactive application, we excel in translating client ideas into digital realities. Our expertise encompasses the entire process, from brainstorming and ideation to the realization of our clients' visions as fully functional mobile applications. 
              <br/><br/>
              We are dedicated to transforming concepts into compelling mobile experiences that resonate with our clients and their audiences.
            </p>
          )}
          {activeSection === 'design' && (
            <p className='text-[2vw] md:text-[1.5vw]'>
              At our core, we thrive on crafting comprehensive UI designs tailored to the unique needs of mobile applications. We offer full-scale UI design solutions, from conceptualizing brand-new designs from scratch to bringing our clients' specific design visions to life. We specialize in adapting to diverse scenarios, seamlessly blending our creativity with our clients' requirements.
              <br/><br/>
              With a keen eye for detail and a commitment to excellence, we deliver UI designs that captivate users and elevate their overall app experience.
              <br/><br/>
              Let us transform your mobile app ideas into visually stunning and user-friendly interfaces that leave a lasting impression on your audience.
            </p>
          )}
          {activeSection === 'functionality' && (
            <p className='text-[2vw] md:text-[1.5vw]'>
             At the heart of our services lies the creation of functional elements for mobile applications. We pride ourselves on delivering comprehensive functionalities that precisely align with our clients' project requirements. 
             <br/><br/>
             Our offerings encompass the development of all necessary features for a seamless mobile experience. 
             <br/><br/>
             Whether it's building from the ground up or integrating specific functionalities, we excel in tailoring solutions to meet diverse project needs. 
             <br/><br/>
             Our commitment to excellence ensures that every feature we develop enhances user interactions and enriches the overall mobile experience. Let us empower your mobile project with robust functionalities that elevate its performance and user satisfaction.
            </p>
          )}
          {activeSection === 'android' && (
            <p className='text-[2vw] md:text-[1.5vw]'>
             We specialize in developing custom Android applications designed to meet your specific requirements. Our team of experienced developers is dedicated to crafting intuitive and feature-rich apps that resonate with your target audience. 
             <br/><br/>
             From initial concept to final deployment, we collaborate closely with you to ensure your vision is brought to life effectively. Leveraging the latest technologies and industry best practices, we create robust and scalable Android applications tailored to your needs. 
             <br/><br/>
             Whether you're launching a new product or enhancing your existing services, we're here to guide you through every step of the development process. Let us help you create an Android app that captivates users and achieves your business goals.
            </p>
          )}
          {activeSection === 'apple' && (
            <p className='text-[2vw] md:text-[1.5vw]'>
             We specialize in crafting bespoke iOS mobile applications tailored to your unique needs. Our team of skilled developers is dedicated to creating seamless, intuitive experiences for users on the iOS platform. 
             <br/><br/>
             From conceptualization to development, we work closely with you to bring your ideas to life. 
             <br/><br/>
             Once your iOS app is polished and ready, we handle the intricacies of uploading it to the App Store, ensuring compliance with Apple's guidelines and requirements. Let us transform your vision into a stunning iOS application that stands out on the App Store and delights users worldwide.
            </p>
          )}
        </div>
        
      </div>
      <div className='flex flex-col items-center justify-center text-white py-[5vw]' style={{ paddingInline:'1vw'}}>
        <h1 className='text-2xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-8xl' style={{marginBottom:'6vw'}}>Samples Of Design</h1>
          <div className='flex' style={{gap:'1vw'}}>
            <div className='flex flex-col' style={{gap:'1.5vw'}}>
              <div className='flex' style={{gap:'1.2vw'}}>
                <img src='images/mobileSample12.png' style={{borderRadius:'1vw',width: '16vw' }} className='rounded-3xl'/>
                <div className='flex flex-col' style={{gap:'1.5vw'}}>
                  <img src='images/mobileSample4.png' style={{borderRadius:'1vw',width: '9vw' }} className='rounded-3xl'/>
                  <img src='images/mobileSample8.png' style={{borderRadius:'1vw',width: '9vw' }} className='rounded-3xl'/>
                </div>
              </div>
              <div className='flex ' style={{gap:'0.5vw'}}>
                <img src='images/mobileSample6.png' style={{borderRadius:'1vw',width: '8.2vw' }} className='rounded-3xl'/>
                <img src='images/mobileSample13.jpeg' style={{borderRadius:'1vw',width: '8.2vw' }} className='rounded-3xl'/>
                <img src='images/mobileSample1.jpeg' style={{borderRadius:'1vw',width: '8.2vw' }} className='rounded-3xl'/>
              </div>
            </div>
            <div className='flex ' style={{gap:'1.5vw'}}>
              <img src='images/mobileSample5.jpeg' style={{borderRadius:'1vw',width: '24vw' }} className='rounded-3xl'/>
              <div className='flex flex-col ' style={{gap:'1.5vw'}}>
                  <div className='flex ' style={{gap:'1.5vw'}}>
                    <img src='images/mobileSample7.png' style={{borderRadius:'1vw',width: '13vw' }} className='rounded-3xl'/>
                    <img src='images/mobileSample3.png' style={{borderRadius:'1vw',width: '13vw' }} className='rounded-3xl'/>
                  </div>
                  <div className='flex ' style={{gap:'1.5vw'}}>
                    <img src='images/mobileSample11.png' style={{borderRadius:'1vw',width: '13vw' }} className='rounded-3xl'/>
                    <img src='images/mobileSample9.jpeg' style={{borderRadius:'1vw',width: '13vw' }} className='rounded-3xl'/>
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

// ostalo mi je da kreirani mejl povezem sa sendgrid mejlom i da potom naisti nacin kao sto sam slao mejlove sa snap in-a da postavim sopstveno slanje
// problem je samo sto nisam siguran da ja mogu da manipulisem tudjim mejlom, dakle nisam siguran da li ja mogu da podesim da se automatski posalje email od strane korisnika

// To bi mogao da resim na drugi nacin.Mogao bih da stavim da samom sebi automatski saljem mejl i da onda rasporedim sve bitne infromacije o tome sta je kotisnik sam popunio prilikom kontakra.
// dakle da bude fora :
// from: soltect, to:soltech, subject: user.subject, message: poruka koju je klijent popunio

// Nakon toga mi ostaje da izbacim pozadinu sa slika programskih jezika i da vidim koji cu pravi dokument stavljati za about us deo


// imam da dodam MVP, Animacije, Odrzavanje projekata kao zasebne stanice
// poslednje bi mi bilo da sredim spline animacije da budu responsive

// samo zameni da se nalazi drugi git ikonica jer ova ima ova braon slova.Nadji sa crnim i ostalo ti je da promenis pozadinu
