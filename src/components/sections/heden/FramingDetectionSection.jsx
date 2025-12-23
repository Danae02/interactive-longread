// components/sections/interactive/FramingDetectionSection.jsx
import React, { useState } from 'react';
import { Search, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

export default function FramingDetectionSection() {
    const [userAnswers, setUserAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);

    const framingExamples = [
        {
            id: 1,
            text: "De sector levert een cruciale bijdrage aan onze voedselzekerheid.",
            type: "food_security_frame",
            analysis: "Dit frame zet 'voedselzekerheid' in als argument tegen verandering, terwijl 70% van Nederlands vlees wordt geëxporteerd."
        },
        {
            id: 2,
            text: "Onze boeren zijn de duurzaamste ter wereld.",
            type: "relative_comparison",
            analysis: "Een relatieve vergelijking die de absolute impact verhult. Nederlandse veehouderij is efficiënt per dier, maar de totale schade is enorm door schaal."
        },
        {
            id: 3,
            text: "Dit beleid betekent het einde van het familiebedrijf.",
            type: "emotional_dramatization",
            analysis: "Dramatisering van economische belangen tot existentiële strijd voor traditie en identiteit."
        },
        {
            id: 4,
            text: "We moeten innovatie stimuleren, niet verbieden.",
            type: "false_dichotomy",
            analysis: "Creëert een vals dilemma tussen innovatie en regulering, alsof deze elkaar uitsluiten."
        }
    ];

    const handleAnswer = (id, answer) => {
        setUserAnswers(prev => ({ ...prev, [id]: answer }));
    };

    const calculateScore = () => {
        const correctAnswers = {
            1: 'frame',
            2: 'frame',
            3: 'frame',
            4: 'frame'
        };

        let score = 0;
        Object.keys(userAnswers).forEach(id => {
            if (userAnswers[id] === correctAnswers[id]) score++;
        });
        return score;
    };

    return (
        <div className="framing-section py-16 px-6 bg-neutral-900">
            <div className="max-w-6xl mx-auto">

                {/* TITEL */}
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold mb-4">6. Hoe herken je lobby en framing?</h3>
                    <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                        Een praktische toolkit om strategische communicatie te doorzien
                    </p>
                </div>

                {/* TOOLKIT */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    <div className="bg-neutral-800 p-6 rounded-lg">
                        <div className="text-emerald-400 mb-4">
                            <Search size={32} />
                        </div>
                        <h5 className="text-xl font-bold mb-3">1. Check de bron</h5>
                        <p className="text-neutral-300">
                            Wie betaalt dit onderzoek, lespakket of campagne? Is er belangenverstrengeling?
                        </p>
                        <div className="mt-4 text-sm text-neutral-400">
                            <p><strong>Voorbeeld:</strong> Lesmateriaal van De Heus via Jong Leren Eten</p>
                        </div>
                    </div>

                    <div className="bg-neutral-800 p-6 rounded-lg">
                        <div className="text-emerald-400 mb-4">
                            <AlertTriangle size={32} />
                        </div>
                        <h5 className="text-xl font-bold mb-3">2. Check de taal</h5>
                        <p className="text-neutral-300">
                            Worden emotionele termen gebruikt? Kijk naar eufemismen en framing-woorden.
                        </p>
                        <div className="mt-4 text-sm text-neutral-400">
                            <p><strong>Voorbeeld:</strong> "Verwerken" i.p.v. "slachten", "product" i.p.v. "kalf"</p>
                        </div>
                    </div>

                    <div className="bg-neutral-800 p-6 rounded-lg">
                        <div className="text-emerald-400 mb-4">
                            <Search size={32} />
                        </div>
                        <h5 className="text-xl font-bold mb-3">3. Check de cijfers</h5>
                        <p className="text-neutral-300">
                            Komen cijfers van onafhankelijke instanties (PBL, CBS) of van brancheorganisaties?
                        </p>
                        <div className="mt-4 text-sm text-neutral-400">
                            <p><strong>Voorbeeld:</strong> Agrifacts vs. officiële stikstofcijfers</p>
                        </div>
                    </div>
                </div>

                {/* INTERACTIEVE FRAMING TEST */}
                <div className="bg-neutral-800 p-8 rounded-lg mb-8">
                    <h4 className="text-2xl font-bold mb-6">Test: Herken jij de framing?</h4>

                    <div className="space-y-6">
                        {framingExamples.map(example => (
                            <div key={example.id} className="bg-neutral-700 p-6 rounded-lg">
                                <p className="text-lg mb-4 font-medium">"{example.text}"</p>

                                <div className="flex flex-col sm:flex-row gap-4 mb-4">
                                    <button
                                        onClick={() => handleAnswer(example.id, 'frame')}
                                        className={`px-6 py-3 rounded-lg transition-colors ${
                                            userAnswers[example.id] === 'frame'
                                                ? 'bg-emerald-700 text-white'
                                                : 'bg-neutral-600 hover:bg-neutral-500'
                                        }`}
                                    >
                                        Dit is framing
                                    </button>
                                    <button
                                        onClick={() => handleAnswer(example.id, 'fact')}
                                        className={`px-6 py-3 rounded-lg transition-colors ${
                                            userAnswers[example.id] === 'fact'
                                                ? 'bg-rose-700 text-white'
                                                : 'bg-neutral-600 hover:bg-neutral-500'
                                        }`}
                                    >
                                        Dit is een feit
                                    </button>
                                </div>

                                {userAnswers[example.id] && (
                                    <div className={`p-4 rounded-lg ${
                                        userAnswers[example.id] === 'frame'
                                            ? 'bg-emerald-900/30 border border-emerald-800'
                                            : 'bg-rose-900/30 border border-rose-800'
                                    }`}>
                                        <div className="flex items-center gap-2 mb-2">
                                            {userAnswers[example.id] === 'frame' ? (
                                                <>
                                                    <CheckCircle size={20} className="text-emerald-400" />
                                                    <span className="font-bold text-emerald-400">Correct!</span>
                                                </>
                                            ) : (
                                                <>
                                                    <XCircle size={20} className="text-rose-400" />
                                                    <span className="font-bold text-rose-400">Niet correct</span>
                                                </>
                                            )}
                                        </div>
                                        <p className="text-sm">{example.analysis}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 text-center">
                        <button
                            onClick={() => setShowResults(true)}
                            className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 rounded-lg font-bold transition-colors"
                        >
                            Bekijk mijn score
                        </button>
                    </div>
                </div>

                {/* RESULTATEN */}
                {showResults && (
                    <div className="bg-gradient-to-r from-emerald-900/30 to-teal-900/30 p-8 rounded-lg border border-emerald-800/50">
                        <h4 className="text-2xl font-bold mb-4 text-center">Jouw score</h4>
                        <div className="text-center mb-6">
                            <div className="text-6xl font-bold mb-2">{calculateScore()} / 4</div>
                            <p className="text-neutral-300">
                                {calculateScore() === 4 ? 'Perfect! Je doorziet framing.' :
                                    calculateScore() >= 2 ? 'Goed bezig, maar er is ruimte voor verbetering.' :
                                        'Oefening baart kunst. Blijf kritisch!'}
                            </p>
                        </div>

                        <div className="text-center">
                            <p className="text-sm text-neutral-400">
                                <strong>Tip:</strong> Blijf altijd vragen: "Wie heeft belang bij deze boodschap?"
                                en "Welke feiten worden weggelaten?"
                            </p>
                        </div>
                    </div>
                )}

                {/* BRONNEN */}
                <div className="mt-12 text-center text-sm text-neutral-500">
                    <p>Deze toolkit is gebaseerd op interviews met experts en analyses van lobby-communicatie.</p>
                </div>
            </div>
        </div>
    );
}