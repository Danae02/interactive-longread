// App.jsx
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import VeeIndustrieLongread from "./components/VeeIndustrieLongread.jsx";
import InterviewsPage from "./components/InterviewsPage.jsx";
import KunstKennisCultuurPage from "./components/KunstKennisCultuurPage.jsx";
import Navigation from "./components/Navigation.jsx";
import WatKanIkDoenPage from "./components/WatKanIkDoenPage.jsx";

function App() {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path="/" element={<VeeIndustrieLongread />} />
                <Route path="/interviews" element={<InterviewsPage />} />
                <Route path="/interviews/:id" element={<InterviewsPage />} />
                <Route path="/kunst-kennis-cultuur" element={<KunstKennisCultuurPage />} />
                <Route path="/wat-kan-ik-doen" element={<WatKanIkDoenPage />} />
            </Routes>
        </Router>
    );
}

export default App;