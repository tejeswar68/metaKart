import React from 'react'
import '../SUPPORT/Support.css';
import{Card} from 'react-bootstrap'
function Supportcard({title, matter}) {
  return (
    <Card className="card mt-2 border-white " style={{ backgroundColor: '#E85A4F',color:'#EAE7DC'}}>
        <Card.Title className='text-center m-2'>{title}</Card.Title>
        <hr/>
        <Card.Subtitle className="text-center m-2">{matter}</Card.Subtitle>

    </Card>
  )
}


export default Supportcard