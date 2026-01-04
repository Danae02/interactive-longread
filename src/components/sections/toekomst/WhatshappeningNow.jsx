// components/sections/toekomst/WhatshappeningNow.jsx
import React, { useState } from 'react';
import {
    Users,
    TrendingDown,
    AlertTriangle,
    Scale,
    Euro,
    Leaf,
    Heart,
    Newspaper,
    Mic,
    Film,
    Shield,
    Scale as LawIcon,
    Building,
    Lightbulb,
    BarChart3,
    ExternalLink
} from 'lucide-react';

export default function WhatshappeningNow() {
    const [activeTab, setActiveTab] = useState('maatschappelijk');

    const tabs = {
        maatschappelijk: {
            name: "Maatschappelijke Krachten",
            color: "bg-blue-900/20 border-blue-700/30",
            iconColor: "text-blue-400",
            icon: <Users className="w-5 h-5" />,
            gradient: "from-blue-900/10 via-blue-900/5 to-transparent"
        },
        politiek: {
            name: "Politieke Krachten",
            color: "bg-purple-900/20 border-purple-700/30",
            iconColor: "text-purple-400",
            icon: <Scale className="w-5 h-5" />,
            gradient: "from-purple-900/10 via-purple-900/5 to-transparent"
        },
        economisch: {
            name: "Economische Krachten",
            color: "bg-amber-900/20 border-amber-700/30",
            iconColor: "text-amber-400",
            icon: <Euro className="w-5 h-5" />,
            gradient: "from-amber-900/10 via-amber-900/5 to-transparent"
        }
    };

    const maatschappelijkeData = {
        title: "Groeiend bewustzijn en dalende consumptie",
        subtitle: "De onderstroom in de samenleving verschuift",
        sections: [
            {
                title: "Consumptietrends",
                icon: <TrendingDown className="w-5 h-5" />,
                data: {
                    vleesconsumptie: {
                        value: "74.4 kg",
                        change: "-4.2% sinds 2019",
                        description: "Vleesconsumptie per persoon in 2024"
                    },
                    flexitariers: {
                        value: "22%",
                        description: "Eet ≥3 dagen/week vegetarisch"
                    },
                    jongeren: {
                        value: "18-30 jaar",
                        description: "Meest plantaardige generatie"
                    }
                },
                highlights: [
                    {
                        title: "Supermarkten reageren",
                        description: "Albert Heijn en Jumbo breiden plantaardig assortiment uit",
                        icon: "🛒"
                    },
                    {
                        title: "Horecatrend",
                        description: "Vega/vegan opties zijn standaard geworden",
                        icon: "🍽️"
                    }
                ],
                warning: {
                    title: "Maar...",
                    description: "Daling is te langzaam voor klimaatdoelen. Vlees blijft kunstmatig goedkoop."
                }
            },
            {
                title: "Activisme & Bewegingen",
                icon: <AlertTriangle className="w-5 h-5" />,
                categories: [
                    {
                        name: "Directe actie",
                        items: [
                            "Extinction Rebellion bezettingen",
                            "Meat the Victims protesten",
                            "Slachthuisbezettingen"
                        ],
                        icon: <Mic className="w-4 h-4" />
                    },
                    {
                        name: "Onderzoeksjournalistiek",
                        items: [
                            "Trouw, Zembla, Follow the Money",
                            "Ongehoord.nl undercover beelden",
                            "Structurele problemen blootgelegd"
                        ],
                        icon: <Newspaper className="w-4 h-4" />
                    },
                    {
                        name: "Sociale media",
                        items: [
                            "@wouterwaayer (ex-boerenzoon)",
                            "@veggilaine (kookinfluencer)",
                            "Documentaires bereiken miljoenen"
                        ],
                        icon: <Film className="w-4 h-4" />
                    }
                ],
                effects: [
                    "Normverschuiving: vegan is mainstream",
                    "Politieke druk neemt toe",
                    "Bedrijven doen aan greenwashing"
                ]
            },
            {
                title: "Wetenschappelijke Consensus",
                icon: <BarChart3 className="w-5 h-5" />,
                categories: [
                    {
                        name: "Klimaat & Milieu",
                        icon: <Leaf className="w-4 h-4" />,
                        facts: [
                            "IPCC: radicale reductie dierlijke productie nodig",
                            "PBL: 18,6 miljard schade vs. 13,3 miljard inkomsten",
                            "Netto verlies: 5,3 miljard per jaar"
                        ]
                    },
                    {
                        name: "Dierenwelzijn",
                        icon: <Heart className="w-4 h-4" />,
                        facts: [
                            "Dieren hebben complex emotioneel leven",
                            "Cognitieve capaciteiten vergelijkbaar met kinderen",
                            "Speciesisme ter discussie gesteld"
                        ]
                    },
                    {
                        name: "Volksgezondheid",
                        icon: <Shield className="w-4 h-4" />,
                        facts: [
                            "73% meer longontsteking bij omwonenden",
                            "Vogelgriep op geitenbedrijven",
                            "Antibioticaresistentie neemt toe"
                        ]
                    }
                ]
            }
        ]
    };

    const politiekeData = {
        title: "Van polderen naar doorpakken",
        subtitle: "Het speelveld kan fundamenteel veranderen",
        sections: [
            {
                title: "Taboe doorbroken",
                icon: <LawIcon className="w-5 h-5" />,
                quote: {
                    text: "Het taboe op het bespreken van krimp is al gebroken.",
                    author: "Lammert van Raan"
                },
                developments: [
                    "D66 sprak als mainstream partij over halvering veestapel",
                    "GroenLinks-PvdA en PvdD hebben krimp in programma",
                    "Politieke strijd gaat nu over tempo, niet over of"
                ],
                dilemma: "Waarom durft geen politicus het concreet door te zetten? 'Er is angst voor de kiezers.'"
            },
            {
                title: "Succes elders: Denemarken",
                icon: <Building className="w-5 h-5" />,
                measures: [
                    {
                        title: "CO₂-heffing landbouw",
                        details: "Vanaf 2030: €16 per ton (stijgt naar €40 in 2035)",
                        features: [
                            "Brede politieke steun",
                            "Financiële steun voor transitie",
                            "Duidelijke langetermijndoelen"
                        ]
                    }
                ],
                lessons: [
                    "Politieke moed is mogelijk, ook in 'boerenland'",
                    "Voorspelbaarheid helpt: helder pad",
                    "Compensatie voorkomt verzet"
                ]
            },
            {
                title: "Noodzakelijk in Nederland",
                icon: <Lightbulb className="w-5 h-5" />,
                policyAreas: [
                    {
                        area: "Subsidiehervorming",
                        measures: [
                            "Stop EU-subsidies vleespromotie (€52 miljoen/jaar)",
                            "Herverdeel GLB-gelden naar duurzaamheid",
                            "Vleestaks (slachttaks): €6 miljard schade/jaar"
                        ]
                    },
                    {
                        area: "Juridische instrumenten",
                        measures: [
                            "Ecocidewet: natuurvernietiging strafbaar",
                            "Strengere dierenwelzijnswetten",
                            "Transparantieverplichting in slachthuizen"
                        ]
                    },
                    {
                        area: "Alternatieven stimuleren",
                        measures: [
                            "Subsidies voor plantaardige landbouw",
                            "Steun voor omschakelende boeren",
                            "Overheid koopt 50% plantaardig in"
                        ]
                    }
                ]
            },
            {
                title: "Europese sleutel",
                icon: <Building className="w-5 h-5" />,
                euFacts: [
                    "GLB: 387 miljard euro (2021-2027)",
                    "Nu: 80% naar grootste 20% bedrijven",
                    "EU Green Deal: 55% CO₂-reductie in 2030",
                    "Klimaatjurisprudentie kan inertie doorbreken"
                ],
                challenge: "Lobby Copa-Cogeca blijft machtig, maar druk neemt toe"
            }
        ]
    };

    const economischeData = {
        title: "Het kaartenhuis wankelt",
        subtitle: "Economische logica kan systeem doen instorten",
        sections: [
            {
                title: "True Pricing: De echte rekening",
                icon: <Euro className="w-5 h-5" />,
                problem: "Vlees is kunstmatig goedkoop door:",
                reasons: [
                    "Milieuschade niet in prijs",
                    "Dierenwelzijn niet gecompenseerd",
                    "Gezondheidskosten afgewenteld op zorg"
                ],
                deloitteReport: {
                    income: "13,3 miljard euro opbrengst",
                    damage: "18,6 miljard euro schade",
                    netto: "5,3 miljard euro verlies per jaar"
                },
                example: {
                    current: "Gehakt: €6 in winkel",
                    trueCost: "Echte kosten: €21 (€15 maatschappelijke schade)",
                    effect: "Plantaardig wordt relatief goedkoper"
                }
            },
            {
                title: "Innovatie & Nieuwe Markten",
                icon: <Lightbulb className="w-5 h-5" />,
                trends: [
                    {
                        sector: "Plantaardige sector",
                        growth: "+12% per jaar in West-Europa/Noord-Amerika",
                        examples: "Vegetarische Slager, Vivera, startups",
                        note: "Grote vleesverwerkers kopen plantaardige merken op"
                    },
                    {
                        sector: "Kweekvlees",
                        development: "Eerste kweekvleesboer in Nederland (2025)",
                        benefits: "93% minder land, minder stikstof en methaan",
                        quote: "'Als boer moet je vooruitkijken' - Corne van Leeuwen"
                    },
                    {
                        sector: "Insecten als eiwit",
                        status: "EU-goedkeuring (2021/2022)",
                        voordelen: "Minder land, water, CO₂ nodig",
                        uitdaging: "Acceptatieprobleem bij consumenten"
                    }
                ]
            },
            {
                title: "Financiers als Omslagpunt",
                icon: <Building className="w-5 h-5" />,
                currentProblem: "Banken als rem:",
                barriers: [
                    "Traditioneel model gericht op schaalvergroting",
                    "Omschakeling als 'risicovoller' beoordeeld",
                    "Financiering alleen voor bewezen modellen"
                ],
                solutions: [
                    {
                        title: "Transitie-instrumenten",
                        items: [
                            "Transitieleningen met gunstige voorwaarden",
                            "Nieuwe onderpandmodellen",
                            "Risicodeling met overheid"
                        ]
                    },
                    {
                        title: "Kennisontwikkeling",
                        items: [
                            "Gespecialiseerde groene adviseurs",
                            "Delen succesverhalen",
                            "Begeleiding transitieplannen"
                        ]
                    },
                    {
                        title: "Beleidssturing",
                        items: [
                            "Uitsluiten financiering schaalvergroting",
                            "Groenfondsen voor agro-ecologie",
                            "Actief vormgeven nieuwe markten"
                        ]
                    }
                ],
                conclusion: "Banken kunnen van rem veranderen in katalysator"
            }
        ]
    };

    const getCurrentData = () => {
        switch(activeTab) {
            case 'maatschappelijk': return maatschappelijkeData;
            case 'politiek': return politiekeData;
            case 'economisch': return economischeData;
            default: return maatschappelijkeData;
        }
    };

    const currentData = getCurrentData();

    return (
        <div className="whats-happening-now py-20 px-4 sm:px-6 bg-gradient-to-b from-neutral-900 to-black">
            <div className="max-w-7xl mx-auto">
                {/* HEADER */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-800 rounded-full mb-6">
                        <AlertTriangle size={18} className="text-amber-400" />
                        <span className="text-sm font-medium">Huidige Ontwikkelingen</span>
                    </div>
                    <h2 className="text-4xl font-bold mb-4">
                        Druk van drie kanten
                    </h2>
                    <p className="text-xl text-neutral-400 max-w-4xl mx-auto">
                        Het systeem staat onder toenemende druk van maatschappelijke, politieke en economische krachten.
                        Geen enkele factor alleen is voldoende, maar samen kunnen ze de intensieve vee-industrie doorbreken.
                    </p>
                </div>

                {/* TAB NAVIGATION */}
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                    {Object.entries(tabs).map(([key, tab]) => (
                        <button
                            key={key}
                            onClick={() => setActiveTab(key)}
                            className={`flex items-center gap-3 px-6 py-4 rounded-xl border transition-all ${
                                activeTab === key
                                    ? `${tab.color} border-opacity-50 scale-[1.02]`
                                    : 'bg-neutral-900/50 border-neutral-800 hover:bg-neutral-800/50'
                            }`}
                        >
                            <div className={`p-2 rounded-lg ${activeTab === key ? 'bg-white/10' : 'bg-neutral-800'}`}>
                                <div className={tab.iconColor}>
                                    {tab.icon}
                                </div>
                            </div>
                            <div className="text-left">
                                <div className="font-bold text-lg">{tab.name}</div>
                                <div className="text-sm text-neutral-400">
                                    {key === 'maatschappelijk' && 'Burgers, consumenten, activisten'}
                                    {key === 'politiek' && 'Beleid, wetgeving, subsidies'}
                                    {key === 'economisch' && 'Markten, financiën, innovatie'}
                                </div>
                            </div>
                        </button>
                    ))}
                </div>

                {/* ACTIVE TAB CONTENT */}
                <div className={`relative rounded-3xl border ${tabs[activeTab].color} p-8`}>
                    {/* Gradient background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${tabs[activeTab].gradient} rounded-3xl`} />

                    <div className="relative z-10">
                        {/* Section Header */}
                        <div className="mb-10">
                            <h3 className="text-3xl font-bold mb-3">{currentData.title}</h3>
                            <p className="text-xl text-neutral-300">{currentData.subtitle}</p>
                        </div>

                        {/* CONTENT BASED ON ACTIVE TAB */}
                        {activeTab === 'maatschappelijk' && (
                            <div className="space-y-12">
                                {maatschappelijkeData.sections?.map((section, index) => (
                                    <div key={index} className="mb-10">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="p-2 bg-blue-900/30 rounded-lg">
                                                <div className="text-blue-400">{section.icon}</div>
                                            </div>
                                            <h4 className="text-2xl font-bold">{section.title}</h4>
                                        </div>

                                        {section.title === "Consumptietrends" && section.data && (
                                            <div className="grid md:grid-cols-3 gap-6 mb-8">
                                                <div className="bg-neutral-900/50 p-6 rounded-xl">
                                                    <div className="text-3xl font-bold text-blue-300 mb-2">
                                                        {section.data.vleesconsumptie?.value || 'N/A'}
                                                    </div>
                                                    <div className="text-sm text-neutral-400 mb-1">
                                                        {section.data.vleesconsumptie?.change || ''}
                                                    </div>
                                                    <div className="text-neutral-300">
                                                        {section.data.vleesconsumptie?.description || ''}
                                                    </div>
                                                </div>
                                                <div className="bg-neutral-900/50 p-6 rounded-xl">
                                                    <div className="text-3xl font-bold text-emerald-300 mb-2">
                                                        {section.data.flexitariers?.value || 'N/A'}
                                                    </div>
                                                    <div className="text-neutral-300">
                                                        {section.data.flexitariers?.description || ''}
                                                    </div>
                                                </div>
                                                <div className="bg-neutral-900/50 p-6 rounded-xl">
                                                    <div className="text-lg font-bold text-amber-300 mb-2">
                                                        {section.data.jongeren?.value || 'N/A'}
                                                    </div>
                                                    <div className="text-neutral-300">
                                                        {section.data.jongeren?.description || ''}
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {section.highlights && Array.isArray(section.highlights) && (
                                            <div className="mb-8">
                                                <div className="grid md:grid-cols-2 gap-4">
                                                    {section.highlights.map((highlight, idx) => (
                                                        <div key={idx} className="bg-blue-900/20 p-4 rounded-lg border border-blue-800/30">
                                                            <div className="flex items-center gap-3 mb-2">
                                                                <span className="text-2xl">{highlight.icon}</span>
                                                                <div className="font-bold">{highlight.title}</div>
                                                            </div>
                                                            <div className="text-neutral-300 text-sm">
                                                                {highlight.description}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {section.warning && (
                                            <div className="bg-amber-900/20 border border-amber-800/30 p-4 rounded-lg mb-8">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <AlertTriangle size={18} className="text-amber-400" />
                                                    <div className="font-bold text-amber-300">{section.warning.title}</div>
                                                </div>
                                                <div className="text-amber-200/80">{section.warning.description}</div>
                                            </div>
                                        )}

                                        {section.categories && Array.isArray(section.categories) && (
                                            <div className="grid md:grid-cols-3 gap-6">
                                                {section.categories.map((category, catIdx) => (
                                                    <div key={catIdx} className="bg-neutral-900/30 p-5 rounded-xl">
                                                        <div className="flex items-center gap-2 mb-4">
                                                            <div className="text-blue-400">
                                                                {category.icon}
                                                            </div>
                                                            <div className="font-bold text-lg">{category.name}</div>
                                                        </div>
                                                        <ul className="space-y-2">
                                                            {category.items?.map((item, itemIdx) => (
                                                                <li key={itemIdx} className="flex items-start gap-2">
                                                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                                                                    <span className="text-sm text-neutral-300">{item}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {section.effects && Array.isArray(section.effects) && (
                                            <div className="mt-8">
                                                <div className="font-bold mb-3">Effect:</div>
                                                <div className="grid md:grid-cols-3 gap-4">
                                                    {section.effects.map((effect, effIdx) => (
                                                        <div key={effIdx} className="bg-blue-900/20 p-4 rounded-lg">
                                                            <div className="text-sm text-neutral-300">{effect}</div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}

                        {activeTab === 'politiek' && (
                            <div className="space-y-12">
                                {politiekeData.sections?.map((section, index) => (
                                    <div key={index} className="mb-10">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="p-2 bg-purple-900/30 rounded-lg">
                                                <div className="text-purple-400">{section.icon}</div>
                                            </div>
                                            <h4 className="text-2xl font-bold">{section.title}</h4>
                                        </div>

                                        {section.quote && (
                                            <div className="bg-purple-900/20 border border-purple-800/30 p-6 rounded-xl mb-8">
                                                <div className="text-xl italic text-purple-100 mb-2">
                                                    "{section.quote.text}"
                                                </div>
                                                <div className="text-right text-purple-300">
                                                    — {section.quote.author}
                                                </div>
                                            </div>
                                        )}

                                        {section.developments && Array.isArray(section.developments) && (
                                            <div className="mb-8">
                                                <div className="space-y-3">
                                                    {section.developments.map((dev, idx) => (
                                                        <div key={idx} className="flex items-start gap-3 p-3 bg-neutral-900/30 rounded-lg">
                                                            <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                                                            <span>{dev}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {section.dilemma && (
                                            <div className="bg-amber-900/20 border border-amber-800/30 p-4 rounded-lg mb-8">
                                                <div className="text-amber-300 font-bold mb-1">Dilemma:</div>
                                                <div className="text-amber-200/80">{section.dilemma}</div>
                                            </div>
                                        )}

                                        {section.measures && Array.isArray(section.measures) && (
                                            <div className="mb-8">
                                                {section.measures.map((measure, idx) => (
                                                    <div key={idx} className="bg-purple-900/20 p-6 rounded-xl mb-6">
                                                        <div className="text-xl font-bold mb-3">{measure.title}</div>
                                                        <div className="text-lg text-purple-300 mb-4">{measure.details}</div>
                                                        <div className="space-y-2">
                                                            {measure.features?.map((feature, fIdx) => (
                                                                <div key={fIdx} className="flex items-center gap-2">
                                                                    <div className="w-2 h-2 rounded-full bg-purple-400" />
                                                                    <span className="text-neutral-300">{feature}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {section.lessons && Array.isArray(section.lessons) && (
                                            <div className="mb-8">
                                                <div className="font-bold mb-3 text-purple-300">Lessen voor Nederland:</div>
                                                <div className="grid md:grid-cols-3 gap-4">
                                                    {section.lessons.map((lesson, idx) => (
                                                        <div key={idx} className="bg-neutral-900/30 p-4 rounded-lg">
                                                            <div className="text-sm text-neutral-300">{lesson}</div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {section.policyAreas && Array.isArray(section.policyAreas) && (
                                            <div className="grid md:grid-cols-3 gap-6">
                                                {section.policyAreas.map((area, idx) => (
                                                    <div key={idx} className="bg-purple-900/20 p-5 rounded-xl">
                                                        <div className="font-bold text-lg mb-4 text-purple-300">{area.area}</div>
                                                        <ul className="space-y-3">
                                                            {area.measures?.map((measure, mIdx) => (
                                                                <li key={mIdx} className="text-sm text-neutral-300">
                                                                    • {measure}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {section.euFacts && Array.isArray(section.euFacts) && (
                                            <div className="mt-8">
                                                <div className="bg-neutral-900/30 p-6 rounded-xl">
                                                    <div className="font-bold mb-4">Europese context:</div>
                                                    <div className="grid md:grid-cols-2 gap-4">
                                                        {section.euFacts.map((fact, idx) => (
                                                            <div key={idx} className="flex items-start gap-2">
                                                                <ExternalLink size={16} className="text-purple-400 mt-0.5" />
                                                                <span className="text-neutral-300">{fact}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                                {section.challenge && (
                                                    <div className="bg-amber-900/20 p-4 rounded-lg mt-6">
                                                        <div className="text-amber-300 font-bold mb-1">Uitdaging:</div>
                                                        <div className="text-amber-200/80">{section.challenge}</div>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}

                        {activeTab === 'economisch' && (
                            <div className="space-y-12">
                                {economischeData.sections?.map((section, index) => (
                                    <div key={index} className="mb-10">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="p-2 bg-amber-900/30 rounded-lg">
                                                <div className="text-amber-400">{section.icon}</div>
                                            </div>
                                            <h4 className="text-2xl font-bold">{section.title}</h4>
                                        </div>

                                        {section.problem && (
                                            <div className="mb-6">
                                                <div className="text-lg text-amber-300 mb-3">{section.problem}</div>
                                                <div className="space-y-2">
                                                    {section.reasons?.map((reason, idx) => (
                                                        <div key={idx} className="flex items-start gap-2">
                                                            <div className="w-2 h-2 rounded-full bg-amber-500 mt-2" />
                                                            <span className="text-neutral-300">{reason}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {section.deloitteReport && (
                                            <div className="bg-amber-900/20 p-6 rounded-xl mb-8">
                                                <div className="text-center font-bold mb-4 text-amber-300">Deloitte Rapport (2024)</div>
                                                <div className="grid md:grid-cols-3 gap-6">
                                                    <div className="text-center">
                                                        <div className="text-2xl font-bold text-emerald-300">
                                                            {section.deloitteReport.income}
                                                        </div>
                                                        <div className="text-sm text-neutral-400 mt-2">Opbrengst</div>
                                                    </div>
                                                    <div className="text-center">
                                                        <div className="text-2xl font-bold text-rose-300">
                                                            {section.deloitteReport.damage}
                                                        </div>
                                                        <div className="text-sm text-neutral-400 mt-2">Schade</div>
                                                    </div>
                                                    <div className="text-center">
                                                        <div className="text-2xl font-bold text-amber-300">
                                                            {section.deloitteReport.netto}
                                                        </div>
                                                        <div className="text-sm text-neutral-400 mt-2">Netto verlies</div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {section.example && (
                                            <div className="mb-8">
                                                <div className="font-bold mb-3 text-amber-300">Concreet voorbeeld:</div>
                                                <div className="grid md:grid-cols-3 gap-4">
                                                    <div className="bg-neutral-900/30 p-4 rounded-lg text-center">
                                                        <div className="text-lg font-bold mb-2">Huidig</div>
                                                        <div className="text-2xl text-amber-300">
                                                            {section.example.current}
                                                        </div>
                                                    </div>
                                                    <div className="bg-rose-900/20 p-4 rounded-lg text-center">
                                                        <div className="text-lg font-bold mb-2">Echte kosten</div>
                                                        <div className="text-2xl text-rose-300">
                                                            {section.example.trueCost}
                                                        </div>
                                                    </div>
                                                    <div className="bg-emerald-900/20 p-4 rounded-lg text-center">
                                                        <div className="text-lg font-bold mb-2">Effect</div>
                                                        <div className="text-emerald-300">
                                                            {section.example.effect}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {section.trends && Array.isArray(section.trends) && (
                                            <div className="space-y-6">
                                                {section.trends.map((trend, idx) => (
                                                    <div key={idx} className="bg-neutral-900/30 p-6 rounded-xl">
                                                        <div className="font-bold text-lg mb-3 text-amber-300">{trend.sector}</div>
                                                        {trend.growth && (
                                                            <div className="text-emerald-400 mb-2">{trend.growth}</div>
                                                        )}
                                                        {trend.examples && (
                                                            <div className="text-neutral-300 mb-2">{trend.examples}</div>
                                                        )}
                                                        {trend.note && (
                                                            <div className="text-sm text-amber-300/80 mb-2">{trend.note}</div>
                                                        )}
                                                        {trend.benefits && (
                                                            <div className="text-sm text-emerald-300 mb-2">{trend.benefits}</div>
                                                        )}
                                                        {trend.quote && (
                                                            <div className="border-l-4 border-amber-500 pl-4 mt-3 italic text-neutral-300">
                                                                "{trend.quote}"
                                                            </div>
                                                        )}
                                                        {trend.status && (
                                                            <div className="text-sm text-blue-400 mb-2">{trend.status}</div>
                                                        )}
                                                        {trend.voordelen && (
                                                            <div className="text-sm text-emerald-300 mb-2">{trend.voordelen}</div>
                                                        )}
                                                        {trend.uitdaging && (
                                                            <div className="text-sm text-amber-300">{trend.uitdaging}</div>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {section.currentProblem && (
                                            <div className="mb-6">
                                                <div className="text-lg text-amber-300 mb-3">{section.currentProblem}</div>
                                                <div className="space-y-2">
                                                    {section.barriers?.map((barrier, idx) => (
                                                        <div key={idx} className="flex items-start gap-2">
                                                            <div className="w-2 h-2 rounded-full bg-rose-500 mt-2" />
                                                            <span className="text-neutral-300">{barrier}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {section.solutions && Array.isArray(section.solutions) && (
                                            <div className="grid md:grid-cols-3 gap-6">
                                                {section.solutions.map((solution, idx) => (
                                                    <div key={idx} className="bg-amber-900/20 p-5 rounded-xl">
                                                        <div className="font-bold text-lg mb-4 text-amber-300">
                                                            {solution.title}
                                                        </div>
                                                        <ul className="space-y-2">
                                                            {solution.items?.map((item, iIdx) => (
                                                                <li key={iIdx} className="text-sm text-neutral-300">
                                                                    • {item}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {section.conclusion && (
                                            <div className="mt-8 bg-emerald-900/20 p-6 rounded-xl">
                                                <div className="text-center font-bold text-emerald-300 text-xl">
                                                    {section.conclusion}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* KEY INSIGHT */}
                <div className="mt-12 bg-gradient-to-r from-neutral-900 via-emerald-900/10 to-neutral-900 border border-emerald-500/20 rounded-2xl p-8">
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 rounded-full mb-4">
                            <Lightbulb size={18} className="text-emerald-400" />
                            <span className="font-medium">Kerninzicht</span>
                        </div>
                        <h4 className="text-2xl font-bold mb-4">
                            Geen enkele factor alleen is voldoende
                        </h4>
                        <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
                            Verandering vereist een samenspel van <span className="text-blue-400">bottom-up druk</span> (burgers, consumenten, activisten)
                            en <span className="text-purple-400">top-down interventie</span> (politiek, wetgeving, subsidiehervorming).
                            De <span className="text-amber-400">economische realiteit</span> versnelt deze transitie.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}