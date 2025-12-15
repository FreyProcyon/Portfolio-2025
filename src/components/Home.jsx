import { Link } from "react-router-dom";
import { projects } from "../projectsData";
import FeaturedCarousel from './FeaturedCarousel'


function Home() {
  return (
    <div className="container">
      <section className="hero">
        <h1>裴卓洋 Zhuoyang Pei</h1>
        <p>
          我专注于 XR
          交互设计与前端原型开发，擅长把复杂交互需求落地为可运行、可测试的产品原型（Unity
          / Web）。
          <br />
          <span style={{ color: "var(--muted)" }}>
            XR Interaction · Frontend Prototyping · Human-Centered Design
          </span>
        </p>
      </section>
      <FeaturedCarousel />


      <h2 className="section-title">全部项目</h2>


      <section className="projects-grid">
        {projects.map((project) => (
          <article key={project.slug} className="project-card">
          <Link to={`/projects/${project.slug}`} className="card-cover">
            <img src={project.cover} alt={project.title} loading="lazy" />
          </Link>
        
          <div className="card-body">
            <h3>{project.title}</h3>
            <p>{project.shortDescription}</p>
        
            <div className="tag-row">
              {project.tags?.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
        
            <p className="meta">{project.year}</p>
        
            <Link to={`/projects/${project.slug}`} className="project-link">
              View case study →
            </Link>
          </div>
        </article>
        
        ))}
      </section>
    </div>
  );
}

export default Home;
