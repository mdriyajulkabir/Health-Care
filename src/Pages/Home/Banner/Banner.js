import React from 'react';
import banner from '../../../Images/banner.jfif';
// import banner2 from '../../../Images/banner2.jpg';
const Banner = () => {
    return (
        <div className='mt-3 row'>
            <div className='d-flex align-items-center col-lg-6 col-md-6 col-sm-12'>
                <div className="ps-5">
                <h2><i className="fas fa-hand-holding-medical text-end">Support Life</i></h2>
                <h1>Best Medical &</h1>
                <h1>Health Care Center</h1>
                <h4>
                Your Health Our First Priority.
                </h4>
                <p>
                    Not sure what is going on, come in Today for a Symptom <br />
                    Check up, There are many kind of process!!
                </p>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
                <img className="img-fluid" src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;