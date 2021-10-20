import React from 'react';
import Header from '../Home/Header/Header';
import './ContactUs.css'
import banner from '../../Images/contactBanner.jpg';
import building1 from '../../Images/building1.jpg';
import building2 from '../../Images/building2.jpg';
import building3 from '../../Images/building3.jpg';
import Footer from '../Home/Footer/Footer';

const ContactUs = () => {
    return (
        <div>
            <Header></Header>
            <img src={banner} className='w-100' alt="" />
            <h1 className='text-center mt-5 mb-4'>Ｃｏｎｔａｃｔ Ｗｉｔｈ Ｕｓ</h1>
            <p className='text-center'>Really we are help you as soon as posible. diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum!!</p>
            <div className='row my-5 px-5'>
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <img src={building1} className='img-fluid' alt="" />
                    <h1 className='text-center'>Our Main Office</h1>
                    <h2 className='text-center'><i class="fas fa-hospital-user"></i></h2>
                    <p className='text-center'>House 48 Rd No 9A, Dhaka 1209</p>
                    <p className='text-center'>Bangladesh</p>
                    <i class="fas fa-phone-square-alt d-flex justify-content-center"> +880 17064-61276</i>
                    <button className='rounded-pill py-3 px-5 mt-3 appointment-btn d-flex justify-content-center mx-auto'>Appointment</button>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <img src={building2} className='img-fluid' alt="" />
                    <h1 className='text-center'>Los Angels</h1>
                    <h2 className='text-center'><i class="fas fa-clinic-medical"></i></h2>
                    <p className='text-center'>2020 Beston Icecare Apt. 896, Venaville 202020</p>
                    <p className='text-center'>United State</p>
                    <i class="fas fa-phone-square-alt text-center d-flex justify-content-center"> +1 212-746-5454</i>
                    <button className='rounded-pill py-3 px-5 mt-3 appointment-btn d-flex justify-content-center mx-auto'>Appointment</button>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <img src={building3} className='img-fluid' alt="" />
                    <h1 className='text-center'>Las Vegas</h1>
                    <h2 className='text-center'><i class="fas fa-city"></i></h2>
                    <p className='text-center'>Whitechapel Rd, London E1 1FR</p>
                    <p className='text-center'>United Kingdom</p>
                    <i class="fas fa-phone-square-alt text-center d-flex justify-content-center"> +44 20 7377 7000</i>
                    <button className='rounded-pill py-3 px-5 mt-3 appointment-btn d-flex justify-content-center mx-auto'>Appointment</button>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ContactUs;