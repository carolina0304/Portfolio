const skills = {
  Frontend: [
    {
      name: "HTML5",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
  ],
  Backend: [
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Express",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
  ],
};

const Aboutme = () => {
  return (
    <section className="Aboutme" id="acercademi">
      {/* Título */}
      <div className="Aboutme__left">
        <p className="Aboutme__subtitle">Conoce más</p>

        <h2 className="Aboutme__title">
          Acerca <br /> de mí
        </h2>

        <div className="Aboutme__line"></div>
      </div>

      {/* Card */}
      <div className="Aboutme__card">
        <p className="Aboutme__description">
          Mi camino comenzó en la arquitectura, diseñando espacios funcionales y
          resolviendo problemas reales. Hoy aplico esa misma lógica al
          desarrollo web, creando experiencias digitales intuitivas,
          estructuradas y centradas en el usuario.
        </p>

        <p className="Aboutme__description">
          Disfruto combinar diseño y tecnología para construir aplicaciones
          funcionales, responsivas y visualmente claras. Me interesa desarrollar
          productos digitales que no solo funcionen bien, sino que también
          generen una experiencia agradable para las personas que los utilizan.
        </p>
      </div>

      {/* ── Habilidades ── AGREGA ESTO ── */}
      <div className="Aboutme__skills">
        {Object.entries(skills).map(([category, items]) => (
          <div className="Aboutme__skill-group" key={category}>
            <p className="Aboutme__skill-label">{category}</p>
            <div className="Aboutme__skill-icons">
              {items.map((skill) => (
                <div className="Aboutme__skill-item" key={skill.name}>
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    width="36"
                    height="36"
                  />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Aboutme;
