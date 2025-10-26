'use client';

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub,FaPython} from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si';
import Reveal from './Reveal';

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "GitHub", icon: <FaGithub className="text-gray-800 dark:text-white" /> },
  { name: "Python", icon: <FaPython className="text-blue-400" /> },
];

export default function Skills() {
  return (
    <section className="my-12">
      <Reveal>
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-white">
          ⚙️ My Skills
        </h2>
      </Reveal>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
        {skills.map((skill, index) => (
          <Reveal key={skill.name} delay={index * 0.05}>
            <div className="flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
              <div className="text-5xl mb-2">{skill.icon}</div>
              <p className="text-gray-700 dark:text-gray-300 text-sm">{skill.name}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
