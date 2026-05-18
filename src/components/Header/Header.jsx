import logoline from "../../images/Line.png";

const Header = () => {
  return (
    <div>
      <header className="header">
        <h1 className="header__name">CAROLINA GOMEZ</h1>
        <nav className="header__navigation">
          <a href="#proyestos" className="header__project">
            Proyectos
          </a>
          <a href="#acercademi" className="header__aboutme">
            Acerca de mi
          </a>
          <a href="contacto" className="header__contact">
            Contacto
          </a>
        </nav>
      </header>
      <img className="header__line" src={logoline} alt="line" />
    </div>
  );
};

export default Header;
