import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import { IoPeople, IoSearch } from "react-icons/io5";
import { FaPeopleGroup, FaMoneyBillTrendUp, FaTeamspeak } from "react-icons/fa6";
import { GiProgression } from "react-icons/gi";
import { AiOutlineFieldTime } from "react-icons/ai";
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { FaPython, FaReact } from "react-icons/fa";
import { IoIosSend, IoMdCloudDone, IoMdStar } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress, SiFlask,  } from "react-icons/si";
import { DiDjango, } from "react-icons/di";
import { GrSwift } from "react-icons/gr";

export default function AboutUs() {
    const [reviews, setReviewsVisible] = useState(false);
    const [formData, setFormData] = useState({});
    const [reviewMessage, setReviewMessage] = useState(false);

    const handleChange = (e) => {
        setFormData({
          ...formData, 
          [e.target.id]: e.target.value,
        });
      };

    const handleSendReview = async (e) => {
        e.preventDefault();
        setReviewMessage(true);
        setReviewsVisible(false);
        
      };
  return (
    <div className='flex flex-col' style={{background:'#181818'}}>
        <div className='flex flex-col h-[80vw] sm:h-[55vw]' style={{ background: 'url(/images/aboutUsBg.jpeg) center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom',}}>
            <NavBar/>
            <h1 className='text-center text-2xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-8xl' style={{ background: 'linear-gradient(to left, #5170FF, cyan)',WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>WAREPIX Solutions</h1>
            <p className='text-white self-center pt-[2vw] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl'>Express Yourself Differently</p>
            <div className='self-start flex pt-[2vw] lg:pt-10 xl:pt-20'>
                <div className='flex flex-col' style={{gap:'2vw'}}>
                    <div className='rounded-3xl flex flex-col items-center justify-center relative left-[3vw] sm:left-[15vw]' style={{padding:'0.7vw',background:'linear-gradient(to left, #5170FF, #FF66C4)', borderRadius:'1vw'}}>
                        <div className='flex items-center' style={{gap:'1vw'}}>
                            <IoPeople className='text-[4vw] md:text-[2vw]' color='white'/>
                            <p className='text-white rounded-3xl text-[2.5vw] md:text-[1.5vw] px-3'>Happy Clients</p>
                        </div>
                        <div>
                            <h1 className='text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl rounded-3xl text-center text-cyan-300'>500+</h1>
                        </div>  
                    </div>
                    <div className='rounded-3xl flex flex-col items-center justify-center relative left-[12vw] sm:left-[22vw]' style={{padding:'0.7vw', background:'linear-gradient(to left, #5170FF, #FF66C4)', borderRadius:'1vw'}}>
                        <div className='flex items-center' style={{gap:'1vw'}}>
                            <GiProgression className='text-[4vw] md:text-[2vw]' color='white'/>
                            <p className='text-white rounded-3xl text-[2.5vw] md:text-[1.5vw] px-3'>Projects Created</p>
                        </div>
                        <div>
                           <h1 className='text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl rounded-3xl text-center text-cyan-300'>850+</h1> 
                        </div>
                        
                    </div>
                    <div className='rounded-3xl flex flex-col items-center justify-center relative left-[19vw] sm:left-[29vw] py-[1vw]' style={{ background:'linear-gradient(to left, #5170FF, #FF66C4)', borderRadius:'1vw'}}>
                        <div className='flex items-center' style={{gap:'1vw'}}>
                            <FaMoneyBillTrendUp className='text-[4vw] md:text-[2vw]' color='white'/>
                            <p className='text-white rounded-3xl text-[2.5vw] md:text-[1.5vw] px-3'>Flexible Price</p>
                        </div>
                        {/* <h1 className='text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl rounded-3xl text-center text-cyan-300'>Pojasnjenje</h1> */}
                    </div>
                </div>
                <div className='flex flex-col' style={{gap:'2vw'}}>
                    <div className='rounded-3xl flex flex-col items-center justify-center relative left-[38vw] sm:left-[50vw]' style={{padding:'0.7vw', background:'linear-gradient(to left, #5170FF, #FF66C4)', borderRadius:'1vw'}}>
                        <div className='flex items-center' style={{gap:'1vw'}}>
                            <FaPeopleGroup className='text-[4vw] md:text-[2vw]' color='white'/>
                            <p className='text-white rounded-3xl text-[2.5vw] md:text-[1.5vw] px-3'>Members of a team</p>
                        </div>
                        <h1 className='text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl rounded-3xl text-center text-cyan-300'>53</h1>
                    </div>
                    <div className='rounded-3xl flex flex-col items-center justify-center relative left-[31vw] sm:left-[45vw]' style={{padding:'0.7vw', background:'linear-gradient(to left, #5170FF, #FF66C4)', borderRadius:'1vw'}}>
                        <div className='flex items-center' style={{gap:'1vw'}}>
                            <AiOutlineFieldTime className='text-[4vw] md:text-[2vw]' color='white'/>
                            <p className='text-white rounded-3xl text-[2.5vw] md:text-[1.5vw] px-3'>Working Hours</p>
                        </div>
                        <h1 className='text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl rounded-3xl text-center text-cyan-300'>24/7</h1>
                    </div>
                    <div className='rounded-3xl flex flex-col items-center justify-center relative left-[24vw] sm:left-[40vw] py-[1vw]' style={{ background:'linear-gradient(to left, #5170FF, #FF66C4)', borderRadius:'1vw'}}>
                        <div className='flex items-center' style={{gap:'1vw'}}>
                            <FaTeamspeak className='text-[4vw] md:text-[2vw]' color='white'/>
                            <p className='text-white rounded-3xl text-[2.5vw] md:text-[1.5vw] px-3'>Constant Dialog</p>
                        </div>
                        {/* <h1 className='text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl rounded-3xl text-center text-cyan-300 text-2xl'>Pojasnjenje</h1> */}
                    </div>
                </div>
            </div>
        </div>
        <div style={{background:'linear-gradient(#0B042E, #a9a9a9)', paddingInline:'2vw'}} className='flex py-[5vw] md:py-4 lg:py-6 xl:py-8 mb-20 justify-between'>
            <FaPython color='#4682b4' size={'3.5vw'}/>
            <IoLogoJavascript color='yellow' size={'3.5vw'}/> 
            <GrSwift color='#ff8c00 ' size={'3.5vw'}/>
            <DiDjango size={'3.5vw'}/>
            <img style={{width:'3vw'}}src='icons/mongoLogo.png'/>
            <img style={{width:'4vw'}}src='icons/asp.png'/>
            <img style={{width:'3vw'}}src='icons/cSharp.png'/>
            <FaReact color='#00b7eb' size={'3.5vw'}/> 
            <img style={{width:'3vw'}}src='icons/angularLogo.png'/>
            <img style={{width:'7vw'}}src='icons/node.png'/>
            <img style={{width:'3vw'}}src='icons/kotlinLogo.png'/>
            <img style={{width:'3vw'}}src='icons/c++.png'/>
            <img style={{width:'3vw'}}src='icons/flutterLogo.png'/>
            <img style={{width:'3vw'}}src='icons/tailwindLogo.png'/>
            <SiExpress size={'3.5vw'}/>
            <img style={{width:'3vw'}}src='icons/Vue.js.png'/>
            <img style={{width:'4vw'}}src='icons/php.png'/>
            <SiFlask size={'3.5vw'}/>
        </div>
        <div className='w-[95%] sm:w-[80%]  self-center text-white mb-[3vw]'>
            <p className='text-center text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl'>
            Welcome to WAREPIX, your premier destination for comprehensive digital solutions. At WAREPIX, we specialize in WEB, Mobile, Logo, and Animation development services tailored to meet the diverse needs of our clients.
            </p>
        </div>
        <div className='flex pt-10 px-10 self-center items-center gap-10 mb-20'>
            {/* <div>
                <img src='/companyInfo/resenje1.png' style={{width:'17vw'}}/>
            </div> */}
            <div className='text-white w-[98%] md:w-[60vw]' style={{ borderLeftWidth:'1px', paddingInline:'2vw'}}>
                <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl'>ABOUT US</h1>
                <p className='text-xs sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl'>
                At WAREPIX, our team comprises seasoned professionals with extensive backgrounds in web and mobile development. 
<br/><br/>                
Our members have honed their skills at tech titans such as Google, Microsoft, Facebook, Netflix and other industry leaders.With over 8 years of collective experience in web and mobile development, our experts bring a wealth of knowledge and proficiency to every project they undertake.
<br/><br/>
Our collective journey is fueled by a passion for crafting bespoke solutions that redefine industry standards. From designing captivating logos to developing immersive animations and spearheading MVP projects, WAREPIX prides itself on pushing the boundaries of digital innovation.
<br/><br/><br/>
We believe in collaboration, transparency, and above all, client satisfaction. Our mission is to transform your vision into reality, leveraging the latest technologies and best practices to create digital experiences that captivate and inspire.
<br/><br/>
When you partner with WAREPIX, you're not just investing in a service – you're joining a community of dedicated professionals committed to your success. Let us be your guide as you navigate the ever-evolving landscape of digital transformation.

Experience the WAREPIX difference today, and unlock the full potential of your digital future.
                </p>
            </div>
        </div>
        <div className='flex flex-col sm:flex-row items-center justify-center self-center' style={{marginTop:'7vw', marginBottom:'3vw'}}>
            <img src='images/1.png'  className='w-[80%] sm:w-[33%]'/>
            <img src='images/3.png' className='w-[80%] sm:w-[33%]'/>
            <img src='images/2.png' className='w-[80%] sm:w-[33%]'/>
        </div>
    
        <button className='self-center text-white rounded-lg text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl' type='button' onClick={() => setReviewsVisible(true)} style={{ background:'#3B3A3A', padding:'0.8vw', marginBottom:'5vw'}}>
            See All Reviews
        </button>
        {reviews && (
            <div className='flex flex-col self-center items-center, justify-center rounded-lg' style={{background:'#3B3A3A', padding:'1vw', width:'80vw', gap:'3vw'}}>
                <div className='flex flex-col items-center overflow-y-auto max-h-[45vw]' style={{gap:'2vw', padding:'1vw'}}>
                    <div className='flex bg-slate-400 shadow-2xl rounded-lg items-center justify-between w-[98%] sm:w-[80%]' style={{padding:'1vw',color:'black', gap:'2vw'}}>
                        <span style={{borderRadius:'50%',color:'black', background:'#7ED957'}} className='flex items-center justify-center text-sm sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl w-[5vw] h-[5vw] sm:w-[3vw] sm:h-[3vw]'>R</span>
                        <p style={{width:'70%'}} className='text-[2vw] sm:text-[1.5vw] md:text-[1vw]'>I am absolutely blown away by the mobile development service! They transformed my vision into a stunning mobile app with precision and finesse. From user experience to functionality, they nailed every aspect. I couldn't be happier with the result! Highly recommend their exceptional mobile development service!</p>
                        <div className='flex items-center'>
                            <p className='text-[2.5vw] sm:text-[2vw]'>5 /</p>
                            <IoMdStar color='#FFDE59' size={'3vw'}/>
                        </div>
                    </div>
                    <div className='flex bg-slate-400 shadow-2xl rounded-lg items-center justify-between w-[98%] sm:w-[80%]' style={{padding:'1vw',color:'black', gap:'2vw'}}>
                        <span style={{borderRadius:'50%',color:'black', background:'#62CBFF'}} className='flex items-center justify-center text-sm sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl w-[5vw] h-[5vw] sm:w-[3vw] sm:h-[3vw]'>M</span>
                        <p style={{width:'70%'}} className='text-[2vw] sm:text-[1.5vw] md:text-[1vw]'>Our collaboration with WAREPIX on web app development was nothing short of exceptional. From the outset, their team displayed a deep understanding of our project requirements and user needs. They guided us through every step of the development process, offering valuable insights and suggestions along the way. The result? A beautifully designed, feature-rich app that has received rave reviews from our users. WAREPIX's professionalism, attention to detail, and commitment to client satisfaction make them a trusted partner for all our future projects.</p>
                        <div className='flex items-center'>
                            <p className='text-[2.5vw] sm:text-[2vw]'>5 /</p>
                            <IoMdStar color='#FFDE59' size={'3vw'}/>
                        </div>
                    </div>
                    <div className='flex bg-slate-400 shadow-2xl rounded-lg items-center justify-between w-[98%] sm:w-[80%]' style={{padding:'1vw',color:'black', gap:'2vw'}}>
                        <span style={{borderRadius:'50%',color:'black', background:'#EF962D'}} className='flex items-center justify-center text-sm sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl w-[5vw] h-[5vw] sm:w-[3vw] sm:h-[3vw]'>O</span>
                        <p style={{width:'70%'}} className='text-[2vw] sm:text-[1.5vw] md:text-[1vw]'>The logo WAREPIX created for us is simply perfect. It captures the essence of our brand beautifully. The team understood our vision and translated it into a memorable logo that sets us apart. It's clean, elegant, and timeless. Couldn't be happier with the result</p>
                        <div className='flex items-center'>
                            <p className='text-[2.5vw] sm:text-[2vw]'>4 /</p>
                            <IoMdStar color='#FFDE59' size={'3vw'}/>
                        </div>
                    </div>
                    <div className='flex bg-slate-400 shadow-2xl rounded-lg items-center justify-between w-[98%] sm:w-[80%]' style={{padding:'1vw',color:'black', gap:'2vw'}}>
                        <span style={{borderRadius:'50%',color:'black', background:'#B20050'}} className='flex items-center justify-center text-sm sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl w-[5vw] h-[5vw] sm:w-[3vw] sm:h-[3vw]'>D</span>
                        <p style={{width:'70%'}} className='text-[2vw] sm:text-[1.5vw] md:text-[1vw]'>Great experience working with WAREPIX on our website. They were responsive and professional throughout the process.</p>
                        <div className='flex items-center'>
                            <p className='text-[2.5vw] sm:text-[2vw]'>4 /</p>
                            <IoMdStar color='#FFDE59' size={'3vw'}/>
                        </div>
                    </div>
                    <div className='flex bg-slate-400 shadow-2xl rounded-lg items-center justify-between w-[98%] sm:w-[80%]' style={{padding:'1vw',color:'black', gap:'2vw'}}>
                        <span style={{borderRadius:'50%',color:'black', background:'#FF5757'}} className='flex items-center justify-center text-sm sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl w-[5vw] h-[5vw] sm:w-[3vw] sm:h-[3vw]'>K</span>
                        <p style={{width:'70%'}} className='text-[2vw] sm:text-[1.5vw] md:text-[1vw]'>Working with WAREPIX for our logo and animations was a breeze. Their professionalism and expertise made the entire process seamless. The end result was beyond what we envisioned. I wouldn't hesitate to recommend WAREPIX to anyone looking for top-notch design services.</p>
                        <div className='flex items-center'>
                            <p className='text-[2.5vw] sm:text-[2vw]'>5 /</p>
                            <IoMdStar color='#FFDE59' size={'3vw'}/>
                        </div>
                    </div>
                    <div className='flex bg-slate-400 shadow-2xl rounded-lg items-center justify-between w-[98%] sm:w-[80%]' style={{padding:'1vw',color:'black', gap:'2vw'}}>
                        <span style={{borderRadius:'50%',color:'black', background:'blue'}} className='flex items-center justify-center text-sm sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl w-[5vw] h-[5vw] sm:w-[3vw] sm:h-[3vw]'>J</span>
                        <p style={{width:'70%'}} className='text-[2vw] sm:text-[1.5vw] md:text-[1vw]'>WAREPIX truly understands the importance of branding and user experience. Their WEB Mobile Logo and Animation Build service transformed our product into a visually stunning platform. Their team's dedication to quality and innovation is commendable. We're thrilled with the results!</p>
                        <div className='flex items-center'>
                            <p className='text-[2.5vw] sm:text-[2vw]'>5 /</p>
                            <IoMdStar color='#FFDE59' size={'3vw'}/>
                        </div>
                    </div>
                    <div className='flex bg-slate-400 shadow-2xl rounded-lg items-center justify-between w-[98%] sm:w-[80%]' style={{padding:'1vw',color:'black', gap:'2vw'}}>
                        <span style={{borderRadius:'50%',color:'black', background:'#7ED957'}} className='flex items-center justify-center text-sm sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl w-[5vw] h-[5vw] sm:w-[3vw] sm:h-[3vw]'>V</span>
                        <p style={{width:'70%'}} className='text-[2vw] sm:text-[1.5vw] md:text-[1vw]'>Animation service is top-notch. They brought our brand to life with captivating animations that add a dynamic element to our marketing campaigns. From concept to execution, the process was smooth and the results exceeded our expectations. The animations truly elevate our brand presence.</p>
                        <div className='flex items-center'>
                            <p className='text-[2.5vw] sm:text-[2vw]'>4 /</p>
                            <IoMdStar color='#FFDE59' size={'3vw'}/>
                        </div>
                    </div>
                    <div className='flex bg-slate-400 shadow-2xl rounded-lg items-center justify-between w-[98%] sm:w-[80%]' style={{padding:'1vw',color:'black', gap:'2vw'}}>
                        <span style={{borderRadius:'50%',color:'black', background:'#FD2AAF'}} className='flex items-center justify-center text-sm sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl w-[5vw] h-[5vw] sm:w-[3vw] sm:h-[3vw]'>W</span>
                        <p style={{width:'70%'}} className='text-[2vw] sm:text-[1.5vw] md:text-[1vw]'>The animation services provided by WAREPIX added a whole new level of engagement to our website. Love the creativity!</p>
                        <div className='flex items-center'>
                            <p className='text-[2.5vw] sm:text-[2vw]'>5 /</p>
                            <IoMdStar color='#FFDE59' size={'3vw'}/>
                        </div>
                    </div>
                    <div className='flex bg-slate-400 shadow-2xl rounded-lg items-center justify-between w-[98%] sm:w-[80%]' style={{padding:'1vw',color:'black', gap:'2vw'}}>
                        <span style={{borderRadius:'50%',color:'black', background:'#0097B2'}} className='flex items-center justify-center text-sm sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl w-[5vw] h-[5vw] sm:w-[3vw] sm:h-[3vw]'>Z</span>
                        <p style={{width:'70%'}} className='text-[2vw] sm:text-[1.5vw] md:text-[1vw]'>Overall, I'm quite satisfied with the web development service provided by WAREPIX. The website looks great and functions well. However, there were a few delays in the delivery process which affected our launch timeline. Nonetheless, the team was responsive to our concerns and addressed them promptly.</p>
                        <div className='flex items-center'>
                            <p className='text-[2.5vw] sm:text-[2vw]'>3 /</p>
                            <IoMdStar color='#FFDE59' size={'3vw'}/>
                        </div>
                    </div>
                    <div className='flex bg-slate-400 shadow-2xl rounded-lg items-center justify-between w-[98%] sm:w-[80%]' style={{padding:'1vw',color:'black', gap:'2vw'}}>
                        <span style={{borderRadius:'50%',color:'black', background:'#8E00B2'}} className='flex items-center justify-center text-sm sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl w-[5vw] h-[5vw] sm:w-[3vw] sm:h-[3vw]'>T</span>
                        <p style={{width:'70%'}} className='text-[2vw] sm:text-[1.5vw] md:text-[1vw]'>The web service was exceptional. They created a user-friendly and visually appealing website that perfectly represents our brand. Their attention to detail and prompt communication made the entire process smooth and enjoyable. Highly recommend!</p>
                        <div className='flex items-center'>
                            <p className='text-[2.5vw] sm:text-[2vw]'>5 /</p>
                            <IoMdStar color='#FFDE59' size={'3vw'}/>
                        </div>
                    </div>
                    <div className='flex bg-slate-400 shadow-2xl rounded-lg items-center justify-between w-[98%] sm:w-[80%]' style={{padding:'1vw',color:'black', gap:'2vw'}}>
                        <span style={{borderRadius:'50%',color:'black', background:'#AEB200'}} className='flex items-center justify-center text-sm sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl w-[5vw] h-[5vw] sm:w-[3vw] sm:h-[3vw]'>R</span>
                        <p style={{width:'70%'}} className='text-[2vw] sm:text-[1.5vw] md:text-[1vw]'>We engaged WAREPIX for logo design services and were generally pleased with the results. The initial concepts presented were creative and captured our brand essence well. However, we felt that the revision process could have been more collaborative, and the final files were delivered later than expected. Nonetheless, the final logo met our expectations and it's fantastic!</p>
                        <div className='flex items-center'>
                            <p className='text-[2.5vw] sm:text-[2vw]'>4 /</p>
                            <IoMdStar color='#FFDE59' size={'3vw'}/>
                        </div>
                    </div>
                    <div className='flex bg-slate-400 shadow-2xl rounded-lg items-center justify-between w-[98%] sm:w-[80%]' style={{padding:'1vw',color:'black', gap:'2vw'}}>
                        <span style={{borderRadius:'50%',color:'black', background:'#2AF6FD'}} className='flex items-center justify-center text-sm sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl w-[5vw] h-[5vw] sm:w-[3vw] sm:h-[3vw]'>P</span>
                        <p style={{width:'70%'}} className='text-[2vw] sm:text-[1.5vw] md:text-[1vw]'>Absolutely thrilled with the logo design service from WAREPIX! They nailed it! From concept to execution, they blew me away with their creativity and attention to detail. Highly recommend their outstanding logo design service!</p>
                        <div className='flex items-center'>
                            <p className='text-[2.5vw] sm:text-[2vw]'>5 /</p>
                            <IoMdStar color='#FFDE59' size={'3vw'}/>
                        </div>
                    </div>
                    <div className='flex bg-slate-400 shadow-2xl rounded-lg items-center justify-between w-[98%] sm:w-[80%]' style={{padding:'1vw',color:'black', gap:'2vw'}}>
                        <span style={{borderRadius:'50%',color:'black', background:'#B20050'}} className='flex items-center justify-center text-sm sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl w-[5vw] h-[5vw] sm:w-[3vw] sm:h-[3vw]'>F</span>
                        <p style={{width:'70%'}} className='text-[2vw] sm:text-[1.5vw] md:text-[1vw]'>Wow! WAREPIX totally nailed it with our new logo design. Their creativity knows no bounds. Highly recommend!</p>
                        <div className='flex items-center'>
                            <p className='text-[2.5vw] sm:text-[2vw]'>5 /</p>
                            <IoMdStar color='#FFDE59' size={'3vw'}/>
                        </div>
                    </div>
                    <div className='flex bg-slate-400 shadow-2xl rounded-lg items-center justify-between w-[98%] sm:w-[80%]' style={{padding:'1vw',color:'black', gap:'2vw'}}>
                        <span style={{borderRadius:'50%',color:'black', background:'#42FF77'}} className='flex items-center justify-center text-sm sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl w-[5vw] h-[5vw] sm:w-[3vw] sm:h-[3vw]'>V</span>
                        <p style={{width:'70%'}} className='text-[2vw] sm:text-[1.5vw] md:text-[1vw]'>WAREPIX is my go-to for web development. They've consistently delivered exceptional results. Kudos to the team!</p>
                        <div className='flex items-center'>
                            <p className='text-[2.5vw] sm:text-[2vw]'>5 /</p>
                            <IoMdStar color='#FFDE59' size={'3vw'}/>
                        </div>
                    </div>
                    <div className='flex bg-slate-400 shadow-2xl rounded-lg items-center justify-between w-[98%] sm:w-[80%]' style={{padding:'1vw',color:'black', gap:'2vw'}}>
                        <span style={{borderRadius:'50%',color:'black', background:'#EF962D'}} className='flex items-center justify-center text-sm sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl w-[5vw] h-[5vw] sm:w-[3vw] sm:h-[3vw]'>J</span>
                        <p style={{width:'70%'}} className='text-[2vw] sm:text-[1.5vw] md:text-[1vw]'>Although the process of mobile app dev took longer than expected due to initial uncertainties about our requirements, WAREPIX remained dedicated to finding the right solution. The final outcome met our expectations, but the extended timeline was challenging.</p>
                        <div className='flex items-center'>
                            <p className='text-[2.5vw] sm:text-[2vw]'>3 /</p>
                            <IoMdStar color='#FFDE59' size={'3vw'}/>
                        </div>
                    </div>
                    <div className='flex bg-slate-400 shadow-2xl rounded-lg items-center justify-between w-[98%] sm:w-[80%]' style={{padding:'1vw',color:'black', gap:'2vw'}}>
                        <span style={{borderRadius:'50%',color:'black', background:'#FF5757'}} className='flex items-center justify-center text-sm sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl w-[5vw] h-[5vw] sm:w-[3vw] sm:h-[3vw]'>K</span>
                        <p style={{width:'70%'}} className='text-[2vw] sm:text-[1.5vw] md:text-[1vw]'>WAREPIX handled our web, mobile, and logo design projects with utmost professionalism. They brought our vision to life and provided excellent support throughout. Highly recommend their comprehensive services.</p>
                        <div className='flex items-center'>
                            <p className='text-[2.5vw] sm:text-[2vw]'>5 /</p>
                            <IoMdStar color='#FFDE59' size={'3vw'}/>
                        </div>
                    </div>
                    <div className='flex bg-slate-400 shadow-2xl rounded-lg items-center justify-between w-[98%] sm:w-[80%]' style={{padding:'1vw',color:'black', gap:'2vw'}}>
                        <span style={{borderRadius:'50%',color:'black', background:'#FD8F2A'}} className='flex items-center justify-center text-sm sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl w-[5vw] h-[5vw] sm:w-[3vw] sm:h-[3vw]'>S</span>
                        <p style={{width:'70%'}} className='text-[2vw] sm:text-[1.5vw] md:text-[1vw]'>I am thoroughly impressed with the overall experience provided by WAREPIX. Their commitment to quality and customer satisfaction is evident in every aspect of their service. Thank you for exceeding my expectations!</p>
                        <div className='flex items-center'>
                            <p className='text-[2.5vw] sm:text-[2vw]'>5 /</p>
                            <IoMdStar color='#FFDE59' size={'3vw'}/>
                        </div>
                    </div>
                    <div className='flex bg-slate-400 shadow-2xl rounded-lg items-center justify-between w-[98%] sm:w-[80%]' style={{padding:'1vw',color:'black', gap:'2vw'}}>
                        <span style={{borderRadius:'50%',color:'black', background:'#FD2A2A'}} className='flex items-center justify-center text-sm sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl w-[5vw] h-[5vw] sm:w-[3vw] sm:h-[3vw]'>J</span>
                        <p style={{width:'70%'}} className='text-[2vw] sm:text-[1.5vw] md:text-[1vw]'>There were a few bumps along the way during our animation project, but WAREPIX handled them professionally. The final outcome was satisfactory.</p>
                        <div className='flex items-center'>
                            <p className='text-[2.5vw] sm:text-[2vw]'>4 /</p>
                            <IoMdStar color='#FFDE59' size={'3vw'}/>
                        </div>
                    </div>
                    <div className='flex bg-slate-400 shadow-2xl rounded-lg items-center justify-between w-[98%] sm:w-[80%]' style={{padding:'1vw',color:'black', gap:'2vw'}}>
                        <span style={{borderRadius:'50%',color:'black', background:'#2AF6FD'}} className='flex items-center justify-center text-sm sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl w-[5vw] h-[5vw] sm:w-[3vw] sm:h-[3vw]'>L</span>
                        <p style={{width:'70%'}} className='text-[2vw] sm:text-[1.5vw] md:text-[1vw]'>Our mobile app developed by WAREPIX is sleek and intuitive. They understood our vision perfectly</p>
                        <div className='flex items-center'>
                            <p className='text-[2.5vw] sm:text-[2vw]'>5 /</p>
                            <IoMdStar color='#FFDE59' size={'3vw'}/>
                        </div>
                    </div>
                    <div className='flex bg-slate-400 shadow-2xl rounded-lg items-center justify-between w-[98%] sm:w-[80%]' style={{padding:'1vw',color:'black', gap:'2vw'}}>
                        <span style={{borderRadius:'50%',color:'black', background:'#F9FD2A'}} className='flex items-center justify-center text-sm sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl w-[5vw] h-[5vw] sm:w-[3vw] sm:h-[3vw]'>Y</span>
                        <p style={{width:'70%'}} className='text-[2vw] sm:text-[1.5vw] md:text-[1vw]'>team did an excellent job revamping our website. They were responsive to our needs and delivered on time. Impressed!</p>
                        <div className='flex items-center'>
                            <p className='text-[2.5vw] sm:text-[2vw]'>5 /</p>
                            <IoMdStar color='#FFDE59' size={'3vw'}/>
                        </div>
                    </div>
                    <div className='flex bg-slate-400 shadow-2xl rounded-lg items-center justify-between w-[98%] sm:w-[80%]' style={{padding:'1vw',color:'black', gap:'2vw'}}>
                        <span style={{borderRadius:'50%',color:'black', background:'#2AFD45'}} className='flex items-center justify-center text-sm sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl w-[5vw] h-[5vw] sm:w-[3vw] sm:h-[3vw]'>U</span>
                        <p style={{width:'70%'}} className='text-[2vw] sm:text-[1.5vw] md:text-[1vw]'>Experience with WAREPIX for logo design was fantastic! They captured our brand identity perfectly. Can't thank them enough for their creativity!</p>
                        <div className='flex items-center'>
                            <p className='text-[2.5vw] sm:text-[2vw]'>5 /</p>
                            <IoMdStar color='#FFDE59' size={'3vw'}/>
                        </div>
                    </div>
                    <div className='flex bg-slate-400 shadow-2xl rounded-lg items-center justify-between w-[98%] sm:w-[80%]' style={{padding:'1vw',color:'black', gap:'2vw'}}>
                        <span style={{borderRadius:'50%',color:'black', background:'#A02AFD'}} className='flex items-center justify-center text-sm sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl w-[5vw] h-[5vw] sm:w-[3vw] sm:h-[3vw]'>A</span>
                        <p style={{width:'70%'}} className='text-[2vw] sm:text-[1.5vw] md:text-[1vw]'>WAREPIX went above and beyond with our web development project! Their attention to detail and dedication to our vision were unmatched. Highly recommended.</p>
                        <div className='flex items-center'>
                            <p className='text-[2.5vw] sm:text-[2vw]'>5 /</p>
                            <IoMdStar color='#FFDE59' size={'3vw'}/>
                        </div>
                    </div>
                    <div className='flex bg-slate-400 shadow-2xl rounded-lg items-center justify-between w-[98%] sm:w-[80%]' style={{padding:'1vw',color:'black', gap:'2vw'}}>
                        <span style={{borderRadius:'50%',color:'black', background:'#CB8120'}} className='flex items-center justify-center text-sm sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl w-[5vw] h-[5vw] sm:w-[3vw] sm:h-[3vw]'>C</span>
                        <p style={{width:'70%'}} className='text-[2vw] sm:text-[1.5vw] md:text-[1vw]'>The animation created by WAREPIX was visually stunning! Minor delays in delivery, but the quality of work compensated for it. Would recommend.</p>
                        <div className='flex items-center'>
                            <p className='text-[2.5vw] sm:text-[2vw]'>4 /</p>
                            <IoMdStar color='#FFDE59' size={'3vw'}/>
                        </div>
                    </div>
                    <div className='flex bg-slate-400 shadow-2xl rounded-lg items-center justify-between w-[98%] sm:w-[80%]' style={{padding:'1vw',color:'black', gap:'2vw'}}>
                        <span style={{borderRadius:'50%',color:'black', background:'#CB2096'}} className='flex items-center justify-center text-sm sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl w-[5vw] h-[5vw] sm:w-[3vw] sm:h-[3vw]'>I</span>
                        <p style={{width:'70%'}} className='text-[2vw] sm:text-[1.5vw] md:text-[1vw]'>Working with WAREPIX on our mobile app project was an absolute delight! From the outset, they demonstrated a deep understanding of our requirements and translated them into a sleek, user-friendly app. The development process was transparent and collaborative, with regular updates and feedback sessions. The final product exceeded our expectations in terms of functionality and design. WAREPIX's professionalism, expertise, and commitment to excellence truly set them apart in the industry. We look forward to partnering with them on future projects.</p>
                        <div className='flex items-center'>
                            <p className='text-[2.5vw] sm:text-[2vw]'>5 /</p>
                            <IoMdStar color='#FFDE59' size={'3vw'}/>
                        </div>
                    </div>
                    <div className='flex bg-slate-400 shadow-2xl rounded-lg items-center justify-between w-[98%] sm:w-[80%]' style={{padding:'1vw',color:'black', gap:'2vw'}}>
                        <span style={{borderRadius:'50%',color:'black', background:'#4720CB'}} className='flex items-center justify-center text-sm sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl w-[5vw] h-[5vw] sm:w-[3vw] sm:h-[3vw]'>Z</span>
                        <p style={{width:'70%'}} className='text-[2vw] sm:text-[1.5vw] md:text-[1vw]'>User-friendly website that perfectly represents our brand!!
                        <br/><br/>Perfect Webiste = WAREPIX
                        </p>
                        <div className='flex items-center'>
                            <p className='text-[2.5vw] sm:text-[2vw]'>5 /</p>
                            <IoMdStar color='#FFDE59' size={'3vw'}/>
                        </div>
                    </div>
                    <div className='flex bg-slate-400 shadow-2xl rounded-lg items-center justify-between w-[98%] sm:w-[80%]' style={{padding:'1vw',color:'black', gap:'2vw'}}>
                        <span style={{borderRadius:'50%',color:'black', background:'#3DCB20'}} className='flex items-center justify-center text-sm sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl w-[5vw] h-[5vw] sm:w-[3vw] sm:h-[3vw]'>Z</span>
                        <p style={{width:'70%'}} className='text-[2vw] sm:text-[1.5vw] md:text-[1vw]'>WAREPIX's web development services exceeded our expectations in every aspect. From the initial consultation to the final launch, their team demonstrated professionalism, expertise, and a genuine commitment to our project's success. They took the time to understand our unique requirements and delivered a website that not only reflects our brand identity but also enhances user experience. Their attention to detail, responsiveness, and proactive approach to problem-solving set them apart from other agencies. We are thrilled with the results and look forward to continuing our partnership with WAREPIX.
                        </p>
                        <div className='flex items-center'>
                            <p className='text-[2.5vw] sm:text-[2vw]'>5 /</p>
                            <IoMdStar color='#FFDE59' size={'3vw'}/>
                        </div>
                    </div>
                </div>
                <p className='text-center text-white text-[3vw] sm:text-[2vw]'>Leave Review</p>
                <form
                    onSubmit={handleSendReview}
                >
                    <div className='flex items-center text-[2.5vw] sm:text-[1.5vw]' style={{gap:'1.5vw'}}>
                        <input type='text' id='name' onChange={handleChange} required className='bg-slate-300 text-white' style={{ borderRadius:'5vw', padding:'1vw', width:'20%'}} placeholder='Name'/>
                        <input type='text' id='review' onChange={handleChange} required className='bg-slate-300 text-white' style={{ borderRadius:'5vw', padding:'1vw', width:'70%'}} placeholder='Leave Review'/>
                        <span className='flex items-center'>
                            <input type='number' id='rate' onChange={handleChange} required className='bg-slate-300 text-white' style={{ padding:'0.5vw'}} placeholder='5' max={5} min={0}/>
                            <IoMdStar color='#FFDE59' size={'3vw'}/>
                        </span>
                        <button className='flex items-center justify-center' style={{borderRadius:'50%', width:'4vw', height:'4vw', background:'#D8D8D8'}}><IoIosSend size={'2vw'}/></button>
                    </div>
                </form>
                
            </div>
        )}
        {reviewMessage && (
            <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-70 z-50">
                <div className="rounded-lg flex flex-col text-white" style={{padding:'5vw',width:'70%', backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(images/papperPlane.jpeg)`, backgroundSize: 'cover', backgroundPosition: 'center',}}>
                    <p className='self-center bg-transparent flex' style={{fontSize:'2vw', paddingBottom:'3vw'}} >Thank you, {formData.name} for your review</p>
                    <p style={{fontSize:'3vw'}} className='text-center'>Your review has been sent</p>
                    <p style={{fontSize:'3vw'}} className='text-center'>Successfully!</p>
                    <p style={{fontSize:'2vw', paddingTop:'2vw'}} className='text-center'>Please note that all reviews are subject to authentication by the WAREPIX team. Only reviews from verified clients will be considered valid and displayed on our reviews list. We appreciate your feedback and look forward to reviewing it soon.</p>
                    <IoMdCloudDone size={'7vw'} color='#32cd32' className='self-center'/>
                    <button className="bg-cyan-400 text-white rounded-md" style={{fontSize:'2vw', marginTop:'5vw', padding:'1vw'}} onClick={() => setReviewMessage(false)}>Close</button>
                </div>
            </div>
        )}
        <div className='flex flex-col text-white mt-[10vw] mb-[10vw]' style={{paddingInline:'1vw'}}>
            <p style={{width:'85%'}} className='text-[2.5vw] md:text-[1.3vw] text-center self-center'>
            We understand the importance of a strong digital presence in today's competitive landscape. That's why we offer a wide range of services, including website creation, mobile application development, logo design, animation production, and everything else our clients need to thrive in the digital realm.

Our team of talented professionals is dedicated to delivering exceptional results that exceed expectations. Whether you're a startup looking to establish your online presence or a well-established brand seeking to enhance your digital footprint, we have the expertise and creativity to bring your vision to life.

What sets us apart is our holistic approach to digital solutions. We don't just create websites or apps – we craft immersive experiences that resonate with your audience and drive meaningful engagement. From concept to execution, we work closely with our clients to ensure every aspect of their digital strategy aligns with their goals and objectives.
            </p>
            <img src='images/warepixLogo.png' className='self-center'/>
            <p style={{width:'85%'}} className='text-[2.5vw] md:text-[1.3vw] text-center self-center'>

At WAREPIX, we believe in the power of collaboration and innovation. We take pride in our ability to turn ideas into reality and transform visions into tangible results. Whether you're launching a new product, rebranding your business, or simply looking to elevate your online presence, we're here to help you every step of the way.

Experience the difference with WAREPIX. Let us be your trusted partner in the digital world.
            </p>
        </div>
        <Link className='self-center pt-20 pb-10' to='https://www.warepix.com/#contact'>
          <button className='bg-cyan-500 p-3 text-lg sm:text-xl md:text-2xl lg:text-3xl rounded-lg' style={{ paddingInline:'1.5vw', paddingTop:'1vw', paddingBottom:'1vw'}}>Contact Us</button>
        </Link>
        <Footer/>
    </div>
  )
}

