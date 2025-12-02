import React, { useState } from 'react';
import { ArrowLeft, Heart, Sprout, Users, BookOpen, ShoppingCart, Lightbulb, Coffee, Share2, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

export default function WatKanIkDoenPage() {
    const [expandedSections, setExpandedSections] = useState({});

    const toggleSection = (id) => {
        setExpandedSections(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const actionCategories = [
        {
            id: 'bewust-kiezen',
            icon: <ShoppingCart className="text-emerald-400" size={32} />,
            title: "Bewust Kiezen in de Supermarkt",
            subtitle: "Kleine veranderingen in je boodschappenlijst",
            color: "emerald",
            actions: [
                {
                    title: "Start met 'Maandagvegetarisch'",
                    description: "Een dag per week geen vlees eten is al een mooie eerste stap. Ontdek nieuwe recepten en smaken zonder druk.",
                    tip: "Probeer eerst alleen het avondeten aan te passen - dat voelt minder overweldigend."
                },
                {
                    title: "Kies voor kwaliteit boven kwantiteit",
                    description: "Als je vlees eet, overweeg dan om minder vaak maar beter vlees te kopen. Kijk naar keurmerken zoals Beter Leven of biologisch.",
                    tip: "Een vleesgerecht kan heerlijk zijn als bijgerecht in plaats van hoofdingrediënt."
                },
                {
                    title: "Ontdek plantaardige alternatieven",
                    description: "Van tempeh tot kikkererwten - er zijn veel eiwitrijke alternatieven die lekker én voedzaam zijn.",
                    tip: "Supermarkten hebben steeds meer plantaardige producten. Experimenteer met wat bij jouw smaak past."
                },
                {
                    title: "Koop lokaal en seizoensgebonden",
                    description: "Bezoek lokale markten of boerenwinkels. Zo steun je kleinschalige boeren en weet je beter waar je eten vandaan komt.",
                    tip: "Maak een uitje van een bezoek aan de boerenmarkt - het is leuker én bewuster winkelen."
                }
            ]
        },
        {
            id: 'informeer-jezelf',
            icon: <BookOpen className="text-blue-400" size={32} />,
            title: "Blijf Leren en Ontdekken",
            subtitle: "Kennis is de eerste stap naar verandering",
            color: "blue",
            actions: [
                {
                    title: "Kijk een documentaire",
                    description: "Bekijk 'Boerocratie' of 'Liesjes hok was leeg' voor verschillende perspectieven op de vee-industrie.",
                    tip: "Kijk samen met vrienden of familie - het start vaak interessante gesprekken."
                },
                {
                    title: "Volg betrouwbare bronnen",
                    description: "Organisaties zoals De Voedselbos, Natuur & Milieu, of de Dierenbescherming delen regelmatig inzichtelijke informatie.",
                    tip: "Volg een paar accounts op social media die je informeren zonder te overweldigen."
                },
                {
                    title: "Lees over regeneratieve landbouw",
                    description: "Ontdek hoe boeren werken aan een duurzame toekomst voor voedsel en natuur.",
                    tip: "Dit laat zien dat er wél hoopvolle ontwikkelingen zijn in de landbouw."
                }
            ]
        },
        {
            id: 'stem-met-geld',
            icon: <Heart className="text-pink-400" size={32} />,
            title: "Steun Betekenisvolle Initiatieven",
            subtitle: "Je euro's zijn ook je stem",
            color: "pink",
            actions: [
                {
                    title: "Doneer aan natuurorganisaties",
                    description: "Organisaties als Mobilisation for the Environment of lokale natuurverenigingen zetten zich in voor natuur en dieren.",
                    tip: "Zelfs een kleine bijdrage helpt - elk beetje maakt verschil."
                },
                {
                    title: "Steun crowdfunding projecten",
                    description: "Van het Koeienmonument Amsterdam tot lokale initiatieven - veel mooie projecten hebben je steun nodig.",
                    tip: "Deel deze projecten ook met je netwerk via social media."
                },
                {
                    title: "Kies banken met duurzaam beleid",
                    description: "Sommige banken investeren niet in intensieve veehouderij. Onderzoek waar jouw bank in investeert.",
                    tip: "Overstappen van bank klinkt groot, maar kan impact maken als meer mensen het doen."
                }
            ]
        },
        {
            id: 'praat-erover',
            icon: <Users className="text-purple-400" size={32} />,
            title: "Start het Gesprek",
            subtitle: "Verandering begint met dialoog",
            color: "purple",
            actions: [
                {
                    title: "Deel wat je geleerd hebt",
                    description: "Vertel vrienden en familie over interessante dingen die je hebt ontdekt, zonder te preken.",
                    tip: "Mensen zijn vaak meer open voor een gesprek dan voor een betoog."
                },
                {
                    title: "Organiseer een kookavond",
                    description: "Nodig vrienden uit en maak samen vegetarische of veganistische gerechten. Laat zien hoe lekker het kan zijn!",
                    tip: "Maak er een gezellige avond van - zonder druk of oordeel."
                },
                {
                    title: "Wees nieuwsgierig, niet veroordelend",
                    description: "Stel vragen aan anderen over hun keuzes. Luister naar hun overwegingen en deel de jouwe.",
                    tip: "Respect en begrip openen meer deuren dan kritiek."
                }
            ]
        },
        {
            id: 'kleine-stappen',
            icon: <Sprout className="text-green-400" size={32} />,
            title: "Begin Klein, Denk Groot",
            subtitle: "Perfectie is niet het doel - vooruitgang wel",
            color: "green",
            actions: [
                {
                    title: "Vier je successen",
                    description: "Elke bewuste keuze telt. Of het nu één dag per week, één maaltijd per dag, of iets anders is - het maakt verschil.",
                    tip: "Wees niet te hard voor jezelf als het niet altijd lukt. Volhouden is belangrijker dan perfect zijn."
                },
                {
                    title: "Probeer nieuwe recepten",
                    description: "Ontdek de wereld van plantaardige kookboeken, blogs en YouTube-kanalen. Er is zoveel lekkers te ontdekken!",
                    tip: "Maak het avontuurlijk - probeer elk weekend iets nieuws."
                },
                {
                    title: "Luister naar je lichaam en waarden",
                    description: "Iedereen heeft een eigen tempo en eigen overwegingen. Vind wat bij jou past.",
                    tip: "Dit is geen race, maar een reis. Elke stap vooruit is waardevol."
                }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-neutral-900 text-neutral-100">
            {/* Header */}
            <header className="bg-neutral-950 border-b border-neutral-800 sticky top-0 z-10">
                <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
                    <a href="/" className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors">
                        <ArrowLeft size={20} />
                        <span className="text-sm">Terug naar longread</span>
                    </a>
                    <h1 className="text-xl md:text-2xl font-bold text-white">Wat Kan Ik Doen?</h1>
                    <div className="w-24"></div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative py-20 px-6 bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-900">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="mb-6 flex justify-center">
                        <Lightbulb className="text-yellow-400" size={64} />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        Van Bewustzijn naar Actie
                    </h1>
                    <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed mb-8">
                        Je hebt de longread gelezen. Misschien voel je je nu overweldigd, of juist gemotiveerd.
                        Wat nu? Hier vind je concrete, haalbare stappen die bij jou passen.
                    </p>
                    <div className="inline-block bg-emerald-900/30 border border-emerald-700 rounded-lg px-6 py-4">
                        <p className="text-emerald-200 text-lg font-medium">
                            💚 Vergeet niet: <span className="text-white">Elke stap telt.</span> Er is geen perfecte weg - alleen jouw weg.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content - Action Categories */}
            <section className="py-16 px-6 bg-neutral-900">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Kies Je Eigen Pad</h2>
                        <p className="text-neutral-400 text-lg">
                            Klik op een categorie om praktische tips te ontdekken
                        </p>
                    </div>

                    <div className="space-y-6">
                        {actionCategories.map((category) => (
                            <div
                                key={category.id}
                                className="bg-neutral-800 rounded-xl border border-neutral-700 overflow-hidden transition-all duration-300 hover:border-neutral-600"
                            >
                                {/* Category Header */}
                                <button
                                    onClick={() => toggleSection(category.id)}
                                    className="w-full text-left p-6 md:p-8 hover:bg-neutral-750 transition-colors"
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex items-start gap-4">
                                            <div className="mt-1">{category.icon}</div>
                                            <div className="flex-1">
                                                <h3 className="text-2xl font-bold text-white mb-2">
                                                    {category.title}
                                                </h3>
                                                <p className="text-neutral-400">
                                                    {category.subtitle}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex-shrink-0">
                                            {expandedSections[category.id] ? (
                                                <ChevronUp className="text-neutral-400" size={24} />
                                            ) : (
                                                <ChevronDown className="text-neutral-400" size={24} />
                                            )}
                                        </div>
                                    </div>
                                </button>

                                {/* Expandable Actions */}
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${
                                        expandedSections[category.id]
                                            ? 'max-h-[3000px] opacity-100'
                                            : 'max-h-0 opacity-0'
                                    }`}
                                >
                                    <div className="p-6 md:p-8 pt-0">
                                        <div className="border-t border-neutral-700 pt-6 space-y-6">
                                            {category.actions.map((action, index) => (
                                                <div
                                                    key={index}
                                                    className="bg-neutral-900/50 rounded-lg p-6 border border-neutral-700"
                                                >
                                                    <h4 className="text-lg font-bold text-white mb-3">
                                                        {action.title}
                                                    </h4>
                                                    <p className="text-neutral-300 mb-4 leading-relaxed">
                                                        {action.description}
                                                    </p>
                                                    <div className="bg-neutral-800 rounded-md p-4 border-l-4 border-emerald-600">
                                                        <p className="text-sm text-neutral-300">
                                                            <span className="font-semibold text-emerald-400">💡 Tip: </span>
                                                            {action.tip}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Inspiring Quote Section */}
            <section className="py-16 px-6 bg-gradient-to-r from-neutral-800 to-neutral-900">
                <div className="max-w-4xl mx-auto text-center">
                    <blockquote className="text-2xl md:text-3xl font-light italic text-neutral-200 mb-6">
                        "We hebben niet allemaal dezelfde capaciteit om te veranderen,
                        maar we hebben wel allemaal de capaciteit om <span className="text-white font-semibold">iets</span> te veranderen."
                    </blockquote>
                    <p className="text-neutral-400">— Aangepast gezegde</p>
                </div>
            </section>

            {/* Resources Section */}
            <section className="py-16 px-6 bg-neutral-900">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Handige Links & Bronnen</h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <ResourceCard
                            title="Recepten & Inspiratie"
                            items={[
                                { name: "De Voedselbos", url: "https://devoedselbos.nl" },
                                { name: "Vegan Challenge (ProVeg)", url: "https://veganchallenge.nl" },
                                { name: "Meatless Monday NL", url: "https://www.meatlessmonday.nl" }
                            ]}
                        />
                        <ResourceCard
                            title="Organisaties & Bewegingen"
                            items={[
                                { name: "Dierenbescherming", url: "https://www.dierenbescherming.nl" },
                                { name: "Natuur & Milieu", url: "https://www.natuurenmilieu.nl" },
                                { name: "Mobilisation for the Environment", url: "https://www.mobilisation.nl" }
                            ]}
                        />
                        <ResourceCard
                            title="Educatie"
                            items={[
                                { name: "Food for Profit (documentaire)", url: "https://www.vprogids.nl/cinema/films/film~15817732~food-for-profit~.html" },
                                { name: "Boerocratie (documentaire)", url: "https://www.ngpf.nl/boerocratie" },
                                { name: "Kunst & Cultuur pagina", url: "/kunst-cultuur" }
                            ]}
                        />
                        <ResourceCard
                            title="Duurzaam Consumeren"
                            items={[
                                { name: "Beter Leven Keurmerk", url: "https://beterleven.dierenbescherming.nl" },
                                { name: "Questionmark", url: "https://www.thequestionmark.org" },
                                { name: "Goede Vis Gids", url: "https://www.goedevis.nl" }
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* Final Call to Action */}
            <section className="py-20 px-6 bg-gradient-to-b from-neutral-900 to-neutral-950">
                <div className="max-w-4xl mx-auto text-center">
                    <Coffee className="text-amber-400 mx-auto mb-6" size={48} />
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Neem de Tijd
                    </h2>
                    <p className="text-xl text-neutral-300 mb-8 leading-relaxed max-w-2xl mx-auto">
                        Verandering hoeft niet morgen te gebeuren. Laat deze informatie even bezinken.
                        Praat erover met vrienden. Keer terug naar deze pagina wanneer je er klaar voor bent.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/"
                            className="inline-flex items-center gap-2 bg-neutral-700 hover:bg-neutral-600 text-white px-8 py-4 rounded-lg transition-colors font-medium"
                        >
                            <ArrowLeft size={20} />
                            Terug naar de longread
                        </a>
                        <a
                            href="/kunst-cultuur"
                            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-8 py-4 rounded-lg transition-colors font-medium"
                        >
                            🎭 Kunst & Cultuur hoekje
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

function ResourceCard({ title, items }) {
    return (
        <div className="bg-neutral-800 rounded-lg p-6 border border-neutral-700">
            <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
            <ul className="space-y-3">
                {items.map((item, index) => (
                    <li key={index}>
                        <a
                            href={item.url}
                            target={item.url.startsWith('http') ? "_blank" : undefined}
                            rel={item.url.startsWith('http') ? "noopener noreferrer" : undefined}
                            className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors group"
                        >
                            <span className="flex-1">{item.name}</span>
                            <ExternalLink
                                size={16}
                                className="opacity-0 group-hover:opacity-100 transition-opacity"
                            />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}