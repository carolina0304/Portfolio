import logoline from "../../images/Line.png";

const Header = () => {
  return (
    <div>
      <header className="header">
        <nav className="header__navigation">
          <a href="#proyectos">Proyectos</a>
          <a href="#acercademi">Acerca de mi</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>
      <img className="header__line" src={logoline} alt="line" />
    </div>
  );
};

export default Header;
