import React from 'react';
import Logo from '../components/Logo';
import { Outlet } from 'react-router';
import AuthImage from '../assets/images/authImage.png'

const AuthLayouts = () => {
    return (
        <div className='container mx-auto'>
            <Logo></Logo>
            <div className='flex items-center'>
                <div className='flex-1'>
                    <Outlet></Outlet>
                </div>
                <div className='flex-1'>
                    <img src={AuthImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AuthLayouts;