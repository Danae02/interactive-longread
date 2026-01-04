// components/sections/heden/EconomyPollSection.jsx
import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, AlertTriangle, Calculator, Shield, Lock, Users, ShoppingCart, MessageSquare } from 'lucide-react';

export default function EconomyPollSection() {
    const [activeBarrier, setActiveBarrier] = useState(null);



    // Economische barrières uit je onderzoek
    const economicBarriers = [
        {
            id: 1,
            title: "Financiële val voor boeren",
            icon: Lock,
            color: "border-amber-500",
            bgColor: "bg-amber-500/10",
            content: [
                "Boeren met moderne stallen en hoge leningen bij banken (Rabobank) kunnen niet veranderen zonder nieuwe investeringen",
                "Banks vinden verduurzaming te risicovol → financiering moeilijk",
                "Alternatief: doorgaan zoals voorheen om bedrijf en gezin veilig te stellen",
                "Conclusie: boeren zitten gevangen in het systeem (Zembla)"
            ]
        },
        {
            id: 2,
            title: "Macht in de keten",
            icon: ShoppingCart,
            color: "border-purple-500",
            bgColor: "bg-purple-500/10",
            content: [
                "Boeren zijn 'prijsnemer' (Kevin Brouwer, BBB) → weinig onderhandelingsmacht",
                "Grote inkopers: slachterijen (Vion, VanDrie) en supermarkten (AH, Jumbo)",
                "Hun doel: product zo goedkoop mogelijk inkopen",
                "Overlevingsstrategie: groter worden, meer produceren, kosten drukken",
                "Duurzaamheid (meer ruimte, betere leefomstandigheden) kost geld → val je af"
            ]
        },
        {
            id: 3,
            title: "Politieke lobby",
            icon: Shield,
            color: "border-blue-500",
            bgColor: "bg-blue-500/10",
            content: [
                "'IJzeren ring' van toegang tot Den Haag (Arco Timmermans)",
                "Organisaties: LTO Nederland, Nederlandse Zuivel Organisatie (NZO)",
                "Boodschap: maatregelen moeten haalbaar en betaalbaar zijn, niet radicaal",
                "Europese subsidies (GLB): uitgekeerd per hectare → stimuleert schaalvergroting, niet verduurzaming",
                "Sectorfondsen (Mesdag Zuivelfonds) en websites (Agrifacts) trekken kritische cijfers in twijfel",
                "Doel: vertragen en verwarren, niet oplossen"
            ]
        },
        {
            id: 4,
            title: "Marketing en framing",
            icon: MessageSquare,
            color: "border-green-500",
            bgColor: "bg-green-500/10",
            content: [
                "Greenwashing: verpakkingen met groene weides en blije koeien",
                "Termen als 'scharrel' of 'verantwoord' geven vals gevoel van goede keuze",
                "Melkunie al meermaals aangesproken door Reclame Code Commissie",
                "Taal: 'verwerken' in plaats van 'slachten' → dier wordt anoniem product",
                "'Dieren zijn geen nummers' (Wouter Waayer), maar framing maakt ze wel tot nummers",
                "Houden de consument tevreden en onwetend"
            ]
        }
    ];



    return (
        <div className="economy-section py-20 px-6 bg-gradient-to-b from-neutral-900 to-neutral-800">
            <div className="max-w-6xl mx-auto">

                {/* SECTION TITLE */}
                <div className="text-center mb-12">
                    <div className="flex justify-center mb-4">
                        <Lock className="text-amber-400" size={48} />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">7. Economische belangen</h2>
                    <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
                        Waarom economische belangen verandering tegenhouden - ondanks €5,3 miljard verlies per jaar
                    </p>
                </div>

                {/* OPENING PARAGRAPH FROM RESEARCH */}
                <div className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-2xl p-8 mb-12">
                    <div className="prose prose-lg prose-invert max-w-none">
                        <p className="text-lg md:text-xl leading-relaxed">
                            De cijfers liegen er niet om. De Nederlandse landbouw levert jaarlijks <span className="font-bold text-emerald-300">€13,3 miljard</span> op, maar veroorzaakt tegelijkertijd voor <span className="font-bold text-rose-300">€18,6 miljard</span> aan verborgen milieuschade. Dat betekent dus dat dit systeem ons jaarlijks <span className="font-bold text-rose-400">€5,3 miljard kost</span>. Toch blijft het in stand. Hoe kan dat?
                        </p>
                        <p className="text-lg md:text-xl leading-relaxed mt-6">
                            Het antwoord zit in de economische belangen die aan alle kanten van dit systeem vastzitten. Dit zijn geen kwade plannen om bewust de wereld kapot te maken, maar logische keuzes binnen een systeem dat zo is ingericht dat het voordeliger is om door te gaan zoals we bezig zijn. Dat werkt op allerlei manieren verandering tegen.
                        </p>

                        {/* BRONVERMELDING */}
                        <div className="mt-6 pt-4 border-t border-neutral-700">
                            <div className="flex items-center gap-2 text-sm text-neutral-400">
                                <span>Bron:</span>
                                <a
                                    href="https://grondbeginsel.nl/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-amber-400 hover:text-amber-300 hover:underline transition-colors flex items-center gap-1"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                                    </svg>
                                    GrondBeginsel.nl - "The Hidden Bill" rapport (Oktober 2025)
                                </a>
                            </div>
                            <p className="text-xs text-neutral-500 mt-1">
                                Deloitte onderzoek naar de verborgen kosten van de Nederlandse landbouw
                            </p>
                        </div>
                    </div>
                </div>

                {/* ECONOMIC BARRIERS SECTION */}
                <div className="mb-16">
                    <h3 className="text-3xl font-bold mb-8 text-center">De 4 economische barrières die verandering tegenhouden</h3>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        {economicBarriers.map(barrier => (
                            <button
                                key={barrier.id}
                                onClick={() => setActiveBarrier(activeBarrier === barrier.id ? null : barrier.id)}
                                className={`text-left p-6 rounded-xl border-2 ${barrier.color} ${barrier.bgColor} transition-all duration-300 hover:scale-[1.02] hover:shadow-lg`}
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className={`p-3 rounded-lg ${barrier.bgColor}`}>
                                        <barrier.icon className={barrier.color.replace('border-', 'text-')} size={24} />
                                    </div>
                                    <h4 className="text-xl font-bold">{barrier.title}</h4>
                                </div>

                                {activeBarrier === barrier.id ? (
                                    <div className="space-y-3 mt-4">
                                        {barrier.content.map((item, index) => (
                                            <div key={index} className="flex items-start gap-3">
                                                <div className="w-2 h-2 rounded-full bg-current mt-2 flex-shrink-0"></div>
                                                <p className="text-neutral-300">{item}</p>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-neutral-400">
                                        Klik om te zien hoe deze barrière werkt...
                                    </p>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* BARRIER CONCLUSION */}
                    <div className="bg-gradient-to-r from-neutral-800 to-neutral-900 border border-neutral-700 rounded-2xl p-8">
                        <div className="flex items-start gap-4">
                            <Users className="text-amber-400 mt-1" size={24} />
                            <div>
                                <h4 className="text-xl font-bold mb-3">Conclusie: een perfect op elkaar aangesloten systeem</h4>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <p className="text-neutral-300 mb-4">
                                            Dit systeem houdt zichzelf in stand door een cirkel van afhankelijkheid:
                                        </p>
                                        <ol className="list-decimal pl-5 space-y-2 text-neutral-300">
                                            <li><span className="font-bold">Financiën</span> zetten boeren klem</li>
                                            <li><span className="font-bold">Macht in de keten</span> dwingt tot lage kosten</li>
                                            <li><span className="font-bold">Politieke lobby</span> zorgt voor gunstige regels</li>
                                            <li><span className="font-bold">Marketing</span> houdt consument tevreden</li>
                                        </ol>
                                    </div>
                                    <div className="bg-rose-900/30 border border-rose-800/50 rounded-xl p-4">
                                        <p className="text-rose-200 font-bold mb-2">Het gevolg:</p>
                                        <p className="text-neutral-300">
                                            De echte kosten (€18,6 mld aan klimaatschade, stikstof en dierenleed) worden niet betaald door de sector, maar afgewenteld op de samenleving. Daarom lijkt duurzaam altijd duurder.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                {/* SOLUTION SECTION */}
                <div className="bg-gradient-to-r from-emerald-900/30 to-teal-900/30 border border-emerald-800/50 rounded-2xl p-8 mb-8">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="text-emerald-400">
                            <Calculator size={48} />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold mb-3">De oplossing volgens onderzoek</h4>
                            <p className="text-lg text-neutral-300 mb-4">
                                Volgens het <span className="font-bold">Deloitte-rapport "The Hidden Bill"</span> kan de schade drastisch worden verminderd:
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-emerald-900/40 p-4 rounded-lg">
                                    <div className="font-bold text-emerald-300 mb-1">Overstappen op biologische landbouw</div>
                                    <div className="text-sm text-neutral-300">Lagere milieuschade per hectare</div>
                                </div>
                                <div className="bg-teal-900/40 p-4 rounded-lg">
                                    <div className="font-bold text-teal-300 mb-1">Meer plantaardige productie</div>
                                    <div className="text-sm text-neutral-300">Minder vee, minder uitstoot</div>
                                </div>
                            </div>
                            <div className="mt-4 text-sm text-neutral-400">
                                <p>Het is geen kwestie van <span className="italic">of</span> we kunnen veranderen, maar <span className="font-bold">hoe</span> we de economische barrières gaan doorbreken.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}