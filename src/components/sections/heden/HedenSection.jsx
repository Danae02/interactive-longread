// components/sections/HedenSection.jsx
import React from 'react';
import LobbySection from './LobbySection';
import PoliticsSection from './PoliticsSection';  // Dit importeer je
import SocialFactorsSection from './SocialFactorsSection';
import InterviewsSection from '../interactive/InterviewsSection.jsx';
import FramingDetectionSection from './FramingDetectionSection';
import EconomyPollSection from './EconomyPollSection';
import CardsSection from "../interactive/CardsSection.jsx";

export default function HedenSection() {
    return (
        <section id="heden" className="scroll-mt-20">

            {/* INTRO HEDEN */}
            <div className="py-16 px-6 bg-gradient-to-b from-neutral-900 to-neutral-800">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">HEDEN</h2>
                    <p className="text-xl md:text-2xl text-neutral-300 mb-4">
                        Het verleden was een kwestie van beleid. Het heden is een kwestie van macht. De intensieve vee-industrie is uitgegroeid tot een machtssysteem dat zichzelf in stand houdt. Grote financiers, invloedrijke lobbyclubs, politieke partijen en een stortvloed aan marketing verdedigen de status quo. In dit hoofdstuk brengen we dit machtssysteem in kaart.
                    </p>
                </div>
            </div>

            {/* 1. BEDRIJVEN - Interactive Cards */}
            <div className="py-12 px-6">
                <div className="max-w-6xl mx-auto">
                    <h3 className="text-3xl font-bold mb-2 text-center">1. De Grote Spelers</h3>

                    <p className="text-xl md:text-2xl text-neutral-300 mb-4">
                        De intensieve vee-industrie draait niet op toevalligheden, maar op economische belangen.
                        Het is een zorgvuldig opgebouwd systeem waarin verschillende machtige spelers financieel
                        profiteren van de voortzetting van dit systeem.
                    </p>

                    <p className="text-xl md:text-2xl text-neutral-300 mb-4">
                        Ontdek hieronder zes belangrijke sectoren en hun grootste bedrijven die, vaak achter de
                        schermen, de intensieve veehouderij draaiend houden en weerstand bieden aan verandering.
                    </p>

                    {/* Korte uitleg over selectiecriteria */}
                    <div className="mb-6 p-4 bg-emerald-900/30 rounded-lg border border-emerald-800/50">
                        <p className="text-lg text-neutral-300 text-center">
                            <strong>Selectiecriteria:</strong> Per sector heb ik de drie meest invloedrijke bedrijven
                            geselecteerd op basis van marktaandeel, omzet en politieke invloed in Nederland.
                        </p>
                        <p className="text-base text-neutral-400 text-center mt-2 italic">
                            Klik op een kaart om de belangen, voorbeelden en bronnen te ontdekken
                        </p>
                    </div>

                    <CardsSection/>
                </div>
            </div>

            {/* 2. LOBBY */}
            <LobbySection/>

            {/* 3. POLITIEK */}
            <PoliticsSection/>

            {/* 4. SOCIALE FACTOREN */}
            <SocialFactorsSection/>

            {/* 5. INTERVIEWS */}
            <InterviewsSection/>

            {/* 6. FRAMING HERKENNEN */}
            <FramingDetectionSection/>

            {/* 7. ECONOMISCHE WAARDE */}
            <EconomyPollSection />

            {/* OVERGANG NAAR TOEKOMST */}
            <div className="py-16 px-6 bg-gradient-to-t from-neutral-900 to-neutral-800">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-3xl font-bold mb-6">Hoe kan het anders?</h3>
                    <p className="text-xl text-neutral-300 mb-8">
                        Het systeem lijkt onwrikbaar, maar er zijn krachten die verandering mogelijk maken.
                        Wat als we een andere toekomst kunnen bouwen?
                    </p>
                    <div className="animate-pulse">
                        <svg className="w-12 h-12 mx-auto text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
}