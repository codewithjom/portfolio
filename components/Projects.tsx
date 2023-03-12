import ProjectList from './ProjectList'
import projects from '@/data/projects'

export default function Projects() {
  return (
    <div className="flex flex-col items-center justify-center md:flex-row">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map(project => (
          <ProjectList key={null} title={project.title} stack={project.stack} link={project.link} />
        ))}
      </div>
    </div>
  )
}
