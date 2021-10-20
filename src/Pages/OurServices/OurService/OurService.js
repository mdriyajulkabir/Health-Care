import React from 'react';

const OurService = ({service}) => {
    const {departmentName, description, availableDoctor, url} = service;
    return (
        <div>
            <div className="col">
    <div className="card h-100">
      <img src={url} className="card-img-top " height="300px" alt="" />
      <div className="card-body">
        <h5 className="card-title">{departmentName}</h5>
        <p className="card-text">{description}.</p>
        <p>Doctor: {availableDoctor}</p>
      </div>
    </div>
  
</div>
        </div>
    );
};

export default OurService;