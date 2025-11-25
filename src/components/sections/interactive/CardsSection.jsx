import { useState } from 'react';

export default function CardsSection() {
    const [flipped, setFlipped] = useState({});

    const toggleFlip = (id) => {
        setFlipped(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const cards = [
        {
            id: 'veevoer',
            icon: '🌾',
            title: 'Veevoerbedrijven',
            subtitle: 'De Heus, ForFarmers, Agrifirm',
            backTitle: 'Het Belang: Meer Dieren = Meer Omzet',
            backContent: (
                <>
                    <p><strong>Voorbeeld: De Heus Kidzz</strong></p>
                    <p>Via het overheidsprogramma 'Jong Leren Eten' verspreidt De Heus lesmateriaal op basisscholen. Kinderen leren over 'het boerderijleven' - maar zien alleen zonnige beelden van biggen met buitenruimte.</p>
                    <p><strong>De realiteit:</strong> Slechts 1% van de Nederlandse biggen heeft toegang tot buiten.</p>
                    <p><strong>Financieel belang:</strong> De Heus steunde in 2022 de felle boerenprotesten tegen stikstofbeleid.</p>
                    <p><strong>Directe belangen:</strong> ForFarmers en Agrifirm ondersteunden de protesten in Stroe financieel. De Heus is aandeelhouder van Plukon Food Group - dus zowel belang via veevoerverkoop als via aandeelhouderschap.</p>
                </>
            )
        },
        {
            id: 'verwerkers',
            icon: '🏭',
            title: 'Vleesverwerkers',
            subtitle: 'Vion, VanDrie, Plukon',
            backTitle: 'De Machtspositie',
            backContent: (
                <>
                    <p>Vleesverwerkers bepalen wat boeren voor hun dieren krijgen. Door hun marktpositie kunnen ze prijzen drukken.</p>
                    <p><strong>Voorbeeld: VanDrie & Agrifacts</strong></p>
                    <p>VanDrie sponsort (samen met De Heus en Royal A-Ware) Stichting Agrifacts met €225.000 per jaar.</p>
                    <p>Deze 'onderzoeksorganisatie' bestrijdt systematisch stikstofcijfers van de overheid - terwijl een van hun 'onderzoeksjournalisten' tegelijk communicatieadviseur is van de varkenshouderij.</p>
                    <p><strong>Innovatie:</strong> Plukon werkt ook met ngo's (Dierenbescherming, Wakker Dier) en nam in 2023 het Belgische Vega Insiders over voor plantaardige alternatieven.</p>
                </>
            )
        },
        {
            id: 'zuivel',
            icon: '🧈',
            title: 'Zuivelbewerkers',
            subtitle: 'FrieslandCampina, Arla, Vreugdenhil',
            backTitle: 'Het Verdienmodel: Constante Melkstroom',
            backContent: (
                <>
                    <p>Hun winstmodel is direct gekoppeld aan een grote stroom melk. Zij hebben economisch belang bij handhaving van het huidige productieniveau.</p>
                    <p><strong>Sloopmelk:</strong> Ongeveer 90% van zuivel in het schap komt van doorgefokte koeien. Dit houdt prijzen laag maar schaadt dierenwelzijn.</p>
                    <p><strong>Greenwashing:</strong> Melkunie (Arla) is veroordeeld door de Reclame Code Commissie voor misleidende milieinclaims op verpakkingen.</p>
                    <p><strong>Onderwijs-lobby:</strong> Ongeveer 450 scholen gebruiken lesmateriaal van de zuivelindustrie. Scholen krijgen gratis schoolmelk, maar moeten verplicht lesmateriaal afnemen.</p>
                    <p><strong>Gezondheidsmisinformatie:</strong> NZO stelt zuivel als essentieel voor, maar wetenschappelijk onderzoek (New England Journal of Medicine) toont dit aan.</p>
                </>
            )
        },
        {
            id: 'banken',
            icon: '🏦',
            title: 'Banken',
            subtitle: 'Rabobank, ING, ABN AMRO',
            backTitle: 'De Geldkraan',
            backContent: (
                <>
                    <p>Zonder bankleningen kunnen boeren niet investeren. Hoe groter en intensiever, hoe meer leningen en rente.</p>
                    <p><strong>Het probleem:</strong> Boeren die wilden verduurzamen krijgen moeilijk financiering. Rabobank reageert sceptisch op biologische transformatie.</p>
                    <p><strong>Financiering van schade:</strong> Tussen 2000-2023 financierde Rabobank sectoren met ontbossing in Brazilië voor €10 miljard - met €66 miljard maatschappelijke schade.</p>
                    <p><strong>Globale Impact:</strong> Rabobank investeerde 2016-2024 €23,5 miljard in 52 grote vlees- en zuivelbedrijven (JBS, Tyson Foods) met ernstige dierenwelzijnsproblemen.</p>
                    <p><strong>Greenpeace berekening:</strong> Tegenover elke euro winst staat minimaal €94 aan maatschappelijke schade.</p>
                </>
            )
        },
        {
            id: 'farmacie',
            icon: '💊',
            title: 'Vee-Farmacie',
            subtitle: 'MSD Animal Health, Zoetis, Kernfarm',
            backTitle: 'Het Verdienmodel: Meer Dieren = Meer Verkoop',
            backContent: (
                <>
                    <p>Deze bedrijven produceren geneesmiddelen, vaccins en gezondheidsproducten. Hun afzetmarkt groeit naarmate de veestapel groter is en meer gezondheidsroblemen heeft.</p>
                    <p><strong>Antibioticacrisis:</strong> Nederlands antibioticumgebruik in veehouderij was hoog vergeleken met Europa.</p>
                    <p><strong>Positieve ontwikkeling:</strong> Tussen 2009-2020 daalde antibioticagebruik met ruim 69% dankzij strenger beleid.</p>
                    <p><strong>Monitoring:</strong> De Stichting Diergeneesmiddelen Autoriteit (SDa) monitort jaarlijks het gebruik en verzamelt data over resistente bacteriën.</p>
                </>
            )
        },
        {
            id: 'retail',
            icon: '🛒',
            title: 'Supermarkten',
            subtitle: 'Albert Heijn, Jumbo, Plus',
            backTitle: 'De Middenman: Prijsbepaling en Controle',
            backContent: (
                <>
                    <p>Supermarkten bepalen voor groot deel de prijzen. Lage inkoopprijzen en hoge verkoopcijfers ondersteunen intensieve veehouderij.</p>
                    <p><strong>Machtspositie:</strong> Ze controleren prijsbepaling, aanbiedingen en consumentencommunicatie via reclame.</p>
                    <p><strong>EU-subsidies:</strong> Greenpeace-rapport (2021) toont: 2016-2020 ging €252 miljoen naar promotie van vlees & zuivel (32% van totaal), tegenover slechts 19% voor groenten & fruit.</p>
                    <p><strong>Prijspolitiek:</strong> Producenten stellen hogere kosten in, maar veel hiervan worden niet doorberekend. Toch blijven prijzen hoog.</p>
                </>
            )
        }
    ];

    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cards.map(card => (
                    <div
                        key={card.id}
                        className="h-96 cursor-pointer perspective"
                        onClick={() => toggleFlip(card.id)}
                    >
                        <div
                            className="relative w-full h-full transition-transform duration-500 ease-out"
                            style={{
                                transformStyle: 'preserve-3d',
                                transform: flipped[card.id] ? 'rotateY(180deg)' : 'rotateY(0deg)'
                            }}
                        >
                            {/* Front */}
                            <div
                                className="absolute w-full h-full rounded-lg p-6 text-white flex flex-col justify-center items-center text-center shadow-lg"
                                style={{ backfaceVisibility: 'hidden', backgroundColor: '#064e3b' }}
                            >
                                <div className="text-5xl mb-4">{card.icon}</div>
                                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                                <p className="text-sm opacity-90">{card.subtitle}</p>
                            </div>

                            {/* Back */}
                            <div
                                className="absolute w-full h-full bg-white rounded-lg p-6 shadow-lg overflow-y-auto"
                                style={{
                                    backfaceVisibility: 'hidden',
                                    transform: 'rotateY(180deg)'
                                }}
                            >
                                <h4 className="font-bold text-lg mb-3" style={{ color: '#064e3b' }}>{card.backTitle}</h4>
                                <div className="text-sm space-y-2 text-gray-700">
                                    {card.backContent}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 text-center text-gray-600 text-sm">
                <p>Klik op een kaart om meer te ontdekken</p>
            </div>
        </div>
    );
}