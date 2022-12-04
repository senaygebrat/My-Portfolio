import React from 'react';
import senay from '../../assets/images/senay.png';

function About() {
  return (
    <div className="about-page">
      <h2 className='intro'>A Little About Me....</h2>
      <div className='custom-box'>
        <img className='selfie' src={senay} alt='self-portrait'></img>
      <p className='summary'>I'm a native Californian that has lived in Atlanta since 2009. Make sure to fill in plenty more of text telling the world who I am and what I love. My favorite sport is basketball and I watch the NBA champion Golden State Warriors faithfully! I'm a native Californian that has lived in Atlanta since 2009. Make sure to fill in plenty more of text telling the world who I am and what I love. My favorite sport is basketball and I watch the NBA champion Golden State Warriors faithfully!</p>
      </div>
    </div>
  )
}

export default About
