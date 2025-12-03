import React, { useState } from 'react';
import { Play, FileText, Headphones, Video, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function InterviewsSection() {
    const [playingAudio, setPlayingAudio] = useState(null);

    const interviews = [
        {
            id: 'arco-timmermans',
            name: 'Arco Timmermans',
            role: 'Politicoloog & Lobbyisme-expert',
            type: 'tekst',
            image: '/afbeeldingen-interviews/arco-timmermans.jpg',
            quote: '......',
            highlight: 'Onthult hoe lobbynetwerken werken'
        },
        {
            id: 'wouter-waayer',
            name: 'Wouter Waayer',
            role: 'Boerenzoon → Vegan Activist',
            type: 'audio',
            image: '/afbeeldingen-interviews/Wouter_waayer.jpg',
            quote: '....',
            highlight: 'Van boerderij naar activisme',
            audioFragments: 5
        },
        {
            id: 'bbb-lid',
            name: 'Kevin Brouwer',
            role: 'BBB - lid',
            type: 'text',
            image: '/afbeeldingen-interviews/Kevin-Brouwer_BBB.jpg',
            quote: '......',
            highlight: 'Schriftelijk interview over boerenbelangen',
            note: 'Schriftelijk beantwoord'
        },
        {
            id: 'lammert-van-raan',
            name: 'Lammert van Raan',
            role: '...',
            type: 'tekst',
            image: '/afbeeldingen-interviews/lammert-van-raan.webp',
            quote: '....',
            highlight: 'De middenweg in een verhit debat'
        },
        {
            id: 'caring-farmers',
            name: 'Caring Farmers',
            role: 'Stichting voor duurzame koplopers',
            type: 'tekst',
            image: '/afbeeldingen-interviews/caring-farmers-climate-miles.jpg',
            quote: 'De grootste belemmering is dat het hele landbouw- en voedselsysteem is ingericht op (grootschalige) gangbare bedrijven. Zo is er veel wetgeving en controles waar agrarische bedrijven aan moeten voldoen, maar die helemaal niet logisch of nuttig zijn voor duurzame koplopers.',
            highlight: 'Pleit voor uitzonderingen voor kleinschalige boeren'
        },
        {
            id: 'dier-en-recht',
            name: 'Dier&Recht',
            role: 'Stichting voor dierenbelangen',
            type: 'tekst',
            image: '/afbeeldingen-interviews/dierenrecht.jpg',
            quote: 'Er is vaak sprake van gevestigde belangen en terugkerende steunmechanismen, waardoor transitie wordt tegengehouden of vertraagd.',
            highlight: 'Vecht tegen EU-promotiesubsidies voor vlees'
        }
    ];


    const getTypeIcon = (type) => {
        switch(type) {
            case 'video': return <Video className="text-emerald-400" size={20} />;
            case 'audio': return <Headphones className="text-emerald-400" size={20} />;
            case 'text': return <FileText className="text-emerald-400" size={20} />;
            default: return <Play className="text-emerald-400" size={20} />;
        }
    };

    const getTypeLabel = (type, audioFragments) => {
        switch(type) {
            case 'video': return 'Video interview';
            case 'audio': return `${audioFragments} audiofragmenten`;
            case 'text': return 'Schriftelijk interview';
            default: return 'Interview';
        }
    };

    return (
        <section className="py-24 px-6 bg-neutral-800">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Stemmen uit de Sector
                    </h2>
                    <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
                        We spraken met mensen die de vee-industrie van binnenuit kennen:
                        van beleidsmakers tot activisten, van boeren tot journalisten.
                        Vier perspectieven, één complex verhaal.
                    </p>
                </div>

                {/* Interviews */}
                <div className="space-y-24">
                    {interviews.map((interview, index) => (
                        <div
                            key={interview.id}
                            className={`flex flex-col ${
                                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                            } gap-8 items-center`}
                        >
                            {/* Image */}
                            <div className="w-full md:w-5/12 flex-shrink-0">
                                <div className="relative group">
                                    <img
                                        src={interview.image}
                                        alt={interview.name}
                                        className="w-full aspect-square object-cover rounded-lg shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    {/* Type indicator */}
                                    <div className="absolute top-4 right-4 bg-neutral-900/90 backdrop-blur-sm px-3 py-2 rounded-full flex items-center gap-2">
                                        {getTypeIcon(interview.type)}
                                        <span className="text-sm text-white">
                                            {getTypeLabel(interview.type, interview.audioFragments)}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="w-full md:w-7/12">
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="text-3xl font-bold text-white mb-2">
                                            {interview.name}
                                        </h3>
                                        <p className="text-emerald-400 text-lg">
                                            {interview.role}
                                        </p>
                                    </div>

                                    <div className="h-1 w-20 bg-emerald-500 rounded-full" />

                                    <p className="text-neutral-300 text-sm uppercase tracking-wider font-medium">
                                        {interview.highlight}
                                    </p>

                                    <blockquote className="border-l-4 border-emerald-500 pl-6 py-2">
                                        <p className="text-xl italic text-neutral-100 leading-relaxed">
                                            "{interview.quote}"
                                        </p>
                                    </blockquote>

                                    {interview.note && (
                                        <p className="text-sm text-neutral-400 italic">
                                            {interview.note}
                                        </p>
                                    )}

                                    <Link
                                        to={`/interviews/${interview.id}`}
                                        className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded-lg transition-colors group"
                                    >
                                        Lees volledig interview
                                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer CTA */}
                <div className="mt-20 text-center p-8 bg-neutral-900 rounded-lg border border-neutral-700">
                    <h3 className="text-2xl font-bold mb-4">Wil je meer weten?</h3>
                    <p className="text-neutral-300 mb-6">
                        Bekijk alle volledige interviews, inclusief audiofragmenten, transcripties en achtergrondinfo.
                    </p>
                    <Link
                        to="/interviews"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded-lg transition-colors"
                    >
                        Alle interviews
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
        </section>
    );
}