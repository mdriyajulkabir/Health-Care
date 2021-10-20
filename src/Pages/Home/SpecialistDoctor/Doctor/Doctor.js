import React from 'react';

const Doctor = ({ doctor }) => {
    const { name, qualification, subject, time, doctor_url } = doctor;
    return (
        <div>

            <div className="col">
                <div className="card h-100">
                    <img src={doctor_url} className="card-img-top" height='275px' alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{qualification}.</p>
                        <p>Specialist: {subject}</p>
                        <p>Time: {time}</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Doctor;