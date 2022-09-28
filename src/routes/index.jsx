import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from '../screens/Home';
import { Flavors } from '../screens/Flavors';
import { Info } from '../screens/Info';

export default function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exct path='/' element={<Home />} />
                <Route path='/sabores' element={<Flavors />} />
                <Route path='/sobre' element={<Info />}/>
            </Routes>
        </BrowserRouter>
    );
}