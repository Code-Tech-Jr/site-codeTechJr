import styles from "./TalkToUs.module.css";
import locationIcon from "../../assets/icons/localizationIcon.svg";
import emailIcon from "../../assets/icons/emailIcon.svg";
import instagramIcon from "../../assets/icons/instagramIcon.svg";
import linkedinIcon from "../../assets/icons/linkedinIcon.svg";
import backgroundLogo from "../../assets/images/logoEmpresaJr.svg";

function TalkToUs() {
  return (
    <section
      className={styles["container-talk-to-us"]}
      id="talkToUs"
      aria-labelledby="talk-to-us-heading"
    >
      <div className={styles["content-wrapper"]}>
        <div className={styles["info-section"]}>
          <h1 className={styles.title} id="talk-to-us-heading">
            Fale conosco
          </h1>
          <p className={styles.subtitle}>
            Quer trabalhar em conjunto? Preencha o formulário e entraremos em
            contato em breve! Será um prazer falar com você.
          </p>

          <ul className={styles["contact-details"]}>
            <li className={styles["info-block"]}>
              <img
                src={locationIcon}
                alt=""
                aria-hidden="true"
                className={styles["info-icon"]}
              />
              <p>
                AV. ENG. LUÍS EDMUNDO CARRIJO COUBE, 2085 - NÚCLEO RES. PRES.
                GEISEL, BAURU - SP, 17033-360
              </p>
            </li>
            <li className={styles["info-block"]}>
              <img
                src={emailIcon}
                alt=""
                aria-hidden="true"
                className={styles["info-icon"]}
              />
              <a href="mailto:CODETECHJR@GMAIL.COM">CODETECHJR@GMAIL.COM</a>
            </li>
            <li className={styles["info-block"]}>
              <img
                src={instagramIcon}
                alt=""
                aria-hidden="true"
                className={styles["info-icon"]}
              />
              <a
                href="https://instagram.com/" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Nosso Instagram: @INSTA (abre em nova aba)"
              >
                @INSTA
              </a>
            </li>
            <li className={styles["info-block"]}>
              <img
                src={linkedinIcon}
                alt=""
                aria-hidden="true"
                className={styles["info-icon"]}
              />
              <a
                href="https://linkedin.com/company/" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Nosso Linkedin: EJ (abre em nova aba)"
              >
                EJ
              </a>
            </li>
          </ul>
        </div>

        <div className={styles["form-section"]}>
          <img
            src={backgroundLogo}
            alt=""
            aria-hidden="true"
            className={styles["background-logo"]}
          />
          <form className={styles.form}>
            <div className={styles["form-group"]}>
              <label htmlFor="name">NOME</label>
              <input
                type="text"
                id="name"
                name="name"
                autoComplete="name"
                required
              />
            </div>
            <div className={styles["form-group"]}>
              <label htmlFor="email">E-MAIL</label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                required
              />
            </div>
            <div className={styles["form-group"]}>
              <label htmlFor="phone">TELEFONE</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                autoComplete="tel"
                required
              />
            </div>
            <div className={styles["form-group"]}>
              <label htmlFor="message">MENSAGEM</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
              ></textarea>
            </div>
            <button type="submit" className={styles["submit-button"]}>
              ENVIAR MENSAGEM
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default TalkToUs;