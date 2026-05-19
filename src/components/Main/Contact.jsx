import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact" id="contacto">
      <div className="contact__container">
        {/* LEFT */}
        <div className="contact__content">
          <p className="contact__subtitle">Trabajemos juntos</p>

          <h2 className="contact__title">Ponte en contacto</h2>

          <div className="contact__line"></div>

          <p className="contact__text">
            ¿Necesitas un sitio web moderno, funcional y visualmente atractivo
            para tu negocio o proyecto?
          </p>

          <p className="contact__text">
            Me apasiona crear sitios web modernos y centrados en el usuario que
            ayuden a proyectos y negocios a destacar digitalmente.
          </p>

          <p className="contact__text">
            También puedes escribirme para colaborar, resolver dudas o
            simplemente conectar 🚀
          </p>

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
