/** @format */

import React, { useState, useEffect, useRef, Suspense } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import { MdOutlineMail } from "react-icons/md";
import "swiper/css/bundle";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ServicesSlider from "../components/ServicesSlider";

import { Canvas } from "@react-three/fiber";
import PersonalAvatarModel from "../../public/model/PersonalAvatarModel";
import Room from "../../public/model/Room";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { OrbitControls } from "@react-three/drei";
import { IoMdCloudDone } from "react-icons/io";

import emailjs from "emailjs-com";


gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [activeSection, setActiveSection] = useState("");
  const [formData, setFormData] = useState({});
  const [reviewMessage, setReviewMessage] = useState(false);
  const portfolioRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);
  const { hash } = useLocation();

  const modelContainer = useRef();
  const logoProjects = useRef();
  const mobileProjects = useRef();

  const roomRef = useRef();

  const [selectedImage, setSelectedImage] = useState(null);
  
  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };


  useEffect(() => {
    if (hash === "#portfolio" && portfolioRef.current) {
      portfolioRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (hash === "#services" && servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (hash === "#contact" && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  SwiperCore.use([Navigation]);
  const webImageContainer = [
    "images/webSample6.png",
    "images/webSample1.jpeg",
    "images/webSample3.png",
    "images/webSample2.jpeg",
    "images/webSample9.png",
    "images/webSample4.png",
    "images/webSample11.jpeg",
    "images/webSample5.jpeg",
    "images/webSample7.jpeg",
    "images/webSample8.jpeg",
    "images/webSample10.jpeg",
  ];
  const mobileImageContainer = [
    "images/mobileSample5.jpeg",
    "images/mobileSample3.png",
    "images/mobileSample7.png",
    "images/mobileSample1.jpeg",
    "images/mobileSample4.png",
    "images/mobileSample8.png",
    "images/mobileSample12.png",
    "images/mobileSample6.png",
    "images/mobileSample11.png",
  ];
  const logoImageContainer = [
    "images/logoSample1.jpeg",
    "images/logoSample2.jpeg",
    "images/logoSample8.png",
    "images/logoSample7.png",
    "images/logoSample10.png",
    "images/logoSample11.png",
    "images/logoSample12.png",
    "images/logoSample16.png",
    "images/logoSample4.png",
    "images/logoSample5.png",
    "images/logoSample15.png",
    "images/logoSample6.jpeg",
  ];
  const handleChange = (e) => {
    setFormData({
      ...formData, 
      [e.target.id]: e.target.value, 
    });
  };

  const handleSendForm = (e) => {
    e.preventDefault();
    setReviewMessage(true);
    setActiveSection("");

    const { username, email, subject, message } = formData;
    
    emailjs.send("service_lg9iqwy", "template_330t5pp", {
      from_name: username,
      from_email: email,
      subject: subject || "New Message from Contact Form",
      message: message,
    }, "8OcK59D0LNEiWdKwU")
    .then((response) => {
      console.log("Email sent successfully!", response.status, response.text);
    }, (error) => {
      console.error("Error sending email:", error);
    });
  };
  
  return (
    <div className="flex flex-col">
      <div style={{ background: "linear-gradient(to bottom, black, #595858)", paddingBottom:"10vh" }}>
        <NavBar />
        <div style={{ background: "transparent" }}>
          <h1
            style={{ paddingTop: "5vw", paddingBottom: "5vw" }}
            className="text-center text-white text-4xl sm:text-6xl md:text-5xl lg:text-6xl xl:text-7xl uppercase"
          >
            Your Vision <br /> Our Expertise
          </h1>
          <div
            className="flex flex-col lg:flex-row justify-between py-5"
            style={{ paddingInline: "5vw" }}
          >
            <div className='w-[95%] lg:w-[30vw]'>
              <p className="text-white pb-10 text-[3vw] sm:text-xl md:text-2xl lg:text-xl xl:text-3xl">
                Embark on journey where your ideas come to life.
                <br />
                <br />
                With WAREPIX we specialize in crafting bespoke websites, mobile
                applications, distinctive logos, and captivating animations.
                <br />
                <br />
                Let us transform your vison into digital masterpieces, tailored
                to elevate your brand's unique identity
              </p>
            </div>
            <div className='h-[70vw] self-center w-[90%] lg:w-[30%] lg:h-[30vw]'
              style={{ touchAction: 'none' }}
            >
              <Canvas>
                <ambientLight /> 
                <OrbitControls
                  enableZoom={false}
                  enablePan={false}
                  enableRotate={false}
                  // target={roomRef.current ? roomRef.current.position : [1, 0, 1]} // Postavljanje tačke rotacije na poziciju modela
                />
                <Suspense fallback={null}>
                  <Room ref={roomRef}/>
                </Suspense>
              </Canvas>
            </div>

            <div
              style={{ marginTop: "-5vw" }}
              className="text-center sm:text-end w-[100%] sm:w-[22vw] hidden lg:block"
            >
              <h1 style={{ color: "#595858", fontSize: "8vw", opacity: "0.4" }}>
                WE MAKE RIGHT
              </h1>
            </div>
          </div>
        </div>
        <div
          ref={servicesRef}
          className="self-center w-full flex flex-col"
          style={{ marginTop: "10vw", marginBottom: "30vh" }}
        >
          <h1 className="text-white text-center text-5xl md:text-6xl lg:text-5xl xl:text-6xl uppercase" style={{paddingBottom:'4vw'}}>
            Services We Provide
          </h1>
          <ServicesSlider/>
        </div>
      </div>
      <div
        style={{
          background: "linear-gradient(to bottom, #595858, black)",
          paddingLeft: "4vw",
          paddingRight: "4vw",
        }}
        className="flex flex-col sm:gap-[20vw]"
      >
        <div
          className="flex flex-col"
          ref={portfolioRef} 
          style={{
            paddingTop: "10vw",
            width: "100%",
            gap: "8vh",
            marginTop: "10vw",
            marginBottom: "10vh",
            position: "relative",
            zIndex: 10,
            fontSize:'3vw'
          }}
        >
          <h1 className="text-white text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl self-center uppercase">
            Web Projects
          </h1>
          <div style={{ width: "90vw" }}>
            <Swiper navigation>
              {window.innerWidth >= 640 &&
                webImageContainer
                  .reduce((accumulator, currentValue, index) => {
                    if (index % 3 === 0) {
                      accumulator.push(webImageContainer.slice(index, index + 3));
                    }
                    return accumulator;
                  }, [])
                  .map((imageGroup, index) => (
                    <SwiperSlide key={index}>
                      <div className="flex gap-[3vw]">
                        {imageGroup.map((image, imageIndex) => (
                          <div
                            key={imageIndex}
                            onClick={() => handleImageClick(image)}
                            style={{
                              background: `url(${image}) center no-repeat`,
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                              aspectRatio: "16 / 9",
                              width: "33.33%",
                              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.8)",
                            }}
                          ></div>
                        ))}
                      </div>
                    </SwiperSlide>
                  ))}
              {window.innerWidth < 640 &&
                webImageContainer.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div
                      onClick={() => handleImageClick(image)}
                      style={{
                        background: `url(${image}) center no-repeat`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        aspectRatio: "16 / 9",
                        width: "100%",
                        borderRadius: "3%",
                      }}
                    ></div>
                  </SwiperSlide>
                ))}
            </Swiper>

          </div>
        </div>
        <div
          ref={mobileProjects}
          className="self-center sm:self-start flex flex-col text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl"
          style={{ gap: "8vh", position: "relative", zIndex: 10, }}
        >
          <h1 className="text-white self-center uppercase">
            Mobile Projects
          </h1>
          <div style={{ margin: "0 auto" }} className="w-[70vw] sm:w-[60vw] mt-5">
            <Swiper navigation>
              {window.innerWidth >= 640 && mobileImageContainer
                .reduce((accumulator, currentValue, index) => {
                  if (index % 3 === 0) {
                    accumulator.push(
                      mobileImageContainer.slice(index, index + 3)
                    );
                  }
                  return accumulator;
                }, [])
                .map((imageGroup, index) => (
                  <SwiperSlide key={index}>
                    <div className="flex gap-[3vw]">
                      {imageGroup.map((image, imageIndex) => (
                        <div
                          key={imageIndex}
                          onClick={() => handleImageClick(image)}
                          style={{
                            background: `url(${image}) center no-repeat`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            aspectRatio: "2 / 3.5",
                            width: "33.33%",
                            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.8)",
                          }}
                        ></div>
                      ))}
                    </div>
                  </SwiperSlide>
                ))
              }
              {window.innerWidth < 640 &&
                mobileImageContainer.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div
                      onClick={() => handleImageClick(image)}
                      style={{
                        background: `url(${image}) center no-repeat`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        aspectRatio: "2 / 3.5",
                        width: "100%",
                        alignSelf:"center",
                        borderRadius: "3%",
                      }}
                    ></div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
        <div
          ref={logoProjects}
          className="self-center sm:self-end flex flex-col"
          style={{
            paddingTop: "10vh",
            paddingBottom: "20vh",
            gap: "4vh",
            position: "relative",
            zIndex: 10,
            fontSize:'3vw'
          }}
        >
          <h1 className="text-white self-center text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl uppercase">
            Logo Projects
          </h1>
          <div style={{ margin: "0 auto" }} className="w-[80vw] sm:w-[60vw] mt-5">
            <Swiper navigation>
              {window.innerWidth >= 640 && logoImageContainer
                .reduce((accumulator, currentValue, index) => {
                  if (index % 3 === 0) {
                    accumulator.push(
                      logoImageContainer.slice(index, index + 3)
                    );
                  }
                  return accumulator;
                }, [])
                .map((imageGroup, index) => (
                  <SwiperSlide key={index}>
                    <div className="flex gap-[3vw]">
                      {imageGroup.map((image, imageIndex) => (
                        <div
                          key={imageIndex}
                          onClick={() => handleImageClick(image)}
                          style={{
                            background: `url(${image}) center no-repeat`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            aspectRatio: "2 / 2",
                            width: "33.33%",
                            borderRadius: "50%",
                            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.8)",
                          }}
                          className=""
                        ></div>
                      ))}
                    </div>
                  </SwiperSlide>
                ))}
                {window.innerWidth < 640 &&
                logoImageContainer.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div
                      onClick={() => handleImageClick(image)}
                      style={{
                        background: `url(${image}) center no-repeat`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        aspectRatio: "2 / 2",
                        width: "100%",
                        alignSelf:"center",
                        borderRadius: "50%",
                      }}
                    ></div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
        {/* <div
          style={{ position: "sticky", zIndex: 0 }}
          className="h-[230vw] sm:h-[180vw] h-[150vw] -mt-[270vw] xs:-mt-[215vw] sm:-mt-[220vw]  md:-mt-[190vw] lg:-mt-[180vw] xl:-mt-[175vw]"
        >
          <Canvas
          ref={modelContainer}
          >
            {" "}
            <ambientLight />
            <spotLight intensity={0.3} position={[5, 10, 50]} />
            <directionalLight
              intensity={0.7}
              position={[10, 50, 30]}
              castShadow
            />
            <Suspense fallback={null}>
              <PersonalAvatarModel
                element={modelContainer}
                textAnimate={[portfolioRef, mobileProjects, logoProjects]}
                scale={2}
                position={[0, -1.5, 0]}
              />
            </Suspense>
          </Canvas>
        </div> */}
      </div>
      {selectedImage && (
              <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-80" onClick={() => setSelectedImage(null)}>
                <div className="flex items-center justify-center mx-auto p-6 rounded-lg" onClick={(e) => e.stopPropagation()}>
                  <img src={selectedImage} alt="Selected Image" style={{maxHeight: '80vh', maxWidth: '80%'}} className="self-center" />
                </div>
              </div>
            )}
      <div style={{ background: "linear-gradient(to bottom, black, #323131)" }}>
        <div
          style={{ paddingInline: "8vw", marginBottom: "20vh" }}
        >
          <h1
            style={{ color: "#5271FF"}}
            className="uppercase text-3xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-7xl my-[8vw]"
          >
            Contact Us
          </h1>
          <div ref={contactRef} className="flex justify-between items-center">
            <div style={{ width: "60%", color:'white' }} className='text-sm sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl'>
              <p>
                Contact us for any service you need, and let's explore the
                perfect solution for your requirements together.
              </p>
            </div>
            <div style={{ width: "20%" }}>
              <img
                className="shadow"
                src="/images/warepixLogo.png"
              />
            </div>
          </div>
          <div>
            <h1 style={{ width: "50%", color: "#5271FF", marginTop:'5vw', marginBottom:'8vw'}} className='text-lg sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-5xl'>
              Your ideal digital solution is just a conversation away.
            </h1>
            <span className="flex items-center text-sm sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl" style={{marginTop:'2vw', marginBottom:'1.5vw'}}>
              <MdOutlineMail color="white" size={60} />
              <p className="text-white">
                info@warepix.com
              </p>
            </span>
          </div>
          <button
            type="button"
            onClick={() => handleSectionClick("form")}
            style={{ marginTop: "5vh", padding:'1vw', marginBottom:'2vw' }}
            className="bg-pink-500 text-white rounded-lg text-md sm:text-3xl md:text-4xl lg:text-3xl xl:text-3xl"
          >
            Contact Us Directly
          </button>
          {activeSection === "form" && (
            <form
              onSubmit={handleSendForm}
              style={{ width: "80%", gap:'1vw'}}
              className="flex flex-col text-xs sm:text-xl  md:text-2xl lg:text-3xl xl:text-4xl"
            >
              <input
                className="p-3 rounded-lg"
                style={{ background: "#f0f8ff " }}
                type="text"
                placeholder="Full Name"
                id="username"
                onChange={handleChange}
              />
              <input
                className="p-3 rounded-lg"
                style={{ background: "#f0f8ff " }}
                type="email"
                placeholder="Email"
                id="email"
                onChange={handleChange}
              />
              <input
                className="p-3 rounded-lg"
                style={{ background: "#f0f8ff " }}
                type="text"
                placeholder="Type Of Service"
                id="subject"
                onChange={handleChange}
              />
              <textarea
                className="p-3 h-60 rounded-lg"
                style={{ background: "#f0f8ff " }}
                type="text"
                placeholder="Describe what you need"
                id="message"
                onChange={handleChange}
              />
              <button className="w-full bg-green-500 text-center rounded-lg text-xs sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl uppercase" style={{padding:'0.7vw'}}>
                Send Message
              </button>
            </form>
          )}
        </div>
        {reviewMessage && (
                    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-70 z-50">
                        <div className="rounded-lg flex flex-col text-white" style={{padding:'5vw',width:'70%', backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)),url(images/soltechLogo.png)`, backgroundSize: 'cover', backgroundPosition: 'center',}}>
                            <p className='self-center bg-transparent flex' style={{fontSize:'2vw', paddingBottom:'3vw'}} >Thank you, {formData.username} for your message</p>
                            <p style={{fontSize:'3vw'}} className='text-center'>Your message has been sent</p>
                            <p style={{fontSize:'3vw'}} className='text-center'>Successfully!</p>
                            <p style={{fontSize:'2vw', paddingTop:'2vw'}} className='text-center'>Our team is dedicated to providing prompt assistance and will review your request carefully. Expect to hear back from us shortly. If you have any urgent inquiries, please don't hesitate to contact us directly. We appreciate your interest in our services!</p>
                            <IoMdCloudDone size={'7vw'} color='#32cd32' className='self-center'/>
                            <button className="bg-cyan-400 text-white rounded-md" style={{fontSize:'2vw', marginTop:'5vw', padding:'1vw'}} onClick={() => setReviewMessage(false)}>Close</button>
                        </div>
                    </div>
                )}
      
        <Footer />
      </div>
    </div>
  );
}

