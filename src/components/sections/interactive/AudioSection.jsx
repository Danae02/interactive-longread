import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';

export default function AudioSection() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioRef = useRef(null);

    // Simuleer audio duur (in secondes)
    const mockDuration = 87; // 1:27 minuten

    useEffect(() => {
        setDuration(mockDuration);
    }, []);

    useEffect(() => {
        let interval;
        if (isPlaying && currentTime < duration) {
            interval = setInterval(() => {
                setCurrentTime(prev => {
                    if (prev >= duration) {
                        setIsPlaying(false);
                        return 0;
                    }
                    return prev + 0.1;
                });
            }, 100);
        }
        return () => clearInterval(interval);
    }, [isPlaying, currentTime, duration]);

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    };

    const handleSeek = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percentage = x / rect.width;
        setCurrentTime(percentage * duration);
    };

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const progress = (currentTime / duration) * 100;

    return (
        <section className="audio-section bg-emerald-900 text-white py-24 px-6">
            <div className="max-w-4xl mx-auto">
                <h2 className="section-title text-4xl font-bold mb-16 text-center">Audio-look</h2>

                <div className="bg-emerald-800 rounded-xl p-8 shadow-2xl">
                    <div className="flex items-start gap-6 mb-6">
                        <Volume2 className="text-emerald-400 flex-shrink-0" size={32} />
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold mb-2 text-white">
                                Persoon die spreekt - functie
                            </h3>
                            <p className="text-emerald-200 text-lg mb-1">
                                "Quote van audio"
                            </p>
                        </div>
                    </div>

                    {/* Audio Player */}
                    <div className="bg-emerald-900/50 rounded-lg p-6">
                        <div className="flex items-center gap-4 mb-4">
                            <button
                                onClick={togglePlay}
                                className="bg-emerald-600 hover:bg-emerald-500 rounded-full p-4 transition-colors flex-shrink-0"
                                aria-label={isPlaying ? 'Pauzeer' : 'Afspelen'}
                            >
                                {isPlaying ? (
                                    <Pause className="text-white" size={24} />
                                ) : (
                                    <Play className="text-white ml-1" size={24} />
                                )}
                            </button>

                            <div className="flex-1">
                                <div
                                    className="h-2 bg-emerald-700 rounded-full cursor-pointer relative overflow-hidden"
                                    onClick={handleSeek}
                                >
                                    <div
                                        className="h-full bg-emerald-400 rounded-full transition-all"
                                        style={{ width: `${progress}%` }}
                                    />
                                </div>
                                <div className="flex justify-between text-sm text-emerald-200 mt-2">
                                    <span>{formatTime(currentTime)}</span>
                                    <span>{formatTime(duration)}</span>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Transcript Preview */}
                    <div className="mt-6 p-4 bg-emerald-900/30 rounded-lg border-l-4 border-emerald-400">
                        <p className="text-emerald-100 leading-relaxed">
                            <strong className="text-emerald-300">Maria:</strong> "Transcriptie.."
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}