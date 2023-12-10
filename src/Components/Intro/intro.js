import React from 'react';
import './intro.css';
import bg from '../../assets/WhatsApp_Image_2023-12-08_at_11.47.18_PM-removebg-preview.png';
import {Link} from 'react-scroll';
import btnimg from '../../assets/hireme.png';

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className='hello'>Hello,</span>
            <span className="interoText">I'm <span className="interoName">Aman</span> <br /> Website Designer </span>
            <p className="intropera">I am a skilled web designer with experience in creating <br />visually appealing and friendly Websites.</p>

           <Link><button className='btn'><img src={btnimg} alt="" className='btnImg'/>Hire Me </button></Link>

        </div>
        <img src={bg} alt="" className='bg'/>
    </section>
  )
}

export default Intro;
