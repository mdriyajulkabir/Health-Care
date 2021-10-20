import React from 'react';
import './About.css';
import Header from '../Home/Header/Header';
import leader1 from '../../Images/leader1.jpeg'
import leader2 from '../../Images/leader2.jpeg'
import leader3 from '../../Images/leader3.jpeg'
import Footer from '../Home/Footer/Footer';

const AboutUs = () => {
    return (
        <div>
            <Header></Header>
            <h1 className='text-center mt-5'>Oᴜʀ LᴇᴀᴅᴇʀSʜɪᴘ Tᴇᴀᴍ</h1>
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 py-5 text-center">
                    <p>
                        Our home health care management team is highly <br /> experienced in delivering exceptional care and support <br /> for clients – regardless of age or specific medical needs.

                    </p>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 py-5 text-center">
                    <p>
                        The leadership team at NanoCare discusses what home <br /> care means to them and how NanoCare is changing <br /> the way the world ages. Your health is our first Priority.
                    </p>
                </div>
            </div>
            <div className="row my-3 mx-5 px-5">
                <div className="col-lg-4 col-md-4 col-sm-12 text-center">
                    <img src={leader1} className='img-fluid mb-3' alt="" />
                    <h3>Keira Knightley</h3>
                    <h5>CEO/Chief</h5>
                    <p>For her role at the helm of NanoCare, Keira has been honored as Women Health Care Executives 2016 Woman of the Year.</p>
                    <i class="fab fa-facebook fs-3 px-2"></i>
                <i class="fab fa-instagram-square fs-3 px-2"></i>
                <i class="fab fa-twitter fs-3 px-2"></i>
                <i class="fab fa-staylinked fs-3 px-2"></i>

                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 text-center">
                    <img src={leader2} className='img-fluid mb-3' alt="" />
                    <h3>John henry</h3>
                    <h5>CEO/President</h5>
                    <p>John Henry is the co-founder of NanoCare. He has over 27 years of financial and business management experience</p>
                    <i class="fab fa-facebook fs-3 px-2"></i>
                <i class="fab fa-instagram-square fs-3 px-2"></i>
                <i class="fab fa-twitter fs-3 px-2"></i>
                <i class="fab fa-staylinked fs-3 px-2"></i>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 text-center">
                    <img src={leader3} className='img-fluid mb-3' alt="" />
                    <h3>Sophia Jabola</h3>
                    <h5>VP of Franchise Development</h5>
                    <p>She is currently responsible for the day-t-day operations of the Payroll, Billing and Collection Departments</p>
                    <i class="fab fa-facebook fs-3 px-2"></i>
                <i class="fab fa-instagram-square fs-3 px-2"></i>
                <i class="fab fa-twitter fs-3 px-2"></i>
                <i class="fab fa-staylinked fs-3 px-2"></i>
                </div>
            </div>
            <div className='text-center p-5'>
                <h1>Oᴜʀ Mɪꜱꜱɪᴏɴ & Vɪꜱɪᴏɴ</h1>
            <div className="row my-5">
                <div className="col-lg-6 col-md-6 col-sm-12 px-5 mission-history">
                    <p className='mission-history'>NanoCare is committed to providing high-quality health care services to individual clients and their families, as well as to other healthcare organizations in need of supplemental staffing (such as certified home health and hospice agencies, health plans, hospitals, nursing homes and assisted living facilities).</p>
                    <p>Our priority is to provide state-of-the-art and compassionate in-home care from highly-trained medical professionals and aides. To make good on this promise, proper training is paramount. Not only do we hire the most experienced personnel, but we provide them with in-depth disease-specific training so that they can deliver specialized care to our clients.</p>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 px-5 mission-history">
                    <p>At NanoCare, we believe everyone should have the opportunity to live a healthy, active and fulfilling life. This ethos is at the heart of everything we do.</p>
                    <p>We provide everyone we support with the opportunity to continue to live life to the full. We actively encourage Service Users to become more self-reliant, to make decisions for themselves, and ultimately, to move on to more independent living arrangements.</p>
                    <p>We facilitate and support our Service Users to pursue meaningful and personalised lifestyles. We provide individually planned education & leisure opportunities to support each individual in their ongoing development.</p>
                </div>
            </div>
            </div>
            <div className='text-center p-5'>
                <h1>𝙊𝙪𝙧 𝙋𝙧𝙤𝙪𝙙 𝙃𝙞𝙨𝙩𝙤𝙧𝙮</h1>
            <div className="row my-5">
                <div className="col-lg-6 col-md-6 col-sm-12 px-5 mission-history">
                    <p>NanoCare is committed to providing high-quality health care services to individual clients and their families, as well as to other healthcare organizations in need of supplemental staffing (such as certified home health and hospice agencies, health plans, hospitals, nursing homes and assisted living facilities).</p>
                    <p>Our priority is to provide state-of-the-art and compassionate in-home care from highly-trained medical professionals and aides. To make good on this promise, proper training is paramount. Not only do we hire the most experienced personnel, but we provide them with in-depth disease-specific training so that they can deliver specialized care to our clients.</p>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 px-5 mission-history">
                    <p>At NanoCare, we believe everyone should have the opportunity to live a healthy, active and fulfilling life. This ethos is at the heart of everything we do.</p>
                    <p>We provide everyone we support with the opportunity to continue to live life to the full. We actively encourage Service Users to become more self-reliant, to make decisions for themselves, and ultimately, to move on to more independent living arrangements.</p>
                    <p>We facilitate and support our Service Users to pursue meaningful and personalised lifestyles. We provide individually planned education & leisure opportunities to support each individual in their ongoing development.</p>
                </div>
            </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AboutUs;