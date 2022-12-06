import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import emailing from '../../assets/images/email.jpg';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='contact-page'>
    <form className='contact-info contact-pic' ref={form} onSubmit={sendEmail}>
      <h1 className='contact-title'>Contact Me?</h1>
      <div className='msg-boxes'>
      <label className='cont-pers'>Name</label>
      <input type="text" name="user_name" />
      <label className='cont-pers'>Email</label>
      <input type="email" name="user_email" />
      <label className='cont-pers'>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
      </div>
      <img className='cont-pic'src={emailing} alt='fingers at computer'>
      </img>

    </form>
    </div>
  );
};

export default ContactUs