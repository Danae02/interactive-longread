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
import FirstSection from "./sections/text/HistoryIntroSection.jsx";
import SecondSection from "./sections/text/SecondSection.jsx";
import ThirdSection from "./sections/text/ThirdSection.jsx";
import FooterSection from "./sections/text/FooterSection.jsx";
import PollSection from "./sections/interactive/PollSection.jsx";
import TimelineSection from "./sections/interactive/TimelineSection.jsx";
import VideoSection from "./sections/interactive/VideoSection.jsx";
import Cards from "./sections/interactive/Cards.jsx";
import HistoryIntroSection from "./sections/text/HistoryIntroSection.jsx";
import CardsSection from "./sections/interactive/CardsSection.jsx";
import InterviewsSection from "./sections/interactive/InterviewsSection.jsx";

export default function VeeIndustrieLongread() {
    const [scrollY, setScrollY] = useState(0);
    const [showStatsPopup, setShowStatsPopup] = useState(false);
    const [showScalePopup, setShowScalePopup] = useState(false);
    const [showFarmsPopup, setShowFarmsPopup] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="longread-container bg-neutral-900 text-neutral-100">
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
                <HistoryIntroSection/>
                <TimelineSection/>
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

            {/* Heden sectie - Add ID for navigation */}
            <section id="heden">

                <CardsSection/>

                {/* Parallax Beeld 2 */}
                <div className="parallax-section relative h-96 flex items-center justify-center overflow-hidden">
                    <div
                        className="parallax-background absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(https://images.unsplash.com/photo-1560493676-04071c5f467b?w=1600)',
                            transform: `translateY(${(scrollY - 1000) * 0.3}px)`
                        }}
                    />
                    <blockquote className="parallax-quote relative z-10 text-center px-6 max-w-3xl">
                        <p className="text-3xl md:text-4xl font-light italic">
                            "Nulla nec erat et metus auctor faucibus."
                        </p>
                    </blockquote>
                </div>

                <InterviewsSection/>

                <PollSection/>
                <SecondSection/>

                {/* Parallax Beeld 3 */}
                <div className="parallax-section relative h-96 flex items-center justify-center overflow-hidden">
                    <div
                        className="parallax-background absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1600)',
                            transform: `translateY(${(scrollY - 2500) * 0.3}px)`
                        }}
                    />
                    <div className="parallax-stat relative z-10 text-center px-6">
                        <div className="text-7xl font-bold mb-4">...</div>
                        <div className="text-2xl">Feitje</div>
                    </div>
                </div>

                {/*<DefaultAudioSection/>*/}
            </section>

            {/* Interviews sectie - Add ID for navigation */}
            <section id="interviews">
                <ThirdSection/>
            </section>

            {/* Toekomst sectie - Add ID for navigation */}
            <section id="toekomst">
                <VideoSection/>
            </section>

            {/* Actie sectie - Add ID for navigation */}
            <section id="actie">
                <FooterSection/>
            </section>
        </div>
    );
}