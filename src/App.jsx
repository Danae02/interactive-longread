import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VeeIndustrieLongread from "./components/VeeIndustrieLongread.jsx";
import NaamStrijdSpel from "./components/sections/interactive/game/NaamStrijdSpel.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<VeeIndustrieLongread />} />
                <Route path="/naam-strijd-spel" element={<NaamStrijdSpel />} />
            </Routes>
        </Router>
    );
}

export default App