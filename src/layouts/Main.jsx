import React from 'react';
import Header from '../components/shared/Header/header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/shared/footer/Footer';

const Main = () => {
    return (
        <div className="overflow-x-hidden">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;