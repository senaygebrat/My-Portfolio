import React from 'react';
import Typed from "react-typed";
import senay from '../../assets/images/senay.png';

function About() {
  return (
 
    <div className="about-page content-color">
      <h2 className='intro'>
      <Typed
      strings={[
            "Welcome to My Page!",
            "Feel Free To Explore My Tabs",
            "For Now, a Little About Me...",
          ]}
          typeSpeed={50}
          backSpeed={50}
          loop
        />
      </h2>
      <div className='custom-box'>
        <img className='selfie' src={senay} alt='self-portrait'></img>
      <p className='summary'>I'm a native Californian that has lived in Atlanta since 2009. Some of my favorite hobbies include coding, gaming, and watching sports. I've loved computers since a young age and always knew that I would want to passionately pursue a career in this field. My goal is to build my own custom PC in the next year and take my gaming experience to the next level. My favorite sport is basketball and I watch the NBA champion Golden State Warriors faithfully! </p>
      </div>
    </div>
    
  )
}


export default About
