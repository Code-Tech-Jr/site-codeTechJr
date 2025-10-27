import global from "../../assets/styles/global.module.css"
import ContainerItens from "./ContainerItens"

import styles from "./WhyChooseUs.module.css"

function WhyChooseUs(){
    return (
        <section 
            className={styles["container-why-choose-us"]}
            aria-labelledby="why-choose-us-title"
        >
            <div className={styles["inner-container"]}>
                <h2 id="why-choose-us-title" className={styles["why-choose-us-title"]}>
                    Por que nos escolher?
                </h2>

                <ul className={styles["items-container"]}>
                    <ContainerItens as="li" imgSrc={"src/assets/images/WhyChooseUs/qualidade.png"} text={"QUALIDADE"}/>
                    <ContainerItens as="li" imgSrc={"src/assets/images/WhyChooseUs/aprendizado.png"} text={"APRENDIZADO\nCONTÍNUO"}/>
                    <ContainerItens as="li" imgSrc={"src/assets/images/WhyChooseUs/custo-beneficio.png"} text={"CUSTO BENEFÍCIO"}/>
                </ul>
            </div>
        </section>

    )
}

export default WhyChooseUs