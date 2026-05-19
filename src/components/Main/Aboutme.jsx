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
    </section>
  );
};

export default Aboutme;
