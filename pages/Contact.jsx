import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {FaLocationArrow,FaPhoneAlt, FaEnvelope, FaGlobeAsia} from "react-icons/fa";
 export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_3qq3iim', 'template_37ip7o8', form.current, 'k64RPdzlkT20w-Mdq')
      .then((result) => {
        alert("Message sent");
          console.log(result.text);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };
  return(
    <>
    <div className='contactSection flex container max-[750px]:flex-col'>
      <div className='formSection  p-5 flex-auto bg-dark text-white w-60 max-[750px]:w-auto max-[750px]:p-4 '>
        <h2 className='text-center text-2xl'>Connect with me.</h2>
        {/* form */}
      <form ref={form} onSubmit={sendEmail}>
      <label htmlFor='fName'>First Name</label><br></br>
      <input type="text" name="user_fName" placeholder='Enter First Name' id='fName' required/><br></br>
      <label htmlFor='lName'>Last Name</label><br></br>
      <input type="text" name="user_lName" id='lName' placeholder='Enter Last Name' required/><br></br>
      <label htmlFor='eMail'>Email</label><br></br>
      <input type="email" name="user_email" placeholder='Enter email' id='eMail' required/><br></br>
      <label htmlFor='message'>Message</label><br></br>     
       <textarea name="message"  placeholder='Leave a message' id='message' rows={4} cols={30} required/><br></br>
      <input type="submit" value="Send" className='mt-4 btn hover:cursor-pointer ' />
    </form>
    <img src='https://i.pinimg.com/originals/b9/8f/b1/b98fb1cb16fc0dfe8a15f0a3d018552e.gif' className='mt-8' width={"100%"} height={"auto"}/>
      </div>
      <div className='contactInfo p-4 flex-auto w-20 max-[750px]:w-auto mt-10 max-[750px]:mt-5 '>
        <span className='text-2xl'>Contact Info</span>
        <div className='flex flex-col infos'>
        <FaLocationArrow className='flex-1 a'></FaLocationArrow><span className='flex-1 a'>Birtamode-4, Jhapa</span>
        <FaPhoneAlt className='flex-1 a'></FaPhoneAlt><span className='flex-1 a'>+977 9803857083</span>
        <FaEnvelope className='flex-1 a'></FaEnvelope><span className='flex-1 a'>hridayabc012@gmail.com</span>
        <FaGlobeAsia className='flex-1 a'></FaGlobeAsia><span className='flex-1 a'><a href="https://www.hridayaraj.com.np/">hannyCode.com</a></span>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d788.6494973485056!2d87.99135359265331!3d26.630045992624424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e5ba9b26a49e79%3A0x27dc811bf9121bce!2sAnarmani%2C%20Birtamode!5e0!3m2!1sen!2snp!4v1689949909280!5m2!1sen!2snp" width={"100%"} height={"500px"} allowfullscreen={""} loading={"lazy"} referrerpolicy={"no-referrer-when-downgrade"} className="map mt-5"
        />
      </div>
    </div>
    </>
  )
 }
