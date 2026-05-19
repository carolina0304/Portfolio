import { useState } from "react";
import img1 from "../../images/Terrainmobiliaria.png";
import img2 from "../../images/Around1.png";
import img3 from "../../images/Biblioteca.png";
import img4 from "../../images/acerca.png";

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
    image: img1,
  },
  {
    id: 2,
    tag: "Full Stack",
    title:
      "Alrededor de los EE.UU. | Experiencia Social Interactiva con Arquitectura Full Stack ",
    description:
      "Desarrollé una aplicación Full Stack inspirada en una plataforma social interactiva, enfocada en mejorar la experiencia del usuario mediante autenticación segura, gestión dinámica de contenido y comunicación en tiempo real entre frontend y backend.La plataforma permite a los usuarios registrarse, iniciar sesión y administrar tarjetas interactivas, mejorando la personalización y la interacción dentro de la aplicación.Implementé autenticación y protección de rutas utilizando Node.js, Express y MongoDB, asegurando una gestión segura de usuarios y una arquitectura escalable basada en APIs REST.Diseñé una interfaz responsiva y dinámica con React, optimizando la navegación, actualización de contenido y experiencia de usuario en distintos dispositivos.",
    year: "2025",
    role: "Full Stack Developer",
    demo: "https://around-frontend-app.onrender.com/",
    github: "https://github.com/carolina0304/web_project_api_full",
    image: img2,
  },

  {
    id: 3,
    tag: "Frontend",
    title: "Biblioteca Triple Peaks|UX y Desarrollo Frontend ",
    description:
      "Desarrollé un sitio web interactivo para una biblioteca digital enfocado en mejorar la experiencia de navegación y acceso a contenido multimedia mediante una interfaz clara, organizada y responsiva.La plataforma permite a los usuarios interactuar de manera intuitiva mediante formularios funcionales, reservas y contenido multimedia integrado, facilitando una experiencia más dinámica y accesible.Implementé la metodología BEM y control de versiones con Git/GitHub para mantener un código escalable, organizado y alineado a buenas prácticas de desarrollo frontend.Diseñé una interfaz adaptable a distintos dispositivos, optimizando la usabilidad, accesibilidad y experiencia del usuario final.",
    year: "2024",
    role: "Frontend Developer",
    demo: " https://carolina0304.github.io/web_project_coffeeshop/",
    github: "https://github.com/carolina0304/web_project_coffeeshop",
    image: img3,
  },

  {
    id: 4,
    tag: "Frontend",
    title: "Acerca de Mí| Desarrollo Web Frontend y Diseño Responsivo  ",
    description:
      "• Desarrollé una página web personal desde cero para presentar información profesional de manera clara, estructurada y visualmente atractiva, fortaleciendo mi presencia digital como desarrolladora web.Implementé una estructura semántica y diseño responsivo utilizando HTML5 y CSS3, mejorando la accesibilidad, organización del contenido y experiencia de navegación en distintos dispositivos.Diseñé una interfaz coherente y enfocada en usabilidad, aplicando buenas prácticas de código limpio y mantenible para facilitar futuras mejoras y escalabilidad del proyecto.Proyecto que marcó el inicio de mi transición al desarrollo web, fortaleciendo habilidades fundamentales en diseño frontend y estructura de aplicaciones web.",
    year: "2024",
    role: "Frontend Developer",
    demo: "https://carolina0304.github.io/Acerca-de-mi-/",
    github: "https://github.com/carolina0304/Acerca-de-mi-",
    image: img4,
  },
];

const Projects = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <>
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
                    onClick={() => setSelectedImg(project.image)}
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
