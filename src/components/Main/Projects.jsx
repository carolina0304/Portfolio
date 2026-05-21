import { useState } from "react";
import img1 from "../../images/Terrainmobiliaria.png";
import img2 from "../../images/Around1.png";
import img3 from "../../images/Biblioteca.png";
import img4 from "../../images/acerca.png";
import { useLanguage } from "../../utils/LanguageContext.jsx";

const Projects = () => {
  const { t } = useLanguage();
  const [selectedImg, setSelectedImg] = useState(null);

  const projects = [
    {
      id: 1,
      tag: "Full Stack",
      title: t.projects.p1.title,
      description: t.projects.p1.description,
      year: "2026",
      role: t.projects.p1.role,
      demo: "https://inmobiliaria-frontend-sage.vercel.app/",
      github: "https://github.com/carolina0304/inmobiliaria-frontend",
      image: img1,
    },
    {
      id: 2,
      tag: "Full Stack",
      title: t.projects.p2.title,
      description: t.projects.p2.description,
      year: "2025",
      role: t.projects.p2.role,
      demo: "https://around-frontend-app.onrender.com/",
      github: "https://github.com/carolina0304/web_project_api_full",
      image: img2,
    },

    {
      id: 3,
      tag: "Frontend",
      title: t.projects.p3.title,
      description: t.projects.p3.description,
      year: "2024",
      role: t.projects.p3.role,
      demo: " https://carolina0304.github.io/web_project_coffeeshop/",
      github: "https://github.com/carolina0304/web_project_coffeeshop",
      image: img3,
    },

    {
      id: 4,
      tag: "Frontend",
      title: t.projects.p4.title,
      description: t.projects.p4.description,
      year: "2024",
      role: t.projects.p4.role,
      demo: "https://carolina0304.github.io/Acerca-de-mi-/",
      github: "https://github.com/carolina0304/Acerca-de-mi-",
      image: img4,
    },
  ];

  return (
    <>
      <section className="projects" id="proyectos">
        <h2 className="projects__title">{t.projects.title}</h2>

        <div className="projects__list">
          {projects.map((project) => (
            <article className="project-card" key={project.id}>
              {/* Izquierda: imagen/mockup */}
              <div className="project-card__mockup">
                <span className="project-card__tag">{project.tag}</span>
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-card__img"
                    onClick={() => setSelectedImg(project.image)}
                  />
                ) : (
                  <div className="project-card__placeholder">
                    <span>{t.projects.preview}</span>
                  </div>
                )}
              </div>

              {/* Derecha: info */}
              <div className="project-card__info">
                <h3 className="project-card__name">{project.title}</h3>
                <p className="project-card__desc">{project.description}</p>

                <div className="project-card__meta">
                  <p className="project-card__meta-label">{t.projects.info}</p>
                  <div className="project-card__meta-row">
                    <span>{t.projects.year}</span>
                    <span>{project.year}</span>
                  </div>
                  <div className="project-card__meta-row">
                    <span>{t.projects.role}</span>
                    <span>{project.role}</span>
                  </div>
                </div>

                <div className="project-card__links">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="project-card__link"
                  >
                    {t.projects.demo}↗
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-card__link"
                  >
                    {t.projects.github}⊙
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      {/* ── Popup / Lightbox ── */}
      {selectedImg && (
        <div className="lightbox" onClick={() => setSelectedImg(null)}>
          <button
            className="lightbox__close"
            onClick={() => setSelectedImg(null)}
          >
            ✕
          </button>
          <img
            src={selectedImg}
            alt="Vista ampliada"
            className="lightbox__img"
            onClick={(e) => e.stopPropagation()} // ← click en imagen no cierra
          />
        </div>
      )}
    </>
  );
};

export default Projects;
