import React from 'react';
import { Link } from 'react-router-dom';

const Services = ({service}) => {
    const {id,departmentName, description, availableDoctor, url} = service;
    return (
        <div>
            
  <div className="col">
    <div className="card h-100">
      <img src={url} className="card-img-top h-25 w-100 " alt="" />
      <div className="card-body">
        <h5 className="card-title">{departmentName}</h5>
        <p className="card-text">{description}.</p>
        <p>Available Doctor: {availableDoctor}</p>
        <Link className='d-flex details justify-content-center mx-5 rounded-pill py-3' style={{ textDecoration:'none'}} to={`/details/${id}`}>Details</Link>
      </div>
    </div>
  
</div>
        </div>
    );
};

export default Services;