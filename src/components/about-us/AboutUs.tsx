import styles from "./AboutUs.module.css"
import Card from "./Card.tsx"

function AboutUs() {
    return(
        <div className={styles["container-about-us"]} id="aboutUs">  
            <div className={styles["about-us-container"]}>
                <Card 
                    imgSrc="src/assets/images/aboutUsPlaceHolder.png" 
                    title="SOBRE NÓS" 
                    text="A Code Tech Jr é a empresa júnior de Computação da UNESP Bauru. Nosso objetivo é oferecer soluções tecnológicas de qualidade por meio do desenvolvimento de sites profissionais, protótipos, modelos e sistemas personalizados, sempre alinhados às necessidades de cada cliente, além de oferecer uma consultoria singular.">
                </Card>
            </div>
        </div>
    )
}

export default AboutUs