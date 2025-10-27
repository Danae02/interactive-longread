import React, { useState, useEffect } from 'react';
import { ChevronDown, Users, TrendingUp, Building2, AlertCircle, Info, HelpCircle } from 'lucide-react';
import StatsPopup from './popups/StatsPopup';
import ScalePopup from './popups/ScalePopup';
import FarmsPopup from './popups/FarmsPopup';
import IntroductionSection from './sections/IntroductionSection';
import './VeeIndustrieLongread.css';

export default function VeeIndustrieLongread() {
    const [scrollY, setScrollY] = useState(0);
    const [pollVote, setPollVote] = useState(null);
    const [showPollResults, setShowPollResults] = useState(false);
    const [showStatsPopup, setShowStatsPopup] = useState(false);
    const [showScalePopup, setShowScalePopup] = useState(false);
    const [showFarmsPopup, setShowFarmsPopup] = useState(false);
    const [pollResults, setPollResults] = useState({
        transparanter: 42,
        strengereRegels: 38,
        onafhankelijkOnderzoek: 56,
        statusQuo: 12
    });

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handlePollVote = (option) => {
        setPollVote(option);
        setShowPollResults(true);
        setPollResults(prev => ({
            ...prev,
            [option]: prev[option] + 1
        }));
    };

    const totalVotes = Object.values(pollResults).reduce((a, b) => a + b, 0);

    return (
        <div className="longread-container bg-neutral-900 text-neutral-100">
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
                    <ChevronDown className="animate-bounce mx-auto" size={48} />
                </div>
            </section>

            {/* Introductie */}
            <IntroductionSection />



            {/* Statistieken Sectie */}
            <section className="stats-section bg-emerald-900 text-white py-24 px-6">
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
                                    <Info size={20} />
                                </button>
                                <button
                                    onClick={() => setShowScalePopup(true)}
                                    className="text-emerald-200 hover:text-white transition-colors"
                                    title="Hoeveel is dit eigenlijk?"
                                >
                                    <HelpCircle size={20} />
                                </button>
                            </div>
                            <Users className="mb-4" size={48} />
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
                                <strong>Let op:</strong> Deze cijfers betreffen alleen de primaire veehouderij (boerenbedrijven).
                                Verwerkende bedrijven, veevoerproducenten en distributeurs zijn niet meegenomen in deze omzetcijfers.
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
                                    <Info size={20} />
                                </button>
                            </div>
                            <Building2 className="mb-4" size={48} />
                            <div className="stat-number text-5xl font-bold mb-2">49.900</div>
                            <div className="stat-label text-xl">Veehouderijen</div>
                            <div className="text-sm text-emerald-200 mt-2">
                                Klik op het icoontje voor meer informatie
                            </div>
                        </div>
                    </div>
                    <p className="text-center text-emerald-200 mt-8 text-sm">
                        Bronnen: <a href="https://opendata.cbs.nl/#/CBS/nl/dataset/7123slac/table?fromstatweb" target="_blank" rel="noreferrer" className="underline hover:text-white">CBS StatLine</a> & Wageningen Economic Research
                    </p>
                </div>
            </section>

            {/* Popup Components */}
            {showStatsPopup && <StatsPopup onClose={() => setShowStatsPopup(false)} />}
            {showScalePopup && <ScalePopup onClose={() => setShowScalePopup(false)} />}
            {showFarmsPopup && <FarmsPopup onClose={() => setShowFarmsPopup(false)} />}

            {/* Rest van de component blijft hetzelfde */}
            {/* Hoofdverhaal 1 */}
            <section className="content-section bg-white text-neutral-900 py-24 px-6">
                <article className="article-content max-w-3xl mx-auto">
                    <h2 className="article-title text-4xl font-bold mb-8">Het Lobbynetwerk</h2>
                    <p className="text-xl leading-relaxed mb-6">
                        De vee-industrie heeft een uitgebreid netwerk van belangenorganisaties opgebouwd. LTO Nederland, de grootste landbouworganisatie, heeft directe lijnen naar Den Haag. Wekelijks vinden er gesprekken plaats met beleidsmakers en Kamerleden.
                    </p>
                    <p className="text-xl leading-relaxed mb-6">
                        "De invloed is substantieel," vertelt een anonieme ambtenaar van het ministerie van Landbouw. "Bij elk nieuw beleid wordt eerst overlegd met de sector. Dat is logisch, maar de balans met andere belangen zoals milieu en volksgezondheid is soms zoek."
                    </p>
                </article>
            </section>

            {/* Parallax Beeld 2 */}
            <section className="parallax-section relative h-96 flex items-center justify-center overflow-hidden">
                <div
                    className="parallax-background absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(https://images.unsplash.com/photo-1560493676-04071c5f467b?w=1600)',
                        transform: `translateY(${(scrollY - 1000) * 0.3}px)`
                    }}
                />
                <blockquote className="parallax-quote relative z-10 text-center px-6 max-w-3xl">
                    <p className="text-3xl md:text-4xl font-light italic">
                        "Bij elk nieuw beleid wordt eerst overlegd met de sector"
                    </p>
                </blockquote>
            </section>

            {/* Poll Sectie */}
            <section className="poll-section bg-neutral-800 py-24 px-6">
                <div className="max-w-2xl mx-auto">
                    <h2 className="poll-title text-3xl font-bold mb-8 text-center">Wat vind jij?</h2>
                    <div className="poll-card bg-neutral-700 p-8 rounded-lg">
                        {!showPollResults ? (
                            <>
                                <p className="poll-question text-xl mb-6">
                                    Hoe moet de overheid omgaan met lobby door de vee-industrie?
                                </p>
                                <div className="poll-options space-y-4">
                                    <button
                                        onClick={() => handlePollVote('transparanter')}
                                        className="poll-option w-full p-4 bg-neutral-600 hover:bg-emerald-600 rounded-lg text-left transition-colors"
                                    >
                                        Transparanter maken - alle contacten openbaar
                                    </button>
                                    <button
                                        onClick={() => handlePollVote('strengereRegels')}
                                        className="poll-option w-full p-4 bg-neutral-600 hover:bg-emerald-600 rounded-lg text-left transition-colors"
                                    >
                                        Strengere regels voor lobbyisten
                                    </button>
                                    <button
                                        onClick={() => handlePollVote('onafhankelijkOnderzoek')}
                                        className="poll-option w-full p-4 bg-neutral-600 hover:bg-emerald-600 rounded-lg text-left transition-colors"
                                    >
                                        Meer onafhankelijk onderzoek verplichten
                                    </button>
                                    <button
                                        onClick={() => handlePollVote('statusQuo')}
                                        className="poll-option w-full p-4 bg-neutral-600 hover:bg-emerald-600 rounded-lg text-left transition-colors"
                                    >
                                        Huidige situatie is prima
                                    </button>
                                </div>
                            </>
                        ) : (
                            <div className="poll-results">
                                <p className="text-xl mb-6 text-emerald-400">Bedankt voor je stem!</p>
                                <div className="poll-results-list space-y-4">
                                    {Object.entries(pollResults).map(([key, votes]) => {
                                        const percentage = Math.round((votes / totalVotes) * 100);
                                        const labels = {
                                            transparanter: 'Transparanter maken',
                                            strengereRegels: 'Strengere regels',
                                            onafhankelijkOnderzoek: 'Meer onafhankelijk onderzoek',
                                            statusQuo: 'Status quo'
                                        };
                                        return (
                                            <div key={key} className="poll-result-item">
                                                <div className="flex justify-between mb-2">
                                                    <span className={pollVote === key ? 'text-emerald-400' : ''}>
                                                        {labels[key]}
                                                    </span>
                                                    <span className="font-bold">{percentage}%</span>
                                                </div>
                                                <div className="poll-result-bar w-full bg-neutral-600 rounded-full h-3">
                                                    <div
                                                        className={`poll-result-fill h-3 rounded-full ${pollVote === key ? 'bg-emerald-400' : 'bg-emerald-600'}`}
                                                        style={{ width: `${percentage}%` }}
                                                    />
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                                <p className="text-sm text-neutral-400 mt-6 text-center">
                                    {totalVotes} stemmen
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Hoofdverhaal 2 */}
            <section className="content-section bg-white text-neutral-900 py-24 px-6">
                <article className="article-content max-w-3xl mx-auto">
                    <h2 className="article-title text-4xl font-bold mb-8">De Kosten voor het Milieu</h2>
                    <p className="text-xl leading-relaxed mb-6">
                        De vee-industrie staat voor ongeveer 15% van de Nederlandse stikstofuitstoot. Het is de grootste bron van methaanemissies in het land. Toch blijft strengere regelgeving uit, mede door intensieve lobby.
                    </p>
                    <div className="callout-box bg-amber-50 border-l-4 border-amber-500 p-6 my-8">
                        <div className="flex items-start">
                            <AlertCircle className="text-amber-600 mr-4 flex-shrink-0" size={24} />
                            <p className="text-lg">
                                Tussen 2015 en 2024 zijn er meer dan 200 geregistreerde lobbygesprekken geweest tussen vertegenwoordigers van de vee-industrie en ministers. Milieuorganisaties hadden er in dezelfde periode slechts 45.
                            </p>
                        </div>
                    </div>
                    <p className="text-xl leading-relaxed mb-6">
                        Professor Anneke van der Meer, milieubeleidexpert aan de Universiteit Utrecht, is kritisch: "We zien een patroon waarbij economische belangen zwaarder wegen dan ecologische noodzaak. De lobby speelt daar een cruciale rol in."
                    </p>
                </article>
            </section>

            {/* Parallax Beeld 3 */}
            <section className="parallax-section relative h-96 flex items-center justify-center overflow-hidden">
                <div
                    className="parallax-background absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1600)',
                        transform: `translateY(${(scrollY - 2500) * 0.3}px)`
                    }}
                />
                <div className="parallax-stat relative z-10 text-center px-6">
                    <div className="text-7xl font-bold mb-4">15%</div>
                    <div className="text-2xl">van de Nederlandse stikstofuitstoot</div>
                </div>
            </section>

            {/* Conclusie */}
            <section className="content-section bg-white text-neutral-900 py-24 px-6">
                <article className="article-content max-w-3xl mx-auto">
                    <h2 className="article-title text-4xl font-bold mb-8">De Weg Vooruit</h2>
                    <p className="text-xl leading-relaxed mb-6">
                        De discussie over de rol van de vee-industrie in Nederland staat niet op zichzelf. Het raakt aan grotere vragen over hoe we democratie vormgeven en wie toegang heeft tot macht.
                    </p>
                    <p className="text-xl leading-relaxed mb-6">
                        Transparantie over lobby-activiteiten zou een eerste stap kunnen zijn. Verschillende maatschappelijke organisaties pleiten voor een openbaar lobbyregister, zoals dat in Brussel al bestaat.
                    </p>
                    <p className="text-xl leading-relaxed mb-6">
                        De vraag blijft: wiens belangen tellen het zwaarst in de afweging tussen economie, milieu en toekomst?
                    </p>
                </article>
            </section>

            {/* Footer */}
            <footer className="footer-section bg-neutral-900 py-12 px-6 text-center text-neutral-400">
                <p className="mb">Een interactieve longread door Danae van der Meer voor de minor De Staat van de Wereld</p>
                <p className="text-sm">Bronnen: CBS, RIVM, Universiteit Utrecht, LTO Nederland, Wageningen Economic Research</p>
            </footer>
        </div>
    );
}