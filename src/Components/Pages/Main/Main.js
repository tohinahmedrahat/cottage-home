import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import NavBar from '../NavBar/NavBar';
import TopBar from '../TopBar/TopBar';

const Main = () => {
    return (
        <div >
            <TopBar></TopBar>
            <NavBar></NavBar>
            <div className='overflow-hidden'>
            <Outlet></Outlet>
            </div>
            
            <Footer></Footer>
        </div>
    );
};

export default Main;