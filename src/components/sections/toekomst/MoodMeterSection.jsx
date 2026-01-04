// components/sections/toekomst/MoodMeterSection.jsx
import React, { useState, useEffect } from 'react';
import { Smile, Frown, Meh, TrendingUp, TrendingDown, Database, RefreshCw } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';


const supabaseUrl = 'https://pnceluzqojuxqkmozopm.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBuY2VsdXpxb2p1eHFrbW96b3BtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc1MTgwNDUsImV4cCI6MjA4MzA5NDA0NX0.JXM47wQhJcULF4N--k6HBeS4wM6BcybxedIObOoIa7w"
const supabase = createClient(supabaseUrl, supabaseKey)

export default function MoodMeterSection() {
    const [userMood, setUserMood] = useState(null);
    const [moodSubmitted, setMoodSubmitted] = useState(false);
    const [globalMood, setGlobalMood] = useState({ optimistic: 0, neutral: 0, pessimistic: 0 });
    const [loading, setLoading] = useState(false);
    const [hasVoted, setHasVoted] = useState(false);
    const [isConnected, setIsConnected] = useState(false);

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
            icon: <Smile size={32} />,
            color: 'bg-emerald-600 hover:bg-emerald-700',
            borderColor: 'border-emerald-500',
            description: 'Ik zie kansen voor verandering'
        },
        {
            id: 'neutral',
            label: 'Neutraal',
            icon: <Meh size={32} />,
            color: 'bg-neutral-600 hover:bg-neutral-700',
            borderColor: 'border-neutral-500',
            description: 'Ik twijfel of het gaat lukken'
        },
        {
            id: 'pessimistic',
            label: 'Pessimistisch',
            icon: <Frown size={32} />,
            color: 'bg-rose-600 hover:bg-rose-700',
            borderColor: 'border-rose-500',
            description: 'Ik ben bang dat er weinig verandert'
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
    };

    const refreshResults = async () => {
        setLoading(true);
        await loadGlobalMood();
        setLoading(false);
    };

    const totalVotes = Object.values(globalMood).reduce((a, b) => a + b, 0);
    const optimisticPercentage = totalVotes > 0 ? Math.round((globalMood.optimistic / totalVotes) * 100) : 0;
    const neutralPercentage = totalVotes > 0 ? Math.round((globalMood.neutral / totalVotes) * 100) : 0;
    const pessimisticPercentage = totalVotes > 0 ? Math.round((globalMood.pessimistic / totalVotes) * 100) : 0;

    return (
        <div className="mood-meter py-20 px-6 bg-gradient-to-b from-neutral-900 to-black">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold mb-4">Hoofdstuk 3: Jouw stemming</h3>
                    <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                        Hoe kijk jij aan tegen de toekomst van onze voedselproductie?
                    </p>
                </div>

                {/* Database status */}
                <div className="mb-4 flex justify-center">
                    {isConnected ? (
                        <div className="flex items-center gap-2 px-4 py-2 bg-emerald-900/30 text-emerald-400 rounded-full text-sm">
                            <Database size={16} />
                            <span>Live verbonden • {totalVotes} stemmen</span>
                        </div>
                    ) : (
                        <div className="flex items-center gap-2 px-4 py-2 bg-yellow-900/30 text-yellow-400 rounded-full text-sm">
                            <Database size={16} />
                            <span>Lokale gegevens • {totalVotes} stemmen</span>
                        </div>
                    )}
                </div>

                {/* MOOD SELECTION */}
                {!moodSubmitted ? (
                    <div className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-2xl p-8 mb-12">
                        <h4 className="text-2xl font-bold mb-6 text-center">Stemming over de toekomst</h4>
                        <p className="text-lg text-center mb-8 text-neutral-300">
                            Na alles wat je gelezen hebt: ben je hoopvol, neutraal of pessimistisch over
                            de toekomst van de vee-industrie in Nederland?
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {moods.map(mood => (
                                <button
                                    key={mood.id}
                                    onClick={() => handleMoodSelection(mood.id)}
                                    disabled={loading}
                                    className={`p-8 rounded-xl border-2 ${mood.borderColor} ${mood.color} transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed`}
                                >
                                    <div className="flex flex-col items-center">
                                        <div className="mb-4">{mood.icon}</div>
                                        <div className="text-xl font-bold mb-2">{mood.label}</div>
                                        <div className="text-sm text-center">{mood.description}</div>
                                    </div>
                                </button>
                            ))}
                        </div>

                        {loading && (
                            <div className="text-center mt-6">
                                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                                <p className="mt-2 text-neutral-400">Stem wordt opgeslagen...</p>
                            </div>
                        )}
                    </div>
                ) : (
                    /* MOOD RESULTS */
                    <div className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-2xl p-8 mb-12">
                        <div className="flex justify-between items-center mb-6">
                            <h4 className="text-2xl font-bold">Resultaten</h4>
                            <button
                                onClick={refreshResults}
                                disabled={loading}
                                className="flex items-center gap-2 px-4 py-2 bg-neutral-700 hover:bg-neutral-600 rounded-lg transition-colors disabled:opacity-50"
                            >
                                <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
                                {loading ? 'Laden...' : 'Verversen'}
                            </button>
                        </div>

                        {/* GLOBALE STEMNING */}
                        <div className="mb-8">
                            <div className="flex justify-between mb-4">
                                <div className="text-lg">
                                    Globale stemming ({totalVotes} stemmen)
                                    {!isConnected && <span className="text-yellow-400 text-sm ml-2">(lokaal)</span>}
                                </div>
                                <div className="text-sm text-neutral-400">
                                    {userMood && `Jij stemde: ${moods.find(m => m.id === userMood)?.label}`}
                                </div>
                            </div>

                            <div className="space-y-4">
                                {/* HOOPVOL */}
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <div className="flex items-center gap-2">
                                            <Smile size={20} className="text-emerald-400" />
                                            <span>Hoopvol</span>
                                        </div>
                                        <span className="font-bold">{optimisticPercentage}% ({globalMood.optimistic})</span>
                                    </div>
                                    <div className="w-full h-6 bg-neutral-700 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-emerald-500 transition-all duration-1000"
                                            style={{ width: `${optimisticPercentage}%` }}
                                        />
                                    </div>
                                </div>

                                {/* NEUTRAAL */}
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <div className="flex items-center gap-2">
                                            <Meh size={20} className="text-neutral-400" />
                                            <span>Neutraal</span>
                                        </div>
                                        <span className="font-bold">{neutralPercentage}% ({globalMood.neutral})</span>
                                    </div>
                                    <div className="w-full h-6 bg-neutral-700 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-neutral-500 transition-all duration-1000 delay-300"
                                            style={{ width: `${neutralPercentage}%` }}
                                        />
                                    </div>
                                </div>

                                {/* PESSIMISTISCH */}
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <div className="flex items-center gap-2">
                                            <Frown size={20} className="text-rose-400" />
                                            <span>Pessimistisch</span>
                                        </div>
                                        <span className="font-bold">{pessimisticPercentage}% ({globalMood.pessimistic})</span>
                                    </div>
                                    <div className="w-full h-6 bg-neutral-700 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-rose-500 transition-all duration-1000 delay-600"
                                            style={{ width: `${pessimisticPercentage}%` }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* PERSONAL FEEDBACK */}
                        <div className="bg-neutral-900/50 p-6 rounded-xl mb-6">
                            <h5 className="text-lg font-bold mb-3">Jouw stemming</h5>
                            <p className="text-neutral-300">
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
                <div className="bg-gradient-to-r from-emerald-900/20 to-teal-900/20 border border-emerald-800/30 rounded-2xl p-8">
                    <h4 className="text-2xl font-bold mb-6 text-center">Wat bepaalt de toekomst?</h4>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-2">
                                <TrendingUp className="text-emerald-400" size={24} />
                                <h5 className="text-lg font-bold">Factoren voor hoop</h5>
                            </div>
                            <ul className="space-y-3 text-neutral-300">
                                <li className="flex items-start gap-2">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2"></div>
                                    <span>Dalende vleesconsumptie bij jongeren</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2"></div>
                                    <span>Technologische doorbraken (kweekvlees)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2"></div>
                                    <span>Groeiend bewustzijn over klimaat</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2"></div>
                                    <span>Internationale druk via EU-beleid</span>
                                </li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-2">
                                <TrendingDown className="text-rose-400" size={24} />
                                <h5 className="text-lg font-bold">Belemmeringen</h5>
                            </div>
                            <ul className="space-y-3 text-neutral-300">
                                <li className="flex items-start gap-2">
                                    <div className="w-2 h-2 rounded-full bg-rose-500 mt-2"></div>
                                    <span>Machtige lobby van de sector</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-2 h-2 rounded-full bg-rose-500 mt-2"></div>
                                    <span>Politieke angst voor kiezers</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-2 h-2 rounded-full bg-rose-500 mt-2"></div>
                                    <span>Economische afhankelijkheid van export</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-2 h-2 rounded-full bg-rose-500 mt-2"></div>
                                    <span>Culturele weerstand tegen verandering</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}