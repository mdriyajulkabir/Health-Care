import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const SpecialistDoctor = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(()=>{
        fetch('./specialistDoctor.json')
        .then(result => result.json())
        .then(data=> setDoctors(data))
    },[])
    return (
        <div className='mt-5'>
            <div className='text-center'>
                <h1>Meet Our Doctors</h1>
                <p>We’re lanced most powerful treatment system. They are making beautifully.</p>
            </div>
            <div className="p-5 row row-cols-1 row-cols-md-3 g-3">
                {
                    doctors.map(doctor=><Doctor
                    doctor = {doctor}
                    ></Doctor>)
                }
            </div>
        </div>
    );
};

export default SpecialistDoctor;