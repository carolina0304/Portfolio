import miFoto from "../../images/Arlen-25.jpg";

const Hero = () => {
  return (
    <section className="hero">
      {/* Lado izquierdo: texto */}
      <div className="hero__text">
        <p className="hero__intro">Yo soy</p>
        <h2 className="hero__name">Carolina Gomez</h2>

        <ul className="hero__tags">
          <li className="hero__tagprincipal">Desarrolladora Full Stack</li>
          <li></li>
          <li>Transformando ideas en</li>
          <li>experiencias digitales funcionales,</li>
          <li>responsivas y visualmente claras.</li>
        </ul>
      </div>

      {/* Lado derecho: foto con cuadro decorativo */}
      <div className="hero__photo-wrapper">
        <div className="hero__photo-box">
          <img className="hero__photo" src={miFoto} alt="Carolina Gomez" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
