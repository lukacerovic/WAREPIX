import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMenu } from 'react-icons/io5';

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      {/* Prikaz menija za šire ekrane */}
      <div className='hidden lg:flex justify-between items-center px-8 py-4'>
        <div style={{ width: '10%' }}>
          <Link to='/'>
            <img src='images/soltechLogo.png' className='rounded-full border-2 border-blue-500' alt="Logo" />
          </Link>
        </div>
        <div className='text-white flex self-center justify-between' style={{ gap: '2vw' }}>
          <div>
            <Link to='https://www.warepix.com/#portfolio'>
              <h1 className='text-xl'>Portfolio</h1>
            </Link>
          </div>
          <div>
            <Link to='https://www.warepix.com/#services'>
              <h1 className='text-xl'>Services</h1>
            </Link>
          </div>
          <div>
            <Link to='https://www.warepix.com/about'>
              <h1 className='text-xl'>About Us</h1>
            </Link>
          </div>
          <div>
            <Link to='https://www.warepix.com/work-details'>
              <h1 className='text-xl'>How We Work</h1>
            </Link>
          </div>
          <div>
            <Link to='https://www.warepix.com/#contact'>
              <h1 className='text-xl'>Contact</h1>
            </Link>
          </div>
        </div>
      </div>

      {/* Prikaz menija za uže ekrane */}
      <div className='lg:hidden flex justify-between items-center px-8 py-4'>
        <div style={{ width: '10%' }}>
          <Link to='/'>
            <img src='images/soltechLogo.png' className='rounded-full border-2 border-blue-500' alt="Logo" />
          </Link>
        </div>
        <IoMenu color='white' size={24} onClick={handleMenuClick} className='cursor-pointer' />
      </div>

      {/* Prikaz menija prilikom otvaranja */}
      {showMenu && (
        <div className='lg:hidden flex flex-col items-center py-4 bg-gray-800'>
          <div>
            <Link to='https://www.warepix.com/#portfolio'>
              <h1 className='text-xl text-white'>Portfolio</h1>
            </Link>
          </div>
          <div>
            <Link to='https://www.warepix.com/#services'>
              <h1 className='text-xl text-white'>Services</h1>
            </Link>
          </div>
          <div>
            <Link to='https://www.warepix.com/about'>
              <h1 className='text-xl text-white'>About Us</h1>
            </Link>
          </div>
          <div>
            <Link to='https://www.warepix.com/work-details'>
              <h1 className='text-xl text-white'>How We Work</h1>
            </Link>
          </div>
          <div>
            <Link to='https://www.warepix.com/#contact'>
              <h1 className='text-xl text-white'>Contact</h1>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
