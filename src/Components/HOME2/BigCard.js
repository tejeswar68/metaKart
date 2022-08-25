import React from 'react';
import { Card } from 'react-bootstrap';
import './Bigcard.css';

function BigCard({title, creator, link, ilink}) {
  return (
      <Card className='bg-dark text-white  bigcard shadow mb-2 '>
        <Card.Img src={ilink} className='bigcard w-100 h-100'/>
        <Card.ImgOverlay>
          
          <div className='row bigcardbutton mb-3 me-2'>
         <div className='row'>
          <div className='col-12'>
          <Card.Title>{title}</Card.Title>
          </div>
         </div>
            <Card.Subtitle className="col-6">{creator}</Card.Subtitle>
            <div className='col-4'></div>
            <button className='visitbutton col-2 p-2' href={link}>Visit</button></div>

        </Card.ImgOverlay>
      </Card>

  )
}

export default BigCard