const projects = [
  {
    id: 1,
    tag: "Full Stack",
    title: "TerraQro | Plataforma Inmobiliaria Escalable",
    description:
      "Desarrollé una plataforma inmobiliaria Full Stack enfocada en mejorar la experiencia de búsqueda y gestión de propiedades mediante una interfaz intuitiva, responsiva y centrada en el usuario.La aplicación permite explorar, filtrar y guardar propiedades favoritas, facilitando la navegación y ayudando a los usuarios a encontrar opciones de manera más rápida y organizada.Implementé roles diferenciados (usuario/administrador) para optimizar la administración de propiedades y mejorar el control del contenido mostrado dentro de la plataforma.El proyecto fue desarrollado con React, JavaScript y APIs REST, aplicando buenas prácticas de escalabilidad, mantenibilidad y experiencia de usuario.",
    year: "2026",
    role: "Full Stack Developer",
    demo: "https://inmobiliaria-frontend-sage.vercel.app/",
    github: "https://github.com/carolina0304/inmobiliaria-frontend",
    image: null, // ← aquí pon: import img1 from "../../images/proyecto1.png"
  },
  {
    id: 2,
    tag: "Frontend",
    title: "Otro proyecto destacado",
    description:
      "Otro proyecto que muestre tus habilidades. Menciona el stack, el cliente o el contexto, y qué aprendiste.",
    year: "2023",
    role: "Frontend Developer",
    demo: "https://tu-demo2.com",
    github: "https://github.com/tuusuario/proyecto2",
    image: null,
  },
];

const Projects = () => {
  return (
    <section className="projects" id="proyectos">
      <h2 className="projects__title">PROYECTOS DESTACADOS</h2>

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
                />
              ) : (
                <div className="project-card__placeholder">
                  <span>Vista previa del proyecto</span>
                </div>
              )}
            </div>

            {/* Derecha: info */}
            <div className="project-card__info">
              <h3 className="project-card__name">{project.title}</h3>
              <p className="project-card__desc">{project.description}</p>

              <div className="project-card__meta">
                <p className="project-card__meta-label">INFO DEL PROYECTO</p>
                <div className="project-card__meta-row">
                  <span>Año</span>
                  <span>{project.year}</span>
                </div>
                <div className="project-card__meta-row">
                  <span>Rol</span>
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
                  LIVE DEMO ↗
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-card__link"
                >
                  VER EN GITHUB ⊙
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
