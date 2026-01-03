// components/sections/text/LobbySection.jsx
import React, { useState } from 'react';
import { Users, TrendingUp, Shield, MessageSquare, BookOpen, Mic, Target, Volume2, EyeOff, Repeat, FileText, Film, Info } from 'lucide-react';

export default function LobbySection() {
    const [activeStrategy, setActiveStrategy] = useState(0);
    const [activeExample, setActiveExample] = useState(0);

    const lobbyStrategies = [
        {
            title: "Dramatisering",
            subtitle: "Van belang naar identiteit",
            icon: <Volume2 size={24} />,
            description: "Economische belangen verpakt als existentiële strijd voor familiebedrijven en plattelandscultuur. Zichtbaar bij Farmers Defence Force en BBB.",
            quote: "Dat noem ik dan dramatisering […] dat je van een meer technisch of zakelijk belang een veel breder, emotionelere kwestie maakt.",
            author: "Arco Timmermans",
            role: "Lobby-expert en onderzoeker",
            hasInterview: true,
            interviewLink: "https://veeindustrie-longread.nl/#/interviews/arco-timmermans"
        },
        {
            title: "Echo Chamber-strategie",
            subtitle: "Herhaling als waarheid",
            icon: <Repeat size={24} />,
            description: "Boodschappen via meerdere kanalen herhalen tot waarheid en perceptie samensmelten. Creëert een gesloten narratief dat moeilijk te doorbreken is.",
            quote: "",
            author: "",
            role: "",
            hasInterview: false
        },
        {
            title: "Educatieve beïnvloeding",
            subtitle: "Beïnvloeding bij de bron",
            icon: <BookOpen size={24} />,
            description: "Lespakketten en boerderijbezoeken om een positief beeld te verspreiden. Vaak via overheidsprogramma's als Jong Leren Eten.",
            quote: "Is dit nou maatschappelijk of is het eigenlijk commercieel? Dan ontstaat er een belangenverstrengelingsrisico.",
            author: "Arco Timmermans",
            role: "Lobby-expert en onderzoeker",
            hasInterview: true,
            interviewLink: "https://veeindustrie-longread.nl/#/interviews/arco-timmermans"
        },
        {
            title: "Financiering tegenonderzoek",
            subtitle: "Wetenschap als wapen",
            icon: <FileText size={24} />,
            description: "Sectorfinancierde 'onafhankelijke' onderzoeken die overheidscijfers in twijfel trekken, zoals Stichting Agrifacts.",
            quote: "",
            author: "",
            role: "",
            hasInterview: false
        },
    ];

    const concreteExamples = [
        {
            title: "Stichting Agrifacts",
            sector: "Gefinancierd door VanDrie Group, De Heus & Royal A-ware",
            description: "Krijgt €225.000 per jaar om 'onafhankelijk' tegenonderzoek te doen naar stikstofcijfers. Een van hun redacteuren is tegelijk communicatieadviseur voor de varkenshouderijbelangenclub POV.",
            impact: "Zaait systematisch twijfel over wetenschappelijke consensus",
            source: "Follow the Money onderzoek (2020)"
        },
        {
            title: "Lespakketten op school",
            sector: "De Heus & Zuivelsector (NZO)",
            description: "Via overheidsprogramma Jong Leren Eten komen commerciële lespakketten in klaslokalen. Impact op klimaat en dierenwelzijn wordt verzwegen of geromantiseerd.",
            impact: "Indoctrinatie vanaf jonge leeftijd",
            source: "Reclame Code Commissie oordeel"
        },
        {
            title: "Copa-Cogeca",
            sector: "Europese landbouwlobby",
            description: "Claimt 22 miljoen boeren te vertegenwoordigen, maar dient vooral belangen van grote industriële bedrijven. Kleine en biologische boeren worden buitenspel gezet.",
            impact: "Blokkeert groene hervormingen GLB",
            source: "Lighthouse Reports onderzoek"
        },
    ];

    return (
        <div className="lobby-section py-20 px-6 bg-gradient-to-b from-neutral-900 to-neutral-950">
            <div className="max-w-6xl mx-auto">

                {/* HOOFDTITEL MET INTRO */}
                {/* HOOFDTITEL MET INTRO */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-3 mb-4 relative group">
                        <EyeOff className="text-emerald-500" size={32}/>
                        <h3 className="text-4xl font-bold cursor-help relative">
                            De Lobby: Dark Side of the Moon
                            {/* TOOLTIP */}
                            <div
                                className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-4 py-3 bg-neutral-800 text-neutral-100 text-sm rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-96 z-50">
                                Lobbyen is het beïnvloeden van politieke besluitvorming en beleid door contact te leggen
                                met politici, ambtenaren en andere besluitvormers,
                                om zo specifieke belangen te behartigen. Het doel is om wetten, regels en beleid in een
                                bepaalde richting te sturen. Dit kan zowel direct (inside lobbying) als indirect
                                (outside lobbying via media) en door diverse partijen zoals bedrijven, NGO's en
                                vakbonden worden gedaan.
                                {/* TOOLTIP PIJL */}
                                <div
                                    className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-neutral-800"></div>
                            </div>
                        </h3>
                    </div>
                    <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
                        Van fluisteren in de wandelgangen tot schreeuwen op het Malieveld.
                        De vee-industrie beïnvloedt politiek en publieke opinie met een mix van
                        oude en nieuwe tactieken. Hoe werkt dit krachtenveld precies?
                    </p>
                </div>

                {/* TWEE GELIJKWAARDIGE KOLOMMEN - Traditioneel vs Nieuw */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {/* TRADITIONELE LOBBY */}
                    <div className="bg-neutral-800/50 backdrop-blur-sm p-8 rounded-xl border border-neutral-700">
                        <div className="flex items-center gap-3 mb-6">
                            <Shield className="text-blue-400" size={28} />
                            <h4 className="text-2xl font-bold">De "IJzeren Ring": Traditionele lobby</h4>
                        </div>
                        <p className="text-neutral-300 mb-6">
                            Al decennialang opereren organisaties als <span className="font-semibold text-blue-300">LTO Nederland</span> en op Europees niveau <span className="font-semibold text-blue-300">Copa-Cogeca</span> als de stille, maar invloedrijke vertegenwoordigers van agrarische belangen. Zij beschikken over wat wel de <span className="italic text-blue-300">"ijzeren ring"</span> wordt genoemd.
                        </p>
                        <div className="bg-neutral-900/70 p-4 rounded-lg mb-6">
                            <p className="italic text-neutral-300 mb-3">
                                "Die lobbyinvloed, sowieso van de landbouw – dus landbouw, veeteelt en visserij – is altijd groot geweest. In het verleden werd dat wel eens de 'ijzeren ring' genoemd."
                            </p>
                            <a
                                href="https://veeindustrie-longread.nl/#/interviews/arco-timmermans"
                                className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors group"
                            >
                                <MessageSquare size={16} />
                                <span>Bekijk volledig interview met Arco Timmermans</span>
                                <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                            </a>
                            <div className="flex items-center gap-2 mt-3">
                                <div className="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center">
                                    <span className="text-sm font-bold">AT</span>
                                </div>
                                <div>
                                    <div className="text-sm font-medium">Arco Timmermans</div>
                                    <div className="text-xs text-neutral-400">Lobby-expert en onderzoeker</div>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="border-l-4 border-blue-500 pl-4">
                                <h5 className="font-bold text-blue-300 mb-1">Directe toegang</h5>
                                <p className="text-sm text-neutral-300">Een netwerk van directe toegang tot beleidsmakers, ministers en ambtenaren.</p>
                            </div>
                            <div className="border-l-4 border-blue-500 pl-4">
                                <h5 className="font-bold text-blue-300 mb-1">Draaideurlobby</h5>
                                <p className="text-sm text-neutral-300">Carrièrewisselingen tussen politiek en sector, en een cultuur van informeel overleg.</p>
                            </div>
                            <div className="border-l-4 border-blue-500 pl-4">
                                <h5 className="font-bold text-blue-300 mb-1">Verschuivende invloed</h5>
                                <p className="text-sm text-neutral-300">Deze vanzelfsprekende invloed is afgenomen, omdat er meer zichtbare spelers met tegengeluid zijn gekomen.</p>
                            </div>
                        </div>
                    </div>

                    {/* NIEUWE LOBBY */}
                    <div className="bg-neutral-800/50 backdrop-blur-sm p-8 rounded-xl border border-neutral-700">
                        <div className="flex items-center gap-3 mb-6">
                            <Volume2 className="text-amber-400" size={28} />
                            <h4 className="text-2xl font-bold">De Luidruchtige Lobby: Dramatisering</h4>
                        </div>
                        <p className="text-neutral-300 mb-6">
                            De opkomst van groepen als <span className="font-semibold text-amber-300">Farmers Defence Force</span> en de politieke doorbraak van <span className="font-semibold text-amber-300">BoerBurgerBeweging (BBB)</span> markeren een nieuwe fase in de landbouwlobby.
                        </p>
                        <div className="bg-neutral-900/70 p-4 rounded-lg mb-6">
                            <div className="mb-4">
                                <p className="italic text-neutral-300 mb-2">
                                    "Het luidruchtiger worden van de lobby uit de boerenhoek is eigenlijk juist een teken dat de altijd aanwezige invloed is afgenomen."
                                </p>
                                <p className="italic text-neutral-300 mb-3">
                                    "Dat noem ik dan dramatisering […] dat je van een meer technisch of zakelijk belang een veel breder, emotionelere kwestie maakt."
                                </p>
                                <a
                                    href="https://veeindustrie-longread.nl/#/interviews/arco-timmermans"
                                    className="inline-flex items-center gap-2 text-sm text-amber-400 hover:text-amber-300 transition-colors group"
                                >
                                    <MessageSquare size={16} />
                                    <span>Bekijk volledig interview met Arco Timmermans</span>
                                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                </a>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-amber-900 flex items-center justify-center">
                                    <span className="text-sm font-bold">AT</span>
                                </div>
                                <div>
                                    <div className="text-sm font-medium">Arco Timmermans</div>
                                    <div className="text-xs text-neutral-400">Lobby-expert en onderzoeker</div>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="border-l-4 border-amber-500 pl-4">
                                <h5 className="font-bold text-amber-300 mb-1">Dramatisering als strategie</h5>
                                <p className="text-sm text-neutral-300">Economische belangen worden verpakt als existentiële strijd voor het familiebedrijf, de plattelandscultuur en de Nederlandse identiteit.</p>
                            </div>
                            <div className="border-l-4 border-amber-500 pl-4">
                                <h5 className="font-bold text-amber-300 mb-1">Zichtbaarheid als kracht</h5>
                                <p className="text-sm text-neutral-300">Waar traditionele lobby stilletjes opereerde, gebruikt de nieuwe lobby geluid, media-aandacht en politieke mobilisatie.</p>
                            </div>
                            <div className="border-l-4 border-amber-500 pl-4">
                                <h5 className="font-bold text-amber-300 mb-1">Van belang naar emotie</h5>
                                <p className="text-sm text-neutral-300">Technische discussies over stikstof en inkomen worden getransformeerd tot emotionele identiteitskwesties.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* STRATEGIEËN - HORIZONTALE SCROLL OF GRID */}
                <div className="mb-16">
                    <h4 className="text-2xl font-bold mb-8 text-center">Strategieën van de Moderne Lobby</h4>

                    <div className="text-center max-w-3xl mx-auto mb-8">
                        <p className="text-lg text-neutral-300 mb-4">
                            De lobby van vandaag speelt zich niet alleen af in achterkamertjes, maar in klaslokalen,
                            op sociale media en in de publieke opinie. Ontdek strategieën die onder andere het
                            huidige debat vormgeven.
                        </p>
                        <div className="inline-flex items-center gap-2 text-emerald-400 text-sm font-medium">
                            <span>🎯</span>
                            <span>Klik op een strategie voor details en voorbeelden</span>
                        </div>
                    </div>
                    <div className="flex overflow-x-auto pb-4 gap-4 scrollbar-hide">
                        {lobbyStrategies.map((strategy, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveStrategy(index)}
                                className={`flex-shrink-0 w-72 p-6 rounded-xl transition-all ${
                                    activeStrategy === index
                                        ? 'bg-emerald-900/30 border-2 border-emerald-600'
                                        : 'bg-neutral-800/50 border border-neutral-700 hover:bg-neutral-700/50'
                                }`}
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="text-emerald-400">
                                        {strategy.icon}
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-lg">{strategy.title}</h5>
                                        <p className="text-sm text-neutral-400">{strategy.subtitle}</p>
                                    </div>
                                </div>
                                <p className="text-sm text-neutral-300 mb-4">{strategy.description}</p>
                                <div className="text-xs text-emerald-300 font-medium">
                                    {activeStrategy === index ? "✓ Actief geselecteerd" : "Klik voor details"}
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* DETAIL VAN ACTIEVE STRATEGIE */}
                    <div className="mt-8 bg-neutral-800/30 p-8 rounded-xl">
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="md:col-span-2">
                                <h5 className="text-2xl font-bold mb-4">{lobbyStrategies[activeStrategy].title}</h5>
                                <p className="text-lg text-neutral-300 mb-6">{lobbyStrategies[activeStrategy].description}</p>

                                {/* VOORBEELDEN VAN DEZE STRATEGIE */}
                                <div className="bg-neutral-900/50 p-4 rounded-lg">
                                    <h6 className="font-bold mb-2 text-emerald-300">Concrete uitvoering:</h6>
                                    <ul className="text-sm text-neutral-300 space-y-2">
                                        {activeStrategy === 0 && ( // Dramatisering
                                            <>
                                                <li>• BBB modelleerde zich op Partij voor de Dieren als één-issue
                                                    partij
                                                </li>
                                                <li>• Financiering protesten door grote agribedrijven zoals Vion en
                                                    ForFarmers
                                                </li>
                                                <li>• "Gehaktbal als symbool" frame in politiek debat</li>
                                                <li>• Farmers Defence Force die trekkers inzet als protestmiddel</li>
                                            </>
                                        )}
                                        {activeStrategy === 1 && ( // Echo Chamber
                                            <>
                                                <li>• CEO's die twijfel zaaien over stikstofcijfers in FD en Boerderij
                                                </li>
                                                <li>• Gecoördineerde berichtgeving via meerdere media-kanalen</li>
                                                <li>• Creëren van alternatieve feiten rond stikstofmetingen</li>
                                                <li>• Herhalen van kernboodschappen in politiek en media</li>
                                            </>
                                        )}
                                        {activeStrategy === 2 && ( // Educatieve beïnvloeding
                                            <>
                                                <li>• De Heus Kidzz lesmateriaal via Boerderij Educatie Nederland</li>
                                                <li>• Verplicht lesmateriaal bij gratis schoolmelk van zuivelsector
                                                    (NZO)
                                                </li>
                                                <li>• 450 scholen gebruikten afgelopen jaar sectorlesmateriaal</li>
                                                <li>• Overheidssubsidies via Jong Leren Eten programma</li>
                                            </>
                                        )}
                                        {activeStrategy === 3 && ( // Financiering tegenonderzoek
                                            <>
                                                <li>• Stichting Agrifacts: €225.000/jaar van VanDrie, De Heus, Royal
                                                    A-ware
                                                </li>
                                                <li>• Mesdag Zuivelfonds met eigen, lagere stikstofcijfers</li>
                                                <li>• "Onafhankelijke" rapporten die overheidsonderzoek bevragen</li>
                                                <li>• Redacteuren die ook communicatieadviseur zijn voor
                                                    varkenshouderij
                                                </li>
                                            </>
                                        )}
                                    </ul>
                                </div>
                            </div>

                            {/* QUOTE SECTION - TOON ALLEEN ALS ER EEN QUOTE IS */}
                            {lobbyStrategies[activeStrategy].quote && (
                                <div className="bg-neutral-900/70 p-6 rounded-lg">
                                    <blockquote className="text-xl italic mb-6 text-neutral-200">
                                        "{lobbyStrategies[activeStrategy].quote}"
                                    </blockquote>
                                    {lobbyStrategies[activeStrategy].hasInterview && (
                                        <a
                                            href={lobbyStrategies[activeStrategy].interviewLink}
                                            className="inline-flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors group mb-4"
                                        >
                                            <MessageSquare size={16}/>
                                            <span>Bekijk volledig interview</span>
                                            <span
                                                className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                        </a>
                                    )}
                                    <div className="flex items-center gap-3">
                                        <div
                                            className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center">
                                            <span className="font-bold">
                                                {lobbyStrategies[activeStrategy].author.split(' ').map(n => n[0]).join('')}
                                            </span>
                                        </div>
                                        <div>
                                            <div className="font-bold">{lobbyStrategies[activeStrategy].author}</div>
                                            <div
                                                className="text-sm text-neutral-400">{lobbyStrategies[activeStrategy].role}</div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {/* ALS GEEN QUOTE, TOON EXTRA INFORMATIE */}
                            {!lobbyStrategies[activeStrategy].quote && (
                                <div className="bg-neutral-900/70 p-6 rounded-lg">
                                    <h6 className="font-bold mb-4 text-emerald-300">Mechanisme & Effect</h6>
                                    <ul className="text-sm text-neutral-300 space-y-3">
                                        {activeStrategy === 1 && ( // Echo Chamber
                                            <>
                                                <li>• Boodschappen via politiek, media en sociale netwerken herhalen
                                                </li>
                                                <li>• Creëren van een gesloten narratief dat moeilijk te doorbreken is
                                                </li>
                                                <li>• Waarheid en perceptie laten samensmelten</li>
                                                <li>• Verwarring zaaien over wetenschappelijke consensus</li>
                                            </>
                                        )}
                                        {activeStrategy === 3 && ( // Financiering tegenonderzoek
                                            <>
                                                <li>• Financieren van organisaties die wetenschappelijk tegenwicht
                                                    bieden
                                                </li>
                                                <li>• Creëren van schijn van onafhankelijkheid</li>
                                                <li>• Terugbrengen van sectorbelangen als 'wetenschappelijke kritiek'
                                                </li>
                                                <li>• Vertragen van beleidsimplementatie door twijfel te zaaien</li>
                                            </>
                                        )}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* EXTRA BRONNEN EN DOCUMENTAIRE */}
                <div className="mb-16">
                    <div className="bg-gradient-to-r from-emerald-900/20 to-blue-900/20 p-8 rounded-xl border border-emerald-800/30">
                        <div className="flex flex-col md:flex-row items-start gap-6">
                            <div className="flex-shrink-0">
                                <div
                                    className="w-16 h-16 rounded-full bg-emerald-900/30 flex items-center justify-center">
                                    <Film className="text-emerald-400" size={32}/>
                                </div>
                            </div>
                            <div className="flex-1">
                                <h5 className="text-2xl font-bold mb-4">Wil je meer weten?</h5>
                                <p className="text-lg text-neutral-300 mb-6">
                                    Dit hoofdstuk laat zien hoe lobby werkt, maar er is nog veel meer te ontdekken.
                                    Bekijk bijvoorbeeld de documentaire <span
                                    className="font-semibold text-emerald-400">"Boerocratie"</span> voor een diepgaande
                                    analyse van de landbouwlobby. Ga naar het <a
                                    href="https://veeindustrie-longread.nl/#/kunst-kennis-cultuur"
                                    className="font-semibold text-emerald-400 hover:text-emerald-300 transition-colors">Kunst,
                                    Kennis & Cultuur hoekje</a> voor meer informatie.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>




                {/* CONCLUDERENDE ANALYSE */}
                <div className="mt-16 p-8 bg-neutral-800/30 rounded-xl border border-neutral-700">
                    <div className="flex items-start gap-4 mb-6">
                        <div className="text-emerald-400 flex-shrink-0">
                            <Shield size={32} />
                        </div>
                        <div>
                            <h5 className="text-2xl font-bold mb-4">Conclusie: Een veerkrachtig en adaptief lobbyklimaat</h5>
                            <p className="text-lg text-neutral-300 leading-relaxed">
                                De lobby van de vee-industrie is geen statisch machtsblok, maar een <span className="font-semibold text-emerald-300">adaptief netwerk</span> dat meebeweegt met de tijd. Waar de traditionele 'ijzeren ring' via stille toegang opereerde, heeft de nieuwe generatie geluid, drama en politieke mobilisatie omarmd.
                            </p>
                            <p className="text-lg text-neutral-300 mt-4 leading-relaxed">
                                Deze combinatie van tactieken — van dramatisering en echo-kamers tot educatieve beïnvloeding en gefinancierd tegenonderzoek — zorgt ervoor dat de sector zijn invloed kan behouden. De uitdaging voor beleid en democratie ligt in het creëren van een <span className="font-semibold text-emerald-300">eerlijker en transparanter speelveld</span>, waarin niet alleen geld en toegang, maar ook maatschappelijke waarden en wetenschappelijke inzichten serieus worden gewogen.
                            </p>
                        </div>
                    </div>
                </div>

                {/* AFSLUITENDE QUOTE - DE "DARK SIDE OF THE MOON" */}
                <div className="mt-12 p-8 bg-gradient-to-r from-neutral-800 to-neutral-900 rounded-xl border-l-4 border-emerald-600">
                    <div className="flex flex-col md:flex-row items-start gap-6">
                        <div className="flex-shrink-0">
                            <div className="w-16 h-16 rounded-full bg-emerald-900/30 flex items-center justify-center">
                                <EyeOff className="text-emerald-400" size={32}/>
                            </div>
                        </div>
                        <div className="flex-1">
                            <h5 className="text-2xl font-bold mb-4">Transparantie? "Het is de dark side of the moon"</h5>
                            <blockquote className="text-xl italic mb-6 text-neutral-200 leading-relaxed">
                                "Heel veel lobby is een beetje de dark side of the moon. Die is er. Het is de helft van de maan of meer. Maar je ziet hem niet per se.
                                Het punt van onzichtbare lobby is dat die voor iedereen, dus ook voor mij, vaak gewoon moeilijk in kaart te brengen is."
                            </blockquote>
                            <a
                                href="https://veeindustrie-longread.nl/#/interviews/arco-timmermans"
                                className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors group mb-4"
                            >
                                <MessageSquare size={20} />
                                <span className="font-medium">Bekijk het volledige interview met Arco Timmermans</span>
                                <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                            </a>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-neutral-700 flex items-center justify-center">
                                    <span className="font-bold text-lg">AT</span>
                                </div>
                                <div>
                                    <div className="font-bold">Arco Timmermans</div>
                                    <div className="text-sm text-neutral-400">Lobby-expert, over de onzichtbaarheid van invloed</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* TRANSITIE NAAR VOLGEND HOOFDSTUK */}
                <div className="mt-12 pt-8 border-t border-neutral-800 text-center">
                    <p className="text-neutral-400 mb-2">Volgende: Hoe deze lobby politieke besluitvorming beïnvloedt</p>
                    <div className="text-sm text-neutral-500">
                        Ondanks groeiende urgentie blijft concrete actie uit. Waarom durft geen politicus met machtspositie door te pakken?
                    </div>
                </div>

            </div>
        </div>
    );
}