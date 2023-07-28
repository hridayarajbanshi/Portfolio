import React from 'react'
import Fade from 'react-reveal/Fade';
import Typed from 'react-typed';import About from "../pages/About";
import Services from "../pages/Services";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Footer from "../components/Footer";
 export default function Home() {
  return(
    <>
    <div className='mainContent p-10 text-center'>
      <div className='textSection h-full '>
        <Fade duration={3000}>
      <span className='mainText text-xl max-[750px]:text-3xl'>I'm Hridaya Rajbanshi<br />
      A Web Developer.
      </span>
      </Fade>
      <div className='myinfo p-5 text-lg text-white max-[750px]:text-sm' >
      <p>I'm a student at <b>Mechi Multiple Campus</b> Bhadrapur, Jhapa.Studying BCA and love to code and solve problems.</p>
      <Typed strings={["HTML", "React", "Tailwind", "NodeJS"]} className="text-xl font-bold typed"  typeSpeed={120}
                    backSpeed={130}
                       loop/>

      </div>
      </div>
    </div>
 <About/>
  <Services/>
  <Projects/>
  <Contact/>
    </>
  )
 }