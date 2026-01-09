// components/sections/toekomst/FutureScenariosSection.jsx
import React, { useState } from 'react';
import {
    TrendingDown,
    RefreshCw,
    AlertTriangle,
    ChevronRight,
    BarChart3,
    Leaf,
    Shield,
    Users,
    Clock,
    Target,
    Zap
} from 'lucide-react';

export default function FutureScenariosSection() {
    const [activeScenario, setActiveScenario] = useState('scenario2');


    const scenarios = {
        scenario1: {
            id: 'scenario1',
            name: "Business as Usual",
            tagline: "Kosmetische verandering, systeem blijft intact",
            icon: <TrendingDown className="w-6 h-6" />,
            iconColor: "text-yellow-400",
            gradient: "from-yellow-900/20 via-yellow-900/10 to-transparent",
            borderColor: "border-yellow-500/30",
            bgColor: "bg-yellow-900/10",
            summary: "Kleine aanpassingen maar fundamentele problemen blijven bestaan.",
            characteristics: [
                {
                    icon: <TrendingDown size={16} />,
                    text: "Marginale daling veestapel (5-10%)",
                    impact: "negatief"
                },
                {
                    icon: <Leaf size={16} />,
                    text: "Greenwashing neemt toe",
                    impact: "negatief"
                },
                {
                    icon: <Target size={16} />,
                    text: "Klimaatdoelen worden gemist",
                    impact: "negatief"
                },
                {
                    icon: <Shield size={16} />,
                    text: "Biodiversiteit blijft achteruitgaan",
                    impact: "negatief"
                }
            ],
            implications: {
                economie: {
                    status: "Kwetsbaar",
                    description: "Afhankelijk van subsidies, concurrentie op prijs",
                    trend: "stagnatie"
                },
                natuur: {
                    status: "Verslechtering",
                    description: "Stikstofcrisis blijft, Natura 2000 verslechtert",
                    trend: "afnemend"
                },
                dierenwelzijn: {
                    status: "Marginaal beter",
                    description: "Kleine verbeteringen, fundamentele problemen blijven",
                    trend: "minimaal"
                },
                maatschappij: {
                    status: "Polarisatie",
                    description: "Frustratie bij zowel activisten als boeren neemt toe",
                    trend: "conflict"
                }
            },

        },
        scenario2: {
            id: 'scenario2',
            name: "Gestuurde Transitie",
            tagline: "Beleidsgestuurde verschuiving naar kwaliteit",
            icon: <RefreshCw className="w-6 h-6" />,
            iconColor: "text-emerald-400",
            gradient: "from-emerald-900/20 via-emerald-900/10 to-transparent",
            borderColor: "border-emerald-500/30",
            bgColor: "bg-emerald-900/10",
            summary: "Gefaseerde omslag waarbij Nederland koploper wordt in duurzame landbouw.",
            characteristics: [
                {
                    icon: <BarChart3 size={16} />,
                    text: "Veestapel krimpt 30-50%",
                    impact: "positief"
                },
                {
                    icon: <Target size={16} />,
                    text: "Focus op kwaliteit i.p.v. volume",
                    impact: "positief"
                },
                {
                    icon: <Leaf size={16} />,
                    text: "Plantaardige sector groeit sterk",
                    impact: "positief"
                },
                {
                    icon: <Shield size={16} />,
                    text: "Natuurherstel komt op gang",
                    impact: "positief"
                }
            ],
            implications: {
                economie: {
                    status: "Winstgevend",
                    description: "Zonder subsidies, kwaliteit als exportproduct",
                    trend: "groei"
                },
                natuur: {
                    status: "Herstel",
                    description: "Stikstofcrisis neemt af, biodiversiteit herstelt",
                    trend: "verbeterend"
                },
                dierenwelzijn: {
                    status: "Significant beter",
                    description: "Veel minder dieren, veel betere levens",
                    trend: "sterk verbeterend"
                },
                maatschappij: {
                    status: "Samenwerking",
                    description: "Boeren krijgen perspectief, regionale economie diverser",
                    trend: "constructief"
                }
            },

            keyFactors: [
                "Politieke durf voor vleestaks",
                "Subsidiehervorming GLB",
                "Groeiend maatschappelijk draagvlak",
                "Schaalvoordeel plantaardige alternatieven"
            ]
        },
        scenario3: {
            id: 'scenario3',
            name: "Radicale Verandering",
            tagline: "Systeemverandering door crisis of doorbraak",
            icon: <AlertTriangle className="w-6 h-6" />,
            iconColor: "text-rose-400",
            gradient: "from-rose-900/20 via-rose-900/10 to-transparent",
            borderColor: "border-rose-500/30",
            bgColor: "bg-rose-900/10",
            summary: "Fundamentele transformatie waarbij Nederland wereldleider wordt in alternatieve eiwitten.",
            characteristics: [
                {
                    icon: <Zap size={16} />,
                    text: "Veestapel krimpt 60-70%",
                    impact: "zeer positief"
                },
                {
                    icon: <Users size={16} />,
                    text: "Intensieve veehouderij verdwijnt",
                    impact: "transformatief"
                },
                {
                    icon: <Target size={16} />,
                    text: "Kweekvlees wordt mainstream",
                    impact: "innovatief"
                },
                {
                    icon: <Leaf size={16} />,
                    text: "Nederland leider in plantaardige eiwitten",
                    impact: "leiderschap"
                }
            ],
            implications: {
                economie: {
                    status: "Getransformeerd",
                    description: "Leider in innovatieve eiwitproductie, nieuwe banen",
                    trend: "revolutie"
                },
                natuur: {
                    status: "Spectaculair herstel",
                    description: "Klimaatneutraal, natuur floreert",
                    trend: "exponentieel"
                },
                dierenwelzijn: {
                    status: "Fundamenteel anders",
                    description: "Bijna geen dierenleed, extensief als norm",
                    trend: "paradigmaverschuiving"
                },
                maatschappij: {
                    status: "Transformatie",
                    description: "Nieuwe plattelandscultuur, sociale innovatie",
                    trend: "vernieuwing"
                }
            },

            triggers: [
                "Klimaatcrisis dwingt tot actie",
                "Technologische doorbraak kweekvlees",
                "Grootschalige ziekte-uitbraak",
                "Rechterlijke uitspraken à la Urgenda"
            ]
        }
    };

    const scenario = scenarios[activeScenario];
    const allScenarios = Object.values(scenarios);



    return (
        <div className="future-scenarios py-24 px-4 sm:px-6 bg-gradient-to-b from-neutral-900 to-black">
            <div className="max-w-7xl mx-auto">
                {/* HEADER */}
                <div className="text-center mb-16">

                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-100 to-white bg-clip-text text-transparent">
                        Welke toekomst kiezen we?
                    </h2>
                    <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
                        Drie mogelijke scenario's voor de Nederlandse vee-industrie.
                        Het pad dat we inslaan wordt bepaald door <span className="text-emerald-300 font-medium">politieke moed</span>,
                        <span className="text-emerald-300 font-medium"> economische veranderingen</span> en
                        <span className="text-emerald-300 font-medium"> maatschappelijke keuzes</span>.
                    </p>
                </div>

                {/* SCENARIO SELECTOR - IMPROVED */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
                    {allScenarios.map((s) => (
                        <button
                            key={s.id}
                            onClick={() => setActiveScenario(s.id)}
                            className={`relative group overflow-hidden rounded-2xl border-2 p-6 transition-all duration-300 ${
                                activeScenario === s.id
                                    ? `${s.borderColor} ${s.bgColor} scale-[1.02] shadow-2xl`
                                    : 'border-neutral-800 bg-neutral-900/50 hover:bg-neutral-800/70 hover:scale-[1.01]'
                            }`}
                        >
                            {/* Background gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${s.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className={`p-2 rounded-lg ${s.bgColor}`}>
                                            <div className={s.iconColor}>
                                                {s.icon}
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold">{s.name}</h3>
                                    </div>
                                    {activeScenario === s.id && (
                                        <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                                    )}
                                </div>

                                <p className="text-sm text-neutral-300 mb-4 text-left">
                                    {s.tagline}
                                </p>

                            </div>
                        </button>
                    ))}
                </div>

                {/* ACTIVE SCENARIO DETAILS */}
                <div className={`relative overflow-hidden rounded-3xl border ${scenario.borderColor} mb-12`}>
                    {/* Animated background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${scenario.gradient}`} />

                    <div className="relative z-10 p-8">
                        {/* Header with probability meter */}


                        {/* Content grid */}
                        <div className="grid lg:grid-cols-2 gap-8 mb-8">
                            {/* Characteristics */}
                            <div>
                                <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                                    <ChevronRight size={20} className={scenario.iconColor} />
                                    Kenmerken
                                </h4>
                                <ul className="space-y-4">
                                    {scenario.characteristics.map((char, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start gap-3 p-3 rounded-lg bg-neutral-900/50 hover:bg-neutral-800/70 transition-colors"
                                        >
                                            <div className={`p-2 rounded-md ${scenario.bgColor} mt-0.5`}>
                                                <div className={scenario.iconColor}>
                                                    {char.icon}
                                                </div>
                                            </div>
                                            <span className="flex-1">{char.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Implications */}
                            <div>
                                <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                                    <BarChart3 size={20} className={scenario.iconColor} />
                                    Implicaties
                                </h4>
                                <div className="grid grid-cols-2 gap-4">
                                    {Object.entries(scenario.implications).map(([key, imp]) => (
                                        <div
                                            key={key}
                                            className="bg-neutral-900/50 p-4 rounded-xl hover:bg-neutral-800/70 transition-colors"
                                        >
                                            <div className="text-sm text-neutral-400 mb-1 capitalize">
                                                {key}
                                            </div>
                                            <div className="font-bold mb-2">{imp.status}</div>
                                            <div className="text-sm text-neutral-300">{imp.description}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Key factors or triggers */}
                        {(scenario.keyFactors || scenario.triggers) && (
                            <div className="mb-8">
                                <h4 className="text-xl font-bold mb-4">
                                    {scenario.keyFactors ? 'Sleutelfactoren' : 'Mogelijke triggers'}
                                </h4>
                                <div className="flex flex-wrap gap-3">
                                    {(scenario.keyFactors || scenario.triggers).map((factor, index) => (
                                        <span
                                            key={index}
                                            className="px-4 py-2 bg-neutral-900/70 rounded-full text-sm border border-neutral-800"
                                        >
                                            {factor}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Quote */}

                    </div>
                </div>











                {/* FINAL MESSAGE */}
                <div className="text-center p-8 rounded-3xl bg-gradient-to-r from-neutral-900 via-emerald-900/10 to-neutral-900 border border-emerald-500/20">
                    <h5 className="text-2xl font-bold mb-4">De keuze is aan ons</h5>
                    <p className="text-lg text-neutral-300 max-w-3xl mx-auto mb-6">
                        Welk scenario werkelijkheid wordt, wordt bepaald door politieke moed, economische
                        vernaderingen en maatschappelijke keuzes. De komende 5-10 jaar zijn cruciaal.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <div className="px-4 py-2 bg-emerald-500/20 rounded-full border border-emerald-500/30">
                            <span className="text-emerald-300">Politieke durf</span> nodig
                        </div>
                        <div className="px-4 py-2 bg-emerald-500/20 rounded-full border border-emerald-500/30">
                            <span className="text-emerald-300">Economische verschuiving</span> vereist
                        </div>
                        <div className="px-4 py-2 bg-emerald-500/20 rounded-full border border-emerald-500/30">
                            <span className="text-emerald-300">Maatschappelijke keuze</span> mogelijk
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}