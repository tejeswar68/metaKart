import React from 'react';
import '../HOME/Homevideo.css';
import Homevideo from './Homevideo';
import '../HOME/Home.css';
function Home() {
  return (
    <div  >
       
        <Homevideo/>
        

        <div className="container mt-5">
        <h1 className='text-center mt-5' style={{color:'#E98074'}}>Try Metakart for Free</h1>
        <p className='text-center  fs-5 mt-2 mb-3' style={{color:'#E85A4F'}}>Seamlessly Connect From Any Platform</p>
        <a href='login' className='weba'><p className='fs-3 text-center webbutton w-25 d-block mx-auto mb-5'>Enter</p></a>
        </div>

    

    </div>
  )
}

export default Home