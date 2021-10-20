import React, { useEffect, useState } from 'react';
import Footer from '../../Home/Footer/Footer';
import Header from '../../Home/Header/Header';
import OurDoctor from '../OurDoctor/OurDoctor';
import './OurDoctor.css'


const OurDoctors = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(()=>{
        fetch('./ourDoctor.json')
        .then(result=>result.json())
        .then(data=>setDoctors(data))
    },[])
    return (
        <>
        <div>
            <Header></Header>
        </div>
        <div className='mt-5 our-doctor'>
            <div className='text-center'>
                <h1>Meet Our Doctors</h1>
                <p>We’re lanced most powerful treatment system. They are making beautifully.</p>
            </div>
            <div className="p-5 row row-cols-1 row-cols-md-3 g-3">
                {
                    doctors.map(doctor=><OurDoctor
                    key={doctor.id}
                    doctor = {doctor}
                    ></OurDoctor>)
                }
            </div>
        </div>
        <Footer></Footer>
        </>
    );
};

export default OurDoctors;