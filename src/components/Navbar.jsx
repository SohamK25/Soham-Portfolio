import React, { useEffect, useState } from 'react';
import { Facebook, Linkedin, Instagram, Github } from 'lucide-react';
import { cn } from '../lib/utils';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    const navList = [
        { name: 'Home', href: '#hero', id: 'hero' },
        { name: 'About', href: '#about', id: 'about' },
        { name: 'Educations', href: '#educations', id: 'educations' },
        { name: 'Skills', href: '#skills', id: 'skills' },
        { name: 'Projects', href: '#projects', id: 'projects' },
        { name: 'Contact', href: '#contact', id: 'contact' }
    ];

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 120);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 bg-background transition-all duration-300",
                scrolled ? "py-4 border-b border-muted shadow-sm" : "py-6"
            )}
        >
            <div className="container mx-auto px-4">
                {/* Desktop Layout */}
                <div className={cn(
                    'hidden md:flex items-center transition-all duration-300',
                    scrolled ? 'justify-center' : 'justify-between'
                )}>
                    {/* Social Links - Visible only if not scrolled */}
                    {!scrolled && (
                        <div className="flex space-x-4">
                            <a href="https://www.linkedin.com/in/soham-kulkarni-94a404226/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                                <Linkedin />
                            </a>
                            <a href="https://github.com/SohamK25" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                                <Github />
                            </a>
                            <a href="https://www.instagram.com/sohammkulkarni/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                                <Instagram />
                            </a>
                            <a href="https://www.facebook.com/soham.kulkarni.50309" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                                <Facebook />
                            </a>
                        </div>
                    )}

                    {/* Nav Links */}
                    <div className="flex space-x-8">
                        {navList.map((item, key) => (
                            <a
                                key={key}
                                href={item.href}
                                className="text-foreground hover:text-primary transition-colors duration-300"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>

                {/* ✅ Mobile Layout */}
                <div className="flex flex-col space-y-2 md:hidden">
                    {/* Row 1: Social Links + Theme */}
                    <div className="flex items-center justify-between">
                        <div className="flex space-x-3">
                            <a href="https://www.linkedin.com/in/soham-kulkarni-94a404226/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                                <Linkedin size={18} />
                            </a>
                            <a href="https://github.com/SohamK25" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                                <Github size={18} />
                            </a>
                            <a href="https://www.instagram.com/sohammkulkarni/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                                <Instagram size={18} />
                            </a>
                            <a href="https://www.facebook.com/soham.kulkarni.50309" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                                <Facebook size={18} />
                            </a>
                        </div>

                        <div>
                            <ThemeToggle />
                        </div>
                    </div>

                    {/* Row 2: Nav Links */}
                    <div className="flex justify-right flex-wrap gap-2.5">
                        {navList.map((item, key) => (
                            <a
                                key={key}
                                href={item.href}
                                className="text-sm text-foreground hover:text-primary transition-colors duration-300"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
