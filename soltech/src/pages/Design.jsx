import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Experiance from '../components/Experiance';
import { designServices } from '../components/constants';
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
                    <h1 className='uppercase text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-7xl'>Design Your Experience <br/>Define Your Brand</h1>
                    <p className='text-xs w-[110%] sm:text-lg md:text-xl lg:text-lg lg:w-[100%] xl:text-2xl'>
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
      <div className='flex flex-col items-center justify-center text-white pb-10' style={{background: 'transparent'}}>
        <h1 style={{marginBottom:'5vw', marginTop:'20vw', fontSize:'5vw'}}>Samples Of Design</h1>
          <div className='flex' style={{gap:'1vw'}}>
            <div className='flex flex-col' style={{gap:'1vw'}}>
                <img src='images/logoSample1.jpeg' onClick={() => handleImageClick('images/logoSample1.jpeg')} style={{border:'none', borderRadius:'50%',width: '15vw' }} className='rounded-3xl'/>
                <img src='images/logoSample12.png' onClick={() => handleImageClick('images/logoSample12.png')} style={{border:'none', borderRadius:'50%',width: '15vw' }} className='rounded-3xl'/>
                
            </div>
            <div className='flex' style={{gap:'1vw'}}>
              <img src='images/logoSample10.png' onClick={() => handleImageClick('images/logoSample10.png')} style={{border:'none', borderRadius:'50%',width: '33vw' }} className='rounded-3xl'/>
              <div className='flex flex-col' style={{gap:'1vw'}}>
                  <div className='flex' style={{gap:'1vw'}}>
                    <img src='images/logoSample7.png' onClick={() => handleImageClick('images/logoSample7.png')} style={{border:'none', borderRadius:'50%',width: '11vw' }} className='rounded-3xl'/>
                    <img src='images/logoSample4.png' onClick={() => handleImageClick('images/logoSample4.png')} style={{border:'none', borderRadius:'50%',width: '11vw' }} className='rounded-3xl'/>
                    <img src="images/logoSample16.png" onClick={() => handleImageClick('images/logoSample16.png')} style={{border:'none', borderRadius:'50%',width: '11vw' }} className='rounded-3xl'/>
                  </div>
                  <div className='flex' style={{gap:'1vw'}}>
                    <img src='images/logoSample8.png' onClick={() => handleImageClick('images/logoSample8.png')} style={{border:'none', borderRadius:'50%',width: '11vw' }} className='rounded-3xl'/>
                    <img src='images/logoSample6.jpeg' onClick={() => handleImageClick('images/logoSample6.jpeg')} style={{border:'none', borderRadius:'50%',width: '11vw' }} className='rounded-3xl'/>
                    <img src='images/logoSample13.png' onClick={() => handleImageClick('images/logoSample13.png')} style={{border:'none', borderRadius:'50%',width: '11vw' }} className='rounded-3xl'/>
                  </div>
                  <div className='flex' style={{gap:'1vw'}}>
                    <img src='images/logoSample14.png' onClick={() => handleImageClick('images/logoSample14.png')} style={{border:'none', borderRadius:'50%',width: '11vw' }} className='rounded-3xl'/>
                    <img src='images/logoSample11.png' onClick={() => handleImageClick('images/logoSample11.png')} style={{border:'none', borderRadius:'50%',width: '11vw' }} className='rounded-3xl'/>
                    <img src='images/logoSample5.png' onClick={() => handleImageClick('images/logoSample5.png')} style={{border:'none', borderRadius:'50%',width: '11vw' }} className='rounded-3xl'/>
                  </div>
              </div>  
            </div>  
            {selectedImage && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80" onClick={() => setSelectedImage(null)}>
                <div className="flex items-center justify-center max-w-4xl mx-auto p-6 rounded-lg" onClick={(e) => e.stopPropagation()}>
                  <img src={selectedImage} alt="Selected Image" className="w-[80%] self-center rounded-full shadow-2xl" />
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
