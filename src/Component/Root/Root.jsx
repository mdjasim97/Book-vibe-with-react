import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        <div className='mx-36'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;