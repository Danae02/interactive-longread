import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VeeIndustrieLongread from "./components/VeeIndustrieLongread.jsx";
import InterviewsPage from "./components/InterviewsPage.jsx";
import KunstCultuurPage from "./components/KunstCultuurPage.jsx";
import Navigation from "./components/Navigation.jsx";
import WatKanIkDoenPage from "./components/WatKanIkDoenPage.jsx";

function App() {
    return (
        <Router>
            <Navigation /> {/* Voeg Navigation toe boven alle routes */}
            <Routes>
                <Route path="/" element={<VeeIndustrieLongread />} />
                <Route path="/interviews" element={<InterviewsPage />} />
                <Route path="/interviews/:id" element={<InterviewsPage />} />
                <Route path="/kunst-cultuur" element={<KunstCultuurPage />} />
                <Route path="/wat-kan-ik-doen" element={<WatKanIkDoenPage />} />
            </Routes>
        </Router>
    );
}

export default App;