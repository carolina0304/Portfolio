import { useLanguage } from "../../utils/LanguageContext.jsx";

import logoline from "../../images/Line.png";

const Header = () => {
  const { lang, toggleLang, t } = useLanguage();
  return (
    <div>
      <header className="header">
        <nav className="header__navigation">
          <a href="#proyectos">{t.nav.projects}</a>
          <a href="#acercademi">{t.nav.about}</a>
          <a href="#contacto">{t.nav.contact}</a>
        </nav>
        {/*Boton idioma*/}
        <button className="header__lang" onClick={toggleLang}>
          {lang === "es" ? "EN" : "ES"}
        </button>
      </header>
      <img className="header__line" src={logoline} alt="line" />
    </div>
  );
};

export default Header;
