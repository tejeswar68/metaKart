import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGoogle, faInstagram, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { SocialIcon } from 'react-social-icons';
import '../Css styles/footer.css';
function Footer() {
    return (
        <div className='text-center text-lg-start text-dark bgfooter'style={{backgroundColor :'#8E8D8A'}}  >
           <div className='d-flex justify-content-center justify-content-lg-between p-3'>
                    <div className='me-5 d-none d-lg-block'>
                        <span>Get connected with us on:</span>
                    </div>
                    <div className='d-flex gap-4'>
                       <FontAwesomeIcon icon={faFacebook} size="lg"> </FontAwesomeIcon>
                       <FontAwesomeIcon icon={faTwitter} size="lg"> </FontAwesomeIcon>
                       <FontAwesomeIcon icon={faGoogle} size="lg"> </FontAwesomeIcon>
                       <FontAwesomeIcon icon={faInstagram} size="lg"> </FontAwesomeIcon>
                       <FontAwesomeIcon icon={faDiscord} size="lg"> </FontAwesomeIcon>
                    </div>
                </div>
                <div className=''>
                    <hr  className='text-dark'/>
                    <div className='container text-center text-md-start mt-5'>
                        <div className='row mt-3'>
                            <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 fw-bold'>
                                <p>About</p>
                                <p>Contact</p>
                                <p>Pricing</p>
                                <p>Help</p>
                            </div>
    
                            <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 fw-bold'>
                                <p>Download</p>
                                <p>Jobs</p>
                                <p>Video</p>
                            </div>
    
                            <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 fw-bold'>
                                <p>Privacy</p>
                                <p>Terms</p>
                                <p>Community Guidelines</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='text-dark'/>
                <div className='text-center p-2 text-muted ' style={{ color:'black',backgroundColor:'#8E8D8A' }}>
                    © 2022 Copyright: flipkart-grid meta-Commerce
                </div>
        </div>
      )
    }
    
    export default Footer;