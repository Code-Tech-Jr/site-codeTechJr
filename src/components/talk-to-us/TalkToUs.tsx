import styles from "./TalkToUs.module.css";
import locationIcon from "../../assets/icons/localizationIcon.svg";
import emailIcon from "../../assets/icons/emailIcon.svg";
import instagramIcon from "../../assets/icons/instagramIcon.svg";
import linkedinIcon from "../../assets/icons/linkedinIcon.svg";
import backgroundLogo from "../../assets/images/logoEmpresaJr.svg";

function TalkToUs() {
  return (
    <div className={styles["container-talk-to-us"]} id="talkToUs">
      <div className={styles["content-wrapper"]}>

        <div className={styles["info-section"]}>
          <h1 className={styles.title}>Fale conosco</h1>
          <p className={styles.subtitle}>
            Quer trabalhar em conjunto? Preencha o formulário e entraremos em
            contato em breve! Será um prazer falar com você.
          </p>
          <div className={styles["contact-details"]}>
            <div className={styles["info-block"]}>
              <img
                src={locationIcon}
                alt="Ícone de Localização"
                className={styles["info-icon"]}
              />
              <p>
                AV. ENG. LUÍS EDMUNDO CARRIJO COUBE, 2085 - NÚCLEO RES. PRES.
                GEISEL, BAURU - SP, 17033-360
              </p>
            </div>
            <div className={styles["info-block"]}>
              <img
                src={emailIcon}
                alt="Ícone de Email"
                className={styles["info-icon"]}
              />
              <p>CODETECHJR@GMAIL.COM</p>
            </div>
            <div className={styles["info-block"]}>
              <img
                src={instagramIcon}
                alt="Ícone do Instagram"
                className={styles["info-icon"]}
              />
              <p>@INSTA</p>
            </div>
            <div className={styles["info-block"]}>
              <img
                src={linkedinIcon}
                alt="Ícone do Linkedin"
                className={styles["info-icon"]}
              />
              <p>EJ</p>
            </div>
          </div>
        </div>

        <div className={styles["form-section"]}>
          <img src={backgroundLogo} alt="Code Tech Jr Logo Background" className={styles["background-logo"]} />
          <form className={styles.form}>
            <div className={styles["form-group"]}>
              <label htmlFor="name">NOME</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className={styles["form-group"]}>
              <label htmlFor="email">E-MAIL</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className={styles["form-group"]}>
              <label htmlFor="phone">TELEFONE</label>
              <input type="tel" id="phone" name="phone" required />
            </div>
            <div className={styles["form-group"]}>
              <label htmlFor="message">MENSAGEM</label>
              <textarea id="message" name="message" rows={5} required></textarea>
            </div>
            <button type="submit" className={styles["submit-button"]}>
              ENVIAR MENSAGEM
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TalkToUs;