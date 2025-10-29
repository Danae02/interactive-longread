import React, { useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, Info } from 'lucide-react';

export default function VideoSection() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    // const [showInfo, setShowInfo] = useState(false);
    const [progress, setProgress] = useState(0);

    // Simuleer video progress
    React.useEffect(() => {
        let interval;
        if (isPlaying) {
            interval = setInterval(() => {
                setProgress(prev => {
                    if (prev >= 100) {
                        setIsPlaying(false);
                        return 0;
                    }
                    return prev + 0.5;
                });
            }, 100);
        }
        return () => clearInterval(interval);
    }, [isPlaying]);

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    const handleProgressClick = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percentage = (x / rect.width) * 100;
        setProgress(percentage);
    };

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const currentTime = (progress / 100) * 185; // 3:05 totaal
    const totalTime = 185;

    return (
        <section className="video-section bg-neutral-900 py-16 px-4 sm:px-6">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Video.....
                    </h2>
                    <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
                        .....
                    </p>
                </div>

                {/* Video Container */}
                <div className="relative">
                    {/* Video Player */}
                    <div className="relative bg-black rounded-xl overflow-hidden shadow-2xl">
                        {/* Thumbnail/Video Area */}
                        <div className="relative aspect-video bg-gradient-to-br from-neutral-800 to-neutral-900">
                            {/* Placeholder beeld (normaal zou hier een <video> tag komen) */}
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{
                                    backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=1200)',
                                    filter: isPlaying ? 'none' : 'brightness(0.7)'
                                }}
                            />

                            {/* Play Overlay */}
                            {!isPlaying && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <button
                                        onClick={handlePlayPause}
                                        className="bg-emerald-600 hover:bg-emerald-500 rounded-full p-6 transition-all transform hover:scale-110 shadow-2xl"
                                    >
                                        <Play className="text-white" size={48} fill="white" />
                                    </button>
                                </div>
                            )}


                            {/* Video Controls Overlay */}
                            {isPlaying && (
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                                    <div className="w-full p-6">
                                        {/* Progress Bar */}
                                        <div
                                            className="w-full h-1.5 bg-white/20 rounded-full cursor-pointer mb-4 group"
                                            onClick={handleProgressClick}
                                        >
                                            <div
                                                className="h-full bg-emerald-500 rounded-full transition-all group-hover:h-2"
                                                style={{ width: `${progress}%` }}
                                            />
                                        </div>

                                        {/* Controls */}
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-4">
                                                <button
                                                    onClick={handlePlayPause}
                                                    className="text-white hover:text-emerald-400 transition-colors"
                                                >
                                                    {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                                                </button>
                                                <button
                                                    onClick={() => setIsMuted(!isMuted)}
                                                    className="text-white hover:text-emerald-400 transition-colors"
                                                >
                                                    {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
                                                </button>
                                                <span className="text-white text-sm font-mono">
                                                    {formatTime(currentTime)} / {formatTime(totalTime)}
                                                </span>
                                            </div>
                                            <button className="text-white hover:text-emerald-400 transition-colors">
                                                <Maximize2 size={20} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Video Caption */}
                        <div className="bg-neutral-800 p-4">
                            <div className="flex items-start gap-3">
                                <Info className="text-emerald-400 flex-shrink-0 mt-0.5" size={20} />
                                <div>
                                    <p className="text-neutral-300 text-sm leading-relaxed">
                                        ......
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*/!* Context Cards *!/*/}
                    {/*<div className="grid md:grid-cols-2 gap-4 mt-6">*/}
                    {/*    <button*/}
                    {/*        onClick={() => setShowInfo(!showInfo)}*/}
                    {/*        className="bg-neutral-800 hover:bg-neutral-700 p-5 rounded-lg text-left transition-all border border-neutral-700 hover:border-emerald-600"*/}
                    {/*    >*/}
                    {/*        <div className="flex items-start justify-between mb-2">*/}
                    {/*            <h4 className="text-white font-semibold">Achtergrond bij de beelden</h4>*/}
                    {/*            <Info className="text-emerald-400" size={18} />*/}
                    {/*        </div>*/}
                    {/*        <p className="text-neutral-400 text-sm">*/}
                    {/*            Waarom deze opnames belangrijk zijn voor het debat*/}
                    {/*        </p>*/}
                    {/*    </button>*/}

                    {/*</div>*/}

                    {/* Info Expandable */}
                    {/*{showInfo && (*/}
                    {/*    <div className="mt-4 bg-neutral-800 border border-neutral-700 rounded-lg p-6 animate-fade-in">*/}
                    {/*        <h3 className="text-white font-bold text-lg mb-3">Context</h3>*/}
                    {/*        <div className="space-y-3 text-neutral-300 text-sm leading-relaxed">*/}
                    {/*            <p>*/}
                    {/*                Dit bedrijf staat model voor de moderne Nederlandse veehouderij:*/}
                    {/*                efficiënt, grootschalig en volgens de overheid "diervriendelijk".*/}
                    {/*                Maar wat zie je eigenlijk als je achter de schermen kijkt?*/}
                    {/*            </p>*/}
                    {/*            <p>*/}
                    {/*                De beelden tonen standaardpraktijken die legaal zijn, maar zelden*/}
                    {/*                worden getoond aan consumenten. De vraag is: als dit de realiteit is,*/}
                    {/*                waarom wordt het dan verborgen gehouden?*/}
                    {/*            </p>*/}
                    {/*            <p className="text-emerald-400 font-medium"> Deze opnames zijn onderdeel van een breder onderzoek naar transparantie*/}
                    {/*                in de vee-industrie.*/}
                    {/*            </p>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*)}*/}
                </div>
            </div>

            <style jsx>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 0.3s ease-out;
                }
            `}</style>
        </section>
    );
}