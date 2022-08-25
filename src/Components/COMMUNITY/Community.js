import React from 'react'
// import img1 from '../../images/registraion.png';
import video1 from '../../videos/second.mp4'
import video2 from '../../videos/third.mp4'
import video3 from '../../videos/fourth.mp4'
// import video4 from '../../videos/five.mp4'
import Carousel from 'react-bootstrap/Carousel';
// import {Scrollbars} from 'react-custom-scrollbars'

import './Community.css'
import Communitycard from './Communitycard';
function Community() {
  return (
  
       <div className='community'>

<Carousel >
      <Carousel.Item className='community_videos p-0'>
       
        <video src={video1} autoPlay muted loop className='community_videos_inside'></video>
        <Carousel.Caption>
          <h3>Welcome to learnverse...</h3>
          <p>Now live in the world where you learn...</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='community_videos p-0'>
       

      <video src={video2} autoPlay muted  loop className='community_videos_inside'></video>
      <Carousel.Caption>
          <h3>Nfts are the future</h3>
          <p>Buy Ntfs not intrested then know how to create one<a href='' className='text-warning' style={{textDecoration:'none'}}> Know more</a></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='community_videos p-0'>
       

      <video src={video3} autoPlay muted loop className='community_videos_inside'></video>
      <Carousel.Caption>
          <h3>Game anywhere</h3>
          <p>Wherever you are..travel everywhere...play anywhere...</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* <Carousel.Item className='community_videos p-0'>
       
       <video src={video4} autoPlay muted loop className='community_videos_inside'></video>
       </Carousel.Item> */}
    </Carousel>
    <h1 className='text-center mt-4' style={{color : '#e85a4f'}}>Metakart Community and Blog</h1>

    <div className='container'>
    <h1 style={{color : '#e85a4f'}}>All Posts</h1>
    <hr />
      <div className='row row-cols-1 row-cols-md-2 mb-5' style={{overflowY: 'scroll', height: '600px'}}>
       {/* < scrollbars style={{height:'100%',width:'100%'}}> */}
        <div className='col'><Communitycard tag={`Community`} title={`7 Types of Crypto Tokens and What They're used for`} date={`June 29, 2022`} ilink={`https://assets.website-files.com/5ff63016e1c8fa9d64a74764/62be156f3843eb4ae44b649b_Screen%20Shot%202022-06-30%20at%205.28.11%20PM-p-500.png`} /></div>
        <div className='col'><Communitycard tag={`Community`} title={`Polygon NFT Gallery Takeover: Spatial Celebrates a New Partnership`} date={`April 29, 2022`} ilink={`https://assets.website-files.com/5ff63016e1c8fa9d64a74764/624784a73a350512bb239571_CREATIVEOWL.png`} /></div>
        <div className='col'><Communitycard tag={`Community`} title={`4 NFT Projects with a Positive Environmental Impact`} date={`April 22, 2022`} ilink={`https://assets.website-files.com/5ff63016e1c8fa9d64a74764/6262f6ffb7ff0eba8a794746_nationparknft.png`} /></div>
        <div className='col'><Communitycard tag={`Community`} title={`Hosting Your Web3 Events in Spatial`} date={`April 20, 2022`} ilink={`https://assets.website-files.com/5ff63016e1c8fa9d64a74764/62734369fdadb405f5cf2b4d_2_party%20(2).png`} /></div>
        <div className='col'><Communitycard tag={`User Higlights`} title={`Polygon Community Pioneer: Creative Owls Leads Artists into the World of Web3`} date={`April 20, 2022`} ilink={`https://assets.website-files.com/5ff63016e1c8fa9d64a74764/6247706c4cc5bd7eb3d76e8d_8UwwEOkJ8aYJ96L4beLwdoij933dOBg6Of9oztB0kFVQfrCP7lnB-mww_xjdtBj_YsW5HlN7AClGZfOQoWXUVI19bileVUb2as2o4YESynUD01_eMtM9WUH3zruZmc90olu4bIc9.png`} /></div>
        <div className='col'><Communitycard tag={`Spatial Updates`} title={`Your Home in the Metaverse: A Starting Space in Spatial`} date={`March 2, 2022`} ilink={`https://assets.website-files.com/5ff63016e1c8fa9d64a74764/621ff408ec1ffa54f845e5e6_6.jpg`} /></div>
        <div className='col'><Communitycard tag={`User Higlights`} title={`Metaverse Gallery Tour: NeoSutras Sacred Geometry Inspired Performance Art`} date={`February 23, 2022`} ilink={`https://assets.website-files.com/5ff63016e1c8fa9d64a74764/62168ae625deed823e219bc7_Screen%20Shot%202022-02-15%20at%202.42.11%20PM-p-500.png`} /></div>
        <div className='col'><Communitycard tag={`Community`} title={`Why Buying NFT Land In The Metaverse Is Not It`} date={`February 9, 2022`} ilink={`https://assets.website-files.com/5ff63016e1c8fa9d64a74764/62042dac55bb1541763ce991_obsidian%20gallery%203.png`} /></div>
        <div className='col'><Communitycard tag={`User Higlights`} title={`Protégé of Surrealist Salvador Dalí, Louis Markoya's Virtual Exhibit in Spatial with the Leepa-Rattner Museum of Art`} date={`February 4, 2022`} ilink={`https://assets.website-files.com/5ff63016e1c8fa9d64a74764/61fd6833a39f9a23851b1b38_Screen%20Shot%202022-02-04%20at%2012.53.29%20PM.png`} /></div>
        <div className='col'><Communitycard tag={`User Higlights`} title={`Celebrating Lunar New Year 2022 in Spatial: McDonald's Hall of Zodiacs Featuring Art by Humberto Leon`} date={`February 1, 2022`} ilink={`https://assets.website-files.com/5ff63016e1c8fa9d64a74764/61f9b326e40c533d48074c52_RmxK3mrIGBz099UrXg92EVtnWWfSd-Kf0fq9Ehf5PJWxIykCGB67ZFbEM2Xd10msgCOdD5ITX2tsCB0RIqHuzG8UG4X2oPk3TKn9UQx9FrdPlokJomaGTXLVadYRHsrCDA7gyoPA.jpeg`} /></div>
        <div className='col'><Communitycard tag={`User Higlights`} title={`ELYX Enters the Metaverse With A New NFT Gallery`} date={`January 13, 2022`} ilink={`https://assets.website-files.com/5ff63016e1c8fa9d64a74764/61e0a5b906d3622ac4ab4933_Screen%20Shot%202022-01-13%20at%205.20.28%20PM-p-500.png`} /></div>
        <div className='col'><Communitycard tag={`Spatial Updates`} title={`Spatial Park: A Community Hub in Spatial's Metaverse`} date={`December 8, 2022`} ilink={`https://assets.website-files.com/5ff63016e1c8fa9d64a74764/61b127aec8ff861389c4d876_image%2031.png`} /></div>
        <div className='col'><Communitycard tag={`Spatial Updates`} title={`NFT Conferences - Spatial Team Autumn Adventures`} date={`December 1, 2022`} ilink={`https://assets.website-files.com/5ff63016e1c8fa9d64a74764/61a795ccd71d4e447c9d4d30_254956050_10158359507121517_6969165427885897489_n-p-1080.jpeg`} /></div>
        <div className='col'><Communitycard tag={``} title={`Education in the Metaverse: A New Way of Learning - Andrew Wright`} date={`November 15, 2022`} ilink={`https://assets.website-files.com/5ff63016e1c8fa9d64a74764/619531ffec6e0f457645ff9a_Screen%20Shot%202021-11-16%20at%204.24.23%20PM-p-500.png`} /></div>
      {/* </scrollbars> */}
      </div>
    </div>


       </div>
 
  )
}

export default Community