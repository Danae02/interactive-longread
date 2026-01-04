// components/sections/text/SocialFactorsSection.jsx
import React, { useState, useEffect } from 'react';
import { Package, Tv, BookOpen } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

// Supabase configuratie - VERVANG DIT MET JE EIGENE
const supabaseUrl = 'https://hvbfeebfffuzyfjilqvc.supabase.co'
const supabaseAnonKey = 'sb_publishable_Eej7gt67g_ek2zT9PeZldQ_gq5q0vyf' // ← DIT IS JE KEY!
const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default function SocialFactorsSection() {
    const [activeStrategy, setActiveStrategy] = useState(0);
    const [pollData, setPollData] = useState({
        votes: [0, 0, 0, 0, 0],
        totalVotes: 0
    });
    const [hasVoted, setHasVoted] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [userVote, setUserVote] = useState(null);

    // Laad poll data bij opstart
    useEffect(() => {
        loadPollData();
        checkIfVoted();
    }, []);

    const loadPollData = async () => {
        try {
            const { data, error } = await supabase
                .from('poll_stats')
                .select('votes, total_votes')
                .eq('id', 1)
                .single();

            if (error) throw error;

            if (data) {
                setPollData({
                    votes: data.votes || [0, 0, 0, 0, 0],
                    totalVotes: data.total_votes || 0
                });
            }
        } catch (error) {
            console.error('Fout bij laden poll:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const checkIfVoted = () => {
        const voted = localStorage.getItem('socialFactorsPollVoted');
        const voteIndex = localStorage.getItem('socialFactorsPollVoteIndex');

        if (voted && voteIndex !== null) {
            setHasVoted(true);
            setUserVote(parseInt(voteIndex));
        }
    };

    const handleVote = async (index) => {
        if (hasVoted) return;

        setIsLoading(true);

        try {
            // Haal huidige data op
            const { data: currentData } = await supabase
                .from('poll_stats')
                .select('votes, total_votes')
                .eq('id', 1)
                .single();

            if (!currentData) throw new Error('Poll data niet gevonden');

            // Update votes array
            const newVotes = [...currentData.votes];
            newVotes[index] += 1;
            const newTotalVotes = currentData.total_votes + 1;

            // Update database
            const { error } = await supabase
                .from('poll_stats')
                .update({
                    votes: newVotes,
                    total_votes: newTotalVotes,
                    updated_at: new Date().toISOString()
                })
                .eq('id', 1);

            if (error) throw error;

            // Update local state
            setPollData({
                votes: newVotes,
                totalVotes: newTotalVotes
            });

            // Markeer als gestemd
            setHasVoted(true);
            setUserVote(index);

            // Sla op in localStorage
            localStorage.setItem('socialFactorsPollVoted', 'true');
            localStorage.setItem('socialFactorsPollVoteIndex', index.toString());

            // Toon bevestiging
            alert(`✅ Bedankt voor je stem! Je koos: "${pollOptions[index].text}"`);

        } catch (error) {
            console.error('Fout bij stemmen:', error);
            alert('❌ Er ging iets mis bij het stemmen. Probeer het opnieuw.');
        } finally {
            setIsLoading(false);
        }
    };

    const pollOptions = [
        {
            text: "Culturele gewoontes & tradities",
            description: "Het hoort er gewoon bij bij feestdagen, familie-eten, etc."
        },
        {
            text: "Misleidende marketing & greenwashing",
            description: "Het is lastig betrouwbare, duurzame keuzes te maken"
        },
        {
            text: "Gemak & beschikbaarheid",
            description: "Vlees en zuivel zijn overal, goedkoop en makkelijk"
        },
        {
            text: "Psychologische barrières",
            description: "Het voelt als afwijken van de norm of aanval op identiteit"
        },
        {
            text: "Ik zie geen belemmeringen",
            description: "Ik vind het niet moeilijk om minder dierlijke producten te eten"
        }
    ];

    const marketingStrategies = [
        {
            title: "Greenwashing",
            icon: <Package size={24} />,
            description: "Bedrijven gebruiken termen als \"duurzaam\", \"beter leven\", \"natuurlijk\" of \"biologisch\" zonder dat dit betekenisvolle verandering inhoudt. Het creëert een schijn van verantwoordelijkheid zonder fundamentele systeemverandering.",
            example: (
                <>
                    De Reclame Code Commissie heeft <strong>Albert Heijn</strong> op de vingers getikt voor misleidende claims over biodiversiteit op zuivelverpakkingen. De supermarkt gebruikte afbeeldingen van bedreigde weidevogels en beweerde dat het 'Beter voor Natuur & Boer'-programma de biodiversiteit zou verbeteren. De commissie oordeelde dat dit niet goed onderbouwd was.
                    <br /><br />

                    {/* Afbeelding */}
                    <div className="my-4">
                        <img
                            src="/afbeeldingen-heden/melk.jpg"
                            alt="Voorbeeld van greenwashing op zuivelverpakking"
                            className="w-full max-w-md mx-auto rounded-lg border border-neutral-600"
                        />
                        <p className="text-sm text-center text-neutral-400 mt-2">
                            Voorbeeld van misleidende verpakking met groene claims en natuurbeelden
                        </p>
                    </div>

                    <a
                        href="https://www.nu.nl/economie/6378284/albert-heijn-op-de-vingers-getikt-om-misleidende-groene-claims-over-zuivel.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 underline transition-colors"
                    >
                        Lees het volledige artikel op NU.nl
                    </a>
                </>
            )
        },
        {
            title: "Emotionele Marketing",
            icon: <Tv size={24} />,
            description: "Idyllische beelden van grazende koeien en tevreden dieren op verpakkingen.",
            example: "Verpakkingen tonen groene weides, terwijl de meeste dieren nooit buiten komen."
        },
        {
            title: "Eufemismen & Vrolijke Beeldvorming",
            icon: <BookOpen size={24} />,
            description: "Taal en beeld die de link tussen dier en product verbreken om cognitieve dissonantie te vermijden.",
            example: (
                <>
                    De industrie gebruikt taal om de realiteit te verhullen en de link tussen consument en dier te verbreken.
                    <br /><br />
                    <strong>Taal-voorbeelden:</strong>
                    <ul className="list-disc pl-5 my-2 space-y-1">
                        <li>"Verwerken" in plaats van slachten</li>
                        <li>"Product" in plaats van kalf</li>
                        <li>"Organische meststof" in plaats van mest</li>
                    </ul>
                    Dit kan gecombineerd worden met <strong>vrolijke beeldvorming</strong> (zoals op vrachtwagens of bij slagers) om het onderwerp te ontladen.
                    <br /><br />

                    {/* Twee afbeeldingen naast elkaar */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                        {/* Afbeelding 1: Slagerij */}
                        <div className="flex flex-col items-center">
                            <img
                                src="/afbeeldingen-heden/socialefactor1.jpg"
                                alt="Een vrolijk varken op een aanbiedingsbord bij een slagerij"
                                className="w-full max-w-xs rounded-lg border border-neutral-600"
                            />
                            <p className="text-sm text-center text-neutral-400 mt-2">
                                Vrolijke beeldvorming bij een slagerij
                            </p>
                        </div>

                        {/* Afbeelding 2: Vrachtwagen */}
                        <div className="flex flex-col items-center">
                            <img
                                src="/afbeeldingen-heden/socialefactor3.jpg"
                                alt="Een lachend varken op een vrachtwagen van een slachterij"
                                className="w-full max-w-xs rounded-lg border border-neutral-600"
                            />
                            <p className="text-sm text-center text-neutral-400 mt-2">
                                Vrolijke stickers op een slachthuistransport
                            </p>
                        </div>
                    </div>

                    <strong>Effect:</strong> Het dier wordt gereduceerd tot een grondstof en cognitieve dissonantie wordt vermeden: mensen hoeven niet te worstelen met de tegenstrijdigheid dat ze van dieren houden maar ze ook eten.
                </>
            )
        }
    ];

    return (
        <div className="social-section py-16 px-6 bg-neutral-800">
            <div className="max-w-6xl mx-auto">

                {/* TITEL */}
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold mb-4">
                        Het Sociale Web: Waarom We Blijven Eten Wat We Eten
                    </h3>
                    <p className="text-xl text-neutral-400 max-w-3xl mx-auto mb-6">
                        Marketing, greenwashing en culturele verankering houden de intensieve
                        vee-industrie in stand
                    </p>

                    <div className="max-w-4xl mx-auto bg-neutral-800/50 p-6 rounded-lg">
                        <p className="text-lg text-neutral-300 mb-4">
                            De intensieve vee-industrie blijft niet alleen in stand door economische belangen
                            en politieke steun, maar ook door sociale acceptatie. Historische campagnes zoals
                            'Melk moet' en 'Joris Driepinter' hebben vlees en zuivel verankerd als essentieel
                            onderdeel van de Nederlandse identiteit.
                        </p>
                        <p className="text-lg text-neutral-300">
                            Vandaag de dag zorgt moderne marketing, greenwashing en culturele druk ervoor
                            dat consumenten vlees en zuivel als normaal blijven zien—ondanks wetenschappelijke
                            adviezen om minder dierlijke producten te eten.
                        </p>
                    </div>
                </div>

                {/* MARKETING STRATEGIEËN */}
                <div className="mb-12">
                    <h4 className="text-2xl font-bold mb-6">Marketing & Framing</h4>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                        {marketingStrategies.map((strategy, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveStrategy(index)}
                                className={`p-4 rounded-lg transition-all text-left ${
                                    activeStrategy === index
                                        ? 'bg-emerald-900 ring-2 ring-emerald-500'
                                        : 'bg-neutral-700 hover:bg-neutral-600'
                                }`}
                            >
                                <div className="text-emerald-400 mb-2">{strategy.icon}</div>
                                <div className="font-bold mb-2">{strategy.title}</div>
                                <div className="text-sm text-neutral-300">{strategy.description}</div>
                            </button>
                        ))}
                    </div>

                    {/* GESELECTEERDE STRATEGIE DETAIL */}
                    <div className="bg-neutral-700 p-8 rounded-lg mb-8">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="text-4xl font-bold text-emerald-400">0{activeStrategy + 1}</div>
                            <div>
                                <h5 className="text-2xl font-bold">{marketingStrategies[activeStrategy].title}</h5>
                                <p className="text-neutral-300">{marketingStrategies[activeStrategy].description}</p>
                            </div>
                        </div>

                        <div className="bg-neutral-800 p-6 rounded-lg">
                            <div className="font-bold mb-2 text-emerald-300">Voorbeeld:</div>
                            <div className="text-lg">{marketingStrategies[activeStrategy].example}</div>
                        </div>
                    </div>
                </div>

                {/* CONSUMENTENPSYCHOLOGIE */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-neutral-700 p-6 rounded-lg">
                        <h5 className="text-xl font-bold mb-4">De kloof tussen weten en doen</h5>
                        <p className="text-neutral-300 mb-4">
                            Uit peilingen blijkt dat een meerderheid van Nederlanders zich zorgen maakt over
                            dierenwelzijn en klimaat,
                            maar de vleesconsumptie blijft hoog (74,4 kg per persoon per jaar).
                        </p>
                        <div className="text-sm text-neutral-400">
                            <p>Waarom?</p>
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li>Gewoontes: "Wat de pot schaft"</li>
                                <li>Gemak: overal verkrijgbaar</li>
                                <li>Onzichtbaarheid: geen link met levend dier</li>
                                <li>Vlees en zuivel zijn verbonden met positieve herinneringen: BBQ's, kerstdiners,
                                    verjaardagen, "gezelligheid".
                                </li>
                                <li>Verandering voelt als een aanval op identiteit: "Willen ze ons de gehaktbal
                                    afpakken?"
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-neutral-700 p-6 rounded-lg">
                        <h5 className="text-xl font-bold mb-4">Culturele verankering: "Zo eten we al generaties
                            lang"</h5>

                        <div className="flex flex-col md:flex-row gap-6 mb-4">
                            {/* Linker kolom: tekst */}
                            <div className="flex-1">
                                <p className="text-neutral-300 mb-4">
                                    Vlees en zuivel zijn diep geworteld in Nederlandse tradities: de boterham met kaas,
                                    de zondagse biefstuk,
                                    kerstgourmet en rollades, Pasen met lamsvlees.
                                </p>
                                <div className="text-sm text-neutral-400">
                                    <p>Verandering voelt voor veel mensen als:</p>
                                    <ul className="list-disc pl-5 mt-2 space-y-1">
                                        <li>Aanval op identiteit</li>
                                        <li>Breuk met traditie</li>
                                        <li>Afwijken van de norm</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Rechter kolom: Instagram video preview */}
                            <div className="flex-1">
                                <div className="bg-neutral-800 rounded-lg overflow-hidden border border-neutral-600">
                                    {/* Thumbnail container */}
                                    <a
                                        href="https://www.instagram.com/reels/DSIGD_zjG3a/?utm_source=ig_web_copy_link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block group"
                                    >
                                        <div
                                            className="relative h-48 bg-gradient-to-br from-purple-900/30 to-pink-900/30 flex items-center justify-center">
                                            {/* Play button overlay */}
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div
                                                    className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                                    <div
                                                        className="w-0 h-0 border-l-[20px] border-t-[12px] border-b-[12px] border-l-white border-t-transparent border-b-transparent ml-1"></div>
                                                </div>
                                            </div>

                                            {/* Instagram logo */}
                                            <div className="absolute top-3 left-3 flex items-center gap-1">
                                                <div
                                                    className="w-6 h-6 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                                                    <span className="text-white font-bold text-xs">IG</span>
                                                </div>
                                                <span className="text-white text-sm font-medium">Instagram Reel</span>
                                            </div>

                                            {/* Video title/text overlay */}
                                            <div className="absolute bottom-3 left-3 right-3">
                                                <p className="text-white font-medium text-sm">"Dagelijks vlees eten is
                                                    een recente uitvinding"</p>
                                                <p className="text-white/80 text-xs">@forkranger_nl</p>
                                            </div>
                                        </div>
                                    </a>

                                    {/* Beschrijving onder de thumbnail */}
                                    <div className="p-4">
                                        <p className="text-emerald-300 font-medium text-sm mb-2">💡 Feit check: Traditie
                                            of mythe?</p>
                                        <p className="text-neutral-300 text-sm">
                                            Deze video laat zien dat <strong>dagelijkse vleesconsumptie pas na de
                                            jaren 60 </strong> normaal is geworden.
                                            Het idee dat we "altijd al zo veel vlees aten" is een mythe.
                                        </p>

                                        <a
                                            href="https://www.instagram.com/reels/DSIGD_zjG3a/?utm_source=ig_web_copy_link"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-3 inline-flex items-center gap-2 text-sm bg-gradient-to-r from-purple-600/20 to-pink-600/20 hover:from-purple-600/30 hover:to-pink-600/30 text-purple-300 hover:text-white font-medium py-2 px-4 rounded-lg transition-all border border-purple-800/30"
                                        >
                                            <span>▶️ Bekijk de volledige video op Instagram</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4 border-t border-neutral-600">
                            <p className="text-neutral-300 italic">
                                <strong>"Dat hebben we altijd zo gedaan"</strong> wordt een argument tégen verandering,
                                maar <span className="text-emerald-300">de intensieve veehouderij zoals we die nu kennen is historisch gezien zeer recent</span>.
                            </p>
                        </div>
                    </div>
                </div>

                {/* SOCIALE ACCEPTATIE POLL */}
                <div className="bg-gradient-to-r from-neutral-800 to-emerald-900/20 p-8 rounded-lg border border-neutral-700">
                    <h5 className="text-2xl font-bold mb-2 text-center">Jouw mening telt</h5>
                    <p className="text-neutral-400 text-center mb-8">Wat vind jij de grootste belemmering voor verandering?</p>

                    <div className="max-w-2xl mx-auto">
                        {/* Poll vraag */}
                        <div className="bg-neutral-900/70 p-6 rounded-lg mb-8">
                            <p className="text-lg font-medium text-center mb-6">
                                Wat maakt het volgens jou het moeilijkst om minder vlees of zuivel te eten?
                            </p>

                            {isLoading ? (
                                <div className="text-center py-8">
                                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-emerald-500 mb-4"></div>
                                    <p className="text-neutral-400">Poll resultaten laden...</p>
                                </div>
                            ) : (
                                <>
                                    {/* Poll opties */}
                                    <div className="space-y-4">
                                        {pollOptions.map((option, index) => {
                                            const votes = pollData.votes[index] || 0;
                                            const percentage = pollData.totalVotes > 0
                                                ? Math.round((votes / pollData.totalVotes) * 100)
                                                : 0;

                                            return (
                                                <button
                                                    key={index}
                                                    className={`w-full text-left p-4 rounded-lg transition-colors group border ${
                                                        hasVoted && userVote === index
                                                            ? 'border-emerald-500 bg-emerald-900/20'
                                                            : 'border-neutral-700 bg-neutral-800 hover:bg-neutral-700 hover:border-emerald-700/50'
                                                    } ${hasVoted ? 'cursor-default' : 'cursor-pointer'}`}
                                                    onClick={() => !hasVoted && handleVote(index)}
                                                    disabled={hasVoted || isLoading}
                                                >
                                                    <div className="flex justify-between items-center mb-2">
                                                        <div className="font-medium">{option.text}</div>
                                                        <div className="text-emerald-400 text-sm font-medium">
                                                            {pollData.totalVotes > 0 ? `${percentage}%` : '0%'}
                                                            {hasVoted && userVote === index && ' ✓'}
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-3">
                                                        {/* Progress bar */}
                                                        <div className="flex-1 bg-neutral-700 rounded-full h-2 overflow-hidden">
                                                            <div
                                                                className={`h-full rounded-full transition-all ${
                                                                    hasVoted && userVote === index
                                                                        ? 'bg-gradient-to-r from-emerald-400 to-emerald-300'
                                                                        : 'bg-gradient-to-r from-emerald-500 to-emerald-400'
                                                                }`}
                                                                style={{ width: `${percentage}%` }}
                                                            ></div>
                                                        </div>
                                                        <div className="text-xs text-neutral-500 flex-shrink-0">
                                                            {option.description}
                                                        </div>
                                                    </div>
                                                    {hasVoted && (
                                                        <div className="text-xs text-emerald-400 mt-2">
                                                            {votes} stem{votes !== 1 ? 'men' : ''}
                                                        </div>
                                                    )}
                                                </button>
                                            );
                                        })}
                                    </div>

                                    {/* Stem info */}
                                    <div className="flex justify-between items-center mt-6 pt-4 border-t border-neutral-800">
                                        <div className="text-sm text-neutral-500">
                                            {hasVoted ? (
                                                <span className="text-emerald-400">✓ Je hebt gestemd</span>
                                            ) : (
                                                <span className="text-emerald-400">• Klik op een optie om te stemmen</span>
                                            )}
                                        </div>
                                        <div className="text-sm text-neutral-500">
                                            {pollData.totalVotes} deelnemer{pollData.totalVotes !== 1 ? 's' : ''}
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>


                        {/* Disclaimer */}
                        <div className="text-center mt-6">
                            <p className="text-xs text-neutral-500">
                                Stemmen worden opgeslagen in een gedeelde database. Je kunt maar één keer stemmen per browser.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}