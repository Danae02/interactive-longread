import React, { useState, useEffect } from 'react';
import { ChevronDown, Users, TrendingUp, Building2, Info, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import StatsPopup from './popups/StatsPopup';
import ScalePopup from './popups/ScalePopup';
import FarmsPopup from './popups/FarmsPopup';
import IntroductionSection from './sections/text/00-IntroductionSection.jsx';
import './VeeIndustrieLongread.css';
import './Navigation.css';
import FooterSection from "./sections/text/FooterSection.jsx";;
import TimelineSection from "./sections/interactive/TimelineSection.jsx";
import HistoryIntroSection from "./sections/verleden/HistoryIntroSection.jsx";
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
                {/*<HistoryIntroSection/>*/}
                {/*<TimelineSection/>*/}
                <VerledenSection/>
            </section>

            {/* Statistieken Sectie - Add ID for navigation */}
            <section id="cijfers" className="stats-section bg-emerald-900 text-white py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="section-title text-4xl font-bold mb-16 text-center">De Cijfers</h2>
                    <div className="stats-grid grid md:grid-cols-3 gap-8">
                        {/* Dieren geslacht */}
                        <div className="stat-card bg-emerald-800 p-8 rounded-lg relative">
                            <div className="absolute top-4 right-4 flex gap-2">
                                <button
                                    onClick={() => setShowStatsPopup(true)}
                                    className="text-emerald-200 hover:text-white transition-colors"
                                    title="Bekijk gedetailleerde cijfers"
                                >
                                    <Info size={20}/>
                                </button>
                                <button
                                    onClick={() => setShowScalePopup(true)}
                                    className="text-emerald-200 hover:text-white transition-colors"
                                    title="Hoeveel is dit eigenlijk?"
                                >
                                    <HelpCircle size={20}/>
                                </button>
                            </div>
                            <Users className="mb-4" size={48}/>
                            <div className="stat-number text-5xl font-bold mb-2">533 miljoen dieren</div>
                            <div className="stat-label text-xl">Geslachte dieren per jaar</div>
                            <div className="text-sm text-emerald-200 mt-2">
                                Klik op de icoontjes voor meer informatie
                            </div>
                        </div>

                        {/* Omzet */}
                        <div className="stat-card bg-emerald-800 p-8 rounded-lg">
                            <TrendingUp className="mb-4" size={48}/>
                            <div className="stat-number text-5xl font-bold mb-2">€33,9 mrd</div>
                            <div className="stat-label text-xl">Jaarlijkse omzet</div>
                            <div className="text-sm text-emerald-200 mt-2">
                                <strong>Let op:</strong> Deze cijfers betreffen alleen de primaire veehouderij
                                (boerenbedrijven).
                                Verwerkende bedrijven, veevoerproducenten en distributeurs zijn niet meegenomen in deze
                                omzetcijfers.
                            </div>
                        </div>

                        {/* Veehouderijen */}
                        <div className="stat-card bg-emerald-800 p-8 rounded-lg relative">
                            <div className="absolute top-4 right-4">
                                <button
                                    onClick={() => setShowFarmsPopup(true)}
                                    className="text-emerald-200 hover:text-white transition-colors"
                                    title="Bekijk verdeling veehouderijen"
                                >
                                    <Info size={20}/>
                                </button>
                            </div>
                            <Building2 className="mb-4" size={48}/>
                            <div className="stat-number text-5xl font-bold mb-2">49.900</div>
                            <div className="stat-label text-xl">Veehouderijen</div>
                            <div className="text-sm text-emerald-200 mt-2">
                                Klik op het icoontje voor meer informatie
                            </div>
                        </div>
                    </div>
                    <p className="text-center text-emerald-200 mt-8 text-sm">
                        Bronnen: <a href="https://opendata.cbs.nl/#/CBS/nl/dataset/7123slac/table?fromstatweb"
                                    target="_blank" rel="noreferrer" className="underline hover:text-white">CBS
                        StatLine</a> & Wageningen Economic Research
                    </p>
                </div>
            </section>

            {/* Popup Components */}
            {showStatsPopup && <StatsPopup onClose={() => setShowStatsPopup(false)}/>}
            {showScalePopup && <ScalePopup onClose={() => setShowScalePopup(false)}/>}
            {showFarmsPopup && <FarmsPopup onClose={() => setShowFarmsPopup(false)}/>}



            <HedenSection></HedenSection>


            {/*/!* Toekomst sectie - Add ID for navigation *!/*/}
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