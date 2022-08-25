import React from 'react'
import './Support.css'
import Supportcard from './Supportcard';
import video1 from '../../videos/first.mp4'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
function Support() {
    return (
                <div className='support1' >
               
                    <div className='support_main1' >
                    <video className='support_video1' src={video1} autoPlay muted loop></video>
                    <div className='support_search1 text-end '>
                    <input className='support_search_bar1 ' placeholder='Shoot your question'></input>
                    <button className='support_search_button1 mt-1 '>
                      <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                    </button>
                    </div>
                  
                    </div>
                    <div className="faqs container" style={{color:'#8E8D8A'}}>
                    <h1 className='  fs-5 mt-5 d-block ms-auto' >FREQUENTLY ASKED QUESTIONS</h1>
                  <hr  className='col-4 mb-5'/>
                    
                    <div className="row ">
                    <div className='col-4'>
                    <p className='fs-5'>Host Your Next Event in Metakart</p>
                     <hr />
                     <p className='fs-5'>Shopping Mall Mode</p>
                     <hr />
                    <p className='fs-5'>New to Metakart,!</p>                     
                    <hr />
                  
                    

                    </div>
                    <div className='col-4'>
                   <p className='fs-5'>
Web, Mobile, or VR:</p>
                     <hr />
                    <p className='fs-5'>Custom Environments</p>
                     <hr />
                    <p className='fs-5'>Host Tools in Metakart</p>
                     <hr />

                    </div>
                    <div className='col-4'>
                   <p className='fs-5'>Uploading content and support file types.</p>
                     <hr />
                    <p className='fs-5'>Metakart 3D Model Preparation Guide</p>
                     <hr />
                    <p className='fs-5'>How To Join Metakart</p>
                     <hr />
              
                    </div>
                   </div>
                   <div className="categories">
                    <h1 className='  fs-5 mt-5 d-block ms-auto' >CATEGORIES</h1>
                    <hr  className='col-4 mb-5'/>

                    <div className="row row-cols-1 row-cols-lg-3">
                      <div className="col mb-3  ">
                        <Supportcard title={'Getting Started'} matter={'Pairing your device, setting up your account, and more'}/>
                      </div>

                      <div className="col mb-3 ">
                        <Supportcard title={'Device Set Up'} matter={'Ocolus Quest,ios, Android, and websites and also Linux.'}/>
                      </div>

                      <div className="col mb-3">
                        <Supportcard title={'Uploading Content'} matter={'3D Models, Custom Enviroments, Integrations, and more'}/>
                      </div>

                      <div className="col mb-3 ">
                      <Supportcard title={'Navigating Spatial'} matter={'Environments, Live Translation, notetaking and more in-app tools.'}/>
                      </div>                      

                      <div className="col mb-3 ">
                        <Supportcard title={'Technical Support'} matter={'Troubleshooting tips,billing management,IT/Security, and more'}/>
                      </div>

                      <div className="col mb-3 ">
                        <Supportcard title={'Changelog & Announcements'} matter={'Info on the latest releases, Bug fixes ,Latest updates and more!'}/>
                      </div>

                     
                    </div>
                    </div>
                    </div>

                   
                  

                  </div>

  )
}

export default Support