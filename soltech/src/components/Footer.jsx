import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='flex flex-col bg-transparent gap-10 text-white' style={{borderTopWidth:'1px'}}>
        <h1 className='self-center text-xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl' style={{ paddingTop:'2vw', paddingBottom:'2vw'}}>WAREPIX Software Solutions</h1>
        <div className='container flex self-center justify-between px-[4vw]'>
            <div className='flex flex-col gap-5'>
                <Link to='https://www.warepix.com/web' className=' text-sm sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl'>
                    <p>
                       WEB 
                    </p>
                    
                </Link>
                <Link to='https://www.warepix.com/mobile' className='text-sm sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl'>
                    <p>
                        MOBILE
                    </p>
                    
                </Link>
                <Link to='https://www.warepix.com/design' className='text-sm sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl'>
                    <p>
                        DESIGN
                    </p>
                    
                </Link>
                <Link to='https://www.warepix.com/animations' className='text-sm sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl'>
                    <p>
                        ANIMATIONS
                    </p>
                    
                </Link>
                <Link to='https://www.warepix.com/mvp' className='text-sm sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl'>
                    <p>
                        MVP
                    </p>
                    
                </Link>
            </div>
            <div className='flex flex-col gap-5'>
                <Link to='https://www.warepix.com/#portfolio' className='text-sm sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl'>
                    <p>
                        Portfolio
                    </p>
                </Link>
                <Link to='https://www.warepix.com/about' className='text-sm sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl'>
                    <p>
                        About Us
                    </p>
                    
                </Link>
                <Link to='https://www.warepix.com/work-details' className='text-sm sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl'>
                    <p>
                        How We Work
                    </p>
                    
                </Link>
                <Link to='https://www.warepix.com/#contact' className='text-sm sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl'>
                    <p>
                        Contact Us
                    </p>
                    
                </Link>
            </div>
          
        </div>
        <div className='self-center pb-10'>
          <h2 className='text-xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl'>info@warepix.com</h2>   
        </div>
        
    </div>
  )
}
