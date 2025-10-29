import React, { useState, useEffect } from 'react';
import { Calendar, ChevronRight, X } from 'lucide-react';

export default function TimelineSection() {
    const [selectedYear, setSelectedYear] = useState(null);
    const [hoveredYear, setHoveredYear] = useState(null);

    const timelineData = [
        {
            year: "1934",
            title: "Eerste Marketingcampagnes",
            shortDesc: "Crisis Zuivelbureau opgericht",
            content: "Nederland produceert zoveel melk dat er overschotten ontstaan. Het Crisis Zuivelbureau wordt opgericht in samenwerking met de overheid en reclamebureaus om melkconsumptie te stimuleren. Dit markeert het begin van grootschalige, door de overheid gesteunde marketing voor zuivelproducten.",
            impact: "Start van georganiseerde voedselpromotie"
        },
        {
            year: "1945",
            title: "Naoorlogs Herstel",
            shortDesc: "'Nooit meer honger' beleid",
            content: "Na de Hongerwinter wordt Sicco Mansholt minister van Landbouw. Onder het motto 'nooit meer honger' wordt beleid gevoerd om van kleinschalige gemengde bedrijven naar gespecialiseerde, grootschalige productie-eenheden te gaan. Het trauma van voedselonzekerheid drijft de focus op voedselzekerheid.",
            impact: "Basis voor industriële landbouw gelegd"
        },
        {
            year: "1948",
            title: "Marshallplan",
            shortDesc: "Amerikaanse modernisering",
            content: "Het Amerikaanse Marshallplan (1948-1952) levert moderne landbouwtechnologie zoals tractoren en kunstmest. Financiële steun en kennisoverdracht geven een enorme push richting industriële landbouw. Boeren worden actief aangemoedigd te specialiseren en schaal te vergroten.",
            impact: "Versnelling van mechanisatie en specialisatie"
        },
        {
            year: "1958",
            title: "Melkbrigade & Joris Driepinter",
            shortDesc: "Kinderen als marketingdoel",
            content: "De Melk-brigade wordt gelanceerd: kinderen worden 'Melkbrigadiers' door 30 extra glazen melk te drinken. Joris Driepinter volgt als stripheld die problemen oplost met drie glazen melk per dag. Campagnes gebruiken scholen, strips en evenementen om consumptie te normaliseren.",
            impact: "Complete generatie beïnvloed in eetgedrag"
        },
        {
            year: "1962",
            title: "Europees Landbouwbeleid",
            shortDesc: "GLB garandeert prijzen",
            content: "Het Gemeenschappelijk Landbouwbeleid (GLB) van start met gegarandeerde minimumprijzen. Boeren kunnen investeren zonder marktrisico. Exportbarrières verdwijnen, Nederland kan heel Europa bedienen. Subsidies voor modernisering belonen schaalvergroting direct.",
            impact: "Explosieve groei vee-industrie mogelijk"
        },
        {
            year: "1976",
            title: "Binnenhof-BBQ",
            shortDesc: "Politieke lobby verankerd",
            content: "De Stichting Voorlichtingsbureau voor Vlees organiseert de eerste parlementaire barbecue op het Binnenhof. Politici, ambtenaren en journalisten genieten gezamenlijk van worstjes en saté. De campagne 'Vlees mevrouw, u weet wel waarom' richt zich op Nederlandse huisvrouwen.",
            impact: "Vleesconsumptie genormaliseerd in politieke cultuur"
        },
        {
            year: "2019",
            title: "Stikstofcrisis",
            shortDesc: "PAS-uitspraak schudt sector op",
            content: "De Raad van State vernietigt het Programma Aanpak Stikstof. Dit heeft enorme gevolgen voor de veehouderij. Veel bedrijven moeten inkrimpen of stoppen. De discussie over de toekomst van de sector laait op na decennia van groei.",
            impact: "Duizenden boeren in onzekerheid, transitie noodzakelijk"
        },
        {
            year: "2024",
            title: "Transitie",
            shortDesc: "Kringlooplandbouw als toekomst?",
            content: "De sector staat voor grote keuzes. Kringlooplandbouw, extensivering en innovatieve concepten worden omarmd door sommigen, terwijl anderen vasthouden aan het huidige model. De erfenis van 80 jaar groeibe-leid botst met ecologische grenzen.",
            impact: "Fundamentele herbezinning op voedselsysteem"
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
                            Van Trauma tot Transitie
                        </h2>
                    </div>
                    <p className="text-neutral-400 text-sm md:text-base max-w-2xl mx-auto">
                        De opkomst van de Nederlandse vee-industrie: van 'nooit meer honger' naar ecologische grenzen
                    </p>
                </div>

                {/* Desktop Timeline */}
                <div className="hidden md:block relative pb-8">
                    <div className="absolute top-8 left-4 right-4 h-0.5 bg-emerald-900" />

                    <div className="flex justify-between items-start relative px-2">
                        {timelineData.map((item, index) => (
                            <div key={index} className="flex flex-col items-center" style={{ width: `${100 / timelineData.length}%` }}>
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
                                    <span className="text-white font-bold text-sm">{item.year}</span>
                                </button>

                                {hoveredYear === index && (
                                    <div className="absolute top-20 bg-neutral-700 p-3 rounded-lg shadow-xl w-48 pointer-events-none z-20">
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
                                <div className="flex items-center gap-3">
                                    <div className="bg-emerald-600 text-white px-3 py-1 rounded-full font-bold text-sm">
                                        {timelineData[selectedYear].year}
                                    </div>
                                    <div className="text-xs text-neutral-400">
                                        {selectedYear + 1} van {timelineData.length}
                                    </div>
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
                                            Historische Context
                                        </h4>
                                        <p className="text-neutral-200 leading-relaxed">
                                            {timelineData[selectedYear].content}
                                        </p>
                                    </div>

                                    <div className="bg-emerald-900/30 border border-emerald-700/50 rounded-lg p-4">
                                        <h4 className="text-xs font-semibold text-emerald-400 uppercase tracking-wide mb-2">
                                            Impact op de Sector
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
                                        className="text-sm text-emerald-400 hover:text-emerald-300 disabled:text-neutral-600 disabled:cursor-not-allowed transition-colors font-medium flex items-center gap-2"
                                    >
                                        ← Vorige periode
                                    </button>
                                    <button
                                        onClick={() => selectedYear < timelineData.length - 1 && setSelectedYear(selectedYear + 1)}
                                        disabled={selectedYear === timelineData.length - 1}
                                        className="text-sm text-emerald-400 hover:text-emerald-300 disabled:text-neutral-600 disabled:cursor-not-allowed transition-colors font-medium flex items-center gap-2"
                                    >
                                        Volgende periode →
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