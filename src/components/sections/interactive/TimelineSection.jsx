
import React, { useState, useEffect, useRef } from 'react';
import { Calendar, ChevronRight, X, Image as ImageIcon, Maximize2 } from 'lucide-react';

export default function TimelineSection() {
    const [selectedYear, setSelectedYear] = useState(null);
    const [hoveredYear, setHoveredYear] = useState(null);
    const [zoomedImage, setZoomedImage] = useState(null);
    const modalRef = useRef(null);
    const closeButtonRef = useRef(null);

    const timelineData = [
        {
            year: "1934",
            title: "Eerste Marketingcampagnes",
            shortDesc: "Crisis Zuivelbureau opgericht",
            content: "Door de wereldwijde economische crisis kelderen melk- en veeprijzen. Om een instorting van de melkveehouderij te voorkomen richt de overheid het Crisis-Zuivelbureau op. Het bureau coördineert crisismaatregelen, ondersteunt de sector en bevordert afzet van zuivelproducten.",
            impact: "Start van georganiseerde voedselpromotie",
            images: [
                {
                    src: "/afbeeldingen-timeline/noodkreet2landbouw.png",
                    alt: "Noodkreet landbouw 1 - Crisis in de landbouwsector"
                },
                {
                    src: "/afbeeldingen-timeline/noodkreetlandbouw.png",
                    alt: "Noodkreet landbouw 2 - Problemen in de veehouderij"
                },
                {
                    src: "/afbeeldingen-timeline/prijzen.png",
                    alt: "Prijzenoverzicht - Dalende prijzen tijdens crisis"
                }
            ]
        },

        {
            year: "1945",
            title: "Naoorlogs Herstel",
            shortDesc: "'Nooit meer honger' beleid",
            content: "Na de Hongerwinter wordt Sicco Mansholt minister van Landbouw. Onder het motto 'nooit meer honger' wordt beleid gevoerd om van kleinschalige gemengde bedrijven naar gespecialiseerde, grootschalige productie-eenheden te gaan. Het trauma van voedselonzekerheid drijft de focus op voedselzekerheid.",
            impact: "Basis voor industriële landbouw gelegd",
            images: [
                {
                    src: "/afbeeldingen-timeline/Sicco_Mansholt.webp",
                    alt: "Sicco Mansholt - Minister van Landbouw die het 'nooit meer honger' beleid invoerde na de Tweede Wereldoorlog"
                }
            ]
        },

        {
            year: "1948",
            title: "Marshallplan",
            shortDesc: "Amerikaanse modernisering",
            content: "Het Amerikaanse Marshallplan (1948-1952) levert moderne landbouwtechnologie zoals tractoren en kunstmest. Financiële steun en kennisoverdracht geven een enorme push richting industriële landbouw. Boeren worden actief aangemoedigd te specialiseren en schaal te vergroten.",
            impact: "Versnelling van mechanisatie en specialisatie",
            images: null
        },

        {
            year: "1958",
            title: "Melkbrigade & Joris Driepinter",
            shortDesc: "Kinderen als marketingdoel",
            content: "De Melk-brigade wordt gelanceerd: kinderen worden 'Melkbrigadiers' door 30 extra glazen melk te drinken. Joris Driepinter volgt als stripheld die problemen oplost met drie glazen melk per dag. Campagnes gebruiken scholen, strips en evenementen om consumptie te normaliseren.",
            impact: "Complete generatie beïnvloed in eetgedrag",
            images: [
                {
                    src: "/afbeeldingen-timeline/logboek-mbrigade.jpg",
                    alt: "Logboek van de Melkbrigade uit 1958 - Kinderen werden aangemoedigd extra melk te drinken"
                },
                {
                    src: "/afbeeldingen-timeline/jorisdriepinter.jpg",
                    alt: "Joris Driepinter - Stripheld die kinderen aanmoedigde drie glazen melk per dag te drinken"
                }
            ]
        },

        {
            year: "1962",
            title: "Europees Landbouwbeleid",
            shortDesc: "GLB garandeert prijzen",
            content: "Het Gemeenschappelijk Landbouwbeleid (GLB) van start met gegarandeerde minimumprijzen. Boeren kunnen investeren zonder marktrisico. Exportbarrières verdwijnen, Nederland kan heel Europa bedienen. Subsidies voor modernisering belonen schaalvergroting direct.",
            impact: "Explosieve groei vee-industrie mogelijk",
            images: null
        },

        {
            year: "1976",
            title: "Binnenhof-BBQ en vlees",
            shortDesc: "Politieke lobby verankerd",
            content: "De Stichting Voorlichtingsbureau voor Vlees organiseert de eerste parlementaire barbecue op het Binnenhof. Politici, ambtenaren en journalisten genieten gezamenlijk van worstjes en saté. De campagne 'Vlees mevrouw, u weet wel waarom' richt zich op Nederlandse huisvrouwen, maar stichting Voorlichtingsbureau Vlees, Vleeswaren en Vleesconserven heeft ook nog andere afbeeldingen",
            impact: "Vleesconsumptie genormaliseerd in politieke cultuur",
            images: [
                {
                    src: "/afbeeldingen-timeline/minister-De-Ruiter-Justitie-eet-sate.jpg.webp",
                    alt: "Barbecue op het Binnenhof op 24 juni 1982. Justitie-minister De Ruiter eet saté (Nationaal Archief, CC0 – Bogaerts, Rob / Anefo)"
                },
                {
                    src: "/afbeeldingen-timeline/feestmetvlees.jpg",
                    alt: "Stichting Voorlichtingsbureau Vlees campagne - Reclamebeeld met de boodschap dat vlees bij elk feest hoort, om vleesconsumptie te normaliseren bij sociale gelegenheden"
                },
                {
                    src: "/afbeeldingen-timeline/vleesvoorsterkeslimmerds.jpg",
                    alt: "Stichting Voorlichtingsbureau Vlees campagne - Reclame met de slogan 'vlees voor sterke slimmerds' die vlees associeert met kracht en intelligentie"
                }
            ]
        },

        {
            year: "2019",
            title: "Stikstofcrisis",
            shortDesc: "PAS-uitspraak schudt sector op",
            content: "De Raad van State vernietigt het Programma Aanpak Stikstof. Dit heeft enorme gevolgen voor de veehouderij. Veel bedrijven moeten inkrimpen of stoppen. De discussie over de toekomst van de sector laait op na decennia van groei.",
            impact: "Duizenden boeren in onzekerheid, transitie noodzakelijk",
            images: null
        },

        {
            year: "2024",
            title: "Transitie",
            shortDesc: "Kringlooplandbouw als toekomst?",
            content: "De sector staat voor grote keuzes. Kringlooplandbouw, extensivering en innovatieve concepten worden omarmd door sommigen, terwijl anderen vasthouden aan het huidige model. De erfenis van 80 jaar groeibe-leid botst met ecologische grenzen.",
            impact: "Fundamentele herbezinning op voedselsysteem",
            images: null
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

    const handleImageClick = (imageSrc, imageAlt) => {
        setZoomedImage({ src: imageSrc, alt: imageAlt });
    };

    const handleCloseZoom = () => {
        setZoomedImage(null);
    };

    useEffect(() => {
        if (selectedYear !== null && closeButtonRef.current) {
            closeButtonRef.current.focus();
        }
    }, [selectedYear]);

    useEffect(() => {
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                if (zoomedImage) {
                    handleCloseZoom();
                } else if (selectedYear !== null) {
                    handleCloseModal();
                }
            }
        };
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [zoomedImage, selectedYear]);

    useEffect(() => {
        if (selectedYear !== null && modalRef.current) {
            const focusableElements = modalRef.current.querySelectorAll(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];

            const trapFocus = (e) => {
                if (e.key === 'Tab') {
                    if (e.shiftKey) {
                        if (document.activeElement === firstElement) {
                            e.preventDefault();
                            lastElement.focus();
                        }
                    } else {
                        if (document.activeElement === lastElement) {
                            e.preventDefault();
                            firstElement.focus();
                        }
                    }
                }
            };

            modalRef.current.addEventListener('keydown', trapFocus);
            return () => {
                if (modalRef.current) {
                    modalRef.current.removeEventListener('keydown', trapFocus);
                }
            };
        }
    }, [selectedYear]);

    return (
        <section className="timeline-section bg-neutral-800 py-12 md:py-16 px-4 sm:px-6" aria-label="Tijdlijn Nederlandse vee-industrie">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-8 md:mb-12">
                    <div className="flex items-center justify-center gap-3 mb-3">
                        <Calendar className="text-emerald-400" size={28} aria-hidden="true" />
                        <h2 className="text-2xl md:text-3xl font-bold text-white">
                            Van Trauma tot Transitie
                        </h2>
                    </div>
                    <p className="text-neutral-400 text-sm md:text-base max-w-2xl mx-auto">
                        De opkomst van de Nederlandse vee-industrie: van 'nooit meer honger' naar ecologische grenzen
                    </p>
                </div>

                {/* Desktop Timeline */}
                <div className="hidden md:block relative pb-8" role="list" aria-label="Tijdlijn gebeurtenissen">
                    <div className="absolute top-8 left-4 right-4 h-0.5 bg-emerald-900" aria-hidden="true" />

                    <div className="flex justify-between items-start relative px-2">
                        {timelineData.map((item, index) => (
                            <div key={index} className="flex flex-col items-center" style={{ width: `${100 / timelineData.length}%` }} role="listitem">
                                <button
                                    onClick={() => handleYearClick(index)}
                                    onMouseEnter={() => setHoveredYear(index)}
                                    onMouseLeave={() => setHoveredYear(null)}
                                    onFocus={() => setHoveredYear(index)}
                                    onBlur={() => setHoveredYear(null)}
                                    className={`
relative z-10 rounded-full transition-all duration-200 cursor-pointer
flex items-center justify-center border-2 border-white/20
focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-neutral-800
    ${hoveredYear === index
    ? 'bg-emerald-500 shadow-lg shadow-emerald-500/50 scale-110'
    : 'bg-emerald-700 hover:bg-emerald-600'
}
    `}
                                    style={{ width: '64px', height: '64px' }}
                                    aria-label={`${item.year}: ${item.title}. ${item.shortDesc}. Klik voor meer informatie.`}
                                >
                                    <span className="text-white font-bold text-sm" aria-hidden="true">{item.year}</span>
                                </button>

                                {hoveredYear === index && (
                                    <div className="absolute top-20 bg-neutral-700 p-3 rounded-lg shadow-xl w-48 pointer-events-none z-20" role="tooltip">
                                        <h4 className="font-bold text-white mb-1 text-sm">{item.title}</h4>
                                        <p className="text-xs text-neutral-300 mb-2">{item.shortDesc}</p>
                                        {item.images && (
                                            <div className="flex items-center gap-1 text-emerald-400 text-xs mb-1">
                                                <ImageIcon size={12} aria-hidden="true" />
                                                <span>{item.images.length} afbeelding{item.images.length > 1 ? 'en' : ''}</span>
                                            </div>
                                        )}
                                        <p className="text-xs text-emerald-400 flex items-center gap-1">
                                            Klik voor details <ChevronRight size={12} aria-hidden="true" />
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile Timeline - Compact */}
                <div className="md:hidden space-y-3" role="list" aria-label="Tijdlijn gebeurtenissen">
                    {timelineData.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => handleYearClick(index)}
                            className="w-full bg-neutral-700 hover:bg-neutral-600 p-4 rounded-lg text-left transition-all border-l-4 border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-neutral-800"
                            role="listitem"
                            aria-label={`${item.year}: ${item.title}. ${item.shortDesc}. Klik voor meer informatie.`}
                        >
                            <div className="flex items-center gap-3">
                                <div className="bg-emerald-600 text-white px-3 py-1 rounded-full font-bold text-sm flex-shrink-0" aria-hidden="true">
                                    {item.year}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="font-bold text-white text-sm">{item.title}</h4>
                                    <p className="text-xs text-neutral-400 truncate">{item.shortDesc}</p>
                                    {item.images && (
                                        <div className="flex items-center gap-1 text-emerald-400 text-xs mt-1">
                                            <ImageIcon size={12} aria-hidden="true" />
                                            <span>{item.images.length} afbeelding{item.images.length > 1 ? 'en' : ''}</span>
                                        </div>
                                    )}
                                </div>
                                <ChevronRight className="text-emerald-400 flex-shrink-0" size={20} aria-hidden="true" />
                            </div>
                        </button>
                    ))}
                </div>

                {/* Modal */}
                {selectedYear !== null && (
                    <div
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        onClick={handleCloseModal}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="modal-title"
                    >
                        <div
                            ref={modalRef}
                            className="bg-neutral-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl border border-emerald-900/50"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="sticky top-0 bg-neutral-800 border-b border-neutral-700 px-4 py-3 flex justify-between items-center z-10">
                                <div className="flex items-center gap-3">
                                    <div className="bg-emerald-600 text-white px-3 py-1 rounded-full font-bold text-sm" aria-hidden="true">
                                        {timelineData[selectedYear].year}
                                    </div>
                                    <div className="text-xs text-neutral-400">
                                        {selectedYear + 1} van {timelineData.length}
                                    </div>
                                </div>
                                <button
                                    ref={closeButtonRef}
                                    onClick={handleCloseModal}
                                    className="text-neutral-400 hover:text-white transition-colors bg-neutral-700 rounded-full p-1.5 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                                    aria-label="Sluit dialoogvenster"
                                >
                                    <X size={20} aria-hidden="true" />
                                </button>
                            </div>

                            <div className="p-6">
                                <div className="flex justify-between mb-6 pb-4 border-b border-neutral-700">
                                    <button
                                        onClick={() => selectedYear > 0 && setSelectedYear(selectedYear - 1)}
                                        disabled={selectedYear === 0}
                                        className="text-sm text-emerald-400 hover:text-emerald-300 disabled:text-neutral-600 disabled:cursor-not-allowed transition-colors font-medium flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-emerald-400 rounded px-2 py-1"
                                        aria-label={selectedYear > 0 ? `Ga naar vorige periode: ${timelineData[selectedYear - 1].year}` : 'Geen vorige periode beschikbaar'}
                                    >
                                        ← Vorige periode
                                    </button>
                                    <button
                                        onClick={() => selectedYear < timelineData.length - 1 && setSelectedYear(selectedYear + 1)}
                                        disabled={selectedYear === timelineData.length - 1}
                                        className="text-sm text-emerald-400 hover:text-emerald-300 disabled:text-neutral-600 disabled:cursor-not-allowed transition-colors font-medium flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-emerald-400 rounded px-2 py-1"
                                        aria-label={selectedYear < timelineData.length - 1 ? `Ga naar volgende periode: ${timelineData[selectedYear + 1].year}` : 'Geen volgende periode beschikbaar'}
                                    >
                                        Volgende periode →
                                    </button>
                                </div>

                                <h3 id="modal-title" className="text-2xl md:text-3xl font-bold text-white mb-2">
                                    {timelineData[selectedYear].title}
                                </h3>
                                <p className="text-emerald-400 text-base mb-6">
                                    {timelineData[selectedYear].shortDesc}
                                </p>

                                {timelineData[selectedYear].images && (
                                    <div className="mb-6 bg-emerald-900/20 rounded-xl p-4 border border-emerald-700/30">
                                        <div className="flex items-center justify-between text-emerald-300 mb-4">
                                            <div className="flex items-center gap-2">
                                                <ImageIcon size={20} aria-hidden="true" />
                                                <span className="font-medium">
                                                    {timelineData[selectedYear].images.length} historische afbeelding{timelineData[selectedYear].images.length > 1 ? 'en' : ''}
                                                </span>
                                            </div>
                                        </div>

                                        <div className={`grid gap-4 ${
                                            timelineData[selectedYear].images.length === 1
                                                ? 'grid-cols-1'
                                                : timelineData[selectedYear].images.length === 2
                                                    ? 'grid-cols-1 md:grid-cols-2'
                                                    : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                                        }`}>
                                            {timelineData[selectedYear].images.map((image, imgIndex) => (
                                                <div key={imgIndex} className="group relative">
                                                    <button
                                                        className="w-full cursor-pointer bg-white/5 rounded-lg p-2 hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-400"
                                                        onClick={() => handleImageClick(image.src, image.alt)}
                                                        aria-label={`Vergroot afbeelding: ${image.alt}`}
                                                    >
                                                        <img
                                                            src={image.src}
                                                            alt={image.alt}
                                                            className="w-full h-48 object-contain rounded-md"
                                                            onError={(e) => {
                                                                console.error('Afbeelding niet gevonden:', e.target.src);
                                                                e.target.style.display = 'none';
                                                            }}
                                                        />
                                                        <div className="absolute top-2 right-2 bg-black/50 rounded-full p-1.5 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity" aria-hidden="true">
                                                            <Maximize2 size={16} className="text-white" />
                                                        </div>
                                                    </button>
                                                    <p className="text-xs text-neutral-400 mt-2 text-center italic">
                                                        {image.alt}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

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
                            </div>
                        </div>
                    </div>
                )}

                {/* Image Zoom Modal */}
                {zoomedImage && (
                    <div
                        className="fixed inset-0 bg-black/95 backdrop-blur-md z-[60] flex items-center justify-center p-4"
                        onClick={handleCloseZoom}
                        role="dialog"
                        aria-modal="true"
                        aria-label="Vergrote afbeelding"
                    >
                        <button
                            onClick={handleCloseZoom}
                            className="absolute top-4 right-4 text-white hover:text-emerald-400 transition-colors bg-neutral-900/80 rounded-full p-2 z-10 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                            aria-label="Sluit vergrote afbeelding"
                        >
                            <X size={24} aria-hidden="true" />
                        </button>
                        <div className="relative max-w-7xl max-h-full flex items-center justify-center">
                            <img
                                src={zoomedImage.src}
                                alt={zoomedImage.alt}
                                className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
                                onClick={(e) => e.stopPropagation()}
                            />
                        </div>
                        {zoomedImage.alt && (
                            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-neutral-900/90 px-6 py-3 rounded-lg max-w-3xl" role="complementary">
                                <p className="text-center text-sm text-neutral-300 italic">
                                    {zoomedImage.alt}
                                </p>
                            </div>
                        )}
                        <div className="absolute bottom-4 right-4 text-xs text-neutral-400 bg-neutral-900/80 px-3 py-1.5 rounded-full" aria-live="polite">
                            Druk op ESC of klik om te sluiten
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}