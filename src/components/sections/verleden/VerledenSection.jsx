// components/sections/verleden/VerledenSection.jsx
import React from 'react';
import HistoryIntroSection from "./HistoryIntroSection.jsx";
import TimelineSection from "../interactive/TimelineSection.jsx";

export default function VerledenSection() {
    return (
        <section id="verleden" className="scroll-mt-20">

            {/* INTRO VERLEDEN */}
            <div className="py-16 px-6 bg-gradient-to-b from-neutral-900 to-amber-900/20">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">VERLEDEN</h2>
                    <p className="text-xl md:text-2xl text-neutral-300 mb-4">
                        Hoe is de vee-industrie ontstaan?
                    </p>
                    <p className="text-neutral-400">
                        Van voedselzekerheid na de oorlog tot marketingcampagnes die ons eetgedrag vormgaven
                    </p>
                </div>
            </div>

            {/* 1. HISTORISCHE INTRO */}
            <HistoryIntroSection />

            {/* 2. TIMELINE */}
            <TimelineSection />


            {/* OVERGANG NAAR HEDEN */}
            <div className="py-16 px-6 bg-gradient-to-t from-neutral-900 to-amber-900/10">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-3xl font-bold mb-6">Van verleden naar heden</h3>
                    <p className="text-xl text-neutral-300 mb-8">
                        De keuzes uit het verleden hebben het systeem van vandaag gevormd.
                        Maar hoe blijft dit systeem eigenlijk in stand?
                    </p>
                    <div className="animate-pulse">
                        <svg className="w-12 h-12 mx-auto text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
}