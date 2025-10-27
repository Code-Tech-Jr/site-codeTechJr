import styles from "./Footer.module.css";

import logoCodeTech from "../../assets/images/logoEmpresaJr2.svg";
import iconLocation from "../../assets/icons/localizationIcon.svg";
import iconInstagram from "../../assets/icons/instagramIcon.svg";
import iconLinkedin from "../../assets/icons/linkedinIcon.svg";
import iconEmail from "../../assets/icons/emailIcon.svg";
import logoUnesp from "../../assets/images/logoUnesp.svg";
import logoFc from "../../assets/images/logoFc.svg";
import logoDco from "../../assets/images/logoDco.svg";

function Footer() {
  const instagramLink = "https://instagram.com/";
  const linkedinLink = "https://linkedin.com/company/";

  return (
    <footer className={styles["container-footer"]} id="footer">
      <div className={styles["container-left"]}>
        <div className={styles["copyright"]}>
          © Code Tech Junior – 2025 | Todos os direitos reservados | Política de
          Privacidade
        </div>
        <div className={styles["container-logo-codetech"]}>
          <img src={logoCodeTech} alt="Code Tech Jr Logo" />
          <div>CODE TECH JR</div>
        </div>
        <ul className={styles["container-logos-unesp"]} aria-label="Logos Unesp e parceiros">
          <li><img src={logoUnesp} alt="UNESP Logo" /></li>
          <li><img src={logoFc} alt="FC Bauru Logo" /></li>
          <li><img src={logoDco} alt="DCO Logo" /></li>
        </ul>
      </div>

      <div className={styles["container-right"]}>
        <h2 className={styles["info-titulo"]}>CONTATO</h2>
        
        <ul className={styles["container-info"]}>
          <li className={styles["info-block"]}>
            <img
              className={styles["info-block-image"]}
              src={iconLocation}
              alt="Localização"
            />
            <p className={styles["info-block-text"]}>
              Av. Eng. Luís Edmundo Carrijo Coube, 2085 - Nucleo Res. Pres.
              Geisel, Bauru - SP, 17033-360
            </p>
          </li>
          
          <li className={styles["info-block"]}>
            <img
              className={styles["info-block-image"]}
              src={iconInstagram}
              alt="Instagram"
            />
            <a
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles["info-block-text"]}
            >
              @INSTA
            </a>
          </li>
          
          <li className={styles["info-block"]}>
            <img
              className={styles["info-block-image"]}
              src={iconLinkedin}
              alt="LinkedIn"
            />
            <a
              href={linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles["info-block-text"]}
            >
              EJ
            </a>
          </li>
          
          <li className={styles["info-block"]}>
            <img
              className={styles["info-block-image"]}
              src={iconEmail}
              alt="Email"
            />
            <a
              href="mailto:CODETECHJR@gmail.com"
              className={styles["info-block-text"]}
            >
              CODETECHJR@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;