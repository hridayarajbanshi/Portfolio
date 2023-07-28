import React from 'react'
import './index.css';
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Footer from "../components/Footer";
import {Route, Routes} from 'react-router-dom';
function App() {

  return (
           <>
     <Navbar></Navbar>
     <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/About' element={<About/>} />
    <Route path='/Services' element={<Services/>} />
    <Route path='/Projects' element={<Projects/>} />
    <Route path='/Contact' element={<Contact/>} />
     </Routes>
     <Footer/>
    </>
  )
}

export default App
