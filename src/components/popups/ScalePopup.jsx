import React, { useState, useEffect } from 'react';
import { X, Play, Pause, RotateCcw } from 'lucide-react';

const ScalePopup = ({ onClose }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [timeframe, setTimeframe] = useState('second');
    const [animalCount, setAnimalCount] = useState(0);

    const rates = {
        second: { animals: 17, label: 'per seconde', interval: 1000 },
        minute: { animals: 1015, label: 'per minuut', interval: 500 },
    };

    useEffect(() => {
        let interval;
        if (isPlaying) {
            const rate = rates[timeframe];
            setAnimalCount(0);
            interval = setInterval(() => {
                setAnimalCount(prev => {
                    const newCount = prev + rate.animals;
                    return newCount > rate.animals * 10 ? 0 : newCount;
                });
            }, rate.interval);
        }
        return () => clearInterval(interval);
    }, [isPlaying, timeframe]);

    const handleReset = () => {
        setIsPlaying(false);
        setAnimalCount(0);
    };

    const handleClose = () => {
        handleReset();
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
            <div className="bg-white text-neutral-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-2xl font-bold">Hoeveel is 533 miljoen dieren?</h3>
                        <button
                            onClick={handleClose}
                            className="text-neutral-500 hover:text-neutral-700"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    <div className="mb-6">
                        <p className="text-lg mb-6">
                            <strong>533.456.900 dieren</strong> is een bijna onvoorstelbaar groot aantal.
                            Hier zijn enkele vergelijkingen om het in perspectief te plaatsen:
                        </p>

                        {/* Interactieve Visualisatie */}
                        <div className="interactive-section bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-xl mb-6 border-2 border-blue-200">
                            <h4 className="text-xl font-bold mb-4 text-blue-900 text-center">
                                💡 Interactieve teller: Zie het tempo in real-time
                            </h4>

                            <div className="counter-display mb-4 text-center">
                                <div className="text-4xl md:text-5xl font-bold text-blue-800 mb-2">
                                    {animalCount.toLocaleString('nl-NL')}
                                </div>
                                <div className="text-lg text-blue-600 font-semibold">
                                    dieren {rates[timeframe].label}
                                </div>
                            </div>

                            <div className="controls mb-4 flex justify-center gap-4">
                                <button
                                    onClick={() => setIsPlaying(!isPlaying)}
                                    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                                >
                                    {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                                    {isPlaying ? 'Pauze' : 'Start'}
                                </button>
                                <button
                                    onClick={handleReset}
                                    className="flex items-center gap-2 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                                >
                                    <RotateCcw size={18} />
                                    Reset
                                </button>
                            </div>

                            <div className="timeframe-selector flex justify-center gap-2 mb-4">
                                {Object.keys(rates).map((key) => (
                                    <button
                                        key={key}
                                        onClick={() => {
                                            setTimeframe(key);
                                            setAnimalCount(0);
                                        }}
                                        className={`px-3 py-2 rounded-lg transition-colors ${
                                            timeframe === key
                                                ? 'bg-blue-600 text-white'
                                                : 'bg-white text-blue-600 border border-blue-300 hover:bg-blue-50'
                                        }`}
                                    >
                                        {key === 'second' && 'Seconde'}
                                        {key === 'minute' && 'Minuut'}


                                    </button>
                                ))}
                            </div>

                            <div className="progress-bar bg-white rounded-full h-4 border border-blue-300 overflow-hidden">
                                <div
                                    className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300"
                                    style={{
                                        width: `${Math.min((animalCount / (rates[timeframe].animals * 10)) * 100, 100)}%`
                                    }}
                                />
                            </div>
                            <div className="text-sm text-blue-600 text-center mt-2">
                                {Math.round((animalCount / (rates[timeframe].animals * 10)) * 100)}% van 10x {rates[timeframe].label}
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4 mb-6">
                            <div className="bg-blue-50 p-4 rounded-lg">
                                <h4 className="font-bold mb-2 text-blue-900">Vergelijking met bevolking</h4>
                                <ul className="space-y-1 text-blue-800">
                                    <li>• <strong>31x</strong> de Nederlandse bevolking (17 miljoen)</li>
                                    <li>• Meer dan de bevolking van de VS, Duitsland en Frankrijk bij elkaar</li>
                                    <li>• Bijna <strong>7%</strong> van de wereldbevolking</li>
                                </ul>
                            </div>

                            <div className="bg-green-50 p-4 rounded-lg">
                                <h4 className="font-bold mb-2 text-green-900">In de tijd</h4>
                                <ul className="space-y-1 text-green-800">
                                    <li>• <strong>17 dieren </strong>per seconde </li>
                                    <li>• <strong>1.015 dieren </strong>per minuut</li>
                                    <li>• <strong>60.900 dieren </strong>per uur </li>
                                    <li>• <strong>1,46 miljoen dieren </strong>per dag </li>
                                </ul>
                            </div>

                        </div>

                        <div className="mt-6 p-4 bg-neutral-100 rounded-lg">
                            <p className="text-sm text-neutral-600">
                                <strong>Let op:</strong> Dit zijn alleen de dieren die in Nederland worden geslacht.
                                Hierin zijn niet meegenomen de miljoenen dieren die levend worden geëxporteerd
                                voor slacht in het buitenland, of de eendagskuikens die direct na geboorte worden gedood.
                            </p>
                        </div>
                    </div>

                    <button
                        onClick={handleClose}
                        className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition-colors font-semibold"
                    >
                        Sluiten
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ScalePopup;