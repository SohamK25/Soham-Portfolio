import { ArrowUp } from "lucide-react";
import React from "react";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    setVisible(scrolled > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

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

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg transition-opacity duration-300
    ${visible ? "opacity-100" : "opacity-0"}
    ${isDarkMode ? "bg-primary text-white hover:bg-primary/50 transition-colors" : "bg-primary text-black hover:bg-primary/50 transition-colors"}
  `}
      aria-label="Scroll to top"
    >
      <ArrowUp size={20} />
    </button>
  );
}
