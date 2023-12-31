import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/d.png'
import { Link } from 'react-scroll'
import { IoMdContact } from 'react-icons/io'

import { MdOutlineMenuOpen } from "react-icons/md";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
   <nav className='navbar'>
    <img src={logo} alt='' className='logo'/>
    <div className='desktopMenu'>
     <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
     <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>About</Link>
     <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Portfolio</Link>
     <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Client</Link>
    </div>
    <button className='desktopMenuBtn' onClick={()=>{
      document.getElementById('contact').scrollIntoView({behavior:'smooth'})
    }}> <IoMdContact className='contact-icon'/> Contact Me</button>

 
  <MdOutlineMenuOpen  className='mobMenu' onClick={()=>setShowMenu(!showMenu)} />
    <div className='navMenu' style={{display: showMenu? 'flex' : 'none'}}>
     <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={()=>setShowMenu(false)}>Home</Link>
     <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='ListItem' onClick={()=>setShowMenu(false)}>About</Link>
     <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='ListItem' onClick={()=>setShowMenu(false)}>Portfolio</Link>
     <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className='ListItem' onClick={()=>setShowMenu(false)}>Client</Link>
     <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-60} duration={500} className='ListItem' onClick={()=>setShowMenu(false)}>Contact</Link>
    </div>
   </nav>
  )
}

export default Navbar