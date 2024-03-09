import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div className='flex' style={{paddingInline:'2vw', paddingTop:'1vw', gap:'8vw'}}>
        <div>
          <Link to='/'>
            <img src='images/soltechLogo.png' className='rounded-full' style={{width:'7vw', borderWidth:'2px', borderColor:'#5271FF'}}/>
          </Link>
        </div>
        
        <div className='text-white flex self-center justify-between' style={{gap:'7vw'}}>
            <div>
                <Link to='http://localhost:5173/#portfolio'>
                  <h1 style={{fontSize:'1.7vw'}}>Portfolio</h1>  
                </Link>
            </div>
            <div>
                <Link to='http://localhost:5173/#services'>
                  <h1 style={{fontSize:'1.7vw'}}>Services</h1>  
                </Link>
            </div>
            <div>
                <Link to='http://localhost:5173/about'>
                  <h1 style={{fontSize:'1.7vw'}}>About Us</h1>  
                </Link>
            </div>
            <div>
                <Link to='http://localhost:5173/work-details'>
                  <h1 style={{fontSize:'1.7vw'}}>How We Work</h1>  
                </Link>
            </div>
            <div>
                <Link to='http://localhost:5173/#contact'>
                  <h1 style={{fontSize:'1.7vw'}}>Contact</h1>  
                </Link>
            </div>
        </div>
        
    </div>
  )
}
