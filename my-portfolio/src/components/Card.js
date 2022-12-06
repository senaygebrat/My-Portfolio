import React from 'react';


export default function Card(props) {

 
  return (
    <div className='card d-flex justify-content-center w-25 mt-5'>
      {/* <div className='card-header'>Senay</div> */}
      <div className='card-body'>
        <h3 className='text-center'>{props.name}</h3>
        <img className='movie' width='250vw' src={props.image} alt='gif or screenshot of project'></img>
        <br></br>
        <div className='d-flex flex-row justify-content-around'>
        <a href={props.github}>Github</a>
        <a href={props.deployed}>Deployed Site</a>
        </div>
      </div>
    </div>
  )
}
