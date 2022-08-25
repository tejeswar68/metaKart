import React from 'react';
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function Profile() {

    let { userObj }= useSelector(state => state.user);

    return (
        <Card style={{ width: "50rem", color: 'black',  }} className='mx-auto my-5 text-center'>
        <Card.Body>
          <Card.Title>Username : {userObj.username}</Card.Title>
          <Card.Text>Email : {userObj.email}</Card.Text>
          <Card.Text>Mobile : {userObj.number}</Card.Text>
        </Card.Body>
      </Card>        
    )
}

export default Profile