import projects from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import Reveal from '@/components/Reveal';

export default function Projects() {
  return (
    <section className="py-12 max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">🚀 Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) =>
          project?.slug ? (
            <Reveal key={project.slug}>
              <ProjectCard project={project} />
            </Reveal>
          ) : null
        )}
      </div>
    </section>
  );
}
