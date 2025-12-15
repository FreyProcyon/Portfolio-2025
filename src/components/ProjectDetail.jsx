import { useParams, Link } from 'react-router-dom'
import { projects } from '../projectsData'

function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <div className="container">
        <p>Project not found.</p>
        <Link to="/" className="back-link">← Back to home</Link>
      </div>
    )
  }

  return (
    <div className="container">
      <header className="project-detail-header">
        <h1>{project.title}</h1>
        <p className="meta">
          {project.year} · {project.tags && project.tags.join(' · ')}
        </p>
        <Link to="/" className="back-link">← Back to all projects</Link>
      </header>

      <section className="project-body">
        <p>
          Detailed case study coming from markdown / structured content. For now,
          this is a placeholder.
        </p>
      </section>
    </div>
  )
}

export default ProjectDetail
