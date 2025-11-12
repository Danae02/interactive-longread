import React, { useState } from 'react';

const FlipCard = ({ icon, title, subtitle, backContent }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className="relative h-96 cursor-pointer perspective-1000"
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <div
                className={`relative w-full h-full transition-transform duration-600 transform-style-3d ${
                    isFlipped ? 'rotate-y-180' : ''
                }`}
                style={{
                    transformStyle: 'preserve-3d',
                    transition: 'transform 0.6s'
                }}
            >
                {/* Front */}
                <div
                    className="absolute w-full h-full backface-hidden rounded-lg shadow-lg p-8 flex flex-col justify-center items-center text-center text-white"
                    style={{
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        backfaceVisibility: 'hidden'
                    }}
                >
                    <div className="text-6xl mb-4">{icon}</div>
                    <h3 className="text-2xl font-bold mb-2">{title}</h3>
                    <p className="text-lg opacity-90">{subtitle}</p>
                </div>

                {/* Back */}
                <div
                    className="absolute w-full h-full backface-hidden rounded-lg shadow-lg p-8 bg-white overflow-y-auto"
                    style={{
                        transform: 'rotateY(180deg)',
                        backfaceVisibility: 'hidden'
                    }}
                >
                    {backContent}
                </div>
            </div>
        </div>
    );
};

const FlipCardsGrid = () => {
    const cardsData = [
        {
            icon: '🌾',
            title: 'Veevoerbedrijven',
            subtitle: 'De Heus, ForFarmers, Agrifirm',
            backContent: (
                <div className="text-gray-800">
                    <h4 className="text-xl font-bold mb-4 text-gray-900">
                        Het Belang: Meer Dieren = Meer Omzet
                    </h4>
                    <p className="mb-3">
                        <strong>Voorbeeld: De Heus Kidzz</strong>
                    </p>
                    <p className="mb-3">
                        Via het overheidsprogramma 'Jong Leren Eten' verspreidt De Heus lesmateriaal op basisscholen.
                        Kinderen leren over 'het boerderijleven' - maar zien alleen zonnige beelden van biggen met buitenruimte.
                    </p>
                    <p className="mb-3">
                        <strong>De realiteit:</strong> Slechts 1% van de Nederlandse biggen heeft toegang tot buiten.
                    </p>
                    <p className="mb-0">
                        <strong>Financieel belang:</strong> De Heus steunde in 2022 de felle boerenprotesten tegen stikstofbeleid.
                    </p>
                </div>
            )
        },
        {
            icon: '🏭',
            title: 'Vleesverwerkers',
            subtitle: 'Vion, VanDrie, Plukon',
            backContent: (
                <div className="text-gray-800">
                    <h4 className="text-xl font-bold mb-4 text-gray-900">De Machtspositie</h4>
                    <p className="mb-3">
                        Vleesverwerkers bepalen wat boeren voor hun dieren krijgen. Door hun marktpositie kunnen ze prijzen drukken.
                    </p>
                    <p className="mb-3">
                        <strong>Voorbeeld: VanDrie & Agrifacts</strong>
                    </p>
                    <p className="mb-3">
                        VanDrie sponsort (samen met De Heus en Royal A-Ware) Stichting Agrifacts met €225.000 per jaar.
                    </p>
                    <p className="mb-0">
                        Deze 'onderzoeksorganisatie' bestrijdt systematisch stikstofcijfers van de overheid - terwijl een van
                        hun 'onderzoeksjournalisten' tegelijk communicatieadviseur is van de varkenshouderij.
                    </p>
                </div>
            )
        },
        {
            icon: '🏦',
            title: 'Banken',
            subtitle: 'Rabobank, ING, ABN AMRO',
            backContent: (
                <div className="text-gray-800">
                    <h4 className="text-xl font-bold mb-4 text-gray-900">De Geldkraan</h4>
                    <p className="mb-3">
                        Zonder bankleningen kunnen boeren niet investeren in stallen, machines of dieren.
                    </p>
                    <p className="mb-3">
                        <strong>Het probleem:</strong> Boeren die wilden verduurzamen kregen van Rabobank geen lening.
                        Biologische boeren werden geweigerd door FrieslandCampina.
                    </p>
                    <p className="mb-3">
                        <strong>Het belang:</strong> Hoe groter en intensiever de boerderij, hoe meer lening, hoe meer rente.
                    </p>
                    <p className="mb-0">
                        Greenpeace becijferde: tegenover elke euro winst van Rabobank staat minimaal €94 aan maatschappelijke schade.
                    </p>
                </div>
            )
        },
        {
            icon: '🛒',
            title: 'Supermarkten',
            subtitle: 'Albert Heijn, Jumbo, Plus',
            backContent: (
                <div className="text-gray-800">
                    <h4 className="text-xl font-bold mb-4 text-gray-900">De Prijsbepalers</h4>
                    <p className="mb-3">
                        Supermarkten bepalen voor een groot deel wat consumenten betalen én wat boeren verdienen.
                    </p>
                    <p className="mb-2">
                        <strong>De strategie:</strong>
                    </p>
                    <ul className="list-disc pl-5 mb-3 space-y-1">
                        <li>Vlees en zuivel constant in de aanbieding</li>
                        <li>Verliesleiders: goedkoop vlees trekt klanten</li>
                        <li>Druk op de keten om kosten laag te houden</li>
                    </ul>
                    <p className="mb-0">
                        <strong>Het gevolg:</strong> Consumenten wennen aan lage prijzen. Boeren moeten efficiënter.
                        Het systeem intensiveert verder.
                    </p>
                </div>
            )
        },
        {
            icon: '💊',
            title: 'Vee-farmacie',
            subtitle: 'MSD, Zoetis, Kernfarm',
            backContent: (
                <div className="text-gray-800">
                    <h4 className="text-xl font-bold mb-4 text-gray-900">Medicijnen voor het Systeem</h4>
                    <p className="mb-3">
                        Hoe meer dieren op kleine ruimte, hoe meer gezondheidsproblemen. Hoe meer problemen,
                        hoe meer vaccins en medicijnen nodig.
                    </p>
                    <p className="mb-3">
                        <strong>Het paradox:</strong> Deze bedrijven verdienen aan de problemen die het intensieve systeem creëert.
                    </p>
                    <p className="mb-0">
                        <strong>Hun belang:</strong> Een gezonde, extensieve veehouderij met minder dieren is minder winstgevend.
                    </p>
                </div>
            )
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12 text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        De Spelers: Wie Doet Wat
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Elk onderdeel van dit systeem heeft zijn eigen rol, eigen belangen, en eigen manier om invloed uit te oefenen.
                        Klik op de kaarten om de concrete voorbeelden te zien.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cardsData.map((card, index) => (
                        <FlipCard
                            key={index}
                            icon={card.icon}
                            title={card.title}
                            subtitle={card.subtitle}
                            backContent={card.backContent}
                        />
                    ))}
                </div>

                <div className="mt-12 text-center text-gray-500 text-sm">
                    <p>💡 Tip: Klik op een kaart om deze om te draaien en meer te lezen</p>
                </div>
            </div>

            <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
        </div>
    );
};

export default FlipCardsGrid;