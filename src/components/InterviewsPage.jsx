import React, { useState, useEffect } from 'react';
import { ArrowLeft, Play, Pause, Download, ExternalLink, Calendar, Clock } from 'lucide-react';
import { Link, useParams, useNavigate } from 'react-router-dom';

export default function InterviewsPage() {
    const { id: interviewId } = useParams(); // Haal ID uit URL
    const navigate = useNavigate();
    const [selectedInterview, setSelectedInterview] = useState(null);
    const [playingAudio, setPlayingAudio] = useState(null);

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
                    question: 'Wat zou een eerlijker lobbysysteem betekenen voor de veehouderij?',
                    answer: 'Rechtvaardigheid. Boeren verdienen een eerlijke behandeling en een toekomst. We willen beleid dat gemaakt wordt mét boeren, niet over hun hoofden heen. We willen realistisch klimaatbeleid dat niet hele sectoren kapot maakt. En we willen dat Nederland haar voedselproducenten weer gaat waarderen in plaats van demoniseren. Deze mensen voeden ons land. Toon wat respect.'
                }
            ],
            date: 'December 2024',
            downloadUrl: 'https://example.com/arco-transcript.pdf'
        },
        {
            id: 'wouter-waayer',
            name: 'Wouter Waayer',
            role: 'Voormalig boerenzoon, nu dierenrechtenactivist',
            affiliation: 'Wakker Dier',
            duration: 'Audio fragmenten + tekst',
            type: 'audio',
            image: '/afbeeldingen-interviews/Wouter_waayer.jpg',
            bio: 'Wouter Waayer groeide op op een melkveehouderij in Friesland. Na zijn studie Diergeneeskunde radicaliseerde hij en werd activist voor dierenrechten. Hij werkt nu als campagneleider bij Wakker Dier.',
            keyTopics: ['Dierenwelzijn', 'Familiebreuk', 'Activisme', 'Veganisme'],
            date: 'November 2024',
            audioFragments: [
                {
                    title: 'Fragment 1: Opgroeien op de boerderij',
                    duration: '8:34',
                    description: 'Wouter vertelt over zijn jeugd tussen de koeien en het moment waarop hij begon te twijfelen aan de veehouderij.',
                    audioUrl: 'https://example.com/wouter-1.mp3'
                },
                {
                    title: 'Fragment 2: De breuk met zijn familie',
                    duration: '12:15',
                    description: 'Het emotionele verhaal over hoe zijn keuzes leidden tot vervreemding van zijn ouders en broers.',
                    audioUrl: 'https://example.com/wouter-2.mp3'
                },
                {
                    title: 'Fragment 3: Waarom radicalere actie nodig is',
                    duration: '7:23',
                    description: 'Wouter legt uit waarom hij denkt dat het huidige tempo van verandering te langzaam is.',
                    audioUrl: 'https://example.com/wouter-3.mp3'
                }
            ],
            transcript: `
                FRAGMENT 1: Opgroeien op de boerderij (8:34)
                
                [00:00] Interviewer: "Hoe was het om op te groeien op een boerderij?"
                
                [00:08] Wouter: "Ik vond het fantastisch. Ik voelde me vrij, was altijd buiten, en de dieren waren letterlijk mijn speelkameraden. Als klein jongetje heb ik uren tussen de kalveren doorgebracht. Dat gevoel van verbondenheid met die beesten... dat is nooit weggegaan."
                
                [00:45] "Maar er was ook een keerzijde. Ik zag koeien die ziek werden, kalveren die weggehaald werden bij hun moeders. Als kind vroeg ik daar naar, maar het antwoord was altijd: 'Zo hoort het nu eenmaal.' Ik accepteerde dat, want mijn vader deed het ook, mijn opa deed het ook."
                
                [... volledige transcripties van alle fragmenten ...]
            `,
            downloadUrl: 'https://example.com/wouter-transcript.pdf'
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
            date: 'November 2024',
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
            role: 'Vakjournalist Landbouw',
            affiliation: 'Boerderij Magazine',
            duration: 'Video + transcriptie',
            type: 'video',
            image: '/afbeeldingen-interviews/lammert-van-raan.webp',
            bio: 'Lammert van Raan is al 25 jaar journalist in de landbouwsector. Hij schrijft voor verschillende vakbladen en probeert nuance te brengen in een steeds gepolariseerder debat.',
            keyTopics: ['Landbouwjournalistiek', 'Nuance', 'Polarisatie', 'Feiten vs emotie'],
            date: 'Oktober 2024',
            transcript: `
                [00:00] Interviewer: "Als journalist die al decennia de sector volgt, wat valt je het meest op aan het huidige debat?"
                
                [00:12] Lammert: "De verharding. Vroeger kon je nog genuanceerd schrijven over voor- en nadelen, nu word je direct in een hoek geduwd. Schrijf je iets positiefs over boeren? Dan ben je een lobbyist. Iets kritisch? Dan ben je een 'boerenbasher'. De middenpositie is verdwenen."
                
                [00:50] "En dat is jammer, want beide kanten hebben valide punten. Ja, de sector moet verduurzamen. Maar ja, boeren zijn ook mensen met gezinnen en hypotheken. Ja, dierenwelzijn moet beter. Maar ja, consumenten willen wel goedkoop vlees. Niemand wil meer die complexiteit zien."
                
                [... volledige transcriptie ...]
            `,
            videoUrl: 'https://example.com/lammert-interview.mp4',
            downloadUrl: 'https://example.com/lammert-transcript.pdf'
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
            date: 'December 2024',
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
                    answer: 'Wij hebben nauwelijks budget voor belangenbehartiging, in tegenstelling tot de gangbare, gevestigde partijen. Wij vragen namelijk alleen vrijwillige donaties van ‘onze’ boeren, omdat we weten dat ze het vaak financieel niet breed hebben. Andere belangenbehartigers hebben hele kantoren met lobbyisten, daar kunnen wij nauwelijks tegenop. Daarom doen we wat we kunnen om het geluid van de Caring Farmers te laten horen, maar van intensieve lobby is van onze kant geen sprake.'
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
            date: 'November 2024',
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
                    answer: 'Ja, wij zien de promotiesubsidies voor vlees en zuivel als symptoom van een breder systeem waarin de intensieve veehouderij structureel ondersteund wordt. Bijvoorbeeld: De subsidies promoten consumptie van dierlijke producten, terwijl dat haaks staat op klimaat-, milieu- en dierenwelzijnsambities. Duurzame alternatieven krijgen structureel minder ondersteuning of promotie. Er is vaak sprake van gevestigde belangen en terugkerende steunmechanismen, waardoor transitie wordt tegengehouden of vertraagd. Dus ja: deze subsidies passen in een groter systeem van politieke en economische steun, van productie-logica, consumptiepatronen en regulering.'
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

    const renderInterviewContent = (interview) => {
        if (interview.type === 'audio' && interview.audioFragments) {
            return (
                <div className="space-y-6">
                    <h4 className="text-xl font-bold">Audiofragmenten</h4>
                    {interview.audioFragments.map((fragment, idx) => (
                        <div key={idx} className="bg-neutral-700 p-6 rounded-lg">
                            <div className="flex items-start justify-between mb-3">
                                <div>
                                    <h5 className="font-bold text-lg">{fragment.title}</h5>
                                    <p className="text-sm text-neutral-400 flex items-center gap-2 mt-1">
                                        <Clock size={14} /> {fragment.duration}
                                    </p>
                                </div>
                                <button
                                    onClick={() => setPlayingAudio(playingAudio === idx ? null : idx)}
                                    className="bg-emerald-600 hover:bg-emerald-500 p-3 rounded-full transition-colors"
                                >
                                    {playingAudio === idx ? <Pause size={20} /> : <Play size={20} />}
                                </button>
                            </div>
                            <p className="text-neutral-300">{fragment.description}</p>
                        </div>
                    ))}
                </div>
            );
        }

        if (interview.type === 'text' && interview.writtenInterview) {
            return (
                <div className="space-y-8">
                    <div className="bg-amber-900/20 border border-amber-700 p-4 rounded-lg">
                        <p className="text-amber-200 text-sm">
                            <strong>Let op:</strong> Dit interview is schriftelijk afgenomen. De vragen zijn per email verzonden en beantwoord.
                        </p>
                    </div>

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
                <div className="max-w-4xl mx-auto px-6 py-12">
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
            <div className="max-w-6xl mx-auto px-6 py-16">
                {/* Header */}
                <div className="text-center mb-16">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 mb-6 transition-colors"
                    >
                        <ArrowLeft size={20} />
                        Terug naar longread
                    </Link>
                    <h1 className="text-5xl font-bold mb-6">Alle Interviews</h1>
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
                            className="bg-neutral-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
                            onClick={() => navigate(`/interviews/${interview.id}`)}
                        >
                            <div className="relative h-64">
                                <img
                                    src={interview.image}
                                    alt={interview.name}
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                <div className="absolute bottom-4 left-4 right-4">
                                    <h3 className="text-2xl font-bold mb-1">{interview.name}</h3>
                                    <p className="text-emerald-400">{interview.role}</p>
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
                                                className="bg-neutral-700 px-3 py-1 rounded-full text-xs"
                                            >
                                                {topic}
                                            </span>
                                        ))}
                                    </div>
                                    <ExternalLink size={20} className="text-emerald-400" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}