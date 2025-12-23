// components/sections/text/PoliticsSection.jsx
import React, { useState } from 'react';
import { Scale, Vote, AlertTriangle, Zap } from 'lucide-react';

export default function PoliticsSection() {
    const [selectedParty, setSelectedParty] = useState('pvd');

    const parties = {
        pvd: {
            name: "Partij voor de Dieren",
            position: "Voor radicale verandering",
            color: "bg-green-900",
            quote: "Boeren zitten gevangen in een systeem. Het gaat niet om het afpakken van de gehaktbal, maar om het herschikken van subsidies."
        },
        d66: {
            name: "D66",
            position: "Voor geleidelijke krimp",
            color: "bg-teal-900",
            quote: "De veestapel moet worden gehalveerd, maar we moeten boeren perspectief bieden."
        },
        bbb: {
            name: "BBB",
            position: "Tegen krimp",
            color: "bg-orange-900",
            quote: "Boeren zijn de oplossing, niet het probleem. We moeten hun toekomst veiligstellen."
        },
        vvd: {
            name: "VVD",
            position: "Economie voorop",
            color: "bg-blue-900",
            quote: "Innovatie en marktwerking leiden tot duurzaamheid, niet dwang en regelgeving."
        }
    };

    return (
        <div className="politics-section py-16 px-6 bg-neutral-900">
            <div className="max-w-6xl mx-auto">

                {/* TITEL */}
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold mb-4">3. Politieke Patstelling</h3>
                    <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                        Waarom verandert er zo weinig, terwijl de urgentie groeit?
                    </p>
                </div>

                {/* PARTIJEN OVERZICHT */}
                <div className="mb-12">
                    <h4 className="text-2xl font-bold mb-6">Stellingen in de politiek</h4>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        {Object.entries(parties).map(([key, party]) => (
                            <button
                                key={key}
                                onClick={() => setSelectedParty(key)}
                                className={`p-4 rounded-lg transition-all ${
                                    selectedParty === key
                                        ? `${party.color} ring-2 ring-emerald-500`
                                        : 'bg-neutral-800 hover:bg-neutral-700'
                                }`}
                            >
                                <div className="font-bold mb-2">{party.name}</div>
                                <div className="text-sm text-neutral-300">{party.position}</div>
                            </button>
                        ))}
                    </div>

                    {/* GESELEGTE PARTIJ INFO */}
                    <div className="bg-neutral-800 p-8 rounded-lg mb-8">
                        <div className="flex items-start gap-4 mb-6">
                            <div className={`${parties[selectedParty].color} p-4 rounded-lg`}>
                                <Vote size={32} />
                            </div>
                            <div>
                                <h5 className="text-2xl font-bold mb-2">{parties[selectedParty].name}</h5>
                                <p className="text-neutral-300">{parties[selectedParty].position}</p>
                            </div>
                        </div>

                        <blockquote className="border-l-4 border-emerald-500 pl-6 italic text-xl mb-6">
                            "{parties[selectedParty].quote}"
                        </blockquote>

                        <div className="text-sm text-neutral-400">
                            <p>Op basis van verkiezingsprogramma's en Kamerdebatten</p>
                        </div>
                    </div>
                </div>

                {/* POLITIEKE DILEMMA'S */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-neutral-800 p-6 rounded-lg">
                        <div className="flex items-center gap-3 mb-4">
                            <AlertTriangle className="text-yellow-500" size={24} />
                            <h5 className="text-xl font-bold">Angst voor de kiezer</h5>
                        </div>
                        <p className="text-neutral-300">
                            Politici durven niet door te pakken uit vrees kiezers te verliezen aan BBB en andere partijen die zich sterk maken voor behoud van de sector.
                        </p>
                    </div>

                    <div className="bg-neutral-800 p-6 rounded-lg">
                        <div className="flex items-center gap-3 mb-4">
                            <Scale className="text-purple-500" size={24} />
                            <h5 className="text-xl font-bold">Europees beleid</h5>
                        </div>
                        <p className="text-neutral-300">
                            Het Gemeenschappelijk Landbouwbeleid (GLB) subsidieert nog steeds intensivering. Verandering vereist Europese samenwerking.
                        </p>
                    </div>
                </div>

                {/* QUOTE VAN LAMMERT VAN RAAN */}
                <div className="p-8 bg-gradient-to-r from-emerald-900/30 to-teal-900/30 rounded-lg border border-emerald-800/50">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="text-emerald-400">
                            <Zap size={48} />
                        </div>
                        <div className="flex-1">
                            <blockquote className="text-2xl italic mb-4">
                                "Waarom durft geen politicus met een machtspositie het concreet door te zetten? Er is toch angst voor de kiezers, denk ik."
                            </blockquote>
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-emerald-900 flex items-center justify-center">
                                    <span className="font-bold">LvR</span>
                                </div>
                                <div>
                                    <div className="font-bold">Lammert van Raan</div>
                                    <div className="text-sm text-neutral-400">Tweede Kamerlid Partij voor de Dieren</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}