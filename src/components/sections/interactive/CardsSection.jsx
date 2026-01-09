import { useState, useRef, useEffect } from 'react';

export default function CardsSection() {
    const [flipped, setFlipped] = useState({});
    const [focusedCard, setFocusedCard] = useState(null);
    const cardRefs = useRef({});
    const closeButtonRefs = useRef({});

    const toggleFlip = (id) => {
        setFlipped(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const handleKeyDown = (e, id) => {
        switch(e.key) {
            case 'Enter':
            case ' ':
                e.preventDefault();
                toggleFlip(id);
                // Focus naar sluitknop als kaart opent
                if (!flipped[id] && closeButtonRefs.current[id]) {
                    setTimeout(() => closeButtonRefs.current[id].focus(), 100);
                }
                break;
            case 'Escape':
                if (flipped[id]) {
                    toggleFlip(id);
                    // Focus terug naar hoofdknop
                    if (cardRefs.current[id]) {
                        setTimeout(() => cardRefs.current[id].focus(), 100);
                    }
                }
                break;
            case 'Tab':
                // Bij Tab op sluitknop, verder naar volgende element buiten kaart
                if (flipped[id] && e.target === closeButtonRefs.current[id] && !e.shiftKey) {
                    e.preventDefault();
                    toggleFlip(id);
                    // Zoek volgende focusbaar element na deze kaart
                    const allCards = document.querySelectorAll('[data-card-id]');
                    const currentIndex = Array.from(allCards).findIndex(card => card.getAttribute('data-card-id') === id);
                    const nextCardIndex = (currentIndex + 1) % allCards.length;

                    if (nextCardIndex < allCards.length) {
                        const nextCard = allCards[nextCardIndex];
                        const mainButton = nextCard.querySelector('[data-main-button]');
                        if (mainButton) {
                            mainButton.focus();
                        }
                    }
                }
                break;
            case 'ArrowLeft':
            case 'ArrowRight':
                // Navigatie tussen kaarten met pijltjes
                e.preventDefault();
                const cards = document.querySelectorAll('[data-card-id]');
                const currentIndex = Array.from(cards).findIndex(card => card.getAttribute('data-card-id') === id);
                const nextIndex = e.key === 'ArrowRight'
                    ? (currentIndex + 1) % cards.length
                    : (currentIndex - 1 + cards.length) % cards.length;
                const nextCard = cards[nextIndex];
                const mainButton = nextCard.querySelector('[data-main-button]');
                if (mainButton) {
                    mainButton.focus();
                }
                break;
            default:
                break;
        }
    };

    const handleCloseButtonKeyDown = (e, id) => {
        switch(e.key) {
            case 'Enter':
            case ' ':
                e.preventDefault();
                toggleFlip(id);
                if (cardRefs.current[id]) {
                    setTimeout(() => cardRefs.current[id].focus(), 100);
                }
                break;
            case 'Escape':
                e.preventDefault();
                toggleFlip(id);
                if (cardRefs.current[id]) {
                    setTimeout(() => cardRefs.current[id].focus(), 100);
                }
                break;
            case 'Tab':
                if (e.shiftKey) {
                    // Shift+Tab vanaf sluitknop: terug naar hoofdknop
                    e.preventDefault();
                    if (cardRefs.current[id]) {
                        cardRefs.current[id].focus();
                    }
                }
                // Bij normale Tab: laat doorgaan naar volgende element
                break;
            default:
                break;
        }
    };

    const handleFocus = (id) => {
        setFocusedCard(id);
    };

    const cards = [
        {
            id: 'veevoer',
            icon: '🌾',
            title: 'Veevoerbedrijven',
            subtitle: 'Zoals De Heus, ForFarmers, Agrifirm',
            backTitle: 'Het Verdienmodel: Meer Dieren = Meer Omzet',
            backContent: (
                <>
                    <p>Deze bedrijven importeren en produceren voer voor de vee-industrie. Hun winstmodel is direct gekoppeld aan de grootte van de veestapel: hoe meer dieren, hoe meer verkoop van veevoer. Zij hebben dus een direct economisch belang bij het gelijk houden of vergroten van het aantal dieren.</p>

                    <p><strong>Voorbeeld: De Heus Kidzz & Onderwijs-lobby</strong></p>
                    <p>Via het overheidsprogramma 'Jong Leren Eten' (ministerie LNV) verspreidt De Heus via Boerderij Educatie Nederland lesmateriaal op basisscholen. Kinderen leren over 'het boerderijleven' - maar zien alleen zonnige beelden van biggen met buitenruimte, terwijl slechts 1% van de Nederlandse biggen buitenruimte heeft. <a href="https://www.bnnvara.nl/joop/artikelen/de-gedachtepolitie-van-de-veevoedersector-dringt-het-brein-van-kinderen-binnen#:~:text=De%20Heus%20verspreidt%20via%20zogenaamde%20boerderijlessen%20binnen%20het%20overheidsprogramma%20voor%20voedseleducatie%20misleidende%20informatie%20over%20het%20leven%20van%20dieren%20op%20boerderijen%20waarbij%20biggen%20een%20zonnige%20buitenruimte%20hebben%20bij%20de%20stal%2C%20terwijl%20zij%20die%20feitelijk%20maar%20in%201%25%20van%20de%20gevallen%20in%20Nederland%20hebben." target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-1">[bron]</a></p>

                    <p><strong>Steun aan boerenprotesten:</strong></p>
                    <p>De Heus, in handen van de gelijknamige familie en een grote speler in het Nederlandse agro-economische complex, steunde in 2022 de felle boerenprotesten tegen het stikstofbeleid. <a href="https://www.volkskrant.nl/economie/nederlands-veevoederbedrijf-steunt-russen-aan-het-front-in-oekraine~bb5bf9cf/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-1">[bron]</a></p>
                    <p>ForFarmers en Agrifirm ondersteunden de protesten in Stroe financieel, maar willen niet zeggen met hoeveel geld. <a href="https://www.nu.nl/binnenland/6210695/miljardenconcerns-hebben-flinke-vinger-in-de-pap-bij-boerenprotesten.html#:~:text=Veevoederbedrijf%20ForFarmers%20en%20co%C3%B6peratie%20Agrifirm%20laten%20aan%20NU.nl%20weten%20dat%20ze%20de%20protesten%20in%20Stroe%20financieel%20hebben%20ondersteund%2C%20maar%20willen%20niet%20zeggen%20met%20hoeveel%20geld" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-1">[bron]</a></p>

                    <p><strong>Directe en indirecte belangen:</strong> De Heus is aandeelhouder van Plukon Food Group - dus zowel belang via veevoerverkoop als via aandeelhouderschap in een pluimveeverwerker. <a href="https://en.wikipedia.org/wiki/Plukon_Food_Group#:~:text=The%20group%20has%20three%20shareholders%3A%20the%20German%20EW%20Group%2C%20the%20Dutch%20feed%20company%20De%20Heus%2C%20and%20the%20directors%20around%20Peter%20Poortinga%2C%20who%20together%20own%2025%25%20of%20the%20shares" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-1">[bron]</a></p>
                </>
            )
        },
        {
            id: 'verwerkers',
            icon: '🥩',
            title: 'Vleesverwerkers',
            subtitle: 'Zoals Vion, VanDrie, Plukon',
            backTitle: 'De Machtspositie',
            backContent: (
                <>
                    <p>Vleesverwerkers zijn de middenman tussen boeren en supermarkten. Zij kopen de dieren, slachten ze en maken er vleesproducten van. Door hun machtspositie bepalen zij vaak wat de boer verdient, wat druk zet op boeren om tegen lagere kosten te produceren en leidt tot intensivering en schaalvergroting.</p>

                    <p><strong>Financiële steun aan boerenprotesten:</strong> Vleesverwerker Vion heeft duizenden euro's bijgedragen aan het boerenprotest. <a href="https://www.rtl.nl/economie/bedrijven/artikel/4886816/boeren-protest-demonstraties-agrarische-sector-frieslandcampina#:~:text=vleesverwerker%20Vion%20duizenden%20euro%27s%20heeft%20bijgedragen%20aan%20het%20boerenprotest%20van%20gisteren.%20Ook%20veevoederbedrijven%C2%A0ForFarmers%20en%20De%20Heus%20betaalden%20mee" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-1">[bron]</a></p>

                    <p><strong>Voorbeeld: VanDrie & Stichting Agrifacts</strong></p>
                    <p>VanDrie Group ondersteunt samen met De Heus Voeders en Royal A-Ware drie jaar lang Stichting Agrifacts (STAF) <a href="https://stichtingagrifacts.nl/agrifacts-breidt-onderzoekscapaciteit-uit-dankzij-steun-van-sponsoren/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-1">[bron]</a> met een gezamenlijke sponsorbijdrage van €225.000 per jaar.</p>
                    <p>Deze organisatie voert lobby tegen het Nederlandse stikstofbeleid en stelt stikstofcijfers van het ministerie standaard ter discussie. Eén van hun 'onderzoeksjournalisten' is tevens communicatieadviseur van de varkenshouderij-belangengroep POV. <a href="https://www.quotenet.nl/zakelijk/a40964514/boerenbedrog-agrifacts-de-heus-van-drie-jan-anker/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-1">[bron]</a></p>
                    <p>Wikipedia noemt Stichting Agrifacts een Nederlandse organisatie die lobby voert tegen het Nederlandse stikstofbeleid, waarbij een onderzoeksjournalist ook communicatieadviseur is van de varkenshouderij-belangengroep POV. <a href="https://nl.wikipedia.org/wiki/Agrifacts" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-1">[bron]</a></p>

                    <p><strong>Innovatie en plantaardige alternatieven:</strong> Plukon nam in 2023 het Belgische Vega Insiders over, producent van vegetarische en veganistische producten, om in te spelen op de groeiende vraag naar duurzame en plantaardige eiwitbronnen. <a href="https://www.eiwittrends.nl/plukon-neemt-vega-insiders-over/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-1">[bron]</a></p>
                </>
            )
        },
        {
            id: 'zuivel',
            icon: '🥛',
            title: 'Zuivelbewerkers',
            subtitle: 'Zoals FrieslandCampina, Arla, Vreugdenhil',
            backTitle: 'Het Verdienmodel: Constante Melkstroom',
            backContent: (
                <>
                    <p>Deze bedrijven kopen melk op bij duizenden boeren en verwerken deze tot zuivelproducten. Hun winstmodel is direct gekoppeld aan een constante en grote stroom melk. Elke verandering in de melkveestapel heeft directe gevolgen voor hun grondstofkosten en productievolume, waardoor ze een economisch belang hebben bij handhaving van het huidige productieniveau.</p>

                    <p><strong>Sloopmelk:</strong> Ongeveer 90% van de zuivel in het schap is sloopmelk, afkomstig van doorgefokte koeien die meer melk produceren dan goed voor ze is. Dit houdt prijzen laag maar schaadt dierenwelzijn. Leonie Vestering van Wakker Dier: "Ook bekende producten zoals Campina halfvolle melk, Danoontje en Melkunie Breaker worden gemaakt met sloopmelk." <a href="https://www.wakkerdier.nl/persberichten/wakker-dier-waarschuwt-voor-sloopmelk-in-a-merken/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-1">[bron]</a></p>

                    <p><strong>Greenwashing veroordeeld:</strong> Zuivelproducent Melkunie (van Arla) misleidt consumenten met greenwashing op zijn verpakkingen, oordeelde de Reclame Code Commissie na een klacht van Wakker Dier. <a href="https://www.wakkerdier.nl/persberichten/rcc-tikt-melkunie-op-vingers-voor-greenwashing/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-1">[bron]</a></p>

                    <p><strong>Onderwijs-lobby:</strong> Het afgelopen schooljaar gebruikten ongeveer 450 scholen het lesmateriaal van de zuivelindustrie. Om gratis schoolmelk te ontvangen, moeten scholen verplicht lesmateriaal afnemen dat is samengesteld door de zuivelsector (ZuivelNL en NZO). <a href="https://www.bnnvara.nl/joop/artikelen/zuivelsector-indoctrineert-schoolkinderen-met-misleidend-lesmateriaal#:~:text=Het%20afgelopen%20schooljaar,ZuivelNL%20en%20NZO" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-1">[bron]</a></p>

                    <p><strong>Gezondheidsmisinformatie:</strong> De Nederlandse Zuivel Organisatie (NZO) blijft volhouden dat zuivel essentieel is voor een goede gezondheid. Een gezaghebbende review in The New England Journal of Medicine concludeerde echter dat de vermeende voordelen niet zijn onderbouwd. <a href="https://www.bnnvara.nl/joop/artikelen/zuivel-is-een-bouwstof-voor-misleiding-het-is-tijd-voor-eerlijke-voedingskeuze" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-1">[bron]</a> De Reclame Code Commissie heeft de NZO meerdere keren veroordeeld voor ongegronde gezondheidsclaims.</p>
                </>
            )
        },
        {
            id: 'banken',
            icon: '🏦',
            title: 'Banken',
            subtitle: 'Zoals Rabobank, ING, ABN AMRO',
            backTitle: 'De Geldkraan',
            backContent: (
                <>
                    <p>Banken zijn de geldverschaffers van de vee-industrie. Zonder hun leningen kunnen boeren niet investeren in stallen, machines of dieren. Hoe groter de veestapel en hoe intensiever de veehouderij, hoe meer leningen en rente ze kunnen verdienen.</p>

                    <p><strong>Belemmering van verduurzaming:</strong> Boeren die willen verduurzamen, bijvoorbeeld door biologisch te worden, krijgen vaak moeilijk financiering rond. Bas Rüter: "Laten we reëel zijn. Het is niet veel geld verdienen in de Nederlandse landbouw op dit moment. De grondprijs enorm hoog... vaak is het zo dat de transformatie naar bijvoorbeeld biologisch, leidt tot minder koeien per hectare en minder liter en als gevolg minder saldo en dan vaak ook nog de wens om minder koeien te hebben. En als je dat bij elkaar optelt kan het vaak niet uit." <a href="https://www.youtube.com/watch?v=YDINOPHSqBM" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-1">[video bron]</a></p>

                    <p><strong>Financiering van ontbossing:</strong> Tussen 2000 en 2023 financierde Rabobank op grote schaal sectoren die bijdragen aan ontbossing en natuurverwoesting in Brazilië voor bijna $10 miljard, om plaats te maken voor industriële landbouw. Dit leverde Rabobank €717 miljoen winst op, maar veroorzaakte minstens €66 miljard aan maatschappelijke schade door klimaat-, milieu- en gezondheidsschade.</p>

                    <p>Tegenover elke euro winst van Rabobank uit deze financieringen staat minimaal €94 aan maatschappelijke schade door ontbossing en natuurvernietiging. <a href="https://www.greenpeace.org/nl/algemeen/59306/tegenover-elke-euro-winst-voor-rabobank-staat-minstens-94-euro-aan-maatschappelijke-schade/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-1">[bron]</a></p>

                    <p><strong>Global investeringen in vlees- en zuivel:</strong> Onderzoeksbureau Profundo berekende dat Rabobank tussen 2016 en 2024 voor €23,5 miljard investeerde in 52 van de grootste vlees- en zuivelbedrijven ter wereld, waaronder JBS en Tyson Foods. Deze bedrijven komen regelmatig in opspraak vanwege ernstige dierenwelzijnsschendingen. <a href="https://www.worldanimalprotection.nl/nieuws/oeso-klacht-tegen-rabobank-om-financieren-dierenleed/#:~:text=Onderzoeksbureau%20Profundo%20berekende,onderuit%20te%20halen" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-1">[bron]</a></p>
                </>
            )
        },
        {
            id: 'farmacie',
            icon: '💊',
            title: 'Veefarmacie',
            subtitle: 'MSD Animal Health, Zoetis, Kernfarm',
            backTitle: 'Het Verdienmodel: Meer Dieren = Meer Verkoop',
            backContent: (
                <>
                    <p>Deze grote bedrijven produceren geneesmiddelen, vaccins en gezondheidsproducten voor de vee-industrie. Hun verdienmodel is direct verbonden met de grootte en gezondheidsproblemen van de veestapel: hoe meer dieren en hoe meer problemen, des te groter de afzetmarkt voor hun producten.</p>

                    <p><strong>Positieve ontwikkeling:</strong> Het antibioticumgebruik in de Nederlandse veehouderij was vrij hoog vergeleken met andere Europese landen. Dit betrof varkens, kalveren, melkvee, pluimvee (leghennen, vleeskuikens en kalkoenen), konijnen en geiten. Tussen 2009 en 2020 daalde het gebruik van antibiotica in de veehouderij met ruim 69% dankzij strenger overheidsbeleid dat verplichtten veehouders het antibioticumgebruik te beperken. <a href="https://www.rijksoverheid.nl/onderwerpen/antibioticaresistentie/antibioticaresistentie-in-de-veehouderij" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-1">[bron]</a></p>

                    <p><strong>Monitoring en beheersing:</strong> De Stichting Diergeneesmiddelen Autoriteit (SDa) monitort jaarlijks het gebruik van antibiotica in de verschillende dierhouderijsectoren. In de MARAN-rapporten staan ook de resistente bacteriën die de SDa vindt, wat helpt bij het beheersen van antibioticaresistentie. <a href="https://www.rijksoverheid.nl/onderwerpen/antibioticaresistentie/antibioticaresistentie-in-de-veehouderij#:~:text=De%20Stichting%20Diergeneesmiddelen,de%20SDa%20vindt." target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-1">[bron]</a></p>

                    <p><strong>Opmerking:</strong> Over de specifieke politieke lobby en directe invloed van deze farmaceutische bedrijven op het Nederlandse landbouwbeleid is relatief weinig publieke informatie beschikbaar vergeleken met andere spelers in de vee-industrie. De beschikbare data richt zich vooral op antibioticagebruik en monitoring.</p>

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
                    <p>Supermarkten vormen de tussenpersoon tussen de vee-industrie en de consument. Omdat ze dominant zijn in de voedselverkoop, bepalen ze voor een groot deel de prijzen. Lage inkoopprijzen en hoge verkoopcijfers zijn goed voor hun winst, maar houden de intensieve veehouderij in stand.</p>

                    <p><strong>Machtspositie:</strong> Supermarkten controleren de hele keten via prijsbepaling, aanbiedingen en consumentencommunicatie via reclame. Deze controle oefent druk uit op alle schakels in de voedselketen. <a href="https://www.thequestionmark.org/persbericht-supermarkten-blijven-stunten-met-vlees-ondanks-duurzame" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-1">[bron]</a></p>

                    <p><strong>Prijspolitiek en doorberekening:</strong> Producenten claimen hogere kosten te maken, maar zeggen lang niet al deze kosten aan de consument door te berekenen. Feit blijft dat boodschappen onverminderd duur zijn, ook wanneer de inflatie daalt. Dit roept de vraag op waar die hoge prijzen precies vandaan komen en of supermarkten, producenten of andere schakels in de keten hier verantwoordelijk voor zijn. <a href="https://www.foodwatch.org/nl/current-nieuws/2023/wie-bepaalt-de-prijs-van-voedsel#:~:text=Producenten%20claimen%20nou,toch%20de%20producent%3F" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-1">[bron]</a></p>

                    <p>De dominantie van supermarkten als Albert Heijn (Ahold Delhaize), Jumbo en Plus in de voedselverkoop geeft hen aanzienlijke invloed op zowel producenten als consumenten, waardoor ze een sleutelrol spelen in het in stand houden van het huidige systeem.</p>
                </>
            )
        }
    ];

    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-8">
            <h2 className="sr-only">Spelers in de vee-industrie</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
                {cards.map((card, index) => (
                    <div
                        key={card.id}
                        ref={el => cardRefs.current[card.id] = el}
                        data-card-id={card.id}
                        className="h-96"
                        role="listitem"
                    >
                        <button
                            data-main-button
                            className="w-full h-full perspective focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-500 focus-visible:ring-offset-4 rounded-lg transition-all duration-200"
                            onClick={() => {
                                toggleFlip(card.id);
                                if (!flipped[card.id] && closeButtonRefs.current[card.id]) {
                                    setTimeout(() => closeButtonRefs.current[card.id].focus(), 100);
                                }
                            }}
                            onKeyDown={(e) => handleKeyDown(e, card.id)}
                            onFocus={() => handleFocus(card.id)}
                            aria-expanded={flipped[card.id]}
                            aria-controls={`card-content-${card.id}`}
                            aria-label={`${card.title}, ${card.subtitle}. ${flipped[card.id] ? 'Terugklappen naar voorkant' : 'Klik om meer informatie te tonen'}`}
                            tabIndex={0}
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
                                    className="absolute w-full h-full rounded-lg p-6 text-white flex flex-col justify-center items-center text-center shadow-lg border-2 border-transparent"
                                    style={{
                                        backfaceVisibility: 'hidden',
                                        backgroundColor: '#064e3b'
                                    }}
                                    role="region"
                                    aria-label={`Voorkant: ${card.title}`}
                                >
                                    <div className="text-5xl mb-4" aria-hidden="true">{card.icon}</div>
                                    <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                                    <p className="text-sm opacity-90">{card.subtitle}</p>
                                    <div className="mt-4 text-sm opacity-80 px-3 py-1 bg-white/20 rounded-full flex items-center gap-2" aria-hidden="true">
                                        {flipped[card.id] ? (
                                            <>
                                                <span>← Terug</span>
                                                <span className="text-xs">(Tab om verder te gaan)</span>
                                            </>
                                        ) : (
                                            <>
                                                <span>Meer info →</span>
                                                <span className="text-xs">(Enter/Spatie)</span>
                                            </>
                                        )}
                                    </div>
                                </div>

                                {/* Back */}
                                <div
                                    id={`card-content-${card.id}`}
                                    className="absolute w-full h-full bg-white rounded-lg p-6 shadow-lg overflow-y-auto border-2 border-transparent"
                                    style={{
                                        backfaceVisibility: 'hidden',
                                        transform: 'rotateY(180deg)'
                                    }}
                                    role="region"
                                    aria-label={`Achterkant: ${card.backTitle}`}
                                    tabIndex={-1}
                                >
                                    <div className="flex justify-between items-start mb-3">
                                        <h4 className="font-bold text-lg pr-4" style={{ color: '#064e3b' }}>
                                            {card.backTitle}
                                        </h4>
                                        <button
                                            ref={el => closeButtonRefs.current[card.id] = el}
                                            className="text-gray-500 hover:text-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-full p-2 hover:bg-gray-100 transition-colors"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                toggleFlip(card.id);
                                                if (cardRefs.current[card.id]) {
                                                    setTimeout(() => {
                                                        const mainButton = cardRefs.current[card.id].querySelector('[data-main-button]');
                                                        if (mainButton) mainButton.focus();
                                                    }, 100);
                                                }
                                            }}
                                            onKeyDown={(e) => handleCloseButtonKeyDown(e, card.id)}
                                            aria-label="Terugklappen naar voorkant"
                                            tabIndex={0}
                                        >
                                            <span className="block w-6 h-6 text-center text-xl" aria-hidden="true">×</span>
                                        </button>
                                    </div>
                                    <div className="text-sm space-y-2 text-gray-700">
                                        {card.backContent}
                                    </div>
                                    <div className="mt-4 text-sm text-gray-500 p-2 bg-gray-50 rounded border">
                                        <p className="flex items-center gap-2">
                                            <span>Tip: Gebruik</span>
                                            <kbd className="px-2 py-1 bg-gray-200 rounded text-xs border">Escape</kbd>
                                            <span>of</span>
                                            <kbd className="px-2 py-1 bg-gray-200 rounded text-xs border">Enter</kbd>
                                            <span>om terug te keren. Gebruik</span>
                                            <kbd className="px-2 py-1 bg-gray-200 rounded text-xs border">Tab</kbd>
                                            <span>om naar volgende kaart te gaan.</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </button>
                    </div>
                ))}
            </div>

        </div>
    );
}