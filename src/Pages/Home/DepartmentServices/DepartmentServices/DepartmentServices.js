import React, { useEffect, useState } from 'react';
import Services from '../Services/Services';

const DepartmentServices = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('./departmentServices.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <>
        <div className="mt-5">
        
        <h1 className="text-center">We Provide Most Proffesional Service
Since 1978</h1>
        
            
        <h3 className="text-center mb-5">We Specialize In</h3>
        
        <div className="px-5 row row-cols-1 row-cols-md-3 gy-3">
            {
                services.map(service => <Services
                key={service.id}
                service={service}
                ></Services>)
            }
        </div>
        </div>
        </>
    );
};

export default DepartmentServices;