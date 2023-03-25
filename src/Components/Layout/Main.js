import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Share/Header/Header';
import Navbar from '../Share/Nabvar/Navbar';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Navbar></Navbar>

        </div>
    );
};

export default Main;