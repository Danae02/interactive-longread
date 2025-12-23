// components/sections/text/LobbySection.jsx
import React, { useState } from 'react';
import { Users, TrendingUp, Shield, MessageSquare } from 'lucide-react';

export default function LobbySection() {
    const [activeExample, setActiveExample] = useState(0);

    const lobbyExamples = [
        {
            title: "Lespakketten op scholen",
            description: "Veevoerbedrijven zoals De Heus maken lesmateriaal dat via overheidsprogramma's op scholen wordt gebruikt.",
            icon: <MessageSquare size={24} />,
            quote: "Het is geen onderwijs, het is verkoop onder een educatief sausje."
        },
        {
            title: "Agrifacts & 'Onafhankelijk' onderzoek",
            description: "Sectorfinancierde onderzoeken die overheidscijfers in twijfel trekken.",
            icon: <TrendingUp size={24} />,
            quote: "De wetenschap wordt ingezet als wapen in de lobby-strijd."
        },
        {
            title: "De IJzeren Ring",
            description: "Traditionele toegang van LTO en NZO tot Haagse beleidsmakers.",
            icon: <Shield size={24} />,
            quote: "De vanzelfsprekende invloed is minder vanzelfsprekend geworden, maar nog steeds aanwezig."
        }
    ];

    return (
        <div className="lobby-section py-16 px-6 bg-neutral-800">
            <div className="max-w-6xl mx-auto">

                {/* TITEL */}
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold mb-4">2. De Lobby-machine</h3>
                    <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                        Hoe de sector zijn belangen behartigt via directe toegang, framing en strategische beïnvloeding
                    </p>
                </div>

                {/* LOBBY STRATEGIEËN */}
                <div className="mb-12">
                    <h4 className="text-2xl font-bold mb-6">Strategieën van de lobby</h4>

                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-neutral-700 p-6 rounded-lg">
                            <div className="text-emerald-400 mb-4">
                                <Users size={32} />
                            </div>
                            <h5 className="font-bold mb-2">Dramatisering</h5>
                            <p className="text-sm text-neutral-300">
                                Zakelijke belangen worden verpakt als existentiële strijd voor "familiebedrijven" en "plattelandscultuur".
                            </p>
                        </div>

                        <div className="bg-neutral-700 p-6 rounded-lg">
                            <div className="text-emerald-400 mb-4">
                                <TrendingUp size={32} />
                            </div>
                            <h5 className="font-bold mb-2">Echo-kamer strategie</h5>
                            <p className="text-sm text-neutral-300">
                                Boodschappen via meerdere kanalen herhalen tot waarheid en perceptie samensmelten.
                            </p>
                        </div>

                        <div className="bg-neutral-700 p-6 rounded-lg">
                            <div className="text-emerald-400 mb-4">
                                <Shield size={32} />
                            </div>
                            <h5 className="font-bold mb-2">Educatieve beïnvloeding</h5>
                            <p className="text-sm text-neutral-300">
                                Lespakketten en boerderijbezoeken om een positief beeld van de sector te verspreiden.
                            </p>
                        </div>
                    </div>
                </div>

                {/* INTERACTIEVE VOORBEELDEN */}
                <div className="bg-neutral-700 rounded-lg overflow-hidden">
                    <div className="p-6">
                        <h4 className="text-xl font-bold mb-4">Concrete voorbeelden</h4>

                        <div className="flex flex-col md:flex-row gap-6">
                            {/* NAVIGATIE */}
                            <div className="md:w-1/3">
                                <div className="space-y-2">
                                    {lobbyExamples.map((example, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setActiveExample(index)}
                                            className={`w-full text-left p-4 rounded-lg transition-colors ${
                                                activeExample === index
                                                    ? 'bg-emerald-900 text-white'
                                                    : 'bg-neutral-600 hover:bg-neutral-500'
                                            }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                {example.icon}
                                                <span className="font-medium">{example.title}</span>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* CONTENT */}
                            <div className="md:w-2/3">
                                <div className="bg-neutral-800 p-6 rounded-lg h-full">
                                    <h5 className="text-2xl font-bold mb-4">
                                        {lobbyExamples[activeExample].title}
                                    </h5>
                                    <p className="text-lg mb-6">
                                        {lobbyExamples[activeExample].description}
                                    </p>

                                    <blockquote className="border-l-4 border-emerald-500 pl-4 italic text-neutral-300 mb-6">
                                        "{lobbyExamples[activeExample].quote}"
                                    </blockquote>

                                    <div className="text-sm text-neutral-400">
                                        <p>Bron: Interview analyses en onderzoek</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* QUOTE VAN ARCO TIMMERMANS */}
                <div className="mt-12 p-8 bg-neutral-700 rounded-lg">
                    <div className="flex items-start gap-4">
                        <div className="text-emerald-400 flex-shrink-0">
                            <MessageSquare size={48} />
                        </div>
                        <div>
                            <blockquote className="text-2xl italic mb-4">
                                "Heel veel lobby is een beetje de dark side of the moon. Die is er. Het is de helft van de maan of meer. Maar je ziet hem niet per se."
                            </blockquote>
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-neutral-600 flex items-center justify-center">
                                    <span className="font-bold">AT</span>
                                </div>
                                <div>
                                    <div className="font-bold">Arco Timmermans</div>
                                    <div className="text-sm text-neutral-400">Lobby-expert en onderzoeker</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}