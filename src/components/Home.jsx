import Hero from "./Hero";
import FeaturedCarousel from "./FeaturedCarousel";
import { projects } from "../projectsData";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Hero />
      <FeaturedCarousel />

      <div className="container">

        <h2 className="sectionTitle">全部项目</h2>

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
    </>
  );
}

export default Home;
