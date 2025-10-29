import React, { useState } from 'react';

export default function PollSection() {
    const [pollVote, setPollVote] = useState(null);
    const [showPollResults, setShowPollResults] = useState(false);
    const [pollResults, setPollResults] = useState({
        transparanter: 42,
        strengereRegels: 38,
        onafhankelijkOnderzoek: 56,
        statusQuo: 12
    });

    const handlePollVote = (option) => {
        setPollVote(option);
        setShowPollResults(true);
        setPollResults(prev => ({
            ...prev,
            [option]: prev[option] + 1
        }));
    };

    const totalVotes = Object.values(pollResults).reduce((a, b) => a + b, 0);

    const pollLabels = {
        transparanter: 'Transparanter maken',
        strengereRegels: 'Strengere regels',
        onafhankelijkOnderzoek: 'Meer onafhankelijk onderzoek',
        statusQuo: 'Status quo'
    };

    return (
        <section className="poll-section bg-neutral-800 py-24 px-6">
            <div className="max-w-2xl mx-auto">
                <h2 className="poll-title text-3xl font-bold mb-8 text-center">Wat vind jij?</h2>
                <div className="poll-card bg-neutral-700 p-8 rounded-lg">
                    {!showPollResults ? (
                        <>
                            <p className="poll-question text-xl mb-6">
                                Vraag...?
                            </p>
                            <div className="poll-options space-y-4">
                                <button
                                    onClick={() => handlePollVote('transparanter')}
                                    className="poll-option w-full p-4 bg-neutral-600 hover:bg-emerald-600 rounded-lg text-left transition-colors"
                                >
                                    Antwoord 1
                                </button>
                                <button
                                    onClick={() => handlePollVote('strengereRegels')}
                                    className="poll-option w-full p-4 bg-neutral-600 hover:bg-emerald-600 rounded-lg text-left transition-colors"
                                >
                                    Antwoord 2
                                </button>
                                <button
                                    onClick={() => handlePollVote('onafhankelijkOnderzoek')}
                                    className="poll-option w-full p-4 bg-neutral-600 hover:bg-emerald-600 rounded-lg text-left transition-colors"
                                >
                                    Antwoord 3
                                </button>
                                <button
                                    onClick={() => handlePollVote('statusQuo')}
                                    className="poll-option w-full p-4 bg-neutral-600 hover:bg-emerald-600 rounded-lg text-left transition-colors"
                                >
                                    Antwoord 4
                                </button>
                            </div>
                        </>
                    ) : (
                        <div className="poll-results">
                            <p className="text-xl mb-6 text-emerald-400">Bedankt voor je stem!</p>
                            <div className="poll-results-list space-y-4">
                                {Object.entries(pollResults).map(([key, votes]) => {
                                    const percentage = Math.round((votes / totalVotes) * 100);
                                    return (
                                        <div key={key} className="poll-result-item">
                                            <div className="flex justify-between mb-2">
                                                <span className={pollVote === key ? 'text-emerald-400' : ''}>
                                                    {pollLabels[key]}
                                                </span>
                                                <span className="font-bold">{percentage}%</span>
                                            </div>
                                            <div className="poll-result-bar w-full bg-neutral-600 rounded-full h-3">
                                                <div
                                                    className={`poll-result-fill h-3 rounded-full ${pollVote === key ? 'bg-emerald-400' : 'bg-emerald-600'}`}
                                                    style={{ width: `${percentage}%` }}
                                                />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            <p className="text-sm text-neutral-400 mt-6 text-center">
                                {totalVotes} stemmen
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}