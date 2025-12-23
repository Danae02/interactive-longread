// components/sections/toekomst/OptimisticNewsSection.jsx
import React, { useState } from 'react';
import { Newspaper, Leaf, Zap, TrendingUp } from 'lucide-react';

export default function OptimisticNewsSection() {
    const [activeNews, setActiveNews] = useState(0);

    const positiveDevelopments = [
        {
            title: "Kweekvleesboerderij in Schipluiden",
            date: "November 2025",
            description: "De eerste kweekvleesboerderij ter wereld opende op een melkveehouderij.",
            impact: "Potentieel: 93% minder land, minder stikstof, geen dierenleed",
            icon: <Zap className="text-emerald-400" size={24} />
        },
        {
            title: "Denemarken voert CO2-belasting in",
            date: "Januari 2024",
            description: "Vanaf 2030 betalen veehouders €16 per ton CO₂ (stijgt naar €40 in 2035).",
            impact: "Bewezen dat politieke moed mogelijk is in een 'boerenland'",
            icon: <TrendingUp className="text-emerald-400" size={24} />
        },
        {
            title: "Caring Farmers groeit snel",
            date: "Doorlopend",
            description: "Steeds meer boeren kiezen voor kringlooplandbouw en natuurinclusieve landbouw.",
            impact: "Bewijs dat alternatieven levensvatbaar zijn",
            icon: <Leaf className="text-emerald-400" size={24} />
        },
        {
            title: "EU Green Deal ambitieus",
            date: "2020-2030",
            description: "Doelen: 50% minder pesticiden, 25% biologisch areaal, 50% minder antibioticagebruik.",
            impact: "Europese druk voor verandering",
            icon: <Newspaper className="text-emerald-400" size={24} />
        }
    ];

    return (
        <div className="optimistic-news py-20 px-6 bg-neutral-900">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold mb-4">Hoofdstuk 1: Het kan wél</h3>
                    <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                        Positieve ontwikkelingen die laten zien dat verandering mogelijk is
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* ACTUELE ONTWIKKELING */}
                    <div className="bg-gradient-to-br from-emerald-900/30 to-teal-900/30 border border-emerald-800/50 p-8 rounded-2xl">
                        <div className="flex items-center gap-3 mb-6">
                            <Newspaper className="text-emerald-400" size={32} />
                            <h4 className="text-2xl font-bold">Laatste ontwikkelingen</h4>
                        </div>

                        <div className="space-y-6">
                            {positiveDevelopments.map((news, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveNews(index)}
                                    className={`w-full text-left p-4 rounded-lg transition-all ${
                                        activeNews === index
                                            ? 'bg-emerald-900/50 border border-emerald-700'
                                            : 'bg-neutral-800/50 hover:bg-neutral-700/50'
                                    }`}
                                >
                                    <div className="flex items-start gap-3">
                                        {news.icon}
                                        <div>
                                            <div className="font-bold mb-1">{news.title}</div>
                                            <div className="text-sm text-neutral-400 mb-2">{news.date}</div>
                                            <div className="text-sm">{news.description}</div>
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* DETAIL VAN GESELECTEERD NIEUWS */}
                    <div className="bg-neutral-800/50 p-8 rounded-2xl border border-neutral-700">
                        <div className="mb-6">
                            <div className="text-emerald-400 text-sm font-medium mb-2">
                                {positiveDevelopments[activeNews].date}
                            </div>
                            <h4 className="text-2xl font-bold mb-4">
                                {positiveDevelopments[activeNews].title}
                            </h4>
                            <p className="text-lg text-neutral-300 mb-6">
                                {positiveDevelopments[activeNews].description}
                            </p>
                        </div>

                        <div className="bg-neutral-900/50 p-6 rounded-xl">
                            <div className="font-bold text-emerald-300 mb-2">Impact:</div>
                            <p>{positiveDevelopments[activeNews].impact}</p>
                        </div>

                        <div className="mt-8">
                            <div className="font-bold mb-3">Wat betekent dit voor de toekomst?</div>
                            <ul className="space-y-2 text-neutral-300">
                                <li className="flex items-start gap-2">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></div>
                                    <span>Bewijs dat innovatie mogelijk is</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></div>
                                    <span>Politieke moed is mogelijk</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></div>
                                    <span>Alternatieven zijn levensvatbaar</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* QUOTE */}
                <div className="mt-12 p-8 bg-neutral-800/50 rounded-2xl border-l-4 border-emerald-500">
                    <blockquote className="text-xl italic text-neutral-300 mb-4">
                        "Alle oplossingen zijn er eigenlijk al. Alleen moeten ze er nog doorheen komen."
                    </blockquote>
                    <div className="text-neutral-400">— Lammert van Raan</div>
                </div>
            </div>
        </div>
    );
}