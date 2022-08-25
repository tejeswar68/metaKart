import React,{useState} from 'react'
import homevideo from '../../videos/home_video.mp4';
import '../HOME/Homevideo.css';
import TypeWriter from "typewriter-effect";

function Homevideo() {
   
  return (
    
    <div className='hello' >
        <div className='support_main1'>
                    <video className='support_video1' src={homevideo} autoPlay muted loop></video>
                    <div className='support_search text-end  rounded-3 p-5' style={{color: '#EAE7DC',backgroundColor:'#00000087'}}>
                                  <h1  className='text-center'>Metaverse meets Metakart</h1>
                                  <TypeWriter

onInit={(typewriter)=>{
  typewriter.typeString("Virtual reality is simply the portrayal of possible universes and conceivable selves, determined to cause them to show up as genuine as could be expected...").start();
}}
></TypeWriter>     
  
                                  
                   
                    </div>
                  
                    </div>
    </div>
  )
}

export default Homevideo