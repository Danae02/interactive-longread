import React, { useState } from 'react';

const IntroductionSection = () => {
    const [showVideo, setShowVideo] = useState(false);
    const [showWarning, setShowWarning] = useState(false);

    const handleVideoClick = () => {
        setShowWarning(true);
    };

    const handleConfirmWatch = () => {
        setShowWarning(false);
        setShowVideo(true);
    };

    const handleCancelWatch = () => {
        setShowWarning(false);
    };

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

                    {/* Video sectie met trigger warning */}
                    <div className="my-8">
                        <div className="bg-neutral-100 p-6 rounded-lg border border-neutral-300">
                            <h3 className="text-xl font-bold mb-3 text-black">
                                Verborgen camera's - Transport van koeien en kalfjes (Ongehoord,  9 december 2025)
                            </h3>

                            <p className="mb-4 text-black">
                                Ongehoord legde met verborgen camera's het in- en uitladen van dieren vast op vijf locaties in Nederland. Op alle bedrijven worden koeien en kalfjes geschopt, geslagen met stokken of opgejaagd met stroomstootwapens.
                            </p>

                            {!showVideo && !showWarning && (
                                <div className="space-y-4">
                                    <div className="flex items-start p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                                        <svg className="w-6 h-6 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                                        </svg>
                                        <div>
                                            <p className="font-medium text-black mb-1">
                                                Waarschuwing: Deze video bevat schokkende beelden
                                            </p>
                                            <p className="text-sm text-black">
                                                Bevat expliciete scenes van dierenleed, geweld en lijden.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <button
                                            onClick={handleVideoClick}
                                            className="flex-1 py-3 px-4 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            Toon video
                                        </button>

                                    </div>

                                </div>
                            )}

                            {showWarning && (
                                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50">
                                    <div className="bg-white rounded-xl max-w-md w-full p-6 shadow-2xl">
                                        <div className="flex items-start mb-4">
                                            <div className="bg-red-100 p-3 rounded-full mr-4">
                                                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                                                </svg>
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <button
                                                onClick={handleConfirmWatch}
                                                className="w-full py-3 px-4 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
                                            >
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                Ik begrijp het risico en wil toch kijken
                                            </button>

                                            <button
                                                onClick={handleCancelWatch}
                                                className="w-full py-3 px-4 border border-neutral-300 text-neutral-700 font-medium rounded-lg hover:bg-neutral-50 transition-colors"
                                            >
                                                Annuleren, liever niet bekijken
                                            </button>

                                            <button
                                                onClick={() => {
                                                    window.open('https://www.trouw.nl/duurzaamheid-economie/mishandeling-koeien-en-kalfjes-hoort-bij-de-melkindustrie~b9c74a5c/', '_blank');
                                                    handleCancelWatch();
                                                }}
                                                className="w-full py-3 px-4 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2"
                                            >
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                </svg>
                                                Lees een nieuwsbericht zonder de beelden
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {showVideo && (
                                <div className="mt-4 space-y-4">
                                    <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-lg">
                                        <iframe
                                            src="https://player.vimeo.com/video/1144475999?title=0&byline=0&portrait=0&color=00cc66"
                                            width="100%"
                                            height="100%"
                                            frameBorder="0"
                                            allow="autoplay; fullscreen; picture-in-picture"
                                            allowFullScreen
                                            title="Onderzoeksbeelden varkensindustrie - Varkens in Nood (2024)"
                                        ></iframe>
                                    </div>


                                    <div className="text-center">
                                        <button
                                            onClick={() => setShowVideo(false)}
                                            className="px-4 py-2 border border-neutral-300 text-neutral-700 rounded-lg hover:bg-neutral-50 transition-colors"
                                        >
                                            Video verbergen
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

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