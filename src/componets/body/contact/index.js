import React from 'react';
import Separator from '../../common/separator';
import SocialContact from '../../common/social-contact';
import './contact.css';

function Contact() {
  return <div className='cantact'>
    <Separator />
    <label className='section-tile'>Contact</label>
    <div className='contact-container'>
      <div className='contact-left'>
        <p>Want to get in touch?? Contact my in any of the following platforms</p>
        <SocialContact />
      </div>
      <div className='download'>
        <a download href ={require('../../../assets/Resume.pdf')}>
        <i class="fi fi-rr-download"></i>
          Download Resume
        </a>

      </div>
    </div>
  </div>;
}

export default Contact;
