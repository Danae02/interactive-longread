// components/sections/toekomst/MoodMeterSection.jsx
import React, { useState, useEffect } from 'react';
import { Smile, Frown, Meh, TrendingUp, TrendingDown } from 'lucide-react';

export default function MoodMeterSection() {
    const [userMood, setUserMood] = useState(null);
    const [moodSubmitted, setMoodSubmitted] = useState(false);
    const [globalMood, setGlobalMood] = useState({ optimistic: 0, neutral: 0, pessimistic: 0 });

    // Laad globale stemming bij opstart
    useEffect(() => {
        const savedMood = JSON.parse(localStorage.getItem('future-mood-meter') || '{"optimistic":0,"neutral":0,"pessimistic":0}');
        setGlobalMood(savedMood);
    }, []);

    const moods = [
        {
            id: 'optimistic',
            label: 'Hoopvol',
            icon: <Smile size={32} />,
            color: 'bg-emerald-600 hover:bg-emerald-700',
            borderColor: 'border-emerald-500',
            description: 'Ik zie kansen voor verandering'
        },
        {
            id: 'neutral',
            label: 'Neutraal',
            icon: <Meh size={32} />,
            color: 'bg-neutral-600 hover:bg-neutral-700',
            borderColor: 'border-neutral-500',
            description: 'Ik twijfel of het gaat lukken'
        },
        {
            id: 'pessimistic',
            label: 'Pessimistisch',
            icon: <Frown size={32} />,
            color: 'bg-rose-600 hover:bg-rose-700',
            borderColor: 'border-rose-500',
            description: 'Ik ben bang dat er weinig verandert'
        }
    ];

    const handleMoodSelection = (moodId) => {
        setUserMood(moodId);

        // Update globale stemming
        const updatedMood = { ...globalMood, [moodId]: globalMood[moodId] + 1 };
        setGlobalMood(updatedMood);
        localStorage.setItem('future-mood-meter', JSON.stringify(updatedMood));

        // Toon resultaten na korte delay
        setTimeout(() => setMoodSubmitted(true), 500);
    };

    const totalVotes = Object.values(globalMood).reduce((a, b) => a + b, 0);
    const optimisticPercentage = totalVotes > 0 ? Math.round((globalMood.optimistic / totalVotes) * 100) : 0;
    const neutralPercentage = totalVotes > 0 ? Math.round((globalMood.neutral / totalVotes) * 100) : 0;
    const pessimisticPercentage = totalVotes > 0 ? Math.round((globalMood.pessimistic / totalVotes) * 100) : 0;

    return (
        <div className="mood-meter py-20 px-6 bg-gradient-to-b from-neutral-900 to-black">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold mb-4">Hoofdstuk 3: Jouw stemming</h3>
                    <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                        Hoe kijk jij aan tegen de toekomst van onze voedselproductie?
                    </p>
                </div>

                {/* MOOD SELECTION */}
                {!moodSubmitted ? (
                    <div className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-2xl p-8 mb-12">
                        <h4 className="text-2xl font-bold mb-6 text-center">Stemming over de toekomst</h4>
                        <p className="text-lg text-center mb-8 text-neutral-300">
                            Na alles wat je gelezen hebt: ben je hoopvol, neutraal of pessimistisch over
                            de toekomst van de vee-industrie in Nederland?
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {moods.map(mood => (
                                <button
                                    key={mood.id}
                                    onClick={() => handleMoodSelection(mood.id)}
                                    className={`p-8 rounded-xl border-2 ${mood.borderColor} ${mood.color} transition-all duration-300 transform hover:scale-105`}
                                >
                                    <div className="flex flex-col items-center">
                                        <div className="mb-4">{mood.icon}</div>
                                        <div className="text-xl font-bold mb-2">{mood.label}</div>
                                        <div className="text-sm text-center">{mood.description}</div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                ) : (
                    /* MOOD RESULTS */
                    <div className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-2xl p-8 mb-12">
                        <h4 className="text-2xl font-bold mb-6 text-center">Resultaten</h4>

                        {/* GLOBALE STEMNING */}
                        <div className="mb-8">
                            <div className="flex justify-between mb-4">
                                <div className="text-lg">Globale stemming ({totalVotes} stemmen)</div>
                                <div className="text-sm text-neutral-400">
                                    {userMood && `Jij stemde: ${moods.find(m => m.id === userMood)?.label}`}
                                </div>
                            </div>

                            <div className="space-y-4">
                                {/* HOOPVOL */}
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <div className="flex items-center gap-2">
                                            <Smile size={20} className="text-emerald-400" />
                                            <span>Hoopvol</span>
                                        </div>
                                        <span className="font-bold">{optimisticPercentage}% ({globalMood.optimistic})</span>
                                    </div>
                                    <div className="w-full h-6 bg-neutral-700 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-emerald-500 transition-all duration-1000"
                                            style={{ width: `${optimisticPercentage}%` }}
                                        />
                                    </div>
                                </div>

                                {/* NEUTRAAL */}
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <div className="flex items-center gap-2">
                                            <Meh size={20} className="text-neutral-400" />
                                            <span>Neutraal</span>
                                        </div>
                                        <span className="font-bold">{neutralPercentage}% ({globalMood.neutral})</span>
                                    </div>
                                    <div className="w-full h-6 bg-neutral-700 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-neutral-500 transition-all duration-1000 delay-300"
                                            style={{ width: `${neutralPercentage}%` }}
                                        />
                                    </div>
                                </div>

                                {/* PESSIMISTISCH */}
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <div className="flex items-center gap-2">
                                            <Frown size={20} className="text-rose-400" />
                                            <span>Pessimistisch</span>
                                        </div>
                                        <span className="font-bold">{pessimisticPercentage}% ({globalMood.pessimistic})</span>
                                    </div>
                                    <div className="w-full h-6 bg-neutral-700 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-rose-500 transition-all duration-1000 delay-600"
                                            style={{ width: `${pessimisticPercentage}%` }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* PERSONAL FEEDBACK */}
                        <div className="bg-neutral-900/50 p-6 rounded-xl mb-6">
                            <h5 className="text-lg font-bold mb-3">Jouw stemming</h5>
                            <p className="text-neutral-300">
                                {userMood === 'optimistic' &&
                                    "Je bent hoopvol! Dat is mooi. Optimisme is nodig om verandering te realiseren. " +
                                    "Blijf je inzetten voor een betere toekomst."}
                                {userMood === 'neutral' &&
                                    "Je staat er neutraal in. Begrijpelijk, het is een complexe kwestie. " +
                                    "Soms is realisme de beste benadering - kijk naar de feiten en maak bewuste keuzes."}
                                {userMood === 'pessimistic' &&
                                    "Je bent pessimistisch. Dat is begrijpelijk als je ziet hoe moeilijk verandering is. " +
                                    "Maar soms ontstaat verandering juist als het 'te laat' lijkt. Blijf kritisch, maar niet cynisch."}
                            </p>
                        </div>

                        <div className="text-center">
                            <button
                                onClick={() => {
                                    setMoodSubmitted(false);
                                    setUserMood(null);
                                }}
                                className="px-6 py-2 bg-neutral-700 hover:bg-neutral-600 rounded-lg transition-colors"
                            >
                                Opnieuw stemmen
                            </button>
                        </div>
                    </div>
                )}

                {/* TREND ANALYSIS */}
                <div className="bg-gradient-to-r from-emerald-900/20 to-teal-900/20 border border-emerald-800/30 rounded-2xl p-8">
                    <h4 className="text-2xl font-bold mb-6 text-center">Wat bepaalt de toekomst?</h4>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-2">
                                <TrendingUp className="text-emerald-400" size={24} />
                                <h5 className="text-lg font-bold">Factoren voor hoop</h5>
                            </div>
                            <ul className="space-y-3 text-neutral-300">
                                <li className="flex items-start gap-2">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2"></div>
                                    <span>Dalende vleesconsumptie bij jongeren</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2"></div>
                                    <span>Technologische doorbraken (kweekvlees)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2"></div>
                                    <span>Groeiend bewustzijn over klimaat</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2"></div>
                                    <span>Internationale druk via EU-beleid</span>
                                </li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-2">
                                <TrendingDown className="text-rose-400" size={24} />
                                <h5 className="text-lg font-bold">Belemmeringen</h5>
                            </div>
                            <ul className="space-y-3 text-neutral-300">
                                <li className="flex items-start gap-2">
                                    <div className="w-2 h-2 rounded-full bg-rose-500 mt-2"></div>
                                    <span>Machtige lobby van de sector</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-2 h-2 rounded-full bg-rose-500 mt-2"></div>
                                    <span>Politieke angst voor kiezers</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-2 h-2 rounded-full bg-rose-500 mt-2"></div>
                                    <span>Economische afhankelijkheid van export</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-2 h-2 rounded-full bg-rose-500 mt-2"></div>
                                    <span>Culturele weerstand tegen verandering</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}