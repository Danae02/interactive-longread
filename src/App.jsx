// App.jsx
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import VeeIndustrieLongread from "./components/VeeIndustrieLongread.jsx";
import InterviewsPage from "./components/InterviewsPage.jsx";
import KunstKennisCultuurPage from "./components/KunstKennisCultuurPage.jsx";
import Navigation from "./components/Navigation.jsx";
import WatKanIkDoenPage from "./components/WatKanIkDoenPage.jsx";

// Component om naar boven te scrollen bij route verandering
function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        // Scroll naar boven bij elke route verandering
        window.scrollTo(0, 0);

        // Extra: verwijder hash uit URL als die er is
        if (window.location.hash) {
            // Verwijder hash zonder pagina te herladen
            window.history.replaceState(null, null, ' ');
        }
    }, [pathname]);

    return null;
}

function App() {
    return (
        <Router>
            <ScrollToTop />
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