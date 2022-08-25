import React from 'react'
import BigCard from '../HOME2/BigCard';
import SmallCard from '../HOME2/SmallCard';
import creators from '../../images/creators.jpg';


function Home2() {
  return (
    <div style={{color: '#e85a4f'}}>
        <div className='text-center mt-5'>
            <h2 className=''>Explore the meta-eCommerce</h2><br />
            <h4>Join thousands of users ready to give virtual feedback and reviews for over millions of products.</h4>
        </div>
        
        <div className='container mt-5 mb-3'>
            <div className='row row-cols-1 row-cols-lg-2'>
                <div className='col'>
                    <BigCard title={`OpenSea's Juneteenth Gallery`} creator={`by Swopes`} link={`https://spatial.io/s/OpenSeas-Juneteenth-Gallery-by-Swopes-628cf2c10bd65e0001ed1d34?share=5470610574793940053`} ilink={'https://assets.website-files.com/5fe239511862dad3b1c6985a/62af281db8d59a9776224687_Screen%20Shot%202022-06-19%20at%209.42.36%20AM-p-1600.png'}/>
                </div>

                <div className='col'>
                <BigCard title={`Excllusible Penthouse`} creator={`by Exclusible`} link={`https://spatial.io/s/Exclusible-Penthouse-62a88e88fb54c10001e26cc2?share=1051148410564314285`} ilink={'https://assets.website-files.com/5fe239511862dad3b1c6985a/62af28fdbb3c55591c47327b_Screen%20Shot%202022-06-15%20at%204.33.16%20PM.png'}/>
                </div>
            </div>
        </div>

        <div className='container mb-5'>
            <div className='row row-cols-1 row-cols-lg-3'>
                <div className='col mb-3'><SmallCard title={`Summer House`} creator={`by M2 Studios`} link={`https://spatial.io/s/Summer-House-by-M2-Studios-60e8af9f6c51d501c3890b85?share=6154787216889020926`} ilink={`https://assets.website-files.com/5fe239511862dad3b1c6985a/62af29d3eef105413ecd6c0c_Screen%20Shot%202022-06-19%20at%209.49.06%20AM-p-1600.png`}/></div>
                <div className='col mb-3'><SmallCard title={`VERSES Gallery`} creator={`by Holly, Rarible and Polycount`} link={`https://spatial.io/rooms/62053ee64202c9000136e63e?share=7454859656663147052`} ilink={`https://assets.website-files.com/5fe239511862dad3b1c6985a/62423c286cd76137b00e8fba_VERSES%20Gallery%20FINAL%201-p-1600.png`}/></div>
                <div className='col mb-3'><SmallCard title={`Boss Beauties`} creator={`by Fatemeh Manfared`} link={`https://spatial.io/rooms/6226a6d81d7048000115b255?share=7771562277452031497`} ilink={`https://assets.website-files.com/5fe239511862dad3b1c6985a/6226a99651d8a356ca3fe93f_IMG_3813-p-1600.jpeg`}/></div>
                <div className='col mb-3'><SmallCard title={`Polygon Social`} creator={`by Creative Owls`} link={`https://spatial.io/rooms/61f72a0b43d810000180fabf?share=6107445247411531104`} ilink={`https://assets.website-files.com/5fe239511862dad3b1c6985a/621fbff41f5bf05bfecdf660_Screen%20Shot%202022-03-02%20at%202.05.13%20PM-p-1600.png`}/></div>
                <div className='col mb-3'><SmallCard title={`NOVO Gallery`} creator={`by Jarlan Perez`} link={`https://spatial.io/rooms/61247cc495b6ae000109a00a?share=2213543221889770341`} ilink={`https://assets.website-files.com/5fe239511862dad3b1c6985a/61b6b39d2963a95a3f6436ce_novo.png`}/></div>
                <div className='col mb-3'><SmallCard title={`VFXRio`} creator={`by VFXRio`} link={`https://assets.website-files.com/5fe239511862dad3b1c6985a/621fc14b5ac89a92311b9358_Screen%20Shot%202022-03-02%20at%202.10.55%20PM.png`} ilink={`https://assets.website-files.com/5fe239511862dad3b1c6985a/621fc14b5ac89a92311b9358_Screen%20Shot%202022-03-02%20at%202.10.55%20PM.png`}/></div>
                <div className='col mb-3'><SmallCard title={`ISOBLOCK`} creator={`by trashhand & Polycount`} link={`https://assets.website-files.com/5fe239511862dad3b1c6985a/62322fb2c5499440ad15e31a_isoblock_spatial_2847-p-1600.jpeg`} ilink={`https://assets.website-files.com/5fe239511862dad3b1c6985a/62322fb2c5499440ad15e31a_isoblock_spatial_2847-p-1600.jpeg`}/></div>
                <div className='col mb-3'><SmallCard title={`Spatial Park`} creator={`by Spatial`} link={`https://assets.website-files.com/5fe239511862dad3b1c6985a/61b6b39d2963a9d2856436bb_park.png`} ilink={`https://assets.website-files.com/5fe239511862dad3b1c6985a/61b6b39d2963a9d2856436bb_park.png`}/></div>
                <div className='col mb-3'><SmallCard title={`Meteor Shower`} creator={`by MBUS703`} link={`https://assets.website-files.com/5fe239511862dad3b1c6985a/625dbe4f319a0c34a5590b70_Screen%20Shot%202022-04-18%20at%203.38.42%20PM-p-1600.png`} ilink={`https://assets.website-files.com/5fe239511862dad3b1c6985a/625dbe4f319a0c34a5590b70_Screen%20Shot%202022-04-18%20at%203.38.42%20PM-p-1600.png`}/></div>
            </div>
        </div>
        <div className="container mb-5">
            <h1 className='text-center mt-5'>Creators are the Heart of Our Metaverse</h1>
            <p className='text-center text-secondary fs-5 mt-2'>Join Our Creators' Program </p>
            <div className="creatorsdiv">
            <img src={creators} className="w-100 m-3 creators" alt="" />
            <button  class="btn btn-secondary creatorsbtn" >Join</button>
            </div>
          
        </div>
    </div>
  )
}

export default Home2;