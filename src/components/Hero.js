'use client';

import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import Reveal from './Reveal';

export default function Hero() {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    if (el.current) {
      typed.current = new Typed(el.current, {
        strings: ['Full Stack Developer', 'ML Enthusiast'],
        typeSpeed: 60,
        backSpeed: 40,
        loop: true,
      });
    }

    return () => typed.current?.destroy();
  }, []);

  return (
    <section className="relative py-20 text-center mt-10 min-h-[50vh] overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-300/30 to-pink-300/20 dark:from-indigo-800/20 dark:to-purple-800/20 blur-2xl rounded-full scale-150 z-0" />

      <Reveal>
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 relative z-10 text-gray-900 dark:text-white">
          Hi, I &apos;m{' '}
          <span className="text-indigo-600 dark:text-blue-400 drop-shadow-[0_0_5px_rgba(79,70,229,0.6)]">
            Anisha
          </span>
        </h1>
      </Reveal>

      <Reveal delay={0.1}>
        <span
          ref={el}
          className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 inline-block relative z-10"
        />
      </Reveal>

      <Reveal delay={0.2}>
        <div className="mt-8 relative z-10">
          <a
            href="#projects"
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition"
          >
            View My Work →
          </a>
        </div>
      </Reveal>
    </section>
  );
}
