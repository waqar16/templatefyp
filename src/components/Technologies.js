import React from 'react'
import react from '../images/Technologies/react.png';
import mongo from '../images/Technologies/mongo.png';
import express from '../images/Technologies/express.png';
import node from '../images/Technologies/node.png';

function Technologies() {
  return (
    <div className='tech-images' >
       <div className="row row-cols-1 row-cols-md-4 g-4">
        <img src={react} alt="" />
        <img src={mongo} alt="" />
        <img src={express} alt="" />
        <img src={node} alt="" />
        
       </div>
    </div>
  )
}

export default Technologies
