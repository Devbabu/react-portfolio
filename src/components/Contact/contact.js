import React, { useRef } from 'react'
import './contact.css'
import FB from '../../assets/fb.png'
import Adobe from '../../assets/adobe.png'
import Microsoft from '../../assets/microsoft.png'
import WallMart from '../../assets/wallmart.png'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2wvov2r', 'template_xi051zp', form.current, 'gdOthWfH_vTc2J6eD')
      .then((result) => {
          console.log(result.text);
          e.target.reset()
          alert('Email Sent !')
      }, (error) => {
          console.log(error.text);
      });
  };
      
  return (
    <section id='contactPage'>
        <div id='clients'>
            <h1 className='contactPageTitle'>My Clients</h1>
            <p className="clientDesc">I have had the opportunity to work with a diverse group of companies. Some fo the notable companies I have worked with includes...</p>
        </div>
        <div className='clientImgs'>
            <img src={FB} alt='' className='clientImg' />
            <img src={Adobe} alt='' className='clientImg' />
            <img src={WallMart} alt='' className='clientImg' />
            <img src={Microsoft} alt='' className='clientImg' />
        </div>
        <div id='contact'>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'>Please fill out the form below to discus any work opportunities</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type="text" className='name' placeholder='Your Name' name="user_name" />
                <input type='email' className='email' placeholder='Your Email' name="user_email"/>
                <textarea className='msg' name="message" rows='5'  placeholder='Your Message'></textarea>
                <button className='submitBtn' type='submit' value='send' onClick={()=>{console.log('sucess');}}>Submit</button>
                <div className='links'>
                    <FaFacebook className='link' />
                    <FaInstagram className='link'/>
                    <FaYoutube className='link' />
                    <FaXTwitter className='link' />                    
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact
