import React from 'react'
import './work.css'
import P1 from '../../assets/blogg.jpg'
import P2 from '../../assets/dashboard.png'
import P3 from '../../assets/ecommerce.jpg'
import P4 from '../../assets/js.jpg'
import P5 from '../../assets/mysql.jpg'
import P6 from '../../assets/react.jpg'
const Works = () => {
  return (
    <section id='works'>
        <h2 className='worksTitle'>My Portfolio</h2>
        <span className='worksDesc'>I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.</span>
        <div className='workImgs'>
            <img src={P1} alt='' className='worksImg' />
            <img src={P2} alt='' className='worksImg' />
            <img src={P3} alt='' className='worksImg' />
            <img src={P4} alt='' className='worksImg' />
            <img src={P5} alt='' className='worksImg' />
            <img src={P6} alt='' className='worksImg' />
        </div>
        <button className='worksBtn'>See More</button>
    </section>
  )
}

export default Works