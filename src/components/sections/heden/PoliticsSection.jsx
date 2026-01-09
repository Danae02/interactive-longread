// components/sections/text/PoliticsSection.jsx
import React, { useState } from 'react';
import { Vote, AlertTriangle, Shield, Scale, Zap, Euro, Users, Book, Target, MessageSquare, ExternalLink } from 'lucide-react';

export default function PoliticsSection() {
    const [activeAnalysis, setActiveAnalysis] = useState(0);

    const analysisPoints = [
        {
            id: 'fear',
            title: "Angst voor de Kiezer",
            icon: <AlertTriangle size={24} />,
            color: "text-amber-400",
            bgColor: "bg-amber-900/30",
            content: [
                "'Er is toch angst voor de kiezers, ja, denk ik.' - Lammert van Raan",
                "Deze angst wordt gevoed door:",
                "• De opkomst van BBB als direct verzet tegen verandering",
                "• CDA's traditionele achterban die historisch verbonden is met boeren",
                "• Polarisatie: veel voorstellen worden gezien als 'aanval op de boer'",
            ]
        },
        {
            id: "parties",
            title: "Partijpolitieke Verdeeldheid",
            icon: <Users size={24} />,
            color: "text-blue-400",
            bgColor: "bg-blue-900/30",
            content: [
                "Het politieke debat over de toekomst van de landbouw en de natuur wordt niet alleen gekenmerkt door diepe inhoudelijke tegenstellingen, maar ook door een sterk versplinterd politiek landschap. Het aantal partijen in de Tweede Kamer is groot, en stabiele meerderheden voor ingrijpende systeemverandering zijn zeldzaam. Dit leidt vaak tot compromissen waarbij de meest vergaande voorstellen stranden of sterk worden afgezwakt.",
                "",
                "Drie concrete voorbeelden van wetvoorstellen die niet zijn gelukt:",
                "",
                "1. De Vleestaks/Slachtaks",
                "Een belasting op vlees om de werkelijke kosten (6 miljard euro schade) te verrekenen, strandde op politieke weerstand. 'Over het algemeen komt dan de grootste weerstand bij VVD, CDA en PVV. Ja, eigenlijk alles rechts van D66.' - Lammert van Raan",
                "",
                "2. De Ecocidewet",
                "Een initiatiefwet om grootschalige natuurvernietiging strafbaar te stellen, loopt vast. 'Het meest opvallende was eigenlijk de onbekendheid met het onderwerp.' Zelfs minister Kaag, 'een hele belezen en ervaren persoon', had er nooit van gehoord. - Lammert van Raan",
                "",
                "3. Afschaffen fossiele subsidies",
                "Een voorstel om subsidies voor fossiele brandstoffen stop te zetten, kon geen meerderheid vinden. 'In alle drie de gevallen was er geen meerderheid te vinden.' - Lammert van Raan"
            ],
            interviewLink: "https://veeindustrie-longread.nl/#/interviews/lammert-van-raan",
            interviewNote: "Alle voorbeelden komen uit interview met voormalig Tweede Kamerlid Lammert van Raan"
        },
        {
            id: 'europe',
            title: "Europees Beleid: GLB als Motor",
            icon: <Euro size={24} />,
            color: "text-purple-400",
            bgColor: "bg-purple-900/30",
            content: [
                "Het Gemeenschappelijk Landbouwbeleid (GLB) is de financiële motor:",
                "• Directe inkomenssteun, vaak gekoppeld aan productie",
                "• Subsidies voor modernisering die schaalvergroting belonen",
                "• Marktbescherming die concurrentie beperkt",
                "",
                "Bijna 1/3 van het hele EU-budget gaat naar landbouwsubsidies.",
                "80% van de inkomenssteun komt terecht bij de top 20% industriegiganten."
            ]
        },
        {
            id: 'system',
            title: "Systeemfout: De Verkeerde Schuldigen",
            icon: <Scale size={24} />,
            color: "text-cyan-400",
            bgColor: "bg-cyan-900/30",
            content: [
                "'Boeren zijn gevangen in een systeem dat ooit misschien een goed idee leek.' - Lammert van Raan",
                "Dit systeem wordt in stand gehouden door:",
                "• Financiers (banken) die alleen intensivering financieren",
                "• Afnemers (Vion, Van Drie) die lage prijzen afdwingen",
                "• Politiek beleid dat subsidies geeft voor schaalvergroting",
                "",
                "'De boeren kunnen alleen maar vooruit door meer te produceren tegen lagere prijzen.' - Lammert van Raan",
                "'Als je ziet hoeveel subsidies er naar boeren gaat... Die subsidie moet je misschien in stand houden, maar wel voor plantaardig.' - Lammert van Raan"
            ]
        }
    ];

    const caseStudies = [
        {
            title: "BBB: Politieke Arm van de Sector",
            description: "De opkomst van BBB illustreert hoe de sector zich politiek organiseert. Van Raan: 'BBB zegt trots: ons model was eigenlijk de Partij voor de Dieren.'",
            facts: [
                "Directe financiering van grote agribedrijven",
                "Lobbyist in de Eerste Kamer gebracht",
                "Politieke macht door te dreigen met kiezersverloop"
            ]
        },
        {
            title: "Intimidatie als Politiek Wapen",
            description: "Boerenprotesten waarbij ministers werden geïntimideerd, blokkades van distributiecentra en bedreigingen ondermijnen politieke moed.",
            facts: [
                "Protesten breken politieke wil (zoals in Regio Murcia in Spanje waar zij het lokale regeringsgebouw bestormden. Hierna werden de nieuwe beperkingen ingetrokken)",
                "Bedreigingen van politici en ambtenaren",
                "Dramatisering als strategie werkt: 'van technisch naar existentieel'"
            ]
        },
        {
            title: "Ministerie van Landbouw, Visserij, Voedselzekerheid en Natuur: Erfenis van Mansholt",
            description: "Historisch sterk verbonden met landbouwbelangen, balanceert tussen economische belangen en duurzaamheidsdoelen.",
            facts: [
                "Direct benaderd door lobbyorganisaties",
                "Traditionele banden met sector",
                "NVWA kampt met capaciteitsproblemen ('tandenloze tijger')"
            ]
        }
    ];

    const interviewUrl = "https://veeindustrie-longread.nl/#/interviews/lammert-van-raan";

    // Functie om te bepalen of content een object array is
    const isObjectArray = (content) => {
        return Array.isArray(content) && content.length > 0 && typeof content[0] === 'object' && content[0].title !== undefined;
    };

    // Functie om interview link te renderen
    const renderInterviewLink = (point) => {
        if (!point.interviewLink || !point.interviewNote) return null;

        return (
            <div className="mt-8 pt-6 border-t border-neutral-700">
                <div className="flex items-start gap-3">
                    <div className={`${point.color} flex-shrink-0`}>
                        <MessageSquare size={20} />
                    </div>
                    <div>
                        <a
                            href={point.interviewLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-2 ${point.color} hover:opacity-80 transition-opacity group`}
                        >
                            <span className="font-medium">{point.interviewNote}</span>
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                        </a>
                        <div className="mt-1">
                            <a
                                href={point.interviewLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-neutral-500 hover:text-neutral-300 break-all inline-flex items-center gap-1"
                            >
                                {point.interviewLink}
                                <ExternalLink size={10} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    // Functie om Lammert van Raan citaten te renderen met link
    const renderQuoteWithLink = (quote, author = "Lammert van Raan", showLink = true) => {
        return (
            <div className="space-y-2">
                <p className="italic text-neutral-200">"{quote}"</p>
                <div className="flex items-center justify-between">
                    <div className="text-sm text-neutral-400">- {author}</div>
                    {showLink && (
                        <a
                            href={interviewUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1"
                        >
                            Bekijk volledig interview
                            <ExternalLink size={10} />
                        </a>
                    )}
                </div>
            </div>
        );
    };

    // Functie om naam van Lammert van Raan te renderen met link
    const renderNameWithLink = () => {
        return (
            <a
                href={interviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 group"
            >
                <span className="font-bold">Lammert van Raan</span>
                <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
        );
    };

    return (
        <div className="politics-section py-20 px-6 bg-gradient-to-b from-neutral-900 to-neutral-950">
            <div className="max-w-6xl mx-auto">

                {/* HOOFDTITEL */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-3 mb-4">
                        <Vote className="text-emerald-500" size={32} />
                        <h3 className="text-4xl font-bold">3. Politieke Blokkade: Waarom Verandering (nog) Niet lukt</h3>
                    </div>
                    <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
                        Hoewel de urgentie voor verandering groeit, blijft concrete politieke actie uit.
                        Een analyse van electorale angst, historische banden en systeemfouten die de status quo in stand houden.
                    </p>
                </div>

                {/* CORE ANALYSIS - GRID */}
                <div className="mb-16">
                    <h4 className="text-2xl font-bold mb-8 text-center">Wat blokkeert verandering? Belangrijke redenen</h4>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        {analysisPoints.map((point, index) => (
                            <button
                                key={point.id}
                                onClick={() => setActiveAnalysis(index)}
                                className={`text-left p-6 rounded-xl transition-all border ${
                                    activeAnalysis === index
                                        ? 'border-emerald-600 bg-neutral-800/50 ring-2 ring-emerald-500/50'
                                        : 'border-neutral-700 bg-neutral-800/30 hover:bg-neutral-800/40'
                                }`}
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className={`${point.color}`}>
                                        {point.icon}
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-lg">{point.title}</h5>
                                        {point.subtitle && (
                                            <p className="text-sm text-neutral-400 mt-1">{point.subtitle}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="text-sm text-neutral-300 space-y-2">
                                    {/* Voor secties met object structuur (zoals blockades) */}
                                    {isObjectArray(point.content) && point.content[0] && (
                                        <>
                                            <p className={`font-medium ${point.color.replace('text-', 'text-')}`}>
                                                {point.content[0].title}
                                            </p>
                                            <p className="text-neutral-400 text-sm line-clamp-2">
                                                {point.content[0].description}
                                            </p>
                                        </>
                                    )}

                                    {/* Voor secties met string array (zoals fear, europe, system, parties) */}
                                    {!isObjectArray(point.content) && point.content.slice(0, 2).map((line, i) => (
                                        <p key={i} className={i === 0 && line.startsWith("'") ? "italic" : ""}>
                                            {line.startsWith("'") ? `"${line.substring(1, line.length - 1)}"` : line}
                                        </p>
                                    ))}
                                </div>

                                <div className="text-xs text-emerald-400 font-medium mt-4">
                                    {activeAnalysis === index ? "✓ Actief geselecteerd" : "Klik voor volledige analyse"}
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* DETAIL VAN ACTIEVE ANALYSE */}
                    <div className={`${analysisPoints[activeAnalysis].bgColor} p-8 rounded-xl border-l-4 ${analysisPoints[activeAnalysis].color.replace('text-', 'border-')}`}>
                        <div className="flex items-center gap-3 mb-6">
                            <div className={`${analysisPoints[activeAnalysis].color}`}>
                                {analysisPoints[activeAnalysis].icon}
                            </div>
                            <div>
                                <h5 className="text-2xl font-bold">{analysisPoints[activeAnalysis].title}</h5>
                                {analysisPoints[activeAnalysis].subtitle && (
                                    <p className="text-neutral-400 mt-1">{analysisPoints[activeAnalysis].subtitle}</p>
                                )}
                            </div>
                        </div>

                        {/* SPECIALE RENDER VOOR OBJECT ARRAYS (zoals blockades) */}
                        {isObjectArray(analysisPoints[activeAnalysis].content) && (
                            <div className="space-y-8">
                                {analysisPoints[activeAnalysis].content.map((item, index) => (
                                    <div key={index} className="bg-neutral-900/40 p-6 rounded-lg">
                                        <h6 className={`font-bold text-lg mb-3 ${analysisPoints[activeAnalysis].color}`}>
                                            {item.title}
                                        </h6>
                                        <p className="text-neutral-300 mb-4">{item.description}</p>

                                        {item.quote && (
                                            <div className="bg-neutral-950/50 p-4 rounded mb-4">
                                                {renderQuoteWithLink(
                                                    item.quote.replace(/ - Lammert van Raan$/, ''),
                                                    "Lammert van Raan",
                                                    true
                                                )}
                                            </div>
                                        )}

                                        {item.detail && (
                                            <p className="text-neutral-400 text-sm mb-3">{item.detail}</p>
                                        )}

                                        {item.outcome && (
                                            <div className="flex items-center gap-2 text-sm">
                                                <div className={`w-2 h-2 rounded-full ${analysisPoints[activeAnalysis].color.replace('text-', 'bg-')}`}></div>
                                                <span className={`font-medium ${analysisPoints[activeAnalysis].color}`}>Resultaat:</span>
                                                <span className="text-neutral-300">{item.outcome}</span>
                                            </div>
                                        )}
                                    </div>
                                ))}

                                {/* INTERVIEW LINK VOOR OBJECT ARRAYS */}
                                {renderInterviewLink(analysisPoints[activeAnalysis])}
                            </div>
                        )}

                        {/* REGULIERE CONTENT VOOR STRING ARRAYS */}
                        {!isObjectArray(analysisPoints[activeAnalysis].content) && (
                            <>
                                <div className="space-y-4">
                                    {Array.isArray(analysisPoints[activeAnalysis].content) &&
                                        analysisPoints[activeAnalysis].content.map((line, index) => (
                                            <div key={index}>
                                                {line.includes("Lammert van Raan") && line.includes("'") ? (
                                                    <div className="mb-4 p-4 bg-neutral-900/40 rounded">
                                                        {renderQuoteWithLink(
                                                            line.replace(/ - Lammert van Raan$/, '').replace(/^'/, '').replace(/'$/, ''),
                                                            "Lammert van Raan",
                                                            true
                                                        )}
                                                    </div>
                                                ) : (
                                                    <p
                                                        className={`text-lg ${
                                                            line.startsWith("'") || (line.startsWith('"') && line.endsWith('"'))
                                                                ? "italic text-neutral-200"
                                                                : line.startsWith("•") || line.match(/^\d\./)
                                                                    ? "text-neutral-300 ml-4"
                                                                    : line.startsWith("**") && line.endsWith("**")
                                                                        ? "font-bold text-neutral-200"
                                                                        : line.includes("[") && line.includes("](")
                                                                            ? "text-neutral-400 italic"
                                                                            : "text-neutral-300"
                                                        }`}
                                                    >
                                                        {line.startsWith("'") ? `"${line.substring(1, line.length - 1)}"` :
                                                            line.startsWith('"') ? line :
                                                                line.startsWith("**") && line.endsWith("**") ? line.slice(2, -2) :
                                                                    line.includes("[") && line.includes("](") ?
                                                                        line.replace(/\[([^\]]+)\]\(([^)]+)\)/, (match, text, url) => {
                                                                            return `${text} (${url})`;
                                                                        }) :
                                                                        line}
                                                    </p>
                                                )}
                                            </div>
                                        ))}
                                </div>

                                {/* INTERVIEW LINK VOOR STRING ARRAYS */}
                                {renderInterviewLink(analysisPoints[activeAnalysis])}
                            </>
                        )}

                        {/* SPECIALE VOETNOOT VOOR ANGST SECTIE */}
                        {analysisPoints[activeAnalysis].id === 'fear' && (
                            <div className="mt-8 p-6 bg-neutral-900/50 rounded-lg">
                                <h6 className="font-bold mb-3 text-emerald-300">Van Raan over de paradox:</h6>
                                {renderQuoteWithLink(
                                    "Politici met macht weten wat er moet gebeuren, maar durven niet. Politici zonder macht (zoals ik) kunnen wel voorstellen doen, maar krijgen geen meerderheid.",
                                    "Lammert van Raan",
                                    true
                                )}
                            </div>
                        )}
                    </div>
                </div>

                {/* CASE STUDIES */}
                <div className="mb-16">
                    <h4 className="text-2xl font-bold mb-8 text-center">Concrete Gevallen van Politieke Beïnvloeding</h4>

                    <div className="grid md:grid-cols-3 gap-6">
                        {caseStudies.map((study, index) => (
                            <div key={index} className="bg-neutral-800/30 p-6 rounded-xl border border-neutral-700">
                                <h5 className="text-xl font-bold mb-4">{study.title}</h5>
                                <p className="text-neutral-300 mb-6">{study.description}</p>
                                <div className="space-y-3">
                                    {study.facts.map((fact, i) => (
                                        <div key={i} className="flex items-start gap-2">
                                            <div className="text-emerald-400 mt-1">•</div>
                                            <p className="text-sm text-neutral-300">{fact}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* PARADOX VAN RAAN */}
                <div className="mb-16 p-8 bg-gradient-to-r from-neutral-800 to-neutral-900 rounded-xl border-l-4 border-emerald-600">
                    <div className="flex flex-col md:flex-row items-start gap-6">
                        <div className="flex-shrink-0">
                            <div className="w-16 h-16 rounded-full bg-emerald-900/30 flex items-center justify-center">
                                <Zap className="text-emerald-400" size={32} />
                            </div>
                        </div>
                        <div className="flex-1">
                            <h5 className="text-2xl font-bold mb-4">De Pijnlijke Paradox</h5>
                            <p className="text-lg text-neutral-300 mb-6 leading-relaxed">
                                Van Raan signaleert een fundamenteel probleem:
                            </p>
                            <blockquote className="text-xl italic mb-6 text-neutral-200 border-l-4 border-emerald-500 pl-6 py-2">
                                "Misschien zijn wij ook als ecocentrale beweging
                                niet in staat om een goed alternatief te geven, zowel aan de consument als aan boeren."
                            </blockquote>

                            {/*<div className="mb-6 p-4 bg-emerald-900/20 rounded-lg">*/}
                            {/*    <blockquote className="text-lg italic mb-4 text-neutral-200">*/}
                            {/*        "Je moet handelingsperspectief houden, maar je kunt niet anders zijn dan pessimistisch,*/}
                            {/*        volgens mij, als je kijkt naar de feiten."*/}
                            {/*    </blockquote>*/}
                            {/*    <div className="flex items-center justify-between">*/}
                            {/*        <div className="text-sm text-neutral-400">- Lammert van Raan</div>*/}
                            {/*        <a*/}
                            {/*            href={interviewUrl}*/}
                            {/*            target="_blank"*/}
                            {/*            rel="noopener noreferrer"*/}
                            {/*            className="text-sm text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1"*/}
                            {/*        >*/}
                            {/*            Bekijk volledig interview*/}
                            {/*            <ExternalLink size={12} />*/}
                            {/*        </a>*/}
                            {/*    </div>*/}
                            {/*</div>*/}

                            <div className="flex items-center gap-4 mt-8">
                                <div className="w-12 h-12 rounded-full bg-neutral-700 flex items-center justify-center">
                                    <span className="font-bold text-lg">LvR</span>
                                </div>
                                <div>
                                    {renderNameWithLink()}
                                    <div className="text-sm text-neutral-400">Voormalig Tweede Kamerlid Partij voor de Dieren</div>
                                    <a
                                        href={interviewUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs text-neutral-500 hover:text-neutral-300 mt-1 inline-block"
                                    >
                                        {interviewUrl}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CONCLUSIE */}
                <div className="mt-16 p-8 bg-neutral-800/30 rounded-xl border border-neutral-700">
                    <div className="flex items-start gap-4">
                        <div className="text-emerald-400 flex-shrink-0">
                            <Book size={32} />
                        </div>
                        <div>
                            <h5 className="text-2xl font-bold mb-4">Conclusie: Een Perfect Gesloten Systeem</h5>
                            <p className="text-lg text-neutral-300 leading-relaxed">
                                De politiek houdt de intensieve vee-industrie in stand door een combinatie van
                                <span className="font-semibold text-emerald-300"> electorale angst</span>,
                                <span className="font-semibold text-emerald-300"> partijpolitieke verdeeldheid</span>,
                                en <span className="font-semibold text-emerald-300"> historische banden</span> met de sector.
                            </p>
                            <p className="text-lg text-neutral-300 mt-4 leading-relaxed">
                                Zolang het systeem financieel beloont voor schaalvergroting en politiek angst heeft voor
                                verandering, blijft de patstelling bestaan. Volgens Van Raan zijn
                                "alle oplossingen [...] er eigenlijk al." Wat ontbreekt is de politieke moed om ze door te zetten.
                            </p>
                            <div className="mt-6 pt-6 border-t border-neutral-700">
                                <div className="flex items-start gap-3">
                                    <div className="text-emerald-400 flex-shrink-0">
                                        <MessageSquare size={20} />
                                    </div>
                                    <div>
                                        <a
                                            href={interviewUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors group"
                                        >
                                            <span className="font-medium">Bekijk het volledige interview met Lammert van Raan</span>
                                            <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                        </a>
                                        <div className="mt-1">
                                            <a
                                                href={interviewUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-xs text-neutral-500 hover:text-neutral-300 break-all inline-flex items-center gap-1"
                                            >
                                                {interviewUrl}
                                                <ExternalLink size={10} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* TRANSITIE */}
                <div className="mt-12 pt-8 border-t border-neutral-800 text-center">
                    <p className="text-neutral-400 mb-2">Volgende: Sociale Acceptatie en Consumentengedrag</p>
                    <div className="text-sm text-neutral-500">
                        Hoe beïnvloeden marketing, framing en culturele gewoontes ons denken over vlees en zuivel?
                    </div>
                </div>

            </div>
        </div>
    );
}