import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Play, Pause, Download, ExternalLink, Calendar, Clock } from 'lucide-react';
import { Link, useParams, useNavigate } from 'react-router-dom';

export default function InterviewsPage() {
    const { id: interviewId } = useParams(); // Haal ID uit URL
    const navigate = useNavigate();
    const [selectedInterview, setSelectedInterview] = useState(null);
    const [playingAudio, setPlayingAudio] = useState(null);
    const [audioProgress, setAudioProgress] = useState({});
    const [audioDurations, setAudioDurations] = useState({});
    const audioRefs = useRef({});

    const interviews = [
        {
            id: 'arco-timmermans',
            name: 'Arco Timmermans',
            role: 'Politicoloog & Lobbyisme-expert',
            affiliation: 'Universiteit Leiden',
            duration: 'Schriftelijk interview',
            type: 'text',
            image: '/afbeeldingen-interviews/arco-timmermans.jpg',
            bio: 'Arco Timmermans is hoogleraar Publiek Beleid aan de Universiteit Leiden en expert op het gebied van lobbyisme en belangenbehartiging. Hij heeft uitgebreid onderzoek gedaan naar de invloed van lobby-organisaties op het Nederlandse politieke systeem en staat bekend om zijn kritische analyses van het stikstofbeleid en de positie van boeren.',
            keyTopics: ['Lobbyisme', 'Boerenbelangen', 'Stikstofbeleid', 'Politieke invloed'],
            // writtenInterview: [
            //     {
            //         question: 'Waarom heeft Nederland volgens u zo\'n grote vee-industrie nodig?',
            //         answer: 'Het gaat niet om "nodig hebben" - het is er gewoon. Generaties families leven van de veehouderij. Ze produceren voedsel, beheren het landschap, en dragen miljarden bij aan onze economie. De vraag zou moeten zijn: waarom zouden we dat kapot willen maken? Natuurlijk moet er verduurzaamd worden, maar dat doe je samen met boeren, niet tegen ze in.'
            //     },
            //     {
            //         question: 'Hoe kijkt u aan tegen de kritiek dat de sector te veel invloed heeft op het beleid?',
            //         answer: 'Dat is een frame van milieuorganisaties die zelf miljoenenbegrotingen hebben en de media weten te bereiken. Boeren hebben niet té veel invloed - ze hebben juist te weinig. Kijk naar het stikstofbeleid: dat is erdoor geramd zonder echt naar boeren te luisteren. Ze moeten stoppen of drastisch inkrimpen. Waar is hun invloed dan? In werkelijkheid zijn boeren buitenspel gezet door een élite die denkt dat ze wel weten wat goed is voor het platteland.'
            //     },
            //     {
            //         question: 'Wat zou er volgens u moeten veranderen in de sector?',
            //         answer: 'Ten eerste: perspectief. Boeren moeten weten waar ze aan toe zijn. Geen nieuw beleid om de drie jaar. Ten tweede: eerlijke prijzen. Supermarkten drukken de prijzen, boeren draaien op voor de kosten. Ten derde: minder regeldruk. Boeren stikken in de bureaucratie. En ten vierde: erken hun bijdrage. Boeren zijn geen milieuvervuilers, ze zijn voedselproducenten die Nederland heeft opgebouwd.'
            //     },
            //     {
            //         question: 'Hoe reageert u op de stelling dat de sector moet krimpen voor het klimaat en milieu?',
            //         answer: 'Ik vraag me af of degenen die dat roepen wel beseffen wat ze vragen. Je vraagt families om hun levenswerk op te geven. Voor wat? Zodat we vlees gaan importeren uit Brazilië waar de regels veel laxer zijn? Dat is symboolpolitiek. Nederlandse boeren zijn de meest duurzame ter wereld. Als we hier krimpen zonder de import te reguleren, verplaats je het probleem alleen maar.'
            //     },
            //     {
            //         question: 'Wat zou een eerlijker lobbysysteem betekenen voor de veehouderij?',
            //         answer: 'Rechtvaardigheid. Boeren verdienen een eerlijke behandeling en een toekomst. We willen beleid dat gemaakt wordt mét boeren, niet over hun hoofden heen. We willen realistisch klimaatbeleid dat niet hele sectoren kapot maakt. En we willen dat Nederland haar voedselproducenten weer gaat waarderen in plaats van demoniseren. Deze mensen voeden ons land. Toon wat respect.'
            //     }
            // ],
            downloadUrl: 'https://example.com/arco-transcript.pdf'
        },
        {
            id: 'wouter-waayer',
            name: 'Wouter Waayer',
            role: 'Boerenzoon, nu dierenrechtenactivist',
            affiliation: 'Social media',
            duration: 'Audio fragmenten + tekst',
            type: 'combined',
            image: '/afbeeldingen-interviews/Wouter_waayer.jpg',
            bio: (
                <>
                    Wouter Waayer groeide op tussen de vleeskalveren in Twente. Hij maakte een radicale omslag van boerenzoon naar veganistische dierenrechtenactivist en heeft met zijn Instagram-account (
                    <a
                        href="https://www.instagram.com/wouterwaayer"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                        @wouterwaayer
                    </a>
                    ) meer dan 20.000 volgers bereikt. Ondanks haatreacties blijft hij zich inzetten tegen dierenleed in de intensieve vee-industrie, waarbij hij zijn achtergrond als boerenzoon inzet om te laten zien waar het vlees op ons bord vandaan komt.
                </>
            ),
            keyTopics: ['Dierenwelzijn', 'Familie', 'Activisme', 'Veganisme'],
            writtenInterview: [
                {
                    question: 'Kun je iets vertellen over je jeugd op de boerderij? Welke rol speelde het boerenbedrijf in jouw dagelijks leven?',
                    answer: 'Mijn jeugd op de boerderij was heel fijn. Ik had alle vrijheid. Veel ruimte om me heen. Altijd in de natuur. Crossbrommers. Crossauto waarmee over het land gecrossed kon worden. Dus dat was echt heel fijn. Vuurtjes stoken. Ja, altijd wel iets om je mee te vermaken. Ja, het voelt bijna als een soort niemandsland waar je gewoon kon doen wat je wilde doen. Geen haan die er naar kraaide. Daarnaast hielp ik natuurlijk altijd mee op de boerderij. Ja, zo gaat dat gewoon. Als je geboren bent op de boerderij, dan word je ook geacht mee te helpen. En ja, dat vond ik op zich wel leuk. Ja, meer dan dat was het nog niet per se. Het was wel leuk. Maar ja, het was ook gewoon werk.'
                },
                {
                    question: 'Welke economische of sociale factoren maken het volgens jou moeilijk voor boeren om richting plantaardigere of alternatieve systemen te bewegen?',
                    answer: (
                        <div className="space-y-4">
                            <p>Dat is natuurlijk eigenlijk nog steeds de overheid die daar een belemmering in vormt, want er gaat gewoon heel veel subsidie naar vleesveebedrijven en veehouderijen. Die krijgen het grootste gros van de subsidies. En dat moet anders.</p>
                            <p>Als boeren willen omschakelen, dan hebben ze daar hulp bij nodig, hoe krom dat ook klinkt, want het zijn in principe ondernemers en ondernemers die hebben ook hun eigen verantwoordelijkheid, maar in dit geval zie je gewoon dat ze die verantwoordelijkheid niet pakken. En er wordt natuurlijk nog steeds gestimuleerd middels subsidies. Dus ik denk dat de overheid daar een andere rol in moet pakken en toch moet zeggen, nou we gaan je helpen met omschakelen.</p>
                            <p>Ja, er zit gewoon heel veel geld in. Ik denk ook wel dat de overheid er enigzins verantwoordelijk voor is en dat die verantwoordelijkheid wel moet nemen, omdat zij boeren wel richting die enorme schaalvergroting hebben gedrukt. Waardoor ze heel veel geld hebben moeten investeren en nu ook gewoon heel veel schulden hebben. Door die schulden is het ook wel moeilijk om om te schakelen. Want als je dus weer je bedrijf wil gaan veranderen, ja, dat kost ook weer heel veel geld. En dat hebben heel veel boeren niet.</p>
                            <p>Ondanks dat ze toch wel veel vermogen hebben, hebben ze niet per se direct geld. En zouden ze daar weer een lening voor af moeten sluiten, wat niet per se wenselijk is. Dus ik zou zeggen dat geld dat wij nou gebruiken voor bijvoorbeeld het uitkopen van boeren, om om te schakelen, dat kunnen we ook gebruiken om boer om te schakelen naar plantaardige boerderijen of op z'n minst biologische bedrijven, kleinschalig.</p>
                        </div>
                    )
                },
                {
                    question: 'Als je één boodschap zou kunnen meegeven aan mensen, wat zou dat zijn?',
                    answer: (
                        <div className="space-y-4">
                            <p>Dieren zijn geen nummers. Ik begrijp dat het heel lastig is als je zoveel dieren in een stal ziet staan. Dat het heel moeilijk is om de dieren nog als een individu te zien. Zeker ook omdat er elke dag in Nederland 1,8 miljoen dieren worden vermoord. Dit gewoon de normaalste zaak van de wereld geworden. En we zijn eigenlijk een beetje immuun geworden voor het leed dat zich dagelijks afspeelt in die stallen.</p>
                            <p>En veel mensen zijn zich ook niet bewust van dat de meeste dieren, ik geloof dat het 90% is, als het niet meer is, nooit het daglicht ziet. Hun hele leven, hun hele korte leven in stallen blijft. Dus die dieren hebben gewoon een verschrikkelijk leven. En het is niet alsof die dieren dat verdienen. Want veel mensen denken, "ja, een kip of een koe wordt daarvoor geboren", maar dat is gewoon niet zo. We hebben ze zo gefokt.</p>
                            <p>Daarnaast zijn het ontzettend intelligente dieren. En een koe, een stier, of een kalf heeft de cognitieve vaardigheden van een 4-jarige. Dat is vergelijkbaar met een hond. En in sommige gevallen zou ik zelfs durven zeggen dat ze sterker ontwikkeld zijn.</p>
                            <p>Het zijn ook hele lieve dieren. Je kunt ze met knuffelen. Ze weten hun naam, ze hebben vrienden, familie. Ze missen ook andere dieren als ze verdwijnen naar de slacht of als bijvoorbeeld moeder en kalf gescheiden wordt. Dan heeft de moeder daar weken tot maanden lang last van. Ook al zeggen heel veel boeren dat dat niet zo is. Dat is echt wel zo.</p>
                            <p>Dat kunnen we gewoon niet langer negeren. Ik hoop ook dat mensen hun harten weer open gaan stellen voor de dieren, want het zijn prachtige dieren, ook de dieren in de veeindustrie. Die hebben net zoveel rechten op liefde en aandacht en verzorging als andere dieren, als onze huisdieren en als alle andere dieren die in het wild leven.</p>
                        </div>
                    )
                },

            ],
            audioFragments: [
                {
                    title: 'Fragment 1: Omslagpunt',
                    duration: '02:45',
                    description: 'Wanneer begon je anders te kijken naar de veehouderij, en wat was daarin een belangrijk omslagpunt voor jou?',
                    audioUrl: '/audio-wouter/audio2.m4a'
                },
                {
                    title: 'Fragment 2: Reacties uit omgeving',
                    duration: '01:56',
                    description: 'Hoe reageerden familie en mensen uit je oude omgeving toen je veganist werd, en hoe ga/ging je met die dynamiek om?',
                    audioUrl: '/audio-wouter/audio4.m4a'
                },
                {
                    title: 'Fragment 3: Varandering',
                    duration: '02:17',
                    description: 'Welke overtuigingen, routines of ideeën voelde je vroeger als vanzelfsprekend, en zie je nu in een ander licht?',
                    audioUrl: '/audio-wouter/audio5.m4a'
                },
                {
                    title: 'Fragment 4: Belangen',
                    duration: '02:05',
                    description: 'Welke rol spelen belangenorganisaties en ketenpartijen volgens jou in hoe het systeem werkt?',
                    audioUrl: '/audio-wouter/audio7.m4a'
                },
                {
                    title: 'Fragment 5: Vega(n)-termen en discussies',
                    duration: '02:01',
                    description: 'Je reageerde online eerder op discussies over termen als ‘gehakt’ en ‘burger’ voor plantaardige producten, hoe kijk je naar dat soort regulering?',
                    audioUrl: '/audio-wouter/audio8.m4a'
                },

            ]
        },
        {
            id: 'bbb-lid',
            name: 'Kevin Brouwer',
            role: 'Kamerlid voor BBB',
            affiliation: 'BoerBurgerBeweging',
            duration: 'Schriftelijk interview',
            type: 'text',
            image: '/afbeeldingen-interviews/Kevin-Brouwer_BBB.jpg',
            bio: 'Kevin Brouwer is Tweede Kamerlid voor de BoerBurgerBeweging (BBB) en actief in de commissies Landbouw, Natuur en Voedselkwaliteit. Hij vertegenwoordigt de belangen van boeren en het platteland in de politiek.',
            keyTopics: ['Boerenbelangen', 'Regeldruk', 'Stikstofcrisis', 'Platteland'],
            writtenInterview: [
                {
                    question: 'Waarom heeft Nederland volgens u zo\'n grote vee-industrie nodig?',
                    answer: 'Het gaat niet om "nodig hebben" - het is er gewoon. Generaties families leven van de veehouderij. Ze produceren voedsel, beheren het landschap, en dragen miljarden bij aan onze economie. De vraag zou moeten zijn: waarom zouden we dat kapot willen maken? Natuurlijk moet er verduurzaamd worden, maar dat doe je samen met boeren, niet tegen ze in.'
                },
                {
                    question: 'Hoe kijkt u aan tegen de kritiek dat de sector te veel invloed heeft op het beleid?',
                    answer: 'Dat is een frame van milieuorganisaties die zelf miljoenenbegrotingen hebben en de media weten te bereiken. Boeren hebben niet té veel invloed - ze hebben juist te weinig. Kijk naar het stikstofbeleid: dat is erdoor geramd zonder echt naar boeren te luisteren. Ze moeten stoppen of drastisch inkrimpen. Waar is hun invloed dan? In werkelijkheid zijn boeren buitenspel gezet door een élite die denkt dat ze wel weten wat goed is voor het platteland.'
                },
                {
                    question: 'Wat zou er volgens u moeten veranderen in de sector?',
                    answer: 'Ten eerste: perspectief. Boeren moeten weten waar ze aan toe zijn. Geen nieuw beleid om de drie jaar. Ten tweede: eerlijke prijzen. Supermarkten drukken de prijzen, boeren draaien op voor de kosten. Ten derde: minder regeldruk. Boeren stikken in de bureaucratie. En ten vierde: erken hun bijdrage. Boeren zijn geen milieuvervuilers, ze zijn voedselproducenten die Nederland heeft opgebouwd.'
                },
                {
                    question: 'Hoe reageert u op de stelling dat de sector moet krimpen voor het klimaat en milieu?',
                    answer: 'Ik vraag me af of degenen die dat roepen wel beseffen wat ze vragen. Je vraagt families om hun levenswerk op te geven. Voor wat? Zodat we vlees gaan importeren uit Brazilië waar de regels veel laxer zijn? Dat is symboolpolitiek. Nederlandse boeren zijn de meest duurzame ter wereld. Als we hier krimpen zonder de import te reguleren, verplaats je het probleem alleen maar.'
                },
                {
                    question: 'Wat wilt u als BBB bereiken voor de veehouderij?',
                    answer: 'Rechtvaardigheid. Boeren verdienen een eerlijke behandeling en een toekomst. We willen beleid dat gemaakt wordt mét boeren, niet over hun hoofden heen. We willen realistisch klimaatbeleid dat niet hele sectoren kapot maakt. En we willen dat Nederland haar voedselproducenten weer gaat waarderen in plaats van demoniseren. Deze mensen voeden ons land. Toon wat respect.'
                }
            ],
            downloadUrl: 'https://example.com/bbb-interview.pdf'
        },
        {
            id: 'lammert-van-raan',
            name: 'Lammert van Raan',
            role: '....',
            image: '/afbeeldingen-interviews/lammert-van-raan.webp',
            bio: 'Lammert van Raan is al 25 jaar journalist in de landbouwsector. Hij schrijft voor verschillende vakbladen en probeert nuance te brengen in een steeds gepolariseerder debat.',
            keyTopics: ['Landbouwjournalistiek', 'Nuance', 'Polarisatie', 'Feiten vs emotie'],
        },
        {
            id: 'caring-farmers',
            name: 'Caring Farmers',
            role: 'Stichting voor duurzame koplopers',
            affiliation: 'Caring Farmers',
            duration: 'Schriftelijk interview',
            type: 'text',
            image: '/afbeeldingen-interviews/caring-farmers-climate-miles.jpg',
            bio: 'Caring Farmers is een stichting die zich inzet voor een transitie naar een duurzame, diervriendelijke landbouw. Ze geven een stem aan boeren die bewust kiezen voor kleinschalige, extensieve en biologische landbouw en willen het geluid van deze duurzame koplopers laten horen.',
            keyTopics: ['Duurzame landbouw', 'Boerenbelangen', 'Kleinschalige landbouw', 'Transitie'],
            writtenInterview: [
                {
                    question: 'Waar zet Caring Farmers zich concreet voor in en wat doen jullie precies?',
                    answer: 'Wij zetten ons in om het geluid van de duurzame koplopers te laten horen. In het publieke debat (bijv. met opiniestukken), richting de politiek en naar consumenten. Lees hier meer over wat we concreet doen: https://caringfarmers.nl/over-ons/wat-doen-we/. En hier over de thema\'s waar we op inzetten (en met welke projecten we daar uitvoering aan geven): https://caringfarmers.nl/themas/.'
                },
                {
                    question: 'Welke belemmeringen ervaren jullie leden bij het verduurzamen van hun bedrijf?',
                    answer: 'De grootste belemmering is dat het hele landbouw- en voedselsysteem is ingericht op (grootschalige) gangbare bedrijven. Zo is er veel wetgeving en controles waar agrarische bedrijven aan moeten voldoen, maar die helemaal niet logisch of nuttig zijn voor duurzame koplopers. Denk aan de zeer uitgebreide mestboekhouding die veehouders moeten bijhouden. Heel extensieve veehouders zitten ver onder de mestnormen, maar moeten toch al die administratie bijhouden. Maar denk ook aan de voedselverwerkende industrie. Soms eindigen plantaardige eiwitten die prima zijn voor menselijke consumptie toch als veevoer, puur omdat er geen verwerkende industrie is die zulke kleine hoeveelheden wil afnemen, of omdat geen bedrijf het wil vermarkten.'
                },
                {
                    question: 'Hoe verhouden jullie je tot de gevestigde belangenbehartiging in de sector?',
                    answer: 'Wij hebben nauwelijks budget voor belangenbehartiging, in tegenstelling tot de gangbare, gevestigde partijen. Wij vragen namelijk alleen vrijwillige donaties van onze boeren, omdat we weten dat ze het vaak financieel niet breed hebben. Andere belangenbehartigers hebben hele kantoren met lobbyisten, daar kunnen wij nauwelijks tegenop. Daarom doen we wat we kunnen om het geluid van de Caring Farmers te laten horen, maar van intensieve lobby is van onze kant geen sprake.'
                },
                {
                    question: 'Wat is volgens jullie nodig om meer boeren in beweging te krijgen en hoe hopen jullie dat de landbouw er over 10-20 jaar uitziet?',
                    answer: 'Boeren inspireren vooral elkaar: dus succesverhalen van duurzame boeren kunnen ook anderen overhalen om het anders te gaan doen. Verder is het nodig dat de wetgeving uitzonderingen maakt voor kleinschalige/extensieve/biologische boeren, zodat zij steeds minder competitief nadeel krijgen t.o.v. gangbare bedrijven. Tot slot is er veel meer markt nodig voor duurzame boeren, dus duurzame consumptie moet ook gestimuleerd worden.'
                }
            ],
            manifestUrl: 'https://caringmovement.nl/verdrag-planeetaardig-en-dierwaardig-2/',
            website: 'https://caringfarmers.nl/'
        },
        {
            id: 'dier-en-recht',
            name: 'Dier & Recht',
            role: 'Stichting voor dierenbelangen',
            affiliation: 'Dier & Recht',
            duration: 'Schriftelijk interview',
            type: 'text',
            image: '/afbeeldingen-interviews/dierenrecht.jpg',
            bio: 'Dier & Recht is een stichting die zich inzet voor de belangen van dieren in Nederland en Europa. Ze voeren juridische procedures, doen onderzoek naar dierenwelzijn en lobbyen voor betere wetgeving en beleid. Ze richten zich onder meer op het aanpakken van subsidies die de vee-industrie in stand houden.',
            keyTopics: ['Dierenwelzijn', 'EU-subsidies', 'Lobbycampagnes', 'Juridische acties'],
            writtenInterview: [
                {
                    question: 'Het lobbykrachtveld: Welke tegenkrachten ervaart Dier & Recht bij het streven naar afschaffing van deze subsidies, zowel in Nederland als in Brussel?',
                    answer: 'Wij zien dat lidstaten, industriepartijen en gevestigde belangen in de veehouderij actief zijn in de lobby-arena: zij verdedigen subsidies, promotiecampagnes en de huidige productie- en consumptiemodellen. Tegelijkertijd werkt Dier & Recht met campagnes, publicaties en politieke druk om deze steunmechanismen ter discussie te stellen. De tegenkrachten zijn dus aanzienlijk: vooral vanuit economische belangen en bestaande systemen van subsidie, regulering en productie.'
                },
                {
                    question: 'Strategie: Hoe pakt u dit aan? Richt jullie lobby zich vooral op Nederland om als lidstaat een tegenwicht te bieden, of rechtstreeks op de EU-instellingen?',
                    answer: 'Onze strategie bestaat uit twee sporen: Op EU-niveau brengen we in kaart hoeveel publieke middelen naar promotie van dierlijke producten gaan, waar die subsidies terechtkomen, en we roepen op tot het beëindigen ervan. Tegelijkertijd richten we ons op Nederland: wij vragen de Nederlandse regering en Kamerleden om zich actiever op te stellen in Europese onderhandelingen en om nationale acties te voeren waarin subsidiëring van vlees- en zuivelpromotie ter discussie wordt gesteld. Kortom: zowel de "bovenkant" (EU) als de "onderkant" (lidstaat Nederland) zijn onderdeel van onze aanpak. Dit doen we o.a. samen met de Dierencoalitie en met Eurogroup for Animals.'
                },
                {
                    question: 'Het grotere plaatje: In hoeverre zijn deze reclamesubsidies volgens jullie symptomatisch voor een breder systeem van politieke en economische steun aan de sector?',
                    answer: 'Ja, wij zien de promotiesubsidies voor vlees en zuivel als symptoom van een breder systeem waarin de intensieve veehouderij structureel ondersteund wordt. Bijvoorbeeld: De subsidies promoten consumptie van dierlijke producten, terwijl dat haaks staat op klimaat-, milieu- en dierenwelzijnsambities. Duurzame alternatieven krijgen structureel minder ondersteuning of promotie. Er is vaak sprake van gevestigde belangen en terugkerende steunmechanismen, waardoor transitie wordt tegengehouden ou vertraagd. Dus ja: deze subsidies passen in een groter systeem van politieke en economische steun, van productie-logica, consumptiepatronen en regulierung.'
                },
                {
                    question: 'Toekomst: Hoe zien jullie de toekomst van deze EU-subsidies? Verwachten jullie veranderingen op korte of lange termijn, en welke strategieën zijn nodig om ze te verminderen of af te schaffen?',
                    answer: 'Volgens onze analyse is er op korte termijn geen automatische afschaffing van de vlees- en zuivelsubsidies te verwachten. De belangen zijn groot, en het politieke speelveld is complex. Wel zijn er kansen: Door steeds meer publiciteit en maatschappelijke druk kan het onderwerp hoog op de agenda komen. Lidstaten zoals Nederland kunnen een voortrekkersrol spelen door zich duidelijker uit te spreken in EU-onderhandelingen. Het geld dat nu gaat naar promotiesubsidies zou herverdeeld kunnen worden naar plantaardige alternatieven, maatschappelijke projecten of campagnes met duurzame voeding. Wij pleiten voor een volgorde: stop de promotiesubsidies voor dierlijke producten → hervorm de subsidieregeling → investeer in plantaardige alternatieven.'
                }
            ],
            website: 'https://www.dierenrecht.nl/',
            eurogroupLink: 'https://www.eurogroupforanimals.org/',
        }
    ];

    // Gebruik useEffect om het interview te vinden op basis van URL parameter
    useEffect(() => {
        if (interviewId) {
            const foundInterview = interviews.find(i => i.id === interviewId);
            if (foundInterview) {
                setSelectedInterview(foundInterview);
            } else {
                // Als interview niet gevonden wordt, ga terug naar overzicht
                navigate('/interviews');
            }
        } else {
            // Als er geen ID is, reset de selectedInterview
            setSelectedInterview(null);
        }
    }, [interviewId, navigate]);

    // NIEUWE USEFFECT TOEGEVOEGD: Scroll naar top wanneer interview wordt geladen
    useEffect(() => {
        // Scroll naar de top van de pagina wanneer een interview wordt geladen
        if (selectedInterview) {
            window.scrollTo(0, 0);
        }
    }, [selectedInterview]);

    // Effect om audio te beheren wanneer playingAudio verandert
    useEffect(() => {
        // Stop alle audio wanneer we van pagina wisselen
        return () => {
            Object.values(audioRefs.current).forEach(audio => {
                if (audio) {
                    audio.pause();
                    audio.currentTime = 0;
                }
            });
            setPlayingAudio(null);
            setAudioProgress({});
            setAudioDurations({});
        };
    }, [selectedInterview]);

    const handleAudioPlay = (idx) => {
        const audioKey = `${selectedInterview?.id}-${idx}`;
        const audioElement = audioRefs.current[audioKey];

        if (!audioElement) return;

        if (playingAudio === idx) {
            // Pauzeren
            audioElement.pause();
            setPlayingAudio(null);
        } else {
            // Andere audio stoppen als er een speelt
            if (playingAudio !== null) {
                const previousAudioKey = `${selectedInterview?.id}-${playingAudio}`;
                const previousAudio = audioRefs.current[previousAudioKey];
                if (previousAudio) {
                    previousAudio.pause();
                }
            }

            // Nieuwe audio afspelen
            audioElement.play()
                .then(() => {
                    setPlayingAudio(idx);
                })
                .catch(error => {
                    console.error('Error playing audio:', error);
                    alert('Er is een probleem met het afspelen van de audio. Controleer of het bestand bestaat.');
                });
        }
    };

    const handleTimeUpdate = (interviewId, idx) => {
        const audioKey = `${interviewId}-${idx}`;
        const audioElement = audioRefs.current[audioKey];

        if (audioElement) {
            const currentTime = audioElement.currentTime;
            const duration = audioElement.duration || audioDurations[audioKey] || 0;

            if (duration > 0) {
                setAudioProgress(prev => ({
                    ...prev,
                    [audioKey]: (currentTime / duration) * 100
                }));
            }
        }
    };

    const handleLoadedMetadata = (interviewId, idx) => {
        const audioKey = `${interviewId}-${idx}`;
        const audioElement = audioRefs.current[audioKey];

        if (audioElement) {
            setAudioDurations(prev => ({
                ...prev,
                [audioKey]: audioElement.duration
            }));
        }
    };

    const handleSeek = (interviewId, idx, value) => {
        const audioKey = `${interviewId}-${idx}`;
        const audioElement = audioRefs.current[audioKey];

        if (audioElement) {
            const duration = audioElement.duration || audioDurations[audioKey] || 0;
            if (duration > 0) {
                const newTime = (value / 100) * duration;
                audioElement.currentTime = newTime;
                setAudioProgress(prev => ({
                    ...prev,
                    [audioKey]: value
                }));
            }
        }
    };

    const formatTime = (seconds) => {
        if (isNaN(seconds) || seconds === Infinity) return '0:00';
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    const renderInterviewContent = (interview) => {
        // NIEUW: Combineren van tekst en audio
        if (interview.type === 'combined' && (interview.writtenInterview || interview.audioFragments)) {
            return (
                <div className="space-y-12">
                    {/* Geschreven interview sectie - ZONDER "Let op" balk voor Wouter */}
                    {interview.writtenInterview && interview.writtenInterview.length > 0 && (
                        <div>
                            <h4 className="text-xl font-bold mb-6">Geschreven interview</h4>

                            {/* Alleen "Let op" balk tonen voor andere interviews, niet voor Wouter */}
                            {interview.id !== 'wouter-waayer' && (
                                <div className="bg-amber-900/20 border border-amber-700 p-4 rounded-lg mb-6">
                                    <p className="text-amber-200 text-sm">
                                        <strong>Let op:</strong> Deze vragen zijn schriftelijk beantwoord.
                                    </p>
                                </div>
                            )}

                            <div className="space-y-8">
                                {interview.writtenInterview.map((qa, idx) => (
                                    <div key={idx} className="border-l-4 border-emerald-500 pl-6">
                                        <p className="font-bold text-lg mb-3 text-emerald-400">
                                            {qa.question}
                                        </p>
                                        <p className="text-neutral-200 leading-relaxed whitespace-pre-line">
                                            {qa.answer}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Audio fragmenten sectie */}
                    {interview.audioFragments && interview.audioFragments.length > 0 && (
                        <div>
                            <h4 className="text-xl font-bold mb-6">Audiofragmenten</h4>
                            <div className="space-y-6">
                                {interview.audioFragments.map((fragment, idx) => {
                                    const audioKey = `${interview.id}-${idx}`;
                                    const progress = audioProgress[audioKey] || 0;
                                    const duration = audioDurations[audioKey] || 0;
                                    const audioElement = audioRefs.current[audioKey];
                                    const currentTime = audioElement?.currentTime || 0;

                                    return (
                                        <div key={idx} className="bg-neutral-700 p-6 rounded-lg">
                                            <div className="flex items-start justify-between mb-3">
                                                <div className="flex-1">
                                                    <h5 className="font-bold text-lg">{fragment.title}</h5>
                                                    <p className="text-sm text-neutral-400 flex items-center gap-2 mt-1">
                                                        <Clock size={14} /> {fragment.duration}
                                                    </p>
                                                </div>
                                                <div className="flex items-center gap-4">
                                                    {/* Audio element - verborgen maar nodig voor afspelen */}
                                                    <audio
                                                        ref={el => audioRefs.current[audioKey] = el}
                                                        src={fragment.audioUrl}
                                                        preload="metadata"
                                                        onEnded={() => setPlayingAudio(null)}
                                                        onTimeUpdate={() => handleTimeUpdate(interview.id, idx)}
                                                        onLoadedMetadata={() => handleLoadedMetadata(interview.id, idx)}
                                                        onError={(e) => {
                                                            console.error('Audio loading error:', e);
                                                        }}
                                                    />

                                                    <button
                                                        onClick={() => handleAudioPlay(idx)}
                                                        className="bg-emerald-600 hover:bg-emerald-500 p-3 rounded-full transition-colors flex items-center justify-center"
                                                    >
                                                        {playingAudio === idx ? (
                                                            <Pause size={20} className="text-white" />
                                                        ) : (
                                                            <Play size={20} className="text-white" />
                                                        )}
                                                    </button>

                                                    {/* Volume control */}
                                                    <input
                                                        type="range"
                                                        min="0"
                                                        max="1"
                                                        step="0.1"
                                                        defaultValue="1"
                                                        onChange={(e) => {
                                                            const audio = audioRefs.current[audioKey];
                                                            if (audio) {
                                                                audio.volume = parseFloat(e.target.value);
                                                            }
                                                        }}
                                                        className="w-20 accent-emerald-500"
                                                    />
                                                </div>
                                            </div>

                                            <p className="text-neutral-300 mb-4">{fragment.description}</p>

                                            {/* Progress bar en tijd display */}
                                            <div className="space-y-2">
                                                <div className="flex justify-between text-sm text-neutral-400">
                                                    <span>{formatTime(currentTime)}</span>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <input
                                                        type="range"
                                                        min="0"
                                                        max="100"
                                                        step="0.1"
                                                        value={progress}
                                                        onChange={(e) => handleSeek(interview.id, idx, parseFloat(e.target.value))}
                                                        className="flex-1 h-2 bg-neutral-600 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-emerald-500 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-emerald-500"
                                                    />
                                                </div>


                                                {/* Status indicator */}
                                                <div className="flex items-center justify-between text-xs text-neutral-400">
                                                    <span>
                                                        Status: {playingAudio === idx ? 'Afspelen...' : 'Gepauzeerd'}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    {/* Volledige transcriptie (indien beschikbaar) */}
                    {interview.transcript && (
                        <div>
                            <h4 className="text-xl font-bold mb-4">Volledige transcriptie</h4>
                            <div className="bg-neutral-700 p-6 rounded-lg">
                                <pre className="whitespace-pre-wrap text-sm text-neutral-300 font-mono">
                                    {interview.transcript}
                                </pre>
                            </div>
                        </div>
                    )}
                </div>
            );
        }

        if (interview.type === 'audio' && interview.audioFragments) {
            return (
                <div className="space-y-6">
                    <h4 className="text-xl font-bold">Audiofragmenten</h4>
                    {interview.audioFragments.map((fragment, idx) => {
                        const audioKey = `${interview.id}-${idx}`;
                        const progress = audioProgress[audioKey] || 0;
                        const duration = audioDurations[audioKey] || 0;
                        const audioElement = audioRefs.current[audioKey];
                        const currentTime = audioElement?.currentTime || 0;

                        return (
                            <div key={idx} className="bg-neutral-700 p-6 rounded-lg">
                                <div className="flex items-start justify-between mb-3">
                                    <div className="flex-1">
                                        <h5 className="font-bold text-lg">{fragment.title}</h5>
                                        <p className="text-sm text-neutral-400 flex items-center gap-2 mt-1">
                                            <Clock size={14} /> {fragment.duration}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <audio
                                            ref={el => audioRefs.current[audioKey] = el}
                                            src={fragment.audioUrl}
                                            preload="metadata"
                                            onEnded={() => setPlayingAudio(null)}
                                            onTimeUpdate={() => handleTimeUpdate(interview.id, idx)}
                                            onLoadedMetadata={() => handleLoadedMetadata(interview.id, idx)}
                                        />

                                        <button
                                            onClick={() => handleAudioPlay(idx)}
                                            className="bg-emerald-600 hover:bg-emerald-500 p-3 rounded-full transition-colors"
                                        >
                                            {playingAudio === idx ? <Pause size={20} /> : <Play size={20} />}
                                        </button>

                                        <input
                                            type="range"
                                            min="0"
                                            max="1"
                                            step="0.1"
                                            defaultValue="1"
                                            onChange={(e) => {
                                                const audio = audioRefs.current[audioKey];
                                                if (audio) {
                                                    audio.volume = parseFloat(e.target.value);
                                                }
                                            }}
                                            className="w-20 accent-emerald-500"
                                        />
                                    </div>
                                </div>

                                <p className="text-neutral-300 mb-4">{fragment.description}</p>

                                {/* Progress bar en tijd display */}
                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm text-neutral-400">
                                        <span>{formatTime(currentTime)}</span>
                                        <span>{formatTime(duration)}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <input
                                            type="range"
                                            min="0"
                                            max="100"
                                            step="0.1"
                                            value={progress}
                                            onChange={(e) => handleSeek(interview.id, idx, parseFloat(e.target.value))}
                                            className="flex-1 h-2 bg-neutral-600 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-emerald-500"
                                        />
                                        <span className="text-sm text-neutral-400 w-16 text-right">
                                            {progress.toFixed(1)}%
                                        </span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            );
        }

        if (interview.type === 'text' && interview.writtenInterview) {
            return (
                <div className="space-y-8">
                    {/* "Let op" balk alleen voor tekst-only interviews, niet voor Wouter */}
                    {interview.id !== 'wouter-waayer' && (
                        <div className="bg-amber-900/20 border border-amber-700 p-4 rounded-lg">
                            <p className="text-amber-200 text-sm">
                                <strong>Let op:</strong> Dit interview is schriftelijk afgenomen. De vragen zijn per email verzonden en beantwoord.
                            </p>
                        </div>
                    )}

                    {interview.writtenInterview.map((qa, idx) => (
                        <div key={idx} className="border-l-4 border-emerald-500 pl-6">
                            <p className="font-bold text-lg mb-3 text-emerald-400">
                                {qa.question}
                            </p>
                            <p className="text-neutral-200 leading-relaxed">
                                {qa.answer}
                            </p>
                        </div>
                    ))}

                    {/* Extra links voor Caring Farmers */}
                    {interview.id === 'caring-farmers' && (
                        <div className="mt-8 pt-6 border-t border-neutral-700">
                            <h4 className="text-xl font-bold mb-4">Meer informatie</h4>
                            <div className="flex flex-col gap-3">
                                <a
                                    href={interview.manifestUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
                                >
                                    <ExternalLink size={16} />
                                    Lees ons manifest: Hoe de landbouw er in de toekomst uitziet
                                </a>
                                <a
                                    href={interview.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
                                >
                                    <ExternalLink size={16} />
                                    Bezoek onze website voor meer informatie
                                </a>
                            </div>
                        </div>
                    )}

                    {/* Extra links voor Dier & Recht */}
                    {interview.id === 'dier-en-recht' && (
                        <div className="mt-8 pt-6 border-t border-neutral-700">
                            <h4 className="text-xl font-bold mb-4">Meer informatie & samenwerkingen</h4>
                            <div className="flex flex-col gap-3">
                                <a
                                    href={interview.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
                                >
                                    <ExternalLink size={16} />
                                    Bezoek de website van Dier & Recht voor meer informatie over hun campagnes
                                </a>
                                <a
                                    href={interview.eurogroupLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
                                >
                                    <ExternalLink size={16} />
                                    Eurogroup for Animals - Europese samenwerkingspartner
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            );
        }

        if (interview.type === 'video') {
            return (
                <div className="space-y-6">
                    <div className="bg-neutral-900 aspect-video rounded-lg flex items-center justify-center">
                        <Play size={64} className="text-neutral-600" />
                        <p className="ml-4 text-neutral-500">Video player hier</p>
                    </div>
                    <h4 className="text-xl font-bold">Transcriptie</h4>
                    <div className="bg-neutral-700 p-6 rounded-lg">
                        <pre className="whitespace-pre-wrap text-sm text-neutral-300 font-mono">
                            {interview.transcript}
                        </pre>
                    </div>
                </div>
            );
        }

        // Fallback voor onbekende types
        return (
            <div className="bg-neutral-700 p-6 rounded-lg">
                <p className="text-neutral-300">Geen inhoud beschikbaar voor dit interview.</p>
            </div>
        );
    };

    // Als er een interview ID is en we hebben een interview gevonden
    if (selectedInterview) {
        const interview = selectedInterview;
        return (
            <div className="min-h-screen bg-neutral-900 text-neutral-100">
                {/* EXTRA PADDING AAN DE TOP OM ONDER DE NAVIGATION TE BLIJVEN */}
                <div className="pt-20 max-w-4xl mx-auto px-6 pb-12">
                    {/* Back button - gebruik navigate om terug te gaan */}
                    <button
                        onClick={() => navigate('/interviews')}
                        className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 mb-8 transition-colors"
                    >
                        <ArrowLeft size={20} />
                        Terug naar overzicht
                    </button>

                    {/* Header */}
                    <div className="flex flex-col md:flex-row gap-8 mb-12">
                        <img
                            src={interview.image}
                            alt={interview.name}
                            className="w-48 h-48 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                            <h1 className="text-4xl font-bold mb-2">{interview.name}</h1>
                            <p className="text-xl text-emerald-400 mb-4">{interview.role}</p>
                            <p className="text-neutral-400 mb-4">{interview.affiliation}</p>
                            <div className="flex items-center gap-4 text-sm text-neutral-400">
                                {interview.date && (
                                    <span className="flex items-center gap-1">
                                        <Calendar size={16} /> {interview.date}
                                    </span>
                                )}
                                <span className="flex items-center gap-1">
                                    <Clock size={16} /> {interview.duration}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Biography */}
                    <section className="mb-12">
                        <h3 className="text-2xl font-bold mb-4">Achtergrond</h3>
                        <p className="text-neutral-300 leading-relaxed">{interview.bio}</p>
                    </section>

                    {/* Key Topics */}
                    {interview.keyTopics && interview.keyTopics.length > 0 && (
                        <section className="mb-12">
                            <h3 className="text-2xl font-bold mb-4">Belangrijkste onderwerpen</h3>
                            <div className="flex flex-wrap gap-2">
                                {interview.keyTopics.map((topic, idx) => (
                                    <span
                                        key={idx}
                                        className="bg-emerald-800 px-4 py-2 rounded-full text-sm"
                                    >
                                        {topic}
                                    </span>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Interview Content */}
                    <section className="mb-12">
                        <h3 className="text-2xl font-bold mb-6">Interview</h3>
                        {renderInterviewContent(interview)}
                    </section>

                    {/* Download */}
                    {interview.downloadUrl && (
                        <section>
                            <a
                                href={interview.downloadUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors"
                            >
                                <Download size={20} />
                                Download volledige transcriptie (PDF)
                            </a>
                        </section>
                    )}
                </div>
            </div>
        );
    }

    // Overview page (geen interview geselecteerd)
    return (
        <div className="min-h-screen bg-neutral-900 text-neutral-100">
            {/* EXTRA PADDING AAN DE TOP OM ONDER DE NAVIGATION TE BLIJVEN */}
            <div className="pt-20 max-w-6xl mx-auto px-6 pb-16">
                {/* Header */}
                <div className="text-center mb-16">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-neutral-300 hover:text-white mb-6 transition-colors"
                    >
                        <ArrowLeft size={20} />
                        Terug naar longread
                    </Link>
                    <h1 className="text-5xl font-bold mb-6 text-white">Alle Interviews</h1>
                    <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
                        Volledige interviews met transcripties, audiofragmenten en video's.
                        Verschillende perspectieven op de Nederlandse vee-industrie.
                    </p>
                </div>

                {/* Interview Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {interviews.map((interview) => (
                        <div
                            key={interview.id}
                            className="bg-neutral-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer hover:bg-neutral-700"
                            onClick={() => navigate(`/interviews/${interview.id}`)}
                        >
                            <div className="relative h-64">
                                <img
                                    src={interview.image}
                                    alt={interview.name}
                                    className="w-full h-full object-cover transition-all duration-500 hover:brightness-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                <div className="absolute bottom-4 left-4 right-4">
                                    <h3 className="text-2xl font-bold mb-1 text-white">{interview.name}</h3>
                                    <p className="text-neutral-300">{interview.role}</p>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-neutral-300 mb-4 line-clamp-3">{interview.bio}</p>
                                <div className="flex items-center justify-between text-sm text-neutral-400 mb-4">
                                    <span>{interview.date}</span>
                                    <span>{interview.duration}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex flex-wrap gap-2">
                                        {interview.keyTopics && interview.keyTopics.slice(0, 2).map((topic, idx) => (
                                            <span
                                                key={idx}
                                                className="bg-neutral-700 px-3 py-1 rounded-full text-xs text-neutral-200"
                                            >
                                                {topic}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                navigate(`/interviews/${interview.id}`);
                                            }}
                                            className="px-3 py-2 rounded-md text-sm font-medium transition-colors bg-purple-600 text-white hover:bg-purple-500"
                                        >
                                            Lees interview
                                        </button>
                                        <ExternalLink size={20} className="text-neutral-300" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}