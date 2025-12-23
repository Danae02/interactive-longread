// components/sections/text/ConclusieSection.jsx
import React from 'react';
import { CheckCircle, AlertCircle, Users, TrendingUp } from 'lucide-react';

export default function ConclusieSection() {
    return (
        <div className="conclusie-section py-20 px-6 bg-gradient-to-b from-neutral-900 to-black">
            <div className="max-w-4xl mx-auto">

                {/* TITEL */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Conclusie</h2>
                    <p className="text-xl text-neutral-300">
                        Wat kunnen we zelf doen? En wat moet er veranderen?
                    </p>
                </div>

                {/* HOOFDTEKST */}
                <div className="space-y-8 mb-12">
                    <div className="prose prose-lg prose-invert max-w-none">
                        <p className="text-lg leading-relaxed">
                            <strong>Dus kunnen we zelf wat doen? Ja en nee.</strong> Als consument bepalen we de vraag naar producten, maar als machthebbers, grote bedrijven en de politiek niet een handje mee helpen, gaat er waarschijnlijk weinig veranderen.
                        </p>

                                    <p className="text-neutral-300">
                                        Ik zelf vind het wel een fijn idee dat door minder dierlijke producten te eten en drinken, dat ik zelf wel zorg dat er minder dieren dood gaan. Maar over het algemeen kan ik verder niks.
                                    </p>

                        <p className="text-lg leading-relaxed">
                            Maar in hoeverre ligt deze verantwoordelijkheid bij de consument? Zoals uit de interviews en mijn onderzoek blijkt zijn er <strong>heel veel actoren</strong> met verschillende rollen en aandelen in de huidige manier van intensieve vee-industrie die er veel aan doen om het <strong>NIET te laten veranderen</strong>.
                        </p>

                        <div className="my-8 p-6 bg-neutral-800/50 rounded-xl border-l-4 border-rose-500">
                            <div className="flex items-start gap-3">
                                <AlertCircle className="text-rose-400 mt-1 flex-shrink-0" size={24} />
                                <div>
                                    <p className="text-neutral-300">
                                        Er zijn al hele goede ideeën om de impact minder groot te laten maken: ecocide strafbaar maken, goede vlees- en melkalternatieven (al mag dat niet zo heten), de Schijf van Vijf is aangepast. Maar zonder <strong>concrete gedurfde veranderingen vanuit de politiek</strong> gaan de bedrijven die hier aandeel in hebben niet veranderen — behalve als er meer mee te verdienen valt.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* KERNVIZIERING */}
                <div className="mb-12">
                    <h3 className="text-2xl font-bold mb-6 text-center">De kern van het probleem</h3>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-neutral-800/50 p-6 rounded-xl">
                            <div className="flex items-center gap-3 mb-4">
                                <Users className="text-emerald-400" size={24} />
                                <h4 className="text-lg font-bold">Individuele actie</h4>
                            </div>
                            <p className="text-neutral-300">
                                Minder vlees eten helpt, maar lost het systeem niet op. Consumenten zijn onderdeel van een keten die hen beperkte keuzes biedt.
                            </p>
                        </div>

                        <div className="bg-neutral-800/50 p-6 rounded-xl">
                            <div className="flex items-center gap-3 mb-4">
                                <TrendingUp className="text-rose-400" size={24} />
                                <h4 className="text-lg font-bold">Systeemverandering</h4>
                            </div>
                            <p className="text-neutral-300">
                                Echte verandering vraagt om politieke moed, eerlijke prijzen, lobbytransparantie en een hervorming van subsidies.
                            </p>
                        </div>
                    </div>
                </div>

                {/* AF SLUITING */}
                <div className="text-center">
                    <div className="inline-block p-8 bg-gradient-to-r from-emerald-900/30 to-teal-900/30 rounded-2xl border border-emerald-800/50">
                        <h4 className="text-2xl font-bold mb-4">Dus wat nu?</h4>
                        <p className="text-lg text-neutral-300 mb-6 max-w-2xl mx-auto">
                            We kunnen allemaal iets doen: bewuste keuzes maken, het gesprek aangaan, stemmen op partijen die verandering durven.
                            Maar de grootste verantwoordelijkheid ligt bij hen die het systeem vormgeven en in stand houden.
                        </p>
                        <div className="text-sm text-neutral-400">
                            <p>Het begint met begrip. En dat heb je nu.</p>
                        </div>
                    </div>
                </div>

                {/* BRONVERMELDING */}
                <div className="mt-12 pt-8 border-t border-neutral-800 text-center">
                    <p className="text-sm text-neutral-500">
                        Dit onderzoek is gebaseerd op interviews met Lammert van Raan (Partij voor de Dieren),
                        Arco Timmermans (lobby-expert), en schriftelijke antwoorden van BBB, Dier & Recht en Caring Farmers.
                    </p>
                </div>
            </div>
        </div>
    );
}