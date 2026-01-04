// components/sections/interactive/FramingDetectionSection.jsx
import React, { useState } from 'react';
import { Search, AlertTriangle, BarChart3, FileText, Users, TrendingUp, CheckCircle, Lightbulb, Eye, EyeOff } from 'lucide-react';

export default function FramingDetectionSection() {
    const [userSelections, setUserSelections] = useState({});
    const [showAnalysis, setShowAnalysis] = useState(false);
    const [revealBestChecks, setRevealBestChecks] = useState(false);

    const checkItems = [
        {
            id: 'bron',
            title: "1. Check de bron",
            description: "Wie heeft dit gemaakt, gefinancierd of verspreid?",
            icon: <Search className="text-emerald-400" size={24} />,
            questions: [
                "Is de maker duidelijk?",
                "Wie heeft betaald?",
                "Is er belangenverstrengeling?",
                "Worden sponsors vermeld?"
            ],
            examples: [
                {
                    text: "Lespakket 'Boerderij in Beeld'",
                    analysis: "Gemaakt door De Heus (veevoerproducent) → belangenverstrengeling"
                },
                {
                    text: "Campagne 'Melk moet'",
                    analysis: "Medegefinancierd door de overheid én zuivelsector → gemengde belangen"
                }
            ]
        },
        {
            id: 'taal',
            title: "2. Check de taal",
            description: "Hoe wordt de boodschap verpakt in woorden en beeld?",
            icon: <FileText className="text-emerald-400" size={24} />,
            questions: [
                "Worden eufemismen gebruikt?",
                "Zijn er emotionele woorden?",
                "Is de toon neutraal of beïnvloedend?",
                "Kloppen de beeld-bijschrift combinaties?"
            ],
            examples: [
                {
                    text: "'Verwerken' i.p.v. 'slachten'",
                    analysis: "Eufemisme dat de realiteit verzacht"
                },
                {
                    text: "'Natuurlijk' op verpakking",
                    analysis: "Vaag begrip zonder wettelijke definitie"
                }
            ]
        },
        {
            id: 'cijfers',
            title: "3. Check de cijfers",
            description: "Hoe worden feiten en statistieken gepresenteerd?",
            icon: <BarChart3 className="text-emerald-400" size={24} />,
            questions: [
                "Van welke bron komen cijfers?",
                "Worden getallen in context geplaatst?",
                "Zijn er selectieve vergelijkingen?",
                "Worden trends of momentopnames gebruikt?"
            ],
            examples: [
                {
                    text: "Agrifacts cijfers",
                    analysis: "Brancheorganisatie vs. CBS/PBL → mogelijke bias"
                },
                {
                    text: "'Meest duurzaam ter wereld'",
                    analysis: "Selectieve criteria, relatieve vergelijking"
                }
            ]
        }
    ];

    const practicalCases = [
        {
            id: 1,
            title: "Supermarkt folder",
            content: "Albert Heijn's 'Beter voor Natuur & Boer' campagne met afbeeldingen van weidevogels en groene claims.",
            checks: [
                {
                    type: 'bron',
                    question: "Wie heeft deze campagne gemaakt?",
                    bestQuestion: true,
                    explanation: "Cruciaal: Albert Heijn heeft commercieel belang bij verkoop van zuivel, én kreeg kritiek van Reclame Code Commissie voor deze campagne."
                },
                {
                    type: 'taal',
                    question: "Wat doen de groene termen en natuurbeelden?",
                    bestQuestion: false,
                    explanation: "Belangrijk: Groene termen kunnen greenwashing zijn als niet onderbouwd."
                },
                {
                    type: 'cijfers',
                    question: "Worden concrete, meetbare resultaten getoond?",
                    bestQuestion: false,
                    explanation: "Relevant: Zonder cijfers blijven claims vaag en oncontroleerbaar."
                }
            ],
            bestApproach: "Controleer eerst de bron (AH) en zoek dan naar onafhankelijke verificatie van de claims."
        },
        {
            id: 2,
            title: "Nieuwsbericht",
            content: "'Nederlandse veehouderij reduceerde CO₂-uitstoot met 15% sinds 1990' gepubliceerd door LTO Nederland.",
            checks: [
                {
                    type: 'bron',
                    question: "Van wie komt dit bericht?",
                    bestQuestion: true,
                    explanation: "Cruciaal: LTO is belangenorganisatie van boeren, dus mogelijk positief gekleurd."
                },
                {
                    type: 'taal',
                    question: "Is 'reduceerde' neutraal taalgebruik?",
                    bestQuestion: false,
                    explanation: "Interessant: 'Reduceerde' suggereert actie en succes."
                },
                {
                    type: 'cijfers',
                    question: "Wat zeggen andere bronnen over dezelfde periode?",
                    bestQuestion: true,
                    explanation: "Essentieel: Vergelijk met CBS, PBL of klimaatrapporten voor volledig beeld."
                }
            ],
            bestApproach: "Check altijd de bron én vergelijk cijfers met onafhankelijke instanties."
        },
        {
            id: 3,
            title: "Social media post",
            content: "Instagram-reel van een boerin die zegt: 'Onze koeien staan altijd buiten en zijn gelukkig'.",
            checks: [
                {
                    type: 'bron',
                    question: "Wie is de maker en wat is haar achtergrond?",
                    bestQuestion: false,
                    explanation: "Handig: Persoonlijke ervaring kan waardevol zijn maar is geen algemeen bewijs."
                },
                {
                    type: 'taal',
                    question: "Welke emotionele woorden worden gebruikt?",
                    bestQuestion: true,
                    explanation: "Belangrijk: 'Altijd', 'gelukkig' zijn sterke claims die controle behoeven."
                },
                {
                    type: 'cijfers',
                    question: "Worden algemene cijfers over weidegang vermeld?",
                    bestQuestion: true,
                    explanation: "Cruciaal: 81% van melkkoeien komt buiten, maar niet 'altijd'. Check algemene data."
                }
            ],
            bestApproach: "Wees alert op absolute taal ('altijd') en check algemene statistieken over de claim."
        }
    ];

    const handleSelection = (caseId, checkType) => {
        setUserSelections(prev => ({
            ...prev,
            [caseId]: prev[caseId] ? [...prev[caseId], checkType] : [checkType]
        }));
    };

    // Bereken feedback - PAS AAN: toon niet de uitleg in de knop zelf
    const getFeedback = () => {
        let score = 0;
        let bestChoices = 0;
        let feedbackItems = [];

        practicalCases.forEach(pCase => {
            const userChecks = userSelections[pCase.id] || [];
            const caseBestChecks = pCase.checks.filter(c => c.bestQuestion).map(c => c.type);

            // Tel beste keuzes
            const userBestChoices = userChecks.filter(check => caseBestChecks.includes(check));
            bestChoices += userBestChoices.length;

            // Score totaal
            score += userChecks.length;

            // Per case feedback (zonder de uitleg die al in de knop staat)
            feedbackItems.push({
                caseId: pCase.id,
                title: pCase.title,
                userChecks,
                bestChecks: caseBestChecks,
                matches: userBestChoices.length,
                totalBest: caseBestChecks.length,
                approach: pCase.bestApproach,
                // We slaan de gedetailleerde uitleg op voor latere weergave
                checksDetails: pCase.checks.map(check => ({
                    type: check.type,
                    question: check.question,
                    bestQuestion: check.bestQuestion,
                    explanation: check.explanation
                }))
            });
        });

        return {
            totalScore: score,
            bestScore: bestChoices,
            maxBest: practicalCases.reduce((sum, pCase) => sum + pCase.checks.filter(c => c.bestQuestion).length, 0),
            maxTotal: practicalCases.length * 3,
            feedbackItems
        };
    };

    return (
        <div className="framing-section py-16 px-6 bg-neutral-900">
            <div className="max-w-6xl mx-auto">

                {/* TITEL */}
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold mb-4">6. Praktische toolkit: Hoe herken je framing/lobby?</h3>
                    <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                        Drie eenvoudige checks om informatie beter te beoordelen
                    </p>
                </div>

                {/* DRIE CHECKS */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    {checkItems.map((item) => (
                        <div key={item.id} className="bg-neutral-800 p-6 rounded-lg hover:bg-neutral-750 transition-colors">
                            <div className="flex items-center gap-3 mb-4">
                                {item.icon}
                                <h4 className="text-xl font-bold">{item.title}</h4>
                            </div>

                            <p className="text-neutral-300 mb-4">{item.description}</p>

                            <div className="mb-4">
                                <p className="text-sm font-medium text-emerald-300 mb-2">Vragen om te stellen:</p>
                                <ul className="space-y-1">
                                    {item.questions.map((q, idx) => (
                                        <li key={idx} className="text-sm text-neutral-400 flex items-start gap-2">
                                            <span className="text-emerald-400 text-xs mt-1">•</span>
                                            {q}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="border-t border-neutral-700 pt-4">
                                <p className="text-sm font-medium text-emerald-300 mb-2">Voorbeelden uit dit onderzoek:</p>
                                <div className="space-y-2">
                                    {item.examples.map((ex, idx) => (
                                        <div key={idx} className="text-sm">
                                            <p className="font-medium text-neutral-300">{ex.text}</p>
                                            <p className="text-neutral-500 text-xs">{ex.analysis}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* PRAKTIJKCASES - INTERACTIEF - ZONDER ANTWOORDEN */}
                <div className="bg-neutral-800 p-8 rounded-lg mb-12">
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <h4 className="text-2xl font-bold mb-2">Pas het toe: Analyseer deze voorbeelden</h4>
                            <p className="text-neutral-400">
                                Kies voor elk voorbeeld de checks die volgens jou het belangrijkst zijn
                            </p>
                        </div>

                        {Object.keys(userSelections).length > 0 && (
                            <div className="text-sm text-emerald-400">
                                {Object.keys(userSelections).length} van {practicalCases.length} cases ingevuld
                            </div>
                        )}
                    </div>

                    <div className="space-y-8">
                        {practicalCases.map((pCase) => (
                            <div key={pCase.id} className="bg-neutral-700/30 p-6 rounded-lg border border-neutral-700">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="bg-neutral-800 text-emerald-400 font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                                        {pCase.id}
                                    </div>
                                    <div className="flex-1">
                                        <h5 className="text-lg font-bold mb-2">{pCase.title}</h5>
                                        <p className="text-neutral-300 mb-6">"{pCase.content}"</p>

                                        <div className="space-y-3">
                                            {pCase.checks.map((check, idx) => (
                                                <div key={idx}>
                                                    <button
                                                        onClick={() => handleSelection(pCase.id, check.type)}
                                                        className={`w-full px-4 py-3 rounded-lg transition-all text-left ${
                                                            userSelections[pCase.id]?.includes(check.type)
                                                                ? 'bg-emerald-700/30 border border-emerald-600'
                                                                : 'bg-neutral-600 hover:bg-neutral-500 border border-transparent'
                                                        }`}
                                                    >
                                                        <div className="font-medium">{check.question}</div>
                                                        {userSelections[pCase.id]?.includes(check.type) && (
                                                            <div className="text-xs text-emerald-300 mt-1 flex items-center gap-1">
                                                                <CheckCircle size={12} />
                                                                Geselecteerd
                                                            </div>
                                                        )}
                                                    </button>
                                                    {/* GEEN UITLEG HIER - die komt pas na de analyse */}
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-4 text-sm text-neutral-500">
                                            <div className="flex items-center gap-2">
                                                <AlertTriangle size={14} />
                                                Tip: Kies 1-2 checks per case die je het belangrijkst vindt
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 pt-6 border-t border-neutral-700">
                        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                            <div className="text-sm text-neutral-400">
                                {Object.keys(userSelections).length === 0 ? (
                                    "Kies je checks om de analyse te zien"
                                ) : (
                                    <span className="text-emerald-400">
                                        Je hebt {Object.keys(userSelections).length} case{Object.keys(userSelections).length !== 1 ? 's' : ''} geanalyseerd
                                    </span>
                                )}
                            </div>
                            <div className="flex gap-3">
                                <button
                                    onClick={() => {
                                        setUserSelections({});
                                        setShowAnalysis(false);
                                        setRevealBestChecks(false);
                                    }}
                                    className="px-4 py-2 bg-neutral-700 hover:bg-neutral-600 rounded-lg font-medium transition-colors"
                                >
                                    Opnieuw beginnen
                                </button>
                                <button
                                    onClick={() => setShowAnalysis(true)}
                                    disabled={Object.keys(userSelections).length === 0}
                                    className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                                        Object.keys(userSelections).length > 0
                                            ? 'bg-emerald-600 hover:bg-emerald-700'
                                            : 'bg-neutral-700 cursor-not-allowed'
                                    }`}
                                >
                                    Bekijk mijn analyse
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ANALYSE RESULTATEN - ANTWOORDEN HIER PAS TONEN */}
                {showAnalysis && (() => {
                    const feedback = getFeedback();

                    return (
                        <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 p-8 rounded-lg border border-neutral-700">
                            <div className="flex justify-between items-center mb-6">
                                <h4 className="text-2xl font-bold">Jouw kritische analyse</h4>
                                <button
                                    onClick={() => setRevealBestChecks(!revealBestChecks)}
                                    className="flex items-center gap-2 px-3 py-1 bg-neutral-700 hover:bg-neutral-600 rounded-lg text-sm transition-colors"
                                >
                                    {revealBestChecks ? <EyeOff size={16} /> : <Eye size={16} />}
                                    {revealBestChecks ? "Verberg aanbevolen checks" : "Toon aanbevolen checks"}
                                </button>
                            </div>

                            {/* SCORE OVERZICHT */}
                            <div className="grid md:grid-cols-3 gap-6 mb-8">
                                <div className="bg-neutral-800/50 p-6 rounded-lg text-center">
                                    <div className="text-3xl font-bold text-emerald-400 mb-2">
                                        {feedback.bestScore}/{feedback.maxBest}
                                    </div>
                                    <p className="text-sm font-medium">Aanbevolen checks</p>
                                    <p className="text-xs text-neutral-400 mt-2">
                                        {feedback.bestScore === feedback.maxBest
                                            ? "Perfect! Je herkent de kernvragen."
                                            : feedback.bestScore >= feedback.maxBest / 2
                                                ? "Goed! Je pakt de belangrijkste punten."
                                                : "Begin met checken van bronnen en absolute claims."}
                                    </p>
                                </div>

                                <div className="bg-neutral-800/50 p-6 rounded-lg text-center">
                                    <div className="text-3xl font-bold text-amber-400 mb-2">
                                        {feedback.totalScore}/{feedback.maxTotal}
                                    </div>
                                    <p className="text-sm font-medium">Totaal checks</p>
                                    <p className="text-xs text-neutral-400 mt-2">
                                        Gemiddeld {Math.round(feedback.totalScore / practicalCases.length)} van de 3 checks per case
                                    </p>
                                </div>

                                <div className="bg-neutral-800/50 p-6 rounded-lg text-center">
                                    <div className="flex justify-center mb-2">
                                        <Lightbulb className="text-emerald-400" size={32} />
                                    </div>
                                    <p className="text-sm font-medium">Je niveau</p>
                                    <p className="text-xs text-neutral-400 mt-2">
                                        {feedback.bestScore === feedback.maxBest
                                            ? "Expert in kritisch kijken"
                                            : feedback.bestScore >= 2
                                                ? "Gevorderde vragensteller"
                                                : "Beginner in bronnen checken"}
                                    </p>
                                </div>
                            </div>

                            {/* GEDETAILLEERDE FEEDBACK MET OPTIONELE ANTWOORDEN */}
                            <div className="space-y-6 mb-8">
                                <h5 className="font-bold text-lg mb-4 flex items-center gap-2">
                                    <CheckCircle className="text-emerald-400" size={20} />
                                    Uitgebreide feedback per case
                                </h5>

                                {feedback.feedbackItems.map((item) => (
                                    <div key={item.caseId} className="bg-neutral-800/30 p-4 rounded-lg">
                                        <div className="flex justify-between items-start mb-3">
                                            <h6 className="font-bold text-lg">{item.title}</h6>
                                            <div className="text-sm px-3 py-1 rounded-full bg-neutral-700">
                                                <span className={item.matches === item.totalBest ? "text-emerald-400" : "text-amber-400"}>
                                                    {item.matches}/{item.totalBest} aanbevolen
                                                </span>
                                            </div>
                                        </div>

                                        <div className="mb-4">
                                            <p className="text-sm font-medium text-neutral-300 mb-2">Jouw keuzes:</p>
                                            <div className="flex flex-wrap gap-2">
                                                {item.userChecks.map((checkType, idx) => {
                                                    const checkInfo = checkItems.find(i => i.id === checkType);
                                                    const isBest = item.bestChecks.includes(checkType);
                                                    return (
                                                        <span
                                                            key={idx}
                                                            className={`px-3 py-1 rounded-full text-sm ${
                                                                isBest
                                                                    ? 'bg-emerald-900/50 text-emerald-300 border border-emerald-700'
                                                                    : 'bg-neutral-700 text-neutral-300'
                                                            }`}
                                                        >
                                                            {checkInfo?.title.split('. ')[1]}
                                                            {isBest && " ✓"}
                                                        </span>
                                                    );
                                                })}
                                                {item.userChecks.length === 0 && (
                                                    <span className="text-neutral-500 text-sm">Geen checks gekozen</span>
                                                )}
                                            </div>
                                        </div>

                                        {/* AANBEVOLEN CHECKS - ALLEEN TONEN ALS GEVRAAGD */}
                                        {revealBestChecks && (
                                            <div className="mb-4 p-3 bg-neutral-900/50 rounded-lg border border-neutral-700">
                                                <p className="text-sm font-medium text-amber-300 mb-2">Aanbevolen aanpak voor deze case:</p>
                                                <p className="text-sm text-neutral-300 mb-3">{item.approach}</p>

                                                <div className="space-y-2">
                                                    {item.checksDetails
                                                        .filter(check => check.bestQuestion)
                                                        .map((check, idx) => (
                                                            <div key={idx} className="text-sm">
                                                                <p className="font-medium text-emerald-300">
                                                                    {check.question}
                                                                </p>
                                                                <p className="text-neutral-400 text-xs mt-1">
                                                                    {check.explanation}
                                                                </p>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        )}

                                        {/* ALGEMENE TIPS */}
                                        <div className="text-sm text-neutral-400">
                                            {item.matches === item.totalBest ? (
                                                <span className="text-emerald-400">✓ Je hebt de kernvragen goed herkend!</span>
                                            ) : item.matches > 0 ? (
                                                <span>Goed begin, kijk naar de aanbevolen checks voor verdieping.</span>
                                            ) : (
                                                <span>Begin met checken van bronnen en absolute claims.</span>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* LERENDE PUNTEN - ALTIJD ZICHTBAAR */}
                            <div className="border-t border-neutral-700 pt-6">
                                <h5 className="font-bold mb-4 flex items-center gap-2">
                                    <TrendingUp className="text-emerald-400" size={20} />
                                    Belangrijkste inzichten:
                                </h5>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <ul className="space-y-2 text-sm text-neutral-300">
                                        <li className="flex items-start gap-2">
                                            <span className="text-emerald-400">•</span>
                                            <span>Check altijd eerst <strong>wie de boodschap verspreidt</strong> en wat hun belangen zijn</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-emerald-400">•</span>
                                            <span>Wees alert op <strong>absolute taal</strong> ('altijd', 'nooit', 'meest') - vraag om bewijs</span>
                                        </li>
                                    </ul>
                                    <ul className="space-y-2 text-sm text-neutral-300">
                                        <li className="flex items-start gap-2">
                                            <span className="text-emerald-400">•</span>
                                            <span>Vergelijk cijfers altijd met <strong>onafhankelijke bronnen</strong> (CBS, PBL, WUR)</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-emerald-400">•</span>
                                            <span>Kijk wat er <strong>niet wordt gezegd</strong> - welke informatie ontbreekt?</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    );
                })()}

                {/* TOEPASSING IN DAGELIJKS LEVEN */}
                <div className="mt-12 p-6 bg-neutral-800/50 rounded-lg">
                    <h5 className="text-lg font-bold mb-4 text-center">Waar kun je dit toepassen?</h5>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center">
                            <div className="bg-neutral-800 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Users className="text-emerald-400" size={24} />
                            </div>
                            <p className="font-medium mb-1">Social media</p>
                            <p className="text-sm text-neutral-400">Posts, reels en campagnes van bedrijven of organisaties</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-neutral-800 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                                <FileText className="text-emerald-400" size={24} />
                            </div>
                            <p className="font-medium mb-1">Voorlichtingsmateriaal</p>
                            <p className="text-sm text-neutral-400">Lespakketten, folders, supermarktcommunicatie</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-neutral-800 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                                <BarChart3 className="text-emerald-400" size={24} />
                            </div>
                            <p className="font-medium mb-1">Nieuws en rapporten</p>
                            <p className="text-sm text-neutral-400">Berichtgeving van brancheorganisaties vs. onafhankelijke media</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}