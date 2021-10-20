import React from 'react';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import Footer from '../Home/Footer/Footer';
import Header from '../Home/Header/Header';
import './Details.css'

const Details = () => {
    const {services} = useAuth()
    console.log(services)
    const {id} = useParams();
    const matchdetails = services.find((detail)=>detail.id===Number(id))
    // const selected = (matchdetails?.id)
    return (
        <div>
            <Header></Header>
            <div className="px-5 row my-5 gy-3 ">
            <div className="col d-flex justify-content-center">
    <div className="card details w-25 h-100">
      <img src={matchdetails?.url} className="card-img-top h-50 w-100 " alt="" />
      <div className="card-body">
        <h5 className="card-title">{matchdetails?.departmentName}</h5>
        <p className="card-text">{matchdetails?.description}</p>
        <p>Available Doctor: {matchdetails?.availableDoctor}</p>
      </div>
    </div>
    </div>
    </div>
    <Footer></Footer>
        </div>
    );
};

export default Details;