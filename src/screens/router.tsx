import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Home } from './home-screen/home.screen';
import { PageNotFound } from './not-found/not-found.screen';
import { PairDetails } from './pair-details/pair-details.screen';
import { Pair } from './pair/pair.screen';

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:pair" element={<Pair />} errorElement={<PageNotFound />}/>
            <Route path="/:pair/details" element={<PairDetails />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}