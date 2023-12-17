import React from 'react'
import './skills.css'
import UIDesign from '../../assets/uidesignnnnnn.png'
import WebDesign from '../../assets/webdesign.png'
import AppDesign from '../../assets/appdesign.png'

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I Do</span>
        <span className='skillDesc'>I am a skilled and passionate web developer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS, and JavaScripts.</span>
        <div className='skillBars'>
            <div className="skillBar">
                <img src={UIDesign} alt='UIDesign' className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>UI/UX Design</h2>
                    <p>This is a demo text, you can write your own content here</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={WebDesign} alt='WebDesign' className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>Website Design</h2>
                    <p>This is a demo text, you can write your own content here</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={AppDesign} alt='AppDesign' className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>App Design</h2>
                    <p>This is a demo text, you can write your own content here</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills