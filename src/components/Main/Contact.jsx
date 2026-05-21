import { useLanguage } from "../../utils/LanguageContext.jsx";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const { t } = useLanguage();
  return (
    <section className="contact" id="contacto">
      <div className="contact__container">
        {/* LEFT */}
        <div className="contact__content">
          <p className="contact__subtitle">{t.contact.subtitle}</p>

          <h2 className="contact__title">{t.contact.title}</h2>

          <div className="contact__line"></div>

          <p className="contact__text">{t.contact.text}</p>

          <p className="contact__text">{t.contact.text2}</p>

          <p className="contact__text">{t.contact.text3}</p>

          {/* EMAIL */}
          <a href="mailto:garlene122@gmail.com" className="contact__email">
            garlene122@gmail.com
          </a>

          {/* SOCIALS */}
          <div className="contact__socials">
            <a
              href="https://www.linkedin.com/in/arlenecarolina-gomez/"
              target="_blank"
              rel="noreferrer"
              className="contact__social"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://github.com/carolina0304"
              target="_blank"
              rel="noreferrer"
              className="contact__social"
            >
              <FaGithub />
            </a>

            <a
              href="https://wa.me/524921071124"
              target="_blank"
              rel="noreferrer"
              className="contact__social"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
