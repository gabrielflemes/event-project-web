import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
// import Page1 from './Page1';
// import Page2 from './Page2';

export default function Rotas(): JSX.Element {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path="/" />
                <Route element={<Home />} path="/home" />
                {/* <Route element={<Page1 />} path="/page1" />
                <Route element={<Page2 />} path="/page2" /> */}
            </Routes>
        </BrowserRouter>
    )
}