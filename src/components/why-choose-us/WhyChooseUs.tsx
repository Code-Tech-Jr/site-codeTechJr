import global from "../../assets/styles/global.module.css"
import ContainerItens from "./ContainerItens"

import styles from "./WhyChooseUs.module.css"

function WhyChooseUs(){
    return (
        <div className={styles["container-why-choose-us"]}>
            <div className={styles["inner-container"]}>
                <h1 className={styles["why-choose-us-title"]}>Por que nos escolher?</h1>
                <div className={styles["items-container"]}>
                    <ContainerItens imgSrc={"src/assets/images/WhyChooseUs/qualidade.png"} text={"QUALIDADE"}/>
                    <ContainerItens imgSrc={"src/assets/images/WhyChooseUs/aprendizado.png"} text={"APRENDIZADO\nCONTÍNUO"}/>
                    <ContainerItens imgSrc={"src/assets/images/WhyChooseUs/custo-beneficio.png"} text={"CUSTO BENEFÍCIO"}/>
                </div>
            </div>
        </div>

    )
}

export default WhyChooseUs