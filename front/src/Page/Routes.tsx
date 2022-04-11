import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EventDetail from '../Components/EventDetail';
import Home from './Home';

export default function Rotas(): JSX.Element {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path="/" />
                <Route element={<Home />} path="/home" />
                <Route element={<EventDetail/>} path="/event/:id"/>
            </Routes>
        </BrowserRouter>
    )
}