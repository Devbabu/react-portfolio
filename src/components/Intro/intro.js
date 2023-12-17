import React from 'react'
import './intro.css'
import profile from '../../assets/profile.png'
import { Link } from 'react-scroll'
import { FaUserTie } from 'react-icons/fa';

const Intro = () => {
  return (
   <section id='intro'>
    <div className='introContent'>
        <span className='hello'>Hello,</span>
        <span className='introText'>I'm <span className='introName'>Devendran</span><br/>Web <span className='dev'>Developer</span> </span>
        <p className='introPara'>
            I am a skilled Web Developer with experience in creating <br/> visually appealing and user-friendly websites.
        </p>
        <Link><button className='btn'> <FaUserTie className='hire-me' />Hire Me</button></Link>
    </div>
    <img src={profile} alt='Profile' className='bg' />
   </section>
  )
}

export default Intro