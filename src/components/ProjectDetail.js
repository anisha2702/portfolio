'use client';

import { useState } from 'react';
import Modal from './Modals';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { techIcons } from '@/data/techIcons';

export default function ProjectDetail({ project }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{project.title}</h1>
      <p className="text-gray-700 dark:text-gray-300 mb-6">{project.description}</p>

      {project.imageUrl && (
        <div className="cursor-pointer mb-6" onClick={() => setIsOpen(true)}>
          <Image
            src={project.imageUrl}
            alt={project.title}
            width={800}
            height={400}
            className="rounded-lg shadow-md hover:scale-105 transition-transform"
          />
        </div>
      )}

      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <Image
            src={project.imageUrl}
            alt={project.title}
            width={1200}
            height={800}
            className="rounded-lg w-full h-auto"
          />
        </Modal>
      )}

      <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Technologies Used:</h2>
      <ul className="flex flex-wrap gap-3 mb-6">
        {project.technologies.map((tech) => (
          <li key={tech} className="flex items-center gap-2 px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full">
            {techIcons[tech] && <span className="text-lg">{techIcons[tech]}</span>}
            <span className="text-sm">{tech}</span>
          </li>
        ))}
      </ul>

      <div className="flex gap-4 flex-wrap">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            <FaExternalLinkAlt /> Live Site
          </a>
        )}
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          >
            <FaGithub /> Source Code
          </a>
        )}
      </div>
    </main>
  );
}
