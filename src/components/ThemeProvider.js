'use client';

import { useEffect, useState } from "react";

export default function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <div className={`bg-white text-gray-900 dark:bg-gray-900 dark:text-white min-h-screen`}>
      {/* We'll pass toggleTheme and isDark as context later if needed */}
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 text-2xl z-50"
        aria-label="Toggle Theme"
      >
        {isDark ? "☀️" : "🌙"}
      </button>
      {children}
    </div>
  );
}
