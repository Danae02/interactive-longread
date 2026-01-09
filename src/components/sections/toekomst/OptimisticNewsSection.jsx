// components/sections/toekomst/OptimisticNewsSection.jsx
import React, { useState } from 'react';
import { Newspaper, Leaf, Zap, TrendingUp, Users, Building, Heart, Globe, TrendingDown, Scale, Brain, FileText } from 'lucide-react';

export default function OptimisticNewsSection() {
    const [activeNews, setActiveNews] = useState(0);

    const positiveDevelopments = [
        {
            title: "Kweekvleesboerderij in Schipluiden",
            date: "November 2025",
            description: "De eerste kweekvleesboerderij ter wereld geopend op een melkveehouderij.",
            impact: "Potentieel: 95% minder landgebruik, sterk verminderde stikstofuitstoot, volledig zonder dierenleed.",
            fullStory: "In Schipluiden is de eerste kweekvleesboerderij ter wereld geopend. Boer Corné van Leeuwen ziet dit als een kans voor nieuwe inkomstenmodellen naast traditionele landbouw. Net zoals melkrobots ooit sceptisch werden ontvangen maar nu standaard zijn.",
            icon: <Zap className="text-emerald-400" size={24} />,
            source: "https://nos.nl/artikel/2592079-schipluiden-krijgt-de-eerste-kweekvleesboerderij-ter-wereld"
        },
        {
            title: "Stroomstootwapens verboden in veehouderij per 1 januari",
            date: "November 2025",
            description: "Demissionair minister Wiersma wil toch verbod op stroomstootwapens per 1 januari 2025 laten ingaan.",
            impact: "Verbetering dierenwelzijn: einde aan pijnlijke elektrische schokken bij koeien en varkens.",
            fullStory: "Na druk van een ruime meerderheid in de Tweede Kamer wil minister Wiersma toch proberen het verbod op stroomstootwapens per 1 januari 2025 te laten ingaan. Het gebruik van deze wapens om dieren met elektrische schokken in vrachtwagens te drijven is omstreden. In de praktijk worden vaak schokken op de kop en snuit van varkens uitgedeeld, wat gelijkstaat aan dierenmishandeling. Het verbod was al langer een wens van Kamerleden, waaronder de Partij voor de Dieren en de VVD.",
            icon: <TrendingUp className="text-emerald-400" size={24} />,
            source: "https://nos.nl/artikel/2592214-wiersma-streeft-na-druk-toch-naar-stroomstootverbod-in-veehouderij-per-1-januari"
        },
        {
            title: "Flexitariërs in Nederland groeien snel",
            date: "Maart 2024",
            description: "22% van de Nederlanders eet minstens drie dagen per week vegetarisch, 43% één tot twee dagen.",
            impact: "Culturele verschuiving: plantaardig eten wordt normaler, niet langer 'radicaal'.",
            fullStory: "Nederlanders kiezen bij een kwart van de hoofdmaaltijden voor vegetarisch. Vooral jongeren (18-30 jaar) leiden deze trend, waarbij dierenwelzijn en klimaat voor hen morele basisprincipes zijn geworden.",
            icon: <Users className="text-emerald-400" size={24} />,
            source: "https://www.cbs.nl/nl-nl/nieuws/2024/10/nederlanders-kiezen-bij-een-kwart-van-de-hoofdmaaltijden-voor-vegetarisch"
        },
        {
            title: "Nederlanders eten laagste hoeveelheid vlees in 20 jaar",
            date: "Oktober 2025",
            description: "Vleesconsumptie gedaald naar 74,4 kilo per persoon - laagste niveau sinds start metingen in 2005.",
            impact: "Structurele daling zet door: milieu, gezondheid en dierenwelzijn zijn belangrijke beweegredenen.",
            fullStory: "Nederlanders eten steeds minder vlees, volgens onderzoek van Wageningen Universiteit. Met 74,4 kilo per persoon in 2023 is de consumptie op het laagste niveau sinds 2005. De daling zet door na een initiële afname tijdens corona. Onderzoeker Hans Dagevos: 'Mensen eten minder vlees vanwege gezondheid, milieu en dierenwelzijn.' Nederlanders eten nu drie keer zoveel vlees als wordt aangeraden voor een gezonde planeet. Wakker Dier: 'Bij ieder eetmoment kunnen we dieren een rotleven in de vee-industrie besparen.'",
            icon: <TrendingDown className="text-emerald-400" size={24} />,
            source: "https://nos.nl/artikel/2587378-nederlanders-eten-minder-vlees-laagste-aantal-kilo-s-in-twintig-jaar"
        },
        {
            title: "Schijf van Vijf aangepast: maximaal 200 gram rood vlees per week",
            date: "December 2025",
            description: "Voedingscentrum verwerkt nieuwe Richtlijnen Goede Voeding in Schijf van Vijf met strengere vleesadviezen.",
            impact: "Wetenschappelijke consensus leidt tot officieel advies: minder vlees voor gezondheid en duurzaamheid.",
            fullStory: "Het Voedingscentrum werkt aan een verbeterde Schijf van Vijf die nieuwe wetenschappelijke inzichten over eiwitbronnen verwerkt. Het advies wordt concreet: niet meer dan 200 gram rood vlees per week en zo min mogelijk bewerkt vlees. Daarnaast wordt aanbevolen om elke week 250 gram peulvruchten te eten. Het Voedingscentrum: 'Alle nieuwe wetenschappelijke inzichten komen samen tot een gezond, duurzaam en veilig eetpatroon.' De organisatie benadrukt dat verantwoordelijkheid niet alleen bij consumenten ligt, maar dat ook producenten stappen moeten zetten.",
            icon: <Scale className="text-emerald-400" size={24} />,
            source: "https://www.levensmiddelenkrant.nl/voedingscentrum-past-schijf-van-vijf-aan"
        },
        {
            title: "Miljoeneninvestering voor kaas zonder koe",
            date: "december 2025",
            description: "Those Vegan Cowboys heeft een manier gevonden om caseïne, het belangrijkste eiwit in kaas, te maken via precisiefermentatie, zonder gebruik van dieren",
            impact: "Kaas zonder koeien",
            fullStory: "Er wordt 6 miljoen geïnvesteerd in de vegan kaas van Those Vegan Cowboys. Ze hebben een manier gevonden om caseïne te maken zonder koeien. In de Verenigde Staten is al toestemming om de markt te betreden. Volgend jaar zijn er proeverijen in Nederland.",
            icon: <Scale className="text-emerald-400" size={24} />,
            source: "https://nos.nl/video/2595296-miljoeneninvestering-voor-kaas-zonder-koe-normale-kaas-wordt-onbetaalbaar"
        },
        {
            title: "Jongeren kiezen vaker plantaardig",
            date: "december 2024",
            description: "Vooral jongeren (18-30 jaar) kiezen vaker voor plantaardige opties.",
            impact: "Jongere generaties zien dierenwelzijn en klimaat als morele basisprincipes.",
            fullStory: "Voor jongere generaties zijn dierenwelzijn, klimaat en duurzaamheid steeds vaker morele basisprincipes, niet slechts een politieke voorkeur. Dit zorgt voor blijvende culturele verschuiving.",
            icon: <Brain className="text-emerald-400" size={24} />,
            source: "https://www.vegetariers.nl/nieuws/vegamonitor-2024/"
        }
    ];

    return (
        <div className="optimistic-news py-20 px-6 bg-neutral-900">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold mb-4">Hoofdstuk 2: Het kan wél</h3>
                    <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                        Positieve ontwikkelingen die bewijzen dat verandering niet alleen mogelijk is, maar al in gang is gezet
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* ACTUELE ONTWIKKELING */}
                    <div className="bg-gradient-to-br from-emerald-900/30 to-teal-900/30 border border-emerald-800/50 p-8 rounded-2xl">
                        <div className="flex items-center gap-3 mb-6">
                            <Newspaper className="text-emerald-400" size={32} />
                            <h4 className="text-2xl font-bold">Laatste ontwikkelingen</h4>
                        </div>

                        <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                            {positiveDevelopments.map((news, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveNews(index)}
                                    className={`w-full text-left p-4 rounded-lg transition-all ${
                                        activeNews === index
                                            ? 'bg-emerald-900/50 border border-emerald-700'
                                            : 'bg-neutral-800/50 hover:bg-neutral-700/50'
                                    }`}
                                >
                                    <div className="flex items-start gap-3">
                                        {news.icon}
                                        <div className="flex-1">
                                            <div className="font-bold mb-1">{news.title}</div>
                                            <div className="text-sm text-neutral-400 mb-2">{news.date}</div>
                                            <div className="text-sm">{news.description}</div>
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* DETAIL VAN GESELECTEERD NIEUWS */}
                    <div className="bg-neutral-800/50 p-8 rounded-2xl border border-neutral-700">
                        <div className="mb-6">
                            <div className="flex justify-between items-start mb-2">
                                <div className="text-emerald-400 text-sm font-medium">
                                    {positiveDevelopments[activeNews].date}
                                </div>
                                {positiveDevelopments[activeNews].source && (
                                    <a
                                        href={positiveDevelopments[activeNews].source}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-emerald-300 hover:text-emerald-200 underline flex items-center gap-1"
                                    >
                                        Bron ↗
                                    </a>
                                )}
                            </div>
                            <h4 className="text-2xl font-bold mb-4">
                                {positiveDevelopments[activeNews].title}
                            </h4>
                            <p className="text-lg text-neutral-300 mb-6">
                                {positiveDevelopments[activeNews].fullStory}
                            </p>
                        </div>

                        <div className="bg-neutral-900/50 p-6 rounded-xl mb-6">
                            <div className="font-bold text-emerald-300 mb-2">Directe impact:</div>
                            <p className="text-neutral-300">{positiveDevelopments[activeNews].impact}</p>
                        </div>

                        <div className="mt-8">
                            <div className="font-bold mb-3">Waarom is dit hoopvol?</div>
                            <ul className="space-y-2 text-neutral-300">
                                <li className="flex items-start gap-2">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></div>
                                    <span>Bewijs dat innovatie en verandering mogelijk zijn</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></div>
                                    <span>Toont aan dat politieke moed mogelijk is</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></div>
                                    <span>Laat zien dat alternatieven levensvatbaar zijn</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></div>
                                    <span>Maatschappelijke druk werkt: bedrijven en politiek reageren</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


                {/* HOOPVOLLE CONCLUSIE */}
                <div className="mt-8 text-center text-neutral-400">
                    <p className="text-lg">
                        Deze ontwikkelingen laten zien dat verandering op meerdere fronten al in gang is gezet.
                        <span className="block mt-2 font-semibold text-emerald-300">
                            De toekomst is niet vastgelegd, we hebben de kracht het te veranderen.
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}