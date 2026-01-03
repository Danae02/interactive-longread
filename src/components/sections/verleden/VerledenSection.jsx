// components/sections/verleden/VerledenSection.jsx
import React from 'react';
import HistoryIntroSection from "./HistoryIntroSection.jsx";
import TimelineSection from "../interactive/TimelineSection.jsx";

export default function VerledenSection() {
    return (
        <section id="verleden" className="scroll-mt-20">


            {/* 1. HISTORISCHE INTRO */}
            <HistoryIntroSection />

            {/* 2. TIMELINE */}
            <TimelineSection />


            {/* OVERGANG NAAR HEDEN */}
            <div className="py-16 px-6 bg-gradient-to-t from-neutral-900 to-amber-900/10">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-3xl font-bold mb-6 text-white">Drie krachten die de industrie bouwden</h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-neutral-800/50 p-6 rounded-xl border border-amber-800/30">
                            <h4 className="font-bold text-amber-400 mb-2">Een collectief trauma</h4>
                            <p className="text-sm text-neutral-300">
                                De naschok van de Hongerwinter zette alles in beweging. 'Nooit meer honger' werd een nationaal motto dat beleid en prioriteiten bepaalde.
                            </p>
                        </div>
                        <div className="bg-neutral-800/50 p-6 rounded-xl border border-amber-800/30">
                            <h4 className="font-bold text-amber-400 mb-2">Een politieke machine</h4>
                            <p className="text-sm text-neutral-300">
                                Van Mansholt tot het GLB: de overheid stuurde actief op schaalvergroting. Met subsidies, garanties en Europese markten werd groei de enige weg.
                            </p>
                        </div>
                        <div className="bg-neutral-800/50 p-6 rounded-xl border border-amber-800/30">
                            <h4 className="font-bold text-amber-400 mb-2">Een cultuurcampagne</h4>
                            <p className="text-sm text-neutral-300">
                                Joris Driepinter en de Binnenhof-BBQ veranderden onze eetgewoontes. Vlees en zuivel werden geen luxe, maar een vanzelfsprekend onderdeel van de dag.
                            </p>
                        </div>
                    </div>

                    <p className="text-xl text-neutral-300 italic mb-4">
                        Deze drie lagen vormden meer dan een landbouwsector: ze legden de basis voor een industriële machtsstructuur.
                    </p>

                    <p className="text-2xl font-bold text-white mb-6">
                        Het verleden verklaart het ontstaan. Maar wie houdt dit systeem nú in stand?
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