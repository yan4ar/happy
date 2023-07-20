import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Services from '../pages/Services'
import MainPage from '../pages/MainPage'
import Free from '../pages/Free'
import About from '../pages/About';
import Salepages from '../pages/Salepages'

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to='/mainPage' />} />
            <Route path='/mainPage' element={<MainPage />} />

            <Route path='/' element={<Navigate to='/services' />} />
            <Route path='/services' element={<Services />} />

            <Route path='/' element={<Navigate to='/free' />} />
            <Route path='/free' element={<Free />} />

            <Route path='/' element={<Navigate to='/about' />} />
            <Route path='/about' element={<About />} />

            <Route path='/' element={<Navigate to='/salepages' />} />
            <Route path='/salepages' element={<Salepages />} />
        </Routes>
    );
}

export default Routers;