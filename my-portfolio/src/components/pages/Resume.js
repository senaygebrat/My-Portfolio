import React from 'react';
import resume from '../../assets/images/resume.png';
import ciao from '../../assets/images/contact-image.jpg';


function Resume() {
  return (
    <div className='resume content-color'>
      <div className='res-space'>
      <a href={resume} download>Click here To Download My Resume!</a>
      <img className='res-pic' src={ciao} alt='fingers at computer'></img>

      </div>
    </div>
  )
}

export default Resume
