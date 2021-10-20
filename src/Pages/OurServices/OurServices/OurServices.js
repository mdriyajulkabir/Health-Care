import React, { useEffect, useState } from 'react';
import Footer from '../../Home/Footer/Footer';
import Header from '../../Home/Header/Header';
import OurService from '../OurService/OurService';

const OurServices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./ourServices.json')
            .then(result => result.json())
            .then(data => setServices(data))
    }, [])
    return (
        <>
            <Header></Header>
            <div className="mt-5">
                <h1 className="text-center">We Provide Most Proffesional Service
                    Since 1978</h1>
                <h1 className="text-center">HounLare professional services</h1>
                <p className="text-center mb-5">Why HounLare services is best all time since 1990. desires to obtain of itself, because it is pain, but because
                    occasionally circumstance procure him some great deals.</p>
                

                <div className="px-5 row row-cols-1 row-cols-md-3 gy-3">
                    {
                        services.map(service => <OurService
                            key={service.id}
                            service={service}
                        ></OurService>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default OurServices;