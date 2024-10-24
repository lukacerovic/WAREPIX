import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

export default function WorkDetails() {
  return (
    <div className='h-full flex flex-col gap-10' style={{background:'#181818'}}>
        <NavBar/>
        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl mt-5 text-center self-center text-white'>From Start to Finish</h1>
        <p className='mt-5 text-center self-center text-white text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl'>Our Step-by-Step Approach Explained</p>
        <div className='text-white flex self-center w-[95%] sm:w-[80vw]' style={{marginTop:'5vw', marginBottom:'8vw'}}>
            <div className='flex flex-col' style={{ width:'100%', paddingInline:'3vw', borderLeftWidth:'1px', borderRightWidth:'1px', borderColor:'#5271FF'}}>
                <div className='flex flex-col' style={{gap:'10vw'}}>
                    <div>
                        <div className='flex items-center gap-[5vw]'>
                            <h1 style={{fontSize:'13vw', color:'#5271FF'}}>1</h1>
                            <div>
                                <h1 className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl' style={{borderBottomWidth:'2px',paddingBottom:'5px', borderColor:'#5271FF'}}>Understanding Client Needs</h1>
                                <p className='pt-[3vw] text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl'>In this phase, the client contacts us to discuss their needs and provide us with all the necessary details they deem important. This communication can take place via Zoom or any other form of video conferencing, or it can be conducted through email correspondence, depending on the client's preference.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='flex items-center gap-[5vw]'>
                            <h1 style={{fontSize:'13vw', color:'#5271FF'}}>2</h1>
                            <div>
                                <h1 className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl' style={{borderBottomWidth:'2px',paddingBottom:'5px', borderColor:'#5271FF'}}>Service Delivery Timeline and Project Phasing</h1>
                                <p className='pt-[3vw] text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl'>After understanding the client's desires and requirements, we assess the deadline for completing the project and send the client a PDF file outlining the project workflow. The project is divided into several phases, each accompanied by explanations for the client and other necessary information. This is done to provide the client with insight into the workflow. The file will also include delivery deadlines for each phase, as well as the total project cost, which will be established through discussion and consultation with the client.</p>
                            </div>
                            
                        </div>
                    </div>
                    <div>
                        <div className='flex items-center gap-[5vw]'>
                            <h1 style={{fontSize:'13vw', color:'#5271FF'}}>3</h1>
                            <div>
                                <h1 className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl' style={{borderBottomWidth:'2px',paddingBottom:'5px', borderColor:'#5271FF'}}>Phase Review and Analysis</h1>
                                <p className='pt-[3vw] text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl'>After completing each phase, we will notify the client and present them with the work results up to that point, providing a precise overview of the progress. This ensures that the client remains constantly informed about the pace and manner of work. Presenting each completed phase can also be conducted via video call or correspondence, depending on the client's preference. Following each phase, the client will have the opportunity to request any changes or provide feedback on the specific work. Once the client approves, we proceed to the next phase.</p>
                            </div>
                            
                        </div>                     
                    </div>
                    <div>
                        <div className='flex items-center gap-[5vw]'>
                            <h1 style={{fontSize:'13vw', color:'#5271FF'}}>4</h1>
                            <div>
                                <h1 className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl' style={{borderBottomWidth:'2px',paddingBottom:'5px', borderColor:'#5271FF'}}>Payment Processing</h1>
                                <p className='pt-[3vw] text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl'>Payment is made upon the completion of each phase. Each phase will have its own price, and payment will be processed after the successful completion of each phase. The client will be able to view the total project cost before the commencement of work when the PDF file containing details related to each phase of work is provided.</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        <Link className='self-center pt-20 pb-10' to='https://www.warepix.com/#contact'>
          <button className='bg-cyan-500 p-3 text-lg sm:text-xl md:text-2xl lg:text-3xl rounded-lg' style={{background:'#5271FF'}}>Contact Us</button>
        </Link>
        <Footer/>
    </div>
  )
}
