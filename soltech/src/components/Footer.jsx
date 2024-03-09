import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='flex flex-col gap-10 bg-transparent text-white' style={{borderTopWidth:'1px',}}>
        <h1 className='self-center text-4xl  md:text-5xl lg:text-6xl xl:text-7xl' style={{ paddingTop:'2vw', paddingBottom:'2vw'}}>WAREPIX Software Solutions</h1>
        <div className='container flex self-center justify-between'style={{width:'60%'}}>
            <div className='flex flex-col gap-5'>
                <Link to='http://localhost:5173/web' className='text-2xl  md:text-2xl lg:text-3xl xl:text-4xl'>
                    <p>
                       WEB 
                    </p>
                    
                </Link>
                <Link to='http://localhost:5173/mobile' className='text-2xl  md:text-2xl lg:text-3xl xl:text-4xl'>
                    <p>
                        MOBILE
                    </p>
                    
                </Link>
                <Link to='http://localhost:5173/logo' className='text-2xl  md:text-2xl lg:text-3xl xl:text-4xl'>
                    <p>
                        LOGO
                    </p>
                    
                </Link>
                <Link to='http://localhost:5173/animations' className='text-2xl  md:text-2xl lg:text-3xl xl:text-4xl'>
                    <p>
                        ANIMATIONS
                    </p>
                    
                </Link>
                <Link to='http://localhost:5173/mvp' className='text-2xl  md:text-2xl lg:text-3xl xl:text-4xl'>
                    <p>
                        MVP
                    </p>
                    
                </Link>
            </div>
            <div className='flex flex-col gap-5'>
                <Link to='http://localhost:5173/#portfolio' className='text-2xl  md:text-2xl lg:text-3xl xl:text-4xl'>
                    <p>
                        Portfolio
                    </p>
                </Link>
                <Link to='http://localhost:5173/about' className='text-2xl  md:text-2xl lg:text-3xl xl:text-4xl'>
                    <p>
                        About Us
                    </p>
                    
                </Link>
                <Link to='http://localhost:5173/work-details' className='text-2xl  md:text-2xl lg:text-3xl xl:text-4xl'>
                    <p>
                        How We Work
                    </p>
                    
                </Link>
                <Link to='http://localhost:5173/#contact' className='text-2xl  md:text-2xl lg:text-3xl xl:text-4xl'>
                    <p>
                        Contact Us
                    </p>
                    
                </Link>
            </div>
          
        </div>
        <div className='self-center pb-10'>
          <h2 className='text-4xl  md:text-5xl lg:text-6xl xl:text-7xl'>warepixsolutions@gmail.com</h2>   
        </div>
        
    </div>
  )
}
