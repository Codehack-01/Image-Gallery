import React from 'react';
import {projlogo} from '../assets';

const NavBar = () => {
  return (
    <div className='w-full py-6 bg-[#000] shadow-md'>
        <div className='flex flex-row md:hidden justify-center items-center '>
          <img src={projlogo} alt="" />
          <span className='text-xl md:text-xl bold pl-2 font-bold text-white'>BigShotz</span>
        </div>
        <div className='text-white mx-auto container hidden md:flex items-center justify-between'>
          <div className='flex flex-row '>
            <img src={projlogo} alt="" />
            <span className='text-xl md:text-xl bold pl-2 font-bold'>BigShotz</span>
          </div>

          <div className=' hidden md:flex'>
            <ul className='flex flex-row space-x-9 cursor-pointer text-gray-300'>
              <li>Collections</li>
              <li>Upgrade to Premium</li>
            </ul>

          </div>
          
        </div>
    </div>
  )
}

export default NavBar;