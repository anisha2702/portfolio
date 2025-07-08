'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import useActiveSection from '@/hooks/useActiveSection';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: 'projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [theme, setTheme] = useState('light');
  const sectionIds = ['home', 'about', 'projects', 'contact'];
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
  const storedTheme = localStorage.getItem('theme');
  const currentTheme = storedTheme || 'dark';

  if (!storedTheme) {
    localStorage.setItem('theme', 'dark');
  }

  setTheme(currentTheme);
  document.documentElement.classList.remove('light', 'dark');
  document.documentElement.classList.add(currentTheme);
}, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
  };


  return (
    <header className="w-full sticky top-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 shadow-sm">
      <nav className="flex justify-between items-center py-4 px-4 max-w-4xl mx-auto">
        <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
          Anisha<span className="text-blue-500">.</span>
        </Link>

        <div className="flex items-center gap-4">
          {/* Desktop Links */}
          <ul className="hidden sm:flex gap-6 text-sm">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`${activeSection === link.href.slice(1)
                    ? 'text-indigo-600 font-semibold'
                    : 'text-gray-700 dark:text-gray-300'
                    } hover:text-blue-600 transition`}
                >
                  {link.name}
                </a>
              </li>
            ))}

          </ul>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="text-xl"
            aria-label="Toggle Dark Mode"
          >
            {theme === 'light' ? '☀️' : '🌙'}
          </button>
        </div>
      </nav>
    </header>
  );
}
