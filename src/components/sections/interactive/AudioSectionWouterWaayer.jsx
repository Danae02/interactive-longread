import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, X, Mic } from 'lucide-react';

export default function AudioSectionWouterWaayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [error, setError] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const audioRef = useRef(null);
    const basePath = '/interactive-longread';

    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            const handleLoadedMetadata = () => {
                setDuration(audio.duration);
                setError(null);
            };

            const handleTimeUpdate = () => {
                setCurrentTime(audio.currentTime);
            };

            const handleEnded = () => {
                setIsPlaying(false);
                setCurrentTime(0);
            };

            const handleError = (e) => {
                console.error('Audio fout:', e);
                setError('Kan audio niet laden.');
            };

            audio.addEventListener('loadedmetadata', handleLoadedMetadata);
            audio.addEventListener('timeupdate', handleTimeUpdate);
            audio.addEventListener('ended', handleEnded);
            audio.addEventListener('error', handleError);

            return () => {
                audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
                audio.removeEventListener('timeupdate', handleTimeUpdate);
                audio.removeEventListener('ended', handleEnded);
                audio.removeEventListener('error', handleError);
            };
        }
    }, []);

    const togglePlay = () => {
        const audio = audioRef.current;
        if (audio) {
            if (isPlaying) {
                audio.pause();
            } else {
                audio.play().catch(err => {
                    console.error('Play fout:', err);
                    setError('Kan audio niet afspelen');
                });
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleSeek = (e) => {
        const audio = audioRef.current;
        if (audio) {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const percentage = x / rect.width;
            const newTime = percentage * duration;
            audio.currentTime = newTime;
            setCurrentTime(newTime);
        }
    };

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const closePopup = () => {
        setShowPopup(false);
        if (isPlaying) {
            audioRef.current?.pause();
            setIsPlaying(false);
        }
    };

    const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

    return (
        <section className="audio-section bg-neutral-900 py-24 px-6">
            {/* Hidden audio element */}
            <audio ref={audioRef} preload="metadata">
                <source src={`${basePath}/audio-wouter/audio7.m4a`} type="audio/mp4" />
            </audio>

            <div className="max-w-5xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-emerald-900/30 px-4 py-2 rounded-full mb-4">
                        <Mic className="text-emerald-400" size={20} />
                        <span className="text-emerald-300 text-sm font-medium">Audio Interview</span>
                    </div>
                    <h2 className="text-4xl font-bold text-white mb-3">
                        De Rol van Belangenorganisaties
                    </h2>
                    <p className="text-neutral-400 text-lg">
                        Een gesprek met iemand die het systeem van binnenuit kent
                    </p>
                </div>

                {/* Compact Interactive Card */}
                <div
                    onClick={() => setShowPopup(true)}
                    className="group bg-gradient-to-br from-emerald-900 to-emerald-800 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/20 hover:scale-[1.02]"
                >
                    <div className="flex flex-col md:flex-row items-center gap-6 p-8">
                        {/* Profile Image with animated ring */}
                        <div className="relative flex-shrink-0">
                            <div className="absolute inset-0 bg-emerald-400 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                            <img
                                src={`${basePath}/audio-wouter/Wouter_waayer.jpg`}
                                alt="Wouter Waayer"
                                className="relative w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-4 border-emerald-400 shadow-lg"
                            />
                            <div className="absolute -bottom-2 -right-2 bg-emerald-500 rounded-full p-3 shadow-lg group-hover:scale-110 transition-transform">
                                <Play className="text-white" size={20} fill="white" />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 text-center md:text-left">
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                Wouter Waayer
                            </h3>
                            <p className="text-emerald-300 text-lg mb-3">
                                Boerenzoon, nu activist
                            </p>
                            <p className="text-neutral-200 text-base md:text-lg italic leading-relaxed">
                                "De rol van LTO is moeilijk te bepalen, omdat zij zich voordoen als onafhankelijk..."
                            </p>
                        </div>

                        {/* Listen CTA */}
                        <div className="flex-shrink-0 text-center">
                            <div className="text-emerald-300 text-sm font-medium mb-1">Luister nu</div>
                            <div className="text-neutral-400 text-xs">{formatTime(duration || 125)}</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal Popup */}
            {showPopup && (
                <div
                    className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
                    onClick={closePopup}
                >
                    <div
                        className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-emerald-500/20"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="sticky top-0 bg-gradient-to-b from-neutral-900 to-transparent backdrop-blur-sm p-6 pb-4 border-b border-emerald-500/10">
                            <button
                                onClick={closePopup}
                                className="absolute top-6 right-6 bg-neutral-800 hover:bg-neutral-700 rounded-full p-2 transition-colors group"
                                aria-label="Sluiten"
                            >
                                <X className="text-neutral-400 group-hover:text-white transition-colors" size={24} />
                            </button>

                            <div className="flex items-center gap-6 pr-12">
                                <img
                                    src={`${basePath}/audio-wouter/Wouter_waayer.jpg`}
                                    alt="Wouter Waayer"
                                    className="w-24 h-24 rounded-full object-cover border-4 border-emerald-500 shadow-lg"
                                />
                                <div>
                                    <h3 className="text-3xl font-bold text-white mb-1">
                                        Wouter Waayer
                                    </h3>
                                    <p className="text-emerald-400 text-lg">
                                        Boerenzoon, nu activist
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 space-y-6">
                            {/* Error message */}
                            {error && (
                                <div className="bg-red-900/30 border border-red-500/50 text-red-200 px-4 py-3 rounded-lg">
                                    <p className="font-semibold">⚠️ {error}</p>
                                </div>
                            )}

                            {/* Quote */}
                            <div className="bg-emerald-900/20 border-l-4 border-emerald-500 p-6 rounded-r-lg">
                                <p className="text-neutral-200 text-lg italic leading-relaxed">
                                    "De rol van LTO is moeilijk te bepalen, omdat zij zich voordoen als onafhankelijk. Dat zijn ze niet per se, want zij hebben natuurlijk heel veel contacten met bedrijven die wel degelijk partijlijk zijn."
                                </p>
                            </div>

                            {/* Audio Player */}
                            <div className="bg-gradient-to-br from-emerald-900/30 to-emerald-800/20 rounded-xl p-6 border border-emerald-500/20">
                                <div className="flex items-center gap-4">
                                    <button
                                        onClick={togglePlay}
                                        disabled={error}
                                        className="bg-emerald-500 hover:bg-emerald-400 disabled:bg-neutral-700 disabled:cursor-not-allowed rounded-full p-4 transition-all transform hover:scale-105 active:scale-95 shadow-lg"
                                        aria-label={isPlaying ? 'Pauzeer' : 'Afspelen'}
                                    >
                                        {isPlaying ? (
                                            <Pause className="text-white" size={28} fill="white" />
                                        ) : (
                                            <Play className="text-white ml-1" size={28} fill="white" />
                                        )}
                                    </button>

                                    <div className="flex-1">
                                        <div
                                            className="h-3 bg-emerald-950/50 rounded-full cursor-pointer relative overflow-hidden group"
                                            onClick={handleSeek}
                                        >
                                            <div
                                                className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full transition-all relative"
                                                style={{ width: `${progress}%` }}
                                            >
                                                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                            </div>
                                        </div>
                                        <div className="flex justify-between text-sm text-emerald-300 mt-3 font-medium">
                                            <span>{formatTime(currentTime)}</span>
                                            <span>{formatTime(duration)}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Transcript */}
                            <div className="space-y-4">
                                <h4 className="text-xl font-bold text-white flex items-center gap-2">
                                    <Volume2 className="text-emerald-400" size={24} />
                                    Transcriptie
                                </h4>
                                <div className="bg-neutral-800/50 rounded-xl p-6 space-y-4 border border-emerald-500/10">
                                    <p className="text-neutral-300 leading-relaxed">
                                        <strong className="text-emerald-400">Wouter:</strong> "Ja, de rol van LTO is moeilijk te bepalen, omdat zij zich voordoen als onafhankelijk. Dat zijn ze niet per se, want zij hebben natuurlijk heel veel contacten met bedrijven die wel degelijk partijlijk zijn. Zoals slachthuizen, transportbedrijven, vee-importeurs en die hebben een enorm belang erbij om het systeem zo te houden..."
                                    </p>
                                    <p className="text-neutral-300 leading-relaxed">
                                        <strong className="text-emerald-400">Wouter:</strong> "En dat merk je, doordat eigenlijk LTO niet per se de belangen van de boeren behartigt, want als ze dat wel zouden doen, dan zouden ze ook tegen de boeren zeggen: dan gaan jullie helpen met omschakelen, want zo kan het niet langer. Het moet kleinschaliger, dat is voor iedereen gezondheid beter, dat is eigenlijk een beter verdienmodel..."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}