import React from 'react'
import { CiMenuBurger, CiMaximize1} from "react-icons/ci";
import {Link} from 'react-router-dom';

export default function Navbar() {
  const [nav, setNav] = React.useState(false);
  const handelNav = () => {
    setNav(!nav);

  }
  return(
    <>
    <div className=' flex justify-between items-center h-20 mx-auto px-4 max-w-[1240px] '>
      <span className='w-full logo text-xl hover:cursor-pointer'>HannyCode</span>
      <ul className='hidden md:flex'>
        <li className='p-4 hover:cursor-pointer'><Link to="/">Home</Link></li>
        <li className='p-4 hover:cursor-pointer'><Link to='/About'>About</Link></li>
        
        <li className='p-4 hover:cursor-pointer'><Link to="/Services">Services</Link></li>
        
        <li className='p-4 hover:cursor-pointer'><Link to="/Projects">Projects</Link></li>
        
        <li className='p-4 rounded-2xl hover:cursor-pointer'><Link to="/Contact">Contact</Link></li>

      </ul>
      <div onClick={handelNav} className='cursor-pointer block md:hidden'>
        {!nav ? <CiMaximize1 size={25} />: <CiMenuBurger size={25}/>
 }
      </div>
      <div className={nav ? 'fixed nav left-0 top-0 w-[60%] h-full bg-gray-900 ease-in-out transition-all duration-500 md:hidden': 'fixed left-[-100%]  transition-all duration-5000'}>
      <span className='w-full logo text-xl p-4 hover:cursor-pointer'>HannyCode</span>
      <ul className='p-4'>
        <li className='p-4 border-b hover:cursor-pointer'><Link to="/">Home</Link></li>
        <li className='p-4 border-b hover:cursor-pointer'><Link to="/About">About</Link></li>
        <li className='p-4 border-b hover:cursor-pointer'><Link to="/Services">Services</Link></li>
        <li className='p-4 border-b hover:cursor-pointer'><Link to="/Projects">Projects</Link></li>
        <li className='p-4 border-b hover:cursor-pointer'><Link to="/Contact">Contact</Link></li>
      </ul>
      </div>
    </div>
    </>
  )
}