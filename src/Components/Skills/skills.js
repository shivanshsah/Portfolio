import React from 'react';
import './skills.css';
import uiDesign from '../../assets/ui-design.png';
import webDesign from '../../assets/website-design.png';
import appDesign from '../../assets/app-design.png'

const Skills = () => {
  return (
    <section id='skills'>
      <span className="skillTitle">What I do</span> 
      <span className="skillDesc">I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS, and JavaScript, as well as design software such as Adobe Photoshop and illustrator.</span> 
      <div className="skillsBars">
        <div className="skillsBar">
            <img src={uiDesign} alt="" className="skillBerimg" />
            <div className="skillbarText">
                <h2>UI/UX Design</h2>
                <p>This is a Demo text ,you can write your own content hrer.</p>
            </div>
        </div>
        <div className="skillsBar">
            <img src={webDesign} alt="" className="skillBerimg" />
            <div className="skillbarText">
                <h2>Website Design</h2>
                <p>This domo text can be changed while the production ready websites.</p>
            </div>
        </div>
        <div className="skillsBar">
            <img src={appDesign} alt="" className="skillBerimg" />
            <div className="skillbarText">
                <h2>App Design</h2>
                <p>you can write text related to mobile app development.</p>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Skills
