// src/components/ProjectDetail.jsx
import { useParams, Link } from 'react-router-dom'
import { projects } from '../projectsData'

function ProjectDetail() {
  const { slug } = useParams()

  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <main>
        <p>Project not found.</p>
        <Link to="/">Back to home</Link>
      </main>
    )
  }

  return (
    <main className="project-detail">
      <header>
        <h1>{project.title}</h1>
        <p>
          {project.year} · {project.tags && project.tags.join(' · ')}
        </p>
        <Link to="/" className="back-link">
          ← Back to all projects
        </Link>
      </header>

      <section className="project-body">
        {/* 这里暂时先占位，以后把 markdown 内容渲染进来 */}
        <p>
          Detailed case study coming from markdown / structured content. For
          now, this is a placeholder.
        </p>
      </section>
    </main>
  )
}

export default ProjectDetail
