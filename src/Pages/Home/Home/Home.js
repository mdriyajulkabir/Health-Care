import React from 'react';
import Banner from '../Banner/Banner';
import DepartmentServices from '../DepartmentServices/DepartmentServices/DepartmentServices';
import Footer from '../Footer/Footer';
import HaveQuestion from '../HaveQuestion/HaveQuestion';
import Header from '../Header/Header';
import SpecialistDoctor from '../SpecialistDoctor/SpecialistDoctor/SpecialistDoctor';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <DepartmentServices></DepartmentServices>
            <SpecialistDoctor></SpecialistDoctor>
            <HaveQuestion></HaveQuestion>
            <Footer></Footer>
        </div>
    );
};

export default Home;