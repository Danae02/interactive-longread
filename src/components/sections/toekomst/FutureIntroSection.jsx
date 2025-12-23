// components/sections/toekomst/FutureIntroSection.jsx
import React from 'react';
import { Target, Clock, Zap } from 'lucide-react';

export default function FutureIntroSection() {
    return (
        <div className="future-intro py-20 px-6 bg-gradient-to-b from-neutral-800 to-neutral-900">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">TOEKOMST</h2>
                    <p className="text-2xl text-neutral-300 mb-8">
                        Welk Nederland kiezen we voor 2045?
                    </p>
                    <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                        Het systeem kan veranderen. Niet door één actie, maar door een combinatie van
                        politieke keuzes, technologische innovatie en maatschappelijke verschuiving.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-neutral-800/50 p-8 rounded-2xl border border-neutral-700">
                        <div className="text-emerald-400 mb-4">
                            <Target size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-4">Klimaatdoelen</h3>
                        <p className="text-neutral-300">
                            Nederland moet in 2030 55% minder CO₂ uitstoten. Zonder krimp van de veestapel is dit onhaalbaar.
                        </p>
                    </div>

                    <div className="bg-neutral-800/50 p-8 rounded-2xl border border-neutral-700">
                        <div className="text-emerald-400 mb-4">
                            <Clock size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-4">Tijdsdruk</h3>
                        <p className="text-neutral-300">
                            Van de 9 planetaire grenzen zijn er al 6 overschreden. Elke vertraging maakt de transitie moeilijker.
                        </p>
                    </div>

                    <div className="bg-neutral-800/50 p-8 rounded-2xl border border-neutral-700">
                        <div className="text-emerald-400 mb-4">
                            <Zap size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-4">Innovatiekansen</h3>
                        <p className="text-neutral-300">
                            Nederland kan wereldleider worden in plantaardige eiwitten, kweekvlees en circulaire landbouw.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}