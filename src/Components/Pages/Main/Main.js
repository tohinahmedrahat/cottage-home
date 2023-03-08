import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import NavBar from '../NavBar/NavBar';
import TopBar from '../TopBar/TopBar';

const Main = () => {
    return (
        <div className='overflow-hidden'>
            <TopBar></TopBar>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;