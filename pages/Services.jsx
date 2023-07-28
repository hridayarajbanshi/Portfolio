import React from 'react'
import { FcGlobe, FcAlarmClock,FcShop,FcEditImage,FcTreeStructure,FcRules } from "react-icons/fc";
import Fade from 'react-reveal/Fade';
 export default function Services() {
  return(
    <>
   
    <div className='servicesContent container pr-5 pl-5 bg-white'>
    <h2 className='text-center text-4xl m-10 text-black'>Services</h2>
    <div className='grid services lg:grid-cols-3 justify-items-center gap-4'>
    <Fade up duration={1000}>
      <div className='box'>
        <FcAlarmClock className=' text-4xl w-full' ></FcAlarmClock>
        <h2 className='text-center text-xl m-3'>Time Management</h2>
        <p>Time management is the process of planning and exercising conscious control of time spent on specific activities</p>
      </div></Fade>
      <Fade up duration={1500}>
      <div className='box '>
        <FcRules className=' text-4xl w-full' ></FcRules>
        <h2 className='text-center text-xl m-3'>Clean Code</h2>
        <p>"Any fool can write code that a computer can understand. Good programmers write code that humans can understand."</p>
      </div>
     </Fade>
      <Fade up duration={2000}>
      <div className='box '>
        <FcGlobe className=' text-4xl w-full' ></FcGlobe>
        <h2 className='text-center text-xl m-3'>Web development</h2>
        <p>Web development is the process of building and maintaining a website for the Internet or an intranet that is accessed through a web browser.</p>
      </div>
      </Fade>
    </div>
    <div className='services lg:grid-cols-3 grid justify-items-center gap-4'>
    <Fade up duration={1000}>
      <div className='box'>
        <FcEditImage className=' text-4xl w-full' ></FcEditImage>
        <h2 className='text-center text-xl m-3'>UI/UX Design</h2>
        <p>I build clean,appealing,attractive and fully functional interfaces which comply with the latest web standards and ensures the easy navigation of a website.</p>
      </div>
      </Fade>
      <Fade up duration={1500}>
      <div className='box'>
        <FcTreeStructure className=' text-4xl w-full' ></FcTreeStructure>
        <h2 className='text-center text-xl m-3'>Web hosting</h2>
        <p>I host the website with a respective domain name after building the website.</p>
      </div>
      </Fade>
      <Fade up duration={2000}>
      <div className='box'>
        <FcShop className=' text-4xl w-full' ></FcShop>
        <h2 className='text-center text-xl m-3'>eCommerce</h2>
        <p>I develop eCommerce websites such as shopping website where we can buy and sell products.</p>
      </div>
      </Fade>
    </div>
    </div>
    </>
  )
 }