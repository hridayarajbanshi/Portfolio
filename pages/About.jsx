import React from 'react'
import { FaFacebook, FaGithubAlt, FaInstagram, FaReddit} from "react-icons/fa";
import Fade from 'react-reveal/Fade';
 export default function About() {
  const myDatas = {
    name: 'Hridaya Rajbanshi',
    DOB: "16 FEB 2003",
    age: '20',
    email: 'hridayabc012@gmail.com',
    city: 'Birtamode-4, Jhapa',
    free: 'Available for Freelance'
  }
  return(
    <>
    <div className="aboutSection flex container max-[750px]:flex-col ">
      <div className='imgSection flex-1 '>
        <Fade left duration={2000}>
    <img src='https://hannycode.netlify.app/assets/img/myprofile.jpg' alt='hridaya rajbanshi' className='avatar rounded-full h-auto'/>
    </Fade>
      </div>
      <div className='infoSection flex-1 bg-dark text-white p-5 max-[500px]:p-4 '>
     <Fade right duration={2000}>
      <h2 className='text-4xl font-bold about mb-4 max-[500px]:text-2xl max-[500px]:mt-4'>About</h2>
    <ul>
      <li className=''>Name - {myDatas.name}</li>
      <li>Age - {myDatas.age}</li>
      <li>DOB - {myDatas.DOB}</li>
      <li>Email - {myDatas.email}</li>
      <li>{ myDatas.free}  </li>
    </ul>
      <p>Regaring my education i'm very apporiate and able to solve and kinds of problem, In sprite of my experience.I've been learning coding since i was in class 8. when i got interested in coding i knew very little about the web-development.Languages like HTML and CSS.</p>
      </Fade>
      <div className='socialMedias flex justify-center mt-5'>
        <a href="https://www.facebook.com/fukboom.org" target={"_blank"}>
      <FaFacebook className='text-2xl hover:cursor-pointer'></FaFacebook>
      </a>
      <a href="https://github.com/hridayarajbanshi" target={"_blank"}>
      <FaGithubAlt className='text-2xl hover:cursor-pointer '></FaGithubAlt>
      </a>
      <a href="https://www.instagram.com/radium_user/" target={"_blank"}>
      <FaInstagram className='text-2xl hover:cursor-pointer '></FaInstagram></a>
      <a href="https://www.reddit.com/user/Hannycode" target={"_blank"}>
      <FaReddit className='text-2xl hover:cursor-pointer '></FaReddit>
      </a>
      </div>
      </div>
     </div>
    </>
  )
 }