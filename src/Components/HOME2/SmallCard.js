import React from 'react';
import { Card } from 'react-bootstrap';
import './Smallcard.css';

function SmallCard ({title, creator, link, ilink}) {
  return (
    <a href={link}><Card className="smallcardhover text-white rounded-3 shadow  w-100 h-100">
      <Card.Img src={ilink} alt="Card image" className='w-100 h-100' style={{borderRadius: '10px'}}/>
      <Card.ImgOverlay>
        <Card.Title className=''>{title}</Card.Title>
        <Card.Subtitle className="mb-2 ">{creator}</Card.Subtitle>
      </Card.ImgOverlay>
       <div className='smallcardwhite w-100 h-100'></div>
    </Card></a>
  )
}

export default SmallCard

