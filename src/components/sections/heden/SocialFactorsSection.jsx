// components/sections/text/SocialFactorsSection.jsx
import React, { useState } from 'react';
import { Package, ShoppingCart, Tv, BookOpen } from 'lucide-react';

export default function SocialFactorsSection() {
    const [activeStrategy, setActiveStrategy] = useState(0);

    const marketingStrategies = [
        {
            title: "Greenwashing",
            icon: <Package size={24} />,
            description: "Termen als 'duurzaam', 'beter leven' en 'natuurlijk' zonder fundamentele verandering.",
            example: "Melkunie werd veroordeeld voor misleidende duurzaamheidsclaims."
        },
        {
            title: "Emotionele Marketing",
            icon: <Tv size={24} />,
            description: "Idyllische beelden van grazende koeien en tevreden dieren op verpakkingen.",
            example: "Verpakkingen tonen groene weides, terwijl de meeste dieren nooit buiten komen."
        },
        {
            title: "Eufemismen",
            icon: <BookOpen size={24} />,
            description: "Taal die de link tussen dier en product verbreekt.",
            example: "'Verwerken' i.p.v. 'slachten', 'product' i.p.v. 'kalf'"
        },
        {
            title: "Kindermarketing",
            icon: <ShoppingCart size={24} />,
            description: "Lesmateriaal en schoolbezoeken die een geromantiseerd beeld tonen.",
            example: "Lespakketten van De Heus via overheidsprogramma Jong Leren Eten."
        }
    ];

    return (
        <div className="social-section py-16 px-6 bg-neutral-800">
            <div className="max-w-6xl mx-auto">

                {/* TITEL */}
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold mb-4">4. Sociale Acceptatie</h3>
                    <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                        Hoe marketing, framing en gewoontes ons denken over vlees en zuivel vormgeven
                    </p>
                </div>

                {/* MARKETING STRATEGIEËN */}
                <div className="mb-12">
                    <h4 className="text-2xl font-bold mb-6">Marketing & Framing</h4>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        {marketingStrategies.map((strategy, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveStrategy(index)}
                                className={`p-4 rounded-lg transition-all text-left ${
                                    activeStrategy === index
                                        ? 'bg-emerald-900 ring-2 ring-emerald-500'
                                        : 'bg-neutral-700 hover:bg-neutral-600'
                                }`}
                            >
                                <div className="text-emerald-400 mb-2">{strategy.icon}</div>
                                <div className="font-bold mb-2">{strategy.title}</div>
                                <div className="text-sm text-neutral-300">{strategy.description}</div>
                            </button>
                        ))}
                    </div>

                    {/* GESELECTEERDE STRATEGIE DETAIL */}
                    <div className="bg-neutral-700 p-8 rounded-lg mb-8">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="text-4xl font-bold text-emerald-400">0{activeStrategy + 1}</div>
                            <div>
                                <h5 className="text-2xl font-bold">{marketingStrategies[activeStrategy].title}</h5>
                                <p className="text-neutral-300">{marketingStrategies[activeStrategy].description}</p>
                            </div>
                        </div>

                        <div className="bg-neutral-800 p-6 rounded-lg">
                            <div className="font-bold mb-2 text-emerald-300">Voorbeeld:</div>
                            <p className="text-lg">{marketingStrategies[activeStrategy].example}</p>
                        </div>
                    </div>
                </div>

                {/* CONSUMENTENPSYCHOLOGIE */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-neutral-700 p-6 rounded-lg">
                        <h5 className="text-xl font-bold mb-4">De kloof tussen weten en doen</h5>
                        <p className="text-neutral-300 mb-4">
                            Uit peilingen blijkt dat een meerderheid van Nederlanders zich zorgen maakt over dierenwelzijn en klimaat,
                            maar de vleesconsumptie blijft hoog (74,4 kg per persoon per jaar).
                        </p>
                        <div className="text-sm text-neutral-400">
                            <p>Waarom?</p>
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li>Gewoontes: "Wat de pot schaft"</li>
                                <li>Gemak: overal verkrijgbaar</li>
                                <li>Onzichtbaarheid: geen link met levend dier</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-neutral-700 p-6 rounded-lg">
                        <h5 className="text-xl font-bold mb-4">Culturele verankering</h5>
                        <p className="text-neutral-300 mb-4">
                            Vlees en zuivel zijn diep geworteld in Nederlandse tradities: de boterham met kaas, de zondagse biefstuk,
                            kerstgourmet, Pasen met lamsvlees.
                        </p>
                        <div className="text-sm text-neutral-400">
                            <p>Verandering voelt als:</p>
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li>Aanval op identiteit</li>
                                <li>Breuk met traditie</li>
                                <li>Afwijken van de norm</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* INTERACTIEVE "HERKEN DE FRAMING" */}
                <div className="bg-gradient-to-r from-neutral-700 to-neutral-800 p-8 rounded-lg">
                    <h5 className="text-2xl font-bold mb-6 text-center">Test je kennis: herken jij de framing?</h5>

                    <div className="max-w-2xl mx-auto">
                        <div className="bg-neutral-900 p-6 rounded-lg mb-6">
                            <p className="text-lg mb-4">
                                "Onze koeien staan 365 dagen per jaar in de wei en genieten van het Hollandse gras."
                            </p>
                            <div className="space-y-3">
                                {['Waarheid', 'Greenwashing', 'Deels waar', 'Onzin'].map((option, index) => (
                                    <button
                                        key={index}
                                        className="w-full text-left bg-neutral-800 hover:bg-neutral-700 p-4 rounded-lg transition-colors"
                                        onClick={() => alert(index === 1 ? 'Correct! Dit is greenwashing' : 'Helaas, probeer opnieuw')}
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="text-center text-sm text-neutral-400">
                            <p>Dit is een vereenvoudigde versie. In het volgende hoofdstuk leer je hoe je framing beter kunt herkennen.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}