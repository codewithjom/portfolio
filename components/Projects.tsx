import ProjectList from './ProjectList'
import projects from '@/data/projects'

export default function Projects() {
  return (
    <div>
      {projects.map(project => (
        <ProjectList key={null} title={project.title} stack={project.stack} link={project.link} />
      ))}
    </div>
  )
}
