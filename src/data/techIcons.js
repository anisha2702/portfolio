import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNode,
  FaGitAlt,
  FaGithub,
} from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si';

export const techIcons = {
  HTML: <FaHtml5 className="text-orange-500" />,
  CSS: <FaCss3Alt className="text-blue-500" />,
  JavaScript: <FaJs className="text-yellow-400" />,
  React: <FaReact className="text-cyan-500" />,
  'Next.js': <SiNextdotjs className="text-black dark:text-white" />,
  Tailwind: <SiTailwindcss className="text-teal-400" />,
  Git: <FaGitAlt className="text-orange-600" />,
  GitHub: <FaGithub className="text-gray-800 dark:text-white" />,
  Node: <FaNode className="text-green-600" />,
};
