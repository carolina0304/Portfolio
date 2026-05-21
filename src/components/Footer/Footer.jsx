import { useLanguage } from "../../utils/LanguageContext.jsx";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="footer">
      <nav className="footer__nav">
        <a href="#proyectos">{t.nav.projects}</a>
        <a href="#acercademi">{t.nav.about}</a>
        <a href="#contacto">{t.nav.contact}</a>
      </nav>
      <p className="footer__copyright">{t.footer.copy}</p>
    </footer>
  );
};

export default Footer;
