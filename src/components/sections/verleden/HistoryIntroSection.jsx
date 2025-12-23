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
                        De Nederlandse vee-industrie zoals we die nu kennen is <strong className="text-white">geen toeval</strong>.
                        Het is het resultaat van bewuste keuzes, politieke besluiten en economische druk die na de
                        Tweede Wereldoorlog in gang zijn gezet.
                    </p>

                    <p className="text-lg md:text-xl leading-relaxed text-neutral-200 mb-6">
                        Het begon met een trauma: de Hongerwinter van 1944-1945. Duizenden Nederlanders stierven van
                        de honger. <em className="text-emerald-300">"Nooit meer honger"</em> werd het motto dat decennialang
                        alle beleidskeuzes zou sturen. Voedselzekerheid was het doel. Wat volgde was een ongekende transformatie.
                    </p>

                    {/* Highlight box */}
                    <div className="bg-emerald-900/30 border-l-4 border-emerald-500 p-6 my-8 rounded-r-lg">
                        <p className="text-lg text-emerald-100 mb-0">
                            Binnen 30 jaar veranderde Nederland van een land met voedseltekorten in een
                            <strong className="text-white"> exportmacht voor vlees en zuivel</strong>. Maar die
                            overgang kwam niet vanzelf – het was het werk van overheden, marketeers en internationale
                            hulpprogramma's.
                        </p>
                    </div>

                    <p className="text-lg md:text-xl leading-relaxed text-neutral-200 mb-8">
                        De onderstaande tijdlijn toont de keerpunten: van het Crisis Zuivelbureau in de jaren '30
                        tot de stikstofcrisis van vandaag. Van Marshallhulp tot Melk-brigades. Van nationale
                        voedselzekerheid tot Europese exportmachine.
                    </p>

                    {/* Call to action */}
                    <div className="text-center pt-6 border-t border-neutral-700">
                        <p className="text-neutral-400 flex items-center justify-center gap-2 mb-2">
                            <Calendar size={20} className="text-emerald-400" />
                            <span className="text-sm">Klik op een jaar om de volledige context te lezen</span>
                        </p>
                        <p className="text-xs text-neutral-500">
                            ↓ Scroll om de interactieve tijdlijn te verkennen
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}