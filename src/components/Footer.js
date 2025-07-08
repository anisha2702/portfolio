'use client';

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Reveal from './Reveal';

export default function Footer() {
  return (
    <Reveal delay={0.4}>
      <footer className=" py-8 text-center  border-gray-200 dark:border-gray-700">
        <p className="mb-4 text-gray-700 dark:text-gray-400 font-medium">
          Connect with me
        </p>
        <div className="flex justify-center gap-6 text-2xl text-gray-700 dark:text-gray-300">
          <a href="https://github.com/anisha2702" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className="hover:text-blue-600 dark:hover:text-blue-400 transition" />
          </a>
          <a href="https://linkedin.com/in/anishakumari27" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="hover:text-blue-600 dark:hover:text-blue-400 transition" />
          </a>
          <a href="mailto:anishakumari270205@gmail.com" aria-label="Email">
            <FaEnvelope className="hover:text-blue-600 dark:hover:text-blue-400 transition" />
          </a>
        </div>

        <p className="mt-6 text-sm text-gray-500 dark:text-gray-500">
          © {new Date().getFullYear()} Anisha Kumari. All rights reserved.
        </p>
      </footer>
    </Reveal>
  );
}
