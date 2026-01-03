import React from 'react';

const IntroductionSection = () => {
    return (
        <section className="bg-neutral-50 text-black py-16 md:py-24 px-6">
            <article className="max-w-3xl mx-auto">
                {/* Optioneel: kleine foto/avatar */}
                <div className="flex flex-col items-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-black mb-2">
                        Beste lezer,
                    </h2>
                </div>

                {/* Intro tekst met drop cap */}
                <div className="prose prose-lg md:prose-xl max-w-none text-black">
                    <p className="text-lg md:text-xl leading-relaxed mb-6 first-letter:text-7xl first-letter:font-bold first-letter:text-emerald-700 first-letter:mr-3 first-letter:float-left first-letter:leading-none first-letter:mt-1 text-black">
                        Terwijl ik dit schrijf, staat het nieuws er weer vol van: een kat overleden aan vogelgriep, overgedragen door pluimvee (<a href="https://nos.nl/artikel/2592930-jonge-katjes-dood-door-vogelgriep-moeten-de-baasjes-zich-zorgen-maken" className="text-emerald-700 hover:text-emerald-800 underline" target="_blank" rel="noopener noreferrer">nos.nl</a>). Verborgen camera's in stallen waar koeien worden getaserd, geschopt en kalveren kreupel op transport worden gezet (<a href="https://www.ongehoord.nl/onderzoek/uitgemolken-transport-koeien-kalfjes" className="text-emerald-700 hover:text-emerald-800 underline" target="_blank" rel="noopener noreferrer">ongehoord.nl</a>). Het zijn horrorscenario's die laten zien hoeveel impact deze manier van vee-industrie heeft.
                    </p>

                    <p className="text-lg md:text-xl leading-relaxed mb-6 text-black">
                        Toch eet ik nog steeds zuivel. Kaas op mijn toast, kookroom door de pasta, Chocomel in de winter. Ik weet wat het betekent: meer stikstof en meer dieren in onmogelijke omstandigheden. Maar dit verhaal gaat niet over mijn hypocrisie, of die van jou.
                    </p>

                    <p className="text-lg md:text-xl leading-relaxed mb-6 text-black">
                        Het gaat over een hele andere vraag: <em className="text-black">Hoe kan een sector met zulke duidelijke en bekende problemen — voor klimaat, volksgezondheid en dieren — gewoon doorgaan alsof er niets aan de hand is?</em>
                    </p>

                    {/* Highlight box met kernvragen */}
                    <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 my-8 rounded-r-lg">
                        <p className="text-lg font-medium text-black mb-2">
                            Wie profiteert? Hoe is dit begonnen? Wie houdt dit in stand? En kan het anders?
                        </p>
                    </div>

                    <p className="text-lg md:text-xl leading-relaxed mb-6 text-black">
                        De afgelopen maanden ben ik in die vragen gedoken. Wat ik vond, was geen simpele "blame game", maar een netwerk van macht, lobby en historische keuzes. Een industrie die niet toevallig is ontstaan, maar is ontworpen. En wat ontworpen is, kan ook worden herontworpen.
                    </p>

                    <p className="text-lg md:text-xl leading-relaxed mb-8 text-black">
                        Wat jij met deze informatie doet, bepaal je zelf. Maar elke hap die je neemt staat in verbinding met politiek, geld en macht. En juist daar ligt de verantwoordelijkheid voor de echte verandering. Individuele keuzes maken verschil, maar echte verandering vraagt om meer dan alleen de consument.
                    </p>

                    {/* Call to action */}
                    <div className="text-center mt-12 pt-8 border-t border-neutral-200">
                        <p className="text-2xl font-light text-black mb-4">
                            Laten we beginnen.
                        </p>
                        <p className="text-sm text-black italic">
                            — Danae
                        </p>

                        {/* Scroll indicator */}
                        <div className="mt-8 flex flex-col items-center text-emerald-600">
                            <span className="text-sm mb-2 text-black">Scroll om verder te gaan</span>
                            <svg
                                className="w-6 h-6 animate-bounce"
                                fill="none"
                                strokeWidth="2"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    );
};

export default IntroductionSection;