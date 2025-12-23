// components/sections/heden/EconomyPollSection.jsx
import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, AlertTriangle, Calculator } from 'lucide-react';

export default function EconomyPollSection() {
    const [pollAnswer, setPollAnswer] = useState(null);
    const [showResults, setShowResults] = useState(false);
    const [pollResults, setPollResults] = useState({ yes: 0, no: 0, unsure: 0 });
    const [costBreakdown, setCostBreakdown] = useState(false);

    // Poll opties
    const pollOptions = [
        {
            id: 1,
            text: 'Ja, de economische waarde is belangrijk',
            value: 'yes',
            color: 'bg-emerald-600 hover:bg-emerald-700',
            borderColor: 'border-emerald-500'
        },
        {
            id: 2,
            text: 'Nee, de kosten zijn te hoog',
            value: 'no',
            color: 'bg-rose-600 hover:bg-rose-700',
            borderColor: 'border-rose-500'
        },
        {
            id: 3,
            text: 'Weet niet / twijfel',
            value: 'unsure',
            color: 'bg-neutral-600 hover:bg-neutral-700',
            borderColor: 'border-neutral-500'
        }
    ];

    // Laad resultaten bij eerste render
    useEffect(() => {
        const savedResults = JSON.parse(localStorage.getItem('vee-industrie-poll') || '{"yes":0,"no":0,"unsure":0}');
        setPollResults(savedResults);
    }, []);

    const handleVote = (value) => {
        setPollAnswer(value);

        // Update results
        const updatedResults = { ...pollResults, [value]: pollResults[value] + 1 };
        setPollResults(updatedResults);
        localStorage.setItem('vee-industrie-poll', JSON.stringify(updatedResults));

        // Show results after short delay
        setTimeout(() => setShowResults(true), 300);
    };

    const totalVotes = pollResults.yes + pollResults.no + pollResults.unsure;

    return (
        <div className="economy-section py-20 px-6 bg-gradient-to-b from-neutral-900 to-neutral-800">
            <div className="max-w-6xl mx-auto">

                {/* SECTION TITLE */}
                <div className="text-center mb-12">
                    <div className="flex justify-center mb-4">
                        <Calculator className="text-emerald-400" size={48} />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">7. Is het het echt waard?</h2>
                    <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
                        De economische rekensom: winst voor de sector, verlies voor de samenleving
                    </p>
                </div>

                {/* POLL CONTAINER */}
                <div className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-2xl p-8 mb-12 shadow-2xl">

                    {/* POLL QUESTION */}
                    <div className="mb-8">
                        <div className="flex items-center gap-3 mb-4">
                            <AlertTriangle className="text-yellow-500" size={24} />
                            <h3 className="text-2xl font-bold">De vraag</h3>
                        </div>
                        <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
                            "De Nederlandse landbouw levert <span className="font-bold text-emerald-300">€13,3 miljard</span>
                            aan economische waarde op, maar veroorzaakt
                            <span className="font-bold text-rose-300"> €18,6 miljard</span> aan verborgen maatschappelijke kosten.
                            Is deze industrie het waard?"
                        </p>
                    </div>

                    {/* POLL OPTIONS */}
                    {!showResults ? (
                        <div className="space-y-4 mb-8">
                            <h4 className="text-lg font-bold mb-4">Wat denk jij?</h4>
                            {pollOptions.map(option => (
                                <button
                                    key={option.id}
                                    onClick={() => handleVote(option.value)}
                                    className={`w-full text-left p-5 rounded-xl border-2 ${option.borderColor} ${option.color} transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg`}
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="text-lg font-medium">{option.text}</span>
                                        <span className="text-sm opacity-75">Klik om te stemmen</span>
                                    </div>
                                </button>
                            ))}
                        </div>
                    ) : (
                        /* POLL RESULTS */
                        <div className="results mb-8">
                            <h4 className="text-xl font-bold mb-6">Resultaten ({totalVotes} stemmen)</h4>

                            <div className="space-y-4">
                                {pollOptions.map(option => {
                                    const votes = pollResults[option.value];
                                    const percentage = totalVotes > 0 ? Math.round((votes / totalVotes) * 100) : 0;

                                    return (
                                        <div key={option.id} className="result-item">
                                            <div className="flex justify-between mb-2">
                                                <span className="font-medium">{option.text}</span>
                                                <span className="font-bold">{percentage}% ({votes})</span>
                                            </div>
                                            <div className="w-full h-6 bg-neutral-700 rounded-full overflow-hidden">
                                                <div
                                                    className={`h-full rounded-full transition-all duration-1000 ease-out ${
                                                        option.value === 'yes' ? 'bg-emerald-500' :
                                                            option.value === 'no' ? 'bg-rose-500' :
                                                                'bg-neutral-500'
                                                    }`}
                                                    style={{ width: `${percentage}%` }}
                                                />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {pollAnswer && (
                                <div className={`mt-6 p-4 rounded-lg border-2 ${
                                    pollAnswer === 'yes' ? 'border-emerald-500 bg-emerald-500/10' :
                                        pollAnswer === 'no' ? 'border-rose-500 bg-rose-500/10' :
                                            'border-neutral-500 bg-neutral-500/10'
                                }`}>
                                    <div className="flex items-center gap-3">
                                        {pollAnswer === 'yes' ? (
                                            <TrendingUp className="text-emerald-400" size={24} />
                                        ) : pollAnswer === 'no' ? (
                                            <TrendingDown className="text-rose-400" size={24} />
                                        ) : null}
                                        <div>
                                            <div className="font-bold">Jij stemde: "{pollOptions.find(o => o.value === pollAnswer)?.text}"</div>
                                            <div className="text-sm text-neutral-300 mt-1">
                                                Bedankt voor je stem! Je ziet hier de totale resultaten van alle bezoekers.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {/* RESET POLL BUTTON */}
                    {showResults && (
                        <div className="text-center">
                            <button
                                onClick={() => {
                                    setShowResults(false);
                                    setPollAnswer(null);
                                }}
                                className="px-6 py-2 bg-neutral-700 hover:bg-neutral-600 rounded-lg text-sm transition-colors"
                            >
                                Opnieuw stemmen
                            </button>
                        </div>
                    )}
                </div>

                {/* ECONOMIC DATA VISUALIZATION */}
                <div className="economic-visualization">
                    <h3 className="text-3xl font-bold mb-8 text-center">De cijfers op een rij</h3>

                    {/* LARGE NUMBER COMPARISON */}
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        {/* EARNINGS */}
                        <div className="bg-gradient-to-br from-emerald-900/40 to-emerald-800/20 border border-emerald-700/30 rounded-2xl p-8">
                            <div className="flex items-center justify-between mb-6">
                                <h4 className="text-2xl font-bold text-emerald-300">Opbrengst</h4>
                                <TrendingUp className="text-emerald-400" size={32} />
                            </div>
                            <div className="text-center mb-6">
                                <div className="text-6xl md:text-7xl font-bold text-emerald-300 mb-2">€13,3</div>
                                <div className="text-xl text-emerald-200">miljard per jaar</div>
                            </div>
                            <div className="space-y-3 text-neutral-300">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                                    <span>Export naar buitenland</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                                    <span>Werkgelegenheid sector</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                                    <span>Belastinginkomsten</span>
                                </div>
                            </div>
                        </div>

                        {/* COSTS */}
                        <div className="bg-gradient-to-br from-rose-900/40 to-rose-800/20 border border-rose-700/30 rounded-2xl p-8">
                            <div className="flex items-center justify-between mb-6">
                                <h4 className="text-2xl font-bold text-rose-300">Kosten</h4>
                                <TrendingDown className="text-rose-400" size={32} />
                            </div>
                            <div className="text-center mb-6">
                                <div className="text-6xl md:text-7xl font-bold text-rose-300 mb-2">€18,6</div>
                                <div className="text-xl text-rose-200">miljard per jaar</div>
                            </div>
                            <button
                                onClick={() => setCostBreakdown(!costBreakdown)}
                                className="w-full py-3 bg-rose-800/50 hover:bg-rose-700/50 rounded-lg mb-4 transition-colors"
                            >
                                {costBreakdown ? 'Verberg details' : 'Bekijk kostenverdeling'}
                            </button>

                            {costBreakdown ? (
                                <div className="space-y-4">
                                    <div className="cost-item">
                                        <div className="flex justify-between mb-1">
                                            <span className="text-neutral-300">Klimaatschade</span>
                                            <span className="font-bold text-rose-300">€7,9 mld</span>
                                        </div>
                                        <div className="w-full h-3 bg-neutral-700 rounded-full overflow-hidden">
                                            <div className="h-full bg-rose-500" style={{ width: '42.5%' }}></div>
                                        </div>
                                    </div>

                                    <div className="cost-item">
                                        <div className="flex justify-between mb-1">
                                            <span className="text-neutral-300">Stikstofschade</span>
                                            <span className="font-bold text-rose-300">€7,2 mld</span>
                                        </div>
                                        <div className="w-full h-3 bg-neutral-700 rounded-full overflow-hidden">
                                            <div className="h-full bg-rose-500" style={{ width: '38.7%' }}></div>
                                        </div>
                                    </div>

                                    <div className="cost-item">
                                        <div className="flex justify-between mb-1">
                                            <span className="text-neutral-300">Biodiversiteitsverlies</span>
                                            <span className="font-bold text-rose-300">€2,5 mld</span>
                                        </div>
                                        <div className="w-full h-3 bg-neutral-700 rounded-full overflow-hidden">
                                            <div className="h-full bg-rose-500" style={{ width: '13.4%' }}></div>
                                        </div>
                                    </div>

                                    <div className="cost-item">
                                        <div className="flex justify-between mb-1">
                                            <span className="text-neutral-300">Gezondheidsschade</span>
                                            <span className="font-bold text-rose-300">€1,0 mld</span>
                                        </div>
                                        <div className="w-full h-3 bg-neutral-700 rounded-full overflow-hidden">
                                            <div className="h-full bg-rose-500" style={{ width: '5.4%' }}></div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="space-y-3 text-neutral-300">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                                        <span>Klimaatschade (CO₂-uitstoot)</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                                        <span>Stikstofschade (natuur)</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                                        <span>Biodiversiteitsverlies</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                                        <span>Gezondheidsschade</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* NET LOSS CALCULATION */}
                    <div className="bg-gradient-to-r from-neutral-800 to-neutral-900 border border-neutral-700 rounded-2xl p-8 mb-8">
                        <h4 className="text-2xl font-bold mb-6 text-center">De rekensom</h4>

                        <div className="max-w-md mx-auto">
                            <div className="space-y-6">
                                <div className="flex justify-between items-center py-3 border-b border-neutral-700">
                                    <span className="text-lg">Economische waarde</span>
                                    <span className="text-xl font-bold text-emerald-300">+ €13,3 mld</span>
                                </div>

                                <div className="flex justify-between items-center py-3 border-b border-neutral-700">
                                    <span className="text-lg">Maatschappelijke kosten</span>
                                    <span className="text-xl font-bold text-rose-300">- €18,6 mld</span>
                                </div>

                                <div className="flex justify-between items-center py-3 border-t border-neutral-600">
                                    <span className="text-xl font-bold">Netto resultaat</span>
                                    <span className="text-2xl font-bold text-rose-400">- €5,3 mld</span>
                                </div>
                            </div>

                            <div className="mt-8 text-center">
                                <div className="text-lg font-bold text-rose-300 mb-2">
                                    Dit verlies wordt nu betaald door:
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <div className="bg-neutral-800/50 p-3 rounded-lg">
                                        <div className="text-sm opacity-75">Jouw belasting</div>
                                        <div className="font-bold">€300/jaar</div>
                                    </div>
                                    <div className="bg-neutral-800/50 p-3 rounded-lg">
                                        <div className="text-sm opacity-75">Toekomstige generaties</div>
                                        <div className="font-bold">Onbekend</div>
                                    </div>
                                    <div className="bg-neutral-800/50 p-3 rounded-lg">
                                        <div className="text-sm opacity-75">De natuur</div>
                                        <div className="font-bold">Onherstelbaar</div>
                                    </div>
                                    <div className="bg-neutral-800/50 p-3 rounded-lg">
                                        <div className="text-sm opacity-75">Onze gezondheid</div>
                                        <div className="font-bold">Zorgkosten ↑</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* KEY TAKEAWAY */}
                    <div className="bg-gradient-to-r from-emerald-900/30 to-teal-900/30 border border-emerald-800/50 rounded-2xl p-8">
                        <div className="flex flex-col md:flex-row items-center gap-6">
                            <div className="text-emerald-400">
                                <Calculator size={48} />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold mb-3">De conclusie van de cijfers</h4>
                                <p className="text-lg text-neutral-300">
                                    De intensieve vee-industrie lijkt winstgevend, maar dat is omdat de
                                    <span className="font-bold text-rose-300"> échte kosten worden afgewenteld</span> op de samenleving,
                                    toekomstige generaties en de natuur. Dit systeem is niet duurzaam -
                                    letterlijk en figuurlijk.
                                </p>
                                <div className="mt-4 text-sm text-neutral-400">
                                    <p>De vraag is niet of we kunnen veranderen, maar of we het ons kunnen veroorloven níét te veranderen.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SOURCES */}
                <div className="mt-12 text-center text-sm text-neutral-500">
                    <p className="mb-2">Bronnen:</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <span className="px-3 py-1 bg-neutral-800 rounded-full">Deloitte "The Hidden Bill" (2024)</span>
                        <span className="px-3 py-1 bg-neutral-800 rounded-full">Planbureau voor de Leefomgeving (PBL)</span>
                        <span className="px-3 py-1 bg-neutral-800 rounded-full">Rijksinstituut voor Volksgezondheid (RIVM)</span>
                        <span className="px-3 py-1 bg-neutral-800 rounded-full">Centraal Bureau voor de Statistiek (CBS)</span>
                    </div>
                </div>
            </div>
        </div>
    );
}