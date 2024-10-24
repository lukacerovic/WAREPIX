import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Experiance from '../components/Experiance';
import { webServices } from '../components/constants';
export default function Web() {
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
    <div className='flex flex-col px-[2vw]'style={{gap:'8vw', background:'linear-gradient(to bottom, black, #595858)'}}>
      <NavBar/>
      <div className='flex flex-col'>
            <div className='flex-col sm:flex-col md:flex-col lg:flex xl:flex 2xl:flex-row 3xl:flex lg:gap-0 items-center justify-center' style={{paddingInline:'2vw'}}>
                <div className='text-white flex flex-col gap-[2vw]' style={{width:'70vw'}}>
                    <h1 className='uppercase text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-6xl 2xl:text-7xl'>Gain Your <br/> Web Identity</h1>
                    <p className='text-xs w-[110%] sm:text-lg md:text-xl lg:text-lg lg:w-[100%] xl:text-2xl'>
                      Welcome to our realm of web services where innovation meets expertise. <br/><br/>
                      From conceptualizing sleek UI designs to crafting dynamic static websites, and refining existing platforms, we cover it all. Our commitment extends beyond just building websites, we strive to enhance your online presence and propel your digital success. 
                      Let's collaborate to bring your vision to life in the vast landscape of the web.
                    </p> 
                    <div className='flex gap-5 text-xl pb-[5vh]'>
                      <Link to='https://www.warepix.com/#contact'>
                        <button className='bg-cyan-500 p-3 rounded-lg text-md sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl'>Contact Us</button>
                      </Link>
                    </div>
                    
                </div>
                <div>
                  <img src="images/webMain2.png"/>
                </div>
            </div>
        </div>
        <Experiance experiences={webServices}/>
      <div className='flex flex-col items-center justify-center text-white pb-[2vw] mt-[10vw]' style={{background: 'transparent', paddingInline:'2vw'}}>
        <h1 style={{marginBottom:'10vw', fontSize:'6vw'}}>Samples Of Design</h1>
          <div className='flex ' style={{gap:'1vw'}}>
            <div className='flex flex-col ' style={{gap:'1vw'}}>
              <div className='flex ' style={{gap:'1vw'}}>
                <div>
                  <img src='images/webSample3.png' onClick={() => handleImageClick('images/webSample3.png')} style={{borderRadius:'1vw',width: '45vw' }} className='rounded-3xl'/>
                </div>
              <div className='flex flex-col ' style={{gap:'1vw'}}>
                <img src='images/webSample1.jpeg' onClick={() => handleImageClick('images/webSample1.jpeg')} style={{borderRadius:'1vw',width: '20vw' }} className='rounded-3xl'/>
                <img src='images/webSample2.jpeg' onClick={() => handleImageClick('images/webSample2.jpeg')} style={{borderRadius:'1vw',width: '20vw' }} className='rounded-3xl'/>
              </div>
            </div>
            <div className='flex ' style={{gap:'1vw'}}>
              <img src='images/webSample7.jpeg' onClick={() => handleImageClick('images/webSample7.jpeg')} style={{borderRadius:'1vw',width: '20.3vw' }} className='rounded-3xl'/>
              <img src='images/webSample8.jpeg' onClick={() => handleImageClick('images/webSample8.jpeg')} style={{borderRadius:'1vw',width: '20.3vw' }} className='rounded-3xl'/>
              <img src='images/webSample9.png' onClick={() => handleImageClick('images/webSample9.png')} style={{borderRadius:'1vw',width: '20.3vw' }} className='rounded-3xl'/>
            </div>
          </div>
          <div className='flex flex-col ' style={{gap:'1vw'}}>
            <img src='images/webSample6.png' onClick={() => handleImageClick('images/webSample6.png')} style={{width: '32vw', borderRadius:'1vw' }} className='rounded-3xl'/>
            <div className='flex ' style={{gap:'1vw'}}>
              <img src='images/webSample4.png' onClick={() => handleImageClick('images/webSample4.png')} style={{borderRadius:'1vw',width: '15vw' }} className='rounded-3xl'/>
              <img src='images/webSample5.jpeg' onClick={() => handleImageClick('images/webSample5.jpeg')} style={{borderRadius:'1vw',width: '15vw' }} className='rounded-3xl'/>
            </div>
            <div className='flex ' style={{gap:'1vw'}}>
              <img src='images/webSample11.jpeg' onClick={() => handleImageClick('images/webSample11.jpeg')} style={{borderRadius:'1vw',width: '15vw' }} className='rounded-3xl'/>
              <img src='images/webSample10.jpeg' onClick={() => handleImageClick('images/webSample10.jpeg')} style={{borderRadius:'1vw',width: '15vw' }} className='rounded-3xl'/>
            </div>
          </div>
          {selectedImage && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80" onClick={() => setSelectedImage(null)}>
              <div className="flex items-center justify-center max-w-4xl mx-auto p-6 rounded-lg" onClick={(e) => e.stopPropagation()}>
                <img src={selectedImage} alt="Selected Image" className="w-[80%] self-center" />
              </div>
            </div>
          )}
        </div>
      </div>
      <Link className='self-center pt-20 pb-10' to='https://www.warepix.com/#contact'>
          <button className='bg-cyan-500 p-3 text-lg sm:text-xl md:text-2xl lg:text-3xl rounded-lg'>Contact Us</button>
        </Link>
      <Footer/>
    </div>
    
  )
}
