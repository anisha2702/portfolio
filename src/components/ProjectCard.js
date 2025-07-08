'use client';

import Image from 'next/image';
import { useState } from 'react';
import ProjectModal from './ProjectModal';

export default function ProjectCard({ project }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="cursor-pointer bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition"
        onClick={() => setIsOpen(true)}
      >
        <div className="relative group">
          <Image
            src={project.imageUrl}
            alt={project.title}
            width={500}
            height={300}
            className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-lg font-semibold">
            View Project
          </div>
        </div>

        <div className="p-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
          <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">{project.description}</p>
        </div>
      </div>

      <ProjectModal
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        project={project}
      />
    </>
  );
}
