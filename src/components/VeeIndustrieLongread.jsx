import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import Navigation from './Navigation';
import StatsPopup from './popups/StatsPopup';
import ScalePopup from './popups/ScalePopup';
import FarmsPopup from './popups/FarmsPopup';
import IntroductionSection from './sections/text/00-IntroductionSection.jsx';
import './VeeIndustrieLongread.css';
import './Navigation.css';
import FooterSection from "./sections/text/FooterSection.jsx";
import HedenSection from "./sections/heden/HedenSection.jsx";
import ToekomstSection from "./sections/toekomst/ToekomstSection.jsx";
import ConclusieSection from "./sections/text/ConclusieSection.jsx";
import VerledenSection from "./sections/verleden/VerledenSection.jsx";

export default function VeeIndustrieLongread() {
    const [scrollY, setScrollY] = useState(0);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [showStatsPopup, setShowStatsPopup] = useState(false);
    const [showScalePopup, setShowScalePopup] = useState(false);
    const [showFarmsPopup, setShowFarmsPopup] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // 🔥 CRITIEKE FIX: Forceer scroll naar top bij mount
    useEffect(() => {
        console.log('🔍 VeeIndustrieLongread mounting - forcing to top');

        // 1. Zet browser scroll restoration uit
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }

        // 2. Verwijder hash uit URL
        if (window.location.hash) {
            window.history.replaceState(null, null, window.location.pathname + window.location.search);
            console.log('🔍 Hash removed from URL');
        }

        // 3. Forceer scroll naar top - meerdere methoden voor betrouwbaarheid
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

        // 4. Extra scroll na korte delay voor de zekerheid
        const forceScroll = () => {
            if (window.scrollY > 0) {
                console.log(`🔍 Still scrolled down to ${window.scrollY}, forcing to top`);
                window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
                return true;
            }
            return false;
        };

        // Probeer meerdere keren
        forceScroll();
        setTimeout(forceScroll, 10);
        setTimeout(forceScroll, 50);
        setTimeout(forceScroll, 100);
        setTimeout(forceScroll, 200);

        // 5. Blijf controleren voor de eerste 2 seconden
        let scrollCheckInterval;
        let attempts = 0;
        const maxAttempts = 40; // 2 seconden bij 50ms interval

        scrollCheckInterval = setInterval(() => {
            attempts++;
            if (window.scrollY > 50 && attempts < maxAttempts) {
                console.log(`🔍 Scroll check ${attempts}: at ${window.scrollY}, correcting...`);
                window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
            } else if (attempts >= maxAttempts) {
                clearInterval(scrollCheckInterval);
                console.log('🔍 Stopped scroll correction');
            }
        }, 50);

        return () => {
            if (scrollCheckInterval) clearInterval(scrollCheckInterval);
        };
    }, []); // ✅ Lege dependency array: alleen bij eerste mount

    // Bestaande scroll tracking
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);

            // Bereken scroll percentage
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollable = documentHeight - windowHeight;
            const scrolled = window.scrollY;
            const progress = (scrolled / scrollable) * 100;

            setScrollProgress(progress);

            // Check if scrolled past hero for mobile visibility
            setIsScrolled(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Call initially to set progress
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="longread-container bg-neutral-900 text-neutral-100">
            {/* Scroll Progress Bar - FIXED bovenaan, onder de navigation */}
            <div
                className="fixed left-0 w-full z-[60] transition-all duration-300"
                style={{
                    top: '80px', // Plaats onder de navigation (h-20 = 80px)
                    opacity: isScrolled ? 1 : 0.7 // Minder zichtbaar bovenaan
                }}
            >
                <div className="relative">
                    {/* Progress percentage indicator - alleen tonen als niet 0% of 100% */}
                    {scrollProgress > 0 && scrollProgress < 100 && (
                        <div
                            className="absolute right-4 -top-8 bg-neutral-800 text-white text-xs font-medium px-2 py-1 rounded shadow-lg z-[70]"
                            style={{ opacity: isScrolled ? 1 : 0.5 }}
                        >
                            {Math.round(scrollProgress)}%
                        </div>
                    )}

                    {/* Progress bar */}
                    <div className="w-full h-1.5 bg-neutral-800/50 backdrop-blur-sm">
                        <div
                            className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 transition-all duration-150 ease-out shadow-lg"
                            style={{ width: `${scrollProgress}%` }}
                        />
                    </div>
                </div>
            </div>

            {/* Navigation Component */}
            <Navigation />

            {/* Hero Section met Parallax */}
            <section className="hero-section relative h-screen flex items-center justify-center overflow-hidden">
                <div
                    className="hero-background absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(https://mla20yrfoj5x.i.optimole.com/cb:CQ-e.5ba07/w:1200/h:799/q:90/f:best/sm:0/ig:avif/https://weanimals.org/wp-content/uploads/2022/10/WAM26923.jpg)',
                        transform: `translateY(${scrollY * 0.5}px)`
                    }}
                />

                <div className="hero-content relative z-10 text-center px-6 max-w-4xl">
                    <h1 className="hero-title text-6xl md:text-7xl font-bold mb-6 leading-tight">
                        Achter de Schermen van de Vee-industrie
                    </h1>
                    <p className="hero-subtitle text-2xl md:text-3xl text-neutral-300 mb-8">
                        Wie bepaalt wat we eten?
                    </p>
                    <ChevronDown className="animate-bounce mx-auto" size={48}/>
                </div>
            </section>

            {/* Introductie - Add ID for navigation */}
            <section id="introductie">
                <IntroductionSection/>
            </section>

            {/* Timeline - Add ID for navigation */}
            <section id="verleden">
                <VerledenSection/>
            </section>

            {/* Popup Components */}
            {showStatsPopup && <StatsPopup onClose={() => setShowStatsPopup(false)}/>}
            {showScalePopup && <ScalePopup onClose={() => setShowScalePopup(false)}/>}
            {showFarmsPopup && <FarmsPopup onClose={() => setShowFarmsPopup(false)}/>}

            <HedenSection></HedenSection>

            {/* Toekomst sectie - Add ID for navigation */}
            <section id="toekomst">
                <ToekomstSection/>
            </section>

            <section id="">
                <ConclusieSection/>
            </section>

            {/* Actie sectie - Add ID for navigation */}
            <section id="actie">
                <FooterSection/>
            </section>
        </div>
    );
}