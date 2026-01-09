// components/sections/ToekomstSection.jsx
import React from 'react';
import FutureIntroSection from "./FutureIntroSection.jsx";
import OptimisticNewsSection from "./OptimisticNewsSection.jsx";
import FutureScenariosSection from "./FutureScenriosSection.jsx";
import MoodMeterSection from "./MoodMeterSection.jsx";
import WhatshappeningNow from "./WhatshappeningNow.jsx";


export default function ToekomstSection() {
    return (
        <section id="toekomst" className="scroll-mt-20">

            {/* Introductie Toekomst */}
            <FutureIntroSection />

            {/*<WhatshappeningNow/>*/}

            {/* Toekomstscenario's */}
            <FutureScenariosSection />

            {/* Optimistisch Nieuws */}
            <OptimisticNewsSection />

            {/* Stemming-meter */}
            <MoodMeterSection />

            {/* Overgang naar Conclusie */}
            <div className="py-20 px-6 bg-gradient-to-t from-black to-neutral-900">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-3xl font-bold mb-6">Wat nu?</h3>
                    <p className="text-xl text-neutral-300 mb-8">
                        Je hebt gezien hoe het systeem werkt, wie er belang bij heeft, en wat er mogelijk is.
                        De toekomst is niet voorbestemd, maar die maken we samen.
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