import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='flex flex-col gap-10 bg-transparent text-white' style={{borderTopWidth:'1px',}}>
        <h1 className='self-center' style={{fontSize:'2.2vw', paddingTop:'1vw'}}>WAREPIX Software Solutions</h1>
        <div className='container flex self-center justify-between'style={{width:'60%'}}>
            <div className='flex flex-col gap-5'>
                <Link to='http://localhost:5173/web' style={{fontSize:'1.5vw'}}>
                    <p>
                       WEB 
                    </p>
                    
                </Link>
                <Link to='http://localhost:5173/mobile' style={{fontSize:'1.5vw'}}>
                    <p>
                        MOBILE
                    </p>
                    
                </Link>
                <Link to='http://localhost:5173/logo' style={{fontSize:'1.5vw'}}>
                    <p>
                        LOGO
                    </p>
                    
                </Link>
                <Link to='http://localhost:5173/animations' style={{fontSize:'1.5vw'}}>
                    <p>
                        ANIMATIONS
                    </p>
                    
                </Link>
                <Link to='http://localhost:5173/mvp' style={{fontSize:'1.5vw'}}>
                    <p>
                        MVP
                    </p>
                    
                </Link>
            </div>
            <div className='flex flex-col gap-5'>
                <Link to='http://localhost:5173/#portfolio' style={{fontSize:'1.5vw'}}>
                    <p>
                        Portfolio
                    </p>
                </Link>
                <Link to='http://localhost:5173/about' style={{fontSize:'1.5vw'}}>
                    <p>
                        About Us
                    </p>
                    
                </Link>
                <Link to='http://localhost:5173/work-details' style={{fontSize:'1.5vw'}}>
                    <p>
                        How We Work
                    </p>
                    
                </Link>
                <Link to='http://localhost:5173/#contact' style={{fontSize:'1.5vw'}}>
                    <p>
                        Contact Us
                    </p>
                    
                </Link>
            </div>
          
        </div>
        <div className='self-center pb-10'>
          <h2 style={{fontSize:'3vw'}}>warepixsolutions@gmail.com</h2>   
        </div>
        
    </div>
  )
}
