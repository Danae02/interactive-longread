import React, { useState } from 'react';
import { Scale, Users, Building2, DollarSign, Heart, AlertCircle, CheckCircle, XCircle, ArrowRight, RotateCcw, BookOpen, MessageCircle } from 'lucide-react';

export default function WetsvoorstelSimulator() {
    const [gameState, setGameState] = useState('intro'); // intro, playing, success, failed
    const [currentRound, setCurrentRound] = useState(0);
    const [politicalSupport, setPoliticalSupport] = useState(50);
    const [publicSupport, setPublicSupport] = useState(60);
    const [economicPressure, setEconomicPressure] = useState(30);
    const [decisions, setDecisions] = useState([]);

    const wetsvoorstel = {
        title: "Wet Voedselnaamgeving Vrijheid 2025",
        goal: "Vega-alternatieven mogen dezelfde namen gebruiken als vleesproducten (gehakt, worst, burger)"
    };

    const rounds = [
        {
            title: "Ronde 1: De Eerste Hoorzitting",
            scenario: "Je presenteert het wetsvoorstel in de Tweede Kamer. Direct staan LTO Nederland en de Centrale Organisatie voor de Vleessector (COV) op om bezwaar te maken.",
            lobbyArgument: "'Dit is misleiding van consumenten!' roept de voorzitter. 'Vega-gehakt bestaat niet - gehakt komt van gesneden vlees. Dit verwart mensen en ondermijnt onze traditionele producten.'",
            choices: [
                {
                    text: "Compromis: Alleen 'vleesvervanger' als prefix toestaan (vleesvervanger-gehakt)",
                    politicalSupport: +15,
                    publicSupport: -10,
                    economicPressure: -15,
                    feedback: "De vleessector is tevreden met dit onderscheid. Maar vega-producenten zeggen dat het 'apartheidsnamen' creëert."
                },
                {
                    text: "Standvastig: Houd vast aan gelijke naamgeving met kleine disclaimer",
                    politicalSupport: -5,
                    publicSupport: +10,
                    economicPressure: +10,
                    feedback: "Je verliest steun van BBB en CDA, maar D66 en GroenLinks steunen je. De sector dreigt met rechtszaken."
                },
                {
                    text: "Volledige naamvrijheid: Consumenten zijn slim genoeg om het verschil te zien",
                    politicalSupport: -15,
                    publicSupport: +15,
                    economicPressure: +20,
                    feedback: "De Nederlandse Vereniging voor Veganisme juicht je toe. Maar de vleeslobby start een media-offensief over 'naamroof'."
                }
            ]
        },
        {
            title: "Ronde 2: Media-offensief van de Vleessector",
            scenario: "De COV lanceert een campagne met koppen als 'VEGANISTEN STELEN ONZE TRADITIES'. Op TV vertellen slagers hoe 'hun familie-erfgoed' wordt aangetast. Social media staat vol met boze boeren.",
            lobbyArgument: "'Waarom moeten plantaardige producten doen alsof ze vlees zijn?' vraagt een slager emotioneel. 'Als het zo goed is, waarom gebruiken ze dan niet hun eigen namen?' Een peiling toont: 52% van Nederlanders vindt de term 'vega-gehakt' misleidend.",
            choices: [
                {
                    text: "Lanceer tegencampagne: 'Taal evolueert - sojamelk, pindakaas'",
                    politicalSupport: +5,
                    publicSupport: +15,
                    economicPressure: +5,
                    feedback: "Je legt uit dat voedselnamen altijd veranderen. Maar de sector beschuldigt je van 'taalmanipulatie'."
                },
                {
                    text: "Bied compromis: Alleen functionele beschrijvingen (gehaktstukjes, burgerpatty)",
                    politicalSupport: +10,
                    publicSupport: -5,
                    economicPressure: -10,
                    feedback: "Pragmatische oplossing, maar beide partijen zijn ontevreden. 'Het voelt als een halfslachtig compromis.'"
                },
                {
                    text: "Wijs op hypocrisie: 'Waarom mag kipfilet wel 30% water bevatten?'",
                    politicalSupport: -10,
                    publicSupport: -15,
                    economicPressure: +15,
                    feedback: "Je raakt een gevoelige snaar, maar wordt gezien als 'agressief'. De discussie escaleert verder."
                }
            ]
        },
        {
            title: "Ronde 3: De Europese Dimensie",
            scenario: "De Franse en Duitse vleeslobby's stappen naar Brussel. Ze wijzen op Europese regelgeving die 'traditionele voedselnamen' beschermt. Champagne, Parmezaan, en nu dus ook gehakt en worst?",
            lobbyArgument: "'Dit is cultureel erfgoed!' claimt de Franse landbouwminister. 'Net zoals alleen Franse wijn champagne mag heten, mag alleen vlees gehakt heten.' De Europese Commissie overweegt een verbod.",
            choices: [
                {
                    text: "Lobby in Brussel voor innovatievriendelijke regelgeving",
                    politicalSupport: +5,
                    publicSupport: +10,
                    economicPressure: +10,
                    feedback: "Ambitieus maar traag proces. Ondertussen ligt jouw wet stil en verliest momentum."
                },
                {
                    text: "Pas de wet aan: alleen voor de Nederlandse markt",
                    politicalSupport: +10,
                    publicSupport: -10,
                    economicPressure: -5,
                    feedback: "Pragmatisch maar beperkt. Nederlandse vega-bedrijven kunnen nog steeds niet exporteren met herkenbare namen."
                },
                {
                    text: "Trotseer Brussel: dit gaat over innovatievrijheid, niet over traditie",
                    politicalSupport: -5,
                    publicSupport: +15,
                    economicPressure: +15,
                    feedback: "Principieel standpunt, maar je riskeert een juridische strijd met de EU die jaren kan duren."
                }
            ]
        },
        {
            title: "Ronde 4: Economische Angstzaaierij",
            scenario: "De vleessector presenteert een 'onafhankelijk' onderzoek: als vega-producten dezelfde namen mogen gebruiken, daalt de vleesverkoop met 25%. Dit kost 15.000 banen in de vleessector.",
            lobbyArgument: "Rabobank publiceert een alarmerend rapport: 'Naamverwarring bedreigt Nederlandse exportpositie'. Supermarkten waarschuwen voor prijsstijgingen als ze moeten investeren in nieuwe verpakkingen.",
            choices: [
                {
                    text: "Onderzoek de cijfers: vraag om transparantie over de berekeningen",
                    politicalSupport: 0,
                    publicSupport: +5,
                    economicPressure: +5,
                    feedback: "Je toont kritisch denken, maar de media pakt vooral de '15.000 banen' kop. De angst zit erin."
                },
                {
                    text: "Wijs op groeikansen: vega-sector creëert ook banen",
                    politicalSupport: -5,
                    publicSupport: +10,
                    economicPressure: +10,
                    feedback: "Je benadrukt de economische kansen, maar de gevestigde sector heeft meer politieke invloed."
                },
                {
                    text: "Compenseer de sector: subsidie voor omschakeling naar vega-productie",
                    politicalSupport: +10,
                    publicSupport: -10,
                    economicPressure: -15,
                    feedback: "Innovatieve aanpak, maar kost veel geld en wordt gezien als 'beloning voor tegenwerking'."
                }
            ]
        },
        {
            title: "Ronde 5: De Laatste Strijd",
            scenario: "Het is stemmingstijd. De lobby heeft persoonlijke brieven gestuurd naar alle Kamerleden: 'Stem voor onze boeren, niet voor de veganisten'. Je hebt 76 stemmen nodig.",
            lobbyArgument: "Een laatste emotionele oproep: 'Dit gaat niet over namen, dit gaat over ons bestaansrecht. Waarom moet de overheid veganisten helpen ons kapot te maken?'",
            choices: [
                {
                    text: "Laatste compromis: Alleen bepaalde basisnamen toestaan (burger, worst)",
                    politicalSupport: +20,
                    publicSupport: -5,
                    economicPressure: -10,
                    feedback: "Je haalt de stemmen binnen - de wet wordt aangenomen! Maar het voelt als een halve overwinning."
                },
                {
                    text: "Blijf principieel: volledige naamvrijheid is essentieel voor innovatie",
                    politicalSupport: -5,
                    publicSupport: +10,
                    economicPressure: +5,
                    feedback: "Het wordt spannend... de stemmen worden geteld..."
                },
                {
                    text: "Voeg extra voorwaarden toe: alleen bij duidelijke 'plantaardig' vermelding",
                    politicalSupport: +5,
                    publicSupport: 0,
                    economicPressure: -5,
                    feedback: "Een praktische oplossing die beide partijen enigszins tevreden stelt..."
                }
            ]
        }
    ];

    const startGame = () => {
        setGameState('playing');
        setCurrentRound(0);
        setPoliticalSupport(50);
        setPublicSupport(60);
        setEconomicPressure(30);
        setDecisions([]);
    };

    const makeDecision = (choice) => {
        const newPoliticalSupport = Math.max(0, Math.min(100, politicalSupport + choice.politicalSupport));
        const newPublicSupport = Math.max(0, Math.min(100, publicSupport + choice.publicSupport));
        const newEconomicPressure = Math.max(0, Math.min(100, economicPressure + choice.economicPressure));

        setPoliticalSupport(newPoliticalSupport);
        setPublicSupport(newPublicSupport);
        setEconomicPressure(newEconomicPressure);
        setDecisions([...decisions, {round: currentRound, choice: choice.text, feedback: choice.feedback}]);

        // Check fail conditions
        if (newPoliticalSupport < 30 || newEconomicPressure > 80) {
            setTimeout(() => setGameState('failed'), 1500);
            return;
        }

        // Check if last round
        if (currentRound === rounds.length - 1) {
            // Final calculation
            if (newPoliticalSupport >= 50 && newPublicSupport >= 50 && newEconomicPressure < 70) {
                setTimeout(() => setGameState('success'), 1500);
            } else {
                setTimeout(() => setGameState('failed'), 1500);
            }
            return;
        }

        setCurrentRound(currentRound + 1);
    };

    const getBarColor = (value, inverse = false) => {
        if (inverse) {
            if (value > 70) return 'bg-red-500';
            if (value > 50) return 'bg-orange-500';
            return 'bg-emerald-500';
        }
        if (value < 30) return 'bg-red-500';
        if (value < 50) return 'bg-orange-500';
        return 'bg-emerald-500';
    };

    if (gameState === 'intro') {
        return (
            <div className="min-h-screen bg-gradient-to-b from-neutral-900 to-neutral-800 text-white p-8 flex items-center justify-center">
                <div className="max-w-3xl">
                    <div className="text-center mb-8">
                        <BookOpen className="mx-auto mb-4" size={64}/>
                        <h1 className="text-5xl font-bold mb-4">De Naam Strijd</h1>
                        <p className="text-2xl text-neutral-300 mb-8">Mag vega-gehakt wel gehakt heten? Strijd tegen de vleeslobby</p>
                    </div>

                    <div className="bg-neutral-800 rounded-lg p-8 mb-8 border-2 border-emerald-600">
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <MessageCircle size={24}/>
                            Jouw Missie
                        </h2>
                        <div className="space-y-3 text-lg">
                            <p><strong>Wetsvoorstel:</strong> {wetsvoorstel.title}</p>
                            <p><strong>Doel:</strong> {wetsvoorstel.goal}</p>
                        </div>
                    </div>

                    <div className="bg-neutral-800 rounded-lg p-8 mb-8">
                        <h3 className="text-xl font-bold mb-4">Het Conflict:</h3>
                        <div className="space-y-4 text-neutral-300">
                            <div className="flex items-start gap-3">
                                <Building2 className="flex-shrink-0 mt-1 text-red-400" size={20}/>
                                <div>
                                    <strong>Vleeslobby:</strong> "Gehakt, worst en burger zijn traditionele vleesnamen. Vega-producten moeten hun eigen namen bedenken."
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Heart className="flex-shrink-0 mt-1 text-green-400" size={20}/>
                                <div>
                                    <strong>Vega-sector:</strong> "Consumenten begrijpen wat 'vega-gehakt' is. Verbieden is oneerlijke concurrentie en remt innovatie."
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-neutral-800 rounded-lg p-8 mb-8">
                        <h3 className="text-xl font-bold mb-4">Hoe het werkt:</h3>
                        <ul className="space-y-3 text-neutral-300">
                            <li className="flex items-start gap-3">
                                <Users className="flex-shrink-0 mt-1 text-blue-400" size={20}/>
                                <span><strong>Politieke Steun:</strong> Je hebt minimaal 50% nodig om de stemming te winnen</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Heart className="flex-shrink-0 mt-1 text-pink-400" size={20}/>
                                <span><strong>Publieke Steun:</strong> Beïnvloedt hoeveel druk politici voelen van consumenten</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Building2 className="flex-shrink-0 mt-1 text-red-400" size={20}/>
                                <span><strong>Economische Druk:</strong> Te hoge druk (>80%) maakt de wet politiek onhaalbaar</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-orange-900/30 border border-orange-600 rounded-lg p-6 mb-8">
                        <p className="text-orange-200 flex items-start gap-3">
                            <AlertCircle className="flex-shrink-0 mt-1" size={20}/>
                            <span>Dit gaat niet alleen over namen, maar over miljarden euro's. De vleessector vreest dat herkenbare namen de groei van vega-producten versnellen. Jouw keuzes bepalen of innovatie wint van traditie.</span>
                        </p>
                    </div>

                    <button
                        onClick={startGame}
                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors flex items-center justify-center gap-3"
                    >
                        Start de Simulator <ArrowRight size={24}/>
                    </button>
                </div>
            </div>
        );
    }

    if (gameState === 'playing') {
        const round = rounds[currentRound];
        return (
            <div className="min-h-screen bg-gradient-to-b from-neutral-900 to-neutral-800 text-white p-8">
                <div className="max-w-4xl mx-auto">
                    {/* Stats Dashboard */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                        <div className="bg-neutral-800 rounded-lg p-4">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm text-neutral-400 flex items-center gap-2">
                                    <Users size={16}/> Politieke Steun
                                </span>
                                <span className="font-bold">{politicalSupport}%</span>
                            </div>
                            <div className="w-full bg-neutral-700 rounded-full h-3">
                                <div
                                    className={`${getBarColor(politicalSupport)} h-3 rounded-full transition-all duration-500`}
                                    style={{width: `${politicalSupport}%`}}
                                />
                            </div>
                        </div>

                        <div className="bg-neutral-800 rounded-lg p-4">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm text-neutral-400 flex items-center gap-2">
                                    <Heart size={16}/> Publieke Steun
                                </span>
                                <span className="font-bold">{publicSupport}%</span>
                            </div>
                            <div className="w-full bg-neutral-700 rounded-full h-3">
                                <div
                                    className={`${getBarColor(publicSupport)} h-3 rounded-full transition-all duration-500`}
                                    style={{width: `${publicSupport}%`}}
                                />
                            </div>
                        </div>

                        <div className="bg-neutral-800 rounded-lg p-4">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm text-neutral-400 flex items-center gap-2">
                                    <Building2 size={16}/> Econ. Druk
                                </span>
                                <span className="font-bold">{economicPressure}%</span>
                            </div>
                            <div className="w-full bg-neutral-700 rounded-full h-3">
                                <div
                                    className={`${getBarColor(economicPressure, true)} h-3 rounded-full transition-all duration-500`}
                                    style={{width: `${economicPressure}%`}}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Round Info */}
                    <div className="bg-neutral-800 rounded-lg p-8 mb-6">
                        <div className="text-sm text-emerald-400 mb-2">Ronde {currentRound + 1} van {rounds.length}</div>
                        <h2 className="text-3xl font-bold mb-4">{round.title}</h2>
                        <p className="text-lg text-neutral-300 mb-6">{round.scenario}</p>

                        <div className="bg-red-900/20 border-l-4 border-red-600 p-4 mb-6">
                            <div className="flex items-start gap-3">
                                <DollarSign className="flex-shrink-0 text-red-400 mt-1" size={24}/>
                                <div>
                                    <p className="font-bold text-red-300 mb-2">Lobby Argument:</p>
                                    <p className="text-neutral-300">{round.lobbyArgument}</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xl font-bold">Hoe reageer je?</h3>
                            {round.choices.map((choice, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => makeDecision(choice)}
                                    className="w-full bg-neutral-700 hover:bg-neutral-600 p-6 rounded-lg text-left transition-colors group"
                                >
                                    <p className="text-lg mb-3 group-hover:text-emerald-400 transition-colors">{choice.text}</p>
                                    <div className="flex gap-4 text-sm text-neutral-400">
                                        <span className={choice.politicalSupport > 0 ? 'text-emerald-400' : 'text-red-400'}>
                                            Politiek: {choice.politicalSupport > 0 ? '+' : ''}{choice.politicalSupport}%
                                        </span>
                                        <span className={choice.publicSupport > 0 ? 'text-emerald-400' : 'text-red-400'}>
                                            Publiek: {choice.publicSupport > 0 ? '+' : ''}{choice.publicSupport}%
                                        </span>
                                        <span className={choice.economicPressure < 0 ? 'text-emerald-400' : 'text-red-400'}>
                                            Druk: {choice.economicPressure > 0 ? '+' : ''}{choice.economicPressure}%
                                        </span>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Decision History */}
                    {decisions.length > 0 && (
                        <div className="bg-neutral-800 rounded-lg p-6">
                            <h3 className="text-lg font-bold mb-4">Je Beslissingen:</h3>
                            <div className="space-y-3">
                                {decisions.map((decision, idx) => (
                                    <div key={idx} className="border-l-2 border-emerald-600 pl-4 py-2">
                                        <p className="text-sm text-neutral-400">Ronde {decision.round + 1}</p>
                                        <p className="font-medium mb-1">{decision.choice}</p>
                                        <p className="text-sm text-neutral-400 italic">{decision.feedback}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }

    if (gameState === 'success') {
        return (
            <div className="min-h-screen bg-gradient-to-b from-emerald-900 to-neutral-900 text-white p-8 flex items-center justify-center">
                <div className="max-w-3xl text-center">
                    <CheckCircle className="mx-auto mb-6 text-emerald-400" size={80}/>
                    <h1 className="text-5xl font-bold mb-6">Gefeliciteerd! De wet is aangenomen! 🎉</h1>
                    <p className="text-2xl text-neutral-300 mb-8">
                        Je hebt het gehaald: plantaardige producten mogen voortaan dezelfde namen gebruiken als vlees!
                    </p>

                    <div className="bg-neutral-800 rounded-lg p-8 mb-8">
                        <h2 className="text-2xl font-bold mb-4">Eindresultaat:</h2>
                        <div className="grid grid-cols-3 gap-6 mb-6">
                            <div>
                                <div className="text-4xl font-bold text-emerald-400 mb-2">{politicalSupport}%</div>
                                <div className="text-sm text-neutral-400">Politieke Steun</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-emerald-400 mb-2">{publicSupport}%</div>
                                <div className="text-sm text-neutral-400">Publieke Steun</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-orange-400 mb-2">{economicPressure}%</div>
                                <div className="text-sm text-neutral-400">Economische Druk</div>
                            </div>
                        </div>

                        <div className="border-t border-neutral-700 pt-6">
                            <h3 className="font-bold mb-4">Jouw Strategie:</h3>
                            <div className="space-y-2 text-left text-sm text-neutral-300">
                                {decisions.map((decision, idx) => (
                                    <div key={idx} className="flex items-start gap-2">
                                        <span className="text-emerald-400 flex-shrink-0">→</span>
                                        <span>Ronde {decision.round + 1}: {decision.choice}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="bg-blue-900/30 border border-blue-600 rounded-lg p-6 mb-8 text-left">
                        <h3 className="font-bold mb-3 flex items-center gap-2">
                            <AlertCircle size={20}/>
                            De Realiteit
                        </h3>
                        <p className="text-neutral-300 mb-3">
                            In werkelijkheid is deze strijd nog steeds gaande. De vleessector probeert naamgeving te beperken omdat:
                        </p>
                        <ul className="space-y-2 text-neutral-300">
                            <li>• <strong>Herkenbare namen</strong> de drempel verlagen voor vleesminderaars</li>
                            <li>• <strong>Vega-burgers en -gehakt</strong> direct concurreren met vleesvarianten</li>
                            <li>• <strong>Marktaandeel</strong> van vega-producten sneller groeit met bekende namen</li>
                            <li>• <strong>Traditionele namen</strong> geven een gevoel van vertrouwdheid en gemak</li>
                        </ul>
                        <p className="text-neutral-300 mt-4">
                            Deze naamstrijd toont hoe de vleeslobby innovatie probeert te remmen door regelgeving - niet omdat consumenten daadwerkelijk in de war raken, maar omdat het hun marktpositie beschermt.
                        </p>
                    </div>

                    <button
                        onClick={startGame}
                        className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors inline-flex items-center gap-3"
                    >
                        <RotateCcw size={24}/> Speel Opnieuw
                    </button>
                </div>
            </div>
        );
    }

    if (gameState === 'failed') {
        return (
            <div className="min-h-screen bg-gradient-to-b from-red-900 to-neutral-900 text-white p-8 flex items-center justify-center">
                <div className="max-w-3xl text-center">
                    <XCircle className="mx-auto mb-6 text-red-400" size={80}/>
                    <h1 className="text-5xl font-bold mb-6">De wet is niet aangenomen</h1>

                    {politicalSupport < 30 ? (
                        <p className="text-2xl text-neutral-300 mb-8">
                            Je verloor te veel politieke steun. De vleeslobby overtuigde genoeg Kamerleden dat naamgeving 'misleidend' is.
                        </p>
                    ) : economicPressure > 80 ? (
                        <p className="text-2xl text-neutral-300 mb-8">
                            De economische druk werd te groot. De sector overtuigde de politiek dat banen op het spel stonden.
                        </p>
                    ) : (
                        <p className="text-2xl text-neutral-300 mb-8">
                            Ondanks je inspanningen had je niet genoeg steun om de wet door de Tweede Kamer te krijgen.
                        </p>
                    )}

                    <div className="bg-neutral-800 rounded-lg p-8 mb-8">
                        <h2 className="text-2xl font-bold mb-4">Wat ging er mis?</h2>
                        <div className="grid grid-cols-3 gap-6 mb-6">
                            <div>
                                <div className={`text-4xl font-bold mb-2 ${politicalSupport < 30 ? 'text-red-400' : 'text-neutral-400'}`}>
                                    {politicalSupport}%
                                </div>
                                <div className="text-sm text-neutral-400">Politieke Steun</div>
                                {politicalSupport < 30 && <div className="text-red-400 text-xs mt-1">Te laag! (&lt;30%)</div>}
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-neutral-400 mb-2">{publicSupport}%</div>
                                <div className="text-sm text-neutral-400">Publieke Steun</div>
                            </div>
                            <div>
                                <div className={`text-4xl font-bold mb-2 ${economicPressure > 80 ? 'text-red-400' : 'text-neutral-400'}`}>
                                    {economicPressure}%
                                </div>
                                <div className="text-sm text-neutral-400">Economische Druk</div>
                                {economicPressure > 80 && <div className="text-red-400 text-xs mt-1">Te hoog! (&gt;80%)</div>}
                            </div>
                        </div>

                        <div className="border-t border-neutral-700 pt-6">
                            <h3 className="font-bold mb-4">Jouw Beslissingen:</h3>
                            <div className="space-y-2 text-left text-sm text-neutral-300">
                                {decisions.map((decision, idx) => (
                                    <div key={idx} className="flex items-start gap-2">
                                        <span className="text-neutral-500 flex-shrink-0">→</span>
                                        <span>Ronde {decision.round + 1}: {decision.choice}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="bg-orange-900/30 border border-orange-600 rounded-lg p-6 mb-8 text-left">
                        <h3 className="font-bold mb-3 flex items-center gap-2">
                            <AlertCircle size={20}/>
                            De Echte Naamstrijd
                        </h3>
                        <p className="text-neutral-300 mb-3">
                            In werkelijkheid speelt deze strijd zich af in de EU en nationale parlementen:
                        </p>
                        <ul className="space-y-2 text-neutral-300 text-sm">
                            <li>• <strong>Frankrijk</strong> verbood in 2018 termen als 'vega-worst' en 'soja-melk'</li>
                            <li>• <strong>Duitsland</strong> probeerde 'vega-schnitzel' te verbieden, maar de rechter blokkeerde dit</li>
                            <li>• <strong>EU</strong> overweegt nog steeds beperkingen op plantaardige naamgeving</li>
                            <li>• <strong>Nederland</strong> staat nog relatief vrijheid toe, maar de druk neemt toe</li>
                        </ul>
                        <p className="text-neutral-300 mt-4">
                            Het verbieden van namen is een klassieke lobbytactiek: het beschermt gevestigde belangen door innovatie te vertragen. Consumenten begrijpen prima wat 'vega-gehakt' is - de verwarring wordt bewust overdreven.
                        </p>
                    </div>

                    <button
                        onClick={startGame}
                        className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors inline-flex items-center gap-3"
                    >
                        <RotateCcw size={24}/> Probeer Opnieuw
                    </button>
                </div>
            </div>
        )
    }
}