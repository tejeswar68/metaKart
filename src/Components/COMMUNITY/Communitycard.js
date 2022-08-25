import React from 'react';
// import { Card } from 'react-bootstrap';

function Communitycard({tag, title, date, ilink}) {
  return (
    <div className="card  border-white mb-3 " style={{maxWidth: "540px", borderRadius: '10px',backgroundColor:'#D8C3A5'}}>
        <div className="row g-0">
            <div className="col-md-4">
            <img src={ilink} className="img-fluid  h-100 p-1" style={{borderRadius: '10px'}} alt="..." />
            </div>
            <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title">{tag}</h5>
                <p className="card-text">{title}</p>
                <p className="card-text"><small className="text-muted">{date}</small></p>
            </div>
            </div>
        </div>
        </div>
  )
}

export default Communitycard