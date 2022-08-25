import React from 'react';
import Login from './Login';
import { Link, Route, Routes } from 'react-router-dom';

function Pricing() {
  return (
    <div className='text-center container ' style={{color:'#E85A4F'}}>
      <h1 className='my-5'>Pricing</h1>

      <div className='container mt-5' >
        <div className='row row-cols-1 row-cols-lg-3'>
          <div className='col'>
            <div className='card mb-4' style={{borderRadius: '20px',color: '#D8C3A5', backgroundColor: '#E85A4F'}}>
              <div className='card-body'>
                <h3 className='card-title my-5'>Free</h3>
                <hr />
                <h5 className='card-text my-5'>For creators looking to host exhibitions, meetups, and live events</h5>
                {/* Link to login of our application. */}
                <Link to='/login' className='btn my-5' style={{backgroundColor: '#D8C3A5', color: '#E85A4F', width: '150px', borderRadius: '50px'}} element={<Login />}>Go Free</Link>
              </div>
            </div>
          </div>

          <div className='col'>
            <div className='card mb-4' style={{backgroundColor: '#D8C3A5', color: '#E85A4F', borderRadius: '20px'}}>
              <div className='card-body'>
                <h3 className='card-title my-5'>Pro</h3>
                <hr />
                <h5 className='card-text my-5'>For creators looking to host more curated and controlled experiences</h5>
                {/* Link to billing in spatial.io */}
                <a href='https://spatial.io/upgrade?term=monthly&tier=personal_pro' className='btn mt-5 mb-4' style={{color: '#D8C3A5', backgroundColor: '#E85A4F', width: '150px', borderRadius: '50px'}}>$25/month</a>
                <br /><a href='https://spatial.io/upgrade?term=annual&tier=personal_pro' className='mb-2' style={{backgroundColor: '#D8C3A5', color: '#E85A4F'}}>$20/month when billed annually</a>
              </div>
            </div>
          </div>

          <div className='col'>
            <div className='card mb-4' style={{backgroundColor: '#D8C3A5', color: '#E85A4F', borderRadius: '20px'}}>
              <div className='card-body'>
                <h3 className='card-title my-5'>Special Event</h3>
                <hr />
                <h5 className='card-text my-5'>Reach out if you have questions about hosting an important event</h5>
                {/* Link to form for Contact us button from spatial.io */}
                <a to='https://docs.google.com/forms/d/e/1FAIpQLScIBeLCZ6qHnuAzSDrO_nZTixRQ4cCrIMs3qt7uLdpkMoEr4w/viewform' className='btn my-5' style={{color: '#D8C3A5', backgroundColor: '#E85A4F', width: '150px', borderRadius: '50px'}}>Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </div>



    </div>
  )
}

export default Pricing