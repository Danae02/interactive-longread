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
                </div>

                {/* HOOFDTEKST */}
                <div className="space-y-10 mb-12">
                    <div className="prose prose-lg prose-invert max-w-none">

                        <p className="text-xl leading-relaxed mb-8">
                            <strong>Dus kunnen we zelf wat doen? Ja en nee.</strong>
                        </p>

                        <p className="text-lg leading-relaxed mb-8">
                            Als consument bepalen we de vraag naar producten, maar als machthebbers, grote bedrijven
                            en de politiek niet een handje mee helpen, gaat er waarschijnlijk weinig veranderen.
                        </p>

                        <p className="text-lg leading-relaxed mb-8">
                            Ik zelf vind het wel een fijn idee dat door minder dierlijke producten te eten en drinken,
                            ik zelf zorg dat er minder dieren dood gaan.
                            Maar over het algemeen kan ik verder niks. Dat gevoel van machteloosheid is begrijpelijk
                            als je ziet hoe complex en vastgeroest het systeem is.
                        </p>

                        <p className="text-lg leading-relaxed mb-8">
                            Maar in hoeverre ligt deze verantwoordelijkheid eigenlijk bij de consument?
                        </p>

                        <p className="text-lg leading-relaxed mb-8">
                            Zoals uit de interviews en mijn onderzoek blijkt zijn er <strong>heeel veel actoren </strong>
                             met verschillende rollen en aandelen in de huidige manier van intensieve vee-industrie.
                            En veel van deze actoren doen er veel aan om het <strong>NIET te laten veranderen</strong>.
                        </p>

                        <div className="bg-neutral-800/30 p-6 rounded-xl my-8 border-l-4 border-emerald-500">
                            <p className="text-lg leading-relaxed">
                                Er zijn al hele goede ideeën om de impact minder groot te laten maken:
                            </p>
                            <ul className="mt-4 space-y-3 pl-5">
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="text-emerald-400 mt-1" size={18} />
                                    <span>Ecocide strafbaar maken</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="text-emerald-400 mt-1" size={18} />
                                    <span>Goede vlees- en melkalternatieven (al mag dat niet zo heten)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="text-emerald-400 mt-1" size={18} />
                                    <span>De Schijf van Vijf is aangepast met strengere vleesadviezen</span>
                                </li>
                            </ul>
                        </div>

                        <p className="text-lg leading-relaxed mb-8">
                            Maar zonder <strong>concrete gedurfde veranderingen vanuit de politiek</strong> gaan de
                            bedrijven die hier aandeel in hebben niet veranderen.
                        </p>

                        <p className="text-lg leading-relaxed mb-8">
                            Zij veranderen alleen als er meer mee te verdienen valt, of als ze er door wetgeving
                            toe gedwongen worden.
                        </p>

                    </div>
                </div>

                {/* KERNVIZIERING */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold mb-8 text-center">De kern van het probleem</h3>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-neutral-800/50 p-8 rounded-xl">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-emerald-900/50 rounded-lg">
                                    <Users className="text-emerald-400" size={28} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold">Individuele actie</h4>
                                    <p className="text-sm text-neutral-400 mt-1">Wat jij kunt doen</p>
                                </div>
                            </div>
                            <p className="text-neutral-300 leading-relaxed">
                                Minder dierlijke producten eten en drinken helpt, maar lost het systeem niet op. Consumenten zijn onderdeel
                                van een keten die hen beperkte keuzes biedt. Het is belangrijk, maar niet voldoende.
                            </p>
                        </div>

                        <div className="bg-neutral-800/50 p-8 rounded-xl">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-rose-900/50 rounded-lg">
                                    <TrendingUp className="text-rose-400" size={28} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold">Systeemverandering</h4>
                                    <p className="text-sm text-neutral-400 mt-1">Wat er nodig is</p>
                                </div>
                            </div>
                            <p className="text-neutral-300 leading-relaxed">
                                Echte verandering vraagt om politieke moed, eerlijke prijzen, lobbytransparantie
                                en een fundamentele hervorming van subsidies. Dit is waar de grootste impact gemaakt kan worden.
                            </p>
                        </div>
                    </div>
                </div>

                {/* AF SLUITING */}
                <div className="text-center mb-16">
                    <div className="inline-block p-10 bg-gradient-to-r from-emerald-900/20 to-teal-900/20 rounded-2xl border border-emerald-800/50 backdrop-blur-sm">
                        <h4 className="text-2xl font-bold mb-6">Dus wat nu?</h4>

                        <div className="space-y-6 max-w-2xl mx-auto">
                            <p className="text-lg text-neutral-300">
                                We kunnen allemaal iets doen: bewuste keuzes maken, het gesprek aangaan,
                                stemmen op partijen die verandering durven.
                            </p>

                            <p className="text-lg text-neutral-300">
                                Maar de grootste verantwoordelijkheid ligt bij hen die het systeem vormgeven
                                en in stand houden.
                            </p>

                            <div className="pt-4 border-t border-emerald-800/30">
                                <p className="text-emerald-300 font-medium">
                                    Het begint met begrip. En dat heb je nu.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>



                {/* EINDE TEKEN */}
                <div className="mt-12 pt-8 text-center">
                    <div className="inline-block px-6 py-3 bg-neutral-800/30 rounded-full">
                        <p className="text-neutral-400 italic">
                            — Danae
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}