// App.jsx
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import VeeIndustrieLongread from "./components/VeeIndustrieLongread.jsx";
import InterviewsPage from "./components/InterviewsPage.jsx";
import KunstKennisCultuurPage from "./components/KunstKennisCultuurPage.jsx";
import Navigation from "./components/Navigation.jsx";

// Component om scroll gedrag te beheren
function ScrollManager() {
    const {pathname, hash, key} = useLocation();

    useEffect(() => {
        // Log voor debugging
        console.log('Location changed:', {pathname, hash, key});

        // Als we op de hoofdpagina zijn EN er is een hash
        if (pathname === '/' && hash) {
            console.log('Hash detected on homepage:', hash);

            // Haal het hash ID op zonder de #
            const elementId = hash.replace('#', '');

            // Wacht tot de pagina volledig geladen is
            const timer = setTimeout(() => {
                const element = document.getElementById(elementId);
                if (element) {
                    console.log('Scrolling to element:', elementId);
                    element.scrollIntoView({behavior: 'smooth'});
                } else {
                    console.log('Element not found, scrolling to top');
                    window.scrollTo({top: 0, behavior: 'smooth'});
                }
            }, 500); // Langere timeout voor zekerheid

            return () => clearTimeout(timer);
        }
        // Als we op de hoofdpagina zijn zonder hash
        else if (pathname === '/' && !hash) {
            console.log('No hash, scrolling to top');
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
        // Voor andere routes
        else {
            console.log('Different route, scrolling to top');
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
    }, [pathname, hash, key]);

    return null;
}

function App() {
    return (
        <Router>
            <ScrollManager />
            <Navigation />
            <Routes>
                <Route path="/" element={<VeeIndustrieLongread />} />
                <Route path="/interviews" element={<InterviewsPage />} />
                <Route path="/interviews/:id" element={<InterviewsPage />} />
                <Route path="/kunst-kennis-cultuur" element={<KunstKennisCultuurPage />} />
                {/* Optioneel: redirect oudere hashes */}
                <Route path="*" element={<VeeIndustrieLongread />} />
            </Routes>
        </Router>
    );
}

export default App;