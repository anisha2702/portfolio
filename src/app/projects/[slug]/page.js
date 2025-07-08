import projects from '@/data/projects';
import ProjectDetail from '@/components/ProjectDetail';

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return <div className="text-center mt-20">Project not found</div>;

  return <ProjectDetail project={project} />;
}
