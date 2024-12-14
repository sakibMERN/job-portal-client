import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/shared/navbar';
import Footer from '../pages/shared/Footer';

const MainLayout = () => {
    return (
        <div className='max-w-7xl mx-auto space-y-10'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;