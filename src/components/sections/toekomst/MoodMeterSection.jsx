// components/sections/toekomst/MoodMeterSection.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Smile, Frown, Meh, TrendingUp, TrendingDown, Database, RefreshCw } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://pnceluzqojuxqkmozopm.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBuY2VsdXpxb2p1eHFrbW96b3BtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc1MTgwNDUsImV4cCI6MjA4MzA5NDA0NX0.JXM47wQhJcULF4N--k6HBeS4wM6BcybxedIObOoIa7w";
const supabase = createClient(supabaseUrl, supabaseKey);

export default function MoodMeterSection() {
    const [userMood, setUserMood] = useState(null);
    const [moodSubmitted, setMoodSubmitted] = useState(false);
    const [globalMood, setGlobalMood] = useState({ optimistic: 0, neutral: 0, pessimistic: 0 });
    const [loading, setLoading] = useState(false);
    const [hasVoted, setHasVoted] = useState(false);
    const [isConnected, setIsConnected] = useState(false);
    const [usingKeyboard, setUsingKeyboard] = useState(false);

    // Refs voor focus management
    const mainHeadingRef = useRef(null);
    const moodButtonsRef = useRef([]);
    const refreshButtonRef = useRef(null);

    // Detecteer toetsenbordgebruik
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Tab') {
                setUsingKeyboard(true);
                document.body.classList.add('using-keyboard');
            }
        };

        const handleMouseDown = () => {
            setUsingKeyboard(false);
            document.body.classList.remove('using-keyboard');
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('mousedown', handleMouseDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('mousedown', handleMouseDown);
        };
    }, []);

    // Focus naar hoofdheading bij component mount
    useEffect(() => {
        if (mainHeadingRef.current) {
            mainHeadingRef.current.focus();
        }
    }, []);

    // Check of gebruiker al gestemd heeft
    useEffect(() => {
        const checkVote = () => {
            const voted = localStorage.getItem('future-mood-voted');
            const voteData = localStorage.getItem('future-mood-data');
            if (voted) {
                setHasVoted(true);
                setMoodSubmitted(true);
                setUserMood(voteData);
            }
        };
        checkVote();
    }, []);

    // Laad globale stemming van Supabase
    const loadGlobalMood = async () => {
        try {
            // Test verbinding eerst
            const { data, error, count } = await supabase
                .from('mood_meter_votes')
                .select('mood', { count: 'exact', head: true });

            if (error) {
                console.log('Supabase error:', error);
                throw error;
            }

            // Haal alle votes op
            const { data: votes, error: votesError } = await supabase
                .from('mood_meter_votes')
                .select('mood');

            if (votesError) throw votesError;

            // Tel stemmen
            const counts = { optimistic: 0, neutral: 0, pessimistic: 0 };
            if (votes) {
                votes.forEach(vote => {
                    if (vote.mood === 'optimistic') counts.optimistic++;
                    else if (vote.mood === 'neutral') counts.neutral++;
                    else if (vote.mood === 'pessimistic') counts.pessimistic++;
                });
            }

            setGlobalMood(counts);
            setIsConnected(true);
            console.log('Loaded from Supabase:', counts);
            return true;
        } catch (error) {
            console.error('Fout bij laden stemming:', error);
            // Fallback naar localStorage als Supabase faalt
            const savedMood = JSON.parse(localStorage.getItem('future-mood-meter') || '{"optimistic":0,"neutral":0,"pessimistic":0}');
            setGlobalMood(savedMood);
            setIsConnected(false);
            return false;
        }
    };

    // Laad data bij opstart
    useEffect(() => {
        loadGlobalMood();
    }, []);

    // Genereer een unieke identifier voor gebruiker
    const generateUserId = () => {
        let userId = localStorage.getItem('future-mood-user-id');
        if (!userId) {
            userId = 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
            localStorage.setItem('future-mood-user-id', userId);
        }
        return userId;
    };

    const moods = [
        {
            id: 'optimistic',
            label: 'Hoopvol',
            icon: <Smile size={32} aria-hidden="true" />,
            color: 'bg-emerald-600 hover:bg-emerald-700',
            borderColor: 'border-emerald-500',
            description: 'Ik zie kansen voor verandering',
            ariaDescription: 'Selecteer deze optie als je hoopvol bent over de toekomst van de vee-industrie en kansen ziet voor positieve verandering.'
        },
        {
            id: 'neutral',
            label: 'Neutraal',
            icon: <Meh size={32} aria-hidden="true" />,
            color: 'bg-neutral-600 hover:bg-neutral-700',
            borderColor: 'border-neutral-500',
            description: 'Ik twijfel of het gaat lukken',
            ariaDescription: 'Selecteer deze optie als je neutraal staat tegenover de toekomst van de vee-industrie en twijfelt of verandering zal slagen.'
        },
        {
            id: 'pessimistic',
            label: 'Pessimistisch',
            icon: <Frown size={32} aria-hidden="true" />,
            color: 'bg-rose-600 hover:bg-rose-700',
            borderColor: 'border-rose-500',
            description: 'Ik ben bang dat er weinig verandert',
            ariaDescription: 'Selecteer deze optie als je pessimistisch bent over de toekomst van de vee-industrie en verwacht dat er weinig zal veranderen.'
        }
    ];

    const handleMoodSelection = async (moodId) => {
        setLoading(true);
        setUserMood(moodId);

        const userId = generateUserId();

        try {
            console.log('Saving vote to Supabase:', moodId, 'for user:', userId);

            // Probeer op te slaan in Supabase
            const { data, error } = await supabase
                .from('mood_meter_votes')
                .insert([
                    {
                        mood: moodId,
                        session_id: userId
                    }
                ]);

            if (error) {
                console.error('Supabase insert error:', error);
                throw error;
            }

            console.log('Vote saved successfully:', data);

            // Update lokale cache
            localStorage.setItem('future-mood-voted', 'true');
            localStorage.setItem('future-mood-data', moodId);

            // Wacht even en laad dan opnieuw
            setTimeout(async () => {
                await loadGlobalMood();
                setHasVoted(true);
                setMoodSubmitted(true);
                setLoading(false);
            }, 1000);

        } catch (error) {
            console.error('Fout bij opslaan stem:', error);

            // Fallback naar localStorage als Supabase faalt
            const updatedMood = {
                ...globalMood,
                [moodId]: (globalMood[moodId] || 0) + 1
            };
            setGlobalMood(updatedMood);
            localStorage.setItem('future-mood-meter', JSON.stringify(updatedMood));
            localStorage.setItem('future-mood-voted', 'true');
            localStorage.setItem('future-mood-data', moodId);

            setHasVoted(true);
            setMoodSubmitted(true);
            setIsConnected(false);
            setLoading(false);
        }
    };

    const resetVote = () => {
        localStorage.removeItem('future-mood-voted');
        localStorage.removeItem('future-mood-data');
        setHasVoted(false);
        setMoodSubmitted(false);
        setUserMood(null);
        // Focus terug naar eerste stemknop
        if (moodButtonsRef.current[0]) {
            setTimeout(() => moodButtonsRef.current[0].focus(), 100);
        }
    };

    const refreshResults = async () => {
        setLoading(true);
        await loadGlobalMood();
        setLoading(false);
        // Focus behouden op refresh knop
        if (refreshButtonRef.current) {
            refreshButtonRef.current.focus();
        }
    };

    const handleKeyDown = (e, action, ...args) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            action(...args);
        }
    };

    const totalVotes = Object.values(globalMood).reduce((a, b) => a + b, 0);
    const optimisticPercentage = totalVotes > 0 ? Math.round((globalMood.optimistic / totalVotes) * 100) : 0;
    const neutralPercentage = totalVotes > 0 ? Math.round((globalMood.neutral / totalVotes) * 100) : 0;
    const pessimisticPercentage = totalVotes > 0 ? Math.round((globalMood.pessimistic / totalVotes) * 100) : 0;

    return (
        <>
            <style>{`
                .using-keyboard button:focus,
                .using-keyboard a:focus,
                .using-keyboard input:focus,
                .using-keyboard select:focus,
                .using-keyboard textarea:focus,
                .using-keyboard [role="button"]:focus {
                    outline: 3px solid #3b82f6;
                    outline-offset: 3px;
                    border-radius: 8px;
                }
                
                button:focus-visible,
                a:focus-visible,
                input:focus-visible,
                select:focus-visible,
                textarea:focus-visible,
                [role="button"]:focus-visible {
                    outline: 3px solid #3b82f6;
                    outline-offset: 3px;
                    border-radius: 8px;
                }
                
                .focus-ring {
                    outline: 3px solid #3b82f6;
                    outline-offset: 3px;
                    border-radius: 8px;
                }
                
                /* Verbeterde focus voor progress bars */
                input[type="range"]:focus-visible {
                    outline: 3px solid #3b82f6;
                    outline-offset: 3px;
                    border-radius: 8px;
                }
            `}</style>

            <section
                className="mood-meter py-20 px-6 bg-gradient-to-b from-neutral-900 to-black"
                aria-labelledby="mood-meter-heading"
            >
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2
                            id="mood-meter-heading"
                            ref={mainHeadingRef}
                            tabIndex="-1"
                            className="text-3xl font-bold mb-4 focus:outline-none"
                        >
                            Hoofdstuk 3: Jouw stemming
                        </h2>
                        <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                            Hoe kijk jij aan tegen de toekomst van onze voedselproductie?
                        </p>
                    </div>

                    {/* Database status */}
                    <div className="mb-4 flex justify-center">
                        {isConnected ? (
                            <div
                                className="flex items-center gap-2 px-4 py-2 bg-emerald-900/30 text-emerald-400 rounded-full text-sm"
                                role="status"
                                aria-label="Database status: Live verbonden"
                            >
                                <Database size={16} aria-hidden="true" />
                                <span>Live verbonden • {totalVotes} stemmen</span>
                            </div>
                        ) : (
                            <div
                                className="flex items-center gap-2 px-4 py-2 bg-yellow-900/30 text-yellow-400 rounded-full text-sm"
                                role="status"
                                aria-label="Database status: Lokale gegevens"
                            >
                                <Database size={16} aria-hidden="true" />
                                <span>Lokale gegevens • {totalVotes} stemmen</span>
                            </div>
                        )}
                    </div>

                    {/* MOOD SELECTION */}
                    {!moodSubmitted ? (
                        <div
                            className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-2xl p-8 mb-12"
                            role="region"
                            aria-labelledby="mood-selection-heading"
                        >
                            <h3
                                id="mood-selection-heading"
                                className="text-2xl font-bold mb-6 text-center"
                            >
                                Stemming over de toekomst
                            </h3>
                            <p className="text-lg text-center mb-8 text-neutral-300">
                                Na alles wat je gelezen hebt: ben je hoopvol, neutraal of pessimistisch over
                                de toekomst van de vee-industrie in Nederland?
                            </p>

                            <div
                                className="grid grid-cols-1 md:grid-cols-3 gap-6"
                                role="radiogroup"
                                aria-labelledby="mood-selection-heading"
                                aria-describedby="mood-description"
                            >
                                {moods.map((mood, index) => (
                                    <button
                                        key={mood.id}
                                        ref={el => moodButtonsRef.current[index] = el}
                                        onClick={() => handleMoodSelection(mood.id)}
                                        onKeyDown={(e) => handleKeyDown(e, handleMoodSelection, mood.id)}
                                        disabled={loading}
                                        className={`p-8 rounded-xl border-2 ${mood.borderColor} ${mood.color} transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-neutral-800`}
                                        role="radio"
                                        aria-checked={false}
                                        aria-label={`${mood.label}: ${mood.ariaDescription}`}
                                        tabIndex={0}
                                    >
                                        <div className="flex flex-col items-center">
                                            <div className="mb-4" aria-hidden="true">{mood.icon}</div>
                                            <div className="text-xl font-bold mb-2">{mood.label}</div>
                                            <div className="text-sm text-center">{mood.description}</div>
                                        </div>
                                    </button>
                                ))}
                            </div>

                            <div id="mood-description" className="sr-only">
                                Kies uit drie opties: Hoopvol als je positief bent over verandering, Neutraal als je twijfelt, of Pessimistisch als je negatief bent.
                            </div>

                            {loading && (
                                <div
                                    className="text-center mt-6"
                                    role="status"
                                    aria-label="Stem wordt opgeslagen"
                                >
                                    <div
                                        className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-white"
                                        aria-hidden="true"
                                    ></div>
                                    <p className="mt-2 text-neutral-400">Stem wordt opgeslagen...</p>
                                </div>
                            )}
                        </div>
                    ) : (
                        /* MOOD RESULTS */
                        <div
                            className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-2xl p-8 mb-12"
                            role="region"
                            aria-labelledby="results-heading"
                        >
                            <div className="flex justify-between items-center mb-6">
                                <h3
                                    id="results-heading"
                                    className="text-2xl font-bold"
                                >
                                    Resultaten
                                </h3>
                                <div className="flex gap-3">
                                    <button
                                        onClick={resetVote}
                                        onKeyDown={(e) => handleKeyDown(e, resetVote)}
                                        className="flex items-center gap-2 px-4 py-2 bg-neutral-700 hover:bg-neutral-600 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-neutral-700"
                                        aria-label="Stem opnieuw instellen en een andere keuze maken"
                                    >
                                        Opnieuw stemmen
                                    </button>
                                    <button
                                        ref={refreshButtonRef}
                                        onClick={refreshResults}
                                        onKeyDown={(e) => handleKeyDown(e, refreshResults)}
                                        disabled={loading}
                                        className="flex items-center gap-2 px-4 py-2 bg-neutral-700 hover:bg-neutral-600 rounded-lg transition-colors disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-neutral-700"
                                        aria-label={loading ? 'Resultaten worden geladen' : 'Resultaten verversen'}
                                        aria-busy={loading}
                                    >
                                        <RefreshCw size={16} className={loading ? 'animate-spin' : ''} aria-hidden="true" />
                                        {loading ? 'Laden...' : 'Verversen'}
                                    </button>
                                </div>
                            </div>

                            {/* GLOBALE STEMNING */}
                            <div className="mb-8">
                                <div className="flex justify-between mb-4">
                                    <div className="text-lg">
                                        Globale stemming ({totalVotes} stemmen)
                                        {!isConnected && <span className="text-yellow-400 text-sm ml-2">(lokaal)</span>}
                                    </div>
                                    <div
                                        className="text-sm text-neutral-400"
                                        role="status"
                                        aria-live="polite"
                                    >
                                        {userMood && `Jij stemde: ${moods.find(m => m.id === userMood)?.label}`}
                                    </div>
                                </div>

                                <div className="space-y-4" role="list" aria-label="Stemmingsresultaten">
                                    {/* HOOPVOL */}
                                    <div role="listitem">
                                        <div className="flex justify-between mb-2">
                                            <div className="flex items-center gap-2">
                                                <Smile size={20} className="text-emerald-400" aria-hidden="true" />
                                                <span id="optimistic-label">Hoopvol</span>
                                            </div>
                                            <span
                                                className="font-bold"
                                                aria-describedby="optimistic-label"
                                            >
                                                {optimisticPercentage}% ({globalMood.optimistic})
                                            </span>
                                        </div>
                                        <div className="w-full h-6 bg-neutral-700 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-emerald-500 transition-all duration-1000"
                                                style={{ width: `${optimisticPercentage}%` }}
                                                role="progressbar"
                                                aria-valuenow={optimisticPercentage}
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                                aria-labelledby="optimistic-label"
                                            />
                                        </div>
                                    </div>

                                    {/* NEUTRAAL */}
                                    <div role="listitem">
                                        <div className="flex justify-between mb-2">
                                            <div className="flex items-center gap-2">
                                                <Meh size={20} className="text-neutral-400" aria-hidden="true" />
                                                <span id="neutral-label">Neutraal</span>
                                            </div>
                                            <span
                                                className="font-bold"
                                                aria-describedby="neutral-label"
                                            >
                                                {neutralPercentage}% ({globalMood.neutral})
                                            </span>
                                        </div>
                                        <div className="w-full h-6 bg-neutral-700 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-neutral-500 transition-all duration-1000 delay-300"
                                                style={{ width: `${neutralPercentage}%` }}
                                                role="progressbar"
                                                aria-valuenow={neutralPercentage}
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                                aria-labelledby="neutral-label"
                                            />
                                        </div>
                                    </div>

                                    {/* PESSIMISTISCH */}
                                    <div role="listitem">
                                        <div className="flex justify-between mb-2">
                                            <div className="flex items-center gap-2">
                                                <Frown size={20} className="text-rose-400" aria-hidden="true" />
                                                <span id="pessimistic-label">Pessimistisch</span>
                                            </div>
                                            <span
                                                className="font-bold"
                                                aria-describedby="pessimistic-label"
                                            >
                                                {pessimisticPercentage}% ({globalMood.pessimistic})
                                            </span>
                                        </div>
                                        <div className="w-full h-6 bg-neutral-700 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-rose-500 transition-all duration-1000 delay-600"
                                                style={{ width: `${pessimisticPercentage}%` }}
                                                role="progressbar"
                                                aria-valuenow={pessimisticPercentage}
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                                aria-labelledby="pessimistic-label"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* PERSONAL FEEDBACK */}
                            <div
                                className="bg-neutral-900/50 p-6 rounded-xl mb-6"
                                role="region"
                                aria-labelledby="personal-feedback-heading"
                            >
                                <h4
                                    id="personal-feedback-heading"
                                    className="text-lg font-bold mb-3"
                                >
                                    Jouw stemming
                                </h4>
                                <p
                                    className="text-neutral-300"
                                    aria-live="polite"
                                >
                                    {userMood === 'optimistic' &&
                                        "Je bent hoopvol! Dat is mooi. Optimisme is nodig om verandering te realiseren. " +
                                        "Blijf je inzetten voor een betere toekomst."}
                                    {userMood === 'neutral' &&
                                        "Je staat er neutraal in. Begrijpelijk, het is een complexe kwestie. " +
                                        "Soms is realisme de beste benadering - kijk naar de feiten en maak bewuste keuzes."}
                                    {userMood === 'pessimistic' &&
                                        "Je bent pessimistisch. Dat is begrijpelijk als je ziet hoe moeilijk verandering is. " +
                                        "Maar soms ontstaat verandering juist als het 'te laat' lijkt. Blijf kritisch, maar niet cynisch."}
                                </p>
                            </div>
                        </div>
                    )}

                    {/* TREND ANALYSIS */}
                    <div
                        className="bg-gradient-to-r from-emerald-900/20 to-teal-900/20 border border-emerald-800/30 rounded-2xl p-8"
                        role="region"
                        aria-labelledby="trend-analysis-heading"
                    >
                        <h4
                            id="trend-analysis-heading"
                            className="text-2xl font-bold mb-6 text-center"
                        >
                            Wat bepaalt de toekomst?
                        </h4>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 mb-2">
                                    <TrendingUp className="text-emerald-400" size={24} aria-hidden="true" />
                                    <h5 className="text-lg font-bold">Factoren voor hoop</h5>
                                </div>
                                <ul className="space-y-3 text-neutral-300" role="list" aria-label="Factoren voor hoop">
                                    <li className="flex items-start gap-2" role="listitem">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2" aria-hidden="true"></div>
                                        <span>Dalende vleesconsumptie bij jongeren</span>
                                    </li>
                                    <li className="flex items-start gap-2" role="listitem">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2" aria-hidden="true"></div>
                                        <span>Technologische doorbraken (kweekvlees)</span>
                                    </li>
                                    <li className="flex items-start gap-2" role="listitem">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2" aria-hidden="true"></div>
                                        <span>Groeiend bewustzijn over klimaat</span>
                                    </li>
                                    <li className="flex items-start gap-2" role="listitem">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2" aria-hidden="true"></div>
                                        <span>Internationale druk via EU-beleid</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center gap-3 mb-2">
                                    <TrendingDown className="text-rose-400" size={24} aria-hidden="true" />
                                    <h5 className="text-lg font-bold">Belemmeringen</h5>
                                </div>
                                <ul className="space-y-3 text-neutral-300" role="list" aria-label="Belemmeringen voor verandering">
                                    <li className="flex items-start gap-2" role="listitem">
                                        <div className="w-2 h-2 rounded-full bg-rose-500 mt-2" aria-hidden="true"></div>
                                        <span>Machtige lobby van de sector</span>
                                    </li>
                                    <li className="flex items-start gap-2" role="listitem">
                                        <div className="w-2 h-2 rounded-full bg-rose-500 mt-2" aria-hidden="true"></div>
                                        <span>Politieke angst voor kiezers</span>
                                    </li>
                                    <li className="flex items-start gap-2" role="listitem">
                                        <div className="w-2 h-2 rounded-full bg-rose-500 mt-2" aria-hidden="true"></div>
                                        <span>Economische afhankelijkheid van export</span>
                                    </li>
                                    <li className="flex items-start gap-2" role="listitem">
                                        <div className="w-2 h-2 rounded-full bg-rose-500 mt-2" aria-hidden="true"></div>
                                        <span>Culturele weerstand tegen verandering</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}