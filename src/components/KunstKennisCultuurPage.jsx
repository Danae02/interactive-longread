import React, { useState } from 'react';
import { BookOpen, Film, ExternalLink, Heart, ArrowLeft, ChevronDown, ChevronUp, Sparkles, Users, MessageSquare, Quote, Play } from 'lucide-react';

export default function KunstKennisCultuurPage() {
    const [expandedSections, setExpandedSections] = useState({
        poem: false,
        monument: false,
        documentaries: false, // Hoofdcategorie voor documentaires
        boerocratie: false,  // Subcategorie
        liesjes: false,      // Subcategorie
        ecocide: false,      // Nieuwe sectie over ecocide
        recommendations: false
    });

    const [showBoerocratieTrailer, setShowBoerocratieTrailer] = useState(false);

    const toggleSection = (section) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    const toggleSubSection = (section, parentSection) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section],
            // Als de hoofdsectie nog niet open is, open die ook
            [parentSection]: prev[parentSection] ? prev[parentSection] : true
        }));
    };

    const artItems = [
        {
            id: 'poem',
            icon: <BookOpen className="text-purple-400" size={28} />,
            title: "Gedicht: Bekeerling",
            subtitle: "Door Ester Naomi Perquin • Uit de bundel 'Servetten halfstok'",
            teaser: "Gevonden en aangeraden door Rienk Wielenga....",
            content: (
                <>
                    <div className="font-serif leading-relaxed space-y-6 text-neutral-200">
                        <p className="italic text-lg">
                            Thuis in het achterland kende ik<br/>
                            de ondoordachte veelheid, opgeschepte<br/>
                            overdaad uit pannen en schalen.
                        </p>
                        <p className="italic text-lg">
                            Je kon 's ochtends, als ze nog sliepen<br/>
                            vast een kruisje op hun ruggen zetten<br/>
                            en 's avonds van ze eten.
                        </p>
                        <p className="italic text-lg">
                            Maar hier willen ze van staal noch<br/>
                            steken weten,wie warm, gezond ontwaakt<br/>
                            zal niemand komen halen.
                        </p>
                        <p className="italic text-lg">
                            Slechts wat uit eigen grond naar boven<br/>
                            komt past op het bord, het mes dient om<br/>
                            de richting van de vorken te bepalen,
                        </p>
                        <p className="italic text-lg">
                            niet om langs een hals omlaag te halen<br/>
                            niet om te schrapen langs de botten<br/>
                            die ook onze botten zijn.
                        </p>
                        <p className="italic text-lg">
                            Hier eten ze aan tafels zonder lakens,<br/>
                            ik drink hun zelfgemaakte wijn, hoor<br/>
                            geluiden uit het ongemoeide hok.
                        </p>
                        <p className="italic text-lg">
                            Hier wapperen de witte vlaggen.<br/>
                            Thuis hingen na de maaltijd<br/>
                            servetten halfstok.
                        </p>
                    </div>
                </>
            )
        },
        {
            id: 'monument',
            icon: <div className="w-8 h-8 bg-neutral-800 rounded-lg flex items-center justify-center border border-neutral-700">
                <span className="text-neutral-300 text-lg">🐄</span>
            </div>,
            title: "Het Koeienmonument Amsterdam",
            subtitle: "Een monument voor 2 miljoen geslachte koeien • Jan van Galenstraat, Amsterdam West",
            teaser: "Tussen 1984 en 2017 zijn ruim twee miljoen koeien geslacht op dit terrein...",
            content: (
                <>
                    <div className="prose prose-lg prose-invert max-w-none">
                        {/* Afbeelding van het schetsontwerp */}
                        <div className="mb-8 rounded-xl overflow-hidden border border-neutral-700 bg-gradient-to-br from-neutral-800 to-neutral-900">
                            <div className="p-6 text-center">
                                <h4 className="text-lg font-bold text-white mb-3">Schetsontwerp van het monument</h4>
                                <p className="text-neutral-400 text-sm mb-6 max-w-2xl mx-auto">
                                    Een springende koe als symbool van vrijheid en leven - het ontwerp voor het Koeienmonument Amsterdam
                                </p>
                                <div className="flex justify-center">
                                    <img
                                        src="/afbeeldingen-kunst-cultuur/koeienmonument-logo-springende-koe.png"
                                        alt="Schetsontwerp van het Koeienmonument met een springende koe"
                                        className="max-w-md w-full rounded-lg border-2 border-neutral-700 shadow-lg hover:border-neutral-600 transition-colors duration-300"
                                    />
                                </div>
                                <p className="text-neutral-500 text-xs mt-4 italic">
                                    Ontwerp: Mark Schalken • Beeld van een springende koe als symbool voor vrijheid en leven
                                </p>
                            </div>
                        </div>

                        <p className="text-neutral-200 leading-relaxed mb-6">
                            Tussen 1984 en 2017 zijn ruim <strong className="text-white">twee miljoen koeien geslacht</strong> op
                            het besloten terrein van het Foodcenter aan de Jan van Galenstraat in West, bijgenaamd
                            <em className="text-neutral-300"> 'De buik van Amsterdam'</em>. Nu, tien jaar later, wordt dit
                            terrein een woonwijk.
                        </p>

                        <div className="bg-neutral-800 rounded-lg p-6 my-8 border-l-4 border-neutral-600">
                            <h4 className="text-lg font-bold text-white mb-4">Doelen van het monument</h4>
                            <ul className="space-y-3 text-neutral-300">
                                <li className="flex items-start gap-3">
                                    <span className="text-neutral-400 mt-1">•</span>
                                    <span>De vele geslachte koeien herdenken</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-neutral-400 mt-1">•</span>
                                    <span>Een fysieke plek voor ontmoeting en educatie over omgang met dieren</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-neutral-400 mt-1">•</span>
                                    <span>De lokale stadsgeschiedenis levend houden</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-neutral-400 mt-1">•</span>
                                    <span>De kracht van kunst en cultuur inzetten voor maatschappelijke verandering</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-neutral-800/50 rounded-lg p-6 my-8 border border-neutral-700">
                            <p className="text-neutral-200 italic leading-relaxed">
                                "Fietsend naar mijn atelier zag ik jarenlang de vrachtwagens met opeengepakte,
                                angstig snuivende koeien staan bij de poort van het abattoir. Ik rook ze vaak
                                al voordat ik ze zag. Ik was blij toen het abattoir stopte en het afgelopen
                                was – maar het was natuurlijk helemaal niet afgelopen."
                            </p>
                            <p className="text-neutral-400 text-sm mt-3">
                                — Mark Schalken, initiatiefnemer
                            </p>
                        </div>

                        <p className="text-neutral-300 leading-relaxed mb-6">
                            Het monument wil een <strong className="text-white">vredesmonument</strong> worden:
                            een appèl aan stadsbewoners om anders te gaan eten zodat de
                            dierenindustrie kan verdwijnen, en er ruimte ontstaat om zonder uitbuiting met
                            dieren om te gaan.
                        </p>

                        {/* Stripserie sectie */}
                        <div className="bg-gradient-to-r from-neutral-800 to-neutral-900 rounded-xl p-6 my-8 border border-neutral-700">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-neutral-700 p-3 rounded-lg">
                                    <span className="text-2xl">🎨</span>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-2">Stripserie: Koeienmonument in de maak</h4>
                                    <p className="text-neutral-300">
                                        Een gedenkteken voor de 2 miljoen koeien die werden geslacht in het laatste abattoir van Amsterdam?
                                        Tekenaar Mark Schalken ziet het voor zich. Hij duikt in het vleesverleden en de plantaardige toekomst
                                        van de stad.
                                    </p>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-3">
                                    <p className="text-neutral-300 leading-relaxed">
                                        Volg hieronder zijn stripserie over het ontstaan van het monument en de geschiedenis
                                        van het terrein.
                                    </p>
                                    <a
                                        href="https://markschalken.cargo.site/Koeienmonument-strips"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 bg-neutral-700 hover:bg-neutral-600 text-white px-5 py-2.5 rounded-lg transition-colors font-medium text-sm"
                                    >
                                        <span>Lees de stripserie</span>
                                        <ExternalLink size={16} />
                                    </a>
                                </div>
                                <div className="bg-neutral-800/50 rounded-lg p-4 border border-neutral-700">
                                    <p className="text-neutral-400 text-sm italic mb-2">
                                        Of lees eerst meer over het monument
                                    </p>
                                    <a
                                        href="https://markschalken.cargo.site/koeienmonument-plan"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-neutral-300 hover:text-white transition-colors text-sm font-medium"
                                    >
                                        <span>Bekijk het volledige plan</span>
                                        <ExternalLink size={16} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 mt-8">
                            <a
                                href="https://markschalken.cargo.site/koeienmonument-plan"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-neutral-700 hover:bg-neutral-600 text-white px-6 py-3 rounded-lg transition-colors font-medium"
                            >
                                Lees het volledige plan
                                <ExternalLink size={18} />
                            </a>
                            <a
                                href="https://markschalken.cargo.site/Koeienmonument-strips"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-neutral-700 hover:bg-neutral-600 text-white px-6 py-3 rounded-lg transition-colors font-medium"
                            >
                                <span>🎨</span>
                                Lees de stripserie
                                <ExternalLink size={18} />
                            </a>
                        </div>
                    </div>
                </>
            )
        },
        {
            id: 'documentaries',
            icon: <Film className="text-neutral-300" size={28} />,
            title: "Documentaires",
            subtitle: "Twee documentaires die de vee-industrie vanuit verschillende perspectieven belichten",
            teaser: "Van politieke macht tot persoonlijke verhalen...",
            content: (
                <div className="space-y-6">
                    {/* Documentaire 1: Boerocratie */}
                    <div className="border border-neutral-700 rounded-lg overflow-hidden">
                        <button
                            onClick={() => toggleSubSection('boerocratie', 'documentaries')}
                            className="w-full text-left p-6 bg-neutral-800 hover:bg-neutral-750 transition-colors"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-6 h-6 bg-neutral-700 rounded-full flex items-center justify-center">
                                            <span className="text-neutral-300 text-xs">🎬</span>
                                        </div>
                                        <h4 className="text-lg font-bold text-white">Boerocratie</h4>
                                    </div>
                                    <p className="text-neutral-400 text-sm mb-2">
                                        Dutch Angle TV • De machtsgreep van Big Agro
                                    </p>
                                    <p className="text-neutral-300 text-sm">
                                        Hoe multinationals achter vlees, veevoer en pesticiden hun invloed vestigen in de politiek...
                                    </p>
                                </div>
                                <div className="flex-shrink-0">
                                    {expandedSections.boerocratie ? (
                                        <ChevronUp className="text-neutral-400" size={20} />
                                    ) : (
                                        <ChevronDown className="text-neutral-400" size={20} />
                                    )}
                                </div>
                            </div>
                        </button>

                        <div className={`overflow-hidden transition-all duration-300 ${
                            expandedSections.boerocratie ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
                        }`}>
                            <div className="p-6 bg-neutral-900/50">
                                <div className="prose prose-lg prose-invert max-w-none">
                                    <p className="text-neutral-200 leading-relaxed mb-6">
                                        De film onthult hoe de grote agro-industriebedrijven (<strong className="text-white">Big Agro</strong>) steeds
                                        meer greep krijgen op de (inter)nationale politiek. Buiten het zicht van de kiezers om, hebben grote
                                        agro- en bio-industriebedrijven een steeds grotere rol gespeeld in onze wet- en regelgeving.
                                    </p>

                                    <div className="bg-neutral-800 border-l-4 border-neutral-600 p-6 rounded-r-lg my-8">
                                        <p className="text-neutral-200 italic leading-relaxed text-lg mb-3">
                                            "De grootste bedreiging voor onze planeet in deze eeuw is niet alleen de klimaatcrisis,
                                            maar ook de macht van Big Agro om elke hervorming tegen te houden."
                                        </p>
                                        <p className="text-neutral-400 text-sm">
                                            — George Monbiot (The Guardian), Boerocratie
                                        </p>
                                    </div>

                                    <h4 className="text-xl font-bold text-white mb-4">Over de film</h4>
                                    <p className="text-neutral-300 leading-relaxed mb-4">
                                        Ze bekleden sleutelposities in parlement en kabinet, zoals op het Nederlandse ministerie van
                                        Landbouw, Visserij, Voedselkwaliteit en Natuur. Om hun handelen en invloed aan het licht te brengen,
                                        hebben de onderzoeksjournalistieke documentairemakers van Dutch Angle TV een ontmaskerende
                                        documentaire gemaakt waarin onderzoeksjournalist <strong className="text-white">George Monbiot</strong> zijn
                                        analyses over de machtsgreep van Big Agro deelt.
                                    </p>

                                    <div className="bg-neutral-800 rounded-lg p-6 my-8 border border-neutral-700">
                                        <h4 className="text-lg font-bold text-white mb-4">Centrale vragen</h4>
                                        <div className="space-y-4">
                                            <div className="flex items-start gap-3">
                                                <span className="text-neutral-400 mt-1 text-xl">•</span>
                                                <span className="text-neutral-300">Hoe hebben de multinationals achter vlees, veevoer en pesticiden hun invloed in onze parlementaire democratie weten te vestigen?</span>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <span className="text-neutral-400 mt-1 text-xl">•</span>
                                                <span className="text-neutral-300">Was de razendsnelle opkomst van de BoerBurgerBeweging (BBB) het resultaat van een boerenopstand of van een strategie van de grote agrobedrijven en een reclamebureau in hun dienst?</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* YouTube trailer sectie */}
                                    {showBoerocratieTrailer && (
                                        <div className="mb-8">
                                            <div className="flex items-center gap-2 mb-4">
                                                <Play className="text-neutral-300" size={24} />
                                                <h4 className="text-xl font-bold text-white">Bekijk de trailer</h4>
                                            </div>
                                            <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-neutral-700">
                                                <iframe
                                                    src="https://www.youtube.com/embed/nW5UAEKvLf4?si=D1iQoasi7grQeFKP"
                                                    title="Boerocratie Trailer"
                                                    frameBorder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                    className="absolute top-0 left-0 w-full h-full"
                                                />
                                            </div>
                                            <p className="text-neutral-400 text-sm mt-2 italic">
                                                Trailer: Boerocratie - De machtsgreep van Big Agro
                                            </p>
                                        </div>
                                    )}

                                    <div className="flex flex-col sm:flex-row gap-4 mt-8">
                                        <a
                                            href="https://www.ngpf.nl/boerocratie"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center gap-2 bg-neutral-700 hover:bg-neutral-600 text-white px-6 py-3 rounded-lg transition-colors font-medium flex-1"
                                        >
                                            <ExternalLink size={18}/>
                                            <span>Bekijk de volledige film</span>
                                        </a>

                                        <button
                                            onClick={() => setShowBoerocratieTrailer(!showBoerocratieTrailer)}
                                            className="inline-flex items-center justify-center gap-2 bg-neutral-800 hover:bg-neutral-700 text-white px-6 py-3 rounded-lg transition-colors font-medium flex-1 border border-neutral-700"
                                        >
                                            {showBoerocratieTrailer ? (
                                                <>
                                                    <Film size={18}/>
                                                    <span>Verberg trailer</span>
                                                </>
                                            ) : (
                                                <>
                                                    <Play size={18}/>
                                                    <span>Bekijk trailer</span>
                                                </>
                                            )}
                                        </button>
                                    </div>

                                    <div className="mt-4 text-center">
                                        <a
                                            href="https://youtu.be/nW5UAEKvLf4?si=D1iQoasi7grQeFKP"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-neutral-400 hover:text-neutral-300 transition-colors text-sm"
                                        >
                                            <span>Open trailer in YouTube</span>
                                            <ExternalLink size={14} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Documentaire 2: Liesjes hok was leeg */}
                    <div className="border border-neutral-700 rounded-lg overflow-hidden">
                        <button
                            onClick={() => toggleSubSection('liesjes', 'documentaries')}
                            className="w-full text-left p-6 bg-neutral-800 hover:bg-neutral-750 transition-colors"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-6 h-6 bg-neutral-700 rounded-full flex items-center justify-center">
                                            <span className="text-neutral-300 text-xs">🎞️</span>
                                        </div>
                                        <h4 className="text-lg font-bold text-white">Liesjes hok was leeg</h4>
                                    </div>
                                    <p className="text-neutral-400 text-sm mb-2">
                                        3LAB documentaire • Première: 30 oktober 2025
                                    </p>
                                    <p className="text-neutral-300 text-sm">
                                        Over familie, tradities en de prijs van vlees...
                                    </p>
                                </div>
                                <div className="flex-shrink-0">
                                    {expandedSections.liesjes ? (
                                        <ChevronUp className="text-neutral-400" size={20} />
                                    ) : (
                                        <ChevronDown className="text-neutral-400" size={20} />
                                    )}
                                </div>
                            </div>
                        </button>

                        <div className={`overflow-hidden transition-all duration-300 ${
                            expandedSections.liesjes ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'
                        }`}>
                            <div className="p-6 bg-neutral-900/50">
                                <div className="prose prose-lg prose-invert max-w-none">
                                    <p className="text-neutral-200 leading-relaxed mb-6">
                                        Toen boerenzoon <strong className="text-white">Wouter Waayer</strong> klein was, kreeg hij
                                        van zijn vader een kalfje om voor te zorgen. Dit knuffelkalf kreeg de naam <em className="text-neutral-300">Liesje</em>.
                                        Vijf maanden later was het hok van Liesje ineens leeg. Die was, zoals dat nu eenmaal gaat
                                        met vleeskalveren in Nederland, naar het slachthuis gebracht.
                                    </p>

                                    <div className="bg-neutral-800 border-l-4 border-neutral-600 p-6 rounded-r-lg my-8">
                                        <p className="text-neutral-200">
                                            Dit moment zette het leven van Wouter op zijn kop. Inmiddels is hij vegan influencer
                                            en heeft hij zich aangesloten bij Extinction Rebellion, terwijl zijn vader Jan en
                                            broer Chiel nog altijd het vleeskalverenbedrijf in Geesteren runnen.
                                        </p>
                                    </div>

                                    <h4 className="text-xl font-bold text-white mb-4">Over de film</h4>
                                    <p className="text-neutral-300 leading-relaxed mb-4">
                                        In deze documentaire keert Wouter terug naar de boerderij in Twente, waar hij opnieuw een
                                        Liesje krijgt. We volgen het stierkalf van binnenkomst tot vertrek naar het slachthuis,
                                        zo'n vijf maanden later.
                                    </p>

                                    <p className="text-neutral-300 leading-relaxed mb-6">
                                        Tussen vader Jan, de nuchtere boer die een systeem heeft bedacht om de uitstoot in stallen
                                        te verminderen, en Wouter, de idealist die het liefst een koeienrusthuis zou beginnen,
                                        ontvouwt zich een zoektocht naar begrip. Tussen hen in: <strong className="text-white">Liesje</strong>,
                                        een kalf dat langzaam uitgroeit tot symbool voor alles wat schuurt tussen vader en zoon,
                                        traditie en systeemverandering, dierenliefde en het boerenbedrijf.
                                    </p>

                                    <div className="bg-neutral-800 rounded-lg p-6 my-8 border border-neutral-700">
                                        <h4 className="text-lg font-bold text-white mb-4">Thema's in de film</h4>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="flex items-start gap-3">
                                                <span className="text-neutral-400 mt-1">→</span>
                                                <span className="text-neutral-300">Familie en generatiekloof</span>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <span className="text-neutral-400 mt-1">→</span>
                                                <span className="text-neutral-300">Traditie vs. verandering</span>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <span className="text-neutral-400 mt-1">→</span>
                                                <span className="text-neutral-300">Dierenliefde vs. boerenbedrijf</span>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <span className="text-neutral-400 mt-1">→</span>
                                                <span className="text-neutral-300">Hechten en loslaten</span>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-neutral-300 leading-relaxed mb-6 italic">
                                        Een beschouwende documentaire over wat er gebeurt als je ophoudt met wegkijken,
                                        en je beseft dat een dier geen nummer is, maar een levend wezen met een naam.
                                    </p>

                                    <div className="flex flex-col sm:flex-row gap-4 mt-8">
                                        <a
                                            href="https://www.human.nl/3lab/artikelen/3lab-liesjes-hok-was-leeg"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center gap-2 bg-neutral-700 hover:bg-neutral-600 text-white px-6 py-3 rounded-lg transition-colors font-medium"
                                        >
                                            Meer over de film
                                            <ExternalLink size={18} />
                                        </a>
                                        <button className="inline-flex items-center justify-center gap-2 bg-neutral-700 hover:bg-neutral-600 text-white px-6 py-3 rounded-lg transition-colors font-medium">
                                            Bekijk de trailer
                                            <Film size={18} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'ecocide',
            icon: <MessageSquare className="text-green-400" size={28} />,
            title: "Conceptualizing Ecocide: Dit is geen rechtszaak",
            subtitle: "Een theaterexperiment van de Universiteit Utrecht over verantwoordelijkheid voor milieuschade",
            teaser: "Wat als ecocide strafbaar zou zijn? Een voorstelling waar het publiek de jury is...",
            content: (
                <div className="prose prose-lg prose-invert max-w-none">
                    <p className="text-neutral-200 leading-relaxed mb-6">
                        <strong>Conceptualizing Ecocide</strong> vraagt om een aanpak die academische disciplines overstijgt. Dit project brengt onderzoekers van over de hele universiteit samen, evenals belanghebbenden en organisaties buiten de universiteit, wiens werk raakt aan enig aspect van het probleem van ecocide en de juridische, ecologische, wetenschappelijke, politieke, sociaal-culturele, criminologische, filosofische en historische dimensies ervan.
                    </p>

                    <div className="bg-neutral-800 border-l-4 border-green-600 p-6 rounded-r-lg my-8">
                        <h4 className="text-xl font-bold text-white mb-3">Dit is geen rechtszaak</h4>
                        <p className="text-neutral-200 italic leading-relaxed mb-3">
                            "Laten we geen misverstand hebben: de klimaatcrisis is ook een crisis van cultuur, en dus van de verbeelding."
                        </p>
                        <p className="text-neutral-400 text-sm mb-4">— Amitav Ghosh</p>

                        <p className="text-neutral-200 italic leading-relaxed">
                            "Theater is de repetitie van de revolutie."
                        </p>
                        <p className="text-neutral-400 text-sm">— Douglas Estevam, Braziliaanse activist en dramaturg</p>
                    </div>

                    <p className="text-neutral-300 leading-relaxed mb-6">
                        <strong>Dit is geen rechtszaak</strong> is een theaterexperiment ontwikkeld door het Conceptualizing Ecocide project dat het publiek uitnodigt om deel te worden van het urgente gesprek over hoe wij, als samenleving, kunnen nadenken over verantwoordelijkheid voor milieuschade. Wat zou het betekenen om ecocide voor de rechter te brengen? Kan de wet rechtvaardigheid brengen aan lokale gemeenschappen en ecosystemen, inclusief vogels, bomen en andere niet-menselijke wezens? En wie moet verantwoordelijk worden gehouden in deze keten van vernietiging?
                    </p>

                    <div className="bg-neutral-800 rounded-lg p-6 my-8 border border-neutral-700">
                        <h4 className="text-lg font-bold text-white mb-4">De voorstelling</h4>
                        <p className="text-neutral-300 leading-relaxed mb-4">
                            Tijdens twee voorstellingen, op 18 en 19 juni in het ZIMIHC theater Stefanus in Utrecht Overvecht, brachten een groep kunstenaars, acteurs en studenten van de Universiteit Utrecht <strong>Dit is geen rechtszaak</strong> op de planken - en het publiek fungeerde als de jury.
                        </p>

                        <p className="text-neutral-300 leading-relaxed">
                            De voorstelling speelt zich af in een fictieve rechtszaal in de nabije toekomst, waar ecocide – ernstige, grootschalige milieuschade – is opgenomen in het Nederlandse strafrecht, gebaseerd op de recent ingediende wetgeving door de Partij voor de Dieren. Het biedt een realistisch inkijkje in hoe zo'n wet in de rechtbank zou kunnen uitpakken.
                        </p>
                    </div>

                    <div className="bg-gradient-to-r from-neutral-800 to-green-900/30 rounded-xl p-6 my-8 border border-neutral-700">
                        <div className="flex items-start gap-4 mb-4">
                            <div className="bg-neutral-700 p-3 rounded-lg">
                                <span className="text-2xl">⚖️</span>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white mb-2">De zaak</h4>
                                <p className="text-neutral-300">
                                    Ter berechting staat de fictieve Nederlandse multinational <strong>Smit Refineries N.V.</strong> en haar CEO, beschuldigd van de vernietiging van een Indonesisch ecosysteem waar nikkel en andere zeldzame aardmetalen worden gewonnen. Hoewel deze grondstoffen essentieel zijn voor de ontwikkeling van groene technologieën voor een duurzamere toekomst, vernietigt de nikkelmijnindustrie cruciale biodiversiteitsgebieden en hele ecosystemen, duwt unieke soorten zoals de Maleovogel tot aan de rand van uitsterven en verdrijft inheemse gemeenschappen van hun land.
                                </p>
                            </div>
                        </div>
                        <p className="text-neutral-200 italic mt-4">
                            De rechtszaak dwingt de rechtbank een paradox te navigeren: kan milieuschade op één plek gerechtvaardigd worden door potentiële mondiale voordelen?
                        </p>
                    </div>

                    <div className="mb-8 bg-neutral-800/50 rounded-lg p-4 border border-neutral-700">
                        <div className="flex items-center gap-2 mb-3">
                            <span className="text-lg">🎭</span>
                            <h4 className="text-lg font-bold text-white">Theatrale vorm</h4>
                        </div>
                        <p className="text-neutral-300">
                            De voorstelling volgt de traditie van het postdramatisch theater, waarbij onderzoek, documentaire en rechtszaaldrama worden vermengd met poëtische intermezzo's, multimedi-elementen, muziek en dans. Met deze gelaagde elementen willen we stem geven aan perspectieven die vaak ontbreken in de traditionele rechtszaal. Door de ingewikkelde banden tussen juridische kaders, ecologische kwesties, politieke dynamieken, historische erfenissen en culturele waarden te onderzoeken, vragen we uiteindelijk: Wat zijn de grenzen van het rechtssysteem, en van het concept ecocide, in het aanpakken van de mondiale ecologische crisis?
                        </p>
                    </div>

                    {/* Nieuwe sectie: Kennisclip */}
                    <div className="my-10 bg-gradient-to-br from-neutral-800 to-green-900/20 rounded-xl p-6 border border-neutral-700">
                        <div className="flex items-center gap-3 mb-4">
                            <Play className="text-green-400" size={24} />
                            <h4 className="text-xl font-bold text-white">Bekijk een kennisclip over ecocide</h4>
                        </div>
                        <p className="text-neutral-300 mb-6">
                            Het project 'Conceptualizing Ecocide' produceert korte video's met experts.
                            Hier legt hoogleraar <strong>Cedric Ryngaert</strong> de relatie tussen ecocide en internationaal recht uit.
                        </p>
                        <div className="relative w-full aspect-video rounded-lg overflow-hidden border-2 border-neutral-700 bg-black">
                            <iframe
                                src="https://player.vimeo.com/video/988403774?h=7c5a8c4a0f&title=0&byline=0&portrait=0"
                                title="Knowledge clip: Ecocide and International Law by Cedric Ryngaert"
                                frameBorder="0"
                                allow="autoplay; fullscreen; picture-in-picture"
                                allowFullScreen
                                className="absolute top-0 left-0 w-full h-full"
                            />
                        </div>
                        <p className="text-neutral-400 text-sm mt-3 italic">
                            Knowledge Clip 1: Ecocide and International Law • Cedric Ryngaert
                        </p>
                        <div className="mt-4">
                            <a
                                href="https://vimeo.com/988403774"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-neutral-400 hover:text-neutral-300 transition-colors text-sm"
                            >
                                <span>Open video op Vimeo</span>
                                <ExternalLink size={14} />
                            </a>
                        </div>
                    </div>

                    <div className="bg-neutral-800 rounded-lg p-6 my-8 border-l-4 border-green-500">
                        <h4 className="text-lg font-bold text-white mb-3">Credits</h4>
                        <ul className="space-y-2 text-neutral-300">
                            <li><strong>Geschreven en geregisseerd door:</strong> Reinier Noordzij</li>
                            <li><strong>Gedicht "Wat beweegt het water":</strong> Geschreven en uitgevoerd door Emma Zuiderveen</li>
                            <li><strong>Productie management:</strong> Julia van Berkel</li>
                        </ul>
                        <div className="mt-4">
                            <a
                                href="https://www.uu.nl/en/research/sustainability/gallery/project-gallery/signature-projects/conceptualizing-ecocide"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
                            >
                                <span>Bekijk het volledige project op de UU website</span>
                                <ExternalLink size={16} />
                            </a>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'recommendations',
            icon: <Sparkles className="text-neutral-300" size={28} />,
            title: "Meer Aanraders",
            subtitle: "Documentaires, boeken, podcasts en kunstwerken",
            teaser: "Ontdek meer werken die een andere kijk geven op de vee-industrie...",
            content: (
                <div className="grid md:grid-cols-2 gap-6">
                    <RecommendationCard
                        type="Documentaire"
                        title="Food for Profit"
                        description="Over de verwevenheid van de vee-industrie met Europese politiek en subsidies"
                        link="https://www.vprogids.nl/cinema/films/film~15817732~food-for-profit~.html"
                    />
                    <RecommendationCard
                        type="Zembla Kort"
                        title="De lobby van de agrarische industrie"
                        description="Samenvatting van een uitzending van Zembla over de invloed van de agrarische lobby op beleid en besluitvorming"
                        link="https://youtu.be/ChEUDmCfgJ0?si=n3eCBFiNiaTFtwPU"
                    />
                    <RecommendationCard
                        type="Zembla Kort"
                        title="De rol van banken in de landbouwcrisis"
                        description="Samenvatting van een uitzending van Zembla over de schadelijke gevolgen van intensieve landbouw voor bodem en toekomst van voedselvoorziening"
                        link="https://youtu.be/YDINOPHSqBM?si=Ciq3nXOmira0_Am5"
                    />
                    <RecommendationCard
                        type="FoodUnfolded"
                        title="How does the meat lobby influence EU policy?"
                        description="Onderzoek van FoodUnfolded en Lighthouse Reports naar de invloed van de vleeslobby en de ware achtergrond van de Dublin Declaration"
                        link="https://youtu.be/dEQM7nnyPqo?si=GOJkgXyTXqigpeMs"
                    />
                </div>
            )
        }
    ];

    return (
        <div className="min-h-screen bg-neutral-900 text-neutral-100">
            {/* Header */}
            <header className="bg-neutral-950 border-b border-neutral-800 sticky top-0 z-10">
                <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
                    <a href="/" className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors">
                        <ArrowLeft size={20} />
                        <span className="text-sm">Terug naar hoofdverhaal</span>
                    </a>
                    <h1 className="text-xl md:text-2xl font-bold text-white">Kunst & Cultuur</h1>
                    <div className="w-24"></div> {/* Spacer for centering */}
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative py-20 px-6 bg-gradient-to-b from-neutral-900 to-neutral-800">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        Het Kunst en Cultuur Hoekje
                    </h1>
                    <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
                        Waar cijfers en analyses stoppen, beginnen kunst en cultuur. Hier vind je werken die mij aan het
                        denken hebben gezet.
                    </p>
                </div>
            </section>

            {/* Main Content - Clickable Sections */}
            <section className="py-8 px-6 bg-neutral-900">
                <div className="max-w-4xl mx-auto">
                    <div className="space-y-6">
                        {artItems.map((item) => (
                            <div
                                key={item.id}
                                className="bg-neutral-800 rounded-xl border border-neutral-700 overflow-hidden transition-all duration-300 hover:border-neutral-600"
                            >
                                {/* Clickable Header */}
                                <button
                                    onClick={() => toggleSection(item.id)}
                                    className="w-full text-left p-6 md:p-8 hover:bg-neutral-750 transition-colors"
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex items-start gap-4">
                                            <div className="mt-1">
                                                {item.icon}
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                                                    {item.title}
                                                </h3>
                                                <p className="text-neutral-400 text-sm mb-3">
                                                    {item.subtitle}
                                                </p>
                                                <p className="text-neutral-300">
                                                    {item.teaser}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex-shrink-0">
                                            {expandedSections[item.id] ? (
                                                <ChevronUp className="text-neutral-400" size={24} />
                                            ) : (
                                                <ChevronDown className="text-neutral-400" size={24} />
                                            )}
                                        </div>
                                    </div>
                                </button>

                                {/* Expandable Content - GROTER voor koeienmonument */}
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${
                                        expandedSections[item.id] ?
                                            item.id === 'monument' || item.id === 'documentaries' || item.id === 'ecocide' ?
                                                'max-h-[5000px] opacity-100'
                                                : 'max-h-[2000px] opacity-100'
                                            : 'max-h-0 opacity-0'
                                    }`}
                                >
                                    <div className="p-6 md:p-8 pt-0">
                                        <div className="border-t border-neutral-700 pt-6">
                                            {item.content}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Call to Action */}
                    <div className="mt-16 text-center">
                        <h2 className="text-3xl font-bold text-white mb-6">
                            Terug naar het Hoofdverhaal
                        </h2>
                        <p className="text-xl text-neutral-300 max-w-2xl mx-auto mb-8 leading-relaxed">
                            Nu je deze werken hebt gezien, lees verder over de machtsstructuren
                            achter de vee-industrie
                        </p>
                        <a
                            href="/"
                            className="inline-flex items-center gap-2 bg-neutral-700 hover:bg-neutral-600 text-white px-8 py-4 rounded-lg transition-colors font-medium text-lg"
                        >
                            <ArrowLeft size={20} />
                            Terug naar de longread
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

function RecommendationCard({ type, title, description, link }) {
    return (
        <div className="bg-neutral-800 rounded-lg p-6 border border-neutral-700 hover:border-neutral-600 transition-all">
            <div className="text-neutral-400 text-xs font-bold uppercase tracking-wide mb-2">{type}</div>
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-neutral-400 text-sm mb-4">{description}</p>
            <a
                href={link}
                className="inline-flex items-center gap-2 text-neutral-300 hover:text-white transition-colors text-sm font-medium"
            >
                Meer informatie →
            </a>
        </div>
    );
}