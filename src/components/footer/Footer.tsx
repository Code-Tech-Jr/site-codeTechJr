import global from "../../assets/styles/global.module.css"
import styles from "./Footer.module.css"

function Footer() {
    return (
        <div className={styles["container-footer"]}>
            <div className={styles["container-logos"]}>
                <div className={styles["container-logo-codetech"]}>
                    <img className = {styles["logo-empresa-jr"]}src="src/assets/images/logoEmpresaJr.svg"></img>
                    <div className={styles["logo-text"]}>CODE TECH JR</div>
                </div>
                <div className={styles["container-logos-unesp"]}>
                    <img src="src/assets/images/logoUnesp.svg" className={styles["logo-unesp-footer"]}></img>
                    <img src="src/assets/images/logoFc.svg" className={styles["logo-fc-footer"]}></img>
                    <img src="src/assets/images/logoDco.svg" className={styles["logo-dco-footer"]}></img>
                </div>
            </div>
            <div className={styles["container-info"]}>
                <div className={styles["contato-text"]}>Contato</div>
                <div className={styles["info-block"]}>
                    <img className={styles["info-block-image"]} src="src/assets/icons/localizationIcon.svg"></img>
                    <div className={`${styles["info-text"]} ${styles.end}` }>Av. Eng. Luís Edmundo Carrijo Coube, 2085 - Nucleo Res. Pres. Geisel, Bauru - SP, 17033-360</div>
                </div>
                <div className={styles["info-block"]}>
                    <img className={styles["info-block-image"]} src="src/assets/icons/emailIcon.svg"></img>
                    <div className={styles["info-text"]}>CodeTechJr@gmail.com.br</div>
                </div>
                <div className={styles["info-block"]}>
                    <img className={styles["info-block-image"]} src="src/assets/icons/instagramIcon.svg"></img>
                    <div className={styles["info-text"]}>Instagram</div>
                </div>
                <div className={styles["info-block"]}>
                    <img className={styles["info-block-image"]} src="src/assets/icons/linkedinIcon.svg"></img>
                    <div className={styles["info-text"]}>Linkedin</div>
                </div>
            </div>
        </div>
    )
}

export default Footer