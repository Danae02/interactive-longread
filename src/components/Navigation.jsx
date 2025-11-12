import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
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
                'actie'
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
    }, []);

    const scrollToSection = (sectionId) => {
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

    const menuItems = [
        { id: 'introductie', label: 'Introductie' },
        { id: 'verleden', label: 'Verleden' },
        { id: 'cijfers', label: 'Cijfers' },
        { id: 'heden', label: 'Heden' },
        { id: 'interviews', label: 'Interviews' },
        { id: 'toekomst', label: 'Toekomst' },
        { id: 'actie', label: 'Wat kun jij doen?' }
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? 'bg-neutral-900/95 backdrop-blur-md shadow-lg'
                    : 'bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo/Title */}
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="text-xl font-bold text-white hover:text-emerald-400 transition-colors"
                    >
                        Vee-industrie
                    </button>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-1">
                        {menuItems.map((item) => (
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
                    {menuItems.map((item) => (
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
                </div>
            </div>
        </nav>
    );
}


