// src/components/Home.jsx
import { Link } from 'react-router-dom'
import { projects } from '../projectsData'

function Home() {
  return (
    <main className="home">
      {/* 顶部自我介绍区域 */}
      <section className="hero">
        <h1>Zhuoyang Pei</h1>
        <p>
          XR / Interaction Design & Frontend. I design and build interactive
          experiences across XR, web, and physical-digital systems.
        </p>
        {/* 以后可以加 Download CV 按钮 */}
      </section>

      {/* 项目列表区域 */}
      <section className="projects-list">
        <h2>Selected Projects</h2>
        <div className="projects-grid">
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
        </div>
      </section>
    </main>
  )
}

export default Home
