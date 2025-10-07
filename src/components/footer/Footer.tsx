import global from "../../assets/styles/global.module.css"
import styles from "./Footer.module.css"
import { useState, useEffect } from "react";

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    // Limpa o listener quando o componente for desmontado
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}


function Footer() {
    const width = useWindowWidth();

    if(width < 600)
    {
        return (
            <div className={styles["container-footer"]}>
                <div className={styles["copyright"]}>© Code Tech Junior – 2025 | Todos os direitos reservados | Política de Privacidade</div>
                <div className={styles["container-logo-codetech"]}>
                    <img src="src/assets/images/LogoEmpresaJr2.svg"></img>
                    <div>CODE TECH JR</div>
                </div>
                <div className={styles["container-info"]}>
                    <div className={styles["info-titulo"]}>CONTATO</div>
                    <div className={styles["info-block"]}>
                        <img className={styles["info-block-image"]}
                            src="src/assets/icons/localizationIcon.svg">
                        </img>
                        <div className={styles["info-block-text"]}>Av. Eng. Luís Edmundo Carrijo Coube, 2085 - Nucleo Res. Pres. Geisel, Bauru - SP, 17033-360</div>
                    </div>
                    <div className={styles["info-block"]}>
                        <img className={styles["info-block-image"]}
                            src="src/assets/icons/instagramIcon.svg">
                        </img>
                        <div className={styles["info-block-text"]}>@INSTA</div>
                    </div>
                    <div className={styles["info-block"]}>
                        <img className={styles["info-block-image"]}
                            src="src/assets/icons/linkedinIcon.svg">
                        </img>
                        <div className={styles["info-block-text"]}>EJ</div>
                    </div>
                    <div className={styles["info-block"]}>
                        <img className={styles["info-block-image"]}
                            src="src/assets/icons/emailIcon.svg">
                        </img>
                        <div className={styles["info-block-text"]}>CODETECHJR@gmail.com</div>
                    </div>
                </div>
                <div className={styles["container-logos-unesp"]}>
                    <img src="src/assets/images/logoUnesp.svg"></img>
                    <img src="src/assets/images/logoFc.svg"></img>
                    <img src="src/assets/images/logoDco.svg"></img>
                </div>
            </div>
        )
    }

    else if(width < 1024)
    {
        return (
            <div className={styles["container-footer"]}>
                <div className={styles["copyright"]}>© Code Tech Junior – 2025 | Todos os direitos reservados | Política de Privacidade</div>
                <div className={styles["container-central"]}>
                    <div className={styles["container-logo-codetech"]}>
                        <img src="src/assets/images/LogoEmpresaJr2.svg"></img>
                        <div>CODE TECH JR</div>
                    </div>
                    <div className={styles["container-info"]}>
                        <div className={styles["info-titulo"]}>CONTATO</div>
                        <div className={styles["info-block"]}>
                            <img className={styles["info-block-image"]}
                                src="src/assets/icons/localizationIcon.svg">
                            </img>
                            <div className={styles["info-block-text"]}>Av. Eng. Luís Edmundo Carrijo Coube, 2085 - Nucleo Res. Pres. Geisel, Bauru - SP, 17033-360</div>
                        </div>
                        <div className={styles["info-block"]}>
                            <img className={styles["info-block-image"]}
                                src="src/assets/icons/instagramIcon.svg">
                            </img>
                            <div className={styles["info-block-text"]}>@INSTA</div>
                        </div>
                        <div className={styles["info-block"]}>
                            <img className={styles["info-block-image"]}
                                src="src/assets/icons/linkedinIcon.svg">
                            </img>
                            <div className={styles["info-block-text"]}>EJ</div>
                        </div>
                        <div className={styles["info-block"]}>
                            <img className={styles["info-block-image"]}
                                src="src/assets/icons/emailIcon.svg">
                            </img>
                            <div className={styles["info-block-text"]}>CODETECHJR@gmail.com</div>
                        </div>
                    </div>
                </div>
                <div className={styles["container-logos-unesp"]}>
                    <img src="src/assets/images/logoUnesp.svg"></img>
                    <img src="src/assets/images/logoFc.svg"></img>
                    <img src="src/assets/images/logoDco.svg"></img>
                </div>
            </div>
        )
    }
    else
    {
        return (
            <div className={styles["container-footer"]}>
                <div className={styles["container-left"]}>
                    <div className={styles["copyright"]}>© Code Tech Junior – 2025 | Todos os direitos reservados | Política de Privacidade</div>
                    <div className={styles["container-logo-codetech"]}>
                        <img src="src/assets/images/LogoEmpresaJr2.svg"></img>
                        <div>CODE TECH JR</div>
                    </div>
                    <div className={styles["container-logos-unesp"]}>
                        <img src="src/assets/images/logoUnesp.svg"></img>
                        <img src="src/assets/images/logoFc.svg"></img>
                        <img src="src/assets/images/logoDco.svg"></img>
                    </div>
                </div>
                <div className={styles["container-right"]}>
                    <div className={styles["container-info"]}>
                        <div className={styles["info-titulo"]}>CONTATO</div>
                        <div className={styles["info-block"]}>
                            <img className={styles["info-block-image"]}
                                src="src/assets/icons/localizationIcon.svg">
                            </img>
                            <div className={styles["info-block-text"]}>Av. Eng. Luís Edmundo Carrijo Coube, 2085 - Nucleo Res. Pres. Geisel, Bauru - SP, 17033-360</div>
                        </div>
                        <div className={styles["info-block"]}>
                            <img className={styles["info-block-image"]}
                                src="src/assets/icons/instagramIcon.svg">
                            </img>
                            <div className={styles["info-block-text"]}>@INSTA</div>
                        </div>
                        <div className={styles["info-block"]}>
                            <img className={styles["info-block-image"]}
                                src="src/assets/icons/linkedinIcon.svg">
                            </img>
                            <div className={styles["info-block-text"]}>EJ</div>
                        </div>
                        <div className={styles["info-block"]}>
                            <img className={styles["info-block-image"]}
                                src="src/assets/icons/emailIcon.svg">
                            </img>
                            <div className={styles["info-block-text"]}>CODETECHJR@gmail.com</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }



}

export default Footer