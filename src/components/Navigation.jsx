import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    // Check of we op de longread pagina zijn
    const isLongreadPage = location.pathname === '/';

    useEffect(() => {
        // Alleen sectie tracking doen op de longread pagina
        if (isLongreadPage) {
            const handleScroll = () => {
                // Check if scrolled past hero
                setIsScrolled(window.scrollY > 100);

                // Determine active section based on scroll position
                const sections = [
                    'introductie',
                    'verleden',
                    'cijfers',
                    'heden',
                    'interviews',
                    'toekomst',
                ];

                for (const section of sections) {
                    const element = document.getElementById(section);
                    if (element) {
                        const rect = element.getBoundingClientRect();
                        if (rect.top <= 150 && rect.bottom >= 150) {
                            setActiveSection(section);
                            break;
                        }
                    }
                }
            };

            window.addEventListener('scroll', handleScroll);
            handleScroll(); // Check initial state

            return () => window.removeEventListener('scroll', handleScroll);
        } else {
            // Op andere pagina's resetten we de scroll state
            setIsScrolled(false);
            setActiveSection('');
        }
    }, [isLongreadPage]);

    const scrollToSection = (sectionId) => {
        if (!isLongreadPage) {
            // Als we niet op de longread zijn, navigeer eerst naar de homepagina
            window.location.href = `/#${sectionId}`;
            return;
        }

        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 80; // Height of sticky nav
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
        setIsMobileMenuOpen(false);
    };

    const longreadMenuItems = [
        { id: 'introductie', label: 'Introductie' },
        { id: 'verleden', label: 'Verleden' },
        { id: 'cijfers', label: 'Cijfers' },
        { id: 'heden', label: 'Heden' },
        { id: 'interviews', label: 'Interviews' },
        { id: 'toekomst', label: 'Toekomst' },
    ];

    const additionalPages = [
        { path: '/wat-kan-ik-doen', label: 'Actiepagina', icon: '📢' },
        { path: '/kunst-kennis-cultuur', label: 'Kunst, Kennis & Cultuur hoekje', icon: '🎭' }
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? 'bg-neutral-900/95 backdrop-blur-md shadow-lg'
                    : 'bg-neutral-900/90 backdrop-blur-md'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo/Title */}
                    <Link
                        to="/"
                        className="text-xl font-bold text-white hover:text-emerald-400 transition-colors flex items-center gap-2"
                    >
                        <span>Vee-industrie</span>
                        {!isLongreadPage && (
                            <span className="text-sm text-neutral-400">/ longread</span>
                        )}
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-1">
                        {/* Longread secties (alleen tonen op longread pagina) */}
                        {isLongreadPage && longreadMenuItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                                    activeSection === item.id
                                        ? 'bg-emerald-600 text-white'
                                        : 'text-neutral-300 hover:text-white hover:bg-neutral-800'
                                }`}
                            >
                                {item.label}
                            </button>
                        ))}

                        {/* Separator */}
                        {(isLongreadPage || additionalPages.length > 0) && (
                            <div className="h-6 w-px bg-neutral-700 mx-2"></div>
                        )}

                        {/* Extra pagina's - NU NEUTRAAL */}
                        {additionalPages.map((page) => (
                            <Link
                                key={page.path}
                                to={page.path}
                                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 ${
                                    location.pathname === page.path
                                        ? 'bg-neutral-700 text-white' // Veranderd van purple-600 naar neutral-700
                                        : 'text-neutral-300 hover:text-white hover:bg-neutral-800'
                                }`}
                            >
                                <span>{page.icon}</span>
                                {page.label}
                            </Link>
                        ))}

                        {/* Interviews link - NEUTRAAL */}
                        <Link
                            to="/interviews"
                            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 ${
                                location.pathname === '/interviews'
                                    ? 'bg-neutral-700 text-white'
                                    : 'text-neutral-300 hover:text-white hover:bg-neutral-800'
                            }`}
                        >
                            <MessageSquare size={16} />
                            Alle Interviews
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 rounded-md text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden transition-all duration-300 overflow-hidden ${
                    isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'
                }`}
            >
                <div className="px-2 pt-2 pb-3 space-y-1 bg-neutral-900/98 backdrop-blur-md">
                    {/* Longread secties */}
                    {isLongreadPage && longreadMenuItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`block w-full text-left px-3 py-3 rounded-md text-base font-medium transition-colors ${
                                activeSection === item.id
                                    ? 'bg-emerald-600 text-white'
                                    : 'text-neutral-300 hover:text-white hover:bg-neutral-800'
                            }`}
                        >
                            {item.label}
                        </button>
                    ))}

                    {/* Separator */}
                    {isLongreadPage && (
                        <div className="border-t border-neutral-700 my-2"></div>
                    )}

                    {/* Extra pagina's - NU NEUTRAAL */}
                    {additionalPages.map((page) => (
                        <Link
                            key={page.path}
                            to={page.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`block px-3 py-3 rounded-md text-base font-medium transition-colors ${
                                location.pathname === page.path
                                    ? 'bg-neutral-700 text-white' // Veranderd van purple-600 naar neutral-700
                                    : 'text-neutral-300 hover:text-white hover:bg-neutral-800'
                            }`}
                        >
                            <div className="flex items-center gap-2">
                                <span>{page.icon}</span>
                                {page.label}
                            </div>
                        </Link>
                    ))}

                    {/* Interviews link - NEUTRAAL */}
                    <Link
                        to="/interviews"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block px-3 py-3 rounded-md text-base font-medium transition-colors ${
                            location.pathname === '/interviews'
                                ? 'bg-neutral-700 text-white'
                                : 'text-neutral-300 hover:text-white hover:bg-neutral-800'
                        }`}
                    >
                        <div className="flex items-center gap-2">
                            <MessageSquare size={18} />
                            Alle Interviews
                        </div>
                    </Link>
                </div>
            </div>
        </nav>
    );
}