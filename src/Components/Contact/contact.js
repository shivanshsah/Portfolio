import React from 'react'
import './contact.css';
import Walmart from'../../assets/walmart.png';
import Adobe from'../../assets/adobe.png';
import Microsoft from'../../assets/microsoft.png';
import Facebook from'../../assets/facebook.png';
import Facebookicon from '../../assets/facebook-icon.png'
import TwitterIcon from '../../assets/twitter.png'
import YouTubeIcon from '../../assets/youtube.png'
import InstagramIcon from '../../assets/instagram.png'




const Contact = () => {
  return (
    <section id="contactPage">
        <div className="clients">
            <h1 className="contactPageTitle">My Clients</h1>
            <p className="clinentsDesc">I have had the opportunity to work with a diverse group of companies. Some of the notable companies I have worked with includes</p>

            <div className="clientImgs">
            </div>

                <img src={Walmart} alt="" className="clientImg" />
                <img src={Adobe} alt="" className="clientImg" />
                <img src={Microsoft} alt="" className="clientImg" />
                <img src={Facebook} alt="" className="clientImg" />
        </div>
        <div id="contact">
            <h1 className="contactOageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the form below to discuss any work opporyunities.</span>
            <form className='contactFrom'>
                <input type="text" className='name' placeholder='Your Name'/>
                <input type="email" className="email" placeholder='Your Email' />
                <textarea className='msg' name="massage"rows="5" placeholder='Your Massage'></textarea>
                <button type='submit' value='Send'className="submitBtn">Submit</button>
                <div className="links">
                    <img src={Facebookicon} alt="" className="link" />
                    <img src={TwitterIcon} alt="" className="link" />
                    <img src={YouTubeIcon} alt="" className="link" />
                    <img src={InstagramIcon} alt="" className="link" />
                </div>
            </form>

        </div>
    </section>
  )
}

export default Contact
