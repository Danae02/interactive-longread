// components/sections/toekomst/FutureScenariosSection.jsx
import React, { useState } from 'react';
import { TrendingUp, TrendingDown, RefreshCw, AlertTriangle } from 'lucide-react';

export default function FutureScenariosSection() {
    const [activeScenario, setActiveScenario] = useState('scenario2');

    const scenarios = {
        scenario1: {
            name: "Business as usual",
            description: "Cosmetische verandering, systeem blijft intact",
            icon: <TrendingDown className="text-yellow-500" size={24} />,
            color: "bg-yellow-900/30 border-yellow-700",
            characteristics: [
                "Marginale daling veestapel (5-10%)",
                "Greenwashing neemt toe",
                "Klimaatdoelen worden gemist",
                "Biodiversiteit blijft achteruitgaan"
            ],
            probability: "Hoog (politieke onwil)",
            quote: "We blijven doen wat we deden, en krijgen wat we kregen."
        },
        scenario2: {
            name: "Gestuurde transitie",
            description: "Beleidsgestuurde verschuiving naar kwaliteit",
            icon: <RefreshCw className="text-emerald-500" size={24} />,
            color: "bg-emerald-900/30 border-emerald-700",
            characteristics: [
                "Veestapel krimpt 30-50%",
                "Focus op kwaliteit ipv volume",
                "Plantaardige sector groeit sterk",
                "Natuurherstel komt op gang"
            ],
            probability: "Realistisch (met politieke moed)",
            quote: "Het kan anders, als we het durven."
        },
        scenario3: {
            name: "Radicale verandering",
            description: "Systeemverandering door crisis of doorbraak",
            icon: <AlertTriangle className="text-rose-500" size={24} />,
            color: "bg-rose-900/30 border-rose-700",
            characteristics: [
                "Veestapel krimpt 60-70%",
                "Intensieve veehouderij verdwijnt",
                "Kweekvlees wordt mainstream",
                "Nederland leider in plantaardige eiwitten"
            ],
            probability: "Mogelijk (bij crisis of technologische doorbraak)",
            quote: "Alles moet veranderen, zodat alles kan blijven."
        }
    };

    const scenario = scenarios[activeScenario];

    return (
        <div className="future-scenarios py-20 px-6 bg-neutral-800">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold mb-4">Hoofdstuk 2: Drie toekomsten voor 2045</h3>
                    <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                        Welke toekomst wordt werkelijkheid? Dat hangt af van onze keuzes nu.
                    </p>
                </div>

                {/* SCENARIO SELECTOR */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                    {Object.entries(scenarios).map(([key, scenario]) => (
                        <button
                            key={key}
                            onClick={() => setActiveScenario(key)}
                            className={`p-6 rounded-xl border-2 transition-all ${
                                activeScenario === key
                                    ? `${scenario.color} ring-2 ring-white/20`
                                    : 'bg-neutral-900/50 border-neutral-700 hover:bg-neutral-700/50'
                            }`}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                {scenario.icon}
                                <h4 className="text-xl font-bold">{scenario.name}</h4>
                            </div>
                            <p className="text-sm text-neutral-300 text-left">{scenario.description}</p>
                        </button>
                    ))}
                </div>

                {/* ACTIVE SCENARIO DETAILS */}
                <div className={`${scenario.color} border rounded-2xl p-8 mb-8`}>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                        <div>
                            <h4 className="text-2xl font-bold mb-2">{scenario.name}</h4>
                            <p className="text-lg text-neutral-300">{scenario.description}</p>
                        </div>
                        <div className="mt-4 md:mt-0 px-4 py-2 bg-neutral-900/50 rounded-full">
                            Waarschijnlijkheid: <span className="font-bold">{scenario.probability}</span>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h5 className="text-xl font-bold mb-4">Kenmerken van dit scenario</h5>
                            <ul className="space-y-3">
                                {scenario.characteristics.map((char, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></div>
                                        <span>{char}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h5 className="text-xl font-bold mb-4">Implicaties voor Nederland</h5>
                            <div className="space-y-4">
                                <div className="bg-neutral-900/50 p-4 rounded-lg">
                                    <div className="font-bold mb-1">Economie</div>
                                    <div className="text-sm text-neutral-300">
                                        {activeScenario === 'scenario1' && 'Afhankelijk van subsidies, kwetsbaar voor concurrentie'}
                                        {activeScenario === 'scenario2' && 'Winstgevend zonder subsidies, kwaliteit als exportproduct'}
                                        {activeScenario === 'scenario3' && 'Getransformeerd, leider in innovatieve eiwitproductie'}
                                    </div>
                                </div>
                                <div className="bg-neutral-900/50 p-4 rounded-lg">
                                    <div className="font-bold mb-1">Natuur & klimaat</div>
                                    <div className="text-sm text-neutral-300">
                                        {activeScenario === 'scenario1' && 'Doelen worden niet gehaald, natuur verslechtert'}
                                        {activeScenario === 'scenario2' && 'Doelen worden gehaald, natuurherstel begint'}
                                        {activeScenario === 'scenario3' && 'Klimaatneutraal, natuur spectaculair hersteld'}
                                    </div>
                                </div>
                                <div className="bg-neutral-900/50 p-4 rounded-lg">
                                    <div className="font-bold mb-1">Dierenwelzijn</div>
                                    <div className="text-sm text-neutral-300">
                                        {activeScenario === 'scenario1' && 'Marginale verbeteringen, fundamentele problemen blijven'}
                                        {activeScenario === 'scenario2' && 'Significante verbetering, veel minder dierenleed'}
                                        {activeScenario === 'scenario3' && 'Fundamenteel anders, bijna geen dierenleed'}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* QUOTE */}
                    <div className="mt-8 pt-8 border-t border-white/10">
                        <blockquote className="text-xl italic text-neutral-300">
                            "{scenario.quote}"
                        </blockquote>
                    </div>
                </div>

                {/* INTERACTIVE COMPARISON */}
                <div className="bg-neutral-900/50 p-8 rounded-2xl">
                    <h4 className="text-2xl font-bold mb-6 text-center">Vergelijkingstabel</h4>

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                            <tr className="border-b border-neutral-700">
                                <th className="text-left py-3">Aspect</th>
                                {Object.values(scenarios).map((s, index) => (
                                    <th key={index} className="text-center py-3">{s.name}</th>
                                ))}
                            </tr>
                            </thead>
                            <tbody>
                            <tr className="border-b border-neutral-800">
                                <td className="py-3">Veestapel (2045)</td>
                                <td className="text-center py-3 text-yellow-300">-10%</td>
                                <td className="text-center py-3 text-emerald-300">-40%</td>
                                <td className="text-center py-3 text-rose-300">-65%</td>
                            </tr>
                            <tr className="border-b border-neutral-800">
                                <td className="py-3">Vleesconsumptie p.p.</td>
                                <td className="text-center py-3">70 kg</td>
                                <td className="text-center py-3">45 kg</td>
                                <td className="text-center py-3">20 kg</td>
                            </tr>
                            <tr className="border-b border-neutral-800">
                                <td className="py-3">Klimaatdoelen</td>
                                <td className="text-center py-3 text-rose-300">❌ Gemist</td>
                                <td className="text-center py-3 text-emerald-300">✅ Gehaald</td>
                                <td className="text-center py-3 text-emerald-300">✅✅ Overtroffen</td>
                            </tr>
                            <tr>
                                <td className="py-3">Natuurherstel</td>
                                <td className="text-center py-3 text-yellow-300">🟡 Beperkt</td>
                                <td className="text-center py-3 text-emerald-300">🟢 Begonnen</td>
                                <td className="text-center py-3 text-emerald-300">🟢🟢 Spectaculair</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}