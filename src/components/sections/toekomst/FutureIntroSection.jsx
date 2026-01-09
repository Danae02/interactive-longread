// components/sections/toekomst/FutureIntroSection.jsx
import React from 'react';
import { Zap, ArrowRight } from 'lucide-react';

export default function FutureIntroSection() {
    return (
        <div className="future-intro py-20 px-6 bg-gradient-to-b from-neutral-800 to-neutral-900">
            <div className="max-w-6xl mx-auto">
                {/* HERO SECTION */}
                <div className="text-center mb-12">

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
                        Toekomst
                        <span className="block text-2xl md:text-3xl mt-4 text-neutral-300">
                            Welk voedselsysteem kiest Nederland voor 2045?
                        </span>
                    </h1>

                    <div className="max-w-3xl mx-auto">
                        <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
                            De intensieve vee-industrie lijkt een gesloten systeem, maar is niet onwrikbaar. Interne spanningen en externe druk kunnen de machtsstructuren doorbreken. Dit hoofdstuk onderzoekt hoe maatschappelijke, politieke en economische krachten samenkomen in een perfecte storm die het systeem radicaal kan veranderen.
                        </p>

                        <div className="bg-neutral-800/50 p-6 rounded-2xl border border-neutral-700 mb-8">
                            <p className="text-lg md:text-xl text-neutral-300 italic mb-4">
                                "Alle oplossingen zijn er eigenlijk al. Alleen moeten ze er nog doorheen komen."
                            </p>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-neutral-400">— Lammert van Raan (PvdD)</span>
                                <Zap className="text-amber-400" size={20} />
                            </div>
                        </div>

                        <p className="text-lg text-neutral-400 mb-12">
                            De toekomst is niet voorbestemd. Welk scenario werkelijkheid wordt, hangt af van
                            keuzes die we <span className="font-bold text-emerald-300">vandaag</span> maken.
                        </p>


                    </div>
                </div>



                {/* SCROLL HINT */}
                <div className="text-center mt-12">
                    <div className="inline-flex flex-col items-center gap-2">
                        <div className="text-sm text-neutral-500">Scroll om verder te lezen</div>
                        <div className="w-6 h-10 border-2 border-neutral-700 rounded-full flex justify-center">
                            <div className="w-1 h-3 bg-neutral-600 rounded-full mt-2 animate-bounce"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}