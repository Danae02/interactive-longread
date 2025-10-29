import React, { useState, useEffect } from 'react';
import { Calendar, ChevronRight, X } from 'lucide-react';

export default function TimelineSection() {
    const [selectedYear, setSelectedYear] = useState(null);
    const [hoveredYear, setHoveredYear] = useState(null);

    const timelineData = [
        {
            year: "1950",
            title: "Kleinschalig Begin",
            shortDesc: "Traditionele familiebedrijven",
            content: "Na de Tweede Wereldoorlog bestaan de meeste boerderijen uit kleine familiebedrijven met gemiddeld 20-30 koeien. De focus ligt op lokale markten en directe verkoop.",
            impact: "Basis voor de Nederlandse veehouderij"
        },
        {
            year: "1980",
            title: "Industrialisatie",
            shortDesc: "Schaalvergroting neemt een vlucht",
            content: "De sector professionaliseert en industrialiseert snel. Nieuwe technieken en EU-subsidies maken het mogelijk om grootschaliger te produceren. Het gemiddelde bedrijf groeit naar 50-60 koeien.",
            impact: "Productie verdubbelt in 10 jaar tijd"
        },
        {
            year: "2000",
            title: "EU-Uitbreiding",
            shortDesc: "Nieuwe exportmarkten",
            content: "Door de uitbreiding van de EU ontstaan nieuwe afzetmarkten. Nederlandse bedrijven gaan steeds meer exporteren. Megastallen worden normaal, met gemiddeld 100+ koeien per bedrijf.",
            impact: "Nederland wordt 2e exporteur ter wereld"
        },
        {
            year: "2015",
            title: "Kritische Stemmen",
            shortDesc: "Maatschappelijk debat",
            content: "Het maatschappelijk debat over bio-industrie, dierenwelzijn en milieu-impact neemt toe. Documentaires en onderzoeken zorgen voor meer bewustwording bij consumenten.",
            impact: "Eerste krimp in vleesconsumptie"
        },
        {
            year: "2019",
            title: "Stikstofcrisis",
            shortDesc: "PAS-uitspraak schudt sector op",
            content: "De Raad van State vernietigt het Programma Aanpak Stikstof. Dit heeft enorme gevolgen voor de veehouderij. Veel bedrijven moeten inkrimpen of stoppen. De discussie over de toekomst van de sector laait op.",
            impact: "Duizenden boeren in onzekerheid"
        },
        {
            year: "2024",
            title: "Transitie",
            shortDesc: "Kringlooplandbouw als toekomst?",
            content: "De sector staat voor grote keuzes. Kringlooplandbouw, extensivering en innovatieve concepten worden omarmd door sommigen, terwijl anderen vasthouden aan het huidige model. De toekomst is onzeker.",
            impact: "Verschuiving naar duurzamer produceren"
        }
    ];

    const handleYearClick = (index) => {
        setSelectedYear(index);
        document.body.style.overflow = 'hidden';
    };

    const handleCloseModal = () => {
        setSelectedYear(null);
        document.body.style.overflow = 'unset';
    };

    useEffect(() => {
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    // Close modal on escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') handleCloseModal();
        };
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, []);

    return (
        <section className="timeline-section bg-neutral-800 py-12 md:py-16 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-8 md:mb-12">
                    <div className="flex items-center justify-center gap-3 mb-3">
                        <Calendar className="text-emerald-400" size={28} />
                        <h2 className="text-2xl md:text-3xl font-bold text-white">
                            Van Klein naar Groot
                        </h2>
                    </div>
                    <p className="text-neutral-400 text-sm md:text-base">
                        Klik op een jaar voor meer informatie
                    </p>
                </div>

                {/* Desktop Timeline */}
                <div className="hidden md:block relative pb-8">
                    <div className="absolute top-8 left-4 right-4 h-0.5 bg-emerald-900" />

                    <div className="flex justify-between items-start relative px-2">
                        {timelineData.map((item, index) => (
                            <div key={index} className="flex flex-col items-center" style={{ width: '140px' }}>
                                <button
                                    onClick={() => handleYearClick(index)}
                                    onMouseEnter={() => setHoveredYear(index)}
                                    onMouseLeave={() => setHoveredYear(null)}
                                    className={`
                                        relative z-10 rounded-full transition-all duration-200 cursor-pointer
                                        flex items-center justify-center border-2 border-white/20
                                        ${hoveredYear === index
                                        ? 'bg-emerald-500 shadow-lg shadow-emerald-500/50 scale-110'
                                        : 'bg-emerald-700 hover:bg-emerald-600'
                                    }
                                    `}
                                    style={{ width: '64px', height: '64px' }}
                                >
                                    <span className="text-white font-bold text-base">{item.year}</span>
                                </button>

                                {hoveredYear === index && (
                                    <div className="absolute top-20 bg-neutral-700 p-3 rounded-lg shadow-xl w-44 pointer-events-none">
                                        <h4 className="font-bold text-white mb-1 text-sm">{item.title}</h4>
                                        <p className="text-xs text-neutral-300 mb-2">{item.shortDesc}</p>
                                        <p className="text-xs text-emerald-400 flex items-center gap-1">
                                            Klik voor details <ChevronRight size={12} />
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile Timeline - Compact */}
                <div className="md:hidden space-y-3">
                    {timelineData.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => handleYearClick(index)}
                            className="w-full bg-neutral-700 hover:bg-neutral-600 p-4 rounded-lg text-left transition-all border-l-4 border-emerald-600"
                        >
                            <div className="flex items-center gap-3">
                                <div className="bg-emerald-600 text-white px-3 py-1 rounded-full font-bold text-sm flex-shrink-0">
                                    {item.year}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="font-bold text-white text-sm">{item.title}</h4>
                                    <p className="text-xs text-neutral-400 truncate">{item.shortDesc}</p>
                                </div>
                                <ChevronRight className="text-emerald-400 flex-shrink-0" size={20} />
                            </div>
                        </button>
                    ))}
                </div>

                {/* Modal */}
                {selectedYear !== null && (
                    <div
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        onClick={handleCloseModal}
                    >
                        <div
                            className="bg-neutral-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl border border-emerald-900/50"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="sticky top-0 bg-neutral-800 border-b border-neutral-700 px-4 py-3 flex justify-between items-center z-10">
                                <div className="bg-emerald-600 text-white px-3 py-1 rounded-full font-bold text-sm">
                                    {timelineData[selectedYear].year}
                                </div>
                                <button
                                    onClick={handleCloseModal}
                                    className="text-neutral-400 hover:text-white transition-colors bg-neutral-700 rounded-full p-1.5"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="p-6">
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                    {timelineData[selectedYear].title}
                                </h3>
                                <p className="text-emerald-400 text-base mb-6">
                                    {timelineData[selectedYear].shortDesc}
                                </p>

                                <div className="space-y-4">
                                    <div>
                                        <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wide mb-2">
                                            Wat gebeurde er?
                                        </h4>
                                        <p className="text-neutral-200 leading-relaxed">
                                            {timelineData[selectedYear].content}
                                        </p>
                                    </div>

                                    <div className="bg-emerald-900/30 border border-emerald-700/50 rounded-lg p-4">
                                        <h4 className="text-xs font-semibold text-emerald-400 uppercase tracking-wide mb-2">
                                            Impact
                                        </h4>
                                        <p className="text-white font-medium">
                                            {timelineData[selectedYear].impact}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex justify-between mt-6 pt-4 border-t border-neutral-700">
                                    <button
                                        onClick={() => selectedYear > 0 && setSelectedYear(selectedYear - 1)}
                                        disabled={selectedYear === 0}
                                        className="text-sm text-emerald-400 hover:text-emerald-300 disabled:text-neutral-600 disabled:cursor-not-allowed transition-colors font-medium"
                                    >
                                        ← Vorige
                                    </button>
                                    <button
                                        onClick={() => selectedYear < timelineData.length - 1 && setSelectedYear(selectedYear + 1)}
                                        disabled={selectedYear === timelineData.length - 1}
                                        className="text-sm text-emerald-400 hover:text-emerald-300 disabled:text-neutral-600 disabled:cursor-not-allowed transition-colors font-medium"
                                    >
                                        Volgende →
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}