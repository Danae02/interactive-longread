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
            role: 'Politicoloog & Lobby-expert',
            affiliation: 'Universiteit Leiden',
            duration: 'Tekst (gesprek getranscribeerd)',
            type: 'text',
            image: '/afbeeldingen-interviews/arco-timmermans.jpg',
            bio: 'Arco Timmermans is hoogleraar Publiek Beleid aan de Universiteit Leiden en expert op onder andere het gebied van lobbyen, politieke agendavorming en publiek beleid. Hij doet al jaren onderzoek naar lobbyisme en belangenbehartiging in Nederland en internationaal.',
            keyTopics: ['Lobbyisme', 'Boerenbelangen', 'Stikstofbeleid', 'Politieke invloed', 'Transparantie'],
            interviewNote: {
                text: 'Dit gesprek is mondeling gevoerd en opgenomen. De onderstaande vragen en antwoorden zijn gebaseerd op de transcriptie van het gesprek.'
            },
            writtenInterview: [
                {
                    question: 'Hoe groot is de lobbykracht van de Nederlandse vee-industrie vergeleken met andere sectoren?',
                    answer: (
                        <div className="space-y-4">
                            <p>De lobbyinvloed, sowieso die van de landbouw – dus landbouw, veeteelt en visserij – is altijd groot geweest. In het verleden werd dat wel eens de "ijzeren ring" genoemd. Die is altijd groot geweest. Die is wel afgenomen, omdat er meer spelers zijn die ook heel zichtbaar zijn en die een tegengeluid vertolken.</p>
                            <p>De invloed is afgenomen, maar de invloed is nog wel heel duidelijk aanwezig. Je hebt natuurlijk wel de stille lobby. De stille lobby is vaak niet zichtbaar en is ook niet bedoeld om zichtbaar te zijn. Daar worden nog steeds heel veel zakelijke belangen behartigd. Dat gebeurt nog wel.</p>
                            <p>Maar over de hele linie denk ik dat de belangen van de sector minder vanzelfsprekend altijd op de eerste rang zitten. Belangenbehartigers uit die sector zitten dus ook minder vanzelfsprekend altijd op de eerste rang, of staan altijd vooraan om altijd te krijgen wat ze vragen. Of hebben ook minder grip gewoon op het hele beleidsproces gekregen. Dus dat is denk ik wel wat je ziet.</p>
                            <p>Dus er is nog steeds een machtspositie, maar die machtspositie is niet meer zo vanzelfsprekend, zou je kunnen zeggen, als die was.</p>
                        </div>
                    )
                },
                {
                    question: 'Waarom en hoe is de Farmers Defence Force ontstaan?',
                    answer: (
                        <div className="space-y-4">
                            <p>Het afnemen van de invloed kun je eigenlijk een beetje zien als de reden waarom er bijvoorbeeld een Farmers Defence Force is ontstaan. Dat heeft te maken met het onder druk komen van de traditionele belangenorganisatie, LTO Nederland. Waardoor een aantal boeren en bedrijven dachten van: hé, wij moeten zorgen dat onze belangen wel goed verdedigd kunnen blijven.</p>
                            <p>Dus in wezen – dat klinkt misschien tegenstrijdig, maar het luidruchtiger worden van de lobby uit de boerenhoek – is eigenlijk juist een teken dat de altijd aanwezige invloed is afgenomen.</p>
                        </div>
                    )
                },
                {
                    question: 'Heeft de veehouderij-lobby nog evenveel invloed als vroeger?',
                    answer: (
                        <div className="space-y-4">
                            <p>De veto-lobbyspelers, die zeggen "blijf met je poten van de veehouderij af", die krijgen echt niet meer wat ze willen zoals ze dat misschien tien of twintig of dertig jaar geleden kregen. Partijen die andere dingen vooropstellen, omdat ze idealen hebben voor een veiliger, eerlijker, diervriendelijker, milieuverantwoordelijker wereld, die hebben juist meer ruimte genomen ook op de politieke agenda.</p>
                            <p>Vanuit een lobbymachtsperspectief is het voor mij dus niet zo dat de veehouderij iedereen wegspeelt. Dat is niet meer zo.</p>
                            <p>Dus er is nog steeds een machtspositie, maar die machtspositie is niet meer zo vanzelfsprekend, zou je kunnen zeggen, als die was.</p>
                        </div>
                    )
                },
                {
                    question: 'Hoe kijkt u naar de manier waarop de vee-industrie erin slaagt nog haar belangen te beschermen, ondanks die groeiende maatschappelijke kritiek?',
                    answer: (
                        <div className="space-y-4">
                            <p>Dat doen ze door gewoon continu, full speed, 24/7, op allerlei manieren de invloed en de toegang die er is te blijven benutten. En door het verhaal, ik noem dat altijd, te dramatiseren. Daarmee bedoel ik niet "aanstelleritis", maar dramatisering betekent dat je van een meer technisch of zakelijk belang een veel bredere, emotionelere kwestie maakt.</p>
                            <p>Dat zag je bij de boeren die het hebben over het voortbestaan van familiebedrijven. Zij maken van een belangenonderwerp over inkomen en de sector ook een identiteitsonderwerp of een existentieel onderwerp. Dus dat noem ik dan dramatisering, en dat zie je gebeuren.</p>
                            <p>Maar dat is tegelijkertijd ook wel weer een teken dat de ouderwetse, vanzelfsprekende invloed er niet meer zo is. Als je makkelijk kunt lobbyen via je connecties, en zo invloed hebt op het regeerakkoord en dergelijke, dan hoef je niet die vergrotende trap van dramatisering te kiezen. Dan moet je wel laten zien dat je een achterban hebt.</p>
                            <p>Maar ook de kiezersachterban – of de voorban moet ik eigenlijk zeggen, de partijen die boerenbelangen behartigen – daar zit veel verandering in. De BBB is nu kleiner geworden, het CDA is weer groter geworden, maar die profileren zich natuurlijk nu, zeker onder Bontenbal, niet meer alleen als een partij voor het platteland. Voor een deel is dat wel historisch en komt het ook nog steeds voor waar de kiezers vandaan komen, maar partijen zijn wat dat betreft veel meer aan het "snoepen" waar ze op de markt kiezers kunnen veroveren en verleiden.</p>
                            <p>Daardoor moeten politieke partijen zich ook niet meer per se laten associëren met één soort achterban. Dat kunnen ze zich niet veroorloven. De spelers, de traditionele spelers of degenen die het meest dramatiseren, zullen natuurlijk proberen te laten zien dat we niet zomaar heel ingrijpend kunnen veranderen. Daar moet een prijs voor worden betaald, zou je kunnen zeggen. Het moet toekomstbestendig zijn voor familiebedrijven.</p>
                            <p>Niet alle boerenbedrijven zijn familiebedrijven. Er is ook een hele grote georganiseerde sector achter deze bedrijven. Maar al met al, kijk maar naar de melkveehouderij, dat zijn gewoon boerenbedrijven die vaak in een coöperatie zitten, en die allemaal hun eigen aandeel hebben. Dat is een traditie en die bestaat nog. Ik denk ook niet dat dat verdwijnt. Het hoeft misschien ook helemaal niet te verdwijnen.</p>
                            <p>De manier waarop mensen zich organiseren is één ding. Maar de inzet, waar men op inzet, welke toekomst men ziet, welke onderwerpen relevant zijn, hoe men het belang van de sector koppelt aan allerlei maatschappelijke vraagstukken – dat wordt ook gezien. Het is gewoon niet zo simpel om dat allemaal in balans te krijgen. Het is altijd duwen en trekken.</p>
                            <p>Politiek en lobbyen gaan allebei om duwen en trekken en om druk uitoefenen. Dat spel is moeilijker geworden door de spelers die nu allerlei verschillende manieren van beïnvloeding gebruiken.</p>
                            <p>Het is niet meer één front met één vertegenwoordiger van de organisatie. Er is eigenlijk een vermenigvuldiging van soorten spelers, waarbij sommigen willen vernieuwen en anderen liever niet. En dat is een lastige groep – moeilijk in de zin dat het niet meer zo makkelijk is om iedereen in het mandje te houden. Dus die kikkers die springen eruit, zo zie ik dat.</p>
                        </div>
                    )
                },
                {
                    question: 'Verwacht u een totale systeemverandering in de Nederlandse veehouderij?',
                    answer: (
                        <div className="space-y-4">
                            <p>Er is best wel het een en ander veranderd, maar ik denk niet dat we in Nederland in de veehouderij een totale systeemverandering gaan krijgen. Wat misschien nodig is en wat haalbaar is, dat zijn twee verschillende dingen. En als ik kijk wat ik inschat in het krachtenspel, dan denk ik dat de traditionele, wat meer behoudende krachten nog voldoende invloed zullen overhouden om te voorkomen dat alles compleet over de schop gaat.</p>
                            <p>Zelfs druk vanuit de omgeving als Brussel zal daar niet groot genoeg voor zijn om dat voor elkaar te krijgen, denk ik.</p>
                            <p>Voor sommigen kan dit een sombere boodschap zijn, afhankelijk van je eigen standpunt. Ik probeer het een beetje realistisch in te schatten. Dus er ontstaan zeker veranderende krachtsverhoudingen. Er zijn spelers bijgekomen die maken dat de lobby van en voor boeren, landbouw en veehouderij niet per se altijd krijgt wat ze wil. Maar dat betekent ook weer niet dat ze helemaal niks meer krijgt.</p>
                        </div>
                    )
                },
                {
                    question: 'Hoe transparant is lobbyen in Nederland, in het algemeen maar ook met betrekking tot de vee-industrie-lobby?',
                    answer: (
                        <div className="space-y-4">
                            <p>Zakelijke belangen worden meestal niet behartigd met het idee dat iedereen mag meekijken. Dat geldt voor de vee-industrie, maar net zo goed voor de petrochemische of de maakindustrie, of welke sector dan ook.</p>
                            <p>Bedrijven bestaan niet om te lobbyen. NGO's, die bestaan om te lobbyen. Of anders gezegd: hun doel is om via pleidooien mensen te overtuigen dat er iets moet veranderen of dat de huidige situatie niet houdbaar is.</p>
                            <p>Maar bedrijven – of het nu boerenbedrijven of andere veehoudersbedrijven zijn - die bestaan niet om te lobbyen; zij lobbyen om te kunnen blijven bestaan. En dat doen ze vaak en georganiseerd. Net zoals vroeger, al zijn er nu wel meer verschillende manieren van lobbyen bijgekomen.</p>
                            <p>Een deel daarvan is nog steeds de onzichtbare lobby. De directe contacten die er waren, die er nog zijn en die er ook zullen blijven zijn. In Nederland – maar ook in het buitenland – zijn die contacten om verschillende redenen niet zichtbaar.</p>
                            <p>Het punt van onzichtbare lobby is dat die voor iedereen, dus ook voor mij, vaak moeilijk in kaart te brengen is. Onderzoeksjournalisten doen daar veel moeite voor, en soms met succes. Onderzoekers ook. Maar al met al kun je hooguit een beeld krijgen van welke afspraken er op ministeries worden gemaakt door goed door te vragen.</p>
                            <p>En ja, dat maakt dat de transparantie – hoeveel wij kunnen weten en kunnen zien over wat er gebeurt – gewoon beperkt.</p>
                        </div>
                    )
                },
                {
                    question: 'Wat wordt in deze context onder transparantie verstaan, en hoe wordt dit geregeld?',
                    answer: (
                        <div className="space-y-4">
                            <p>Het woord transparant gaat over verantwoording. Je kunt onzichtbaar lobbyen, maar je kunt wel zichtbaar maken voor wie je lobbyt, waarom en wanneer. Dan hebben we het over discussies die nu spelen: moeten we dan een register invoeren waar lobbyisten moeten staan? Of moeten de afspraken die ministers met lobbyisten maken openbaar worden zodat hun agenda's zichtbaar zijn? Zo kun je een heleboel noemen.</p>
                            <p>In Nederland is daar eigenlijk nog steeds weinig over geregeld. Dat is ook weer een kwestie van politieke meerderheidsvorming. Dat begint een beetje te verschuiven, maar er heerst nog steeds een sterk laissez-faire. Het lobbywerk wordt dus erg vrijgelaten en mag zijn eigen gang gaan.</p>
                        </div>
                    )
                },
                {
                    question: 'Wat belemmert het zicht op lobbyactiviteiten?',
                    answer: (
                        <div className="space-y-4">
                            <p>Het is niet alleen een kwestie van het maken van regels, maar ook van hoe bewust de ontvangende partijen zijn – dat zijn de mensen aan de kant van de overheid. Dat kunnen ambtenaren of volksvertegenwoordigers zijn, niet alleen in de Tweede Kamer, maar ook in de Provinciale Staten en gemeenten.</p>
                            <p>De veehouderij heeft daar namelijk veel mee te maken, omdat bedrijven vaak lokaal of regionaal opereren en dus te maken hebben met beleid waar gemeenten en provincies over gaan.</p>
                            <p>Die rol als ontvanger van lobby is in Nederland nog weinig bewust ontwikkeld. Het besef over hoe om te gaan met lobbyisten, zoals de georganiseerde veehouderij, of soms ook de ongeorganiseerde veehouders, is nog beperkt. Ook dat gebrek belemmert het zicht op wat er gebeurt. Daar kan nog heel veel verbeterd worden, denk ik.</p>
                        </div>
                    )
                },
                {
                    question: 'Wat zou een eerlijker lobbysysteem betekenen voor de huidige vee-industrie?',
                    answer: (
                        <div className="space-y-4">
                            <p>Dat betekent dat we voor de intensieve vee-industrie, maar eigenlijk voor alle mogelijke terreinen waar gelobbyd wordt, meer werk moeten maken van registraties. Zoals een lobbyregister, of van mijn part het bijhouden van de agenda's. Maar ook het bewuster maken van degenen die aan de ontvangende kant zitten zoals ambtenaren, volksvertegenwoordigers en bestuurders. Zij moeten beter bijhouden met wie ze praten en hoe vaak ze dat doen.</p>
                            <p>Zo kunnen we het speelveld opener maken en eerlijker voor degenen die niet vanzelfsprekend op de eerste rij zitten en geen toegangsprivileges hebben.</p>
                            <p>Daarnaast is ook meer bewustzijn nodig bij de eindontvangers van lobby, dus iedereen die zo'n boodschap krijgt. Of dat nu is van veehouders, Wakker Dier of van wie dan ook. Het moet duidelijker worden wat er met die boodschap gebeurt.</p>
                            <p>Een praktisch voorbeeld: als politieke partijen ambities in hun verkiezingsprogramma zetten, moeten ze, zodra ze in een kabinet zitten, beter bijhouden met wie ze over die onderwerpen praten. Hetzelfde geldt voor afspraken in een regeerakkoord. Houd dat bij en laat het maar zien.</p>
                        </div>
                    )
                },
                {
                    question: 'Wat is er nodig om een effectief lobbyregister in te voeren?',
                    answer: (
                        <div className="space-y-4">
                            <p>Wat je daarvoor nodig hebt, is dat organisaties binnen het openbaar bestuur – dus de overheidsorganisaties – onderling zelf ook meer leren over hoe ze dat doen. En dat gebeurt heel weinig, bijna niet. Kijk bijvoorbeeld naar de provincies. De volksvertegenwoordigers in de Provinciale Staten hebben heel verschillende manieren waarop ze tegen partijen aankijken die komen lobbyen. Dat verschilt per provincie, en er zijn ook verschillende gedragsregels voor.</p>
                            <p>Het zou helpen om dat beter te organiseren, de discussie daarover te voeren en ervan te leren. En te kijken wat wel werkt en wat minder.</p>
                            <p>In Nederland hebben we over het algemeen best een goede vertegenwoordiging van een heleboel maatschappelijke belangen in de veehouderijwereld. Dat zijn niet per se veehouders zelf, maar andere spelers die onderwerpen rond de veehouderij op de agenda willen zetten. Zij hebben echt wel invloed op de agenda. Natuurlijk vinden zij dat vernieuwing, hervorming en herstructurering van de veehouderij te langzaam gaat, terwijl anderen zeggen: "Ho, niet zo snel, want dan leggen we het loodje."</p>
                            <p>Ik probeer het een beetje te bekijken vanuit een neutraal perspectief. Het speelveld kan eerlijker worden door beter te letten op toegang en beter te letten op wat er met lobbyboodschappen gebeurt. Je zou bijvoorbeeld een paragraaf kunnen toevoegen aan nieuwe beleidsbeslissingen – wetgeving of begrotingsbeslissingen – waarin je laat zien met wie je gesproken hebt. Dan kun je ook terugvoeren wie het meest invloedrijk is geweest. Maar voor onderzoekers is het altijd een puzzel om precies uit te vogelen hoe dat in elkaar zit.</p>
                            <p>Heel veel lobby is een beetje de dark side of the moon. Die is er wel – het is de helft van de maan of meer – maar je ziet hem niet per se. Dus hoe kun je daar nou zicht op krijgen? Betere regels en meer verantwoording helpen daarbij.</p>
                        </div>
                    )
                },
                {
                    question: 'Hoe vergelijkt u de situatie in Nederland met andere Europese landen wat betreft de invloed van lobby\'s?',
                    answer: (
                        <div className="space-y-4">
                            <p>Nederland is een heel druk landje wat betreft de discussie over lobbyen. Maar het gekke is eigenlijk dat er juist in Nederland relatief weinig georganiseerd en geregeld is – er zijn weinig formele regels of spelregels. Dat komt een beetje door onze overlegdemocratie. We hadden lange tijd het idee dat formele regels niet nodig waren, omdat we elkaar onderling wel kunnen vertrouwen.</p>
                            <p>Als er vertrouwen is, hoef je niet allerlei expliciete officiële regels te maken. Regels zijn eigenlijk een soort codificatie, een vastlegging van wat misschien wel wantrouwen is.</p>
                            <p>Het punt is alleen dat die goedmoedige vertrouwensbasis niet per se meer de werkelijkheid is. Er zijn nu spelers die veel heftiger in het spel staan dan vroeger. Er is juist veel wantrouwen, ook in de veehouderij en tussen de veehouderij en andere partijen. En dat wantrouwen wordt soms ook gekoesterd, omdat het helpt om je boodschap naar voren te brengen. Als je als NGO een tegenstander kunt aanwijzen, kun je dat goed gebruiken in je campagne. In een verhaal heb je vaak een tegenstander nodig, dat is retorisch.</p>
                            <p>Daardoor is er wat ik wel eens "gekoesterd wantrouwen" noem. Het kan lijken alsof het wantrouwen groter is dan het in werkelijkheid is. Maar in Nederland is er dus relatief weinig officieel geregeld. We dachten lang dat dat niet nodig was, omdat de lijntjes kort zijn. Vroeger was het bijvoorbeeld heel normaal als iemand uit de politiek voorzitter werd van een vakbond of een boerenorganisatie – dat was een gewone carrièrestap.</p>
                            <p>Nu zeggen we: ho, ho, ho, dat is een draaideurlobbyist. Iemand die de politiek verlaat en de volgende dag vanuit een zakelijk belang met een andere pet binnenkomt om zijn oude collega's aan te spreken. Dat noemen we tegenwoordig een draaideur.</p>
                        </div>
                    )
                },
                {
                    question: 'Wat is het probleem met draaideurlobbyisten?',
                    answer: (
                        <div className="space-y-4">
                            <p>Oud-politici worden gevraagd om lobbyklussen te doen. Niet omdat ze zo'n aardig kopje hebben, maar omdat ze connecties hebben. Ze zijn daar bruikbaar voor. Ze hebben kennis die anderen niet hebben, maar dat kan wel belangenverstrengeling opleveren.</p>
                            <p>En er zijn nog steeds veel politici... ik durf het wel zo te zeggen: bij zakelijke belangen wat meer aan de rechterkant, en bij maatschappelijke belangen wat meer aan de linkerkant, die de draaideurkwestie niet echt als een probleem zien. Dat is nog steeds zo.</p>
                            <p>Als iemand de politiek uitgaat, dan wil je, als je nog niet te oud bent een nieuwe baan. Dan kun je misschien goed betaald worden, of je kunt geloven in de maatschappelijke doelen die je vanuit de politiek altijd hebt uitgedragen en dat dan voortzetten vanuit een maatschappelijke organisatie. Op zich kan dat allemaal heel begrijpelijk zijn, maar je moet wel oppassen dat er geen belangenverstrengelingsprobleem ontstaat.</p>
                            <p>En ook daar geldt: vroeger deden we het op die manier, maar nu ontstaat er een risico van iets dat wel eens netwerkcorruptie wordt genoemd. Dat is niet corruptie in de zin van omkoping, maar doordat je binnen een netwerk snel na elkaar verschillende functies kunt vervullen. Daardoor kan een voordeel, een privilege of belangenverstrengeling ontstaan. Daar kijken we nu in Nederland kritischer naar. Tenminste, een deel van Nederland kijkt daar kritischer naar.</p>
                        </div>
                    )
                },
                {
                    question: 'Hoe wordt volgens u de publieke beeldvorming beïnvloed door de lobbyisten van de vee-industrie?',
                    answer: (
                        <div className="space-y-4">
                            <p>Een tijdje geleden werkte ik mee aan een uitzending over de lobby vanuit de melkveehouderij, en daarin kwam ook de varkenssector aan bod. Daar zag je allerlei reclamemateriaal – want dat was het eigenlijk – gericht op schoolklassen. Scholen gingen op bezoek bij de boerderij, en op zich is dat natuurlijk heel goed, denk ik.</p>
                            <p>Maar wat je dan ziet – ik heb wat van dat materiaal wel eens gezien, en ik ben zelf geen nieuwsmaker, maar dan denk je: dit is wel heel erg gestuurde informatie. Is dit nou maatschappelijk, of is het eigenlijk commercieel? Daarmee ontstaat een risico op belangenverstrengeling. Ook scholen zijn in zekere zin ontvangers van lobby op deze manier, en dat is een voorbeeld van de aanwezige invloed van de melkveehouderij.</p>
                            <p>Je moet je af blijven vragen: is dit leermateriaal, of is het consumptiemateriaal? In Nederland is dat ook heel lang vanzelfsprekend beleid geweest. Ik heb het zelf ook meegemaakt op school – we kregen veel melk. We hadden een melkplas in Europa. Dus: hoe drinken we dat nou allemaal weg, zodat die plas wat kleiner wordt?</p>
                            <p>Een heleboel gebeurde. Maar het is interessant dat je, op het grensvlak van markt en niet-markt – met niet-markt bedoel ik alles wat niet commercieel is maar maatschappelijk – heel veel voorlichting en campagnes zag en ziet, voor die schoolbezoeken. Eigenlijk is dit toch al een beetje lobby. En daar moeten we denk ik eens goed naar kijken of dat eigenlijk wel eerlijk is.</p>
                        </div>
                    )
                },
                {
                    question: 'Wat is een ander voorbeeld van lobbyinvloed?',
                    answer: (
                        <div className="space-y-4">
                            <p>Een ander voorbeeld is ook interessant: de belasting die je betaalt op alternatieven voor melk, die valt in hetzelfde belastingtarief als frisdranken. Dat is voor honderd procent het resultaat van lobbyen. Het verschil in belastingtarieven tussen dierlijke producten die we melk noemen, en niet-dierlijke alternatieven… dat is door lobby tot stand gekomen.</p>
                            <p>Je ziet overigens dat melkveeconcerns wel daarin meegaan. Zij zeggen: "Ja, er is ruimte voor nieuwe producten naast koemelk." Maar terugkijkend is het opvallend dat de belasting op koemelk lager is dan op havermelk. Dat is ook een lobbyresultaat. En er zijn ontvangers van die lobby die oké vinden.</p>
                            <p>Jij en ik kunnen misschien zeggen: dat is helemaal niet oké, dat is raar. Dat is voortrekken, of benadeling van alternatieven. Die zijn vaak al duurder, en dan komen ze ook nog eens in een hoger belastingtarief. Dat geeft allerlei prikkels aan bedrijven die iets alternatiefs willen bieden, maar de lobby rond die belasting maakt daarin natuurlijk wel een verschil.</p>
                        </div>
                    )
                },
                {
                    question: 'Kent u een voorbeeld van een sector waarbij het gelukt is om een sterke lobby of machtstructuur te doorbreken?',
                    answer: (
                        <div className="space-y-4">
                            <p>Als er één sector is die zo goed als niet meer legaal kan lobbyen, en eigenlijk bijna verboden is om nog te lobbyen, dan is het wel de tabaks- en vaping-industrie. Als je kijkt, die is behoorlijk in het defensief gedrongen, wat lobbyen betreft. Er hoeft maar één incident te zijn en iedereen spreekt er meteen weer schande van.</p>
                            <p>Dat is wel een voorbeeld van een sector die minder machtig is geworden, al heeft die sector natuurlijk nog steeds invloed. Dus helemaal alle kaarten uit handen geslagen is ook weer niet zo. We zien wel de afgenomen invloed van hun lobby, in die zin dat het product dat ze maken steeds meer ter discussie staat en er meer bezwaren tegen zijn.</p>
                            <p>Als je kijkt naar de framing, dus hoe kijk je naar iets, hoe praat je over iets, dan zie je dat roken eerst in een "eigen keuze"-frame zat: iedereen moet dat zelf kunnen bepalen, of sterker nog, roken was een teken van onafhankelijkheid. Dat is volledig omgeslagen van een "eigen keuze"-frame naar een "gevaar"-frame.</p>
                        </div>
                    )
                },
                {
                    question: 'Heeft de traditionele bedrijfslobby nog evenveel invloed?',
                    answer: (
                        <div className="space-y-4">
                            <p>Ik denk dat in het algemeen de klassieke bedrijfslobby, op welk terrein van de economie ook, tegenwoordig minder vaak krijgt wat ze wil, en minder aan het langste eind trekt dan tien of vijftien jaar geleden. Daar zijn wel echt verschillen in.</p>
                            <p>Er zijn nu meer tegengeluiden zichtbaar, en die wegen ook mee in de politieke arena. Dat is ook een reden waarom er zoveel politieke problemen zijn. Als het lobbyspeelveld eerlijker wordt en er meer verschillende geluiden toegang krijgen die meegewogen moeten worden, dan maakt dat de politieke besluitvorming niet makkelijker.</p>
                            <p>Politieke partijen zijn ook kleiner geworden en hebben hun eigen achterban. Daardoor zie je bijvoorbeeld dat zelfs al het formeren van een kabinet een stuk moeilijker is geworden. Ik verlang niet terug naar de "goede oude tijd", dat bedoel ik niet, maar het heeft wel consequenties.</p>
                            <p>Het speelveld is opener geworden, zeker in deze tijd waarin de drempel om te lobbyen steeds lager wordt. In deze digitale wereld hoef je geen grote massa de straat op te krijgen om invloed te hebben. Een influencer kan dat vanuit huis zo doen. En dat heeft enorme consequenties voor hoe beleidsmakers al die boodschappen moeten verwerken.</p>
                            <p>We leven dus in een steeds verstrooidere wereld, waarbij de grip op het spel veel minder voorspelbaar is. Aan de ene kant houdt dit in dat de traditionele machten minder machtig zijn. Aan de andere kant weten we niet zeker wat ervoor in de plaats komt. Ik bedoel daarmee niet dat NGO's een monopolie op invloed krijgen – dat zal nooit gebeuren. Maar zij hebben wel degelijk een rol in het spel en ook invloed.</p>
                            <p>Maar er zijn ook nog weer andere ontwikkelingen: de invloed van sociale media, waar gewone mensen meningen en hypes creëren, is voor beleidsmakers net zo belangrijk geworden als de invloed van zakelijke of maatschappelijke lobby. Daardoor is het veel minder voorspelbaar geworden wat er gebeurt. Het onvoorspelbare is eigenlijk de regel geworden.</p>
                        </div>
                    )
                },
                {
                    question: 'Hebben NGO\'s en lobby\'s met een wat groter budget een gelijk speelveld?',
                    answer: (
                        <div className="space-y-4">
                            <p>Nou, als het alleen zou gaan om hoeveel geld je hebt om te lobbyen, dan zou het geen gelijk speelveld zijn. In die zin is het ook niet eerlijk, want als je geld hebt en je kunt goede, slimme, getrainde lobbyisten inhuren, heb je vaak meer kans dan wanneer je een vrijwilligersorganisatie bent.</p>
                            <p>Maar aan de andere kant kom ik terug bij dat punt van de uitdagers. Toch zie je dat kleine spelers, die ook een beetje de gunfactor meekrijgen, soms meer invloed hebben dan je op basis van de omvang van hun groep of organisatie zou verwachten. Als ze het spel maar slim spelen.</p>
                            <p>Dus rijke lobby's winnen niet altijd. Zeker niet. Ze hebben wel meer mogelijkheden om het professioneel aan te pakken, zeker om de binnenroute te bewandelen. Dat betekent: gebruikmaken van directe contacten die ze al hebben, en daar hun ervaring op inzetten. Toegang tot beleidsmakers dus. Maar dat is niet per se alleen een kwestie van geld. Het gaat ook om connecties, om dat onzichtbare netwerk binnen een sector. Dat bouw je op, dat is als het ware een soort kapitaal dat je geleidelijk aan verzamelt.</p>
                            <p>Wat we zien, is dat spelers die zeggen "wij gaan dat uitdagen", dat die best wel in staat zijn om daarin succesvol te zijn. Dat is dus in die zin ook wel een vermindering van de traditionele macht, en van het idee dat je met veel geld altijd de lobby wint.</p>
                        </div>
                    )
                },
                {
                    question: 'Welke voordelen hebben spelers met een groter budget in het lobby-spel?',
                    answer: (
                        <div className="space-y-4">
                            <p>Ja, als je twee miljoen budget hebt om professionele lobbyisten in te huren of aan te nemen, dan heb je meer mogelijkheden dan wanneer je afhankelijk bent van een idealist die er maar voor 0,3 fte aan werkt. Alleen de idealist kan het heel slim doen. En dat is ook iets. Lobbyen gaat, juist door die dramatisering, niet alleen om wat jij doet, maar ook om met wie je het doet.</p>
                            <p>En als je een heel goedkope maar effectieve coalitie kunt vormen met spelers die dezelfde ideeën hebben, dan kun je net als burgers die zich mobiliseren – die zeggen "we willen dit niet in onze achtertuin" – best indruk maken op beleidsmakers. En die kunnen dan ook niet zomaar genegeerd worden.</p>
                            <p>Maar ja, er zijn zoveel partijen dat degene die het zakelijk aanpakt altijd wel gehoor vindt bij de ene partij, terwijl iemand met een ideaal over hetzelfde onderwerp – wat elkaar soms tegenspreekt – weer een luisterend oor vindt bij een andere partij. En dan is het een kwestie van: welke mensen zitten er uiteindelijk in het kabinet, en wie luistert naar wie?</p>
                            <p>Maar dat het spel niet meer zo voorspelbaar is – en dus ook niet altijd de traditionele lobby wint – dat staat volgens mij wel vast. Alleen daar hebben we nog weinig zicht op, omdat er in Nederland weinig regels zijn. Daar kunnen we dus nog wel wat aan verbeteren, denk ik.</p>
                        </div>
                    )
                },
                {
                    question: 'Denkt u dat consumenten zich meer bewust moeten worden over lobby?',
                    answer: (
                        <div className="space-y-4">
                            <p>Ja, ik denk van wel, zowel consumenten als burgers in hun rol. Ik had het vanochtend met studenten over: waar zou je nu voor gaan lobbyen als je bij een universiteit betrokken was? Ik denk dat elke speler die een aandeel heeft, en dus iets te winnen of te verliezen heeft in het politieke proces waarop de lobby is gericht, bewustzijn nodig heeft.</p>
                            <p>De ontvangende kant, de overheid, heeft zeker meer bewustzijn nodig. Maar ik denk ook dat het goed zou zijn als alle groepen in de samenleving meer bewust worden van lobby – of dat ook gaat gebeuren, is natuurlijk de vraag. Ik denk niet dat we daar te veel illusies over moeten hebben, want er is ook veel volggedrag. Er is heel veel mimicking, naäperij. Je gaat mee met de richting van de stroom.</p>
                            <p>Dat zie je ook aan de plotselinge veranderingen in verkiezingsuitslagen. Partijen waarvan men dacht dat ze zouden winnen, vallen soms tegen. Partijen die zouden verliezen, doen het dan weer beter. Dat komt ook door die plotselinge stroomversnellingen die ontstaan door sociale media en groepsgedrag.</p>
                        </div>
                    )
                }
            ],
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
                    description: `Je reageerde online eerder op discussies over termen als gehakt en burger voor plantaardige producten, hoe kijk je naar dat soort regulering?`,
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
            bio: 'Kevin Brouwer is een jonge, gedreven kandidaat voor de BBB. Als beleidsmedewerker voor de BBB-Tweede Kamerfractie zet hij zich in voor het dichten van de kloof tussen overheid en samenleving. Hij staat voor veiligheid, vertrouwen en gezond verstand, en wil vooral de stem zijn voor mensen die zich niet gehoord voelen: agenten, zorgverleners, ondernemers en boeren.',
            keyTopics: ['Boerenbelangen', 'Regeldruk', 'Stikstofcrisis', 'Platteland'],
            writtenInterview: [
                {
                    question: 'Wat is volgens de BBB de belangrijkste bijdrage van de Nederlandse agrosector aan onze samenleving?',
                    answer: (
                        <div className="space-y-4">
                            <p>Voor ons staat een ding voorop: zonder boeren geen voedsel. De agrosector is allereerst dus letterlijk de basis van onze voedselzekerheid. In een wereld die onrustiger wordt, vinden wij het cruciaal dat Nederland/Europa zelf in staat blijft om voldoende, betaalbaar en veilig voedsel te produceren, in plaats van afhankelijk te zijn/worden van import uit derde landen (met vaak veel lagere standaarden voor milieu en dierenwelzijn).</p>
                            <p>Daarnaast levert de sector een grote bijdrage aan de economie en werkgelegenheid: niet alleen de boerderij zelf, maar de hele keten van toeleveranciers, verwerkers, transport, handel en logistiek. Ook de bijdrage aan de leefbaarheid van het platteland mag niet onderschat worden. Scholen, verenigingen, dorpshuizen en voorzieningen bestaan vaak bij de gratie van een vitale agrarische sector. En tot slot, het landschap waar Nederland zo trots op is, met weides en koeien in de wei is geen natuur die "zomaar" is ontstaan, maar een agrarisch cultuurlandschap dat door generaties boeren is gemaakt en onderhouden. Boeren onderhouden meer dan de helft van ons landschap!</p>
                        </div>
                    )
                },
                {
                    question: 'De BBB is ontstaan uit onvrede over het stikstofbeleid. Kunnen jullie uitleggen waarom boeren zich (toen) niet gehoord voelden?',
                    answer: (
                        <div className="space-y-4">
                            <p>Er komen een paar dingen samen. Boeren werden vooral als probleem gezien, niet als partner. Wij zien, en gelukkig tegenwoordig meer partijen, boeren als onderdeel van de oplossing.</p>
                            <p>Het stikstofbeleid is jarenlang over boeren uitgerold, zonder dat zij serieus zijn betrokken bij de keuzes. Wetgeving, normen en deadlines werden in Den Haag en Brussel bedacht, en op het erf kwam vooral een stapel regels. Die vaak onrealistisch, en onhaalbaar blijken.</p>
                            <p>Wat daar dan ook bij kwam kijken is/was de eenzijdige focus op modellen, en weinig op praktijkkennis. Beleid en vergunningverlening leunen sterk op rekenmodellen zoals AERIUS en kritische depositiewaarden, terwijl boeren de impact daarvan op hun bedrijf vaak niet konden rijmen met wat zij in de praktijk zagen. Dat geeft een gevoel van willekeur en onrecht.</p>
                            <p>Wat ook destijds erg meespeelde is het feit dat lasten vooral bij de landbouw werd neergelegd. Andere sectoren werden (meer) ontzien. Boeren kregen het gevoel dat zij als enigen en hardste moesten inleveren, terwijl luchtvaart, industrie en bijvoorbeeld mobiliteit (relatief langer) werden ontzien. Dat voelt scheef: als er een maatschappelijk probleem is, moet de oplossing ook eerlijk worden verdeeld.</p>
                            <p>Het vooruitzicht van gedwongen uitkoop, strengere mestnormen en blijvend veranderend beleid, zonder langjarige zekerheid, bracht grote emoties en wantrouwen met zich mee. Boeren hebben vaak familiebedrijven, met grond die al generaties in de familie is. Als je dan hoort dat je "moet stoppen of verplaatsen", raakt dat aan identiteit en bestaanszekerheid.</p>
                            <p>Samengevat: boeren voelden zich niet serieus genomen als volwaardige gesprekspartner, maar behandeld als sluitpost van een juridisch stikstofdossier.</p>
                        </div>
                    )
                },
                {
                    question: 'De agrosector heeft te maken met grote spelers zoals veevoerbedrijven en vleesverwerkers. Hoe kijkt de BBB naar de machtspositie van deze bedrijven ten opzichte van individuele boeren?',
                    answer: (
                        <div className="space-y-4">
                            <p>Wij zien dat de machtsbalans in de keten vaak niet in het voordeel van de individuele boer is. Aan de inkoopkant zijn er een beperkt aantal grote veevoerbedrijven; aan de afzetkant een paar grote slachterijen/verwerkers/afnemers. De boer zit daar als relatief kleine speler tussen.</p>
                            <p>Onze kernpunten daarbij: De primaire producent draagt veel risico (prijzen, regelgeving, dierziekten), maar krijgt vaak het kleinste deel van de marge. Contractvoorwaarden zijn soms eenzijdig; wie niet tekent, kan vaak nergens anders heen. BBB vindt dan ook dat beleid zich niet alleen moet richten op "de landbouw" in abstracte zin, maar specifiek op de positie van de boer in de keten. Wij zijn niet tegen grote bedrijven, maar wel tegen situaties waarin de boer feitelijk geen onderhandelingsvrijheid meer heeft.</p>
                        </div>
                    )
                },
                {
                    question: 'Boeren zijn vaak prijsnemer. Hoe kijkt de BBB naar deze dynamiek? Is dat een vrije markt die zijn werk doet, of een onevenwichtige machtspositie?',
                    answer: 'In theorie is het een vrije markt. In de praktijk is het dat vaak niet. BBB vindt daarom dat je dit niet kunt afdoen met: "de markt doet zijn werk". De marktstructuur is uit balans, waardoor boeren onvoldoende onderhandelingsmacht hebben. Wij willen geen totale prijzendictatuur vanuit de overheid, maar wel meer ketenafspraken over eerlijke verdeling van marges, discussie binnen de EU voor instrumenten die boeren een minimum- of kostendekkende prijs dichterbij brengen en een sterkere positie van boeren(organisaties) in onderhandelingen met verwerkers en supermarkten.'
                },
                {
                    question: 'Hoe ziet de BBB de invloed van verschillende partijen op het beleid? En hoe zou volgens jullie een evenwichtig beleidsproces eruitzien?',
                    answer: (
                        <div className="space-y-4">
                            <p>Ons beeld is dat de invloed scheef is komen te liggen. Grote ketenpartijen, NGO's en Brussel-gebaseerde organisaties hebben vaak een vaste stoel aan tafel, terwijl de individuele boer en ook kleinere ketenpartijen te vaak achteraf mogen aanhoren wat er besloten is. In Europees verband, maar toch ook Nederlands verband, zie je dat belangen van boeren soms ondersneeuwen onder een dikke laag beleidsrapporten en NGO-standpunten. De Tweede Kamer is ook overactief in het indienen/steunen van moties die vervolgens door opeenstapeling leiden tot een onwerkbare praktijk voor boeren.</p>
                            <p>Een evenwichtiger beleidsproces zou volgens ons in ieder geval betekenen dat boeren en primaire producenten structureel aan de voorkant worden betrokken. Niet alleen in consultaties, maar in echte co-creatie van beleid.</p>
                        </div>
                    )
                },
                {
                    question: 'Hoe kijkt de BBB naar de rol van Europese subsidies zoals het Gemeenschappelijk Landbouwbeleid (GLB)?',
                    answer: (
                        <div className="space-y-4">
                            <p>Het GLB is enorm bepalend voor de inkomenspositie van boeren. Toch hechten wij er altijd veel waarde aan om te vermelden dat onze Nederlandse boeren percentueel gezien het minste van hun inkomen halen uit subsidies, afgezet tegen boeren in andere lidstaten.</p>
                            <p>In de basis vinden wij het logisch dat er Europees landbouwbeleid is en dat er middelen gaan naar voedselproductie en plattelandsontwikkeling. Maar de manier waarop dat nu gebeurt, is niet altijd eerlijk en doelmatig. Wij delen de zorg dat het GLB in de praktijk vaak schaalvergroting heeft gestimuleerd. Betalingen vooral op basis van hectares, waardoor grotere bedrijven relatief meer ontvangen. En de complexe eco-regelingen die voor kleinere bedrijven moeilijker uitvoerbaar zijn.</p>
                            <p>BBB wil dat er meer ruimte komt voor ondernemerschap en diversiteit in bedrijfsmodellen in plaats van één Brusselse blauwdruk.</p>
                        </div>
                    )
                },
                {
                    question: 'De agrosector wordt geconfronteerd met vraagstukken rond volksgezondheid, stikstof, klimaat en dierenwelzijn. Hoe weegt de BBB deze verschillende thema\'s?',
                    answer: (
                        <div className="space-y-4">
                            <p>We zien deze thema's niet als losse eilandjes, maar als een pakket waar je integraal mee om moet gaan. Onze belangrijkste uitgangspunten op het gebied van volksgezondheid is dat je daar geen gok mee mag nemen. BBB vertrouwt in dat opzicht erg op onafhankelijke wetenschappelijke instituties.</p>
                            <p>Stikstof en klimaat zijn belangrijke opgaven, maar we willen een aanpak proportioneel en uitvoerbaar is, en die niet eenzijdig bij de landbouw wordt neergelegd. Daarnaast is BBB van mening dat de modellenwerkelijkheid niet overeenkomt met de daadwerkelijke staat van de natuur in Nederland. Stikstof is op sommige hexagonen een drukfactor. Maar in veel gebieden spelen hele andere dingen mee, waar nu helemaal geen oog voor is, en wordt alles maar op stikstof gegooid.</p>
                            <p>En qua dierenwelzijn: Nederland loopt al relatief voorop in regelgeving. Wij willen verdere verbeteringen koppelen aan verdienvermogen en marktpositie. Extra eisen zonder extra verdienmogelijkheden zijn niet houdbaar.</p>
                        </div>
                    )
                },
                {
                    question: 'Welke richting ziet BBB als kansrijk voor de Nederlandse veehouderij: concurreren op prijs en volume, of inzetten op kwaliteit en onderscheidend vermogen?',
                    answer: 'De vleesconsumptie verandert erg traag. Maar er wordt inderdaad minder vlees gegeten door consumenten. Het staat wat BBB betreft eenieder vrij om te eten wat hij/zij wil. BBB vindt dat de overheid terughoudend moet zijn als het gaat over het voedselpatroon van burgers. Maar als antwoord op je vraag: We geloven niet in een zwart-wit keuze. Maar Nederland gaat de wereld niet verslaan in een pure bulk- en volumecompetitie met landen waar grond en regels veel goedkoper zijn. Op termijn zal onze kracht waarschijnlijk inderdaad zijn het kwalitatief en onderscheidend vermogen.'
                },
                {
                    question: 'Als jullie 20 jaar vooruit kijken, hoe ziet de Nederlandse veehouderij er dan uit in het meest realistische scenario?',
                    answer: (
                        <div className="space-y-4">
                            <p>In het meest realistische en voor ons ook wenselijke scenario over 20 jaar zien we ongeveer dit beeld:</p>
                            <p>Sterke bedrijven, die economisch gezond zijn en ruimte hebben om te investeren in dierenwelzijn, emissiereductie en innovatie. Ook denk ik dat er meer diversiteit in bedrijfsmodellen zullen zijn, van gangbaar en zeer efficiënt tot biologisch en natuurinclusief. Circulariteit zal de standaard worden. Met meer kringlooplandbouw, betere verwaarding van reststromen, koppelingen met akkerbouw, glastuinbouw en energie.</p>
                            <p>Een heel belangrijk onderdeel van dit scenario is de doelsturing waar onze minister aan heeft gewerkt. En de komende tijd verder zal moeten worden uitgewerkt. Een overheid die duidelijke, haalbare en betaalbare doelen stelt, en niet micromanaget op erfniveau. Meer vertrouwen en duidelijke langjarige doelen.</p>
                        </div>
                    )
                }
            ],
        },
        {
            id: 'lammert-van-raan',
            name: 'Lammert van Raan',
            interviewNote: {
                text: 'Dit gesprek is mondeling gevoerd en opgenomen. De onderstaande vragen en antwoorden zijn gebaseerd op de transcriptie van het gesprek.'
            },
            role: 'Voormalig Tweede Kamerlid voor de Partij voor de Dieren',
            duration: 'Tekst (gesprek getranscribeerd)',
            type: 'text',
            image: '/afbeeldingen-interviews/lammert-van-raan.webp',
            bio: 'Lammert van Raan was van 2017 tot 2023 Tweede Kamerlid voor de Partij voor de Dieren. Als Kamerlid specialiseerde hij zich in financiën, klimaat, energie, luchtvaart, ICT en privacy. Hij is bekend van zijn initiatiefwetsvoorstellen over ecocide, het belasten van slacht, en het afschaffen van subsidies voor fossiele brandstoffen.',
            keyTopics: ['Politiek', 'Klimaat', 'PVDD', 'Ecocide'],
            writtenInterview: [
                {
                    question: 'Van alle voorstellen die u heeft gedaan tijdens uw tijd in de Tweede Kamer, zoals de ecocidewet, de slachttaks en het afschaffen van fossiele subsidies, welke stuitte op de felste politieke weerstand? Van welke partijen of lobby\'s kwam die weerstand het hardst aanwaaien?',
                    answer: (
                        <div className="space-y-4">
                            <p>Goede vraag. De slachttaks hebben we uiteindelijk nog niet ingediend; ik weet ook niet of ze dat nog gaan doen. Die is niet in de Tweede Kamer geweest. En de Ecocidewet moet nog behandeld worden. Eerlijk gezegd weet ik ook niet of ze dat gaan doen. Dat loopt natuurlijk parallel met de behandeling van de omzetting van de Environmental Crime Directive die Nederland heeft gedaan.</p>
                            <p>Maar je vraagt welke op de felste weerstand ik stuitte. Ik vind het lastig om te zeggen. Ik heb voor ecocidewetgeving best veel moties en vragen ingediend in de Kamer – niet als initiatiefvoorstel zelf, maar wel als moties. Daar was altijd een grote meerderheid die die moties verwierp. Het meest opvallende was eigenlijk de onbekendheid met het onderwerp.</p>
                            <p>Het afschaffen van de fossiele subsidies heb ik natuurlijk wel gedaan; dat is een initiatiefvoorstel geweest. Nou, ik kan niet zeggen wat nou de felste weerstand was, maar wel dat in alle drie de gevallen er geen meerderheid voor was te vinden.</p>
                            <p>Wat betreft de slachttaks – dat hebben we wel eens besproken, dat ging dan met name in de commissie Financiën of bij de Financiële Beschouwingen. Mijn partij heeft door de jaren heen verschillende keren de slachttaks voorgesteld. Over het algemeen komt dan de grootste weerstand van VVD, CDA en PVV. Ja, eigenlijk alles rechts van D66, zou ik maar zeggen. Voor de Ecocidewet eigenlijk ook.</p>
                        </div>
                    )
                },
                {
                    question: 'Kunt u een concreet voorbeeld geven van hoe weerstand er in de praktijk uitzag?',
                    answer: (
                        <div className="space-y-4">
                            <p>Dat varieerde van opmerkingen in commissievergaderingen zoals "hier heb je een partij die weer met zo'n belachelijk idee komt", tot – vanuit bijvoorbeeld het CDA, toen zij een minister van Financiën hadden (Hoekstra), of minister Wiebes van Economische Zaken bij de fossiele subsidies – de boodschap dat het vanuit hun ideologie een heel slecht idee was voor de economie. Het varieerde dus echt van belachelijk maken, tot het argument dat het "slecht voor de economie" was.</p>
                            <p>De argumenten gingen veel over geld. Of, vanuit de PVV, dat het "afpakken" zou zijn van wat Nederlanders volgens die partij recht op hebben, zoals het afpakken van de gehaktbal.</p>
                        </div>
                    )
                },
                {
                    question: 'Kunt u uitleggen wat ecocide precies inhoudt?',
                    answer: (
                        <div className="space-y-4">
                            <p>Voor mij was dat zo'n ontdekkingsverhaal. Ik heb het uiteraard niet zelf bedacht. Het is een beweging die haar wortels vindt in de jaren 30 van de vorige eeuw, toen men in het kader van oorlogsrecht sprak over: wat moeten we doen als een land de bestaansmogelijkheden van een ander land vernietigt, bijvoorbeeld door bronnen te vervuilen of te vergiftigen?</p>
                            <p>Na de Tweede Wereldoorlog, na de rechtsontwikkeling van misdrijven tegen de menselijkheid en genocide, komt die gedachte ook weer terug. Maar die vraag "wat doen we als de natuur op grote schaal door mensen wordt vernietigd?" raakt daarna een tijd lang op de achtergrond.</p>
                            <p>Tijdens de onderhandelingen over het Statuut van Rome kwam het in de jaren negentig weer op. Waarom? Omdat in de jaren zestig en zeventig chemici die hadden meegeholpen aan het maken van ontbladeringsmiddelen in de oorlog in Vietnam – dat was eigenlijk een koloniale oorlog, gevoerd door de Fransen, doorgezet door de Amerikanen – Agent Orange gebruikten om de jungle te ontbladeren, zodat ze de vijand (de vrijheidsstrijder, zou je nu zeggen) konden zien. Dat was zo ingrijpend dat de term "ecocide" voor het eerst werd gebruikt: grootschalige vernietiging van de natuur.</p>
                            <p>Dat kwam ook naar voren bij de Club van Rome in 2002. Toen probeerde men dat gedrag onder te brengen bij de misdrijven tegen de menselijkheid in het Statuut van Rome. Dat is niet gelukt.</p>
                            <p>In de jaren 2010 ontdekte een Schotse advocate, Polly Higgins, dat concept van grootschalige vernietiging van de natuur, en ontdekte dat dit niet strafbaar is. Zij maakte de vergelijking: stel dat we het begrip 'moord' niet zouden kennen, het ombrengen van een mens. Als we daar geen woord en geen begrip voor hadden, dan zou je het ook niet strafbaar kunnen stellen.</p>
                            <p>En zij dacht: dat is toch belachelijk? Het "vermoorden" van de natuur staat niet in het wetboek van strafrecht. Hoe kan dat? Zij omschreef het zelf als een soort lightbulb moment – het licht ging aan in haar hoofd. En bij mij ook, toen ik daar een jaar of vijf later kennis van nam, via twee Nederlandse vrouwen die Polly Higgins naar Nederland hebben gebracht. Dus dat begrip ecocide is vanaf de jaren 2010 weer in de belangstelling komen te staan, en steeds meer. Het is dus het strafbaar stellen van grootschalige vernietiging van de leefomgeving.</p>
                            <p>Het is wel de hoogste vorm van recht – strafrecht is een ultiem rechtsmiddel. De bewijslast is terecht hoog. De omschrijving van ecocide moet precies zijn. Het moet gaan om een ernstige, langdurige of omvangrijke vorm van schade, en ook om onkeerbaarheid. Wat problematisch is in de huidige definitie van ecocide, is dat er een soort intentie aan ten grondslag moet liggen. En dat is een belangrijk concept in het wetboek van strafrecht.</p>
                            <p>Toen ik er zelf mee in aanraking kwam – nogmaals, vele anderen hadden het al ontdekt, dus ik ben vrij laat erachter gekomen – heb ik wel geprobeerd in elke bestuurslaag waar ik actief ben geweest dat begrip naar voren te brengen. Of het nou de gemeenteraad van Amsterdam, Provinciale Staten of de Tweede Kamer was.</p>
                            <p>We hebben net een documentaire gemaakt, en daar zit een fragment in waarin ik minister Kaag vroeg – toch een hele belezen en ervaren persoon – "heeft u daar wel eens van gehoord?" Eigenlijk verwachtte ik dat ze zou zeggen "ja, daar heb ik van gehoord." Maar zij zei: "Daar heb ik eigenlijk nog nooit van gehoord."</p>
                            <p>Dat was het moment dat ik samen met een aantal mensen een initiatiefnota heb geschreven. En toen die af was en ingediend, dacht ik: weet je wat, we kunnen net zo goed proberen een wet ervan te maken. Die sluit aan bij wat volgens mij een wereldwijde beweging is om ecocide strafbaar te maken.</p>
                        </div>
                    )
                },
                {
                    question: 'In hoeverre is de intensieve vee-industrie, met zijn impact op stikstof, biodiversiteit en waterkwaliteit, een voorbeeld van ecocide?',
                    answer: (
                        <div className="space-y-4">
                            <p>Wat ik denk is dat de manier van vleesproductie wereldwijd dermate absurd is geworden, dat ik geen moeite heb om die hele keten een "ecocidale keten" te noemen. Er is wat mij betreft een enorm verband, en daarin ben ik zeker niet de enige – lang niet de enige, maar ook niet de eerste, en hopelijk niet de laatste – die dat verband legt.</p>
                        </div>
                    )
                },
                {
                    question: 'Hoe denkt u dat zo\'n soort wet gevolgen zou kunnen hebben voor de vee-industrie als ecocide iets strafbaars zou zijn? Dus bijvoorbeeld grote vleesbedrijven zoals verwerkers, zoals Van Drie Groep of Vion – zouden zij dan aansprakelijk worden gehouden? Of wie zou dan schuldig zijn daarvan?',
                    answer: (
                        <div className="space-y-4">
                            <p>Ja, dat is een super interessante vraag bij het maken van zo'n wet. En nogmaals, dit is een proces dat op veel plaatsen in de wereld speelt: wie moet je verantwoordelijk stellen? Waar gaat het eigenlijk om?</p>
                            <p>Want inderdaad, die intentie – ook de baas van Van Drie zal echt niet 's ochtends uit zijn bed stappen en denken: "nou, we gaan even het oerwoud kapotmaken."</p>
                            <p>Maar wat je nu wel langzamerhand ziet – en dat moet zich ook gaan bewijzen in de komende tijd, als de ecocidewetgeving die er nu is of in ontwikkeling is, wordt gehandhaafd – dan zul je zien, dat is de verwachting, dat het om de zwaarste gevallen gaat. De lijn die naar boven komt drijven, is dat degenen met de grootste verantwoordelijkheid het meest voor de hand liggen om aan te pakken. Maar dat geldt ook voor degenen die de keten in stand houden of uitbreiden.</p>
                            <p>Dus ik vind het lastig om te zeggen: is zo'n keten als Van Drie of Vion dan… ? Bovendien, dat is ook wel weer het mooie, ik kan daar heel erg over speculeren met jou, en ik kan er ook een idee over hebben. Daarom is het zo belangrijk dat er dit soort wetten komen, strafbaarstellingen, want dan is het uiteindelijk aan de rechter om te bepalen: ja, inderdaad, meneer of mevrouw Van Drie, u heeft een verantwoordelijkheid die dermate groot is voor een productieproces dat dermate bijdraagt aan vernietiging, dat daar aansprakelijkheid is. En bijvoorbeeld niet de consument.</p>
                            <p>Wat betreft boeren, die zien wij als Partij voor de Dieren nou niet vanzelfsprekend als de schuldigen. Wij noemen onszelf wel eens een boerenpartij. Dat zal de BBB verbazen, en boeren wellicht ook. Al is het alleen maar omdat die grootschalige productie van vlees niks te maken heeft met boeren. Dat zijn gewoon fabrieken. Dat zijn massavernietigingsfabrieken. Dus ja, boeren hebben niet zoveel van ons te vrezen in die zin. Maar de hele grote vleesproducenten – nogmaals, geen boeren – die wel.</p>
                            <p>Wat wij ook niet uitsluiten, en die beweging ook niet, is: wie financiert het? Dus daar zitten ook allemaal aangrijpingspunten.</p>
                            <p>De afgelopen pakweg 30 jaar zie je in deze beweging veel discussie: wat is die wet precies? Hoe ziet die eruit? Wat is nou eigenlijk ecocide? Die discussie is overigens nog steeds niet helemaal voorbij. Sommigen zeggen: die discussie is nog lang niet voorbij. Anderen zeggen: nou, bijna voorbij. Ik zeg: bijna voorbij. In ieder geval genoeg voorbij om concrete wetten te introduceren en over te gaan tot de volgende stap: die wetten – even afgezien van het feit dat ze moeten worden aangenomen – in de praktijk testen.</p>
                            <p>Even in een zijlijn: er is afgelopen jaar een fantastisch toneelstuk geproduceerd in Utrecht, aan de Universiteit Utrecht, in het kader van het programma "Conceptualizing Ecocide". Masterstudenten, maar ook andere faculteiten deden mee om te onderzoeken: wat is ecocide eigenlijk?</p>
                            <p>Een van de hoogtepunten was, voor mij en denk ik ook voor een hoop andere mensen, de opvoering van een mock trial, waarbij studenten zowel aanklager als verdediger waren, en ook rechter. Wat je daar zag – en dat was voor mij echt zo mooi om te zien – was dat door het zo realistisch na te bootsen, de werkelijkheid zichtbaar werd. Het ging over een tinfabriek in Indonesië. Je zag jonge juristen – masterstudenten, bijna klaar – worstelen met de discussie: wat is het nou precies? Is de mijnbouworganisatie in Nederland verantwoordelijk voor de dochteronderneming die dat in Indonesië veroorzaakt? Hoe zit het met de mensen die daar op de vloer werken?</p>
                            <p>Omdat dat zo goed was gedaan, zie je voor je hoe dat kan gaan in een rechtszaak.</p>
                            <p>Terugkomend: dan zie je dat dit soort zaken, en ook het visualiseren ervan – daar wordt veel over geschreven – de discussie verder brengt. Van: nou oké, die definitie, daar zijn we nu wel achter. We weten wat een ecosysteem is. Dat is algemeen bekend onder ecologen, biologen. We weten wat ernstige schade is. We weten of je de natuur daarvan kunt herstellen. Je kent de verantwoordelijkheidsketen… Er is zoveel kennis aanwezig dat we echt kunnen overgaan tot implementatie van die wetten, is mijn mening. En ook tot handhaving daarvan.</p>
                            <p>Wat overigens ook de mening is van officieren van justitie die op zoek zijn naar meer instrumenten. Handhaving met bestaande wetgeving is sowieso superbelangrijk. Het kan meer, het kan beter. Er bestaat een heel uitgebreid arsenaal aan maatregelen om milieuvernietiging aan te pakken. Maar ecocide onderscheidt zich door het feit dat de vernietiging van de natuur op zichzelf ook strafbaar is.</p>
                        </div>
                    )
                },
                {
                    question: 'Heeft u ervaring gehad met lobby en merkte u als dat gebeurde?',
                    answer: (
                        <div className="space-y-4">
                            <p>Ja, zeker. Er is geen besluitvorming zonder lobby. Overigens gaat dit wel twee kanten op – NGO's die voor ecocide pleiten, dat is ook een lobby. Maar ik durf wel te stellen, in mijn ervaring, dat de lobby van wat je de bestaande systemen zou kunnen noemen – de bankenwereld, de LTO, de boeren via de LTO, of de fossiele industrie – vele malen groter is.</p>
                            <p>Ze hebben een groter budget. Maar het ironische is: een economie bestaat grofweg uit 80% optimalisatie van bestaande industrieën en 20% innovatie. Dat moeten we eigenlijk omdraaien, terwijl de hele lobbykracht juist gericht is op het in stand houden van het bestaande. En dat zie je echt op elk vlak.</p>
                            <p>En dan heb je ook nog het punt dat de vee-industrie en de landbouw eigenlijk meer geld kosten dan dat ze opleveren. Er waren rapporten van Greenpeace en het PBL, uit 2023 of 2022 denk ik, die rekenden met schades van… ik noem nu even een bedrag uit mijn hoofd… 6 miljard euro. Dat zijn gewoon 6 miljard euro aan maatschappelijke kosten. Als je dat interessant vindt of nog van belang is, kan ik dat nog even nakijken. Maar misschien zijn er inmiddels wel veel nieuwe onderzoeken geweest.</p>
                        </div>
                    )
                },
                {
                    question: 'Heeft u zelf ooit directe druk ervaren van lobbyisten uit de vee-industrie? Kunt u beschrijven hoe zo\'n gesprek of invloed in de praktijk verloopt?',
                    answer: (
                        <div className="space-y-4">
                            <p>Ja. Ik moet je zeggen, toen ik in 2017 in de Tweede Kamer kwam, zat de Partij voor de Dieren daar al tien jaar in. Elk nieuw Kamerlid – en dat zal nu ook weer gebeuren – krijgt in eerste instantie enorm veel kennismakingsvoorstellen en uitnodigingen over zich heen om te komen praten en kennis te maken.</p>
                            <p>Maar de LTO zelf… daar ben ik nooit door uitgenodigd. Ik heb dat ook nooit zelf voorgesteld. Ik denk dat dat te maken had met het feit dat onze standpunten zo ver uiteen lagen, dat het zonde van elkaars tijd was. Bovendien was landbouw mijn dossier ook niet, dus dan krijg je dat toch minder.</p>
                            <p>Maar ik zat wel op de dossiers fossiele industrie en luchtvaart. Daar word je wel benaderd met: "neem kennis van ons, kom eens praten. De groei van de luchtvaart is belangrijk voor de Nederlandse economie. Mensen willen ook graag op vakantie. U wilt mensen dat natuurlijk niet afnemen, meneer Van Raan."</p>
                            <p>Wat je ook merkt – en dat is wel bekend – is dat de bankensector meeschrijft aan financiële regelgeving. Daar hoef je maar even naar te googelen en dan komt dat wel naar boven. Maar goed, andersom ook. Ik zeg altijd tegen mijn vrienden bij NGO's: jongens, wat Shell kan, kunnen wij ook. Want lobby op zich is niet verboden of raar. Het wordt raar als het helemaal verborgen is, als de feiten niet kloppen, of als het om geldschieting gaat.</p>
                            <p>Wat ik wél heb ervaren – en dat mag je ook wel een lobby of druk noemen – was ten tijde van de slachttaks. Toen waren er wel biologische boeren die vlees produceerden, die aandacht vroegen voor hun positie. Omdat het hen ook zou raken. Biologisch vlees is al duurder, dus met zo'n slachttaks zou dat nog duurder worden. Daar zijn we toen mee in gesprek geweest. Met Caring Farmers. Over vragen als: moet er een uitzondering komen voor biologisch vlees? Dat soort zaken.</p>
                            <p>Maar nee, Van Drie, Vion…, van de vier grote slachterijen moet ik zeggen. Daar heb ik nooit wat van gemerkt. Ironisch genoeg, terwijl zij daar veel meer bij te verliezen hadden natuurlijk. Maar die hebben waarschijnlijk gedacht: daar gaan we onze tijd niet aan verspillen.</p>
                        </div>
                    )
                },
                {
                    question: 'Zonder krimp van de veestapel halen we de klimaatdoelen waarschijnlijk niet. Toch lijkt dit nog een beetje een politiek taboe. Waarom denkt u dat bijna geen politicus hier concreet over durft te beginnen?',
                    answer: (
                        <div className="space-y-4">
                            <p>Nou, ik denk dat dat inmiddels toch wel een misverstand is, dat dat niet zo is. Als je naar de geschiedenis kijkt – lang voordat de Partij voor de Dieren in de Kamer zat – zie je al dat er in de jaren tachtig van de vorige eeuw, om hele andere redenen (niet vanuit dierenwelzijn), werd gezegd: de veestapel moet krimpen, vanuit milieu-oogpunt.</p>
                            <p>Toen de Partij voor de Dieren in 2007 in de Tweede Kamer kwam, waren wij wel de eerste partij die dat vanuit een dierenperspectief bekeken. Maar inmiddels – degene die heel veel credits heeft gekregen, en terecht, als mainstream politieke partij – is natuurlijk D66 geweest. Tjeerd de Groot, die het had over een halvering van de veestapel.</p>
                            <p>Dus misschien is het aardig om de vraag te herformuleren naar: waarom durft geen politicus met een machtspositie het concreet door te zetten?</p>
                            <p>Wij hebben natuurlijk een aanjagerrol en hebben die nog steeds. Maar er zijn inmiddels meer partijen die zeggen: jongens, de vleesconsumptie moet naar beneden. Maar echt concreet doorpakken – ja, dat is nog veel lastiger. En er is toch angst voor de kiezers, denk ik.</p>
                            <p>Misschien zijn wij ook als ecocentrische beweging – en de middenpartijen en de linkse partijen meegerekend – niet in staat om een goed alternatief te geven, zowel aan de consument als aan boeren. Maar als je ziet hoeveel subsidies er naar boeren gaan… ja, daar moeten we eigenlijk een andere methode voor afspreken. Die subsidie moet je misschien in stand houden, maar dan wel voor plantaardig. Dan was het snel gepiept.</p>
                            <p>En het is natuurlijk ook zo dat vleesvervangers in het algemeen net zo duur of duurder zijn dan vlees. Er valt aan genoeg knoppen te draaien om dat te veranderen.</p>
                        </div>
                    )
                },
                {
                    question: 'Ik zag dat in Denemarken ze heel erg bezig zijn met CO2-heffing voor de landbouw en het veel kleiner proberen te houden. Wat denkt u dat wij als Nederland daarvan kunnen leren?',
                    answer: (
                        <div className="space-y-4">
                            <p>Aan de ene kant ben ik in die zin blij met politici als minister Jetten – minister van Economische Zaken en Klimaat geweest. Die weet heel goed wat er moet gebeuren. Die gaat kijken wat er allemaal wél kan. En als dat geladen wordt met wat er wél kan op het gebied van de energietransitie… ja, hij moet alleen zijn nieuwe beste vriend Omtzigt meekrijgen, die natuurlijk met een CDA-verleden zit en in die zin traditioneel… belobbyd… een goed belobbyd boerenbelang heeft.</p>
                            <p>Maar daar moet het van komen: van politici die een machtspositie hebben, die daar ook voor durven gaan, en die durven consumenten daarbij te betrekken.</p>
                            <p>Nou, dat. En ik ben er van overtuigd dat alle oplossingen er eigenlijk al zijn. Alleen moeten ze er nog doorheen komen.</p>
                        </div>
                    )
                },
                {
                    question: 'Wat vindt u de grootste misvatting bij het publiek over wie er echt verantwoordelijk is voor het in stand houden van de intensieve veehouderij?',
                    answer: (
                        <div className="space-y-4">
                            <p>Ja, dat vind ik een hele goede vraag. Het punt is... Ik heb de indruk dat het publiek niet ziet hoe problematisch die grootschalige, intensieve veehouderij is. En dat is een gezamenlijke verantwoordelijkheid van de politieke partijen, en natuurlijk van de lobbyclubs, maar ook van de financiers.</p>
                            <p>Ik weet niet of je wel eens Rabobank-advertenties ziet. Als je die ziet, dan loop je bijna over van dankbaarheid voor wat de Rabobank allemaal doet voor jouw toekomst. Terwijl, als je even achter de schermen kijkt... ja, dan zijn ze jouw toekomst gewoon aan het kapotmaken.</p>
                            <p>Ook denken veel mensen dat het de schuld van de boer is. Maar daar ben ik het niet mee eens. Daarom noemt de Partij voor de Dieren zich ook wel eens een boerenpartij. Want wij zien echt wel dat boeren gevangen zitten in een systeem dat ooit misschien een goed idee leek – maar ja, daar kun je van alles van vinden.</p>
                            <p>Maar boeren kunnen alleen maar vooruit door meer te produceren tegen lagere prijzen. En lage prijzen krijg je door de omstandigheden slechter te maken en de echte kosten niet in rekening te brengen. We zijn dan ook het grootste slachthuis van Europa en verslepen halve koeienreservoirs hiernaartoe.</p>
                            <p>Maar ook de consumenten, voor zover ze er al over nadenken, want de industrie doet er natuurlijk alles aan om te voorkomen dat ze hoeven na te denken. De industrie probeert begrippen als "kiloknallen" een positieve lading te geven, plaatst stickers op vrachtwagens die varkens vervoeren met "Knorretje staat vrolijk", en toont slagers met een glimlach. Ze houden de kosten verborgen, noem maar op.</p>
                            <p>Dat is eigenlijk de grootste misvatting: het is een industrie die in oorlog is met de wereld, met de natuur.</p>
                        </div>
                    )
                },
                {
                    question: 'Kijkt u, na al uw ervaringen, optimistisch of pessimistisch naar de toekomst? Ziet u de intensieve vee-industrie over 20 jaar krimpen, juist machtiger worden of hetzelfde blijven?',
                    answer: (
                        <div className="space-y-4">
                            <p>Ik denk dat ik toch een onderscheid maak bij het beantwoorden van die vraag: tussen hoop en vrees aan de ene kant, en optimistisch en pessimistisch aan de andere kant.</p>
                            <p>Je kunt niet anders zijn dan pessimistisch, volgens mij, als je kijkt naar de feiten, globaal gezien. Wie zei dat ook alweer? "We voeren de oorlog tegen de natuur. We zijn de oorlog tegen de natuur aan het winnen. En als we winnen, zijn we allemaal verloren." Dat is een combinatie van twee uitspraken – van een VN-secretaris-generaal en nog iemand.</p>
                            <p>En zes van de negen kantelpunten, of zeven, zijn gepasseerd. Toen ik politiek bewuster werd, was dat de grote angst: vijf van de negen zijn gepasseerd.</p>
                            <p>Dus je moet je optimisme halen uit lichtpuntjes. En dat is toch: het kan allemaal nog wel.</p>
                            <p>Maar de feiten wijzen er anders op. En je ziet ook weer een terugval in duurzaamheid. Kijk maar naar de belangstelling voor de COP. Of hoe Trump tekeergaat, of het terugdraaien van klimaatmaatregelen in de EU.</p>
                            <p>Tegelijkertijd, als je ziet wat China doet… Dat was altijd het verhaal van: "Die openen een kolencentrale per week of per dag." Ik weet niet waarmee de PVV ons allemaal bang maakte. Maar inmiddels maken ze zoveel zonne-energie aan, ongekende hoeveelheden.</p>
                            <p>Ik heb mezelf ook een tijdje laten leiden door: "Ja, maar al die grondstoffen voor die duurzame transitie, dat is echt…" En dat is ook zo. Kijk naar batterijen, kijk naar zeldzame metalen. Maar als je kijkt hoeveel fossiel we nog steeds uit de grond halen en dat vergelijkt… dan zie je daar wel een verbetering in komen.</p>
                            <p>Dus lang verhaal kort: overdag ben je pessimistisch, 's nachts hoop je op lichtpunten. En daar moet je hoop uit halen.</p>
                        </div>
                    )
                },
            ]
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
        // Combineren van tekst en audio
        if (interview.type === 'combined' && (interview.writtenInterview || interview.audioFragments)) {
            return (
                <div className="space-y-12">
                    {/* Geschreven interview sectie */}
                    {interview.writtenInterview && interview.writtenInterview.length > 0 && (
                        <div>
                            <h4 className="text-xl font-bold mb-6">Geschreven interview</h4>

                            {/* Informatieblok voor specifieke interviews (Arco Timmermans EN Lammert van Raan) */}
                            {interview.interviewNote && (
                                <div className="bg-blue-900/20 border border-blue-700 p-4 rounded-lg mb-6">
                                    <p className="text-blue-200 text-sm">
                                        <strong>Over dit interview:</strong> {interview.interviewNote.text}
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
                    {/* Informatieblok voor specifieke interviews (Arco Timmermans EN Lammert van Raan) */}
                    {interview.interviewNote && (
                        <div className="bg-blue-900/20 border border-blue-700 p-4 rounded-lg">
                            <p className="text-blue-200 text-sm">
                                <strong>Over dit interview:</strong> {interview.interviewNote.text}
                            </p>
                        </div>
                    )}

                    {/* GEEN "Let op" balk meer voor schriftelijke interviews */}
                    {/* De balk "Let op: Dit interview is schriftelijk afgenomen..." is verwijderd */}

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