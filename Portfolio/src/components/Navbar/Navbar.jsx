import React, { useRef } from 'react'
import './navbar.css'
import {Link} from 'react-scroll'

const Navbar = () => {
    let menu=useRef();
    let mobile=useRef();
  return (
   <nav>
    <h1>Portfolio</h1>
    <ul className='desktopmenu'>
        <Link to='home' activeClass='active' spy={true} smooth={true} duration={600}><li>Home</li></Link>
        <Link to='about' activeClass='active' spy={true}  smooth={true} duration={600}><li>About</li></Link>
        <Link to='projects' activeClass='active' spy={true}  smooth={true} duration={600}><li>Projects</li></Link>
        <Link to='contact' activeClass='active' spy={true} smooth={true} duration={600}><li>Contact</li></Link>
    </ul>

    <div className="hamburger" ref={menu} onClick={()=>{
        mobile.current.classList.toggle("isActiveMobileClass")
        menu.current.classList.toggle("isActivehamburgerClass")
    }} >
        <div className="ham"></div>
        <div className="ham"></div>
        <div className="ham"></div>
    </div>

     <ul className='mobilemenu' ref={mobile}>
        <Link to='home' activeClass='active' spy={true} smooth={true} duration={600}><li>Home</li></Link>
        <Link to='about' activeClass='active' spy={true}  smooth={true} duration={600}><li>About</li></Link>
        <Link to='projects' activeClass='active' spy={true}  smooth={true} duration={600}><li>Projects</li></Link>
        <Link to='contact' activeClass='active' spy={true} smooth={true} duration={600}><li>Contact</li></Link>
    </ul>
   </nav>
  )
}

export default Navbar
