import React from 'react';

const IntroductionSection = () => {
    return (
        <section className="bg-neutral-50 text-neutral-900 py-16 md:py-24 px-6">
            <article className="max-w-3xl mx-auto">
                {/* Optioneel: kleine foto/avatar */}
                <div className="flex flex-col items-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-2">
                        Beste lezer,
                    </h2>
                </div>

                {/* Intro tekst met drop cap */}
                <div className="prose prose-lg md:prose-xl max-w-none">
                    <p className="text-lg md:text-xl leading-relaxed mb-6 first-letter:text-7xl first-letter:font-bold first-letter:text-emerald-700 first-letter:mr-3 first-letter:float-left first-letter:leading-none first-letter:mt-1">
                        Ik eet nog steeds zuivel. Bijna elke dag. Kaas op mijn toast, kookroom door de pasta, chocomel nu het weer kouder wordt. En ik weet precies wat dat betekent: meer methaan, meer stikstof, meer dieren in onmogelijke omstandigheden. <strong>Toch ben ik hier niet om je schuldgevoel aan te praten.</strong>
                    </p>

                    <p className="text-lg md:text-xl leading-relaxed mb-6 text-neutral-700">
                        Ik ben hier omdat ik een veel interessantere vraag heb ontdekt: <em>hoe kan het dat een sector met zulke grote en bekende problemen zoals klimaatverandering, schade aan de gezondheid en grootschalig dierenleed gewoon doorgaat alsof er niets aan de hand is?</em>
                    </p>

                    {/* Highlight box met kernvragen */}
                    <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 my-8 rounded-r-lg">
                        <p className="text-lg font-medium text-emerald-900 mb-2">
                            Wie profiteert ervan?
                        </p>
                        <p className="text-lg font-medium text-emerald-900 mb-2">
                            Wie houden dit systeem in stand?
                        </p>
                        <p className="text-lg font-medium text-emerald-900">
                            En waarom voelt verandering zo onmogelijk?
                        </p>
                    </div>

                    <p className="text-lg md:text-xl leading-relaxed mb-6 text-neutral-700">
                        De afgelopen maanden ben ik in die vraag gedoken. Ik sprak met verschillende mensen, van deskundigen op het gebied van lobby's tot de consument zelf. Ik dook in artikelen, verslagen en oude reclames. En wat ik vond, was veel interessanter dan simpele schuldverdeling.
                    </p>

                    <p className="text-lg md:text-xl leading-relaxed mb-6 text-neutral-700">
                        Dit netwerk is <strong>niet toevallig ontstaan</strong>. Het is <strong>opgebouwd</strong>. Ontworpen. En dat betekent dat het ook kan worden <strong>afgebroken en opnieuw ingericht</strong> kan worden. Dat is het belangrijkste inzicht dat ik je wil meegeven: <span className="text-emerald-700 font-semibold">wat door mensen is gemaakt, kan door mensen worden veranderd.</span>
                    </p>

                    <p className="text-lg md:text-xl leading-relaxed mb-8 text-neutral-700">
                        Wat jij met deze informatie doet, bepaal je zelf. Maar ik hoop wel dat je na het lezen begrijpt hoe macht, geld en politiek meespelen in elke hap en dat iedereen onderdeel is van dit systeem, of je dit nou wilt of niet. Maar dat betekent ook dat we allemaal deel kunnen zijn van de oplossing.
                    </p>

                    {/* Call to action */}
                    <div className="text-center mt-12 pt-8 border-t border-neutral-200">
                        <p className="text-2xl font-light text-neutral-600 mb-4">
                            Laten we beginnen.
                        </p>
                        <p className="text-sm text-neutral-500 italic">
                            — Danae
                        </p>

                        {/* Scroll indicator */}
                        <div className="mt-8 flex flex-col items-center text-emerald-600">
                            <span className="text-sm mb-2">Scroll om verder te gaan</span>
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