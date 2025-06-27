import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { cn } from '../lib/utils.js';

const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            setIsDarkMode(true)
            document.documentElement.classList.add("dark");
        } else {
            localStorage.setItem("theme", "light")
            setIsDarkMode(false);
        }
    }, [])


    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 120);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light")
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark")
            setIsDarkMode(true);
        }
    }
    return (
        <div
            className={cn(
                "fixed top-3 right-4 z-[80] rounded-full bg-muted text-foreground transition-all duration-300",
                scrolled ? "py-2 px-3 opacity-0" : "py-3 px-2", // default padding
                "sm:py-4 sm:px-6" // larger padding for sm and up
            )}
        >
            <button onClick={toggleTheme} aria-label="Toggle Theme">
                {isDarkMode ? (
                    <Sun className="size-4 sm:size-5 text-orange-300" />
                ) : (
                    <Moon className="size-4 sm:size-5 text-blue-900" />
                )}
            </button>
        </div>
    )
}

export default ThemeToggle
