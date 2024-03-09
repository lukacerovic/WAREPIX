import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div className='flex' style={{paddingLeft:'2vw', paddingTop:'1vw', gap:'5vw'}}>
        <div style={{width:'10%'}}>
          <Link to='/'>
            <img src='images/soltechLogo.png' className='rounded-full' style={{borderWidth:'2px', borderColor:'#5271FF'}}/>
          </Link>
        </div>
        
        <div className='text-white flex self-center justify-between' style={{gap:'2vw'}}>
            <div>
                <Link to='https://www.warepix.com/#portfolio'>
                  <h1 className='text-sm  md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl'>Portfolio</h1>  
                </Link>
            </div>
            <div>
                <Link to='https://www.warepix.com/#services'>
                  <h1 className='text-sm  md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl'>Services</h1>  
                </Link>
            </div>
            <div>
                <Link to='https://www.warepix.com/about'>
                  <h1 className='text-sm  md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl'>About Us</h1>  
                </Link>
            </div>
            <div>
                <Link to='https://www.warepix.com/work-details'>
                  <h1 className='text-sm  md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl'>How We Work</h1>  
                </Link>
            </div>
            <div>
                <Link to='https://www.warepix.com/#contact'>
                  <h1 className='text-sm  md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl'>Contact</h1>  
                </Link>
            </div>
        </div>
        
    </div>
  )
}
