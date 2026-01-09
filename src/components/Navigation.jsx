import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, MessageSquare } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [focusedIndex, setFocusedIndex] = useState(-1);
    const mobileMenuRef = useRef(null);
    const menuButtonRef = useRef(null);
    const menuItemsRef = useRef([]);

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

    // Trap focus binnen mobiel menu
    useEffect(() => {
        if (isMobileMenuOpen && mobileMenuRef.current) {
            const focusableElements = mobileMenuRef.current.querySelectorAll(
                'button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );

            if (focusableElements.length > 0) {
                focusableElements[0].focus();
            }

            const handleKeyDown = (e) => {
                if (e.key === 'Escape') {
                    setIsMobileMenuOpen(false);
                    menuButtonRef.current?.focus();
                }

                if (e.key === 'Tab') {
                    const firstElement = focusableElements[0];
                    const lastElement = focusableElements[focusableElements.length - 1];

                    if (e.shiftKey && document.activeElement === firstElement) {
                        e.preventDefault();
                        lastElement.focus();
                    } else if (!e.shiftKey && document.activeElement === lastElement) {
                        e.preventDefault();
                        firstElement.focus();
                    }
                }
            };

            document.addEventListener('keydown', handleKeyDown);
            return () => document.removeEventListener('keydown', handleKeyDown);
        }
    }, [isMobileMenuOpen]);

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

        // Focus terug naar de eerste navigatie link na scroll
        setTimeout(() => {
            const navButton = document.querySelector(`[data-section="${sectionId}"]`);
            if (navButton) {
                navButton.focus();
            }
        }, 500);
    };

    const handleMobileMenuToggle = () => {
        const newState = !isMobileMenuOpen;
        setIsMobileMenuOpen(newState);

        if (!newState) {
            // Als menu sluit, focus terug naar menu knop
            setTimeout(() => {
                menuButtonRef.current?.focus();
            }, 10);
        }
    };

    const handleMenuItemKeyDown = (e, index, type, item) => {
        switch(e.key) {
            case 'Enter':
            case ' ':
                if (type === 'section') {
                    e.preventDefault();
                    scrollToSection(item.id);
                }
                // Voor links werkt de native Enter al
                break;
            case 'ArrowRight':
            case 'ArrowDown':
                e.preventDefault();
                const nextIndex = (index + 1) % menuItemsRef.current.length;
                if (menuItemsRef.current[nextIndex]) {
                    menuItemsRef.current[nextIndex].focus();
                    setFocusedIndex(nextIndex);
                }
                break;
            case 'ArrowLeft':
            case 'ArrowUp':
                e.preventDefault();
                const prevIndex = (index - 1 + menuItemsRef.current.length) % menuItemsRef.current.length;
                if (menuItemsRef.current[prevIndex]) {
                    menuItemsRef.current[prevIndex].focus();
                    setFocusedIndex(prevIndex);
                }
                break;
            case 'Home':
                e.preventDefault();
                if (menuItemsRef.current[0]) {
                    menuItemsRef.current[0].focus();
                    setFocusedIndex(0);
                }
                break;
            case 'End':
                e.preventDefault();
                const lastIndex = menuItemsRef.current.length - 1;
                if (menuItemsRef.current[lastIndex]) {
                    menuItemsRef.current[lastIndex].focus();
                    setFocusedIndex(lastIndex);
                }
                break;
        }
    };

    const longreadMenuItems = [
        { id: 'introductie', label: 'Introductie' },
        { id: 'verleden', label: 'Verleden' },
        { id: 'heden', label: 'Heden' },
        { id: 'toekomst', label: 'Toekomst' },
    ];

    const additionalPages = [
        { path: '/kunst-kennis-cultuur', label: 'Kunst, Kennis & Cultuur hoekje', icon: '🎭' }
    ];

    // Combineer alle menu items voor keyboard navigatie
    const allMenuItems = [
        ...(isLongreadPage ? longreadMenuItems.map(item => ({ ...item, type: 'section' })) : []),
        ...additionalPages.map(page => ({ ...page, type: 'link' })),
        { path: '/interviews', label: 'Alle Interviews', icon: <MessageSquare size={16} />, type: 'link' }
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? 'bg-neutral-900/95 backdrop-blur-md shadow-lg'
                    : 'bg-neutral-900/90 backdrop-blur-md'
            }`}
            role="navigation"
            aria-label="Hoofdnavigatie"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo/Title */}
                    <Link
                        to="/"
                        className="text-xl font-bold text-white hover:text-emerald-400 transition-colors flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900 rounded"
                        aria-label="Vee-industrie longread - naar homepagina"
                    >
                        <span>Vee-industrie</span>
                        {!isLongreadPage && (
                            <span className="text-sm text-neutral-400">/ longread</span>
                        )}
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-1" role="menubar" aria-label="Hoofdmenu">
                        {allMenuItems.map((item, index) => {
                            if (item.type === 'section') {
                                return (
                                    <button
                                        key={item.id}
                                        ref={el => menuItemsRef.current[index] = el}
                                        onClick={() => scrollToSection(item.id)}
                                        onKeyDown={(e) => handleMenuItemKeyDown(e, index, 'section', item)}
                                        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-800 ${
                                            activeSection === item.id
                                                ? 'bg-emerald-600 text-white'
                                                : 'text-neutral-300 hover:text-white hover:bg-neutral-800'
                                        }`}
                                        role="menuitem"
                                        aria-label={item.label}
                                        aria-current={activeSection === item.id ? 'location' : undefined}
                                        data-section={item.id}
                                        tabIndex={0}
                                    >
                                        {item.label}
                                    </button>
                                );
                            } else {
                                const isActive = location.pathname === item.path;
                                return (
                                    <Link
                                        key={item.path}
                                        ref={el => menuItemsRef.current[index] = el}
                                        to={item.path}
                                        onKeyDown={(e) => handleMenuItemKeyDown(e, index, 'link', item)}
                                        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-800 ${
                                            isActive
                                                ? 'bg-neutral-700 text-white'
                                                : 'text-neutral-300 hover:text-white hover:bg-neutral-800'
                                        }`}
                                        role="menuitem"
                                        aria-label={item.label}
                                        aria-current={isActive ? 'page' : undefined}
                                        tabIndex={0}
                                    >
                                        {item.icon && (typeof item.icon === 'string' ? item.icon : item.icon)}
                                        {item.label}
                                    </Link>
                                );
                            }
                        })}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        ref={menuButtonRef}
                        onClick={handleMobileMenuToggle}
                        className="md:hidden p-2 rounded-md text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900"
                        aria-label={isMobileMenuOpen ? "Sluit menu" : "Open menu"}
                        aria-expanded={isMobileMenuOpen}
                        aria-controls="mobile-menu"
                        aria-haspopup="menu"
                    >
                        {isMobileMenuOpen ? (
                            <>
                                <X size={24} aria-hidden="true" />
                                <span className="sr-only">Sluit menu</span>
                            </>
                        ) : (
                            <>
                                <Menu size={24} aria-hidden="true" />
                                <span className="sr-only">Open menu</span>
                            </>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                ref={mobileMenuRef}
                id="mobile-menu"
                className={`md:hidden transition-all duration-300 overflow-hidden ${
                    isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'
                }`}
                role="menu"
                aria-label="Mobiel menu"
                aria-hidden={!isMobileMenuOpen}
            >
                <div className="px-2 pt-2 pb-3 space-y-1 bg-neutral-900/98 backdrop-blur-md">
                    {allMenuItems.map((item, index) => {
                        if (item.type === 'section') {
                            return (
                                <button
                                    key={item.id}
                                    ref={el => menuItemsRef.current[index] = el}
                                    onClick={() => scrollToSection(item.id)}
                                    onKeyDown={(e) => handleMenuItemKeyDown(e, index, 'section', item)}
                                    className={`block w-full text-left px-3 py-3 rounded-md text-base font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900 ${
                                        activeSection === item.id
                                            ? 'bg-emerald-600 text-white'
                                            : 'text-neutral-300 hover:text-white hover:bg-neutral-800'
                                    }`}
                                    role="menuitem"
                                    aria-label={item.label}
                                    aria-current={activeSection === item.id ? 'location' : undefined}
                                    tabIndex={isMobileMenuOpen ? 0 : -1}
                                >
                                    {item.label}
                                </button>
                            );
                        } else {
                            const isActive = location.pathname === item.path;
                            return (
                                <Link
                                    key={item.path}
                                    ref={el => menuItemsRef.current[index] = el}
                                    to={item.path}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    onKeyDown={(e) => handleMenuItemKeyDown(e, index, 'link', item)}
                                    className={`block px-3 py-3 rounded-md text-base font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900 ${
                                        isActive
                                            ? 'bg-neutral-700 text-white'
                                            : 'text-neutral-300 hover:text-white hover:bg-neutral-800'
                                    }`}
                                    role="menuitem"
                                    aria-label={item.label}
                                    aria-current={isActive ? 'page' : undefined}
                                    tabIndex={isMobileMenuOpen ? 0 : -1}
                                >
                                    <div className="flex items-center gap-2">
                                        {item.icon && (typeof item.icon === 'string' ? item.icon : item.icon)}
                                        {item.label}
                                    </div>
                                </Link>
                            );
                        }
                    })}

                    {/* Mobile menu instructions */}
                    <div className="px-3 py-2 text-xs text-neutral-400 border-t border-neutral-700 mt-2 pt-2">
                        <p>Gebruik <kbd className="px-1 py-0.5 bg-neutral-800 rounded">Tab</kbd> om te navigeren</p>
                        <p>Gebruik <kbd className="px-1 py-0.5 bg-neutral-800 rounded">Escape</kbd> om menu te sluiten</p>
                    </div>
                </div>
            </div>

            {/* Screen reader announcements */}
            <div className="sr-only" aria-live="polite" aria-atomic="true">
                {isMobileMenuOpen ? "Menu geopend" : "Menu gesloten"}
            </div>
        </nav>
    );
}