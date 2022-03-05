import React from 'react';
import SocialContact from '../../common/social-contact';
import './about.css'

function About() {
  return(
     <div className='about'>
        <div className='about-top'>
          <div className='about-info'>
            Hello Everyone ✋ , I am <span className='info-name'>Harsh Singh</span>.
            <br /> My portfolio is a representation of all that I've learned
            <br />and accomplished as a engineering student.🔥
          </div>
          <div className='about-photo'>
            <img src={require("../../../assets/coding.png")} className='picture' />
          </div>
          
        </div>
        <SocialContact />
      </div>
  );   
       
        
  
}

export default About;
