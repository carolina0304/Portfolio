import { useLanguage } from "../../utils/LanguageContext.jsx";

import miFoto from "../../images/Arlen-25.jpg";

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section className="hero">
      {/* Lado izquierdo: texto */}
      <div className="hero__text">
        <p className="hero__intro">{t.hero.intro}</p>
        <h2 className="hero__name">Carolina Gomez</h2>

        <ul className="hero__tags">
          {t.hero.tags.map((tag, i) => (
            <li key={i}>{tag}</li>
          ))}
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
