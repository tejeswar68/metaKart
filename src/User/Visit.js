import React from 'react';
import { Card, Button } from 'react-bootstrap';

function Visit() {
  return (
    <Card style={{ width: "50rem", color: 'black',  }} className='mx-auto my-5 text-center'>
        <Card.Body>
            <Card.Title>Shop in the Metaverse</Card.Title>
            
            <Button variant="success" href="https://pavaneeshwar.itch.io/metakart">Go</Button>
        </Card.Body>
    </Card>
  )
}

export default Visit