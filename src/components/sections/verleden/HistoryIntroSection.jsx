import React from 'react';
import { Calendar, TrendingUp } from 'lucide-react';

export default function HistoryIntroSection() {
    return (
        <section className="bg-neutral-900 text-white py-16 md:py-20 px-6">
            <div className="max-w-4xl mx-auto">
                {/* Hoofdtitel */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Het Verleden: Hoe Zijn We Hier Beland?
                    </h2>
                    <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
                    <p className="text-xl md:text-2xl text-neutral-300 font-light">
                        Van honger naar overvloed in minder dan één generatie
                    </p>
                </div>

                {/* Introductietekst */}
                <div className="prose prose-lg prose-invert max-w-none">
                    <p className="text-lg md:text-xl leading-relaxed text-neutral-200 mb-6">
                        Veel mensen zijn opgegroeid met concepten als Joris Driepinter, de Melkbrigade, "Melk is goed voor elk", en het idee dat een maaltijd pas écht compleet is met vlees erbij. Dit is geen toeval. Na de vele doden door honger in de oorlog en Hongerwinter werd "Nooit meer honger" het motto dat het beleid ging leiden. Het doel was duidelijk: meer, groter, sneller. Maar wat leek op vooruitgang, had een prijs: het ontstaan van de{' '}
                        <span className="relative group inline-block">
                            <span className="border-b border-dotted border-emerald-400 cursor-help">
                                intensieve vee-industrie
                            </span>
                            <span className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100
                                            bg-neutral-800 text-white text-sm px-3 py-2 rounded-md
                                            whitespace-nowrap -top-10 left-1/2 transform -translate-x-1/2
                                            transition-all duration-200 z-10
                                            after:absolute after:top-full after:left-1/2 after:-translate-x-1/2
                                            after:border-4 after:border-transparent after:border-t-neutral-800">
                                Ook wel bekend als de bio-industrie
                            </span>
                        </span>.
                    </p>

                    <p className="text-lg md:text-xl leading-relaxed text-neutral-200 mb-8">
                        Bekijk de tijdlijn hieronder om belangrijke momenten in de geschiedenis te zien die hebben bijgedragen aan de intensieve vee-industrie in Nederland.
                    </p>

                    {/* Call to action */}
                    <div className="text-center pt-6 border-t border-neutral-700">
                        <p className="text-neutral-400 flex items-center justify-center gap-2 mb-2">
                            <Calendar size={20} className="text-emerald-400" />
                            <span className="text-sm">Klik op een jaar om de volledige context te lezen</span>
                        </p>
                        <p className="text-xs text-neutral-500">
                            ↓ Scroll naar beneden om de interactieve tijdlijn te verkennen
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}