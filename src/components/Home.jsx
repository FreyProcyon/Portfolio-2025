import { Link } from 'react-router-dom'
import { projects } from '../projectsData'

function Home() {
  return (
    <div className="container">
      <section className="hero">
        <h1>Zhuoyang Pei</h1>
        <p>
          XR / Interaction Design & Frontend. I design and build interactive
          experiences across XR, web, and physical-digital systems.
        </p>
      </section>

      <h2 className="section-title">Selected Projects</h2>

      <section className="projects-grid">
        {projects.map((project) => (
          <article key={project.slug} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.shortDescription}</p>
            <p className="meta">
              <span>{project.year}</span>{' '}
              {project.tags && project.tags.join(' · ')}
            </p>
            <Link to={`/projects/${project.slug}`} className="project-link">
              View case study →
            </Link>
          </article>
        ))}
      </section>
    </div>
  )
}

export default Home
